// ============ ABOUT ME PAGE ====================
let options = document.querySelectorAll('.tab-links');
for (let i=0; i < options.length; i++) {
  options[i].addEventListener('click', function(){

    let contents = document.querySelectorAll('.tab-contents');
    for (let i= 0; i < contents.length; i++) {
      options[i].classList.remove('active-link')
      console.log(options[i])
      if (contents[i].id == 'show'){
        contents[i].setAttribute('id', 'hide')
      }
      
    }

    let word = this.id
    
    document.querySelector('.' + word).setAttribute('id', 'show')
    this.classList.add('active-link')
    
  })
}

// ============ END OF ABOUT ME PAGE ====================


// ============ NAVBAR ===================

// Select button and links
const navBtn = document.getElementById('nav-toggle')
const links = document.getElementById('nav-links')

// Add event listener
navBtn.addEventListener('click',() => {
    links.classList.toggle('show-links');
})

// =========== END NAVBAR ===================

/* ======= SMOOTH SCROLL =========== */
/* Select links */
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        // prevent default
        e.preventDefault();
        links.classList.remove('show-links');

        const id = e.target.getAttribute('href').slice(1)
        const element = document.getElementById(id);

        let position = element.offsetTop - 62
        
        window.scrollTo({
            left:0,
            // top: element.offsetTop,
            top: position,
            behavior: "smooth"
        })
    });
})
/* ======= END SMOOTH SCROLL =========== */

// ============= PROJECTS =========================
const linkss = [
  'https://simonsays814.netlify.app/', 
  'https://backpacksite.netlify.app/', 
  'https://teawebsitebaconator.netlify.app/',
  'https://github.com/jigolaurito93/Snake-Game-Python',
  'https://github.com/jigolaurito93/Turtle-Race-Game-EventListener-Python',
  'https://github.com/jigolaurito93/Coffee-Machine-OOP-Python'
  ]
  
  let projects = document.querySelectorAll('.project-card');
  for (let i=0; i < projects.length; i++){
    projects[i].addEventListener('click', function direct(){
      for (let link of linkss){
        console.log(linkss[i])
        window.location.href = linkss[i];
      }
    })
  }
// ============= END PROJECTS =========================