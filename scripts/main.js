let backChng = (setInterval) => {
  cont = document.querySelector('.container').style;
  rand = Math.ceil((Math.random() * 4));

  cont.backgroundImage = `url('./../images/backgrounds/background-${rand}.jpg')`
}

setInterval(backChng, 10000);
