// Procify Website JavaScript

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

// Contact form handling
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
        alert('Please fill in all fields.');
        return;
      }
      
      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate async operation
      setTimeout(() => {
        alert('Thanks! We\'ll get back to you soon.');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }
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