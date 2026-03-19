function register() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Name is required!");
        return;
    }

    document.getElementById("result").innerText =
        "Registered: " + name;
}