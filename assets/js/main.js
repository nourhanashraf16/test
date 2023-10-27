//1- get value for each button when user click button
//2- when user click submit move another url by value of btns
const btns = document.querySelectorAll(".btnNum");
const submitBtn = document.querySelector(".request_submit");
let value;
let previousButton = null;
btns.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    if (previousButton !== null) {
      previousButton.style.backgroundColor = "";
      previousButton.style.color = "";
    }
    item.style.backgroundColor = " #fc7613";
    item.style.color = " #ffffff";
    value = item.getAttribute("data-value");
    console.log(value);
    const url = "../../index2.html?value=" + value;
    console.log(url);
    submitBtn.addEventListener("click", function () {
      window.location.href = url;
    });
    previousButton = item;
  });
});
