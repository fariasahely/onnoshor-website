const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const languageButtons = document.querySelectorAll("[data-lang-option]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });
}

const translations = {
  en: {
    ".brand strong": "Onnoshor Toronto",
    ".site-nav a[href='#about']": "About",
    ".site-nav a[href='#programs']": "Programs",
    ".site-nav a[href='#events']": "Upcoming",
    ".site-nav a[href='#council']": "Executive Council",
    ".site-nav a[href='#gallery']": "Gallery",
    ".site-nav a[href='#members']": "Members",
    ".site-nav a[href='#join']": "Join",
    ".site-nav a[href='#contact']": "Contact",
    ".hero .eyebrow": "A gathering place for Bangla language, art, and people",
    ".hero h1": "The pulse of Bangla culture abroad, the resonance of recitation: Onnoshor Toronto.",
    ".hero-copy": "Through poetry, music, theatre, discussion, and participation from the next generation, we are building a vibrant Bangla cultural space.",
    ".hero-actions .primary": "View Programs",
    ".hero-actions .secondary": "Stay Connected",
    "#about .section-label": "About Us",
    ".about-copy p:nth-of-type(1)": "Founded in 2014 with the motto “Aim, Excellence in Recitation,” Onnoshor Toronto continues to work with dedication to enrich Bangla language, Bengali heritage, and healthy cultural practice in the diaspora.",
    ".about-copy p:nth-of-type(2)": "Onnoshor Toronto is an inclusive cultural initiative for Bangla-speaking people. Artists, writers, readers, listeners, families, and young people share stories, memories, and creativity on the same platform. Creating intergenerational connection through culture is one of our central goals.",
    ".about-copy p:nth-of-type(3)": "With more than 30 active members, Onnoshor Toronto regularly presents successful recitation and cultural programs for the Bangla-speaking community in the Greater Toronto Area. The organization hosts multi-day Victory Day programs, including a widely appreciated 12-day festival in recent years. Its recent Boishakhi program has also received praise from audiences at home and abroad.",
    ".about-copy p:nth-of-type(4)": "Throughout the year, Onnoshor Toronto organizes recitation workshops, honors distinguished contributors, presents theme-based programs, and marks national days through cultural events.",
    ".about-copy p:nth-of-type(5)": "Onnoshor Toronto is an affiliated organization of the theatre group Onnothiyeater Toronto.",
    ".stats-band div:nth-child(1) span": "Founded",
    ".stats-band div:nth-child(2) span": "Active members",
    ".stats-band div:nth-child(3) strong": "12 days",
    ".stats-band div:nth-child(3) span": "Ongoing Victory Festival programming",
    ".stats-band div:nth-child(4) strong": "Year-round",
    ".stats-band div:nth-child(4) span": "Recitation, literature, and cultural activities",
    "#programs .section-label": "Programs",
    ".programs-intro": "From large cultural events to intimate reading circles, every initiative helps Onnoshor Toronto keep Bangla culture alive, participatory, and meaningful for future generations.",
    ".program-card:nth-child(1) span": "01",
    ".program-card:nth-child(1) h3": "“Droho Eneche Bijoy” — A stage for the spirit of Victory",
    ".program-card:nth-child(1) p": "Every year, Onnoshor Toronto celebrates a continuing Victory Festival through “Droho Eneche Bijoy,” featuring cultural personalities from Toronto, North America, Bangladesh, and its own artists.",
    ".program-card:nth-child(2) span": "02",
    ".program-card:nth-child(2) h3": "Remembering Poets Through Poetry",
    ".program-card:nth-child(2) p": "On the birth anniversaries of renowned Bengali poets, Onnoshor Toronto honors their literature and creative legacy through special recitation and cultural programs throughout the year.",
    ".program-card:nth-child(3) span": "03",
    ".program-card:nth-child(3) h3": "Boishakher Pongktimala — Onnoshor’s annual celebration",
    ".program-card:nth-child(3) p": "The annual “Boishakher Pongktimala” celebrates Bangla culture and the spirit of Boishakh with lively performances by children, young people, and Onnoshor Toronto’s own artists.",
    ".program-card:nth-child(4) span": "04",
    ".program-card:nth-child(4) h3": "Recitation Workshop",
    ".program-card:nth-child(4) p": "Onnoshor Toronto regularly hosts recitation workshops to develop pronunciation, vocal expression, emotional delivery, and stage presentation skills. The workshop is open to both new and experienced recitation artists.",
    ".program-card:nth-child(5) span": "05",
    ".program-card:nth-child(5) h3": "Honoring Distinguished Contributors",
    ".program-card:nth-child(5) p": "Onnoshor Toronto regularly honors distinguished individuals who have made meaningful contributions to Bangla language, literature, culture, and the arts.",
    ".program-card:nth-child(6) span": "06",
    ".program-card:nth-child(6) h3": "Theme-Based Programs",
    ".program-card:nth-child(6) p": "Onnoshor Toronto presents special cultural programs throughout the year on contemporary thought, literature, human values, history, and social awareness.",
    ".program-card:nth-child(7) span": "07",
    ".program-card:nth-child(7) h3": "National Day Programs",
    ".program-card:nth-child(7) p": "Onnoshor Toronto observes important national days of Bangladesh with respect and emotion through recitation, music, theatre, and cultural performances.",
    ".program-card:nth-child(8) span": "08",
    ".program-card:nth-child(8) h3": "International Day Programs",
    ".program-card:nth-child(8) p": "Rooted in language, literature, humanity, and love, Onnoshor Toronto organizes special cultural programs for International Mother Language Day, World Poetry Day, Valentine’s Day, and other international observances.",
    "#events .section-label": "Upcoming Programs",
    "#events h2": "Recent and Regular Programs",
    "#events .text-link": "Propose an event",
    ".event-item:nth-child(1) time": "Workshop",
    ".event-item:nth-child(1) h3": "Recitation Workshop",
    ".event-item:nth-child(1) p": "Onnoshor Toronto regularly organizes recitation workshops to improve pronunciation, vocal style, and stage presentation skills. New and interested participants are welcome.",
    ".event-item:nth-child(1) a": "Contact",
    ".event-item:nth-child(2) time": "Special Program",
    ".event-item:nth-child(2) h3": "“Amader Bhabay Sukumar Ray”",
    ".event-item:nth-child(2) p": "A special Onnoshor Toronto program centered on Sukumar Ray’s creativity, satire, imagination, and extraordinary world of language. Through recitation, discussion, and performance, his timeless literary world is introduced to a new generation.",
    ".event-item:nth-child(2) a": "Learn More",
    "#join .section-label": "Join",
    ".join-content h2": "Your voice, feeling, and creativity make Onnoshor even more alive.",
    ".join-content p": "As a volunteer, artist, reader, patron, or audience member, you can become part of this cultural journey.",
    ".signup-form h3": "Fill out the form to connect with Onnoshor",
    ".signup-form > p:nth-of-type(1)": "Use the form below to express interest as a member, volunteer, artist, or supporter. Your response will be submitted directly to Onnoshor Toronto’s Google Form.",
    ".form-button": "Open Form",
    ".facebook-link strong": "Facebook",
    ".form-note": "If email notifications are enabled in Google Forms, new responses will be received by email.",
    "#council .section-label": "Executive Council",
    "#council h2": "A responsible space for planning and implementing the organization’s work.",
    "#council p": "Onnoshor Toronto has an Executive Council that plays an important role in planning, managing, and implementing the organization’s activities. To ensure transparency, accountability, and the development of new leadership, the Executive Council is reorganized every three years.",
    "#gallery .section-label": "Gallery",
    "#gallery h2": "Images of Onnoshor’s programs, people, and moments.",
    ".gallery-item:nth-child(1) figcaption": "Cultural program",
    "#members .section-label": "Members",
    ".members-content h2": "Active Members of Onnoshor Toronto",
    ".members-content p": "An introduction to members involved in recitation, literature, music, theatre practice, and cultural programming. Some profile photos are being added gradually.",
    "#contact .section-label": "Contact",
    "#contact h2": "Write to join Onnoshor or propose a program.",
    "#contact p": "Contact us directly about membership, volunteering, programs, artist participation, or collaboration.",
    ".contact-actions .primary": "Email Us",
    ".contact-actions .secondary": "Fill Out Form",
    ".site-footer h2": "Onnoshor Toronto",
    ".site-footer p": "An open community platform for Bangla language and culture in Toronto.",
    ".site-footer address span": "Toronto, Ontario"
  }
};

const originalText = new Map();

function applyLanguage(language) {
  const english = translations.en;

  Object.keys(english).forEach((selector) => {
    const element = document.querySelector(selector);
    if (!element) return;

    if (!originalText.has(selector)) {
      originalText.set(selector, element.textContent);
    }

    element.textContent = language === "en" ? english[selector] : originalText.get(selector);
  });

  document.documentElement.lang = language;

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("onnoshor-language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langOption || "bn");
  });
});

applyLanguage(localStorage.getItem("onnoshor-language") || "bn");
