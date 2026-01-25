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
          pubs_title: "Konferecenční příspěvky",
          projects_title: "Vybrané projekty",
          projects_link_github: "GitHub portfolio",
          projects_note: "Seminární / výzkumné práce",
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
          personal_name: "Břetislav Kindl",
          alt_profile: "Portrét Břetislava Kindla",
          contact_pref: "Preferuji kontakt e‑mailem. Telefon ani domácí adresu zde z bezpečnostních důvodů neuvádím.",
          languages_title: "Jazyky",
          // populated lists from CV (plain strings for simple rendering)
          experience_list: [
            "Specialista pro práci s daty, Ministerstvo školství, mládeže a tělovýchovy | Aktuální • Praha <ul><li>programování v jazyce R</li><li>Web scraping</li><li>MS Excel, Word</li><li>práce s verzovacím systémem GitLab</li><li>věcná analýza dat</li></ul>",
            "Metadatový specialista, Sociologický ústav AV ČR | Praha <ul><li>kontrola správnosti a úplnosti metadatových záznamů</li><li>úprava záznamů podle standardů</li><li>ověřování a přiřazování termínů ze sociálněvědních slovníků</li><li>skript pro kontrolu úplnosti v Dataverse</li></ul>",
            "Frontend Web Developer, Baader Computer spol. s r.o. | Praha <ul><li>vývoj webových aplikací v Sencha Ext JS</li><li>HTML5, CSS3 (Sass)</li><li>práce v týmu</li><li>IntelliJ IDEA</li><li>debug v Chrome DevTools</li><li>GitLab/GitHub/TortoiseHg</li><li>Jenkins</li><li>Apache Maven</li><li>tvorba Excel makro</li><li>dokumentace</li><li>úprava obrázků pro web</li></ul>",
            "Analytik dat, Hays Czech Republic, s.r.o. | Praha <ul><li>analýza XHR requestů webových stránek</li><li>úprava datových template v JSONu</li><li>přepisování dat do PC</li></ul>",
            "Full-stack junior developer, Atteq, s.r.o. | Praha <ul><li>vývoj webových aplikací v JavaScriptu</li><li>úprava HTML šablon</li><li>práce s Python skripty</li><li>čištění a úprava Excel dokumentů</li><li>tvorba Excel makro</li><li>práce se SQL</li></ul>"
          ],
          education_list: [
            "Univerzita Karlova — Sociologie (magisterské) | Probíhající • Filozofická fakulta, Katedra sociologie</br><a href=\"https://ksoc.ff.cuni.cz/\">www.ksoc.ff.cuni.cz</a>",
            "Univerzita Karlova — Sociologie (bakalářské) | Filozofická fakulta, Katedra sociologie</br><a href=\"https://ksoc.ff.cuni.cz/\">www.ksoc.ff.cuni.cz</a>",
            'Střední průmyslová škola na Proseku — Informační technologie | <a href="https://www.sps-prosek.cz/">www.sps-prosek.cz</a>'
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
            "Angličtina — C1",
            "Ruština — B1"
          ],
          pubs_list: [
            'Sociologický ústav AV ČR - Seminář (4.12.2025) | Kulturní kapitál a akademická self-efficacy: vliv rodinného prostředí a souvislosti s úspěšností ve vzdělávání u žáků druhého stupně ZŠ</br> <a href="https://www.soc.cas.cz/cz/akce/seminare/kulturni-kapital-a-akademicka-self-efficacy-vliv-rodinneho-prostredi-a-souvislosti-s-uspesnosti-ve-vzdelavani-u-zaku-druheho-stupne-zs">www.soc.cas.cz</a>'
          ],
          projects_list: [
            "Bakalářské práce  | Sebedůvěra ve vlastní uplatnění (self-efficacy) a výsledky ve vzdělávání u žáků základních škol: <a href=\"https://dspace.cuni.cz/handle/20.500.11956/205673\">dspace.cuni.cz</a>",
            "GitHub portfolio  | Seminární / výzkumné práce: <a href=\"https://github.com/bretislav-kindl\">github.com/bretislav-kindl</a>"
          ],
          footer_updated_date: "25.01.2026"
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
          pubs_title: "Conference participation",
          projects_title: "Selected projects",
          projects_link_github: "GitHub portfolio",
          projects_note: "Seminar / research works",
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
          alt_profile: "Portrait of Břetislav Kindl",
          contact_pref: "I prefer contact by email. I do not publish phone numbers or home addresses here for privacy reasons.",
          languages_title: "Languages",
          pubs_placeholder: "— No public records yet. I will update here once preprints or conference papers are available.",
          experience_list: [
            "Data Specialist, Ministry of Education, Youth and Sports | Current • Prague, Czechia <ul><li>Data analysis and processing using R</li><li>Web scraping and automated data collection</li><li>MS Excel & Word</li><li>Version control (GitLab)</li><li>Substantive analytical interpretation of data</li></ul>",
            "Metadata Specialist, Institute of Sociology, Czech Academy of Sciences | Prague, Czechia <ul><li>Reviewing accuracy and completeness of metadata records</li><li>Editing metadata to standards and creating new records</li><li>Verifying and assigning terms from controlled social science vocabularies</li><li>Scripting validation of metadata completeness in Dataverse</li></ul>",
            "Web Developer, Baader Computer spol. s r.o. | Prague, Czechia <ul><li>Web application development with Sencha Ext JS, HTML5, CSS3 (Sass)</li><li>Team collaboration</li><li>IntelliJ IDEA</li><li>Chrome DevTools debugging</li><li>Git-based version control (GitLab, GitHub) and Mercurial (TortoiseHg)</li><li>Jenkins CI maintenance</li><li>Apache Maven</li><li>Excel macros</li><li>Technical documentation</li><li>Image editing/optimization for web</li></ul>",
            "Data Analyst, Hays Czech Republic, s.r.o. | Prague, Czechia <ul><li>Analysis of XHR requests</li><li>Editing JSON data templates</li><li>Transcribing data</li></ul>",
            "Web Developer (junior), Atteq, s.r.o. | Prague, Czechia <ul><li>Web app development in JavaScript</li><li>Editing HTML templates</li><li>Working with Python scripts</li><li>Cleaning and processing Excel documents</li><li>Creating Excel macros</li><li>SQL work</li></ul>"
          ],
          education_list: [
            "Charles University — Sociology (Master’s) | Ongoing • Faculty of Arts, Department of Sociology</br><a href=\"https://ksoc.ff.cuni.cz/\">ksoc.ff.cuni.cz</a>",
            "Charles University — Sociology (Bachelor’s) | Faculty of Arts, Department of Sociology</br><a href=\"https://ksoc.ff.cuni.cz/\">ksoc.ff.cuni.cz</a>",
            "Secondary Technical School in Prosek — Information Technology</br><a href=\"https://www.sps-prosek.cz/\">sps-prosek.cz</a>"
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
            "English — C1",
            "Russian — B1"
          ],
          pubs_list: [
            'Institute of Sociology of the Czech Academy of Sciences - Seminar (4.12.2025) | Cultural Capital and Academic Self‑Efficacy: The Influence of Family Background and Its Relationship to Educational Achievement Among Lower‑Secondary School Students</br> <a href="https://www.soc.cas.cz/cz/akce/seminare/kulturni-kapital-a-akademicka-self-efficacy-vliv-rodinneho-prostredi-a-souvislosti-s-uspesnosti-ve-vzdelavani-u-zaku-druheho-stupne-zs">www.soc.cas.cz</a>'
          ],
          projects_list: [
            "Bachelor’s Thesis  | Self-efficacy and educational achievement in primary school pupils: <a href=\"https://dspace.cuni.cz/handle/20.500.11956/205673\">dspace.cuni.cz</a>",
            "GitHub portfolio  | Seminar / research works: <a href=\"https://github.com/bretislav-kindl\">github.com/bretislav-kindl</a>"
          ],
          footer_updated_date: "25.01.2026" // replace with exact date from cv_en_01_2026
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
        // render lists from translation arrays: elements with data-i18n-list="<key>"
        document.querySelectorAll('[data-i18n-list]').forEach(el=>{
          const key = el.getAttribute('data-i18n-list');
          const arr = dict[key];
          if(!Array.isArray(arr) || arr.length === 0) return; // keep fallback markup if present
          el.innerHTML = ''; // clear fallback
          arr.forEach(item => {
            // if container is a DIV, create div.item entries; otherwise create li entries
            if(el.tagName === 'DIV'){
              el.appendChild(createDivItemFromI18n(item));
            } else {
              el.appendChild(createListItemFromI18n(item));
            }
          });
        });
        // set html lang and store
        document.documentElement.lang = lang;
        localStorage.setItem('site_lang', lang);
        // update selector value if present
        const sel = document.getElementById('lang-select');
        if(sel) sel.value = lang;
      }

      // helper to create a <li> from an i18n list item
      function createListItemFromI18n(item){
        const li = document.createElement('li');
        li.className = 'item';
        // object form: { left: 'Title', right: '<a>...</a>' }
        if(item && typeof item === 'object' && !Array.isArray(item)){
          if(item.left){
            const strong = document.createElement('strong');
            strong.textContent = String(item.left);
            li.appendChild(strong);
            li.appendChild(document.createTextNode(' '));
          }
          if(item.right != null){
            const rightDiv = document.createElement('div');
            rightDiv.innerHTML = String(item.right);
            li.appendChild(rightDiv);
          }
          return li;
        }
        // string form
        if(typeof item === 'string'){
          // support left|right split (first pipe splits)
          if(item.includes('|')){
            const [left, ...rest] = item.split('|');
            const right = rest.join('|');
            const strong = document.createElement('strong');
            strong.textContent = left.trim();
            const rightDiv = document.createElement('div');
            rightDiv.innerHTML = right.trim();
            li.appendChild(strong);
            li.appendChild(document.createTextNode(' '));
            li.appendChild(rightDiv);
            return li;
          }
          // fallback: allow simple HTML
          li.innerHTML = item;
          return li;
        }
        // unknown type -> empty item
        li.textContent = String(item);
        return li;
      }

      // helper to create a <div class="item"> from an i18n list item
      function createDivItemFromI18n(item){
        const wrap = document.createElement('div');
        wrap.className = 'item';
        // object form: { left: 'Title', right: '<a>...</a>' }
        if(item && typeof item === 'object' && !Array.isArray(item)){
          if(item.left){
            const strong = document.createElement('strong');
            strong.textContent = String(item.left);
            wrap.appendChild(strong);
            wrap.appendChild(document.createTextNode(' '));
          }
          if(item.right != null){
            const rightDiv = document.createElement('div');
            rightDiv.innerHTML = String(item.right);
            wrap.appendChild(rightDiv);
          }
          return wrap;
        }
        // string form
        if(typeof item === 'string'){
          if(item.includes('|')){
            const [left, ...rest] = item.split('|');
            const right = rest.join('|');
            const strong = document.createElement('strong');
            strong.textContent = left.trim();
            const rightDiv = document.createElement('div');
            rightDiv.innerHTML = right.trim();
            wrap.appendChild(strong);
            wrap.appendChild(document.createTextNode(' '));
            wrap.appendChild(rightDiv);
            return wrap;
          }
          // fallback: allow simple HTML
          wrap.innerHTML = item;
          return wrap;
        }
        wrap.textContent = String(item);
        return wrap;
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