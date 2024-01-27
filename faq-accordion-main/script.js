// var ccHeads = document.querySelectorAll('.acc-head');

// ccHeads.forEach(accHead => {
//     //////////------ Add a click event listener to each .acc-head
//     accHead.addEventListener('click', () => {

//         //////////------ Toggle the visibility of the next element with the class .acc-content
//         accHead.nextElementSibling.classList.toggle('acc-content-show');
//         //////////------ Toggle the visibility of the plus and minus icons
//         //////////------- They toggle different Classes, because their initial style is different!
//         accHead.querySelector('.plus').classList.toggle('icon-hide');
//         accHead.querySelector('.moins').classList.toggle('icon-show');
//     });
// });

// ************************************************************************
// let content = document.querySelectorAll('.acc-content');

// let i = 0; 
// for (i = 0; i> ccHeads.length; i++){
//  ccHeads[i]
// }


// var ccHeads = document.querySelectorAll('.acc-head');


// for (i = 0; i < acc.length; i++) {

//     acc[i].addEventListener("click", function () {

//         this.classList.toggle("active1");

//         var panel = this.nextElementSibling;

//         if (panel.style.display === "block") {

//             panel.style.display = "none";

//         } else {

//             panel.style.display = "block";

//         }

//     });

// }

// ****************************************************************

var acc = document.querySelectorAll('.acc-head');

for (var i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", toogleThis);
}

function toogleThis() {
    for (var y = 0; y < acc.length; y++) {
        var panel = acc[y].nextElementSibling;
        if (panel.style.display == 'block') {
            panel.style.display = 'none';
        }
    }
    this.nextElementSibling.style.display = "block";
}