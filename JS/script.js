/* ***********************typing animation********************* */
var typed = new Typed(".typing", {
    strings : ["", "Web Developer", "Software Developer"],
    typeSpeed:100,
    BackSpeed:50,
    loop:true
})

/* *********************** Aside ********************* */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section")
    totalSection = allSection.length

    for(let i = 0; i < totalNavList; i++) {
        
        const a = navList[i].querySelector('a')
        a.addEventListener("click", function() {
           removeBackSection();

            for(let j = 0; j < totalNavList; j++) {
                if(navList[j].querySelector("a").classList.contains("active")) {
                    addBackSection(j)
                    // allSection[j].classList.add("back-section")
                }
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
            showSection(this);

            if(window.innerWidth < 1200) {
                asideSectionTooglerBtn()
            }
        })
    
    }

    function removeBackSection() {
        for(let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section")
        }
    }

    function addBackSection(num) {
        allSection[num].classList.add("back-section")
    }

    function showSection(element) {
        // console.log(element);
        for(let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }

    function updateNav(element) {
        for(let i = 0; i < totalNavList; i++) {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                navList[i].querySelector("a").classList.add("active")
            }
        }
    }

    const btnHire = document.querySelector(".hire-me")
    btnHire.addEventListener("click", function() {
        // console.log(this);
        const sectionIndex = this.getAttribute("data-section-index");
        // console.log(sectionIndex);
        showSection(this)
        updateNav(this)
        removeBackSection();
        addBackSection(sectionIndex);
    })

    const navTooglerBtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside");

          navTooglerBtn.addEventListener("click", () => {
            asideSectionTooglerBtn();
          })

          function asideSectionTooglerBtn() {
            aside.classList.toggle("open")
            navTooglerBtn.classList.toggle("open")

            for(let i = 0; i < totalSection; i++) {
                allSection[i].classList.toggle("open")
            }
          }

        //   show extra para in Home section
        const showMore = document.querySelector(".show-more")
        showMore.addEventListener('click', function() {
           
        const extraContent = document.getElementById("extra-content");

            if(extraContent.classList.contains('hidden')) {
                extraContent.classList.remove('hidden')
                this.textContent = 'show less';
                
            } else {
                extraContent.classList.add("hidden")
                this.textContent = 'show more';
            }
        })

       