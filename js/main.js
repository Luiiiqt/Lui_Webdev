const utangers = document.getElementById("nakautangs");

document.getElementById("save").addEventListener("click", function(){
    const name = document.getElementById("name").value
    let utang = parseFloat(document.getElementById("utang").value)

    if (name.trim() === "" || isNaN(utang)) {
        utangers.textContent = "Please enter a valid name and utang.";
        utangers.classList.add("error");
        return;
    }

    utangers.classList.remove("error");
    const newUtang = document.createElement("li");
    newUtang.textContent = name + " - ₱" + utang;
    utangers.appendChild(newUtang);
})