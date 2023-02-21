
//------------- Form Validation--------------



function validateName() {
    const name = document.querySelector("#name");
    const nameError = document.querySelector("#name-err");
    if (!name.value.match((/^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/)) ) {
        name.style.borderColor = "#e74c3c";
        nameError.innerHTML = "Please enter a valid name";
        return false;
    }
    else {
        name.style.borderColor = "transparent";
        nameError.innerHTML = "";
        return true;
    }
}




function validateEmail() {

    const email = document.querySelector("#email");
    const emailError = document.querySelector("#email-err");

    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        email.style.borderColor = "#e74c3c";
        emailError.innerHTML = "Please enter a valid Email";
        return false;
    }
    else {
        email.style.borderColor = "transparent";
        emailError.innerHTML = "";
        return true;
    }
}

function validateSubject() {


    const subject = document.querySelector("#subject");
    const subjectError = document.querySelector("#subject-err");

    let length = subject.value.length;
    if(length>20){
        subject.style.borderColor = "#e74c3c";
        subjectError.style.color="#e74c3c";
        subjectError.innerHTML ="Maximum Character";
        return false;
    }
    else if(!subject.value){
        subject.style.borderColor = "#e74c3c";
        subjectError.innerHTML ="Please enter subject";
    }
    else{
        subject.style.borderColor = "transparent";
        subjectError.style.color="#34495e";
        subjectError.innerHTML=  `${length}/20 (Max Character 20)`;
        return true;
    }



}

function validateMessage() {


    const message = document.querySelector("#message");
    const messageError = document.querySelector("#message-err");
    let length = message.value.length;
    if(length>100){
        message.style.borderColor = "#e74c3c";
        messageError.style.color="#e74c3c";
        messageError.innerHTML ="Maximum Character";
        return false;
    }
    else if(!message.value){
        message.style.borderColor = "#e74c3c";
        messageError.innerHTML ="Please enter message";
    }
    else{
        message.style.borderColor = "transparent";
        messageError.style.color="#34495e";
        messageError.innerHTML=  `${length}/100 (Max Character 100)`;
        return true;
    }

}












// --------------Toggle NavBar---------------

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavBar();
    document.body.classList.toggle("hide-scrolling");
});


function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavBar() {
    document.querySelector(".header").classList.toggle("active");
}



// Active Sections

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        if (e.target.classList.contains("nav-item")) {
            toggleNavBar();
        }
        else {
            hideSection();
            document.body.classList.toggle("hide-scrolling");

        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
        }, 1)
    }
});



// -------------- About Tabs ------------- 

const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");


tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const target = e.target.getAttribute("data-target");
        console.log(target);
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
})


