const contacts = [
  {
    id: 1,
    name: 'Duy',
    phone: '0975427591'
  }
];

const contactListElement = document.getElementById("contact-list");
const addButtonElement = document.getElementById("btn-add");
const searchButtonElement = document.getElementById("search-button");
const searchInputElement = document.getElementById("search-input");

function render(contactsData){
  const contactsListHtml = contactsData.map(
    (contact) => {
      return `
      <div class="card my-2">
        <div class="card-body d-flex align-items-center justify-content-between">
          <div>${contact.name}</div>
          <div>${contact.phone}</div>
        </div>
      </div>
      `
    });
  
  contactListElement.innerHTML = contactsListHtml.join("");
}

render(contacts);

// Them danh ba
addButtonElement.addEventListener("click",()=>{
  const nameInputElement = document.getElementById("input-name")
  const phoneInputElement = document.getElementById("input-phone")
  const contact = {
    id: contacts.length +2,
    name: nameInputElement.value,
    phone: phoneInputElement.value,
  }

  contacts.push(contact);

  render(contacts);
});

// Tim kiem
searchButtonElement.addEventListener('click', ()=>{
  const searchString = searchInputElement.value.toLocaleLowerCase();

  const filteredContacts = contacts.filter((contact)=>{
    return contact.name.toLocaleLowerCase().includes(searchString) 
    ||  contact.phone.toLocaleLowerCase().includes(searchString);
  });

  render(filteredContacts);
})

// Xoa trung 