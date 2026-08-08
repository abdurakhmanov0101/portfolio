const fs = require('fs');
const PDFDocument = require('pdfkit');

const doc = new PDFDocument({ margin: 40, size: 'A4' });

doc.pipe(fs.createWriteStream('./public/Beksulton_Abdurakhmanov_CV.pdf'));

// COLORS & FONTS
const colorPrimary = '#0f172a'; // Slate 900
const colorSecondary = '#334155'; // Slate 700
const colorAccent = '#059669'; // Emerald 600
const colorLight = '#64748b'; // Slate 500
const colorLine = '#e2e8f0';

// HEADER
doc.font('Helvetica-Bold').fontSize(26).fillColor(colorPrimary).text('Beksulton Abdurakhmanov', { align: 'center' });
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fontSize(14).fillColor(colorAccent).text('Senior Frontend Engineer', { align: 'center' });
doc.moveDown(0.3);
doc.font('Helvetica').fontSize(10).fillColor(colorLight).text(
  'Tashkent, Uzbekistan | beksulton.abdurakhmanov@example.com | github.com/abdurakhmanov0101', 
  { align: 'center' }
);
doc.moveDown(1.5);

// HELPER FUNCTION: Section Header
function addSectionHeader(title) {
  doc.fillColor(colorPrimary).font('Helvetica-Bold').fontSize(14).text(title);
  doc.moveTo(40, doc.y + 4).lineTo(555, doc.y + 4).strokeColor(colorLine).lineWidth(1.5).stroke();
  doc.moveDown(0.8);
}

// PROFILE
addSectionHeader('PROFESSIONAL SUMMARY');
doc.font('Helvetica').fontSize(10.5).fillColor(colorSecondary).lineGap(4).text(
  "Results-driven Senior Frontend Engineer with over 3 years of deep expertise in React.js, Next.js, and TypeScript ecosystem. " +
  "Proven track record of architecting highly scalable, state-of-the-art web applications from zero to production. " +
  "Passionate about writing clean, maintainable code, optimizing Core Web Vitals, and implementing premium UI/UX designs with fluid animations. " +
  "Strong leadership skills with experience in mentoring teams, establishing rigorous code quality standards, and driving agile methodologies."
);
doc.moveDown(1.5);

// EXPERIENCE
addSectionHeader('PROFESSIONAL EXPERIENCE');

const experiences = [
  {
    company: 'Brain IT Company', period: '2025 - Present', role: 'Senior Frontend Engineer',
    desc: 'Leading the frontend engineering team to deliver robust, enterprise-grade web solutions.',
    bullets: [
      'Architected and implemented scalable, component-driven UI systems using React, TypeScript, and Next.js, accelerating feature delivery by 35%.',
      'Optimized application performance and Core Web Vitals, achieving a 40% reduction in initial load times through advanced code-splitting and lazy loading.',
      'Mentored a team of junior and mid-level developers, conducting comprehensive code reviews and enforcing CI/CD best practices.',
      'Collaborated closely with product managers and UI/UX designers to translate complex requirements into intuitive, accessible user interfaces.'
    ]
  },
  {
    company: 'Linko.uz', period: '2024 - 2025', role: 'React Frontend Developer',
    desc: 'Engineered high-traffic e-commerce platforms and complex interactive dashboards.',
    bullets: [
      'Developed and maintained large-scale state management architectures using Redux Toolkit and React Query for real-time data synchronization.',
      'Integrated secure third-party RESTful APIs, payment gateways, and authentication protocols (OAuth, JWT).',
      'Implemented highly responsive, mobile-first layouts using Tailwind CSS, ensuring pixel-perfect cross-browser compatibility.'
    ]
  },
  {
    company: 'Amusot.uz', period: '2022 - 2024', role: 'Web Developer',
    desc: 'Spearheaded frontend migration and built dynamic marketing landing pages.',
    bullets: [
      'Successfully migrated legacy monolithic codebases to modern React.js architectures, enhancing maintainability and reducing technical debt.',
      'Engineered fluid, state-of-the-art micro-animations using Framer Motion and GSAP to elevate brand identity and user engagement.',
      'Streamlined build configurations and development workflows using Vite and Webpack, cutting deployment times in half.'
    ]
  }
];

