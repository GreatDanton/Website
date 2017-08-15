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