function Email() {
  var popup = window.open('form.html', 'email', 'popup');
  document.getElementById('form').addMessage();
}

function Submit() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var object = document.getElementById("object").value;
  var message = document.getElementById("message").value;

console.log(from + " " + to + " " + object + " " + message);
window.addMessage(from, to, object, message);
window.opener.addMessage(to);
window.close();
};

function addMessage(from, to, object, message) {
  var addNewMail = document.createElement("div");
  addNewMail.innerHTML = from + " " + to + " " + object + " " + message;
  document.getElementById("newmessage").appendChild(addNewMail);
}




/*window.opener.addMessage();*/

