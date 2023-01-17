function isInputNumber(e) {
  let char = e.which || e.keycode;

  if (char >= 48 && char <= 57) {
    return true;
  } else {
    return false;
  }
}

const creditCard = document.querySelector('input[id="debitcard"]');
const debitCardInfo = document.querySelector(".debitcard-info-section");

const deliveryCostButton = document.querySelector('input[id="oneday"]');
const deliveryCostInput = document.querySelector(".deliveryCost");

const garmentSelectedList = document.querySelector(
  ".garment-selected-container"
);

setInterval(() => {
  creditCard.checked
    ? (debitCardInfo.style.cssText = "display:block;")
    : (debitCardInfo.style.cssText = "display:none;");

  deliveryCostButton.checked
    ? (deliveryCostInput.textContent = `₱${deliveryCostButton.value}.00`)
    : (deliveryCostInput.textContent = "₱0.00");
}, 1000);

let garmentSelected_deserialized = JSON.parse(
  localStorage.getItem("garmentSelectedGroup")
);

if (garmentSelected_deserialized.shirt > 0) {
  let shirtTotal = garmentSelected_deserialized.shirt * 10;

 

  const shirtItem = `
          <article class="garment-selected-section">
            <div class="garment-img-wrapper">
              <img src="../assets/tshirt.svg" alt="" />
              <div>
                <h2>Shirt</h2>
                <p>${garmentSelected_deserialized.shirt} pcs</p>
              </div>
            </div>
            <span>₱${shirtTotal}.00</span>
          </article>`;

  garmentSelectedList.insertAdjacentHTML("beforeend", shirtItem);
}
