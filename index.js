// Initialize EmailJS with your User ID (replace with your actual User ID from EmailJS)
emailjs.init("OCc5blfQp_1HxCePR");

// Hamburger menu functionality
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close');
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active');
  } else {
    smallMenu.classList.add('header__sm-menu--active');
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  } else {
    headerHamMenuBtn.classList.add('d-none');
    headerHamMenuCloseBtn.classList.remove('d-none');
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
  });
}

// Logo click to redirect to index.html
const headerLogoConatiner = document.querySelector('.header__logo-container');
headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html';
});

// Contact form submission with EmailJS
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  // Collect form data and map to EmailJS template variables
  const formData = {
    from_name: document.getElementById('name').value, // Sender's name
    reply_to: document.getElementById('email').value, // Sender's email (for replying)
    message: document.getElementById('message').value, // Sender's message
  };

  // Send email using EmailJS (replace with your actual Service ID and Template ID)
  emailjs.send('service_7qq9z21', 'template_df0aukh', formData)
    .then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset(); // Reset form after success
      },
      function (error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      }
    );
});