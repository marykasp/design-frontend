let checkboxes = document.querySelectorAll(".checkbox input");
let valueList = document.getElementById("value-list");
let listArray = [];
let text = "<span>You have selected: </span>";

checkboxes.forEach((c) => {
  c.addEventListener("change", () => {
    // get label of the checkbox in order to update its color if checkbox is checked
    const label = document.querySelector(`label[for=${c.name}]`);

    // can use listArray to iterate over and filter cards that contain one of those names in data attribute
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

// Toggle Sidebar
const sidebar = document.querySelector(".sidebar");
const menuBtn = document.getElementById("menuToggle");

menuBtn.addEventListener("click", () => {
  sidebar.style.left = "0px";
});

// determine where click on document occurs - if user clicks not on sidebar or menu, close sidebar
document.addEventListener("click", (e) => {
  const isClickInside =
    sidebar.contains(e.target) || menuBtn.contains(e.target);

  if (!isClickInside) {
    sidebar.style.left = "-172px";
  }
});
