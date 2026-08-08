const fs = require('fs');
const PDFDocument = require('pdfkit');

const doc = new PDFDocument({ margin: 50, size: 'A4' });

doc.pipe(fs.createWriteStream('./public/Beksulton_Abdurakhmanov_CV.pdf'));

// Add styling and content
doc.font('Helvetica-Bold').fontSize(24).text('Beksulton Abdurakhmanov', { align: 'center' });
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(12).fillColor('#059669').text('Senior Frontend Developer', { align: 'center' });
doc.moveDown(0.2);
doc.fillColor('#64748b').fontSize(10).text('beksulton.abdurakhmanov@example.com | Tashkent, Uzbekistan | github.com/abdurakhmanov0101', { align: 'center' });
doc.moveDown(2);

// PROFILE
doc.fillColor('#0f172a').font('Helvetica-Bold').fontSize(14).text('PROFESSIONAL PROFILE');
doc.moveTo(50, doc.y + 2).lineTo(545, doc.y + 2).strokeColor('#e2e8f0').stroke();
doc.moveDown(1);
doc.font('Helvetica').fontSize(10).fillColor('#334155').text(
  "Senior Frontend Developer with over 3 years of experience specializing in React.js, Next.js, and TypeScript. " +
  "Proven track record of building highly scalable, performance-optimized, and aesthetically premium web applications. " +
  "Strong foundation in modern UI/UX principles, glassmorphism design, and state management architectures."
);
doc.moveDown(1.5);

// EXPERIENCE
doc.fillColor('#0f172a').font('Helvetica-Bold').fontSize(14).text('PROFESSIONAL EXPERIENCE');
doc.moveTo(50, doc.y + 2).lineTo(545, doc.y + 2).strokeColor('#e2e8f0').stroke();
doc.moveDown(1);

const experiences = [
  {
    company: 'Brain IT Company', period: '2025 - Present', role: 'Frontend Engineer (React)',
    desc: 'Leading frontend development initiatives and architecting scalable React components.',
    b: ['Architected scalable UI systems', 'Mentored junior developers', 'Improved page load speeds by 40%']
  },
  {
    company: 'Linko.uz', period: '2024 - 2025', role: 'React Frontend Developer',
    desc: 'Developed responsive e-commerce solutions.',
    b: ['Built complex interactive dashboards', 'Integrated RESTful APIs', 'Maintained state with Redux Toolkit']
  },
  {
    company: 'Amusot.uz', period: '2022 - 2024', role: 'Web Developer',
    desc: 'Created dynamic landing pages and internal tools.',
    b: ['Migrated legacy code to React', 'Implemented UI designs from Figma', 'Optimized SEO and accessibility']
  }
];

experiences.forEach(exp => {
  doc.font('Helvetica-Bold').fontSize(12).fillColor('#0f172a').text(exp.role, { continued: true })
     .font('Helvetica').fillColor('#64748b').text(`  |  ${exp.company}  |  ${exp.period}`, { align: 'right' });
  doc.moveDown(0.3);
  doc.font('Helvetica').fontSize(10).fillColor('#334155').text(exp.desc);
  doc.moveDown(0.2);
  exp.b.forEach(bullet => {
    doc.text(`• ${bullet}`, { indent: 15 });
  });
  doc.moveDown(1);
});

// SKILLS
doc.fillColor('#0f172a').font('Helvetica-Bold').fontSize(14).text('TECHNICAL SKILLS');
doc.moveTo(50, doc.y + 2).lineTo(545, doc.y + 2).strokeColor('#e2e8f0').stroke();
doc.moveDown(1);
doc.font('Helvetica-Bold').fontSize(10).fillColor('#334155').text('Core Technologies:', { continued: true })
   .font('Helvetica').text(' React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3');
doc.moveDown(0.5);
doc.font('Helvetica-Bold').text('Styling & Animation:', { continued: true })
   .font('Helvetica').text(' Tailwind CSS, Sass, Framer Motion, GSAP');
doc.moveDown(0.5);
doc.font('Helvetica-Bold').text('Tools & Ecosystem:', { continued: true })
   .font('Helvetica').text(' Git, GitHub, Vite, Webpack, Figma, VS Code');
doc.moveDown(1.5);

// EDUCATION
doc.fillColor('#0f172a').font('Helvetica-Bold').fontSize(14).text('EDUCATION');
doc.moveTo(50, doc.y + 2).lineTo(545, doc.y + 2).strokeColor('#e2e8f0').stroke();
doc.moveDown(1);
doc.font('Helvetica-Bold').fontSize(12).fillColor('#0f172a').text('Bachelor of Software Engineering', { continued: true })
   .font('Helvetica').fontSize(11).fillColor('#64748b').text('  |  2020 - 2024', { align: 'right' });
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(10).fillColor('#334155').text('Tashkent University of Information Technologies (TUIT)');
doc.moveDown(1);
doc.font('Helvetica-Bold').fontSize(12).fillColor('#0f172a').text('Modern Frontend Development Course', { continued: true })
   .font('Helvetica').fontSize(11).fillColor('#64748b').text('  |  2023', { align: 'right' });
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(10).fillColor('#334155').text('IT Academy');

doc.end();
console.log('CV Generated successfully at public/Beksulton_Abdurakhmanov_CV.pdf');
