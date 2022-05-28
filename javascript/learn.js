// Progress Bar:

  window.onscroll = function(){
    let position = document.documentElement.scrollTop;
    let calc_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scroll = position * 100 / calc_height;
  
    document.getElementById('progressbar').style.width = scroll + '%';
  }

// Back to Top: 


  const backtoTop = document.querySelector('#backtotop');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 900) {
      backtoTop.classList.add('active');
    } else {
      backtoTop.classList.remove('active');
    }
  })

  backtoTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });


// Scroll Arrows on Learn Page:

  const scrollarrows = document.getElementById('scrollindicator');
  
  scrollarrows.addEventListener('click', () => {
    window.scrollTo(0, 850);
  });
  

  