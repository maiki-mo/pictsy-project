import React from 'react';

const makeComment = (e) => {
  e.preventDefault();
  let container = document.querySelector('.comment-section');
  let name = document.querySelector('#cmntName');
  let post = document.querySelector('#cmntPost');
  let li = document.createElement('p');
  let liText = document.createTextNode(`${name.value}: ${post.value}`);
  li.appendChild(liText);

  if (name.value.length < 2 || post.value.length < 10) {
    alert('Name or Comment not long enough')
  } else container.appendChild(li);
  name.value = '';
  post.value = '';
}

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>No results...</div>
  }

  if (video.length < 5) {
    return <div>Not enough matches.  Try again.</div>
  }
  
  let imgUrl = video.images[0].link;
    return (
    <div id="selected-img">
      <div id="img-title">
        <h2>{ video.title }</h2>
      </div>
      <div className="embed-responsive embed-responsive-16by9">
        <img id="img-display" className="embed-responsive-item" src={ imgUrl } />
      </div>
      <div className="comment-section">
      </div>
      <div className="comment-form">
        <form>
          <input id="cmntName" type="text" placeholder="Name" style={{ width: "100px", marginLeft: '50px', marginRight: '40px' }}/>
          <input id="cmntPost" type="text" placeholder="Comment" style={{ width: "400px", marginRight: '40px' }}/>
          <input type="submit" onClick={ makeComment } style={{ width: '100px' }} />
        </form>
      </div>
    </div>
    )
};

export default VideoDetail;