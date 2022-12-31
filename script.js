var click = document.getElementById('btn');
 var body = document.getElementsByTagName("body")[0];
//first click

click.addEventListener('click', () => {
    //create first text

    var button = document.createElement("button");
    button.innerHTML = "click Again";
    body.appendChild(button);
    button.style.backgroundColor = "rgb(189, 149, 179)";

    var h1 = document.createElement('h1');
    h1.innerHTML = "Tonight’s December thirty-first, and something is about to burst… Hark, it’s midnight, my dear friends. Here comes another year!";
    body.appendChild(h1);
    //create first button
 

    button.addEventListener('click', () => {
        //creat text2
   
        h1.innerHTML = "A New Year is like a blank book, and the pen is in your hands. It is your chance to write a beautiful story for yourself";
        body.appendChild(h1);
  // creat button2
         var button2 = document.createElement("button");
    button2.innerHTML = "one more time";
        body.appendChild(button2);
        button2.style.backgroundColor = "rgb(179, 189, 149)";
        


        button2.addEventListener('click', () => {
       
        h1.innerHTML = " Tomorrow is the first blank page of a 365-page book. Write a good one";
            body.appendChild(h1);

             var button3 = document.createElement("button");
    button3.innerHTML = "Please Click Again";
        body.appendChild(button3);
            button3.style.backgroundColor = "rgb(179, 189, 149)";
         
            button3.addEventListener('click', () => {
             
                h1.innerHTML = "Welcoming a new year is not only about counting the last moments, it's about being ready for every moment of the next year";
                body.appendChild(h1);

                var button4 = document.createElement('button');
                button4.innerText = "Click Again";
                body.appendChild(button4);

                button4.addEventListener('click', () => {
                    h1.remove();
                    var input = document.createElement('input');
                    input.type = "text";
                    input.placeholder = "Enter your name";
                    body.appendChild(input);
                    var inputval = input.value;

                   

                    var button5 = document.createElement('button');
                     
                    button5.innerText = "Click Again ";
                    body.appendChild(button5);

                    button5.addEventListener('click', () => {
                        var inputval = input.value;
                         if (inputval == "")
                          { 
                             alert("Hello Please Enter your name");  	
                                return false; 
                         } 
                    //    return true;
                        	
                        var img = document.createElement('img');
                        img.src = "https://cdn.pixabay.com/photo/2022/12/24/23/44/snow-flakes-7676581__340.jpg";
                        body.appendChild(img);
      
                        h1.innerHTML = "Hi" +"🙋🏻‍♀️"+" "+ inputval +   "   "+"Happy New Year!"+"🎆🎇✨" +"Best wishes to my beloved friend for a wonderful year ahead. Though we're miles apart, you are always in my thoughts and prayers."+"         "+"your's Lavanya";
                        body.appendChild(h1);
                        input.remove();

                        var button6 = document.createElement('button');
                        button6.innerText = "Last Click";
                        body.appendChild(button6);

                        button6.addEventListener('click', () => {
                            
                            h1.innerHTML = " Click chesindhi chale" + " " + inputval + " " + "velli panichusukopo..."  +"😜"   +"             "+"  just for fun"+"     "+"keep smile"+"😄";
                            button6.remove();
                        })
                        button5.remove();

                    })
                    button4.remove();

                })
                button3.remove();
            })
            
           
            button2.remove();
            
        })


        button.remove();
    })

    click.remove();
})
