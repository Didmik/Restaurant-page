import firstLoad from "./firstLoad";
import menuLoad from "./menu";
import contactLoad from "./contact";
import "./style.css";



    const homeButton = document.createElement("button");
    homeButton.classList.add("home");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", () => {
        resetGrid();
        firstLoad();
        content.appendChild(homeButton);
        content.appendChild(menuButton);
        content.appendChild(contactButton);
    })

    const menuButton = document.createElement("button");
    menuButton.classList.add("menu");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", () => {
        resetGrid();
        menuLoad();
        content.appendChild(homeButton);
        content.appendChild(menuButton);
        content.appendChild(contactButton);
    })

   
    const contactButton = document.createElement("button");
    contactButton.classList.add("contact");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", () => {
        resetGrid();
        contactLoad();
        content.appendChild(homeButton);
        content.appendChild(menuButton);
        content.appendChild(contactButton);
    })


    content.appendChild(homeButton);
    content.appendChild(menuButton);
    content.appendChild(contactButton);


    function resetGrid () {
        while (content.hasChildNodes()) {
            content.removeChild(content.firstChild);
        }
     }


    firstLoad();
