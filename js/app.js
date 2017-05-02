// Step 5. Making a function that takes a user's input (value) and then console.logs the value.
// Initializing the function (make it start) when you click a button.
var aries = {
  date:"Mar 21 - Apr 19"
}

var taurus = {
  date:"Apr 20 - May 20"
}

var gemini = {
  date:"May 21 - Jun 20"
}

var cancer = {
  date:"Jun 21 - Jul 22"
}

var leo = {
  date:"Jul 23 - Aug 22"
}

var virgo = {
  date:"Aug 23 - Sep 22"
}

var libra = {
  date:"Sep 23 - Oct 22"
}

var scorpio = {
  date:"Oct 23 - Nov 21"
}


var sagittarius = {
  date:"Nov 22 - Dec 21"
}

var capricorn = {
  date:"Dec 22 - Jan 19"
}

var aquarius = {
  date:"Jan 20 - Feb 18"
}

var pisces = {
  date:"Feb 19 - Mar 20"
}


var zodiacSign = [
  aries,
  taurus,
  gemini,
  cancer,
  leo,
  virgo,
  libra,
  scorpio,
  sagittarius,
  capricorn,
  aquarius,
  pisces
  ];

document.getElementById('clickMe').onclick = function (){userName()};

function userName (){
  var userZodiac = document.getElementById('horoscope').value;

  console.log(userZodiac);

  for (var i = 0; i < zodiacSign.length; i++){
    if (userZodiac == zodiacSign[i]){
      document.getElementById('results').innerHTML = "<h1> Welcome, " + name.toUpperCase() + "!</h1>";
    }
  }


}
