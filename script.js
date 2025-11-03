// Procify Website JavaScript

// Initialize EmailJS
emailjs.init('g2H0rsuWTMGElTN0Z');

// Translation data
const translations = {
  hr: {
    nav: {
      solutions: 'Rješenja',
      process: 'Kako funkcionira',
      results: 'Rezultati',
      contact: 'Kontakt',
      demo: 'Zatražite demo'
    },
    hero: {
      badge: '⚡ Automatizacija za stvaran poslovni učinak',
      title: 'Automatizirajte i ubrzajte svoje administrativne i poslovne procese.',
      description: 'Procify gradi prilagođenu automatizaciju koja smanjuje ručni rad za <strong class="text-white font-semibold">70–80%</strong> — a u nekim slučajevima i do <strong class="text-white font-semibold">100%</strong>. Pretvorite spore, podložne pogreškama zadatke u pouzdane, brze procese.',
      cta1: 'Zatražite razgovor',
      cta2: 'Pogledajte rješenja',
      stat1: 'Prosječno smanjenje ručnog rada',
      stat2: 'Tipično vrijeme isporuke MVP-a',
      stat3: 'Točnost podataka (s validacijom)'
    },
    dashboard: {
      title: 'Kontrolna ploča automatizacije',
      live: 'Uživo',
      email: 'Obrada e-pošte',
      emailDesc: 'E-poruka automatizirano danas',
      data: 'Unos podataka',
      dataDesc: 'Obrađenih zapisa',
      activity: 'Nedavna aktivnost',
      activity1: 'Obrada računa INV-2024-001...',
      activity2: 'Sinkronizacija podataka kupaca u CRM...',
      activity3: 'Poslana e-mail kampanja (247 primatelja)'
    },
    solutions: {
      title: 'Što automatiziramo',
      subtitle: 'Fokusirani skup procesa s visokim učinkom i puno administracije koje dosljedno pretvaramo u automatske tokove.',
      feature1Title: 'Automatizirana e-pošta i odgovori',
      feature1Desc: 'Pokrenite personalizirane e-poruke na temelju događaja, analizirajte dolaznu poštu, automatski preusmjerite pravom vlasniku i sastavite odgovore — uz ljudsku kontrolu kada je potrebna.',
      feature2Title: 'Unos i sinkronizacija podataka',
      feature2Desc: 'Izvucite podatke iz PDF-ova, obrazaca ili proračunskih tablica i upišite ih u CRM-ove, ERP-ove ili baze podataka. Validirajte pravilima kako biste osigurali 99,9% točnosti.',
      feature3Title: 'Obrada računa i dokumenata',
      feature3Desc: 'Izvucite brojeve računa, stavke i ukupne iznose; uskladite s narudžbenicama; izvezite čiste proračunske tablice ili stavite izravno u vaš financijski sustav.',
      feature4Title: 'Izvještaji i kontrolne ploče',
      feature4Desc: 'Sastavljajte tjedne KPI-je, transformirajte sirove podatke i automatski objavljujte kontrolne ploče kako bi vaš tim uvijek vidio svježe, pouzdane brojke.',
      feature5Title: 'Automatizacija proračunskih tablica',
      feature5Desc: 'Generirajte, spajajte i formatirajte Excel/Google Sheets — nema više kopiranja i lijepljenja. Masovna ažuriranja, pivot tablice, grafikoni, što god želite.',
      feature6Title: 'Ispunjavanje obrazaca i web tokovi',
      feature6Desc: 'Automatizirajte ponavljajuće web zadatke: prijave, ispunjavanje obrazaca, preuzimanja, učitavanja — s revizijskim tragovima i upozorenjima.',
      tag1: '⚡ Automatizacija pošte',
      tag2: '⚡ PDF → Excel',
      tag3: '⚡ CRM/ERP sinkronizacija',
      tag4: '⚡ RPA + AI'
    },
    process: {
      title: 'Kako funkcionira',
      subtitle: 'Od ideje do funkcionalne automatizacije u danima, ne mjesecima.',
      step1Label: 'Korak 1',
      step1Title: 'Otkrij',
      step1Desc: 'Mapiramo vaš proces, kvantificiramo ROI i odabiremo brze uspjehe.',
      step2Label: 'Korak 2',
      step2Title: 'Dizajniraj',
      step2Desc: 'Pravimo prototip s pravim podacima, dodajemo validacije i dizajniramo ljudsku kontrolu.',
      step3Label: 'Korak 3',
      step3Title: 'Isporuči',
      step3Desc: 'Isporučujemo, pratimo i iteriramo. Vaš tim odmah vidi rezultate.'
    },
    results: {
      title: 'Dokazani rezultati',
      bullet1: '70–80% prosječno uštede vremena na administrativnim zadacima',
      bullet2: 'Do 100% automatizacija za potpuno digitalne ulaze',
      bullet3: 'Stope grešaka smanjene gotovo na nulu s provjerama temeljenim na pravilima',
      bullet4: 'Revizijski tragovi i zapisi za usklađenost',
      cta: 'Zatražite ponudu',
      exampleLabel: 'Primjer scenarija',
      exampleTitle: 'Računi → Excel → ERP, potpuno automatizirano',
      exampleDesc: 'Analizirajte PDF-ove dobavljača, zabilježite brojeve računa, stavke i ukupne iznose, validirajte prema narudžbenicama i objavite u ERP. Konačna ljudska provjera samo kada pravila nešto označe.',
      before: 'Prije',
      beforeDesc: '3–4h/dan ručno kopiranje i lijepljenje, česte greške',
      after: 'Poslije',
      afterDesc: '~20 min/dan nadzor, 99,9% točnost'
    },
    contact: {
      title: 'Razgovarajmo',
      subtitle: 'Recite nam o svom procesu. Odgovorit ćemo brzim planom, vremenskom linijom i okvirnom procjenom.',
      name: 'Ime',
      namePlaceholder: 'Vaše ime',
      email: 'E-mail',
      emailPlaceholder: 'vas@tvrtka.com',
      message: 'Što biste željeli automatizirati?',
      messagePlaceholder: 'Opišite trenutni proces i alate…',
      agreement: 'Slanjem prihvaćate da vas kontaktiramo o Procify uslugama.',
      send: 'Pošalji',
      contactLabel: 'Kontakt',
      preferText: 'Preferirate WhatsApp ili Teams? Navedite u poruci i javit ćemo vam se tamo.',
      emailUs: '✉️ Pošaljite nam e-mail',
      successTitle: 'Poruka uspješno poslana!',
      successMessage: 'Hvala {name}! Primili smo vašu poruku i odgovorit ćemo vam u roku od 24 sata.',
      successDetails: 'Naš tim je oduševljen što će saznati o vašim potrebama za automatizaciju i pomoći pojednostaviti vaše poslovne procese.',
      successButton: 'U redu, hvala!',
      sending: 'Šalje se...',
      errorMessage: 'Žao nam je, došlo je do greške pri slanju vaše poruke. Pokušajte ponovo ili nas kontaktirajte izravno na team@procify.co',
      fillFields: 'Molimo ispunite sva polja.'
    },
    footer: {
      rights: 'Sva prava pridržana.'
    }
  },
  en: {
    nav: {
      solutions: 'Solutions',
      process: 'How it works',
      results: 'Results',
      contact: 'Contact',
      demo: 'Get a demo'
    },
    hero: {
      badge: '⚡ Automation for real business impact',
      title: 'Automate and accelerate your admin & business workflows.',
      description: 'Procify builds bespoke automation that reduces manual workload by <strong class="text-white font-semibold">70–80%</strong> — and in some use‑cases up to <strong class="text-white font-semibold">100%</strong>. Turn slow, error‑prone tasks into reliable, fast flows.',
      cta1: 'Book a discovery call',
      cta2: 'See solutions',
      stat1: 'Average manual work reduced',
      stat2: 'Typical MVP delivery',
      stat3: 'Data accuracy (with validation)'
    },
    dashboard: {
      title: 'Automation Dashboard',
      live: 'Live',
      email: 'Email Processing',
      emailDesc: 'Emails automated today',
      data: 'Data Entry',
      dataDesc: 'Records processed',
      activity: 'Recent Activity',
      activity1: 'Processing invoice INV-2024-001...',
      activity2: 'Syncing customer data to CRM...',
      activity3: 'Email campaign sent (247 recipients)'
    },
    solutions: {
      title: 'What we automate',
      subtitle: 'A focused set of high‑impact, admin‑heavy processes we consistently turn into hands‑free flows.',
      feature1Title: 'Automated email outreach & replies',
      feature1Desc: 'Trigger personalized emails based on events, parse inbound mail, auto‑route to the right owner, and draft replies — with human‑in‑the‑loop when needed.',
      feature2Title: 'Data entry & syncing',
      feature2Desc: 'Pull data from PDFs, forms or spreadsheets and write it into CRMs, ERPs or databases. Validate with rules to ensure 99.9% accuracy.',
      feature3Title: 'Invoice & document processing',
      feature3Desc: 'Extract invoice numbers, line items, and totals; reconcile with purchase orders; export clean spreadsheets or push straight into your finance system.',
      feature4Title: 'Reports & dashboards',
      feature4Desc: 'Compile weekly KPIs, transform raw data, and publish dashboards automatically so your team always sees fresh, trustworthy numbers.',
      feature5Title: 'Spreadsheet automation',
      feature5Desc: 'Generate, merge and format Excel/Google Sheets — no more copy‑paste. Bulk updates, pivots, charts, you name it.',
      feature6Title: 'Form filling & web flows',
      feature6Desc: 'Automate repetitive web tasks: logins, form filling, downloads, uploads — with audit trails and alerting.',
      tag1: '⚡ Mail automation',
      tag2: '⚡ PDF → Excel',
      tag3: '⚡ CRM/ERP sync',
      tag4: '⚡ RPA + AI'
    },
    process: {
      title: 'How it works',
      subtitle: 'From idea to running automation in days, not months.',
      step1Label: 'Step 1',
      step1Title: 'Discover',
      step1Desc: 'We map your process, quantify the ROI, and pick quick wins.',
      step2Label: 'Step 2',
      step2Title: 'Design',
      step2Desc: 'We prototype with real data, add validations, and design the human‑in‑the‑loop.',
      step3Label: 'Step 3',
      step3Title: 'Deliver',
      step3Desc: 'We ship, monitor, and iterate. Your team sees results immediately.'
    },
    results: {
      title: 'Proven outcomes',
      bullet1: '70–80% average time saved on admin workloads',
      bullet2: 'Up to 100% automation for fully digital inputs',
      bullet3: 'Error rates cut to near‑zero with rule‑based checks',
      bullet4: 'Audit trails and logs for compliance',
      cta: 'Request a quote',
      exampleLabel: 'Example scenario',
      exampleTitle: 'Invoices → Excel → ERP, fully automated',
      exampleDesc: 'Parse supplier PDFs, capture bill numbers, items and totals, validate against POs, and post to ERP. A final human check only when rules flag something.',
      before: 'Before',
      beforeDesc: '3–4h/day manual copy‑paste, frequent errors',
      after: 'After',
      afterDesc: '~20 min/day oversight, 99.9% accuracy'
    },
    contact: {
      title: "Let's talk",
      subtitle: "Tell us about your process. We'll reply with a quick plan, a timeline, and a ballpark estimate.",
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      message: 'What would you like to automate?',
      messagePlaceholder: 'Describe the current process and tools…',
      agreement: 'By submitting, you agree to be contacted about Procify services.',
      send: 'Send',
      contactLabel: 'Contact',
      preferText: "Prefer WhatsApp or Teams? Add it in your message and we'll reach out there.",
      emailUs: '✉️ Email us',
      successTitle: 'Message Sent Successfully!',
      successMessage: 'Thanks {name}! We\'ve received your message and will get back to you within 24 hours.',
      successDetails: 'Our team is excited to learn about your automation needs and help streamline your business processes.',
      successButton: 'Got it, thanks!',
      sending: 'Sending...',
      errorMessage: 'Sorry, there was an error sending your message. Please try again or contact us directly at team@procify.co',
      fillFields: 'Please fill in all fields.'
    },
    footer: {
      rights: 'All rights reserved.'
    }
  }
};

