// src/App.jsx
// -----------------------------------------------------------------------------
// Procify dark+neon one-page site (HR/EN toggle, no "live bot" section)
// - Responsiveness improved (fluid type, stacked grids, mobile-friendly buttons)
// - Styling via <style> tag (bez dodatnih CSS datoteka)
// - Email form: EmailJS (client-side)
//   1) npm i emailjs-com
//   2) EmailJS: kreiraj service + template s var: name, email, useCase, message
//   3) Ispuni SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY (EmailJS public key!)
// - Logo: stavi /public/procify-logo.png
// - YouTube: zamijeni YOUTUBE_VIDEO_ID
// -----------------------------------------------------------------------------

import { useState } from "react";
import emailjs from "emailjs-com";

export default function App() {
  // ----------------------- CONFIG koje mijenjaš ------------------------------
  const EMAILJS = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };


  const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // <-- zamijeni svojim video ID-em
  const LOGO_SRC = "/procify-logo.png";   // <-- stavi logo u /public

  // ----------------------- Prijevodi ----------------------------------------
  const t = {
    en: {
      nav: { solutions: "Solutions", howItWorks: "How it works", outcomes: "Outcomes", contact: "Contact", getADemo: "Get a demo" },
      hero: {
        kicker: "Automation for serious business",
        title: "Automate and accelerate your admin & business workflows.",
        desc: "Procify builds bespoke automations that cut manual workload by 70–80%, and turn week-long tasks into days. Error-prone steps become reliable, fast flows.",
        cta1: "Book a discovery call", cta2: "See solutions",
        kpi1: ["70–80%", "Average manual work reduced"],
        kpi2: ["< 2 weeks", "Typical MVP delivery"],
        kpi3: ["99.9%", "Data accuracy (with validation)"],
      },
      what: {
        heading: "What we automate",
        blurb: "A focused set of high-impact, admin-heavy processes we repeatedly turn into hours-free flows.",
        chips: ["Invoice extraction","Email automation","ERP/CRM sync","RPA handoffs","Document routing","Approval flows"],
        hotelBlockTitle: "Hotels & travel agencies — smarter email automation",
        hotelBlockText:
          "We eliminate inbox chaos by classifying, extracting and routing emails automatically. Typical cases: booking confirmations, amendments, cancellations, supplier invoices, guest inquiries, and voucher issuance. We parse attachments (PDF/HTML), validate key fields (names, dates, folio, rates), push structured data to your PMS/CRM, and trigger follow-ups (auto-reply, tasks, or Slack/Teams notifications). Result: fewer mistakes, faster response times, and complete audit trails.",
        hotelBullets: [
          "Auto-tag & triage: detect reservation type, language, urgency",
          "Parse attachments: invoices, vouchers, contracts, ID scans",
          "Two-way sync: PMS/ERP/CRM updates + confirmations back to guests/partners",
          "Built-in validation & QA dashboards",
        ],
      },
      how: {
        heading: "How it works",
        steps: [
          { title: "1) Discover", text: "We map your process in a 45–60 min call, define success KPI, and pick a razor-thin MVP." },
          { title: "2) Build", text: "We connect mailboxes, folders, PMS/ERP/CRM APIs, add OCR & structured extraction, and wire approvals." },
          { title: "3) Validate", text: "We run shadow mode, compare human vs. bot output, and tune validation rules until ≥99.9% accuracy." },
          { title: "4) Run", text: "You get dashboards, alerts, and a simple switch to pause/override. Handover + docs included." },
        ],
      },
      outcomes: {
        heading: "Proven outcomes",
        exampleTitle: "Example scenario",
        exampleSubtitle: "Invoices → Excel → ERP, fully automated",
        before: { title: "Before", items: ["Daily manual copy-paste from mailboxes","Dispersed errors","Week-long reconciliation"] },
        after:  { title: "After",  items: ["Auto-ingest, auto-export, 99.9% accuracy","Same-day postings","Full audit history"] },
        quoteBtn: "Request a quote",
      },
      video: { heading: "Watch a quick demo"},
      contact: {
        heading: "Let’s talk",
        sub: "Tell us about your process. We’ll reply with a quick plan, a timeline, and a ballpark estimate.",
        form: { name: "Your name", email: "Email", useCase: "What would you like to automate?", message: "Describe the current process and tools…", send: "Send", sent: "Thanks! We’ll email you shortly.", error: "Hmm, something went wrong. Please try again." },
        infoTitle: "Contact", phone: "+385 (0)99 000 0000", location: "Zagreb, Croatia", emailLabel: "Email us",
      },
      footer: { rights: "© Procify. All rights reserved." },
    },
    hr: {
      nav: { solutions: "Rješenja", howItWorks: "Kako radimo", outcomes: "Rezultati", contact: "Kontakt", getADemo: "Zakaži demo" },
      hero: {
        kicker: "Automatizacija za ozbiljan biznis",
        title: "Automatizirajte i ubrzajte svoje administrativne i poslovne procese.",
        desc: "Procify izrađuje prilagođene automatizacije koje smanjuju ručni rad za 70–80% te poslove u trajanju od tjedan dana pretvaraju u nekoliko dana. Rizični koraci postaju pouzdani i brzi tokovi.",
        cta1: "Rezerviraj uvodni poziv", cta2: "Pogledaj rješenja",
        kpi1: ["70–80%", "Prosječno smanjenje ručnog rada"],
        kpi2: ["< 2 tjedna", "Tipična isporuka MVP-a"],
        kpi3: ["99,9%", "Točnost podataka (uz validaciju)"],
      },
      what: {
        heading: "Što automatiziramo",
        blurb: "Uski set procesa s velikim utjecajem koje kontinuirano pretvaramo u tokove bez sati ručnog rada.",
        chips: ["Ekstrakcija računa","Automatizacija e-pošte","ERP/CRM sinkronizacija","RPA prijenosi","Usmjeravanje dokumenata","Odobravateljski tokovi"],
        hotelBlockTitle: "Hoteli i turističke agencije — pametna automatizacija e-pošte",
        hotelBlockText:
          "Uklanjamo kaos u inboxu tako da automatski klasificiramo, izdvajamo i usmjeravamo e-poštu. Tipični slučajevi: potvrde rezervacija, izmjene, otkazi, ulazni računi dobavljača, upiti gostiju i izdavanje vouchera. Parsiramo priloge (PDF/HTML), validiramo ključna polja (ime, datumi, folio, cijene), zapisujemo strukturirane podatke u vaš PMS/CRM i pokrećemo follow-up (auto-odgovor, zadaci ili Slack/Teams obavijesti). Rezultat: manje grešaka, brži odgovori i potpuni trag aktivnosti.",
        hotelBullets: [
          "Auto-tag & trijaža: detekcija tipa rezervacije, jezika, hitnosti",
          "Parsiranje priloga: računi, voucheri, ugovori, skenovi dokumenata",
          "Dvosmjerna sinkronizacija: PMS/ERP/CRM ažuriranja + potvrde gostima/partnerima",
          "Ugrađena validacija i QA nadzorne ploče",
        ],
      },
      how: {
        heading: "Kako radimo",
        steps: [
          { title: "1) Istražimo", text: "U 45–60 min mapiramo proces, definiramo KPI ciljeve i odabiremo minimalan MVP." },
          { title: "2) Izgradimo", text: "Spajamo sandučiće, mape, PMS/ERP/CRM API-je, dodajemo OCR i izdvajanje, te vežemo odobravanja." },
          { title: "3) Validiramo", text: "Vozimo u ‘shadow’ modu, uspoređujemo čovjek vs. bot i podešavamo pravila do ≥99,9% točnosti." },
          { title: "4) Pokrenemo", text: "Dobivate dashboarde, alarme i jednostavan prekidač za pauzu/override. Predaja + dokumentacija uključene." },
        ],
      },
      outcomes: {
        heading: "Dokazani rezultati",
        exampleTitle: "Primjer scenarija",
        exampleSubtitle: "Računi → Excel → ERP, potpuno automatizirano",
        before: { title: "Prije", items: ["Dnevni copy-paste iz sandučića","Raspršene pogreške","Tjedni usklađivanja"] },
        after:  { title: "Poslije", items: ["Auto-unos, auto-izvoz, 99,9% točnost","Knjizenje isti dan","Potpuni revizijski trag"] },
        quoteBtn: "Zatraži ponudu",
      },
      video: { heading: "Kratki video demo", sub: "U kodu zamijenite YOUTUBE_VIDEO_ID i video će se prikazati ovdje." },
      contact: {
        heading: "Javite nam se",
        sub: "Opišite svoj proces. Poslat ćemo brzi plan, rok i okvirnu cijenu.",
        form: { name: "Vaše ime", email: "Email", useCase: "Što želite automatizirati?", message: "Opišite trenutni proces i alate…", send: "Pošalji", sent: "Hvala! Uskoro vam se javljamo mailom.", error: "Nešto je pošlo po zlu. Pokušajte ponovno." },
        infoTitle: "Kontakt", phone: "+385 (0)99 000 0000", location: "Zagreb, Hrvatska", emailLabel: "Pošaljite email",
      },
      footer: { rights: "© Procify. Sva prava pridržana." },
    },
  };

  const [lang, setLang] = useState("en");
  const L = t[lang];

  // ----------------------- Form & Email submit -------------------------------
  const [form, setForm] = useState({ name: "", email: "", useCase: "", message: "" });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }

  async function handleSubmit(e) {
    e.preventDefault();
    setErr(""); setSent(false);
    try {
      await emailjs.send(
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATE_ID,
        { name: form.name, email: form.email, useCase: form.useCase, message: form.message },
        EMAILJS.PUBLIC_KEY
      );
      setSent(true);
      setForm({ name: "", email: "", useCase: "", message: "" });
    } catch (error) {
      console.error(error);
      setErr("fail");
    }
  }

  // ----------------------- UI ------------------------------------------------
  return (
    <div style={styles.page}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* HEADER */}
      <header className="wrap header">
        <div className="logo">
          <img src={LOGO_SRC} alt="Procify logo" />
          <span>PROCIFY</span>
        </div>

        <nav className="nav">
          <a href="#solutions">{L.nav.solutions}</a>
          <a href="#how">{L.nav.howItWorks}</a>
          <a href="#outcomes">{L.nav.outcomes}</a>
          <a href="#contact">{L.nav.contact}</a>
          <button className="btn ghost">{L.nav.getADemo}</button>
          <div className="lang">
            <button className={`pill ${lang === "hr" ? "active" : ""}`} onClick={() => setLang("hr")}>HR</button>
            <button className={`pill ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="wrap hero">
        <div className="hero-text">
          <div className="kicker">{L.hero.kicker}</div>
          <h1>{L.hero.title}</h1>
          <p className="muted">{L.hero.desc}</p>
          <div className="cta">
            <a href="#contact" className="btn">{L.hero.cta1}</a>
            <a href="#solutions" className="btn ghost">{L.hero.cta2}</a>
          </div>
          <div className="kpis">
            <KPI big={L.hero.kpi1[0]} small={L.hero.kpi1[1]} />
            <KPI big={L.hero.kpi2[0]} small={L.hero.kpi2[1]} />
            <KPI big={L.hero.kpi3[0]} small={L.hero.kpi3[1]} />
          </div>
        </div>
        <div className="hero-box" aria-hidden="true">
          <div className="placeholder">Automation Preview</div>
        </div>
      </section>

      {/* WHAT WE AUTOMATE */}
      <section id="solutions" className="wrap section">
        <h2>{L.what.heading}</h2>
        <p className="muted">{L.what.blurb}</p>

        <div className="chips">
          {L.what.chips.map((c) => (<span key={c} className="chip">{c}</span>))}
        </div>

        <div className="card">
          <h3>{L.what.hotelBlockTitle}</h3>
          <p>{L.what.hotelBlockText}</p>
          <ul className="bullet">
            {L.what.hotelBullets.map((b) => (<li key={b}>{b}</li>))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="wrap section">
        <h2>{L.how.heading}</h2>
        <div className="grid">
          {L.how.steps.map((s) => (
            <div key={s.title} className="step">
              <h4>{s.title}</h4>
              <p className="muted">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section id="outcomes" className="wrap section">
        <h2>{L.outcomes.heading}</h2>
        <div className="outcomes">
          <div className="left">
            <div className="tag">{L.outcomes.exampleTitle}</div>
            <h3 className="mt8">{L.outcomes.exampleSubtitle}</h3>
          </div>
          <div className="right">
            <div className="box">
              <div className="label">{L.outcomes.before.title}</div>
              <ul>{L.outcomes.before.items.map((i) => (<li key={i}>{i}</li>))}</ul>
            </div>
            <div className="box">
              <div className="label">{L.outcomes.after.title}</div>
              <ul>{L.outcomes.after.items.map((i) => (<li key={i}>{i}</li>))}</ul>
            </div>
          </div>
        </div>
        <a href="#contact" className="btn mt16">{L.outcomes.quoteBtn}</a>
      </section>

      {/* YOUTUBE */}
      <section className="wrap section">
        <h2>{L.video.heading}</h2>
        <p className="muted">{L.video.sub}</p>
        <div className="video">
          <iframe
            title="Procify demo"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="wrap section contact">
        <div className="contact-left">
          <h2>{L.contact.heading}</h2>
          <p className="muted">{L.contact.sub}</p>

          <form onSubmit={handleSubmit} className="form">
            <div className="two">
              <input required name="name" placeholder={L.contact.form.name} value={form.name} onChange={handleChange} />
              <input required type="email" name="email" placeholder={L.contact.form.email} value={form.email} onChange={handleChange} />
            </div>
            <input name="useCase" placeholder={L.contact.form.useCase} value={form.useCase} onChange={handleChange} />
            <textarea rows={5} name="message" placeholder={L.contact.form.message} value={form.message} onChange={handleChange} />
            <button className="btn" type="submit">{L.contact.form.send}</button>
            {sent && <div className="ok">{L.contact.form.sent}</div>}
            {err && <div className="err">{L.contact.form.error}</div>}
          </form>
        </div>

        <div className="contact-right">
          <div className="mini-card">
            <div className="mini-title">{L.contact.infoTitle}</div>
            <div className="mini-line"><span>📞</span> {L.contact.phone}</div>
            <div className="mini-line"><span>📍</span> {L.contact.location}</div>
            <div className="mini-line"><span>✉️</span> <a href="mailto:hello@procify.hr">{L.contact.emailLabel}</a></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="wrap footer">
        <div className="logo small">
          <img src={LOGO_SRC} alt="Procify logo small" />
          <span>PROCIFY</span>
        </div>
        <div className="copy">{L.footer.rights}</div>
      </footer>
    </div>
  );
}

// ----------------------- Helpers & styles -----------------------------------
function KPI({ big, small }) {
  return (
    <div className="kpi">
      <div className="kpi-big">{big}</div>
      <div className="kpi-small">{small}</div>
    </div>
  );
}

const NEON = "#39ff88";
const BG = "#050607";
const FG = "#e7fbef";
const FG_MUTED = "#9fb6a6";
const CARD = "#0a0d0f";
const RING = "rgba(57,255,136,0.25)";

const styles = {
  page: {
    background: BG,
    color: FG,
    minHeight: "100vh",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'",
  },
};

// *** NOVI, RESPONSIVE CSS ***
const css = `
:root{
  --neon:#39ff88;
  --bg:#050607;
  --fg:#e7fbef;
  --fg-muted:#9fb6a6;
  --card:#0a0d0f;
  --ring:rgba(57,255,136,.25);
}

/* Layout container — veće bočne margine i max širina */
.wrap{width:min(1200px, 100% - 64px); margin:0 auto; padding:0;}

/* Header */
.header{display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; padding:28px 0;}
.logo{display:flex; align-items:center; gap:10px; font-weight:800; letter-spacing:1px;}
.logo img{width:26px; height:26px; filter:drop-shadow(0 0 12px var(--ring));}
.logo.small img{width:22px; height:22px;}
.nav{display:flex; align-items:center; gap:18px; flex-wrap:wrap;}
.nav a{color:var(--fg-muted); text-decoration:none; font-size:14px;}
.nav a:hover{color:var(--fg);}
.lang{display:flex; gap:6px;}
.pill{border:1px solid var(--neon); color:var(--neon); background:transparent; padding:6px 10px; border-radius:999px; font-weight:600;}
.pill.active,.pill:hover{background:var(--neon); color:#041307;}

.btn{background:var(--neon); color:#041307; border:none; padding:12px 16px; border-radius:12px; font-weight:800;}
.btn.ghost{background:transparent; color:var(--neon); border:1px solid var(--neon);}
.btn:hover{filter:brightness(.95);}

/* Sekcije – veći vertikalni ritam na desktopu */
.section{padding:56px 0;}
h2{font-size:clamp(24px, 3vw, 32px); margin:0 0 10px;}
h3{font-size:clamp(18px, 2.2vw, 22px); margin:10px 0;}
.muted{color:var(--fg-muted);}

/* HERO */
.hero{
  display:grid; grid-template-columns: 1.15fr .85fr; gap:32px; align-items:center;
  padding:24px 0 40px;
}
.hero-text .kicker{color:var(--neon); font-weight:700; text-transform:uppercase; letter-spacing:1px; font-size:12px;}
.hero-text h1{font-size:clamp(30px, 4.4vw, 48px); line-height:1.06; margin:12px 0;}
.cta{display:flex; gap:12px; margin:16px 0 8px; flex-wrap:wrap;}

.kpis{display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; margin-top:16px;}
.kpi{background:var(--card); border:1px solid var(--ring); border-radius:14px; padding:16px;}
.kpi-big{color:var(--neon); font-size:clamp(16px, 2vw, 22px); font-weight:900;}
.kpi-small{color:var(--fg-muted); font-size:12px;}

.hero-box{background:var(--card); border:1px solid var(--ring); border-radius:16px; min-height:260px; display:flex; align-items:center; justify-content:center;}
.placeholder{color:var(--fg-muted);}

/* Chips / cards */
.chips{display:flex; gap:8px; flex-wrap:wrap; margin:16px 0 22px;}
.chip{background:var(--card); color:var(--fg); border:1px solid var(--ring); padding:8px 12px; border-radius:999px; font-size:13px;}
.card{background:var(--card); border:1px solid var(--ring); border-radius:16px; padding:20px;}

/* How it works grid */
.grid{display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-top:14px;}
.step{background:var(--card); border:1px solid var(--ring); border-radius:14px; padding:16px;}
.step h4{color:var(--neon); margin:0 0 6px;}

/* Outcomes */
.outcomes{display:grid; grid-template-columns: 1fr 1fr; gap:18px; align-items:start;}
.outcomes .left .tag{color:var(--neon); font-weight:800; background:rgba(57,255,136,.08); border:1px solid var(--ring); padding:6px 10px; border-radius:999px; display:inline-block;}
.outcomes .right{display:grid; grid-template-columns:1fr 1fr; gap:14px;}
.outcomes .box{background:var(--card); border:1px solid var(--ring); border-radius:14px; padding:16px;}
.outcomes .label{color:var(--fg-muted); font-weight:700; margin-bottom:6px;}

/* Video – ograniči širinu i centriraj */
.video{position:relative; width:100%; max-width:900px; margin:16px auto 0; aspect-ratio:16/9; border-radius:16px; overflow:hidden; border:1px solid var(--ring);}
.video iframe{width:100%; height:100%; border:0;}

/* Contact – dvije kolone istog ranga */
.contact{display:grid; grid-template-columns: 1fr 1fr; gap:20px; align-items:start;}
.form{margin-top:10px; display:flex; flex-direction:column; gap:12px;}
.form .two{display:grid; grid-template-columns:1fr 1fr; gap:12px;}
input,textarea{background:var(--card); color:var(--fg); border:1px solid var(--ring); border-radius:12px; padding:12px; width:100%;}
input::placeholder,textarea::placeholder{color:var(--fg-muted);}
.ok{margin-top:6px; color:var(--neon); font-weight:700;}
.err{margin-top:6px; color:#ff6b6b; font-weight:700;}

.mini-card{background:var(--card); border:1px solid var(--ring); border-radius:16px; padding:18px;}
.mini-title{color:var(--fg-muted); font-weight:800; margin-bottom:8px;}
.mini-line{display:flex; align-items:center; gap:8px; color:var(--fg); margin:8px 0;}
.mini-line a{color:var(--neon); text-decoration:none;}

/* Footer */
.footer{display:flex; align-items:center; justify-content:space-between; gap:10px; margin-top:40px; padding:28px 0; border-top:1px solid var(--ring);}
.copy{color:var(--fg-muted); font-size:13px;}

/* ---------- Breakpoints ---------- */
@media (max-width:1100px){
  .wrap{width:min(1100px, 100% - 48px);}
  .hero{grid-template-columns:1fr 1fr; gap:24px;}
  .grid{grid-template-columns:repeat(3,1fr);}
}
@media (max-width:900px){
  .hero{grid-template-columns:1fr;}
  .hero-box{order:2;}
  .kpis{grid-template-columns:repeat(3,minmax(0,1fr));}
  .outcomes{grid-template-columns:1fr;}
  .outcomes .right{grid-template-columns:1fr;}
  .contact{grid-template-columns:1fr;}
  .grid{grid-template-columns:repeat(2,1fr);}
  .nav{gap:12px;}
}
@media (max-width:640px){
  .wrap{width:min(100%, 100% - 32px);}
  .header{justify-content:center; text-align:center;}
  .logo{justify-content:center; width:100%;}
  .nav{justify-content:center;}
  .cta{justify-content:flex-start;}
  .kpis{grid-template-columns:1fr; gap:10px;}
  .grid{grid-template-columns:1fr;}
  .form .two{grid-template-columns:1fr;}
  .btn{width:100%; text-align:center;}
}
@media (max-width:380px){
  .nav a{font-size:13px;}
  .pill{padding:5px 9px;}
}
  /* Bigger logo (header + footer) */
.logo img{width:40px; height:40px; filter:drop-shadow(0 0 14px var(--ring));}
.logo.small img{width:32px; height:32px;}
.logo span{font-size:18px; letter-spacing:1.2px;}

/* Contact section layout: left form grows, right card fixed width */
.contact{
  grid-template-columns: minmax(0, 1fr) 420px;
  gap: 24px;
  align-items: start;
}

/* Make the contact card breathe a bit more */
.mini-card{
  padding: 22px;
  border-radius: 18px;
  border-color: rgba(57,255,136,.28);
  box-shadow: 0 0 0 1px rgba(57,255,136,.08) inset, 0 6px 20px rgba(0,0,0,.35);
}

/* Form fields: consistent height, nicer focus, better spacing */
.form{gap:14px;}
.form .two{grid-template-columns: 1fr 1fr; gap:14px;}
input, textarea{
  padding: 14px 14px;
  border-radius: 14px;
  border:1px solid rgba(57,255,136,.28);
  transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
}
input:focus, textarea:focus{
  outline:none;
  border-color: var(--neon);
  box-shadow: 0 0 0 3px rgba(57,255,136,.18);
  background: #0c1113;
}

/* Align the first row inputs perfectly with the right card edge */
.contact-left .two input:first-child{border-top-right-radius:14px;}
.contact-left .two input:last-child{border-top-left-radius:14px;}

/* Button: desktop normal width, mobile full width (inherited) */
@media (min-width: 901px){
  .form .btn{width:auto; padding-left:22px; padding-right:22px;}
}

/* On smaller screens zadrži stacking i full-width gumb */
@media (max-width: 900px){
  .contact{grid-template-columns:1fr;}
  .mini-card{order:2;}
  .form .btn{width:100%;}
}
  /* ===== HOTFIX: Contact layout ne smije se preklapati ===== */

/* 1) Globalno: da padding/border ulazi u širinu (sprječava overflow) */
*, *::before, *::after { box-sizing: border-box; }

/* 2) Contact grid: fiksna desna kolona, lijeva se smije stisnuti bez prelijevanja */
.contact{
  display:grid;
  grid-template-columns: minmax(0, 1fr) min(420px, 36%);
  gap:24px;
  align-items:start;
}

/* 3) Grid itemi se smiju stisnuti (bez ovoga znaju tjerati overflow) */
.contact > * { min-width: 0; }
.contact-left, .contact-right { min-width: 0; }

/* 4) Form polja: nikad šire od kolone */
.form, .form .two, input, textarea { max-width: 100%; }
.form .two{
  display:grid;
  grid-template-columns: minmax(0,1fr) minmax(0,1fr);
  gap:14px;
}

/* 5) Desna kartica neka poštuje svoju kolonu */
.mini-card{ width:100%; }

/* 6) Bolji fokus i razmaci (ostavi ako ti se sviđa) */
input, textarea{
  display:block;
  width:100%;
  padding:14px;
  border-radius:14px;
  border:1px solid rgba(57,255,136,.28);
  background:#0a0d0f;
  transition:border-color .15s ease, box-shadow .15s ease, background .15s ease;
}
input:focus, textarea:focus{
  outline:none;
  border-color:#39ff88;
  box-shadow:0 0 0 3px rgba(57,255,136,.18);
  background:#0c1113;
}

/* 7) Manji ekrani: stack */
@media (max-width: 900px){
  .contact{ grid-template-columns: 1fr; }
  .form .two{ grid-template-columns: 1fr; }
}

/* ===== Veći logo (header + footer) ===== */
.logo img{ width:48px; height:48px; filter:drop-shadow(0 0 14px rgba(57,255,136,.25)); }
.logo.small img{ width:36px; height:36px; }
.logo span{ font-size:20px; letter-spacing:1.2px; }

`;

