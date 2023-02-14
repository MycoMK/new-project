// const body = document.body
// const div = document.createElement("div")
// div.innerText = "what's coming is great"
// body.append(div)


// fetch('https://api.publicapis.org/entries')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// let color = [ "#222f3e", "#f368e0","#ee5253", "#0abde3", "#0ac84","#222f3e","#5f27cd"];
// let i = 0;
//  document.querySelector("button").addEventListener("click",
//  function(){
// i = i < color.length ? ++ i : 0;
// let body = document.querySelector("body").style.background = "color"[i];
//  })

let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");

btn1.addEventListener('click',() =>{
document.body.style.backgroundImage = "url('Images/1.jpeg')";
});

btn2.addEventListener('click',() =>{
document.body.style.backgroundImage = "url('Images/2.jpeg')";
});

btn3.addEventListener('click',() =>{
document.body.style.backgroundImage = "url('Images/3.jpeg')";
}); 