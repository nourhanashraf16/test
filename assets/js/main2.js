const value = window.location.href.split("?")[1].split("=")[1];
console.log(value);
const content = document.getElementById("demo");
content.innerHTML = `you selected ${value} of 5`;
