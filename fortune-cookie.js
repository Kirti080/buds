// Run with: node fortune-cookie.js
const fortunes = [
  'Your next small task will unlock a big sigh of relief.',
  'A mysterious checkbox awaits your attention.',
  'The best time to start was earlier. The next best time is after this cookie.',
  'A five-minute break may contain your next good idea.',
  'Today, progress is measured in tiny victories.',
];

console.log(`Fortune cookie: ${fortunes[Math.floor(Math.random() * fortunes.length)]}`);
