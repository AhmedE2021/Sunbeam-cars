// const URL = window.location.search;
// const URLDATA = new URLSearchParams(URL);

// const OUTPUT = document.getElementById("output");

// OUTPUT.innerHTML = "Well chosen " + "<br><br>" + URLDATA.get('carname') + "<br><br>" + "Pick up date:" +" "+ URLDATA.get('pickupdate') + "<br>" + "Return date:" +" "+ URLDATA.get('handindate') + "<br>" + "Rental days:" +" "+ URLDATA.get('rentaldays') + "<br><br>" + " Car rental cost: " + "" + URLDATA.get('rentalcost') + "kr" + "." + "<br><br>" + "incl. VAT";

const url = window.location.search;
 const urldata = new URLSearchParams(url)
 const carname = urldata.get('carname')
 const pickupdate = urldata.get("pickupdate")
 const handindate = urldata.get("handindate")
 const rentaldays = urldata.get("rentaldays")
 const rentalcost = parseFloat(urldata.get("rentalcost"))

 const template = `

     <h1 class="form-h">Well chosen!</h1>
     <br> <br>
     <h2 class="form-sub-h">${carname}</h2>
     <br> <br>
     <p class="form-p">Pick-up date: ${pickupdate}</p>
     <p class="form-p">Return date: ${handindate}</p>
     <p class="form-p">Rental days: ${rentaldays}</p>
     <br> <br>
     <h3>Rental cost: ${rentalcost} kr.</h3>
     <p class="form-p">incl. VAT</p>
 `

 const output = document.getElementById("output");
 output.insertAdjacentHTML("beforeend", template);

// Accessories checkbox 

let total = rentalcost; // Global variable, total starts at zero
showTotal(); // Calls function showTotal to show current total

// Event handler - check if checkbox is selected or not and 
// adjust the total value accordingly
function calculateTotal(checkbox, itemprice) {
    if (checkbox.checked === true) { // If the checkbox is seleted then ...
        total = Math.abs(total + parseFloat(itemprice*1.25));
    } else { // if it is not selected then ...
        total = Math.abs(total - parseFloat(itemprice*1.25));
    }
    showTotal();
}

// Shows total value on screen
function showTotal() {
    const output = document.getElementById("totaloutput");
    output.innerHTML = `
    <div>
        <span class="form-p">All inclusive:</span>
        <br>
        <span class="form-sub-h">TOTAL ${total.toLocaleString("da-DK", {style: "currency", currency: "DKK"})}</span>
        <br>
        <span class="form-p">incl. VAT</span>
    </div>
    `;
}
const form = document.getElementById("form");
form.reset(); // Resets form every time page loads

const checkboxes = document.getElementsByClassName("slist"); //Build an object list with checkboxes
 form.addEventListener("submit", function(e) {
     e.preventDefault();
     let shoppinglist = []; // Define shopping list
     for (const checkbox of checkboxes) {
         if (checkbox.checked === true) { // If the item is selected ...
             shoppinglist.push(checkbox.dataset.item + "(dkr. " + checkbox.value + ")"); // add it to the shopping list.
         }
     }

    // Stores information in sessionstorage
    sessionStorage.setItem("goods", JSON.stringify(shoppinglist));
    sessionStorage.setItem("carname", carname);
    sessionStorage.setItem("pickupdate", pickupdate);
    sessionStorage.setItem("handindate", handindate);
    sessionStorage.setItem("rentaldays", rentaldays);
    sessionStorage.setItem("rentalcost", rentalcost);
    sessionStorage.setItem("accessoriescost", total-rentalcost);
    sessionStorage.setItem("total", total.toLocaleString("da-DK", {style: "currency",currency: "DKK"}));

    location.href="customer.html"; // Redirect user to page2.html
})