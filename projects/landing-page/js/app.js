
//builds navigation
function mainFunction(){
    const ul=document.getElementById('navbar__list');
    var arr = ['section','section','section','section'];
// build the nav
// Build menu 
    for (var i = 0; i < arr.length; i++){
        var item = document.createElement('il');
        var a = document.createElement('a');
        a.textContent = i;
        
        item.textContent = arr[i];
        item.style.color= "black";
        item.style.fontSize="30px";
        item.style.margin="30px";
        item.id='navbar'+i;
        a.id='navbarr'+i;
        ul.appendChild(item);
        item.appendChild(a);
        

    }

}
mainFunction();

//className for evry item in unorder list
const item0 = document.querySelector('#navbar0');
const item1 = document.querySelector('#navbar1');
const item2 = document.querySelector('#navbar2');
const item3 = document.querySelector('#navbar3');



//setAttribut to anchor 1
const a1 = document.getElementById('navbarr0');
var att = document.createAttribute("href");
  att.value = "#section1";
  a1.setAttributeNode(att);
  a1.style.color='red';
//setAttribut to anchor 2
const a2 = document.getElementById('navbarr1');
var att2 = document.createAttribute("href");
  att2.value = "#section2";
  a2.setAttributeNode(att2);
  a2.style.color='blue';
//setAttribut to anchor 3
const a3 = document.getElementById('navbarr2');
var att3 = document.createAttribute("href");
  att3.value = "#section3";
  a3.setAttributeNode(att3);
  a3.style.color='green';
//setAttribut to anchor 4
const a4 = document.getElementById('navbarr3');

var att4 = document.createAttribute("href");
  att4.value = "#section4";
  a4.setAttributeNode(att4);
  a4.style.color='Yellow';
 ///////////////////////////////////////

// using scrollTO and give coloer to ul
window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    const item0 = document.querySelector('#navbar0').style.color='red';
  } else {
    const item0 = document.querySelector('#navbar0').style.color='black';
  }
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
    const item1 = document.querySelector('#navbar1').style.color='blue';
  } else {
    const item1 = document.querySelector('#navbar1').style.color='black';
  }
  if (document.body.scrollTop >1400|| document.documentElement.scrollTop >1400) {
    const item2 = document.querySelector('#navbar2').style.color='green';
  } else {
    const item2 = document.querySelector('#navbar2').style.color='black';
  }
  if (document.body.scrollTop >1950|| document.documentElement.scrollTop >1950) {
    const item3 = document.querySelector('#navbar3').style.color='yellow';
  } else {
    const item3 = document.querySelector('#navbar3').style.color='black';
  }
}





















// const mainHeading = document.querySelector('#navbar0');

// mainHeading.addEventListener('click', function () {
//   mainHeading.style.color='red';
//   const p1=document.querySelector('.se1');

  
  
// });

































// var target = document.querySelector('#section4');



// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 1.0
//   };

  
//   let callback= (entries, observer)=> {
//     entries.forEach(entry => {
//       if(entry.target.id===target){
//         item3.style.color='red';}
//         else{
//         item3.style.color='Yellow';
       
//       }
//       console.log(entry);
//     });
//   }
  
//   let observer = new IntersectionObserver(callback, options);
//   observer.observe(target);
//   console.log(target);


  ///////////////////////////////////////
  //                                   //
  //////////////////////////////////////

// var target3 = document.querySelector('#section3');
// let callback= (entries, observer)=> {
//   //observer.observe(target);
//   entries.forEach(entry => {
//     console.log("entry.target.id "+entry.target.id)
//     console.log("target "+target.id);
//     if(entry.target.id==target.id){
//       console.log(item3);
//       item3.style.color='red';
//     }if(entry.target3.id==target3.id){
//       item3.style.color='Yellow';
//       item3.style.color='red';
//     }
//     console.log(entry);
//     });
//   }


// let callback= (entries, observer)=> {
//   entries.forEach(entry => {
//     //console.log("entry.target.id "+entry.target.id)
//     //console.log("target "+target.id);
//     if(entry.target3.id==target3.id){
//       item3.style.color='Yellow';
//       item3.style.color='red';
//       }console.log(entry);});
//       }
  
// let observer = new IntersectionObserver(callback, options);
// observer.observe(target);

// let observer3 = new IntersectionObserver(callback, options);
// observer3.observe(target3);

  ///////////////////////////////////////
  //                                   //
  //////////////////////////////////////
  
//style for elemint section
// const style0=item0.style.color='red';
// const style1=item1.style.color='red';
// const style2=item2.style.color='red';
// const style3=item3.style.color='red';










/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/



// Scroll to section on link click

// Set sections as active


