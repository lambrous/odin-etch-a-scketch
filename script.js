const container = document.querySelector(".container");
const resizeBtn = document.querySelector(".resize-btn");

resizeBtn.addEventListener("click", resizeGrid);

function generateGrid(colSize = 16) {
	const gridSize = colSize ** 2;

	for (let i = 0; i < gridSize; i++) {
		const block = document.createElement("div");
		block.classList.add("block");
		block.style.flexBasis = `calc(100% / ${colSize})`;
		block.addEventListener("mouseover", etch);
		container.append(block);
	}
}

function removeGrid() {
	const blocks = document.querySelectorAll(".block");
	for (const block of blocks) {
		block.remove();
	}
}

function etch() {
	this.classList.add("etch");
}

function resizeGrid() {
	const maxSize = 100;
	let colSize;

	do {
		colSize = prompt(
			"How many squares per side (up to 100) would you like for the new grid?",
		);
		if (colSize === null) return;
		colSize = Number.parseInt(colSize);
	} while (colSize > maxSize || colSize <= 0 || Number.isNaN(colSize));

	removeGrid();
	generateGrid(colSize);
}

generateGrid();
