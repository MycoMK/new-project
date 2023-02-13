// const body = document.body
// const div = document.createElement("div")
// div.innerText = "what's coming is great"
// body.append(div)


// fetch('https://api.publicapis.org/entries')
//   .then((response) => response.json())
//   .then((data) => console.log(data));


let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");

btn1.addEventListener("click", () =>{
    document.body.style.backgroundImage = "cakes-3.jpg"
});

btn1.addEventListener("click", () =>{
    document.body.style.backgroundImage = "fly bird.jpg"
});

btn1.addEventListener("click", () =>{
    document.body.style.backgroundImage = "snow math.jpeg"
});
