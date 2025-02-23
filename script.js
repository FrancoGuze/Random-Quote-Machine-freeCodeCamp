let randomQuote;
let colorRGB;
$(document).ready(function(){
  let quotes = [
{
quote: "Life isn’t about getting and having, it’s about giving and being.",
author: "Kevin Kruse"
},
{
quote: "Whatever the mind of man can conceive and believe, it can achieve.",
author: "Napoleon Hill"
},
{
quote: "Strive not to be a success, but rather to be of value.",
author: "Albert Einstein"
},
{
quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
author: "Robert Frost"
},
{
quote: "I attribute my success to this: I never gave or took any excuse.",
author: "Florence Nightingale"
},
{
quote: "You miss 100% of the shots you don’t take.",
author: "Wayne Gretzky"
},
{
quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
author: "Michael Jordan"
},
{
quote: "The most difficult thing is the decision to act, the rest is merely tenacity.",
author: "Amelia Earhart"
},
{
quote: "Every strike brings me closer to the next home run.",
author: "Babe Ruth"
},
{
quote: "Definiteness of purpose is the starting point of all achievement.",
author: "W. Clement Stone"
},
{
quote: "We must balance conspicuous consumption with conscious capitalism.",
author: "Kevin Kruse"
},
{
quote: "Life is what happens to you while you’re busy making other plans.",
author: "John Lennon"
},
{
quote: "We become what we think about.",
author: "Earl Nightingale"
},
{
quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
author: "Mark Twain"
},
{
quote: "Life is 10% what happens to me and 90% of how I react to it.",
author: "Charles Swindoll"
},
{
quote: "The most common way people give up their power is by thinking they don’t have any.",
author: "Alice Walker"
},
{
quote: "The mind is everything. What you think you become.",
author: "Buddha"
},
{
quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
author: "Chinese Proverb"
},
{
quote: "An unexamined life is not worth living.",
author: "Socrates"
},
{
quote: "Eighty percent of success is showing up.",
author: "Woody Allen"
},
{
quote: "Your time is limited, so don’t waste it living someone else’s life.",
author: "Steve Jobs"
},
{
quote: "Winning isn’t everything, but wanting to win is.",
author: "Vince Lombardi"
},
{
quote: "I am not a product of my circumstances. I am a product of my decisions.",
author: "Stephen Covey"
},
{
quote: "Every child is an artist.  The problem is how to remain an artist once he grows up.",
author: "Pablo Picasso"
},
{
quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
author: "Christopher Columbus"
},
{
quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
author: "Maya Angelou"
},
{
quote: "Either you run the day, or the day runs you.",
author: "Jim Rohn"
},
{
quote: "Whether you think you can or you think you can’t, you’re right.",
author: "Henry Ford"
},
{
quote: "The two most important days in your life are the day you are born and the day you find out why.",
author: "Mark Twain"
},
{
quote: "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
author: "Johann Wolfgang von Goethe"
},
{
quote: "The best revenge is massive success.",
author: "Frank Sinatra"
},
{
quote: "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
author: "Zig Ziglar"
},
{
quote: "Life shrinks or expands in proportion to one’s courage.",
author: "Anais Nin"
},
{
quote: "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
author: "Vincent Van Gogh"
},
{
quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
author: "Aristotle"
},
{
quote: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
author: "Jesus"
},
{
quote: "The only person you are destined to become is the person you decide to be.",
author: "Ralph Waldo Emerson"
},
{
quote: "Go confidently in the direction of your dreams.  Live the life you have imagined.",
author: "Henry David Thoreau"
},
{
quote: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
author: "Erma Bombeck"
},
{
quote: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
author: "Booker T. Washington"
},
{
quote: "Certain things catch your eye, but pursue only those that capture the heart.",
author: " Ancient Indian Proverb"
},
{
quote: "Believe you can and you’re halfway there.",
author: "Theodore Roosevelt"
},
{
quote: "Everything you’ve ever wanted is on the other side of fear.",
author: "George Addair"
},
{
quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
author: "Plato"
},
{
quote: "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
author: "Maimonides"
},
{
quote: "Start where you are. Use what you have.  Do what you can.",
author: "Arthur Ashe"
},
{
quote: "Fall seven times and stand up eight.",
author: "Japanese Proverb"
},
{
quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
author: "Helen Keller"
},
{
quote: "Everything has beauty, but not everyone can see.",
author: "Confucius"
},
{
quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
author: "Anne Frank"
},
{
quote: "When I let go of what I am, I become what I might be.",
author: "Lao Tzu"
},
{
quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
author: "Maya Angelou"
},
{
quote: "Happiness is not something readymade.  It comes from your own actions.",
author: "Dalai Lama"
},
{
quote: "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
author: "Sheryl Sandberg"
},
{
quote: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
author: "Aristotle"
},
{
quote: "If the wind will not serve, take to the oars.",
author: "Latin Proverb"
},
{
quote: "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
author: "Unknown"
},
{
quote: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
author: "Marie Curie"
},
{
quote: "Too many of us are not living our dreams because we are living our fears.",
author: "Les Brown"
},
{
quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
author: "Joshua J. Marine"
},
{
quote: "If you want to lift yourself up, lift up someone else.",
author: "Booker T. Washington"
},
{
quote: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
author: "Leonardo da Vinci"
},
{
quote: "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
author: "Jamie Paolinetti"
},
{
quote: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
author: "Erica Jong"
},
{
quote: "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
author: "Bob Dylan"
},
{
quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
author: "Benjamin Franklin"
},
{
quote: "In order to succeed, your desire for success should be greater than your fear of failure.",
author: "Bill Cosby"
},
{
quote: "A person who never made a mistake never tried anything new.",
author: " Albert Einstein"
},
{
quote: "The person who says it cannot be done should not interrupt the person who is doing it.",
author: "Chinese Proverb"
},
{
quote: "There are no traffic jams along the extra mile.",
author: "Roger Staubach"
},
{
quote: "It is never too late to be what you might have been.",
author: "George Eliot"
},
{
quote: "You become what you believe.",
author: "Oprah Winfrey"
},
{
quote: "I would rather die of passion than of boredom.",
author: "Vincent van Gogh"
},
{
quote: "A truly rich man is one whose children run into his arms when his hands are empty.",
author: "Unknown"
},
{
quote: "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
author: "Ann Landers"
},
{
quote: "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
author: "Abigail Van Buren"
},
{
quote: "Build your own dreams, or someone else will hire you to build theirs.",
author: "Farrah Gray"
},
{
quote: "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
author: "Jesse Owens"
},
{
quote: "Education costs money.  But then so does ignorance.",
author: "Sir Claus Moser"
},
{
quote: "I have learned over the years that when one’s mind is made up, this diminishes fear.",
author: "Rosa Parks"
},
{
quote: "It does not matter how slowly you go as long as you do not stop.",
author: "Confucius"
},
{
quote: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
author: "Oprah Winfrey"
},
{
quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
author: "Dalai Lama"
},
{
quote: "You can’t use up creativity.  The more you use, the more you have.",
author: "Maya Angelou"
},
{
quote: "Dream big and dare to fail.",
author: "Norman Vaughan"
},
{
quote: "Our lives begin to end the day we become silent about things that matter.",
author: "Martin Luther King Jr."
},
{
quote: "Do what you can, where you are, with what you have.",
author: "Teddy Roosevelt"
},
{
quote: "If you do what you’ve always done, you’ll get what you’ve always gotten.",
author: "Tony Robbins"
},
{
quote: "Dreaming, after all, is a form of planning.",
author: "Gloria Steinem"
},
{
quote: "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
author: "Mae Jemison"
},
{
quote: "You may be disappointed if you fail, but you are doomed if you don’t try.",
author: "Beverly Sills"
},
{
quote: "Remember no one can make you feel inferior without your consent.",
author: "Eleanor Roosevelt"
},
{
quote: "Life is what we make it, always has been, always will be.",
author: "Grandma Moses"
},
{
quote: "The question isn’t who is going to let me; it’s who is going to stop me.",
author: "Ayn Rand"
},
{
quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
author: "Henry Ford"
},
{
quote: "It’s not the years in your life that count. It’s the life in your years.",
author: "Abraham Lincoln"
},
{
quote: "Change your thoughts and you change your world.",
author: "Norman Vincent Peale"
},
{
quote: "Either write something worth reading or do something worth writing.",
author: "Benjamin Franklin"
},
{
quote: "Nothing is impossible, the word itself says, “I’m possible!”",
author: "–Audrey Hepburn"
},
{
quote: "The only way to do great work is to love what you do.",
author: "Steve Jobs"
},
{
quote: "If you can dream it, you can achieve it.",
author: "Zig Ziglar"
},
{
quote: "Always stand on principle...even if you stand alone.",
author: "John Adams"
},
{
quote: "If you want something you've never had, you must be willing to do something you've never done.",
author: "Thomas Jefferson"
},
{
quote: "Well done is better than well said.",
author: "Benjamin Franklin"
},
{
quote: "The circulation of confidence is better than the circulation of money.",
author: "James Madison"
},
{
quote: "It is better to offer no excuse than a bad one.",
author: "George Washington"
},
{
quote: "To succeed, jump as quickly at opportunities as you do at conclusions.",
author: "Benjamin Franklin"
},
{
quote: "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
author: "Thomas Jefferson"
},
{
quote: "Ambition must be made to counteract ambition.",
author: "James Madison"
},
{
quote: "Without continual growth and progress, such words as improvement, achievement, and success have no meaning.",
author: "Benjamin Franklin"
},
{
quote: "Whenever you do something, act as if all the world were watching.",
author: "Thomas Jefferson"
},
{
quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
author: "Benjamin Franklin"
},
{
quote: "The people are the only legitimate fountain of power.",
author: "James Madison"
},
{
quote: "Either write something worth reading or do something worth writing.",
author: "Benjamin Franklin"
},
{
quote: "Truth will ultimately prevail where there is pains to bring it to light.",
author: "George Washington"
},
{
quote: "Never leave that till tomorrow which you can do today.",
author: "Benjamin Franklin"
},
{
quote: "Real firmness is good for anything; strut is good for nothing.",
author: "Alexander Hamilton"
},
{
quote: "I never expect a perfect work from an imperfect man.",
author: "Alexander Hamilton"
},
{
quote: "We hold these truths to be self-evident: that all men are created equal. . . .",
author: "Thomas Jefferson"
},
{
quote: "Let frugality and industry be our virtues. Fire (our children) with ambition to be useful",
author: "John Adams"
},
{
quote: "If conscience disapproves, the loudest applauses of the world are of little value.",
author: "John Adams"
},
{
quote: "Those who stand for nothing fall for everything.",
author: "Alexander Hamilton"
},
{
quote: "As a man is said to have a right to his property, he may be equally said to have a property in his rights.",
author: "James Madison"
},
{
quote: "Liberty, once lost, is lost forever.",
author: "John Adams"
},
{
quote: "Our liberty depends on the freedom of the press, and that cannot be limited without being lost.",
author: "Thomas Jefferson"
},
{
quote: "It is only when the people become ignorant and corrupt when they degenerate into a populace, that they are incapable of exercising their sovereignty.",
author: "James Monroe"
},
{
quote: "It is a universal truth that the loss of liberty at home is to be charged to the provisions against danger, real or pretended, from abroad.",
author: "James Madison"
},
{
quote: "Experience is the oracle of truth; and where its responses are unequivocal, they ought to be conclusive and sacred.",
author: "James Madison"
},
{
quote: "The truth is that all men having power ought to be mistrusted.",
author: "James Madison"
},
{
quote: "Nothing can now be believed which is seen in a newspaper. truth itself becomes suspicious by being put into that polluted vehicle.",
author: "Thomas Jefferson"
}
]
//Funciones para conseguir una frase aleatoria
function getRandomQuote() {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
  }
  
  
  //establecer los colores del RGB
  function establecerColor(){

    let getRandomColor= () => {
      randomColor = Math.floor(Math.random() * quotes.length);
    return randomColor;
    }
    colorR = getRandomColor();
    colorG = getRandomColor();
    colorB = getRandomColor();
    
    console.log(colorR, colorG, colorB);
    
    let sumaRGB = Math.floor(parseInt(colorR) + parseInt(colorG) + parseInt(colorB)/3);
    
    console.log("Resultado Suma RGB: " + sumaRGB);
    
    resultado="";
    if (sumaRGB <= 210) {
      resultado="f5f5f5"} 
    else {
      resultado="505050"}
    
 console.log(resultado)
    
    colorRGB = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
    
    $(".container-fluid").animate({ backgroundColor: colorRGB }, 500);
    $(".button").animate({ backgroundColor: colorRGB, color:resultado}, 500);
    $(".twitter-button").animate({ backgroundColor: colorRGB, color:resultado}, 500);
  }
 
   
  establecerColor();
  let sumarRGB = parseInt(colorR) + parseInt(colorG) + parseInt(colorB);
 currentQuote = getRandomQuote();
    $("#text").text('"' + currentQuote.quote + '"');
    $("#author").text('- ' + currentQuote.author);
  
  //codigop para tratar de que sae twitee

  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + currentQuote.quote + '"  - ' + currentQuote.author)
  );
 
 
//Código a ejecutar cuando se hace click en el boton
  $("#new-quote").click(function () {
    
    establecerColor();
    currentQuote = getRandomQuote();
    $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + currentQuote.quote + '" ' + currentQuote.author)
  );
    $("#text").text('"' + currentQuote.quote + '"');
    $("#author").text('- ' + currentQuote.author);

  });
   
});