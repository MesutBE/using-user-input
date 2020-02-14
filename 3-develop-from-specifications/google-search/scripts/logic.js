const generateSearchURLTests = [
  { name: 'first', args: [asd], expected: null },
  { name: 'second', args: [], expected: null },
  { name: 'third', args: [], expected: null },
  { name: 'fourth', args: [], expected: null },
  { name: 'fifth', args: [], expected: null },
  { name: 'sixth', args: [], expected: null },
  { name: 'seventh', args: [], expected: null },
  { name: 'eighth', args: [], expected: null },
  { name: 'ninth', args: [], expected: null },
  { name: 'tenth', args: [], expected: null },
];

function generateSearchURL(text) {
  const encodedQuery = encodeURIComponent(text);
  return 'https://www.google.com/?q=' + encodedQuery;
 }

testing(generateSearchURL, generateSearchURLTests);
