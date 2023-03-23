
        const theBody = document.querySelector('body');
        const openNav = document.querySelector('.menu-bar button');
        const closeNav = document.querySelector('.close-nav button');
        const Navbar = document.querySelector('.navbar');

        // function bodyScroll(){
        //     if(Navbar.classList.contains('show')){
        //         theBody.classList.add('hide-scroll');
        //     }
        //     else if(theBody.classList.contains('hide-scroll')){
        //         theBody.classList.remove('hide-scroll');
        //     }
        // }

        function showHide(){
            Navbar.classList.toggle('show');
            // bodyScroll();
        }

        openNav.onclick = showHide;
        closeNav.onclick = showHide;



const words = document.getElementsByTagName('span')
const cite = document.getElementsByTagName('cite')

const animate = () => {
  let maxDelay = 0
  let maxDuration = 0

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const duration = (word.dataset.duration)
    const delay = (word.dataset.delay)
    const blur = word.dataset.blur

    maxDelay = Math.max(delay, maxDelay)
    maxDuration = Math.max(duration, maxDuration)
    
    TweenLite.set(word, {
      'webkitFilter': `blur(${blur}px)`
    })
    TweenLite.set(word, {
      className:"+=animate",
      transition: `all ${duration}s ease-in ${delay}s`
    })
  }
  
  TweenLite.set(cite, {
    className:"+=animate",
    transition: `all ${maxDuration}s ease-in ${maxDelay}s`
  })
  
  TweenLite.delayedCall((maxDuration + maxDelay), () => {
    const baseDelay = 3
    TweenLite.set(words, { className:"-=animate", delay: baseDelay });
    TweenLite.set(cite, { className:"-=animate", delay: (baseDelay) });
    TweenLite.delayedCall((baseDelay + (maxDuration*2)), animate)
  })
}

animate()