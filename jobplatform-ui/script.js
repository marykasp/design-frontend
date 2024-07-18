let checkboxes = document.querySelectorAll(".checkbox input");

checkboxes.forEach((c) => {
  c.addEventListener("change", () => {
    // get label of the checkbox in order to update its color if checkbox is checked
    const label = document.querySelector(`label[for=${c.name}]`);

    if (c.checked) {
      label.style.color = "#1A1E20";
    } else {
      label.style.color = "#808487";
    }
  });
});
