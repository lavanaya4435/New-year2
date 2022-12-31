var button1 = document.querySelector('#btn1');
var button2 = document.querySelector('#btn2');
var button3 = document.querySelector('#btn3');
var button4 = document.querySelector('#btn4');
var button5 = document.querySelector('#btn5');
var button6= document.querySelector('#btn6');

var input = document.getElementById('input');
var text1 = document.querySelector('.text1');

// var img = document.getElementById('img');



document.getElementById("btn2").style.display = "none";  //hide
	document.getElementById("btn3").style.display = "none"; //show
document.getElementById("btn4").style.display = "none"; 	
document.getElementById("btn5").style.display = "none"; 
document.getElementById("btn6").style.display = "none"; 
input.style.display = "none";

// img.style.display = "none";
var inputval = input.value;

button1.addEventListener('click', () => {
    
    text1.innerHTML = "Tonight’s December thirty-first, and something is about to burst… Hark, it’s midnight, my dear friends. Here comes another year!";
    document.getElementById("btn2").style.display = "block"; 

    button1.remove();
})
//button2

button2.addEventListener('click', () => {
    text1.innerHTML = "A New Year is like a blank book, and the pen is in your hands. It is your chance to write a beautiful story for yourself";
    button3.style.display = "block";

    button2.remove();
})


//button3
button3.addEventListener('click', () => {
    text1.innerHTML = "Tomorrow is the first blank page of a 365-page book. Write a good one";
    button4.style.display = "block";

    button3.remove();
})

//button4

button4.addEventListener('click', () => {
    text1.innerHTML = "Welcoming a new year is not only about counting the last moments, it's about being ready for every moment of the next year";
    button5.style.display = "block";

    button4.remove();
})

//button5

button5.addEventListener('click', () => {
    text1.innerHTML = "";
    input.style.display = "block";
   var inputval = input.value;
                         if (inputval == "")
                          {
                             alert("Hello Please Enter your name");
                                return false;
    }
    
// text1.innerHTML="hello !"
    
    // img.style.display = "block";
    // body.style.backgroundImage = URL('https://media.istockphoto.com/id/1417991075/photo/happy-new-year-2023-christmas-gold-blue-glitter.jpg?s=1024x1024&w=is&k=20&c=uzeizJPIDPW6lrMbXehXiIWVyX-MQq75oY4bCpGjO6Y=');
    text1.innerHTML = "Hi" + "🙋🏻‍♀️" + " " + inputval + "   " + "Happy New Year!" + "🎆🎇✨" + "Best wishes to my beloved friend for a wonderful year ahead. Though we're miles apart, you are always in my thoughts and prayers." + "         " + "your's Lavanya";

    input.style.display = "none";
    button6.style.display = "block";

    button5.remove();
})

//button6

button6.addEventListener('click', () => {
     var inputval = input.value;
    text1.innerHTML = " Click chesindhi chale" + " " + inputval + " " + "velli panichusukopo..." + "😜" + "             " + "  just for fun" + "     " + "keep smile" + "😄";

    input.style.display = "none";
    // button6.style.display = "block";

    button6.remove();
})

    




 
