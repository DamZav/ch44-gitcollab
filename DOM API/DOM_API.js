const p1 = document.getElementById('p1');
const h2list = document.getElementsByClassName('subtitle');
const textInput = document.getElementById("username-input");

// 
// console.log(document);
const element1 = document.querySelector("#p1");
const element2 = document.querySelector(".subtitle");

console.log(p1);
console.log(h2list);
console.log(textInput);

p1.textContent = "Texto dinámico";

// textInput.addEventListener("input", (e) => {
//     console.log(e);
// })

textInput.addEventListener("input", (e) => {
    // console.log(e.target.value);
    p1.textContent = e.target.value;
})