export function removeEmojisAndPattern(text) {
  // Replace '~' with a space
  let textNoTilde = text.replace('~', ' ');

  // Replace '_' with a space
  let textNoUnderscore = textNoTilde.replace('_', ' ');

  // Remove words enclosed by '*' (like *bold* or *italic* text)
  let textNoStarWords = textNoUnderscore.replace(/\*[^*]+?\*/g, '');

  // Replace other unwanted characters
  let textCleaned = textNoStarWords.replace('*', ' ').replace('=', ' ');
  textCleaned = textCleaned.replace('#', ' ');

  // Remove any <em>HTML tags and content inside them
  textCleaned = textCleaned.replace(/<em>([^<]+)<\/em>/g, '');

  return textCleaned;
}
