fetch('https://github.com/abdurakhmanov0101?tab=repositories')
  .then(r => r.text())
  .then(t => {
    const matches = t.match(/itemprop="name codeRepository"[^>]*>([^<]+)<\/a>/g);
    if (matches) {
      console.log(matches.map(m => m.replace(/<[^>]+>/g, '').trim()));
    } else {
      console.log('No matches');
    }
  });
