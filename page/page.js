let headerNavMenu = document.querySelector('.nav__menu');
let headerNavLine = document.querySelector('.nav__line');
let headerList = document.querySelector('.faq');
let headerList2 = document.querySelector('.faq2');
let headerList3 = document.querySelector('.faq3');
let headerList4 = document.querySelector('.faq4');
let headerList5 = document.querySelector('.btn-btn-jsbtn')
let headerList6 = document.querySelector('.nav_form')

headerNavLine.addEventListener('click', function (e) {
   this.classList.toggle('active');
   headerList.classList.toggle('active');
   headerList2.classList.toggle('active');
   headerList3.classList.toggle('active');
   headerList4.classList.toggle('active');
   headerList5.classList.toggle('active');
   headerList6.classList.toggle('active');
   headerNavMenu.classList.toggle('active');
})

class Paralax {
    constructor(obj) {
        this.gameSection = document.querySelector(obj.gameSec)
        this.gameImage = this.gameSection.querySelector('.game__img')
        this.gameTitle = this.gameSection.querySelector('.game__desc-title')
        this.gameTxt = this.gameSection.querySelector('.game__desc-txt')
        this.gameLinks = this.gameSection.querySelector('.game__links')
        this.gameLink = this.gameSection.querySelector('.game__links-link')

        window.addEventListener('scroll', () => {
            if(pageYOffset >= (this.gameSection.offsetTop - this.gameSection.offsetHeight)){
                this.gameImage.style.transform = 'translateX(0%)'
                this.gameTitle.style.transform = 'translateX(0%)'
                this.gameTxt.style.transform = 'translateX(0%)'
                this.gameLinks.style.transform = 'translateX(0%)'
                this.gameLink.style.transform = 'translateX(0%)'
            }
        })
    }
}


const game = new Paralax({
    gameSec: '.game'
})