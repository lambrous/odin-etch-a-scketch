const gridSize = 16 ** 2;
const container = document.querySelector(".container");

for (let i = 0; i < gridSize; i++) {
	const block = document.createElement("div");
	block.classList.add("block");
	container.append(block);
}
