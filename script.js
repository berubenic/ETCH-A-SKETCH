const container = document.querySelector(".container");
var cell;
var row = 16;

// create Grid using CSS grid

function createGrid(row) {
  container.textContent = "";
  container.style.gridTemplateColumns = `repeat(${row}, 1fr)`;
  let square = row * row;
  for (var i = 0; i < square; i++) {
    cell = document.createElement("div");
    cell.classList.add("content");
    container.appendChild(cell);
  }
}

// Initial Load
createGrid(row);

// get change btn

const changeSizeBtn = document.querySelector("#change-size");

// click change size, remove active on pencil and rgb

changeSizeBtn.addEventListener("click", function () {
  pencilBtn.classList.remove("active");
  rgbBtn.classList.remove("active");
  changeSize();
});

// input size and create new grid

function changeSize() {
  row = prompt("Enter the amount of rows you want between 1 and 64.");
  createGrid(row);
}

// Draw cells black if pencil button is active

const pencilBtn = document.querySelector("#pencil");

// get RGB button

const rgbBtn = document.querySelector("#rgb");

// activate pencil button

pencilBtn.addEventListener("click", function () {
  if (rgbBtn.classList.contains("active")) {
    rgbBtn.classList.remove("active");
  }
  pencilBtn.classList.add("active");
  cellDraw();
});

// activate rgb button

rgbBtn.addEventListener("click", function () {
  if (pencilBtn.classList.contains("active")) {
    pencilBtn.classList.remove("active");
  }
  rgbBtn.classList.add("active");
  cellDraw();
});

// make active button draw

function cellDraw() {
  if (pencilBtn.classList.contains("active")) {
    cell = document.querySelectorAll(".content");
    for (let i = 0; i < cell.length; i++) {
      console.log(cell[i]);
      cell[i].addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "black";
      });
    }
  } else if (rgbBtn.classList.contains("active")) {
    cell = document.querySelectorAll(".content");
    for (let i = 0; i < cell.length; i++) {
      console.log(cell[i]);
      cell[i].addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      });
    }
  }
}

// reset button

const resetBtn = document.querySelector("#reset");

// reload page on click

resetBtn.addEventListener("click", function () {
  window.location.reload();
});
