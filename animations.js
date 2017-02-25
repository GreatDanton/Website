/*jshint esversion: 6 */

var terminal = document.getElementsByClassName('terminal-main')[0];
var terminal_main = document.getElementsByClassName("terminal-main")[0];

// typing in terminal
// sentence => command input
// delayBeforeEnter => delay before 'enter' press
function typing(sentence, delayBeforeEnter) {
    let string = sentence;
    let index = 0;
    let last_line = terminal_main.lastElementChild;
    last_line.classList.add('no-blinking');
    
    // terminal output
    function terminalReturn(output) {
            terminal.innerHTML += bashOutput(output);
            terminal.innerHTML += createLine();
    }

    // immediately invoking function
    (function writer(i) {
        last_line.innerHTML += string[i];
        i++;
        // terminal output (=enter)
        if (i >= sentence.length) {
            last_line.classList.remove('no-blinking');
            setTimeout(function() { terminalReturn("Jan Pribošek");}, delayBeforeEnter);
            return;
        }
        setTimeout(function(){writer(i);}, 100);
    })(0);
} // end of typing function


function createPrompt() {
    return '<span class="prompt"> ~ ❯  </span>';
}

function bashOutput(input) {
    return `<p class="bash-output"> ${input} </p>`;
}

function createLine() {
    return '<div class="line">' + createPrompt() + '</div>';
}

terminal.innerHTML += createLine();
typing("echo $(whoami) $(hostname)", 1300);


// scroll animations
function navBtnClick() {
    //console.log(this.innerHTML + " clicked!");
    // select link from array of classes
    let class_arr = this.classList;
    let link = '';
    for (let i = 0; i < class_arr.length; i++) {
        if (class_arr[i].indexOf('-link')) {
            link = class_arr[i].split('-')[0];
        } else {
            return;
        }
    }
    
    let chosenID = document.getElementById(link);
    let chosenID_offset = chosenID.offsetTop;

    // scroll with zenscroll library
    zenscroll.toY(chosenID_offset);
}

// add scroll animation function to each button
var navButtons = document.getElementsByClassName('nav-links');

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', navBtnClick);
}
