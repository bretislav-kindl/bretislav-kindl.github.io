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
          hero_desc: "Student sociologie s několikaletými zkušenostmi v programování. Zaměřuji se na datovou analýzu, metodologii sociologického výzkumu, sociologii vzdělávání a sociální stratifikaci.",
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
          contact_cv_cz: "CV - CZ",
          contact_cv_en: "CV - EN",
          footer_updated: "Poslední aktualizace:",
          // populated lists from CV (plain strings for simple rendering)
          experience_list: [
            "17.02.2025 – Aktuální — Specialista pro práci s daty, Ministerstvo školství, mládeže a tělovýchovy, Praha — programování v jazyce R; Web scraping; MS Excel, Word; práce s verzovacím systémem GitLab; věcná analýza dat.",
            "01.10.2025 – 19.12.2025 — Metadatový specialista, Sociologický ústav AV ČR, Praha — kontrola správnosti a úplnosti metadatových záznamů; úprava záznamů podle standardů; ověřování a přiřazování termínů ze sociálněvědních slovníků; skript pro kontrolu úplnosti v Dataverse.",
            "01.04.2020 – 30.11.2024 — Frontend Web Developer, Baader Computer spol. s r.o., Praha — vývoj webových aplikací v Sencha Ext JS; HTML5, CSS3 (Sass); práce v týmu; IntelliJ IDEA; debug v Chrome DevTools; GitLab/GitHub/TortoiseHg; Jenkins; Apache Maven; tvorba Excel makro; dokumentace; úprava obrázků pro web.",
            "11.06.2019 – 29.02.2020 — Analytik dat, Hays Czech Republic, s.r.o., Praha — analýza XHR requestů webových stránek; úprava datových template v JSONu; přepisování dat do PC.",
            "01.05.2016 – 03.03.2017 — Full-stack junior developer, Atteq, s.r.o., Praha — vývoj webových aplikací v JavaScriptu; úprava HTML šablon; práce s Python skripty; čištění a úprava Excel dokumentů; tvorba Excel makro; práce se SQL."
          ],
          education_list: [
            "01.10.2025 – Aktuální — Sociologie (magisterské), Univerzita Karlova, Filozofická fakulta, Katedra sociologie — Studijní obor: Sociologie a kulturologie (EQF 7). https://ksoc.ff.cuni.cz/",
            "01.10.2022 – 12.08.2025 — Sociologie (bakalářské), Univerzita Karlova, Filozofická fakulta, Katedra sociologie — Studijní obor: Sociologie a kulturologie (EQF 6). https://ksoc.ff.cuni.cz/",
            "01.09.2014 – 01.06.2018 — 18-20-M/01 Informační technologie, Střední průmyslová škola na Proseku, Praha — programování webových aplikací (HTML5, CSS3, JavaScript/jQuery, PHP, MySQL); .NET; projektování databází; Cisco; Linux Red Hat; Windows Server; grafika (Adobe Photoshop/Illustrator); programování mikrokontrolerů. https://www.sps-prosek.cz/"
          ],
          skills_list: [
            "R",
            "SPSS",
            "Microsoft Excel (včetně maker)",
            "Microsoft Word",
            "Microsoft PowerPoint",
            "Microsoft Outlook",
            "Microsoft Teams",
            "Google aplikace",
            "ChatGPT",
            "Dataverse",
            "Git (GitLab, GitHub, TortoiseHg)",
            "Web scraping",
            "HTML5, CSS3 (Sass), JavaScript"
          ],
          languages: [
            "Čeština — mateřský jazyk",
            "Angličtina — Poslech: C2; Čtení: C2; Mluvená komunikace: C1; Samostatný ústní projev: C1; Psaní: C1",
            "Ruština — Poslech: B1; Čtení: B1; Mluvená komunikace: A1; Samostatný ústní projev: A1; Psaní: A1"
          ],
          pubs_list: [
            /* zachovat prázdné místo pro budoucí publikace */
          ],
          projects_list: [
            /* zachovat prostor pro projekty — doplnit později */
          ],
          footer_updated_date: "01.2026"
        },
        en: {
          nav_about: "About",
          nav_research: "Research",
          nav_experience: "Experience",
          nav_skills: "Skills",
          nav_projects: "Projects",
          nav_contact: "Contact",
          hero_title: "Social Data Science & Quantitative Methodology",
          hero_desc: "A sociology student with several years of programming experience, specializing in data analysis, sociological research methodology, the sociology of education, and social stratification.",
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
          contact_cv_cz: "CV - CZ",
          contact_cv_en: "CV - EN",
          footer_updated: "Last updated:",
          personal_name: "Břetislav Kindl",
          personal_dob: "11/11/1998",
          personal_gender: "Male",
          personal_nationality: "Czech",
          personal_mobile: "+420 721250404",
          personal_email: "bretislav.kindl@gmail.com",
          personal_website: "https://bretislav-kindl.github.io/",
          personal_linkedin: "Břetislav Kindl",
          personal_github: "bretislav-kindl",
          personal_address: "Hornomlýnská 1232/5, 14800, Praha, Czechia",
          experience_list: [
            "17/02/2025 – Current — Data Specialist, Ministry of Education, Youth and Sports | Prague, Czechia — Data analysis and processing using R; web scraping and automated data collection; MS Excel & Word; version control (GitLab); substantive analytical interpretation of data.",
            "01/10/2025 – 19/12/2025 — Metadata Specialist, Institute of Sociology, Czech Academy of Sciences | Prague, Czechia — Reviewing accuracy and completeness of metadata records; editing metadata to standards and creating new records; verifying and assigning terms from controlled social science vocabularies; scripting validation of metadata completeness in Dataverse.",
            "01/04/2020 – 30/11/2024 — Web Developer, Baader Computer spol. s r.o. | Prague, Czechia — Web application development with Sencha Ext JS, HTML5, CSS3 (Sass); team collaboration; IntelliJ IDEA; Chrome DevTools debugging; Git-based version control (GitLab, GitHub) and Mercurial (TortoiseHg); Jenkins CI maintenance; Apache Maven; Excel macros; technical documentation; image editing/optimization for web.",
            "11/06/2019 – 29/02/2020 — Data Analyst, Hays Czech Republic, s.r.o. | Prague, Czechia — Analysis of XHR requests; editing JSON data templates; transcribing data.",
            "01/05/2016 – 03/03/2017 — Web Developer (junior), Atteq, s.r.o. | Prague, Czechia — Web app development in JavaScript; editing HTML templates; working with Python scripts; cleaning and processing Excel documents; creating Excel macros; SQL work."
          ],
          education_list: [
            "01/10/2025 – Current — Sociology (Master’s), Charles University, Faculty of Arts, Department of Sociology | Prague, Czechia — Field(s) of study: Sociology and cultural studies | EQF level: 7 | https://ksoc.ff.cuni.cz/",
            "01/10/2022 – 12/08/2025 — Sociology (Bachelor’s), Charles University, Faculty of Arts, Department of Sociology | Prague, Czechia — Field(s) of study: Sociologie and cultural studies | EQF level: 6 | https://ksoc.ff.cuni.cz/",
            "01/09/2014 – 01/06/2018 — 18-20-M/01 Information Technology, Secondary Technical School in Prosek | Prague, Czechia — Programming web applications (HTML5, CSS3, JavaScript/jQuery, PHP, MySQL); .NET apps; database design; Cisco networking basics; Linux Red Hat; Windows Server; vector & raster graphics (Adobe Photoshop/Illustrator); microcontroller programming. | EQF level: 4 | https://www.sps-prosek.cz/"
          ],
          skills_list: [
            "SPSS",
            "R",
            "Microsoft Word",
            "Microsoft Office",
            "Microsoft Outlook",
            "Google Applications",
            "Microsoft PowerPoint",
            "Microsoft Excel (including macros)",
            "Microsoft Teams",
            "ChatGPT",
            "Dataverse",
            "Web scraping",
            "HTML5, CSS3 (Sass), JavaScript",
            "Git (GitLab, GitHub, TortoiseHg)"
          ],
          languages: [
            "Czech — Mother tongue",
            "English — Listening: C2; Reading: C2; Spoken production: C1; Spoken interaction: C1; Writing: C1",
            "Russian — Listening: B1; Reading: B1; Spoken production: A1; Spoken interaction: A1; Writing: A1"
          ],
          pubs_list: [
            /* placeholder for future publications */
          ],
          projects_list: [
            /* placeholder for future projects */
          ],
          footer_updated_date: "01.2026" // replace with exact date from cv_en_01_2026
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