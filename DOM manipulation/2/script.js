// DOM Manipulation
// create new element
const newP = document.createElement("p");
const newText = document.createTextNode("Paragraf baru");
// simpan text ke dalam paragraph
newP.appendChild(newText);
// simpan newP di akhir section A

const sectionA = document.getElementById("a");
sectionA.appendChild(newP);



const liNew = document.createElement("li");
const newLi = document.createTextNode("List baru");

liNew.appendChild(newLi);

const ulList = document.querySelector('section#b ul');
const li2 = ulList.querySelector("li:nth-child(2)");
ulList.insertBefore(liNew, li2);


const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// const sectionB = document.getElementById('b');
// const title = sectionB.getElementsByTagName("p")[0];

// const titleWrap = document.createElement('h2');
// const newTitle = document.createTextNode("Hello world!");
// titleWrap.appendChild(newTitle);

// sectionB.replaceChild(titleWrap, title);
// const sectionB = document.getElementById('b');
// const title = sectionB.getElementsByTagName("p")[0];

// const titleWrap = document.createElement('h2');
// const newTitle = document.createTextNode("Hello world!");
// titleWrap.appendChild(newTitle);

// sectionB.replaceChild(titleWrap, title);
// const sectionB = document.getElementById('b');
// const title = sectionB.getElementsByTagName("p")[0];

// const titleWrap = document.createElement('h2');
// const newTitle = document.createTextNode("Hello world!");
// titleWrap.appendChild(newTitle);

// sectionB.replaceChild(titleWrap, title);
// sectionB.replaceChild(titleWrap, title);
// const sectionB = document.getElementById('b');
// const title = sectionB.getElementsByTagName("p")[0];

// const titleWrap = document.createElement('h2');
// const newTitle = document.createTextNode("Hello world!");
// titleWrap.appendChild(newTitle);

// sectionB.replaceChild(titleWrap, title);
// sectionB.replaceChild(titleWrap, title);
// const sectionB = document.getElementById('b');
// const title = sectionB.getElementsByTagName("p")[0];

// const titleWrap = document.createElement('h2');
// const newTitle = document.createTextNode("Hello world!");
// titleWrap.appendChild(newTitle);

// sectionB.replaceChild(titleWrap, title);
// sectionB.replaceChild(titleWrap, title);
// const sectionB = document.getElementById('b');
// const title = sectionB.getElementsByTagName("p")[0];

// const titleWrap = document.createElement('h2');
// const newTitle = document.createTextNode("Hello world!");
// titleWrap.appendChild(newTitle);

// sectionB.replaceChild(titleWrap, title);
const sectionB = document.getElementById('b');
const title = sectionB.getElementsByTagName("p")[0];

const titleWrap = document.createElement('h2');
const newTitle = document.createTextNode("Hello world!");

titleWrap.append(newTitle);
title.replaceWith(titleWrap);


titleWrap.style.backgroundColor = "lightblue";
newP.style.backgroundColor = "salmon";
liNew.style.backgroundColor = "orange";