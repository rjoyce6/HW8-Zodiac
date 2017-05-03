// HTML page initial set up
var date = new Date();
var year = date.getFullYear();


document.getElementById('title').innerHTML = "Your Horoscope for " + year;
document.getElementById('clickMe').innerHTML = "Get Your Horoscope";



// List of Zodia Signs and particular information for each one
var sign1 = {
  title: "aries",
  date:"Mar 21 - Apr 19",
  source: "img/aquarius.jpg",
  message: " Shoot for the moon. Even if you miss, you'll land among the stars. - Les Brown"
}

var sign2 = {
  title: "taurus",
  date:"Apr 20 - May 20",
  source: "img/aries.jpg",
  message: "Action is the foundationdational key to all success. - Pablo Picasso"
}

var sign3 = {
  title: "gemini",
  date:"May 21 - Jun 20",
  source: "img/gemini.jpg",
  message: "Take care of your body. It's the only place you have to live. - Jim Rohn"
}

var sign4 = {
  title: "cancer",
  date:"Jun 21 - Jul 22",
  source: "img/cancer.jpg",
  message: "The secret of getting ahead is getting started. - Mark Twain"
}

var sign5 = {
  title: "leo",
  date:"Jul 23 - Aug 22",
  source: "img/leo.jpg",
  message: "It is better to live for one day as a lion than for 1000 years as a sheep. - Tibetal Proverb"
}

var sign6 = {
  title: "virgo",
  date:"Aug 23 - Sep 22",
  source: "img/virgo.jpg",
  message: "Always be the First Rate version of yourself instead of the second rate version of somebody else. - Judy Garland"
}

var sign7 = {
  title: "libra",
  date:"Sep 23 - Oct 22",
  source: "img/libra.jpg",
  message: "Success is not final, failure is not fata: it is a courage to continue that counts. - Winston Churchill"
}

var sign8 = {
  title: "scorpio",
  date:"Oct 23 - Nov 21",
  source: "img/scorpio.jpg",
  message: "Make your life a masterpiece; imagine no limitations on what you can be, have or do. - Brian Tracy"
}

var sign9 = {
  title: "sagitarius",
  date:"Nov 22 - Dec 21",
  source: "img/sagitarius.jpg",
  message: "The difference between ordinary & extraordinary is that little extra. - Jimmy Johnson"
}

var  sign10= {
  title: "capricorn",
  date:"Dec 22 - Jan 19",
  source: "img/capricorn.jpg",
  message: "the only way to do great work is to love what you do. - Steve Jobs"
}

var sign11 = {
  title: "aquarius",
  date:"Jan 20 - Feb 18",
  source: "img/aquarius.jpg",
  message: "Be the change that you wish to see in the world. -Mahatma Gandhi"
}

var sign12 = {
  title: "pisces",
  date:"Feb 19 - Mar 20",
  source: "img/pisces.jpg",
  message: "Enjoy the little things in life, for one day you'll look back and realize they were big things. - Rober Brault"
}

// array of zodiac signs
var zodiacSign = [sign1, sign2, sign3, sign4, sign5, sign6, sign7, sign8, sign9, sign10, sign11, sign12];

//call function once the button has been clicked
document.getElementById('clickMe').onclick = function (){zodiacInformation()};

//function to find and display zodiac signs
function zodiacInformation (){
  var userZodiac = document.getElementById('zodiac').value; //getting value from the input
  userZodiac = userZodiac.toLowerCase(); //change it to lower case

  console.log(userZodiac);

  var boolean = false;    //initializing testing value
  var j = 0;
  //for loop to check if the zodiac sign matches the one on the system
  for (var i = 0; i < zodiacSign.length; i++){
    if (userZodiac == zodiacSign[i].title){
      boolean = true;    //change testing value if zodiac sign matches
      j = i;
    }
  }
  console.log(j)

  // initializing images
  var img = document.createElement("img");

  //Resutls
  if ( boolean == true){
    document.getElementById('zodiacTitle').innerHTML =  userZodiac.toUpperCase() ;
    // adding an image to the horoscope
    document.getElementById('zodiacImage').src = zodiacSign[j].source;

  } else {
    document.getElementById('zodiacTitle').innerHTML =  "Not one of the sign. Please try again";
  }




}
