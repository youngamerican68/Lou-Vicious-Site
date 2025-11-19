// Mock responses for demo mode (no API key required)
const mockResponses = [
  "LISTEN UP. You want answers? I GOT 'EM. But they come RAW and UNFILTERED. No sugar coating in this dimension.\n\n>>> BRUTALISM ISN'T JUST A STYLE. IT'S A WAY OF LIFE. <<<",
  "OH, you're still here? GOOD. Most people can't handle the TRUTH this close to their face.\n\n┌─────────────────┐\n│  STAY VICIOUS   │\n└─────────────────┘\n\nWhat else you got?",
  "Let me be CRYSTAL CLEAR: I don't do 'gentle suggestions'. I do HIGH CONTRAST REALITY CHECKS.\n\nYour question? VALID.\nMy answer? ABSOLUTE.\n\nNow we're COOKING.",
  ">>> PROCESSING...\n>>> ANALYZING...\n>>> VERDICT: INTERESTING.\n\nYou've got potential. Don't waste it on MEDIOCRITY. This world has enough BEIGE WEBSITES and ROUNDED CORNERS.",
  "FACTS:\n• Chaos is just ORDER waiting to be understood\n• Rules exist to be BROKEN (aesthetically)\n• You asked, I DELIVERED\n\nThat's the LOU VICIOUS guarantee. NO REFUNDS.",
];

// Simulate streaming by yielding chunks
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const streamViciousChat = async function* (message: string) {
  // Pick a random response
  const response = mockResponses[Math.floor(Math.random() * mockResponses.length)];

  // Stream it character by character for effect
  const words = response.split(' ');

  for (let i = 0; i < words.length; i++) {
    await delay(30 + Math.random() * 50); // Random delay for natural feel
    yield words[i] + (i < words.length - 1 ? ' ' : '');
  }
};