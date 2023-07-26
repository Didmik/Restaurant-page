const contactLoad = function() {

    const content = document.querySelector("#content");

    const header = document.createElement("h1");
    header.classList.add("contactTitle");
    header.textContent = "Contact us";
    content.appendChild(header);

    const contactList = document.createElement("ul");
    contactList.classList.add("contactList");
    const contactItem = document.createElement("li");
    contactItem.textContent = "email: cool@gmail.com";
    const contactItem2 = document.createElement("li");
    contactItem2.textContent = "phone number: 12345678";
    content.appendChild(contactList);
    contactList.appendChild(contactItem);
    contactList.appendChild(contactItem2);

}

export default contactLoad;