let outputDate = document.querySelector(".outputDate");

setInterval(() => {
  const event = new Date();

  let hours = event.getHours();
  let minutes = event.getMinutes();

  let timeSession = document.getElementsByClassName(".timeSession").textContent;

  hours >= 12 ? (timeSession = "PM") : (timeSession = "AM");

  hours > 12 ? (hours -= 12) : 0;

  outputDate.innerHTML = `${event.toDateString()} | ${hours}:${minutes} ${timeSession}`;
}, 1000);

const logoutButton = document.querySelector(".logout-button");

logoutButton.addEventListener("click", () => {
  swal({
    title: "Are you sure you want to logout?",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      window.location.href = "../";
    }
  });
});
