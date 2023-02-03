const body = document.body
const div = document.createElement("div")
div.innerText = "what's coming is great"
body.append(div)


fetch('https://api.publicapis.org/entries')
  .then((response) => response.json())
  .then((data) => console.log(data));