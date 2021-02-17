'use strict';

function randomNum (min,max){
    return Math.random()*(max-min+1)+min;
}

let image = document.createElement('img');
let parent = document.getElementById('store');
parent.appendChild(image);
image.setAttribute('src','images/salmon.png');

let hourWork=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function Store (name,maxPeop,minPeop, avaCoc){
    this.name=name;
    this.maxPeop=maxPeop;
    this.minPeop=minPeop;
    this.avaCoc=avaCoc;
    this.numCoc=[];
    this.total=0
}

Store.prototype.numCock=function(){
    for(let i=0;i<hourWork.length;i++){
        this.numCoc[i]=Math.floor((randomNum(this.minPeop,this.maxPeop))*this.avaCoc); 
        this.total+=this.numCoc[i];

    }
}

let seattle=new Store('Seattle',65,23,6.3);
//console.log(seattle);
seattle.numCock();

let tokyo=new Store('Tokyo',24,3,1.2);
//console.log(tokyo);
tokyo.numCock();

let dubai=new Store('Dubai',38,11,3.7);
//console.log(dubai);
dubai.numCock();

let Paris=new Store('Paris',38,20,2.3);
//console.log(Paris);
Paris.numCock();

let Lima=new Store('Lima',16,2,4.6);
//console.log(Lima);
Lima.numCock();

let title = document.createElement('h1');
parent.appendChild(title);
title.textContent='The number of customer each hour.'

let table = document.createElement('table');
parent.appendChild(table);

let tr1=document.createElement('tr');
table.appendChild(tr1);
  
let th1=document.createElement('th')
tr1.appendChild(th1)
th1.textContent="The Time";

for(let i=0;i<hourWork.length;i++){
    let th=document.createElement('th');
tr1.appendChild(th);
th.textContent=hourWork[i];
}

let th7=document.createElement('th')
tr1.appendChild(th7)
th7.textContent="The Total";

let tr2=document.createElement('tr');
table.appendChild(tr2);
let th2=document.createElement('th')
tr2.appendChild(th2)
th2.textContent=seattle.name;
for(let i=0;i<hourWork.length;i++){
    let th=document.createElement('td');
tr2.appendChild(th);
th.textContent=seattle.numCoc[i];
}

let th8=document.createElement('th')
tr2.appendChild(th8)
th8.textContent=seattle.total;

let tr3=document.createElement('tr');
table.appendChild(tr3);
let th3=document.createElement('th')
tr3.appendChild(th3)
th3.textContent=tokyo.name;
for(let i=0;i<hourWork.length;i++){
    let th=document.createElement('td');
tr3.appendChild(th);
th.textContent=tokyo.numCoc[i];
}

let th9=document.createElement('th')
tr3.appendChild(th9)
th9.textContent=tokyo.total;

let tr4=document.createElement('tr');
table.appendChild(tr4);
let th4=document.createElement('th')
tr4.appendChild(th4)
th4.textContent=dubai.name;
for(let i=0;i<hourWork.length;i++){
    let th=document.createElement('td');
tr4.appendChild(th);
th.textContent=dubai.numCoc[i];
}

let th10=document.createElement('th')
tr4.appendChild(th10)
th10.textContent=dubai.total;

let tr5=document.createElement('tr');
table.appendChild(tr5);
let th5=document.createElement('th')
tr5.appendChild(th5)
th5.textContent=Paris.name;
for(let i=0;i<hourWork.length;i++){
    let th=document.createElement('td');
tr5.appendChild(th);
th.textContent=Paris.numCoc[i];
}

let th11=document.createElement('th')
tr5.appendChild(th11)
th11.textContent=Paris.total;

let tr6=document.createElement('tr');
table.appendChild(tr6);
let th6=document.createElement('th')
tr6.appendChild(th6)
th6.textContent=Lima.name;
for(let i=0;i<hourWork.length;i++){
    let th=document.createElement('td');
tr6.appendChild(th);
th.textContent=Lima.numCoc[i];
}

let th12=document.createElement('th')
tr6.appendChild(th12)
th12.textContent=Lima.total;

let tr7=document.createElement('tr');
table.appendChild(tr7);
let th13=document.createElement('th')
tr7.appendChild(th13)
th13.textContent='Total';
for(let i=0;i<hourWork.length;i++){
    let th=document.createElement('td');
tr7.appendChild(th);
th.textContent=seattle.numCoc[i]+tokyo.numCoc[i]+Paris.numCoc[i]+dubai.numCoc[i]+Lima.numCoc[i];
}

let th14=document.createElement('th')
tr7.appendChild(th14)

