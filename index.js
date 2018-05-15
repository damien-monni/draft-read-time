/**
 * Adds commas to a number
 * Get read time from a DraftJS content state
 * Counts the number of words and divide by 275.
 * Adds 12s for the first image, 11s for the second, etc... until reaching
 * 3 seconds, then add 3 seconds for all remaining images.
 * From : https://blog.medium.com/read-time-and-you-bc2048ab620c
 */
module.exports = function(content) {
  var blocks = content && content.blocks;
  if (blocks && blocks.length) {
    // Get number of words and images
    var wordsAndImagesCount = { wordsNb: 0, imageNb: 0 };
    for (var i = 0; i < blocks.length; i += 1) {
      var block = blocks[i];
      var text = block.text;
      if (block.type === 'image') {
        wordsAndImagesCount.imageNb += 1;
      } else if (block.text.length) {
        var words = text.split(' ');
        wordsAndImagesCount.wordsNb += words.length;
      }
    }

    // Get read time for text only (not for images)
    var readTimeText = wordsAndImagesCount.wordsNb / 275;

    // Get read time for images
    var readTimeImagesSecs = 0;
    for (var i = 0; i < wordsAndImagesCount.imageNb; i += 1) {
      var toAdd = Math.max(12 - i, 3);
      readTimeImagesSecs += toAdd;
    }
    var readTimeImagesSecBase100 = readTimeImagesSecs * 100 / 60;
    var readTimeImagesMin = readTimeImagesSecBase100 / 100;

    // Return final read time (text + images)
    return Math.round(readTimeText + readTimeImagesMin);
  }
  return null;
};
