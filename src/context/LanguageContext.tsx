import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'uz' | 'ru';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations: Record<Language, any> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      services: 'Services',
      portfolio: 'Portfolio',
      experience: 'Experience',
      blog: 'Blog',
      contact: 'Contact',
      hireMe: 'Hire Me',
    },
    hero: {
      badge: 'Available for Hire & Projects',
      greeting: "Hi, I'm",
      title: 'Abdurakhmanov Beksulton',
      subtitle: 'Software Engineer & Web Developer',
      description: 'I build high-performance, responsive web applications and empower students to master digital literacy and coding from absolute basics to advanced enterprise skills.',
      viewPortfolio: 'View Portfolio',
      contactMe: 'Contact Me',
      downloadCv: 'Download CV',
      editor: {
        skills: 'skills',
        passion: 'passion',
        mission: 'mission',
        impactDriven: 'impactDriven',
        comment: '// Transferring enterprise computer skills & coding',
      }
    },
    about: {
      title: 'About',
      titleAccent: 'Me',
      subheading: 'Software Engineering Graduate & Technology Enthusiast',
      p1: 'I am a Software Engineering graduate from TUIT with practical experience in building responsive web applications using HTML, CSS, JavaScript, and React JS. I focus on creating efficient, performant web interfaces.',
      p2: 'Beyond coding, I have experience in system administration, working with Linux and Windows systems, managing IT infrastructure, and utilizing CRM, Odoo, and Notion platforms. I am a fast learner, passionate about building reliable software and optimizing IT systems.',
      badges: {
        b1_title: 'Creative & Technical Architect',
        b1_desc: 'Merging clean, maintainable code with pixel-perfect design principles.',
        b2_title: 'Impact-Driven Mentorship',
        b2_desc: 'Equipping students with industry-relevant skills to kickstart their tech careers.',
        b3_title: 'Agile Innovation',
        b3_desc: 'Continuously researching and integrating cutting-edge tools into production.',
        b4_title: 'Performance-First Philosophy',
        b4_desc: 'Delivering SEO-optimized codebases with excellent performance budgets.',
      },
      stats: {
        projects: 'Projects Delivered',
        students: 'Students Taught',
        experience: 'Years Experience',
        satisfaction: 'Client Satisfaction',
      },
      location: 'Based in',
      locationValShort: 'Termez, UZB',
    },
    skills: {
      title: 'My',
      titleAccent: 'Skills',
      tabs: {
        frontend: 'Front-End Development',
        tools: 'Developer Tools',
        literacy: 'Computer Literacy',
      }
    },
    services: {
      title: 'My',
      titleAccent: 'Services',
      list: {
        s1: {
          title: 'Front-End Development',
          desc: 'Architecting modular, highly scalable web solutions using modern HTML5, CSS3, ES6+ JavaScript, and TypeScript.',
        },
        s2: {
          title: 'React Applications',
          desc: 'Developing robust Single Page Applications (SPAs) leveraging Redux Toolkit, Context API, and modern hook paradigms.',
        },
        s3: {
          title: 'Responsive Web Design',
          desc: 'Building flexible, mobile-first layouts that render beautifully across all display configurations and form factors.',
        },
        s4: {
          title: 'Landing Page Development',
          desc: 'Designing high-converting, performance-oriented landing pages focused on optimizing user acquisition and traffic conversion.',
        },
        s5: {
          title: 'UI/UX Translation',
          desc: 'Translating sophisticated Figma and Adobe XD prototypes into clean, semantic, and pixel-perfect production code.',
        },
        s6: {
          title: 'Web Performance Optimization',
          desc: 'Auditing and optimizing assets, bundler setups, and script evaluation times to hit excellent Lighthouse and Core Web Vitals scores.',
        },
        s7: {
          title: 'Digital Literacy Coaching',
          desc: 'Instructing individuals on operating system fundamentals, digital file structures, and essential data safety practices.',
        },
        s8: {
          title: 'Corporate Office Training',
          desc: 'Delivering advanced bootcamps in Microsoft Office (Excel automation, formulas, PowerPoint presentation design, Word structures).',
        },
        s9: {
          title: 'Hybrid Learning Formats',
          desc: 'Structuring interactive online webinars and offline practical lab sessions tailored to individual learning speeds.',
        },
      }
    },
    portfolio: {
      title: 'My',
      titleAccent: 'Portfolio',
      all: 'All',
      desc1: 'A complete React web app featuring courses, interactive quizzes, video modules, and student dashboard.',
      desc2: 'An interactive financial management tool to track expenses, visual spending charts, and set limits.',
      desc3: 'A vanilla JavaScript crypto tracker fetching live API rates, historical sparks, and search filters.',
      desc4: 'A modern, high-performance landing page for a creative agency. Responsive and light-weight.',
      desc5: 'A responsive typing test dashboard measuring WPM, accuracy, and highlighting errors in real-time.',
      desc6: 'An educational tool to help beginner CSS students visually learn Flexbox properties interactively.',
    },
    experience: {
      title: 'Work',
      titleAccent: 'Experience',
      list: {
        exp1: {
          role: 'Strong Junior Developer',
          desc: 'Developed responsive web interfaces and integrated backend APIs at Linko.uz.',
          b1: 'Developed responsive web interfaces using HTML, CSS, and JavaScript',
          b2: 'Built interactive UI components using React JS',
          b3: 'Collaborated with backend developers to integrate APIs, debugged and optimized application performance',
        },
        exp2: {
          role: 'Intern System Administrator',
          desc: 'Assisted in managing system infrastructure and maintained IT operations at Amusot.uz.',
          b1: 'Assisted in managing Linux and Windows systems and maintained company IT infrastructure',
          b2: 'Worked with CRM systems, Notion, and Odoo platforms',
          b3: 'Provided technical support to staff and resolved software/hardware issues',
        },
      }
    },
    education: {
      title: 'Education &',
      titleAccent: 'Certificates',
      list: {
        edu1: {
          degree: 'Bachelor of Software Engineering',
          details: 'Bachelor’s Degree in Software Engineering from Tashkent University of Information Technologies.',
        },
        edu2: {
          degree: 'Advanced React & Next.js Specialization',
          details: 'Intensive training on state hydration, SSR/SSG compilation, client-side rendering optimization, custom React hooks, and bundler configurations.',
        },
        edu3: {
          degree: 'Microsoft Certified Educator (MCE)',
          details: 'Earned pedagogical certification validating advanced tech integration competency across Microsoft Word, Excel automation, and PowerPoint presentations.',
        },
        edu4: {
          degree: 'Cybersecurity & Network Defense Fundamentals',
          details: 'Comprehensive study of encryption models, network threat mitigation, system firewalls, access control lists, and security audits.',
        },
      }
    },
    testimonials: {
      title: 'What',
      titleAccent: 'They Say',
      list: {
        t1: "Beksulton is an exceptional instructor! My Microsoft Excel and overall computer skills went from complete beginner to advanced level in just two months. The formulas and keyboard shortcuts he taught me have halved my daily reporting time.",
        t2: "The custom React application Beksulton built for our team is incredibly fast, responsive, and matches our design specifications perfectly. He has excellent communication skills and met all milestones ahead of schedule.",
        t3: "I took the Front-End development and web basics lessons. His pedagogical methods are extremely clear, breakdown complex concepts like JS async/await and CSS layouts into easily digestible steps. I secured my first internship!",
        t4: "Beksulton restructured and optimized our landing page codebase. Our bounce rate dropped by 18% because the site now loads in under a second. Highly skilled developer who pays attention to details.",
      }
    },
    blog: {
      title: 'Latest',
      titleAccent: 'Articles',
      readFull: 'Read Full Article',
      list: {
        b1: {
          title: 'Mastering Advanced Excel Formulas for Business Reporting',
          excerpt: 'Discover how VLOOKUP, INDEX-MATCH, XLOOKUP, and pivot tables can streamline your data analysis and reduce manual reporting labor.',
        },
        b2: {
          title: 'Understanding React 19: The New Features You Should Learn Today',
          excerpt: 'An overview of React Server Components, the upcoming React compiler, actions hooks, and how form handling is getting simplified.',
        },
        b3: {
          title: 'JavaScript Clean Code Rules: Writing Maintainable Web Apps',
          excerpt: 'A comprehensive checklist for junior developers on refactoring nesting statements, utilizing array methods, naming variables, and avoiding global states.',
        },
        b4: {
          title: 'Securing Your Digital Space: Essential Cybersecurity Habits',
          excerpt: 'Basic internet hygiene advice: configuring simple multi-factor authentication, identifying phishing emails, and managing credentials safely.',
        },
      }
    },
    contact: {
      title: 'Get In',
      titleAccent: 'Touch',
      heading: 'Contact Details',
      desc: 'Feel free to reach out for website development inquiries, corporate training needs, or student enrollment questions.',
      locationVal: 'Termez, Uzbekistan',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Your Message',
        placeholderName: 'Beksulton',
        placeholderEmail: 'example@mail.com',
        placeholderSubject: 'Project Inquiry',
        placeholderMsg: 'Hi Beksulton, I would like to discuss...',
        error: 'Failed to send message. Please try again or email directly.',
        btnSend: 'Send Message',
        successTitle: 'Thank You!',
        successDesc: 'Your message has been sent successfully. Beksulton will get back to you shortly.',
        btnAgain: 'Send Another Message',
      }
    }
  },
  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Men haqimda',
      skills: 'Ko\'nikmalar',
      services: 'Xizmatlar',
      portfolio: 'Loyihalar',
      experience: 'Tajriba',
      blog: 'Blog',
      contact: 'Aloqa',
      hireMe: 'Hamkorlik',
    },
    hero: {
      badge: 'Hamkorlik uchun ochiqman',
      greeting: 'Salom, men',
      title: 'Abdurakhmanov Beksulton',
      subtitle: 'Dasturiy Ta\'minot Muhandisi & Veb Dasturchi',
      description: 'Men yuqori samaradorlikka ega, moslashuvchan veb-ilovalarni yarataman hamda o\'quvchilarga kompyuter savodxonligi va dasturlashni boshlang\'ichdan professional darajagacha o\'rgataman.',
      viewPortfolio: 'Loyihalar',
      contactMe: 'Bog\'lanish',
      downloadCv: 'CV yuklab olish',
      editor: {
        skills: 'ko_nikmalar',
        passion: 'qiziqish',
        mission: 'maqsad',
        impactDriven: 'natijaga_yo_naltirilgan',
        comment: '// Enterprise kompyuter ko\'nikmalari va dasturlashni o\'rgatish',
      }
    },
    about: {
      title: 'Men',
      titleAccent: 'Haqimda',
      subheading: 'Dasturiy Ta\'minot Muhandisligi Bitiruvchisi & Texnologiya Ishqibozi',
      p1: 'Men TATU dasturiy ta\'minot muhandisligi yo\'nalishi bitiruvchisiman. HTML, CSS, JavaScript va React JS yordamida moslashuvchan va chiroyli veb-ilovalarni yaratish bo\'yicha amaliy tajribaga egaman.',
      p2: 'Veb-dasturlashdan tashqari, men Linux va Windows tizimlarini boshqarish, IT infratuzilmani saqlash hamda CRM, Odoo va Notion platformalari bilan ishlash bo\'yicha tizim administratori sifatida ham tajribaga egaman.',
      badges: {
        b1_title: 'Kreativ va Texnik Arxitektor',
        b1_desc: 'Toza, tartibli kod yozish va dizayn tamoyillariga to\'liq amal qilish.',
        b2_title: 'Natijador Mentorlik',
        b2_desc: 'O\'quvchilarga karyera boshlash uchun zarur bo\'lgan amaliy ko\'nikmalarni o\'rgatish.',
        b3_title: 'Tezkor Innovatsiyalar',
        b3_desc: 'Doimiy ravishda yangi texnologiyalarni tadqiq qilish va loyihalarga tatbiq etish.',
        b4_title: 'Samaradorlik falsafasi',
        b4_desc: 'Lighthouse va SEO ko\'rsatkichlari yuqori bo\'lgan kod bazalarini yaratish.',
      },
      stats: {
        projects: 'Bajarilgan loyihalar',
        students: 'O\'qitilgan talabalar',
        experience: 'Yillik tajriba',
        satisfaction: 'Mijozlar roziligi',
      },
      location: 'Manzil',
      locationValShort: 'Termiz, Surxondaryo',
    },
    skills: {
      title: 'Mening',
      titleAccent: 'Ko\'nikmalarim',
      tabs: {
        frontend: 'Front-End Dasturlash',
        tools: 'Dasturchi Asboblari',
        literacy: 'Kompyuter Savodxonligi',
      }
    },
    services: {
      title: 'Mening',
      titleAccent: 'Xizmatlarim',
      list: {
        s1: {
          title: 'Front-End Dasturlash',
          desc: 'Zamonaviy HTML5, CSS3, JavaScript (ES6+) va TypeScript yordamida modulli va kengayuvchan veb-yechimlarni yaratish.',
        },
        s2: {
          title: 'React Ilovalar',
          desc: 'Redux Toolkit, Context API va zamonaviy React hooklaridan foydalanib mustahkam Bir Sahifali Ilovlar (SPA) yaratish.',
        },
        s3: {
          title: 'Moslashuvchan Veb Dizayn',
          desc: 'Saytning barcha turdagi qurilmalarda (mobil, planshet va kompyuter) mukammal va chiroyli ko\'rinishini ta\'minlash.',
        },
        s4: {
          title: 'Landing Page Yaratish',
          desc: 'Foydalanuvchilarni mijozga aylantirishga yo\'naltirilgan, yuqori samaradorlikka ega savdo sahifalarini ishlab chiqish.',
        },
        s5: {
          title: 'UI/UX Kodga O\'tkazish',
          desc: 'Figma yoki Adobe XD dizaynlarini toza, semantik va piksel-perfect ko\'rinishida kodga o\'girish.',
        },
        s6: {
          title: 'Tizimni Optimallashtirish',
          desc: 'Sayt tezligini oshirish, Lighthouse va Core Web Vitals audit ko\'rsatkichlarini maksimal darajaga ko\'tarish.',
        },
        s7: {
          title: 'Raqamli Savodxonlik',
          desc: 'Operatsion tizim asoslari, fayllar bilan ishlash va internet xavfsizligi bo\'yicha mukammal darslar.',
        },
        s8: {
          title: 'Microsoft Office Kurslari',
          desc: 'Microsoft Word, Excel (murakkab formulalar va tahlillar) hamda PowerPoint-da professional prezentatsiyalar tayyorlash bo\'yicha darslar.',
        },
        s9: {
          title: 'Gibrid Dars Formatlari',
          desc: 'O\'quvchining o\'zlashtirish tezligi va qulayligiga qarab moslashtirilgan onlayn va oflayn darslar.',
        },
      }
    },
    portfolio: {
      title: 'Mening',
      titleAccent: 'Loyihalarim',
      all: 'Hammasi',
      desc1: 'React-da yozilgan to\'liq onlayn ta\'lim platformasi: darslar, viktorinalar va talabalar paneli mavjud.',
      desc2: 'Mablag\'lar va xarajatlarni kuzatib borish, tahlil diagrammalari va limitlar o\'rnatish uchun interfeys.',
      desc3: 'JavaScript-da yozilgan, real vaqtda API orqali kripto kurslarini ko\'rsatuvchi interfeys.',
      desc4: 'Ijodiy agentlik uchun yaratilgan, tez yuklanuvchi va vizual boy zamonaviy landing sahifasi.',
      desc5: 'Klaviaturada yozish tezligini (WPM), aniqligini o\'lchovchi va xatolarni ko\'rsatuvchi dastur.',
      desc6: 'CSS Flexbox xususiyatlarini vizual va interaktiv tarzda o\'rganish imkonini beruvchi ta\'limiy loyiha.',
    },
    experience: {
      title: 'Ish',
      titleAccent: 'Tajribasi',
      list: {
        exp1: {
          role: 'Strong Junior Dasturchi',
          desc: 'Linko.uz kompaniyasida moslashuvchan veb-interfeyslar va backend API-larni ishlab chiqish.',
          b1: 'HTML, CSS va JavaScript yordamida moslashuvchan veb-interfeyslarni ishlab chiqdim',
          b2: 'React JS yordamida interaktiv foydalanuvchi interfeysi komponentlarini yaratdim',
          b3: 'Backend dasturchilari bilan API integratsiyasi ustida ishladim hamda unumdorlikni optimallashtirdim',
        },
        exp2: {
          role: 'Tizim Administratori Intern',
          desc: 'Amusot.uz kompaniyasida tizim infratuzilmasini boshqarish va IT operatsiyalarini qo\'llab-quvvatlash.',
          b1: 'Linux va Windows tizimlarini boshqarishda hamda kompaniya IT infratuzilmasini saqlashda yordam berdim',
          b2: 'CRM tizimlari, Notion va Odoo platformalari bilan ishladim',
          b3: 'Xodimlarga texnik yordam ko\'rsatdim va apparat/dasturiy ta\'minot muammolarini hal qildim',
        },
      }
    },
    education: {
      title: 'Ta\'lim va',
      titleAccent: 'Sertifikatlar',
      list: {
        edu1: {
          degree: 'Dasturiy Ta\'minot Muhandisligi Bakalavri',
          details: 'Toshkent Axborot Texnologiyalari Universitetida (TATU) dasturiy ta\'minot muhandisligi bo\'yicha bakalavr darajasi.',
        },
        edu2: {
          degree: 'Advanced React & Next.js Sertifikati',
          details: 'Server va mijoz yuklanishini optimallashtirish (SSR/SSG), React hooklari va loyihani yig\'ish (bundling) bo\'yicha chuqurlashtirilgan kurs.',
        },
        edu3: {
          degree: 'Microsoft Certified Educator (MCE)',
          details: 'Microsoft Word, Excel va PowerPoint-dan ta\'lim jarayonida foydalanish bo\'yicha pedagogik sertifikat.',
        },
        edu4: {
          degree: 'Kiberxavfsizlik va Tarmoq Mudofaasi',
          details: 'Google tomonidan taqdim etilgan ma\'lumotlarni shifrlash, tahdidlarning oldini olish va xavfsizlik auditi bo\'yicha kurs.',
        },
      }
    },
    testimonials: {
      title: 'Mijozlar',
      titleAccent: 'Fikrlari',
      list: {
        t1: "Beksulton ajoyib o'qituvchi! Men Microsoft Excel formulasini va kompyuterdan foydalanishni 2 oy ichida noldan mukammal darajaga ko'tardim. Hozirda hisobotlarimni 2 barobar tezroq bajaryapman.",
        t2: "Beksulton bizning jamoa uchun yaratib bergan React ilovasi juda tez ishlayapti va dizaynga to'liq mos keladi. U belgilangan rejalardan oldinroq vazifalarni topshirdi.",
        t3: "Men Front-End dasturlash asoslari kursida o'qidim. U murakkab JS asinxron operatsiyalarini va CSS layoutlarni juda sodda va tushunarli qilib o'rgatdi. Natijada birinchi amaliyotimni boshladim!",
        t4: "Beksulton bizning savdo sahifamiz kodini optimallashtirib berdi. Sayt 1 soniyadan kam vaqtda yuklanishi natijasida mijozlar yo'qotilishi 18% ga kamaydi. Ishiga juda mas'uliyatli dasturchi.",
      }
    },
    blog: {
      title: 'So\'nggi',
      titleAccent: 'Maqolalar',
      readFull: 'To\'liq o\'qish',
      list: {
        b1: {
          title: 'Biznes tahlilida Excelning murakkab formulalaridan foydalanish',
          excerpt: 'VLOOKUP, INDEX-MATCH, XLOOKUP va pivot jadvallar orqali ma\'lumotlarni tahlil qilish va hisobotlarni avtomatlashtirish yo\'llari.',
        },
        b2: {
          title: 'React 19: Bugun o\'rganishingiz kerak bo\'lgan yangi xususiyatlar',
          excerpt: 'React Server Components, yangi React Compiler va formalar bilan ishlashning soddalashtirilgan imkoniyatlari sharhi.',
        },
        b3: {
          title: 'JavaScript Toza Kod Qoidalari: Tushunarli Ilovalar Yozish',
          excerpt: 'Murakkab shart operatorlarini soddalashtirish, massiv metodlaridan to\'g\'ri foydalanish va toza kod yozish bo\'yicha qo\'llanma.',
        },
        b4: {
          title: 'Raqamli Xavfsizlik: Har bir inson bilishi shart bo\'lgan qoidalar',
          excerpt: 'Ikki bosqichli autentifikatsiya, fishing elektron xatlaridan himoyalanish va parollarni xavfsiz boshqarish bo\'yicha tavsiyalar.',
        },
      }
    },
    contact: {
      title: 'Men bilan',
      titleAccent: 'Bog\'lanish',
      heading: 'Aloqa Ma\'lumotlari',
      desc: 'Veb-sayt yaratish bo\'yicha loyihalar, korporativ ta\'lim yoki darslarga yozilish bo\'yicha savollaringiz bo\'lsa bog\'laning.',
      locationVal: 'Surxondaryo, Termiz',
      form: {
        name: 'To\'liq ismingiz',
        email: 'Elektron pochta manzilingiz',
        phone: 'Telefon raqamingiz',
        subject: 'Mavzu',
        message: 'Sizning xabaringiz',
        placeholderName: 'Beksulton',
        placeholderEmail: 'example@mail.com',
        placeholderSubject: 'Loyiha masalasi',
        placeholderMsg: 'Salom Beksulton, men quyidagi loyihani muhokama qilmoqchi edim...',
        error: 'Xabarni yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.',
        btnSend: 'Xabarni Yuborish',
        successTitle: 'Rahmat!',
        successDesc: 'Xabaringiz muvaffaqiyatli yuborildi. Beksulton tez orada siz bilan bog\'lanadi.',
        btnAgain: 'Yana Xabar Yuborish',
      }
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      skills: 'Навыки',
      services: 'Услуги',
      portfolio: 'Портфолио',
      experience: 'Опыт',
      blog: 'Блог',
      contact: 'Контакты',
      hireMe: 'Связаться',
    },
    hero: {
      badge: 'Доступен для предложений и проектов',
      greeting: 'Привет, я',
      title: 'Абдурахманов Бексултон',
      subtitle: 'Разработчик ПО & Веб-разработчик',
      description: 'Я создаю высокопроизводительные, адаптивные веб-приложения и помогаю студентам осваивать цифровую грамотность и программирование от основ до продвинутых навыков.',
      viewPortfolio: 'Портфолио',
      contactMe: 'Связаться',
      downloadCv: 'Скачать CV',
      editor: {
        skills: 'навыки',
        passion: 'страсть',
        mission: 'миссия',
        impactDriven: 'ориентация_на_результат',
        comment: '// Обучение компьютерной грамотности и веб-разработке',
      }
    },
    about: {
      title: 'Обо',
      titleAccent: 'Мне',
      subheading: 'Связующее звено между веб-инженерией и цифровым образованием',
      p1: 'Я веб-разработчик и преподаватель в сфере IT, создающий современные пользовательские интерфейсы. Применяя React, Next.js и TypeScript, я превращаю сложные концепты в производительные веб-приложения, работающие без сбоев.',
      p2: 'Параллельно с веб-разработкой, я создаю и провожу курсы компьютерной грамотности и сетевой безопасности. Обучив более 200 студентов, моя цель — сделать технологии доступными для каждого и помочь специалистам преуспеть в цифровом мире.',
      badges: {
        b1_title: 'Креативный и технический архитектор',
        b1_desc: 'Сочетание чистого, поддерживаемого кода с принципами Pixel-Perfect дизайна.',
        b2_title: 'Обучение на результат',
        b2_desc: 'Даю студентам актуальные практические знания для старта в сфере IT.',
        b3_title: 'Гибкие инновации',
        b3_desc: 'Регулярно тестирую и внедряю современные инструменты разработки на практике.',
        b4_title: 'Приоритет производительности',
        b4_desc: 'Оптимизированные сборки веб-сайтов с отличными показателями скорости загрузки.',
      },
      stats: {
        projects: 'Проектов сдано',
        students: 'Студентов обучено',
        experience: 'Лет опыта',
        satisfaction: 'Довольных клиентов',
      },
      location: 'Локация',
      locationValShort: 'Термез, Сурхандарья',
    },
    skills: {
      title: 'Мои',
      titleAccent: 'Навыки',
      tabs: {
        frontend: 'Разработка Front-End',
        tools: 'Инструменты',
        literacy: 'Компьютерная грамотность',
      }
    },
    services: {
      title: 'Мои',
      titleAccent: 'Услуги',
      list: {
        s1: {
          title: 'Фронтенд-разработка',
          desc: 'Проектирование масштабируемых и модульных интерфейсов с использованием HTML5, CSS3, JavaScript и TypeScript.',
        },
        s2: {
          title: 'React-приложения',
          desc: 'Разработка динамических одностраничных веб-приложений (SPA) на базе Redux Toolkit, Context API и современного React.',
        },
        s3: {
          title: 'Адаптивная верстка',
          desc: 'Обеспечение идеального отображения и удобства работы сайтов на любых экранах (смартфоны, планшеты, компьютеры).',
        },
        s4: {
          title: 'Разработка Landing Page',
          desc: 'Создание продающих страниц с высокой конверсией, направленных на привлечение и удержание аудитории.',
        },
        s5: {
          title: 'Перенос UI/UX дизайна',
          desc: 'Профессиональный перенос интерфейсов из макетов Figma и Adobe XD в чистый, валидный семантический код.',
        },
        s6: {
          title: 'Оптимизация сайтов',
          desc: 'Повышение скорости загрузки, сжатие бандлов и медиа, максимизация показателей Core Web Vitals.',
        },
        s7: {
          title: 'Компьютерные курсы',
          desc: 'Обучение работе с ОС, управлению файлами и ключевым правилам кибербезопасности для начинающих.',
        },
        s8: {
          title: 'Microsoft Office',
          desc: 'Обучение работе в Excel (сложные функции, автоматизация таблиц), составление отчетов в Word и презентаций в PowerPoint.',
        },
        s9: {
          title: 'Гибридный формат',
          desc: 'Интерактивные онлайн-вебинары и очные занятия, адаптированные под индивидуальный темп учащегося.',
        },
      }
    },
    portfolio: {
      title: 'Мое',
      titleAccent: 'Портфолио',
      all: 'Все',
      desc1: 'Образовательная платформа на React с курсами, тестами, видео-лекциями и панелью успеваемости.',
      desc2: 'Интерактивная панель управления финансами: учет расходов, диаграммы трат и лимиты бюджетов.',
      desc3: 'Криптовалютный трекер на чистом JS с выводом актуальных биржевых курсов по API.',
      desc4: 'Современный, быстрый и визуально привлекательный лендинг для креативного агентства.',
      desc5: 'Веб-приложение для тестирования скорости печати (WPM), точности ввода и подсвета опечаток.',
      desc6: 'Интерактивный тренажер для наглядного изучения Flexbox-свойств начинающими CSS-разработчиками.',
    },
    experience: {
      title: 'Опыт',
      titleAccent: 'Работы',
      list: {
        exp1: {
          role: 'Strong Junior Разработчик',
          desc: 'Разработка адаптивных веб-интерфейсов и интеграция серверных API в Linko.uz.',
          b1: 'Разрабатывал адаптивные веб-интерфейсы с использованием HTML, CSS и JavaScript',
          b2: 'Создавал интерактивные компоненты пользовательского интерфейса с использованием React JS',
          b3: 'Сотрудничал с бэкенд-разработчиками для интеграции API, отлаживал и оптимизировал производительность',
        },
        exp2: {
          role: 'Стажер Системный Администратор',
          desc: 'Управление системной инфраструктурой и ИТ-операциями в Amusot.uz.',
          b1: 'Помогал в управлении системами Linux и Windows и поддержке ИТ-инфраструктуры компании',
          b2: 'Работал с CRM-системами, платформами Notion и Odoo',
          b3: 'Предоставлял техническую поддержку сотрудникам и решал проблемы с аппаратным и программным обеспечением',
        },
      }
    },
    education: {
      title: 'Обучение и',
      titleAccent: 'Сертификаты',
      list: {
        edu1: {
          degree: 'Бакалавр программной инженерии',
          details: 'Степень бакалавра программной инженерии в Ташкентском университете информационных технологий (ТУИТ).',
        },
        edu2: {
          degree: 'Специализация React и Next.js',
          details: 'Интенсив по рендерингу (SSR/SSG), жизненному циклу React, оптимизации хуков и конфигурациям сборщиков.',
        },
        edu3: {
          degree: 'Microsoft Certified Educator (MCE)',
          details: 'Педагогическая сертификация, подтверждающая навыки внедрения IT-инструментов MS Office в учебные процессы.',
        },
        edu4: {
          degree: 'Основы кибербезопасности',
          details: 'Программа от Google по сетевой защите, шифрованию, предотвращению фишинговых угроз и аудиту доступов.',
        },
      }
    },
    testimonials: {
      title: 'Отзывы',
      titleAccent: 'Клиентов',
      list: {
        t1: "Бексултон — отличный преподаватель! Мои навыки в Excel поднялись с нуля до продвинутого уровня всего за 2 месяца. Формулы и горячие клавиши сократили мою рутину в два раза.",
        t2: "React-приложение, созданное Бексултоном для нашего агентства, работает невероятно быстро и выглядит отлично. Он сдал работу с опережением графика.",
        t3: "Я проходила обучение основам фронтенд-разработки. Он очень просто объяснил сложные асинхронные операции в JS и сетки CSS. По итогу курса я нашла первую стажировку!",
        t4: "Бексултон оптимизировал код нашей посадочной страницы. Скорость загрузки сократилась до секунды, благодаря чему показатель отказов снизился на 18%.",
      }
    },
    blog: {
      title: 'Статьи и',
      titleAccent: 'Советы',
      readFull: 'Читать полностью',
      list: {
        b1: {
          title: 'Освоение сложных формул Excel для бизнес-отчетов',
          excerpt: 'Как использовать VLOOKUP, INDEX-MATCH, XLOOKUP и сводные таблицы для автоматизации рутинного анализа данных.',
        },
        b2: {
          title: 'Что нового в React 19: Главные фичи, которые нужно знать',
          excerpt: 'Обзор компилятора React, серверных компонентов, хуков форм и новых способов обработки действий.',
        },
        b3: {
          title: 'Чистый код в JavaScript: Пишем поддерживаемые веб-приложения',
          excerpt: 'Пошаговый гайд по рефакторингу вложенных циклов, правильному именованию и использованию современных методов массивов.',
        },
        b4: {
          title: 'Безопасность в сети: Правила кибергигиены для каждого',
          excerpt: 'Настройка двухфакторной аутентификации, защита от фишинга и надежные способы хранения паролей.',
        },
      }
    },
    contact: {
      title: 'Связаться',
      titleAccent: 'Со мной',
      heading: 'Контакты',
      desc: 'Напишите по поводу разработки веб-сайтов, корпоративных тренингов или записи на обучение.',
      locationVal: 'Термез, Сурхандарья',
      form: {
        name: 'Ваше имя',
        email: 'Адрес эл. почты',
        phone: 'Номер телефона',
        subject: 'Тема сообщения',
        message: 'Ваше сообщение',
        placeholderName: 'Бексултон',
        placeholderEmail: 'example@mail.com',
        placeholderSubject: 'Вопрос по проекту',
        placeholderMsg: 'Привет, Бексултон! Я бы хотел обсудить...',
        error: 'Не удалось отправить сообщение. Пожалуйста, попробуйте позже.',
        btnSend: 'Отправить',
        successTitle: 'Спасибо!',
        successDesc: 'Ваше сообщение успешно отправлено. Бексултон свяжется с вами в ближайшее время.',
        btnAgain: 'Отправить еще раз',
      }
    }
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string) => {
    const keys = key.split('.');
    let current = translations[language];
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        return key;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
