import React from 'react';

// function used to prevent onclick default / appendChild elements 
const makeComment = (e) => {

// grabbing elements to place into innerHTML
  e.preventDefault();
  let container = document.querySelector('.comment-section');
  let name = document.querySelector('#cmnt-name');
  let post = document.querySelector('#cmnt-post');
  let li = document.createElement('li');
  let date = new Date();
  li.innerHTML = `<div class="comment-div"><h4>${name.value}</h4> <h4>${date}</h4> <br /> <p>${post.value}</p></div>`;

  // light restiction on forms
  if (name.value.length < 2 || post.value.length < 10 || post.value.length > 100) {
    alert('Name or Comment invalid')
    return;
  } else container.appendChild(li);
  name.value = '';
  post.value = '';
}

const ImageDetail = ({ image }) => {
  if (!image || image.length < 3) {
    return <div id="selected-img"><h2>No results...</h2><img id="img-display" src='./../../images/no-results.png' /></div>
  }

  let imgUrl = image.images[0].link;
    return (
    <div id="selected-img">
        <img id="img-display" src={ imgUrl } />
        <h2 id="selected-image-title">{ image.title }</h2>
      <div className="comment-section">
      </div>
      <div className="comment-form">
        <form>
          <input id="cmnt-name" type="text" placeholder="Name" />
          <input id="cmnt-post" type="text" placeholder="Comment" />
          <input id="submit-button" type="submit" onClick={ makeComment } />
        </form>
      </div>
    </div>
    )
};

export default ImageDetail;