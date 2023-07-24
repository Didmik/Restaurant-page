const menuLoad = function() {

    const content = document.querySelector("#content");

    const header = document.createElement("h1");
    header.classList.add("menuTitle");
    header.textContent = "Menu";
    content.appendChild(header);

    const menuList = document.createElement("ul");
    menuList.classList.add("menuList");
    const menuItem = document.createElement("li");
    menuItem.textContent = "Pizza";
    const menuItem2 = document.createElement("li");
    menuItem2.textContent = "Pasta";
    const menuItem3 = document.createElement("li");
    menuItem3.textContent = "Lasagna";
    content.appendChild(menuList);
    menuList.appendChild(menuItem);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

}

export default menuLoad;