// Language management
let currentLanguage = localStorage.getItem('preferredLanguage') || 'hr';

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('preferredLanguage', lang);
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update page title and meta
  const titles = {
    hr: 'Procify — Automatizacija koja ubrzava vaše poslovanje',
    en: 'Procify — Automation that speeds up your business'
  };
  const descriptions = {
    hr: 'Procify gradi prilagođenu automatizaciju koja smanjuje ručni rad za 70–80% — a u nekim slučajevima i do 100%.',
    en: 'Procify builds bespoke automation that reduces manual admin by 70–80% — and in some cases up to 100%.'
  };
  
  document.title = titles[lang];
  document.querySelector('meta[name="description"]').content = descriptions[lang];
  
  // Update language switcher display
  document.getElementById('currentLang').textContent = lang.toUpperCase();
  
  // Update all translatable elements
  updatePageContent();
}

function updatePageContent() {
  const t = translations[currentLanguage];
  
  // Update elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const value = getNestedValue(t, key);
    if (value) {
      element.textContent = value;
    }
  });
  
  // Update elements with data-i18n-html attribute (for HTML content)
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    const value = getNestedValue(t, key);
    if (value) {
      element.innerHTML = value;
    }
  });
  
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    const value = getNestedValue(t, key);
    if (value) {
      element.placeholder = value;
    }
  });
  
  // Update dashboard activities dynamically
  updateDashboardActivities();
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

