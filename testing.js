

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




       function splitWords() {
            let quote = document.querySelector("blockquote q"),
            quotewords = quote.innerText.split(" "),
            wordCount = quotewords.length;
            quote.innerHTML = "";
            for (let i=0; i < wordCount; i++) {
              quote.innerHTML += "<span>"+quotewords[i]+"</span>";
              if (i < quotewords.length - 1) {
                quote.innerHTML += " ";
              }
            }
            quotewords = document.querySelectorAll("blockquote q span");
            fadeWords(quotewords);
          }
          function getRandom(min, max) {
            return Math.random() * (max - min) + min;
          }
          function fadeWords(quotewords) {
            Array.prototype.forEach.call(quotewords, function(word) {
              let animate = word.animate([{
                opacity: 0,
                filter: "blur("+getRandom(2,5)+"px)"
              }, {
                opacity: 1,
                filter: "blur(0px)"
              }], 
              { 
                duration: 1000,
                delay: getRandom(500,3300),
                fill: "forwards"
              } 
             )
            })
          }

          splitWords();