 // Smooth scroll + rok v patičce + i18n
    addEventListener('DOMContentLoaded',()=>{
      // translations: extendable, add more languages here
      const translations = {
        cs: {
          nav_about: "O mně",
          nav_research: "Výzkum",
          nav_experience: "Praxe",
          nav_skills: "Dovednosti",
          nav_projects: "Projekty",
          nav_contact: "Kontakt",
          hero_title: "Social Data Science & kvantitativní metodologie",
          hero_desc: "Jsem student sociologie se silným softwarovým zázemím a zájmem o kvantitativní výzkum, computational social science a eticky uvědomělou práci s daty. Propojuji <strong>programátorskou praxi</strong> s <strong>analýzou společenských dat</strong>.",
          btn_email: "E‑mail",
          btn_github: "GitHub",
          btn_cv: "CV (PDF)",
          research_title: "Výzkumné zájmy",
          tag_qm: "Kvantitativní metody",
          tag_css: "Computational Social Science",
          tag_web: "Web / XHR datové zdroje",
          tag_survey: "Survey & měření",
          tag_ethics: "Datová etika",
          tag_r: "R & SPSS",
          research_meta: "Hledám možnosti pro spolupráci na projektech, stáže a výzkumné asistentury. Pokud máte dataset nebo problém, který by se hodil pro kvantitativní/počítačová sociální data science, napište mi.",
          pubs_title: "Publikace & preprinty",
          teach_title: "Vyučování & popularizace",
          projects_title: "Vybrané projekty",
          projects_link_github: "GitHub portfolio",
          projects_note: "Seminární / výzkumné práce — zde bude přehled (po zveřejnění).",
          experience_title: "Praxe (vybrané)",
          education_title: "Vzdělání",
          skills_title: "Technické dovednosti",
          contact_title: "Kontakt",
          contact_email: "E‑mail",
          contact_github: "GitHub",
          contact_linkedin: "LinkedIn",
          contact_cv: "CV",
          footer_updated: "Poslední aktualizace:"
        },
        en: {
          nav_about: "About",
          nav_research: "Research",
          nav_experience: "Experience",
          nav_skills: "Skills",
          nav_projects: "Projects",
          nav_contact: "Contact",
          hero_title: "Social Data Science & Quantitative Methodology",
          hero_desc: "I am a sociology student with a strong software background and an interest in quantitative research, computational social science and ethically aware data work. I combine <strong>practical programming</strong> with <strong>analysis of social data</strong>.",
          btn_email: "Email",
          btn_github: "GitHub",
          btn_cv: "CV (PDF)",
          research_title: "Research interests",
          tag_qm: "Quantitative methods",
          tag_css: "Computational Social Science",
          tag_web: "Web / XHR data sources",
          tag_survey: "Survey & measurement",
          tag_ethics: "Data ethics",
          tag_r: "R & SPSS",
          research_meta: "I am open to collaboration on projects, internships and research assistant roles. If you have a dataset or a problem suitable for quantitative/computational social data science, please get in touch.",
          pubs_title: "Publications & preprints",
          teach_title: "Teaching & outreach",
          projects_title: "Selected projects",
          projects_link_github: "GitHub portfolio",
          projects_note: "Seminar / research works — listing will appear here (after publication).",
          experience_title: "Experience (selected)",
          education_title: "Education",
          skills_title: "Technical skills",
          contact_title: "Contact",
          contact_email: "Email",
          contact_github: "GitHub",
          contact_linkedin: "LinkedIn",
          contact_cv: "CV",
          footer_updated: "Last updated:"
        }
      };

      // helper to set current language in DOM
      function setLanguage(lang){
        const dict = translations[lang] || translations.cs;
        // update elements with data-i18n (text/html)
        document.querySelectorAll('[data-i18n]').forEach(el=>{
          const key = el.getAttribute('data-i18n');
          if(!key) return;
          const val = dict[key];
          if(val == null) return;
          if(el.hasAttribute('data-i18n-html')) el.innerHTML = val;
          else el.textContent = val;
        });
        // update attributes: data-i18n-attr="<attr>:<key>"
        document.querySelectorAll('[data-i18n-attr]').forEach(el=>{
          const mappings = el.getAttribute('data-i18n-attr').split(';').map(s=>s.trim()).filter(Boolean);
          mappings.forEach(m=>{
            const [attr,key] = m.split(':').map(s=>s.trim());
            if(attr && key && dict[key]!=null) el.setAttribute(attr, dict[key]);
          });
        });
        // set html lang and store
        document.documentElement.lang = lang;
        localStorage.setItem('site_lang', lang);
        // update selector value if present
        const sel = document.getElementById('lang-select');
        if(sel) sel.value = lang;
      }

      // init smooth scroll for anchors
      document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
        const id=a.getAttribute('href');
        if(id.length>1){e.preventDefault();document.querySelector(id)?.scrollIntoView({behavior:'smooth'});}
      }));

      // year in footer
      const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

      // initialize language from localStorage or browser
      const stored = localStorage.getItem('site_lang') || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'cs');
      setLanguage(stored);

      // language selector change handler
      const langSel = document.getElementById('lang-select');
      if(langSel) langSel.addEventListener('change',(e)=>setLanguage(e.target.value));
    });