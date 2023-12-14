   // JavaScript for typing effects
var typed = new Typed(".text", {
    strings:["Frontend Developer", "Web Developer", "Computer Engineer", "UI/UX Designer"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true
})

//Header animation
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector('header');

window.onscroll = function () {
const currentScrollPos = window.pageYOffset;

if (prevScrollPos > currentScrollPos) {
    navbar.style.top = '0';
} else {
    navbar.style.top = '-70px';
}
prevScrollPos = currentScrollPos;
};

   // Javascript for Navbar toggle menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Load Email.js library
emailjs.init("wZXUKDlO71m8rAUTSzri6");
// Function to send email
function sendEmail(e) {
e.preventDefault();
// Get form data
const form = document.getElementById("contactForm");
const data = new FormData(form);
// Send email
emailjs.sendForm("service_6n08all", "template_pnuobxn", data)
.then(
    function(response) {
        console.log("Email sent successfully:", response);
        alert("Email sent successfully!");
    },
    function(error) {
        console.log("Email sending failed:", error);
        alert("Email sending failed. Please try again later.");
        }
    );
}
   // Attach the sendEmail function to the form's submit event
document.getElementById("contactForm").addEventListener("submit", sendEmail);


// Skills menu 
function changeContent(page) {
    var contentDiv = document.getElementById('content');

    // Remove existing content
    contentDiv.innerHTML = '';

    // Create a new div for the page content
    var pageContentDiv = document.createElement('div');
    pageContentDiv.id = page + 'Content';  // Use a unique ID for each page

    // Remove the 'active' class from all menu items
    var menuItems = document.querySelectorAll('nav a');
    menuItems.forEach(item => item.classList.remove('active'));

    switch (page) {
        case 'design':
            pageContentDiv.innerHTML = `
            <div class="skills-content-image" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                <div class="skill-box">
                    <img src="image/adobe.png" alt="Photoshop Logo">
                    <p>Photoshop</p>
                </div>
                <div class="skill-box">
                    <img src="image/figma-logo.png" alt="Figma Logo">
                    <p>Figma</p>
                </div>
            </div>
            `;
            break;
        case 'frontend':
            pageContentDiv.innerHTML = `
            <div class="skills-content-image" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                <div class="skill-box">
                    <img src="image/html-logo.png" alt="HTML Logo">
                    <p>HTML</p>
                </div>
                <div class="skill-box">
                    <img src="image/css-logo.png" alt="CSS Logo">
                    <p>CSS</p>
                </div>
                <div class="skill-box">
                    <img src="image/js-logo.png" alt="JavaScript Logo">
                    <p>JavaScript</p>
                </div>
                <div class="skill-box">
                    <img src="image/php-logo.png" alt="PHP Logo">
                    <p>PHP</p>
                </div>
                <div class="skill-box">
                    <img src="image/react-logo.png" alt="React Logo">
                    <p>React</p>
                </div>
                <div class="skill-box">
                    <img src="image/bootstrap.png" alt="Bootstrap Logo">
                    <p>Bootstrap</p>
                </div>
            </div>
            `;
            break;
        case 'others':
            pageContentDiv.innerHTML = `
                <div class="skills-content-image" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                    <div class="skill-box">
                        <img src="image/github-logo.png" alt="GitHub Logo">
                        <p>GitHub</p>
                    </div>
                    <div class="skill-box">
                        <img src="image/xml-logo.png" alt="XML Logo">
                        <p>XML</p>
                    </div>
                    <div class="skill-box">
                        <img src="image/java-logo.png" alt="Java Logo">
                        <p>Java</p>
                    </div>
                </div>
            `;
            break;
        default:
            pageContentDiv.innerHTML = `
            <div id="content" class="skills-content-image" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                <!-- Default content -->
                <div class="skill-box">
                    <img src="html-logo.png" alt="HTML Logo">
                    <p>HTML</p>
                </div>
                <div class="skill-box">
                    <img src="css-logo.png" alt="CSS Logo">
                    <p>CSS</p>
                </div>
                <div class="skill-box">
                    <img src="js-logo.png" alt="JavaScript Logo">
                    <p>JavaScript</p>
                </div>
                <div class="skill-box">
                    <img src="php-logo.png" alt="PHP Logo">
                    <p>PHP</p>
                </div>
                <div class="skill-box">
                    <img src="react-logo.png" alt="React Logo">
                    <p>React</p>
                </div>
                <div class="skill-box">
                    <img src="image/mysql-logo.png" alt="MySQL Logo">
                    <p>MySQL</p>
                </div>
                <div class="skill-box">
                    <img src="github-logo.png" alt="GitHub Logo">
                    <p>GitHub</p>
                </div>
                <div class="skill-box">
                    <img src="xml-logo.png" alt="XML Logo">
                    <p>XML</p>
                </div>
                <div class="skill-box">
                    <img src="java-logo.png" alt="Java Logo">
                    <p>Java</p>
                </div>
                <div class="skill-box">
                    <img src="figma-logo.png" alt="Figma Logo">
                    <p>Figma</p>
                </div>
                <div class="skill-box">
                    <img src="bootstrap.png" alt="Bootstrap Logo">
                    <p>Bootstrap</p>
                </div>
                <div class="skill-box">
                    <img src="adobe.png" alt="Photoshop Logo">
                    <p>Photoshop</p>
                </div>
            </div>
        `;
    }

    // Append the new div to the content section
    contentDiv.appendChild(pageContentDiv);

    // Add the 'active' class to the clicked menu item
    if (clickedElement) {
        clickedElement.classList.add('active');
    }
}
