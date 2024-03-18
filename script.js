const gridSize = 16 ** 2;
const container = document.querySelector(".container");

for (let i = 0; i < gridSize; i++) {
	const block = document.createElement("div");
	block.classList.add("block");
	block.addEventListener("mouseover", etch);
	container.append(block);
}

function etch() {
	this.classList.add("etch");
}
