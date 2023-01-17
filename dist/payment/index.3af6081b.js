const timeControl = document.querySelector("#timeControl");
const dateSet = new Date();
let hours = dateSet.getHours();
let minutes = dateSet.getMinutes();
let timeSession = document.getElementsByClassName(".timeSession").textContent;
hours < 10 && (hours = "0" + hours);
timeControl.value = `${hours}:${minutes}`;
const shirtInput = document.querySelector('input[id="shirtInput"]');
const shortInput = document.querySelector('input[id="shortInput"]');
const trouserInput = document.querySelector('input[id="trouserInput"]');
const bedSheetInput = document.querySelector('input[id="bedSheetInput"]');
const hoodieInput = document.querySelector('input[id="hoodieInput"]');
const underwearInput = document.querySelector('input[id="underwearInput"]');
setInterval(()=>{
    let garmentSelected = {
        shirt: shirtInput.value,
        short: shortInput.value,
        trouser: trouserInput.value,
        bedsheet: bedSheetInput.value,
        hoodie: hoodieInput.value,
        underwear: underwearInput.value
    };
    let garmentSelected_serialized = JSON.stringify(garmentSelected);
    localStorage.setItem("garmentSelectedGroup", garmentSelected_serialized);
    console.log(localStorage);
}, 1000);

//# sourceMappingURL=index.3af6081b.js.map