function updateDashboardActivities() {
  // This will be used by the dashboard animation
  const t = translations[currentLanguage].dashboard;
  window.dashboardTranslations = t;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  setLanguage(currentLanguage);
  initializeLanguageSwitcher();
  initializeMobileMenu();
  initializeContactForm();
  initializeMouseEffects();
  initializeAutomationDashboard();
  setCurrentYear();
});

// Language switcher
function initializeLanguageSwitcher() {
  const switcher = document.getElementById('languageSwitcher');
  if (switcher) {
    switcher.addEventListener('click', function() {
      const newLang = currentLanguage === 'hr' ? 'en' : 'hr';
      setLanguage(newLang);
    });
  }
}

// Animate the automation dashboard
function initializeAutomationDashboard() {
  const activityFeed = document.getElementById('activityFeed');
  if (!activityFeed) return;
  
  const activitiesData = {
    hr: [
      { text: 'Obrada računa INV-2024-001...', status: 'complete', icon: '✓', color: 'green' },
      { text: 'Sinkronizacija podataka kupaca u CRM...', status: 'processing', icon: '⟲', color: 'yellow' },
      { text: 'Poslana e-mail kampanja (247 primatelja)', status: 'complete', icon: '✓', color: 'green' },
      { text: 'Izvlačenje podataka iz PDF dokumenta...', status: 'processing', icon: '⟲', color: 'yellow' },
      { text: 'Ažuriranje proračunske tablice s novim unosima', status: 'complete', icon: '✓', color: 'green' },
      { text: 'Validacija informacija dobavljača...', status: 'processing', icon: '⟲', color: 'yellow' },
      { text: 'Izvještaj generiran i poslan timu', status: 'complete', icon: '✓', color: 'green' },
      { text: 'Obrada izvještaja o troškovima EXP-445...', status: 'complete', icon: '✓', color: 'green' },
      { text: 'Zakazivanje naknadnih sastanaka...', status: 'processing', icon: '⟲', color: 'yellow' },
      { text: 'Pretvaranje potencijalnih klijenata u prilike', status: 'complete', icon: '✓', color: 'green' }
    ],
    en: [
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
    ]
  };
  
  const getActivities = () => activitiesData[currentLanguage] || activitiesData.en;
  let activities = getActivities();
  
  let currentIndex = 0;
  
  function updateActivity() {
    // Refresh activities for current language
    activities = getActivities();
    
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
      
      const t = translations[currentLanguage].contact;
      
      // Simple validation
      if (!name || !email || !message) {
        showNotification(t.fillFields, 'error');
        return;
      }
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = t.sending;
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
          showNotification(t.errorMessage, 'error');
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
  const t = translations[currentLanguage].contact;
  
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
        <h3 class="text-xl font-semibold text-white mb-2">${t.successTitle}</h3>
        <p class="text-neutral-300 mb-4">${t.successMessage.replace('{name}', name)}</p>
        <p class="text-sm text-neutral-400 mb-6">${t.successDetails}</p>
      </div>
      <button class="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-6 rounded-xl transition-colors" onclick="this.closest('.fixed').remove()">
        ${t.successButton}
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