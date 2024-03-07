var weekday = "";
var akan_names = {
  Male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
  Female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
};
var birthdayInput = document.getElementById("birthday");

// add change listeners to the radio buttons
document
  .querySelectorAll('input[type="radio"][name="gender"]')
  .forEach(function (radio) {
    radio.addEventListener("change", function (e) {
      setAkanName(e.target.value, birthdayInput.value);
    });
  });

// add change listener to date input
birthdayInput.addEventListener("change", function () {
  setAkanName(getSelectedGender(), this.value);
});

// Returns selected gender from radio as "Male", "Female" or "None"
function getSelectedGender() {
  var selectedGender = document.querySelector('input[name="gender"]:checked');
  if (selectedGender !== null) {
    return selectedGender.value;
  } else {
    return null;
  }
}

// function get weekday from date string
function getWeekday(dateString) {
  // get CC, YY, MM, DD info
  var CC = Number(dateString.substring(0, 2));
  var YY = Number(dateString.substring(2, 4));
  var MM = Number(dateString.substring(5, 7));
  var DD = Number(dateString.substring(8, 10));

  return parseInt(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
  );
}

// set Akan name
function setAkanName(gender, day) {
  if (gender !== null && day !== null && day !== "") {
    document.getElementById("akan").textContent =
      akan_names[gender][getWeekday(day)];
  }
}
