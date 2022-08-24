const checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')) {
        document.querySelector('#headshot').src = 'images/darkheadshot.JPG'
        document.querySelector('path').setAttribute("fill", "#bdbddd")
    } else {
        document.querySelector('#headshot').src = 'images/headshot.JPG'
        document.querySelector('path').setAttribute("fill", "#292C35")
    }
    
})

const burger = document.getElementById('burger')

burger.addEventListener('click', () => {

})

