function Email() {
  var popup = window.open('form.html', 'email', 'popup');
  document.getElementById('form').addMessage();
}

function Submit() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var object = document.getElementById("object").value;
  var message = document.getElementById("message").value;

  /*document.getElementById('form').submit();*/
  /*console.log(sender);
  console.log(to);
  console.log(object);*/

document.write(from + " " + to + " " + object + " " + message);
};

function addMessage() {
  var addNewMail = document.createElement("div");
  addNewMail.innerHTML = "messaggio";
  document.getElementById("submit").appendChild(addNewMail);
}




/*window.opener.addMessage();*/

