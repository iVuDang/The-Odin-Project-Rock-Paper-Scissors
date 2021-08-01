# Project: Rock Paper Scissors (Part II)
Part I: https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors
Part II: https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/dom-manipulation#dom-methods

## Purpose: 
* Made a simple implementation of grade-school classic “rock paper scissors”. 


### Technologies: 
* JavaScript


### Tools
* Git
* GitHub


### Outcome
* I wrote a simple JavaScript program to take an input (rock, paper, or scissors), and output whether we won vs. a randomized computer result. 


### Links 
Codepen - solution link:
https://codepen.io/iVuDang/pen/zYwavJY

GitHub - deployment link: 

<br />

## Summary

### What I learned
####Part I
* Function names are a verb. Keep concise and descriptive e.g. getS, calcE, createX, checkY. 
* One function - one action. Write a specific function for each specific purpose (segregrate). 
* Test each coding line before going onto the next e.g. (console.log)

####Part II
* Hardest problem overcame in this exercise was to figure out how to register the HTML buttons to our JavaScript function. 
```
// B1. Registers the click input to execute the function 'playRound'. References our const 'buttons'. 
buttons.forEach(button =>{                          // acts on forEach <button> in html
    button.addEventListener('click', function(){    
        playRound(button.value)                     // calls on our function playerRound, where the input is contained in our <button> in html as the attribute value=""
    })
})
```

* Can import and use icons from script to kit.fontawesome, and using <i class=""> to reference to the icon ref.  
``` 
  <script src="https://kit.fontawesome.com/4d18f3cb78.js" crossorigin="anonymous"></script>
    
  <i class="fas fa-fire-alt"> </br> Fire </i>
```

* Principle of must create the element in JavaScript, and then reference to HTML by document.getElementById, and then append the JavaScript element to the HTML element
```
let para = document.createElement('p');
para.textContent = 'Hey, I\'m red.';
para.style.color = 'red';
document.getElementById('container').appendChild(para);
```

### What could be improved
* How to change 'leaf' to 'earth' on output. 
* How to add a time delay effect for the element image and the score results. 
* Need better understanding and more practice with classList.add("active") and classList.
