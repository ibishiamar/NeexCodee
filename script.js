/* ============================================
   NEEXCODEE - SCRIPT.JS
   ============================================ */

// ===== 1. TRANSLATIONS =====
const translations = {
    sq: {
        // Nav
        nav_home: "Kryefaqja",
        nav_services: "Shërbimet",
        nav_pricing: "Çmimet",
        nav_portfolio: "Portfolio",
        nav_about: "Rreth Nesh",
        nav_faq: "FAQ",
        nav_contact: "Kontakt",

        // Hero
        hero_badge: "🚀 Agjencia #1 e Zhvillimit",
        hero_title1: "Krijojmë",
        hero_title2: "Website",
        hero_title3: "që Rrit Biznesin Tënd",
        hero_desc: "NeexCodee ofron zgjidhje profesionale të kodimit, dizajnit dhe marketingut digjital për biznesin tuaj.",
        hero_btn1: "Filloni Projektin",
        hero_btn2: "Shiko Punimet",
        stat_projects: "Projekte",
        stat_clients: "Klientë",
        stat_years: "Vite Përvojë",
        stat_satisfaction: "Kënaqësi %",

        // Services
        serv_sub: "SHËRBIMET TONA",
        serv_title1: "Çfarë",
        serv_title2: "Ofrojmë",
        serv_desc: "Zgjidhje të plota digjitale të përshtatura për nevojat e biznesit tuaj",
        s1_title: "Zhvillim Web",
        s1_desc: "Website-e moderne, të shpejta dhe responsive me teknologjitë më të fundit.",
        s2_title: "Aplikacione Mobile",
        s2_desc: "Aplikacione iOS dhe Android me performancë të lartë dhe dizajn tërheqës.",
        s3_title: "Dizajn UI/UX",
        s3_desc: "Dizajn kreativ dhe intuitiv që përmirëson përvojën e përdoruesit.",
        s4_title: "Marketing Digjital",
        s4_desc: "Strategji SEO, reklamim dhe menaxhim i rrjeteve sociale për rritje.",
        s5_title: "E-Commerce",
        s5_desc: "Dyqane online të fuqishme me pagesa të sigurta dhe menaxhim të lehtë.",
        s6_title: "Siguri Kibernetike",
        s6_desc: "Mbrojtje e plotë për të dhënat dhe sistemet tuaja digjitale.",

        // Process
        proc_sub: "PROCESI",
        proc_title1: "Si",
        proc_title2: "Punojmë",
        proc_desc: "4 hapa të thjeshtë drejt suksesit digjital",
        proc1_title: "Konsultim",
        proc1_desc: "Dëgjojmë idetë dhe qëllimet e tua për projektin.",
        proc2_title: "Dizajn",
        proc2_desc: "Krijojmë mockup dhe dizajn unik sipas brandit tënd.",
        proc3_title: "Zhvillim",
        proc3_desc: "Kodojmë me teknologjitë më moderne dhe të shpejta.",
        proc4_title: "Lançim",
        proc4_desc: "Testojmë, lançojmë dhe mbështesim projektin tënd.",

        // About
        about_mission: "Misioni Ynë",
        about_mission_desc: "Të transformojmë idetë tuaja në realitet digjital.",
        about_sub: "RRETH NESH",
        about_title1: "Ekipi Pas",
        about_desc: "Ne jemi një ekip i pasionuar zhvilluesish, dizajnerësh dhe strategësh digjitalë që punojnë së bashku për të krijuar zgjidhje inovative.",
        about_l1: "Teknologji moderne dhe të provuara",
        about_l2: "Mbështetje 24/7 për klientët",
        about_l3: "Çmime konkurruese dhe transparente",
        about_l4: "Dorëzim në kohë i projekteve",
        about_btn: "Punoni me Ne",

        // Pricing
        price_sub: "ÇMIMET",
        price_title1: "Planet",
        price_title2: "Tona",
        price_desc: "Zgjidh planin që i përshtatet biznesit tënd",
        price1_name: "Basic",
        price1_f1: "1-3 faqe",
        price1_f2: "Responsive design",
        price1_f3: "Formë kontakti",
        price1_f4: "7 ditë dorëzim",
        price2_name: "Standard",
        price2_f1: "5-8 faqe",
        price2_f2: "Responsive + Animacione",
        price2_f3: "Blog & CMS",
        price2_f4: "SEO Bazik",
        price2_f5: "2 rishikime",
        price3_name: "Premium",
        price3_f1: "Faqe pa limit",
        price3_f2: "Dizajn Custom",
        price3_f3: "SEO i Plotë",
        price3_f4: "E-Commerce",
        price3_f5: "Mbështetje 24/7",
        popular: "🔥 POPULLOR",
        price_per: "/projekt",
        price_btn: "Zgjidh Planin",

        // Portfolio
        port_sub: "PORTFOLIO",
        port_title1: "Projektet e",
        port_title2: "Fundit",
        port_desc: "Disa nga punët tona më të mira për klientët",
        view_project: "Shiko Projektin",

        // Testimonials
        test_sub: "DËSHMI",
        test_title1: "Çfarë Thonë",
        test_title2: "Klientët",
        test_desc: "Përvoja reale nga klientët tanë",
        test1_text: '"NeexCodee transformoi biznesin tonë! Website-i i ri solli 3x më shumë klientë brenda 2 muajsh."',
        test2_text: '"Profesionalizëm i lartë, dorëzim në kohë dhe dizajn fantastik. Rekomandoj pa hezitim!"',
        test3_text: '"Shërbim i shkëlqyer! Çdo detaj u mendua me kujdes. Faleminderit NeexCodee!"',

        // FAQ
        faq_sub: "FAQ",
        faq_title1: "Pyetje të",
        faq_title2: "Shpeshta",
        faq_desc: "Përgjigjet për pyetjet më të zakonshme",
        faq1_q: "Sa kohë zgjat një projekt?",
        faq1_a: "Zakonisht 1-4 javë në varësi të kompleksitetit të projektit.",
        faq2_q: "A ofroni mbështetje pas lançimit?",
        faq2_a: "Po! Ofrojmë 30 ditë mbështetje falas për çdo projekt të përfunduar.",
        faq3_q: "A mund të përditësoj website-in vetë?",
        faq3_a: "Po, ofrojmë trajnim dhe CMS të lehtë për përdorim.",
        faq4_q: "Si funksionon pagesa?",
        faq4_a: "50% parapagesë dhe 50% pas përfundimit të projektit.",
        faq5_q: "A punoni me klientë ndërkombëtarë?",
        faq5_a: "Po! Punojmë me klientë nga e gjithë bota në distancë.",
        faq6_q: "Çfarë teknologjish përdorni?",
        faq6_a: "HTML, CSS, JavaScript, React, Node.js, WordPress dhe Figma.",


        // Contact
        cont_sub: "KONTAKT",
        cont_title1: "Le të",
        cont_title2: "Bashkëpunojmë",
        cont_desc: "Na kontaktoni për projektin tuaj të radhës",
        cont_address: "Adresa",
        cont_city: "Prishtinë, Kosovë",

        // Footer
        footer_desc: "Zgjidhje profesionale të kodimit për biznesin tuaj digjital.",
        footer_quick: "Lidhje të Shpejta",
        footer_services: "Shërbimet",
        footer_rights: "© 2026 NeexCodee. Të gjitha të drejtat e rezervuara.",

        // WhatsApp
        wa_tooltip: "Bisedo me ne!"
    },
    en: {
        // Nav
        nav_home: "Home",
        nav_services: "Services",
        nav_pricing: "Pricing",
        nav_portfolio: "Portfolio",
        nav_about: "About Us",
        nav_faq: "FAQ",
        nav_contact: "Contact",

        // Hero
        hero_badge: "🚀 #1 Development Agency",
        hero_title1: "We Create",
        hero_title2: "Websites",
        hero_title3: "That Grow Your Business",
        hero_desc: "NeexCodee offers professional coding, design and digital marketing solutions for your business.",
        hero_btn1: "Start Project",
        hero_btn2: "View Our Work",
        stat_projects: "Projects",
        stat_clients: "Clients",
        stat_years: "Years Experience",
        stat_satisfaction: "Satisfaction %",

        // Services
        serv_sub: "OUR SERVICES",
        serv_title1: "What We",
        serv_title2: "Offer",
        serv_desc: "Complete digital solutions tailored to your business needs",
        s1_title: "Web Development",
        s1_desc: "Modern, fast and responsive websites with the latest technologies.",
        s2_title: "Mobile Apps",
        s2_desc: "iOS and Android apps with high performance and attractive design.",
        s3_title: "UI/UX Design",
        s3_desc: "Creative and intuitive design that improves user experience.",
        s4_title: "Digital Marketing",
        s4_desc: "SEO strategies, advertising and social media management for growth.",
        s5_title: "E-Commerce",
        s5_desc: "Powerful online stores with secure payments and easy management.",
        s6_title: "Cyber Security",
        s6_desc: "Complete protection for your digital data and systems.",

        // Process
        proc_sub: "PROCESS",
        proc_title1: "How We",
        proc_title2: "Work",
        proc_desc: "4 simple steps to digital success",
        proc1_title: "Consultation",
        proc1_desc: "We listen to your ideas and project goals.",
        proc2_title: "Design",
        proc2_desc: "We create mockups and unique design for your brand.",
        proc3_title: "Development",
        proc3_desc: "We code with the most modern and fast technologies.",
        proc4_title: "Launch",
        proc4_desc: "We test, launch and support your project.",

        // About
        about_mission: "Our Mission",
        about_mission_desc: "To transform your ideas into digital reality.",
        about_sub: "ABOUT US",
        about_title1: "The Team Behind",
        about_desc: "We are a passionate team of developers, designers and digital strategists working together to create innovative solutions.",
        about_l1: "Modern and proven technologies",
        about_l2: "24/7 support for clients",
        about_l3: "Competitive and transparent pricing",
        about_l4: "On-time project delivery",
        about_btn: "Work With Us",

        // Pricing
        price_sub: "PRICING",
        price_title1: "Our",
        price_title2: "Plans",
        price_desc: "Choose the plan that fits your business",
        price1_name: "Basic",
        price1_f1: "1-3 pages",
        price1_f2: "Responsive design",
        price1_f3: "Contact form",
        price1_f4: "7 days delivery",
        price2_name: "Standard",
        price2_f1: "5-8 pages",
        price2_f2: "Responsive + Animations",
        price2_f3: "Blog & CMS",
        price2_f4: "Basic SEO",
        price2_f5: "2 revisions",
        price3_name: "Premium",
        price3_f1: "Unlimited pages",
        price3_f2: "Custom Design",
        price3_f3: "Full SEO",
        price3_f4: "E-Commerce",
        price3_f5: "24/7 Support",
        popular: "🔥 POPULAR",
        price_per: "/project",
        price_btn: "Choose Plan",

        // Portfolio
        port_sub: "PORTFOLIO",
        port_title1: "Latest",
        port_title2: "Projects",
        port_desc: "Some of our best work for clients",
        view_project: "View Project",

        // Testimonials
        test_sub: "TESTIMONIALS",
        test_title1: "What Our",
        test_title2: "Clients Say",
        test_desc: "Real experiences from our clients",
        test1_text: '"NeexCodee transformed our business! The new website brought 3x more clients in 2 months."',
        test2_text: '"High professionalism, on-time delivery and fantastic design. Highly recommend!"',
        test3_text: '"Excellent service! Every detail was carefully thought out. Thank you NeexCodee!"',

        // FAQ
        faq_sub: "FAQ",
        faq_title1: "Frequently Asked",
        faq_title2: "Questions",
        faq_desc: "Answers to the most common questions",
        faq1_q: "How long does a project take?",
        faq1_a: "Usually 1-4 weeks depending on project complexity.",
        faq2_q: "Do you offer post-launch support?",
        faq2_a: "Yes! We offer 30 days free support for every completed project.",
        faq3_q: "Can I update the website myself?",
        faq3_a: "Yes, we provide training and an easy-to-use CMS.",
        faq4_q: "How does payment work?",
        faq4_a: "50% upfront and 50% after project completion.",
        faq5_q: "Do you work with international clients?",
        faq5_a: "Yes! We work with clients from all over the world remotely.",
        faq6_q: "What technologies do you use?",
        faq6_a: "HTML, CSS, JavaScript, React, Node.js, WordPress and Figma.",

        // Newsletter
        news_title: "Get Exclusive Tips & Offers",
        news_desc: "Subscribe to our newsletter and get 10% off your first project!",
        news_placeholder: "Your email",
        news_btn: "Subscribe",
        news_note: "🔒 We don't share your email with anyone.",

        // Contact
        cont_sub: "CONTACT",
        cont_title1: "Let's",
        cont_title2: "Collaborate",
        cont_desc: "Contact us for your next project",
        cont_address: "Address",
        cont_city: "Prishtina, Kosovo",

        // Footer
        footer_desc: "Professional coding solutions for your digital business.",
        footer_quick: "Quick Links",
        footer_services: "Services",
        footer_rights: "© 2026 NeexCodee. All rights reserved.",

        // WhatsApp
        wa_tooltip: "Chat with us!"
    }
};

