//Dark Mode Start

window.onload=()=>{
if(localStorage.getItem("Product-data")){
  rowsArr=JSON.parse(localStorage.getItem("Product-data"))
  console.log(rowsArr)
}

}
//Dark Mode End
// Create Product Start
let productName = document.querySelector("#name");
console.log(productName);
let price = document.querySelector("#Price");
console.log(price);
let taxes = document.querySelector("#Taxes");
console.log(taxes);
let ads = document.querySelector("#Ads");
console.log(ads);
let discount = document.querySelector("#discount");
console.log(discount);
let total = document.querySelector("#total");
console.log(total);
let count = document.querySelector("#count");
let category = document.querySelector("#category");
let createBtn = document.querySelector("#create");
console.log(createBtn);

//get total Function
function Gettotal() {
  if (price.value != " ") {
    total.innerHTML =
      Number(price.value) +
      Number(taxes.value) +
      Number(ads.value) -
      Number(discount.value);
    // console.log(total.innerHTML);
    //chang total color  when it is not empty
    if (total.innerHTML != " ") {
      total.style.backgroundColor = "#02ff00";
    }

    // console.log("Not emprty")
  }
}
price.onkeyup = () => {
  Gettotal();
};
taxes.onkeyup = () => {
  Gettotal();
};
ads.onkeyup = () => {
  Gettotal();
};
discount.onkeyup = () => {
  Gettotal();
};
let create = document.querySelector("#create");
let tble = document.querySelector("#product-table");
let delConent = document.querySelector("#del-conent");
let i = 1;
let rowsArr =[]
create.addEventListener("click", () => {
  
  for (let j = 0; j < Number(count.value); j++) {
    
    delConent.innerHTML = i;

    //Add to table
    //Create Row
    let rw = document.createElement("tr");
    //////////Cells Start/////////
    //create id cell
    let idTd = document.createElement("td");
    let nameTd = document.createElement("td");
    //create Price cell
    let priceTd = document.createElement("td");
    //create Taxes cell
    let taxesTd = document.createElement("td");
    //create Ads cell
    let adsTd = document.createElement("td");
    //create Discount cell
    let discountTd = document.createElement("td");
    //create Category cell
    let catTd = document.createElement("td");
    //create Update cell
    let updateTd = document.createElement("td");
    //create Delte cell
    let delteTd = document.createElement("td");
    //////////// Cells End///////////////////
    /////////////cells Conent Start/////////////////////////////

    //Id Cell Conent
    let idTxt = document.createTextNode(i++);
    //Name Cell Conent
    let nameTxt = document.createTextNode(productName.value);
    //Price Cell Conent
    let priceTxt = document.createTextNode(price.value);
    //Taxs Cell Conent
    let taxesTxt = document.createTextNode(taxes.value);
    //Ads Cell Conent
    let adsTxt = document.createTextNode(ads.value);
    //Discount Cell Conent
    let discountTxt = document.createTextNode(discount.value);
    //Category Cell Conent
    let catTxt = document.createTextNode(category.value);
    // update Cell Conent
    let updateBtn = document.createElement("button");
    let updateBTnConetnt = document.createTextNode("UpDate");
    updateBtn.className = "update-btn";

    let delteBtn = document.createElement("button");
    let delteBtnconent = document.createTextNode("Delte");
    delteBtn.className = "delte-btn";
    delteBtn.addEventListener("click", () => {
      delteBtn.parentElement.parentElement.remove();
    });
    /////////////cells Conent End/////////////////////////////
    //////////////////Append Conet to cells Start//////////////////////////////
    idTd.appendChild(idTxt);
    nameTd.appendChild(nameTxt);
    priceTd.appendChild(priceTxt);
    taxesTd.appendChild(taxesTxt);
    adsTd.appendChild(adsTxt);
    discountTd.appendChild(discountTxt);
    catTd.appendChild(catTxt);
    updateBtn.appendChild(updateBTnConetnt);
    updateTd.appendChild(updateBtn);
    delteBtn.appendChild(delteBtnconent);
    delteTd.appendChild(delteBtn);
    rw.appendChild(idTd);
    rw.appendChild(nameTd);
    rw.appendChild(priceTd);
    rw.appendChild(taxesTd);
    rw.appendChild(adsTd);
    rw.appendChild(discountTd);
    rw.appendChild(catTd);
    rw.appendChild(updateTd);
    rw.appendChild(delteTd);
    tble.appendChild(rw);
    rowsArr.push(rw.innerHTML);
    window.localStorage.setItem("Product-data", JSON.stringify(rowsArr));

    // console.log(nameTd)
    //////////////////Append Conet to cells End//////////////////////////////
    updateBtn.addEventListener("click", () => {
      productName.value = nameTd.innerText;
      price.value = priceTd.innerText;
      taxes.value = taxesTd.innerText;
      ads.value = adsTd.innerText;
      discount.value = discountTd.innerText;
      category.value = catTd.innerText;
      updateBtn.parentElement.parentElement.remove();
      createBtn.innerHTML="update"
    });
  }

  productName.value = " ";
  price.value = " ";
  taxes.value = " ";
  ads.value = " ";
  discount.value = " ";
  category.value = " ";
  count.value = " ";
  total.innerHTML = " ";
});
// Create Product End
// Delte all products
let delBtn = document.querySelector("#del");

delBtn.addEventListener("click", () => {
  delConent.innerHTML = 0;
});
/// save dta on loading
// Search 
/// search by Name
let searchInput=document.querySelector("#input-search")
let searchbtn1 =document.querySelector("#searchbtn1")
let searchbtn2=document.querySelector("#searchbtn2")
searchbtn1.addEventListener("click",()=>{
searchInput.focus()
searchInput.placeholder="Search For product By Name"

})
searchbtn2.addEventListener("click",()=>{
searchInput.focus()
searchInput.placeholder="Search For product By category"
})
searchInput.oninput=()=>{

  for(let r=0;r<rowsArr.length;r++){
    rowsArr[r].includes("searchInput.value")

  }
}

