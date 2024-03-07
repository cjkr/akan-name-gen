var weekday = "";

document.getElementById("birthday").addEventListener("change", function () {
  var dateStr = this.value;

  // get CC, YY, MM, DD info
  var CC = Number(dateStr.substring(0, 2));
  var YY = Number(dateStr.substring(2, 4));
  var MM = Number(dateStr.substring(5, 7));
  var DD = Number(dateStr.substring(8, 10));

  weekday = parseInt(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
  );

  document.getElementById("akan").textContent = weekday;
});

// Returns selected gender from radio as "Male", "Female" or "None"
function getSelectedGender() {
  var selectedGender = document.querySelector('input[name="gender"]:checked');
  if (selectedGender !== null) {
    return selectedGender.value;
  } else {
    return "None";
  }
}
