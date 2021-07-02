/*===== SHOW MENU =====*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
  if(toggle && nav) {
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show-menu')
      })
  }
}
  showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navlink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click',linkAction))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}
window.addEventListener('scroll',scrollActive)



/*===== CHANGE BACKGROUND HEADER =====*/ 

function scrollHeader(){
   const header = document.getElementById('header')
   if(this.scrollY >= 800) header.classList.add('scroll-header');
   else   header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader)

/*===== SHOW SCROLL TOP =====*/ 

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560)  scrollTop.classList.add('show-scroll');
    else  scrollTop.classList.remove('show-scroll');
 
 }
 window.addEventListener('scroll',scrollTop)

/*===== MIXITUP FILTER PORTFOLIO =====*/ 


var pagination = $('.pagination');

function setPagination(){
	 pagination.jPages({
     containerID: 'Container',
     previous : "←",
     next : "→",
     perPage: 3,
     startPage: 1,
     startRange: 1,
     midRange: 3,
     endRange: 1,
     first: false,
     last: false
   });
}

function destroyPagination() {
  pagination.jPages('destroy');
};

setPagination();


const mixer =  mixitup('.portfolio-container',{
    selectors: {
        target: '.portfolio-content'
    },
    animation: {
        duration: 400
    } 
})


/* Link active portfolio */ 
const linkPortfolio = document.querySelectorAll('.portfolio-item')

function ActivePortfolio() {
    if(linkPortfolio){
        linkPortfolio.forEach(l  => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click',ActivePortfolio))

/*===== SWIPER CAROUSEL =====*/ 
const mySwiper = new Swiper('.testimonial-container', {
    // Optional parameters
   spaceBetween: 16,
    loop: true,
    grabCursor: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    }
})
    

/*===== GSAP ANIMATION =====*/ 
gsap.from('.home-img',{opacity: 0, duration: 2, delay: .5, x:60 })
gsap.from('.home-data',{opacity: 0, duration: 2, delay: .8, y:25 })
gsap.from('.home-greeting, .home-name, .home-profession,.home-profession2,.home-button',{opacity: 0, duration: 2, delay:1, y:25, ease: 'expo.out', stagger: .2 })
gsap.from('.nav-logo, .nav-toggle',{opacity: 0, duration: 2, delay:1.25, y:25, ease: 'expo.out', stagger: .2 })
gsap.from('.nav-item',{opacity: 0, duration: 2, delay:1.8, y:25, ease: 'expo.out', stagger: .2 })
gsap.from('.home-social-icon',{opacity: 0, duration: 2, delay:2.5, y:25, ease: 'expo.out', stagger: .2 })

/*===== Form validation =====*/ 

/* function validate(){  
const name=document.f1.name.value; 
const projects=document.f1.projects.value; 
const x=document.f1.email.value;  
const atposition=x.indexOf("@");  
const dotposition=x.lastIndexOf(".");  
const phone=document.f1.projects.value; 
let status=false;  
  
if(name.length<1){  
document.getElementById("nameloc").innerHTML=  
" Please enter your name";  
status=false;  
}
  

if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    document.getElementById("emailloc").innerHTML= ("Please enter a valid e-mail address");  
    status=false; 
  }


 if (projects.length<5){  
    document.getElementById("projectsloc").innerHTML= ("Please enter your Projects");  
    status=false; 
  }
  
  if(phone.length<1){  
     document.getElementById("phoneloc").innerHTML= ("Please enter your Phone");  
     status=false; 
   } 
 else{
     alert("You Have Been Send Your Messege To Me. Thank You" + " " + name + "!")
     window.location.reload();
 } 


return status;  
}  
*/

function validate(){
    const nameF=document.f1.name.value; 
    if(nameForm() && emailForm() && projectsForm() && phoneForm())
    {
        alert("You Have Been Send Your Message To Me. Thank You" + " " + nameF + "! :)")
     window.location.reload();
        return true;
    }
    else {
        document.getElementById('validation').innerHTML = 'Validation failed!';
        return false;
    }
   }


function nameForm(){
    const name=document.f1.name.value; 
    const illegalChars = /\W/; // allow letters, numbers, and underscores
 
    if ((name.length < 5) || (name.length > 15)) { 
        document.getElementById("nameloc").innerHTML=  
        "<i class='bx bx-x red'></i>"; 
		return false;
 
    } else if (illegalChars.test(name)) {
        error = "The username contains illegal characters.\n";
        document.getElementById("nameloc").innerHTML=  
        "<i class='bx bx-x red'></i>"; 
		return false;
  }
  else{
    document.getElementById("nameloc").innerHTML=  
    "<i class='bx bx-check green'></i>"; 
    return(true);
  }   
}

function projectsForm(){
    const projects=document.f1.projects.value; 
    if (projects.length<5){  
        document.getElementById("projectsloc").innerHTML= ("<i class='bx bx-x red'></i>");  
        return false; 
      }
      else{
        document.getElementById("projectsloc").innerHTML=  
        "<i class='bx bx-check green'></i>"; 
        return(true);
    }     
}

function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return re.test(input_str);
}   

function phoneForm(){
    const phone=document.f1.phone.value; 
    if((!validatePhoneNumber(phone))){  
        document.getElementById("phoneloc").innerHTML= ("<i class='bx bx-x red'></i>");  
        return false;
      } 
      else{
        document.getElementById("phoneloc").innerHTML=  
        "<i class='bx bx-check green'></i>"; 
        return(true);
    }     
}


function emailForm(){
const x=document.f1.email.value;  
const atposition=x.indexOf("@");  
const dotposition=x.lastIndexOf(".");  
const phone=document.f1.projects.value;

if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    document.getElementById("emailloc").innerHTML= ("<i class='bx bx-x red'></i>");  
    return false; 
  }
  else{
    document.getElementById("emailloc").innerHTML=  
    "<i class='bx bx-check green'></i>"; 
    return(true);
  } 
}


// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

var closeModal = function(event) {
    if (event.target == modal) {
       modal.style.display = "none";
    }
  }
  
  window.addEventListener('click', closeModal);
  window.addEventListener('touchend', closeModal);
  


