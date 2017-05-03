// HTML page initial set up
var date = new Date();
var year = date.getFullYear();

// Add initial page information
document.getElementById('title').innerHTML = "Your Horoscope for " + year;
document.getElementById('clickMe').innerHTML = "Get Your Horoscope";


// Array of Zodia Signs and particular information for each one
var zodiacSign = [{
  title: "aries",
  date:"Mar 21 - Apr 19",
  source: "img/aries.jpg",
  message: " Shoot for the moon. Even if you miss, you'll land among the stars. <br><br> - Les Brown"
},
{
  title: "taurus",
  date:"Apr 20 - May 20",
  source: "img/aries.jpg",
  message: "Action is the foundationdational key to all success. <br><br>- Pablo Picasso"
},
{
  title: "gemini",
  date:"May 21 - Jun 20",
  source: "img/gemini.jpg",
  message: "Take care of your body. It's the only place you have to live. <br><br>- Jim Rohn"
},
{
  title: "cancer",
  date:"Jun 21 - Jul 22",
  source: "img/cancer.jpg",
  message: "The secret of getting ahead is getting started. <br><br>- Mark Twain"
},
{
  title: "leo",
  date:"Jul 23 - Aug 22",
  source: "img/leo.jpg",
  message: "It is better to live for one day as a lion than for 1000 years as a sheep. <br><br>- Tibetal Proverb"
},
{
  title: "virgo",
  date:"Aug 23 - Sep 22",
  source: "img/virgo.jpg",
  message: "Always be the First Rate version of yourself instead of the second rate version of somebody else. <br><br>- Judy Garland"
},
{
  title: "libra",
  date:"Sep 23 - Oct 22",
  source: "img/libra.jpg",
  message: "Success is not final, failure is not fata: it is a courage to continue that counts. <br><br>- Winston Churchill"
},
{
  title: "scorpio",
  date:"Oct 23 - Nov 21",
  source: "img/scorpio.jpg",
  message: "Make your life a masterpiece; imagine no limitations on what you can be, have or do. <br><br>- Brian Tracy"
},
{
  title: "sagitarius",
  date:"Nov 22 - Dec 21",
  source: "img/sagitarius.jpg",
  message: "The difference between ordinary & extraordinary is that little extra. <br><br>- Jimmy Johnson"
},
{
  title: "capricorn",
  date:"Dec 22 - Jan 19",
  source: "img/capricorn.jpg",
  message: "the only way to do great work is to love what you do. <br><br>- Steve Jobs"
},
{
  title: "aquarius",
  date:"Jan 20 - Feb 18",
  source: "img/aquarius.jpg",
  message: "Be the change that you wish to see in the world. <br><br>- Mahatma Gandhi"
},
{
  title: "pisces",
  date:"Feb 19 - Mar 20",
  source: "img/pisces.jpg",
  message: "Enjoy the little things in life, for one day you'll look back and realize they were big things. <br><br>- Rober Brault"
}];

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
    // adding an image to the horoscope
    document.getElementById('zodiacImage').src = zodiacSign[j].source;

    //  adding a information to the horoscope
    document.getElementById('zodiacTitle').innerHTML =  userZodiac.toUpperCase() ;
    document.getElementById('zodiacDate').innerHTML = zodiacSign[j].date;
    document.getElementById('zodiacInfo').innerHTML = zodiacSign[j].message;
    document.getElementById('zodiacInfo').style.backgroundColor = "rgba(0,0,0,0.5)";

    // Delete warning message
    document.getElementById('warningMessage').innerHTML =  " ";


  } else {
    // Sending a warning message
    document.getElementById('warningMessage').innerHTML =  "Not one of the sign. Please try again";

    // Deleting previous information
    document.getElementById('zodiacTitle').innerHTML =  " ";
    document.getElementById('zodiacImage').src = "img/empty.png";
    document.getElementById('zodiacDate').innerHTML = " ";
    document.getElementById('zodiacInfo').innerHTML = " ";
    document.getElementById('zodiacInfo').style.backgroundColor = "transparent";
  }

}
