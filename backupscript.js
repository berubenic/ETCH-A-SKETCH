const container = document.querySelector(".container");
const changeSizeBtn = document.querySelector("#change-size");
const resetBtn = document.querySelector("#reset");
var row;

// refresh page

resetBtn.addEventListener("click", function () {
  window.location.reload();
});

// ask what Dimension you want

changeSizeBtn.addEventListener("click", function () {
  container.textContent = "";
  row = prompt("Enter a number between 1 and 100");
  createGrid(row);
});

// create number of rows

function createGrid(row) {
  const pencilBtn = document.querySelector("#pencil");
  // if pencil button is clicked remove rgb
  pencilBtn.addEventListener("click", function () {
    pencilBtn.classList.toggle("active");
    if (rgbButton.classList.contains("active")) {
      rgbButton.classList.remove("active");
    }
  });
  const rgbButton = document.querySelector("#rgb");
  // if rgb button is clicked remove pencil
  rgbButton.addEventListener("click", function () {
    rgbButton.classList.toggle("active");
    if (pencilBtn.classList.contains("active")) {
      pencilBtn.classList.remove("active");
    }
  });
  // change css for number of rows
  container.style.gridTemplateColumns = `repeat(${row}, 1fr)`;
  square = row * row;
  // for each cell creation add class and hover effect
  for (var i = 0; i < square; i++) {
    var cell = document.createElement("div");
    if (pencilBtn.classList.contains("active")) {
      cell.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "black";
      });
    } else if (rgbButton.classList.contains("active")) {
      cell.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "red";
      });
    }

    cell.classList.add("content");
    container.appendChild(cell);
  }
}

// pencil button active by default

// deactivate pencil
// activate RGB
