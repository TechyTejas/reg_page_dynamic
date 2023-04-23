const listItem = document.getElementById("items");

async function submitHandler(event) {
 
 try{  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const obj = { name, email, number };
  await axios.post("https://crudcrud.com/api/e66c13e9974b430b9b4fbc2cc76631e6/AppointmentDetails",obj)
  displayItemOnScreen(obj);
 // addItemToLocalStorage(obj);
  event.target.reset();
}
catch(err){console.log(err)}
}

// Display an item on the screen along with buttons

function displayItemOnScreen(obj) {
 
 try{   const newItem = document.createElement('li');
  newItem.textContent = obj.name + '-' + obj.email + '-' + obj.number;

  // Create Delete Button
  const deletebtn = document.createElement('input') //Delete Button
  deletebtn.type = 'button';
  deletebtn.value = 'Delete'; //value of delete button
  deletebtn.onclick = () => {
    localStorage.removeItem(obj.name);
    listItem.removeChild(newItem);
  }
  const editbtn = document.createElement('input') //Edit Button
  editbtn.type = 'button';
  editbtn.value = 'Edit'; //value of edit button
  editbtn.onclick = () => {
    localStorage.removeItem(obj.name);
    listItem.removeChild(newItem);
    document.getElementById('name').value = obj.name;
    document.getElementById('email').value = obj.email;
    document.getElementById('number').value = obj.number;
  }

  newItem.appendChild(deletebtn) //deletebtn append into li
  newItem.appendChild(editbtn) //editbtn append into li
  listItem.appendChild(newItem); // to show under the form downwards
}
catch(err){
    console.log(err)
}
}

// Add event listener for page load
document.addEventListener("DOMContentLoaded", () => {
  axios.get("https://crudcrud.com/api/e66c13e9974b430b9b4fbc2cc76631e6/AppointmentDetails")
  .then ((response)=>{
    console.log(response)
  })
  .catch((err)=>{
    console.log(err)
  })
})