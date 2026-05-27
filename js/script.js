       document.addEventListener('DOMContentLoaded', function() {
            
            const navbar = document.querySelector('.navbar');

            function handleScroll() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }

            window.addEventListener('scroll', handleScroll);

        });
        const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
// CONTACT FORM VALIDATION

const form = document.getElementById("contactForm");

if(form){

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    const formMessage = document.getElementById("formMessage");
    const submitBtn = document.getElementById("submitBtn");

    form.addEventListener("submit", function(e){

        e.preventDefault();

        let valid = true;

        // CLEAR ERRORS
        document.querySelectorAll(".input-group").forEach(group=>{
            group.classList.remove("error","success");
        });

        document.querySelectorAll(".error").forEach(error=>{
            error.innerText = "";
        });

        // NAME
        if(name.value.trim() === ""){
            showError(name,"Name is required");
            valid = false;
        }else{
            showSuccess(name);
        }

        // EMAIL
        if(email.value.trim() === ""){
            showError(email,"Email is required");
            valid = false;
        }else if(!validateEmail(email.value)){
            showError(email,"Enter a valid email");
            valid = false;
        }else{
            showSuccess(email);
        }

        // PHONE
        if(phone.value.trim() === ""){
            showError(phone,"Phone number is required");
            valid = false;
        }else if(phone.value.length < 10){
            showError(phone,"Phone number too short");
            valid = false;
        }else{
            showSuccess(phone);
        }

        // MESSAGE
        if(message.value.trim() === ""){
            showError(message,"Message cannot be empty");
            valid = false;
        }else{
            showSuccess(message);
        }

        // SUCCESS
        if(valid){

            submitBtn.classList.add("loading");
            submitBtn.innerHTML = "Sending...";

            setTimeout(()=>{

                formMessage.style.color = "green";
                formMessage.innerHTML =
                "✅ Message sent successfully!";

                form.reset();

                submitBtn.classList.remove("loading");
                submitBtn.innerHTML = "Send Message";

                document.querySelectorAll(".input-group").forEach(group=>{
                    group.classList.remove("success");
                });

            },2000);
        }

    });

    function showError(input,message){

        const group = input.parentElement;

        group.classList.add("error");

        group.querySelector(".error").innerText = message;
    }

    function showSuccess(input){

        const group = input.parentElement;

        group.classList.add("success");
    }

    function validateEmail(email){

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    }

}