/* ============================================
   DOM READY
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {

    /* ===== 2. DARK MODE ===== */
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
    const savedTheme = localStorage.getItem('theme') || 'light';

    function setTheme(theme) {
        if (!themeIcon) return;
        if (theme === 'dark') {
            document.body.classList.add('dark');
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        }
    }

    setTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.contains('dark');
            setTheme(isDark ? 'light' : 'dark');
        });
    }

    /* ===== 3. LANGUAGE ===== */
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    let currentLang = localStorage.getItem('lang') || 'sq';

    function applyLanguage(lang) {
        const t = translations[lang];
        if (!t) return;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.textContent = t[key];
        });
        document.documentElement.lang = lang;
        if (langText) langText.textContent = lang === 'sq' ? 'EN' : 'SQ';
        localStorage.setItem('lang', lang);
    }

    applyLanguage(currentLang);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'sq' ? 'en' : 'sq';
            applyLanguage(currentLang);
        });
    }

    /* ===== 4. MOBILE MENU ===== */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    /* ===== 5. NAVBAR SCROLL ===== */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.1)';
            } else {
                navbar.style.padding = '15px 0';
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
            }
        });
    }

    /* ===== 6. SCROLL ANIMATION ===== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .portfolio-item, .info-item, .about-box, .pricing-card, .testimonial-card, .process-step').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.05}s`;
        observer.observe(el);
    });

    /* ===== 7. PORTFOLIO CLICK ===== */
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (!e.target.closest('a')) {
                const link = item.querySelector('a[target="_blank"]');
                if (link) window.open(link.href, '_blank');
            }
        });
    });

    /* ===== 8. FAQ ACCORDION ===== */
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;
        question.addEventListener('click', () => {
            document.querySelectorAll('.faq-item').forEach(other => {
                if (other !== item) other.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    /* ===== 9. COUNTER ANIMATION ===== */
    const counters = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-counter'));
                let count = 0;
                const duration = 1500;
                const increment = target / (duration / 16);

                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        el.textContent = Math.floor(count) + '+';
                        requestAnimationFrame(updateCount);
                    } else {
                        el.textContent = target + '+';
                    }
                };
                updateCount();
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

    /* ===== 10. NEWSLETTER FORM ===== */
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = newsletterForm.querySelector('button');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            setTimeout(() => {
                alert(currentLang === 'sq'
                    ? '✅ Faleminderit! U regjistruat me sukses. Kontrolloni email-in tuaj!'
                    : '✅ Thank you! You subscribed successfully. Check your email!');
                newsletterForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    /* ===== 11. BACK TO TOP ===== */
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});