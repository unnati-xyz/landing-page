var songs = [

  // The Piper at the Gates of Dawn
  'Astronomy Domine',
  'Lucifer Sam',
  'Interstellar Overdrive',

  // A Saucerful of Secrets	
  'Set the Controls for the Heart of the Sun',
  'A Saucerful of Secrets',

  // Ummagumma
  'Careful with That Axe, Eugene',
  'Several Species of Small Furry Animals Gathered Together in a Cave and Grooving with a Pict',

  // Atom Heart Mother
  'Alan\'s Psychedelic Breakfast',
  'Echoes',

  // The Dark Side of the Moon
  'Time',
  'The Great Gig in the Sky',
  'Us and Them',
  'Brain Damage',
  'Eclipse',

  // Wish You Were Here
  'Shine On You Crazy Diamond (Parts I - V)',
  'Wish You Were Here',
  'Shine On You Crazy Diamond (Parts VI - IX)',

  // Animals
  'Dogs',
  'Pigs (Three different Ones)',

  // The Wall
  'The Happiest Days of Our Lives',
  'Another Brick in the Wall (Part II)',
  'Mother',
  'Another Brick in the Wall (Part III)',
  'Hey You',
  'Bring the Boys Back Home',
  'Comfortably Numb',

  // The Final Cut
  'The Gunner\'s Dream',
  'The Fletcher Memorial Home',

  // A Momentary Lapse of Reason
  'Learning to Fly',
  'The Dogs of War',
  'One Slip',
  'Terminal Frost',

  // Division Bell
  'Cluster One',
  'Marooned',
  'Wearing the Inside Out',
  'Keep Talking',
  'High Hopes',

  // The Endless River
  'Talkin\' Hawkin',
  'Nervana'
];

function pickOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

$(function() {
  var songName = pickOne(songs);
  var ytSearch = 'http://youtube.com/results?search_query='+songName+'+pink+floyd';
  $('#pf-song').html('<a target="_blank" href="'+ytSearch+'">'+songName+'</a>');
});
