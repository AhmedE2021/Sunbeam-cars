const carname = sessionStorage.getItem("carname")
 const pickupdate = sessionStorage.getItem("pickupdate")
 const handindate = sessionStorage.getItem("handindate")
 const rentaldays = sessionStorage.getItem("rentaldays")
 const rentalcost = sessionStorage.getItem("rentalcost")
 const total = sessionStorage.getItem("total")
 const accessoriescost = sessionStorage.getItem("accessoriescost")
 const accessories = JSON.parse(sessionStorage.getItem("goods"))

 let template = `
     <h1 class="form-h">Rental information</h1>
   
     <p class="form-p">All inclusive:</p>
     <h2 class="form-sub-h">TOTAL ${total}</h2>
     <p class="form-p">incl. VAT</p>
  
     <h2 class="form-sub-h">${carname}</h2>
     <p class="form-p">Pick-up date: ${pickupdate}</p>
     <p class="form-p">Return date: ${handindate}</p>
     <p class="form-p">Rental days: ${rentaldays}</p>

     <p class="form-sub-h">Total car rental cost: ${rentalcost} kr.</p>
     <p class="form-p">incl. VAT</p>

     <h3 class="form-sub-h">Accessories</h3>
     <ul>
 `

 for (let item of accessories) {
     item = item.substring(0, item.indexOf('('));
     template += `<li>${item}</li>`
 }

 template += `</ul>
 <br>
 <p class="form-p"">Accessories total: ${accessoriescost} kr.</p>
 <p class="form-p">incl. VAT</p>
 `

 const output = document.getElementById("output");
 output.insertAdjacentHTML("beforeend", template);

 fetch("https://dawa.aws.dk/postnumre")
 .then(function (data) {
     return data.json()
 })
 .then(function (post) {
     //status, address
     const datalist = document.getElementById('codelist')
     const listofcities = post;

     for (city of listofcities){
         datalist.insertAdjacentHTML("beforeend",`<option>${city.nr} ${city.navn}</option>`)
     }
 })

 const form = document.getElementById("customerform");

 form.addEventListener("submit", function (e) {
     e.preventDefault();
     const firstname = document.getElementById("firstname").value;
     const lastname = document.getElementById("lastname").value;
     const streetname = document.getElementById("streetname").value;
     const numberfloor = document.getElementById("numberfloor").value;
     const postalcode = document.getElementById("postalcode").value;

     sessionStorage.setItem("firstname", firstname);
     sessionStorage.setItem("lastname", lastname);
     sessionStorage.setItem("streetname", streetname);
     sessionStorage.setItem("numberfloor", numberfloor);
     sessionStorage.setItem("postalcode", postalcode);

     document.location.href = "receipt.html";
 }) 