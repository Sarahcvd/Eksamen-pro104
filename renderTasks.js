function renderTasks() {
    const outputTask = JSON.parse(window.localStorage.getItem("outputTask")) || [];
    const outputTaskEl = document.getElementById("outputTasks");
    outputTaskEl.innerHTML = "";
    for (const product of outputTask) {
        const productTwo = document.createElement("div");
        const { name } = product;
        productTwo.innerHTML = "<div id='task'><h4>" + product.name + "</h4>" + "</div>";
        outputTaskEl.appendChild(productTwo);
    }
}
