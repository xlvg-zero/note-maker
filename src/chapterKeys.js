const requireAttempt = require.context('./chapters', true, /\.mdx$/, 'lazy');
const keys = requireAttempt.keys().map((item) => item.match(/^.*\/(.*?).mdx?$/)[1]).slice().sort((a, b) => {
  return parseInt(a) - parseInt(b);
});;

export default keys;

export {
  requireAttempt,
};
