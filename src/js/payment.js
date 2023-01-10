const timeControl = document.querySelector("#timeControl");

const dateSet = new Date();

let hours = dateSet.getHours();
let minutes = dateSet.getMinutes();

let timeSession = document.getElementsByClassName(".timeSession").textContent;

hours < 10 ? (hours = "0" + hours) : 0;

timeControl.value = `${hours}:${minutes}`;
