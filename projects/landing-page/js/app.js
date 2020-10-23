
//builds navigation
function mainFunction() {
  const ul = document.getElementById('navbar__list');
  var arr = ['section1', 'section2', 'section3', 'section4'];
  // build the nav
  // Build menu 
  for (var i = 0; i < arr.length; i++) {
    var item = document.createElement('li');
    var a = document.createElement('a');

    a.textContent = arr[i];
    item.style.color = "black";
    item.id = 'navbar' + i;
    item.className = 'navbar' + i;
    item.className = 'active1';
    a.id = 'navbarr' + i;
    ul.appendChild(item);
    item.appendChild(a);


  }

}
mainFunction();

function yourActiveClass(){
  const section1 = document.getElementById('section1');
  const section2 = document.getElementById('section2');
  const section3 = document.getElementById('section3');
  const section4 = document.getElementById('section4');
  //console.log(sections);
  const arrSection1 = section1.className.split(" ");
  const arrSection2 = section2.className.split(" ");
  const arrSection3 = section3.className.split(" ");
  const arrSection4 = section4.className.split(" ");

  console.log('arrSection1 '+arrSection1);
  console.log('arrSection2 '+arrSection2);
  console.log('arrSection3 '+arrSection3);
  console.log('arrSection4 '+arrSection4);

  const name="your-active-class";

  if ((arrSection1.indexOf(name) >=1) || (arrSection2.indexOf(name) >=1) 
  || (arrSection3.indexOf(name) >=1) || (arrSection4.indexOf(name) >=1)){
    console.log("hiii");
    section1.classList.remove("your-active-class");
    section2.classList.remove("your-active-class");
    section3.classList.remove("your-active-class");
    section4.classList.remove("your-active-class");
  }
}

//className for evry item in unorder list
const item0 = document.querySelector('#navbar0');
const item1 = document.querySelector('#navbar1');
const item2 = document.querySelector('#navbar2');
const item3 = document.querySelector('#navbar3');


//setAttribut to anchor 1
const a1 = document.getElementById('navbarr0');
var att = document.createAttribute("data-page");
att.value = "youractiveclass1";
a1.setAttributeNode(att);

//setAttribut to anchor 2
const a2 = document.getElementById('navbarr1');
var att2 = document.createAttribute("data-page");
att2.value = "youractiveclass2";
a2.setAttributeNode(att2);

//setAttribut to anchor 3
const a3 = document.getElementById('navbarr2');
var att3 = document.createAttribute("data-page");
att3.value = "youractiveclass3";
a3.setAttributeNode(att3);

//setAttribut to anchor 4
const a4 = document.getElementById('navbarr3');

var att4 = document.createAttribute("data-page");
att4.value = "youractiveclass4";
a4.setAttributeNode(att4);


// Scroll to section on navigation click
const x = document.getElementById("navbar0").addEventListener("click", function () {
  var element = document.getElementById("section1");
  element.scrollIntoView();
  element.scrollIntoView(false);
  element.scrollIntoView({ block: "end" });
  element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  yourActiveClass();
  arr = element.className.split(" ");
  // console.log(arr);
  const name="your-active-class";
  if (arr.indexOf(name) == -1) {
    element.className += " " + name;
  }

});



// Scroll to section on navigation click
const y = document.getElementById("navbar1").addEventListener("click", function () {
  var element2 = document.getElementById("section2");

  element2.scrollIntoView();
  element2.scrollIntoView(false);
  element2.scrollIntoView({ block: "end" });
  element2.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  yourActiveClass();
  arr = element2.className.split(" ");
  // console.log(arr);
  const name="your-active-class";
  if (arr.indexOf(name) == -1) {
    element2.className += " " + name;
  }
});
// Scroll to section on navigation click
const z = document.getElementById("navbar2").addEventListener("click", function () {
  var element3 = document.getElementById("section3");

  element3.scrollIntoView();
  element3.scrollIntoView(false);
  element3.scrollIntoView({ block: "end" });
  element3.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  yourActiveClass();
  arr = element3.className.split(" ");
  // console.log(arr);
  const name="your-active-class";
  if (arr.indexOf(name) == -1) {
    element3.className += " " + name;
  }
});
// Scroll to section on navigation click
const w = document.getElementById("navbar3").addEventListener("click", function () {
  var element4 = document.getElementById("section4");

  element4.scrollIntoView();
  element4.scrollIntoView(false);
  element4.scrollIntoView({ block: "end" });
  element4.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  yourActiveClass();
  arr = element4.className.split(" ");
  // console.log(arr);
  const name="your-active-class";
  if (arr.indexOf(name) == -1) {
    element4.className += " " + name;
  }
});


//use intersection observer and getBoundingClientRect();
const sections = document.querySelectorAll('section');

const bubble = document.querySelector('.bubble');

const gradients = [
  'linear-gradient(to right top, #f46b45,#eea849)',
  'linear-gradient(to right top,#005c97,#363795)',
  'linear-gradient(to right top,#e53935,#e35d5b)',
  'linear-gradient(to right top,#e53935,#e35d5b)'
];
console.log(gradients);


const options = {
  threshold: 0.7

};



let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    const className = entry.target.className;
    const classNameArr = className.split(' ');

    const activeAnchor = document.querySelector(`[data-page=${classNameArr[0]}]`);

    const gradientIndex = entry.target.getAttribute('data-index');

    const coords = activeAnchor.getBoundingClientRect();

    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };
    if (entry.isIntersecting) {


      bubble.style.setProperty('left', `${directions.left}px`);
      bubble.style.setProperty('top', `${directions.top}px`);
      bubble.style.setProperty('width', `${directions.width}px`);
      bubble.style.setProperty('height', `${directions.height}px`);
    }

  });
}

sections.forEach(section => {

  observer.observe(section);
})




