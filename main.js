const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')) {
        document.querySelector('#headshot').src = 'images/darkheadshot.jpeg'
        document.querySelector('path').setAttribute("fill", "#bdbddd")
        document.querySelector('.fa-github').style.color = 'rgb(97,99, 103)'
        document.querySelector('.fa-twitter').style.color = 'rgb(97,99, 103)'
        document.querySelector('.fa-linkedin').style.color = 'rgb(97,99, 103)'
        document.querySelector('h1').style.color = 'rgb(147,161, 212)'
        document.querySelectorAll('.email').style.background = '#bdbddd'
        document.querySelector('button').style.border = '1.5px solid #bdbddd'
        document.querySelector('button').classList.toggle('darkbutton:hover')
        document.querySelector('svg').style.color = "#bdbddd"
    } else {
        document.querySelector('#headshot').src = 'images/headshot.JPG'
        document.querySelector('path').setAttribute("fill", "#292C35")
        document.querySelector('.fa-github').style.color = '#292C35'
        document.querySelector('.fa-twitter').style.color = 'rgb(73, 155, 233)'
        document.querySelector('.fa-linkedin').style.color = 'rgb(44, 102, 188)'
        document.querySelector('h1').style.color = '#292C35'
        document.querySelector('button').style.border = '1.5px solid #292C35'
    }
    
})

const burger = document.querySelector('#burger')

burger.addEventListener('mousedown', () => {
    document.querySelector('.menu').classList.remove('mobile-display')
})

const body = document.querySelector('main')

body.addEventListener('click', () => {
    document.querySelector('.menu').classList.add('mobile-display')
})