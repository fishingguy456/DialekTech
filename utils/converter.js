var FFmpeg = require('fluent-ffmpeg');

module.exports = (audioSource) => {
  var command = FFmpeg({
    source: audioSource
  })
  .addOption('-ac', 1)
  .saveToFile('./public/uploads/audio.flac');
}
