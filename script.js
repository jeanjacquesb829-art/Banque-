function login(){

let email=document.getElementById("email").value
let password=document.getElementById("password").value

if(email==="Jeanjacques.B2026@gmail.com" && password==="Nabil2026B"){

document.getElementById("loginPage").style.display="none"
document.getElementById("app").style.display="flex"

generateTransactions()
createChart()
animateBalance()

}else{

document.getElementById("error").innerText="Identifiants incorrects"

}

}


/* NAVIGATION */

function showSection(id){

document.querySelectorAll(".section").forEach(s=>{

s.style.display="none"

})

document.getElementById(id).style.display="block"

}


/* SOLDE VISIBILITE */

let visible=true

function toggleBalance(){

let balance=document.getElementById("balanceValue")

if(visible){

balance.innerText="****"

visible=false

}else{

balance.innerText="12 890.506 €

visible=true

}

}


/* VIREMENT BLOQUE */

function blocked(){

alert("Transaction refusée : COMPTE BLOQUÉ POUR SANCTION")

}


/* SOLDE ANIME */

function animateBalance(){

let balance=0

let target=2804

let element=document.getElementById("balanceValue")

let interval=setInterval(()=>{

balance+=50

if(balance>=target){

balance=target

clearInterval(interval)

}

element.innerText=balance+" €"

},30)

}


/* 50 TRANSACTIONS */

function generateTransactions(){

let names=[

"Salaire","Amazon","Restaurant","Netflix","Transport",

"Essence","Apple","Supermarché","Pharmacie","Cinéma",

"Internet","Électricité"

]

let container=document.getElementById("transactions")

for(let i=0;i<50;i++){

let amount=(Math.random()*200).toFixed(2)

let type=Math.random()>0.5?"+":"-"

let div=document.createElement("div")

div.className="transaction"

div.innerHTML=`

<span>${names[Math.floor(Math.random()*names.length)]}</span>
<span class="${type==="+"?"plus":"minus"}">${type}${amount} €</span>

`

container.appendChild(div)

}

}


/* GRAPHIQUE INTERACTIF */

function createChart(){

let ctx=document.getElementById("chart")

new Chart(ctx,{

type:"doughnut",

data:{

labels:["Logement","Transport","Alimentation","Loisirs","Épargne"],

datasets:[{

data:[800,150,300,120,500],

backgroundColor:[

"#ef4444",

"#3b82f6",

"#22c55e",

"#f59e0b",

"#8b5cf6"

]

}]

}

})

}
