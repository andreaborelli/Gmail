function Email() {
  var popup = window.open('form.html', 'email', 'popup');
  document.getElementById('form').addMessage();
};

function Submit() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var object = document.getElementById("object").value;
  var message = document.getElementById("message").value;

//console.log(from + " " + to + " " + object + " " + message);
window.addMessage(from, to, object, message);
window.opener.addMessage(from, to, object, message);
window.close();
};

function addMessage(from, to, object, message) {
  var addNewMail = document.createElement("div");
 /* addNewMail = document.createElement("input");
  addNewMail = document.createElement("h3");
  addNewMail = document.createElement("h4");*/
  addNewMail.classList.add("emailRow", "emailRow__options", "emailRow__title", "emailRow__message");
  addNewMail.innerHTML = from + " " + to + " " + object + " " + message;
  document.getElementById("newMessage").appendChild(addNewMail);
};

