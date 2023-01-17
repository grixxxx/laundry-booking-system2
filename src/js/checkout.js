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

let garmentSelected_deserialized = JSON.parse(
  localStorage.getItem("garmentSelectedGroup")
);

let shirtTotal = garmentSelected_deserialized.shirt * 10;
let shortTotal = garmentSelected_deserialized.short * 20;
let trouserTotal = garmentSelected_deserialized.trouser * 40;
let bedsheetTotal = garmentSelected_deserialized.bedsheet * 100;
let hoodieTotal = garmentSelected_deserialized.hoodie * 60;
let underwearTotal = garmentSelected_deserialized.underwear * 5;

const garmentSelectedSubTotal =
  shirtTotal +
  shortTotal +
  trouserTotal +
  bedsheetTotal +
  hoodieTotal +
  underwearTotal;

const subTotal = document.querySelector(".subTotal");

subTotal.textContent = `₱${garmentSelectedSubTotal}.00`;

const grandTotal = document.querySelector(".grandTotal");

setInterval(() => {
  const inputCardInfo = document.querySelectorAll('input[class="cardInfo"]');

  if (creditCard.checked) {
    debitCardInfo.style.cssText = "display:block;";

    inputCardInfo.forEach((info) => {
      info.setAttribute("required", "");
    });
  } else {
    debitCardInfo.style.cssText = "display:none;";
    inputCardInfo.forEach((info) => {
      info.removeAttribute("required");
    });
  }

  if (deliveryCostButton.checked) {
    deliveryCostInput.textContent = `₱${deliveryCostButton.value}.00`;

    const garmentSelectedGrandTotal =
      garmentSelectedSubTotal + parseFloat(deliveryCostButton.value);

    grandTotal.textContent = `₱${garmentSelectedGrandTotal}.00`;
  } else {
    deliveryCostInput.textContent = "₱0.00";
    grandTotal.textContent = `₱${garmentSelectedSubTotal}.00`;
  }
}, 500);

if (garmentSelected_deserialized.shirt > 0) {
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

if (garmentSelected_deserialized.short > 0) {
  let shortTotal = garmentSelected_deserialized.short * 20;

  const shortItem = `
          <article class="garment-selected-section">
            <div class="garment-img-wrapper">
              <img src="../assets/football-shorts.svg" alt="" />
              <div>
                <h2>Short</h2>
                <p>${garmentSelected_deserialized.short} pcs</p>
              </div>
            </div>
            <span>₱${shortTotal}.00</span>
          </article>`;

  garmentSelectedList.insertAdjacentHTML("beforeend", shortItem);
}

if (garmentSelected_deserialized.trouser > 0) {
  const trouserItem = `
          <article class="garment-selected-section">
            <div class="garment-img-wrapper">
              <img src="../assets/trousers.svg" alt="" />
              <div>
                <h2>Pants</h2>
                <p>${garmentSelected_deserialized.trouser} pcs</p>
              </div>
            </div>
            <span>₱${trouserTotal}.00</span>
          </article>`;

  garmentSelectedList.insertAdjacentHTML("beforeend", trouserItem);
}

if (garmentSelected_deserialized.bedsheet > 0) {
  const bedSheetItem = `
          <article class="garment-selected-section">
            <div class="garment-img-wrapper">
              <img src="../assets/bed-sheets.svg" alt="" />
              <div>
                <h2>Bed Sheet</h2>
                <p>${garmentSelected_deserialized.bedsheet} pcs</p>
              </div>
            </div>
            <span>₱${bedsheetTotal}.00</span>
          </article>`;

  garmentSelectedList.insertAdjacentHTML("beforeend", bedSheetItem);
}

if (garmentSelected_deserialized.hoodie > 0) {
  const hoodieItem = `
          <article class="garment-selected-section">
            <div class="garment-img-wrapper">
              <img src="../assets/hooded-jacket.svg" alt="" />
              <div>
                <h2>Jacket</h2>
                <p>${garmentSelected_deserialized.hoodie} pcs</p>
              </div>
            </div>
            <span>₱${hoodieTotal}.00</span>
          </article>`;

  garmentSelectedList.insertAdjacentHTML("beforeend", hoodieItem);
}

if (garmentSelected_deserialized.underwear > 0) {
  const underwearItem = `
          <article class="garment-selected-section">
            <div class="garment-img-wrapper">
              <img src="../assets/underwear.svg" alt="" />
              <div>
                <h2>Underwear</h2>
                <p>${garmentSelected_deserialized.underwear} pcs</p>
              </div>
            </div>
            <span>₱${underwearTotal}.00</span>
          </article>`;

  garmentSelectedList.insertAdjacentHTML("beforeend", underwearItem);
}

const checkoutButton = document.querySelector(".checkout-form");

checkoutButton.addEventListener("submit", () => {
  swal({
    title: "Order Created!",
    text: "seat back and relax wait to pick up your laundry!",
    icon: "success",
  });

  setTimeout(() => {
    window.location = "../Dashboard/index.html";
  }, 1000);
});
