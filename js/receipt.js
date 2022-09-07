const carname = sessionStorage.getItem("carname")
 const pickupdate = sessionStorage.getItem("pickupdate")
 const handindate = sessionStorage.getItem("handindate")
 const rentaldays = sessionStorage.getItem("rentaldays")
 const rentalcost = sessionStorage.getItem("rentalcost")
 const total = sessionStorage.getItem("total")
 const accessoriescost = sessionStorage.getItem("accessoriescost")
 const accessories = JSON.parse(sessionStorage.getItem("goods"))
 const firstname = sessionStorage.getItem("firstname");
 const lastname = sessionStorage.getItem("lastname");
 const streetname = sessionStorage.getItem("streetname");
 const numberfloor = sessionStorage.getItem("numberfloor");
 const postalcode = sessionStorage.getItem("postalcode");

 let template = `
     <h2 class="form-h">Rental information</h2>
     <p class="form-p">All inclusive:</p>
     <p class="form-sub-h">TOTAL ${total}</p>
     <p class="form-p">incl. VAT</p>
     <p class="form-sub-h">${carname}</p>
     <p class="form-p">Pick-up date: ${pickupdate}</p>
     <p class="form-p">Return date: ${handindate}</p>
     <p class="form-p" >Rental days: ${rentaldays}</p>
     <p class="form-sub-h">Total car rental cost: ${rentalcost} kr.</p>
     <p class="form-p">incl. VAT</p>
     <h3 class="form-p">Accessories</h3>
     <ul>
 `

 for (let item of accessories) {
     item = item.substring(0, item.indexOf('('));
     template += `<li>${item}</li>`
 }

 template += `</ul>
 <br>
 <h3 class="form-sub-h>Accessories total: ${accessoriescost} kr.</h3>
 <p>incl. VAT</p>
 `

 const output = document.getElementById("output");
 output.insertAdjacentHTML("beforeend", template);

 let formtemplate = `
 <p>First name: <span class="bold-text">${firstname}</span></p>
 <p>Last name: <span class="bold-text">${lastname}</span></p>
 <p>Address: <span class="bold-text">${streetname} ${numberfloor}</span></p>
 <p>Postal code and city: <span class="bold-text">${postalcode}</span></p>

 <button class="no-print book-button" onclick="window.print()">Print</button>
 `

 const formoutput = document.getElementById("formoutput");
 formoutput.insertAdjacentHTML("beforeend", formtemplate);