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

// open head
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
let th2=document.createElement('th')
tr1.appendChild(th2)
th2.textContent="The Total";


Store.prototype.row=function(){
    let tr=document.createElement('tr');
    table.appendChild(tr);
    let th=document.createElement('th')
    tr.appendChild(th)
    th.textContent=this.name;
    for(let i=0;i<hourWork.length;i++){
        let td=document.createElement('td');
        tr.appendChild(td);
        td.textContent=this.numCoc[i];

    }
    let th1=document.createElement('th')
    tr.appendChild(th1)
    th1.textContent=this.total;
}

let seattle=new Store('Seattle',65,23,6.3);
//console.log(seattle);
seattle.numCock();
seattle.row();

let tokyo=new Store('Tokyo',24,3,1.2);
//console.log(tokyo);
tokyo.numCock();
tokyo.row();


let dubai=new Store('Dubai',38,11,3.7);
//console.log(dubai);
dubai.numCock();
dubai.row();

let Paris=new Store('Paris',38,20,2.3);
//console.log(Paris);
Paris.numCock();
Paris.row();

let Lima=new Store('Lima',16,2,4.6);
//console.log(Lima);
Lima.numCock();
Lima.row();
 
let tr2=document.createElement('tr');
table.appendChild(tr2);
  
let th3=document.createElement('th')
tr2.appendChild(th3)
th3.textContent="The Total";

for(let i=0;i<hourWork.length;i++){
    let th=document.createElement('th');
tr2.appendChild(th);
th.textContent= seattle.numCoc[i]+tokyo.numCoc[i]+dubai.numCoc[i]+Paris.numCoc[i]+Lima.numCoc[i];
}
let th4=document.createElement('th')
tr2.appendChild(th4)
th4.textContent=seattle.total+tokyo.total+dubai.total+Paris.total+Lima.total;

































