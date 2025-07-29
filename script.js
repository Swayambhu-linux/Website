const modal= document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal= document.querySelector( '.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.style.padding = '10px 0';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.padding = '20px 0';
      header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
  });
  
  // CTA Button animation
  const ctaButton = document.getElementById('cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        window.scrollTo({
          top: aboutSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  }
  
  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !message) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill in all fields.';
        return;
      }
      
      // In a real app, you would send this data to a server
      // For this demo, we'll just show a success message
      
      // Reset form
      contactForm.reset();
      
      // Show success message
      formMessage.style.color = 'green';
      formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        formMessage.textContent = '';
      }, 5000);
    });
  }
  
  // Animate service cards when they come into view
  const serviceCards = document.querySelectorAll('.service-card');
  
  // Simple intersection observer for animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  // Set initial styles and observe each card
  serviceCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});
