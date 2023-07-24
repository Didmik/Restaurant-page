const firstLoad = function() {

    const content = document.querySelector("#content");

   /* const homeButton = document.createElement("button");
    homeButton.classList.add("home");
    homeButton.textContent = "Home";

    const menuButton = document.createElement("button");
    menuButton.classList.add("menu");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", () => {
        resetGrid();

    })

    function resetGrid () {
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
        }
     }

    const contactButton = document.createElement("button");
    contactButton.classList.add("contact");
    contactButton.textContent = "Contact";

    content.appendChild(homeButton);
    content.appendChild(menuButton);
    content.appendChild(contactButton); */


    const header = document.createElement("h1");
    header.classList.add("topTitle");
    header.textContent = "Restaurant Cool";
    content.appendChild(header);

    const image = document.createElement("img");
    image.src = "../img/Restaurant-Pic.jpg";
    image.alt = "Pic of a Restaurant";
    image.classList.add("resPic");
    content.appendChild(image);

    const info = document.createElement("p");
    info.classList.add("info");
    info.textContent = "Our restaurant is a cool and chill restaurant. Bring your family" 
    "and eat great and cheap, but classy food";
    content.appendChild(info);

}

export default firstLoad;