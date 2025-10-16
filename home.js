div = document.getElementById("home_link");

div.href = "index.html";
div.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px;">
        <img src="assets/home.svg" alt="casa" style="fill: black; max-width: 30px;">
        <p>Home</p>
    </div>
`;
