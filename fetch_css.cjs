const https = require('https');

https.get('https://brain-itacademy.uz/assets/index-4cE02X-k.css', (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    const rootMatch = data.match(/:root\s*{([^}]+)}/);
    if (rootMatch) {
      console.log('Root CSS Variables:');
      const vars = rootMatch[1].split(';').map(s => s.trim()).filter(Boolean);
      vars.forEach(v => console.log(v));
    } else {
      console.log('No :root variables found');
    }
    
    const colors = data.match(/(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))/gi);
    if(colors) {
       const unique = [...new Set(colors)];
       console.log('\nFound Colors:');
       console.log(unique.slice(0, 30).join('\n'));
    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
