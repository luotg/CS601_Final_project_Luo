document.addEventListener('DOMContentLoaded', function () {
  var mainContent = document.getElementById('main-content');

  var playSection = document.createElement('section');
  playSection.id = 'play';

  var halloweenHeading = document.createElement('h1');
  halloweenHeading.textContent = 'Halloween';

  var article = document.createElement('article');

  var paragraph = document.createElement('p');
  paragraph.textContent = "Halloween has just passed, but during this time, I attended an interesting event around Chicago. This is a farm. In the farm, everyone can play in the haunted house they designed. In addition, there are many entertainment facilities. You can also see piglets racing at the farm. This is a great place to do activities with kids now.";

  article.appendChild(paragraph);
  playSection.appendChild(halloweenHeading);
  playSection.appendChild(article);
  mainContent.appendChild(playSection);

  var pigletRacingSection = document.createElement('section');
  pigletRacingSection.id = 'piglet-racing';

  var pigletRacingHeading = document.createElement('h1');
  pigletRacingHeading.textContent = 'Piglet Racing';

  var pigletRacingDiv = document.createElement('div');
  pigletRacingDiv.classList.add('piglet-racing');

  var video = document.createElement('video');
  video.width = '480';
  video.src = './videos/pig.mp4';
  video.poster = './videos/pig.jpg';
  video.controls = true;

  var audio = document.createElement('audio');
  audio.src = './videos/pig.mp3';
  audio.controls = true;

  pigletRacingDiv.appendChild(video);
  pigletRacingDiv.appendChild(audio);
  pigletRacingSection.appendChild(pigletRacingHeading);
  pigletRacingSection.appendChild(pigletRacingDiv);
  mainContent.appendChild(pigletRacingSection);
});