experiences.forEach(exp => {
  doc.font('Helvetica-Bold').fontSize(12).fillColor(colorPrimary).text(exp.role, { continued: true })
     .font('Helvetica').fillColor(colorLight).text(`  |  ${exp.company}  |  ${exp.period}`, { align: 'right' });
  doc.moveDown(0.3);
  doc.font('Helvetica-Oblique').fontSize(10.5).fillColor(colorSecondary).text(exp.desc);
  doc.moveDown(0.3);
  exp.bullets.forEach(bullet => {
    doc.font('Helvetica').fontSize(10).fillColor(colorSecondary).lineGap(3).text(`• ${bullet}`, { indent: 10 });
  });
  doc.moveDown(1);
});

// SKILLS
addSectionHeader('TECHNICAL COMPETENCIES');
const skills = [
  { category: 'Frontend Architecture', tools: 'React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3' },
  { category: 'State Management & APIs', tools: 'Redux Toolkit, React Query, Context API, REST APIs, GraphQL, Axios' },
  { category: 'UI/UX & Animation', tools: 'Tailwind CSS, Sass/SCSS, Framer Motion, GSAP, Radix UI, Figma' },
  { category: 'Build Tools & DevOps', tools: 'Vite, Webpack, Git, GitHub Actions, CI/CD, npm/Yarn, Chrome DevTools' },
  { category: 'Core Principles', tools: 'Responsive Design, Web Performance Optimization, SEO, Accessibility (a11y), Clean Code' }
];

skills.forEach(skill => {
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(colorPrimary).text(`${skill.category}: `, { continued: true })
     .font('Helvetica').fillColor(colorSecondary).text(skill.tools);
  doc.moveDown(0.4);
});
doc.moveDown(1);

// SELECTED PROJECTS
addSectionHeader('SELECTED PROJECTS');
const projects = [
  { name: 'Pharmacy Management System', desc: 'A robust dashboard for inventory and sales tracking. Built with React and Redux.' },
  { name: 'Biology & Medical Portals', desc: 'Educational web platforms featuring interactive UI elements and complex state logic.' },
  { name: 'Premium Developer Portfolio', desc: 'An ultra-modern, performant personal portfolio showcasing glassmorphism and lazy loading.' }
];

projects.forEach(proj => {
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(colorPrimary).text(`• ${proj.name}: `, { continued: true, indent: 10 })
     .font('Helvetica').fillColor(colorSecondary).text(proj.desc);
  doc.moveDown(0.3);
});
doc.moveDown(1);

// EDUCATION
addSectionHeader('EDUCATION & CERTIFICATIONS');
doc.font('Helvetica-Bold').fontSize(11).fillColor(colorPrimary).text('Bachelor of Software Engineering', { continued: true })
   .font('Helvetica').fontSize(10.5).fillColor(colorLight).text('  |  2020 - 2024', { align: 'right' });
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(10).fillColor(colorSecondary).text('Tashkent University of Information Technologies (TUIT)');
doc.font('Helvetica-Oblique').fontSize(9).text('Focus: Algorithms, Data Structures, Software Architecture');
doc.moveDown(0.8);

doc.font('Helvetica-Bold').fontSize(11).fillColor(colorPrimary).text('Modern Frontend Development Course', { continued: true })
   .font('Helvetica').fontSize(10.5).fillColor(colorLight).text('  |  2023', { align: 'right' });
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(10).fillColor(colorSecondary).text('IT Academy');

doc.end();
console.log('Expanded CV Generated successfully at public/Beksulton_Abdurakhmanov_CV.pdf');
