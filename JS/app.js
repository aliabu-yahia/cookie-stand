'use strict';

function randomNum (min,max){
  return Math.floor( Math.random()*(max-min+1)+min);
}
let image = document.createElement('img');
let parent = document.getElementById('shop');
parent.appendChild(image);
image.setAttribute('src','images/salmon.png');

let seattleshop={
    name:'seattle',
    maxPeop:65,
    minPeop:23,
    avaCoc:6.3,
    hourWork:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
}


let header = document.createElement('h1');
parent.appendChild(header)
header.textContent=seattleshop.name

let undorderedList =document.createElement('ul');
parent.appendChild(undorderedList);

let total=0
console.log(total);
for(let i=0;i<13;i++){
    let listItem = document.createElement('li');
  undorderedList.appendChild(listItem);
  let Randomnumber= Math.floor( randomNum(seattleshop.maxPeop,seattleshop.minPeop)*seattleshop.avaCoc)
   total=total+ Randomnumber
  listItem.textContent =`${seattleshop.hourWork[i]}: ${Randomnumber} cookies. `
}
let listmun=document.createElement('li');
undorderedList.appendChild(listmun);
listmun.textContent = `Total: ${total}`

let tokyoshop={
    name:'tokyo',
    maxPeop:24,
    minPeop:3,
    avaCoc:1.2,
    hourWork:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
}


let header2 = document.createElement('h1');
parent.appendChild(header2)
header2.textContent=tokyoshop.name

let undorderedList2 =document.createElement('ul');
parent.appendChild(undorderedList2);

let total2=0
console.log(total2);
for(let i=0;i<13;i++){
    let listItem2 = document.createElement('li');
  undorderedList2.appendChild(listItem2);
  let Randomnumber2= Math.floor( randomNum(tokyoshop.maxPeop,tokyoshop.minPeop)*tokyoshop.avaCoc)
   total2=total2+ Randomnumber2
  listItem2.textContent =`${tokyoshop.hourWork[i]}: ${Randomnumber2} cookies. `
}
let listmun2=document.createElement('li');
undorderedList2.appendChild(listmun2);
listmun2.textContent = `Total: ${total2}`


let dubaishop={
    name:'dubai',
    maxPeop:38,
    minPeop:11,
    avaCoc:3.7,
    hourWork:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
}


let header3 = document.createElement('h1');
parent.appendChild(header3)
header3.textContent=dubaishop.name

let undorderedList3 =document.createElement('ul');
parent.appendChild(undorderedList3);

let total3=0
console.log(total3);
for(let i=0;i<13;i++){
    let listItem3 = document.createElement('li');
  undorderedList3.appendChild(listItem3);
  let Randomnumber3= Math.floor( randomNum(dubaishop.maxPeop,dubaishop.minPeop)*dubaishop.avaCoc)
   total3=total3+ Randomnumber3
  listItem3.textContent =`${dubaishop.hourWork[i]}: ${Randomnumber3} cookies. `
}
let listmun3=document.createElement('li');
undorderedList3.appendChild(listmun3);
listmun3.textContent = `Total: ${total3}`


let parisshop={
    name:'paris',
    maxPeop:38,
    minPeop:11,
    avaCoc:3.7,
    hourWork:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
}


let header4 = document.createElement('h1');
parent.appendChild(header4)
header4.textContent=parisshop.name

let undorderedList4 =document.createElement('ul');
parent.appendChild(undorderedList4);

let total4=0
console.log(total4);
for(let i=0;i<13;i++){
    let listItem4 = document.createElement('li');
  undorderedList4.appendChild(listItem4);
  let Randomnumber4= Math.floor( randomNum(parisshop.maxPeop,parisshop.minPeop)*parisshop.avaCoc)
   total4=total4+ Randomnumber4
  listItem4.textContent =`${parisshop.hourWork[i]}: ${Randomnumber4} cookies. `
}
let listmun4=document.createElement('li');
undorderedList4.appendChild(listmun4);
listmun4.textContent = `Total: ${total4}`


let Limashop={
    name:'Lima',
    maxPeop:16,
    minPeop:2,
    avaCoc:4.6,
    hourWork:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
}


let header5 = document.createElement('h1');
parent.appendChild(header5)
header5.textContent=Limashop.name

let undorderedList5 =document.createElement('ul');
parent.appendChild(undorderedList5);

let total5=0
console.log(total5);
for(let i=0;i<13;i++){
    let listItem5 = document.createElement('li');
  undorderedList5.appendChild(listItem5);
  let Randomnumber5= Math.floor( randomNum(Limashop.maxPeop,Limashop.minPeop)*Limashop.avaCoc)
   total5=total5+ Randomnumber5
  listItem5.textContent =`${Limashop.hourWork[i]}: ${Randomnumber5} cookies. `
}
let listmun5=document.createElement('li');
undorderedList5.appendChild(listmun5);
listmun5.textContent = `Total: ${total5}`