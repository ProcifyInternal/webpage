// Procify Website JavaScript

// Initialize EmailJS
emailjs.init('g2H0rsuWTMGElTN0Z');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  initializeMobileMenu();
  initializeContactForm();
  initializeMouseEffects();
  initializeAutomationDashboard();
  setCurrentYear();
});

// Animate the automation dashboard
function initializeAutomationDashboard() {
  const activityFeed = document.getElementById('activityFeed');
  if (!activityFeed) return;
  
  const activities = [
    { text: 'Processing invoice INV-2024-001...', status: 'complete', icon: '✓', color: 'green' },
    { text: 'Syncing customer data to CRM...', status: 'processing', icon: '⟲', color: 'yellow' },
    { text: 'Email campaign sent (247 recipients)', status: 'complete', icon: '✓', color: 'green' },
    { text: 'Extracting data from PDF document...', status: 'processing', icon: '⟲', color: 'yellow' },
    { text: 'Updating spreadsheet with new entries', status: 'complete', icon: '✓', color: 'green' },
    { text: 'Validating supplier information...', status: 'processing', icon: '⟲', color: 'yellow' },
    { text: 'Report generated and sent to team', status: 'complete', icon: '✓', color: 'green' },
    { text: 'Processing expense report EXP-445...', status: 'complete', icon: '✓', color: 'green' },
    { text: 'Scheduling follow-up meetings...', status: 'processing', icon: '⟲', color: 'yellow' },
    { text: 'Converting leads to opportunities', status: 'complete', icon: '✓', color: 'green' }
  ];
  
  let currentIndex = 0;
  
  function updateActivity() {
    const items = activityFeed.children;
    
    // Fade out the oldest item
    if (items.length >= 3) {
      items[2].style.opacity = '0.2';
      setTimeout(() => {
        if (items.length >= 3) {
          const activity = activities[currentIndex % activities.length];
          const statusClass = activity.status === 'complete' ? 'green' : 'yellow';
          const dotColor = activity.status === 'complete' ? 'bg-green-400' : 'bg-yellow-400';
          const iconColor = activity.status === 'complete' ? 'text-green-400' : 'text-yellow-400';
          
          items[2].innerHTML = `
            <span class="h-1 w-1 rounded-full ${dotColor} flex-shrink-0"></span>
            <span class="text-neutral-400 truncate">${activity.text}</span>
            <span class="${iconColor} flex-shrink-0">${activity.icon}</span>
          `;
          items[2].style.opacity = '0.4';
          currentIndex++;
        }
      }, 300);
    }
    
    // Move items down
    for (let i = items.length - 1; i > 0; i--) {
      if (items[i-1]) {
        items[i].innerHTML = items[i-1].innerHTML;
        items[i].style.opacity = parseFloat(items[i-1].style.opacity || '0.8') * 0.7;
      }
    }
    
    // Add new item at the top
    if (items[0]) {
      const activity = activities[currentIndex % activities.length];
      const statusClass = activity.status === 'complete' ? 'green' : 'yellow';
      const dotColor = activity.status === 'complete' ? 'bg-green-400' : 'bg-yellow-400';
      const iconColor = activity.status === 'complete' ? 'text-green-400' : 'text-yellow-400';
      
      items[0].innerHTML = `
        <span class="h-1 w-1 rounded-full ${dotColor} flex-shrink-0"></span>
        <span class="text-neutral-400 truncate">${activity.text}</span>
        <span class="${iconColor} flex-shrink-0">${activity.icon}</span>
      `;
      items[0].style.opacity = '0.9';
      currentIndex++;
    }
  }
  
  // Update activity every 3 seconds
  setInterval(updateActivity, 3000);
  
  // Also animate the progress bars
  animateProgressBars();
}

function animateProgressBars() {
  const progressBars = document.querySelectorAll('.h-1.bg-green-400');
  
  progressBars.forEach((bar, index) => {
    setInterval(() => {
      const currentWidth = parseInt(bar.style.width) || (index === 0 ? 78 : 65);
      const variation = Math.random() * 10 - 5; // -5 to +5
      const newWidth = Math.max(50, Math.min(90, currentWidth + variation));
      bar.style.width = newWidth + '%';
    }, 2000 + index * 500);
  });
}

// Mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }
}

// Contact form handling with EmailJS
function initializeContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // Simple validation
      if (!name || !email || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
      }
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Prepare template parameters
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };
      
      // Send email using EmailJS
      emailjs.send('service_nqoh68p', 'template_ursa1la', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          showSuccessModal(name);
          form.reset();
        })
        .catch(function(error) {
          console.log('FAILED...', error);
          showNotification('Sorry, there was an error sending your message. Please try again or contact us directly at team@procify.co', 'error');
        })
        .finally(function() {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }
}

// Custom success modal
function showSuccessModal(name) {
  // Create modal backdrop
  const backdrop = document.createElement('div');
  backdrop.className = 'fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4';
  
  // Create modal content
  const modal = document.createElement('div');
  modal.className = 'bg-neutral-900 border border-green-500/30 rounded-2xl p-8 max-w-md w-full mx-auto shadow-[0_0_40px_rgba(34,197,94,0.25)] animate-fade-in';
  
  modal.innerHTML = `
    <div class="text-center">
      <div class="mb-4">
        <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
        <p class="text-neutral-300 mb-4">Thanks ${name}! We've received your message and will get back to you within 24 hours.</p>
        <p class="text-sm text-neutral-400 mb-6">Our team is excited to learn about your automation needs and help streamline your business processes.</p>
      </div>
      <button class="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-xl transition-colors" onclick="this.closest('.fixed').remove()">
        Got it, thanks!
      </button>
    </div>
  `;
  
  backdrop.appendChild(modal);
  document.body.appendChild(backdrop);
  
  // Auto-close after 8 seconds
  setTimeout(() => {
    if (backdrop.parentNode) {
      backdrop.remove();
    }
  }, 8000);
  
  // Close on backdrop click
  backdrop.addEventListener('click', function(e) {
    if (e.target === backdrop) {
      backdrop.remove();
    }
  });
}

// Custom notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  const bgColor = type === 'error' ? 'bg-red-500/20 border-red-500/30 text-red-300' : 'bg-green-500/20 border-green-500/30 text-green-300';
  
  notification.className = `fixed top-4 right-4 ${bgColor} border rounded-xl p-4 max-w-sm z-50 shadow-lg animate-slide-in`;
  notification.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="flex-1 text-sm">${message}</div>
      <button onclick="this.parentElement.parentElement.remove()" class="text-neutral-400 hover:text-white">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
}

// Mouse movement effects for hover glows
function initializeMouseEffects() {
  document.addEventListener('mousemove', function(e) {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
  });
}

// Set current year in footer
function setCurrentYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Smooth scrolling for anchor links (fallback for older browsers)
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Add click handlers for smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        smoothScroll(href);
      }
    });
  });
});

// Intersection Observer for scroll animations (optional enhancement)
if ('IntersectionObserver' in window) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe sections for fade-in animation
  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      if (index > 0) { // Skip hero section
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
      }
    });
  });
}