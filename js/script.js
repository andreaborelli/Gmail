
// apertura finestra su +
function Email() {
  var popup = window.open('form.html', 'email', 'popup');
  document.getElementById('form').addMessage();
};

// invio dati al click
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

// template html
function addMessage(from, to, object, message) {
  var addNewMail = document.createElement("div");
  addNewMail.classList.add("emailRow");
var messageTemplate = '<div class="emailRow__options">' +
 ' <input type="checkbox"/> ' +
'</div>' +
'<h3 class="emailRow__title">'+from+'</h3>'+ 
'<div class="emailRow__message">' +
'<h4>'+object+
  '<span class="emailRow__description">'+ ' - ' +message+'</span>'+
'</h4>'+
'</div>'+'<p class="emailRow__time">'+'10 apr'+'</p>';
  addNewMail.innerHTML = messageTemplate;
  document.getElementById("newMessage").appendChild(addNewMail);
};

//creo un oggetto messaggio 
  //aggiungo un messaggio all' array
var messageList = [
  {
    from: " Andrea",
    to: "andrea@mail.it",
    object: "Corso",
    message: "Corso in preparazione",
  },
  {
    from: " Luca",
    to: "luca@mail.it",
    object: "Corso",
    message: "Corso in preparazione",
  },
  {
    from: "Giulio",
    to: "giulio@mail.it",
    object: "Corso",
    message: "Corso in preparazione",
  }
]
console.log("Ci sono "+messageList.length+ " messaggi");
//alert(messageList[0]);

/*var messages = {
  from: " Andrea",
  to: "luca@mail.it",
  object: "Corso",
  message: "Corso in preparazione",
  Message: function(){
    return this.from + " " + this.to + " " + this.object + " " + this.message;
  }
}
messages.Message();
//var message = ["Andrea", "luca@mail.it", "object", "message"]
//alert(message[0]); 
*/
function loadMessages() {
  console.log("Load Messages");
  messageList = [0];



  //chiamo la funzione addMessage() per visualizzare il primo elemento dell' array nella pagina

  // successivamente, faccio un ciclo per leggere tutti gli elementi dell' array e aggiungerli


}
