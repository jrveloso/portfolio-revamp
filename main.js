const checkbox = document.getElementById('checkbox')
const burger = document.querySelector('#burger')
const x = document.querySelector('.MuiSvgIcon-root')
const link = document.querySelectorAll('.link')

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')) {
        document.querySelector('#headshot').src = 'images/darkheadshot.jpeg'
        document.querySelector('.menu').style.background = '#292C35'
        document.querySelector('.MuiSvgIcon-root').style.fill = '#bdbddd'
        document.querySelector('path').setAttribute("fill", "#bdbddd")
        document.querySelector('.fa-github').style.color = 'rgb(97,99, 103)'
        document.querySelector('.fa-twitter').style.color = 'rgb(97,99, 103)'
        document.querySelector('.fa-linkedin').style.color = 'rgb(97,99, 103)'
        document.querySelector('h1').style.color = 'rgb(147,161, 212)'
        document.querySelectorAll('.email').style.background = '#bdbddd'
        document.querySelector('button').style.border = '1.5px solid #bdbddd'
        document.querySelector('button').classList.toggle('darkbutton:hover')
    } else {
        document.querySelector('#headshot').src = 'images/headshot.JPG'
        document.querySelector('.menu').style.background = '#fcfcfc'
        document.querySelector('path').setAttribute("fill", "#292C35")
        document.querySelector('.fa-github').style.color = '#292C35'
        document.querySelector('.fa-twitter').style.color = 'rgb(73, 155, 233)'
        document.querySelector('.fa-linkedin').style.color = 'rgb(44, 102, 188'
        document.querySelector('h1').style.color = '#292C35'
        document.querySelector('button').style.border = '1.5px solid #8b8b8b'
        document.querySelector('.MuiSvgIcon-root').style.fill = '#292C35'
    }
    
})

burger.addEventListener('mousedown', () => {
    document.querySelector('.menu').classList.remove('mobile-display')
})

x.addEventListener('click', () => {
        document.querySelector('.menu').classList.add('mobile-display')
})

link.forEach( li => { 
    li.addEventListener('click', () => {
        document.querySelector('.menu').classList.add('mobile-display')
    })
})

window.addEventListener('scroll', reveal)

function reveal(){
	let reveals = document.querySelectorAll('.reveal')

	for(let i = 0; i < reveals.length; i++) {
		let windowheight = window.innerHeight
		let revealtop = reveals[i].getBoundingClientRect().top
		let revealpoint = 150

		if(revealtop < windowheight - revealpoint) {
			reveals[i].classList.add('active')
		} else {
			reveals[i].classList.remove('active')
		}
	}
}