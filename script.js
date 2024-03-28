gridDimension = 16;
for (let i = 0; i < gridDimension; i++) {
    for (let j = 0; j < gridDimension; i++) {
        const gridBlock = document.createElement("div");
        gridBlock.classList.add("gridBlock");
        gridContainer.appendChild(gridBlock);
    }
}