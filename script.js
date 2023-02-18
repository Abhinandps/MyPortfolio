


// --------------Toggle NavBar---------------

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",()=>{
    hideSection();
    toggleNavBar();
    document.body.classList.toggle("hide-scrolling");
});


function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavBar(){
    document.querySelector(".header").classList.toggle("active");
}



// Active Sections

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        if(e.target.classList.contains("nav-item")){
            toggleNavBar();
        }
        else{
            hideSection();
            document.body.classList.toggle("hide-scrolling");
           
        }
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling"); 
        },1)
    }
});



// -------------- About Tabs ------------- 

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");


tabsContainer.addEventListener("click", (e)=>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const target = e.target.getAttribute("data-target");
        console.log(target);
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
})



