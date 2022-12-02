// insert  cookies will be stored when users are logged in on homepage.

// Storage in Local Client
const dateLogin = document.querySelector('user');
var previousDates = [];


function localStorageData() {
 localStorage.setItem("dateLogin", JSON.stringify(dateLogin));

 var li = document.createElement("li");
 var dateArray = JSON.parse(localStorage.getItem("dateLogin"));

 li.textContent = dateArray[dateArray.length-1];
 previousDates.append(li);
};