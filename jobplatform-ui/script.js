let checkboxes = document.querySelectorAll(".checkbox input");
let valueList = document.getElementById("value-list");
let listArray = [];
let text = "<span>You have selected: </span>";

checkboxes.forEach((c) => {
  c.addEventListener("change", () => {
    // get label of the checkbox in order to update its color if checkbox is checked
    const label = document.querySelector(`label[for=${c.name}]`);

    if (c.checked) {
      // change label color
      label.style.color = "#1A1E20";
      listArray.push(c.name);
      valueList.innerHTML = text + listArray.join("/");
      // filter the job cards
    } else {
      label.style.color = "#808487";
    }
  });
});
