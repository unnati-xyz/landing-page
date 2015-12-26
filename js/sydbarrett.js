var songs = [
  'Astronomy Domine',
  'Lucifer Sam',
  'Interstellar Overdrive',
  'Set the Controls for the Heart of the Sun',
  'A Saucerful of Secrets',
  'Careful with That Axe, Eugene',
  'Several Species of Small Furry Animals Gathered Together in a Cave and Grooving with a Pict',
  'Alan\'s Psychedelic Breakfast',
  'Echoes',
  'Time',
  'The Great Gig in the Sky',
  'Us and Them',
  'Brain Damage',
  'Eclipse',
  'Shine On You Crazy Diamond (Parts I - V)',
  'Wish You Were Here',
  'Shine On You Crazy Diamond (Parts VI - IX)',
  'Dogs',
  'Pigs (Three different Ones)',
  'The Happiest Days of Our Lives',
  'Another Brick in the Wall (Part II)',
  'Mother',
  'Another Brick in the Wall (Part III)',
  'Hey You',
  'Bring the Boys Back Home',
  'Comfortably Numb',
  'The Gunner\'s Dream',
  'The Fletcher Memorial Home',
  'Learning to Fly',
  'The Dogs of War',
  'One Slip',
  'Terminal Frost',
  'Cluster One',
  'Marooned',
  'Wearing the Inside Out',
  'Keep Talking',
  'High Hopes',
  'Talkin\' Hawkin',
  'Nervana'
];

function pickOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

$(function() {
  $("#pf-song").html(pickOne(songs));
});
