
// apertura finestra su +
function Email() {
  var popup = window.open('form.html', 'email', 'popup');
};

// invio dati al click
function Submit() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var object = document.getElementById("object").value;
  var message = document.getElementById("message").value;
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
'</h4>'+ '<button type="button" class="trash" id="Delete" onclick="trash()"><span><i class="fa fa-trash fa-lg" aria-hidden="true"></i></span></button>'+
'</div>'+'<p class="emailRow__time">'+'10 apr'+'</p>';
  addNewMail.innerHTML = messageTemplate;
  document.getElementById("newMessage").appendChild(addNewMail);
};


function trash(){
alert("Cancellami");
}

//creo un oggetto messaggio 
  //aggiungo un messaggio all' array
var messageList = [
  {
    id: 1,
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

function loadMessages() {
  window.addMessage(messageList[0].from, messageList[0].to, messageList[0].object, messageList[0].message);
  window.addMessage(messageList[1].from, messageList[1].to, messageList[1].object, messageList[1].message);

}

folders = {
  inbox: [  {
    from: " Andrea",
    to: "andrea@mail.it",
    object: "Corso",
    message: "Corso in preparazione",
  },
  {
    from: " Luca",
    to: "luca@mail.it",
    object: "Corso",
    message: "Corso in preparazione"
  }
  ],
  sent: [
    {
      from: " Andrea",
      to: "andrea@mail.it",
      object: "inviato",
      message: "messaggio inviato",
    }  
    
  ]

}

currentFolder = "sent";
folders[currentFolder]
console.log("Ci sono "+currentFolder.length+ " messaggi");


//legarla all onclick dei folder
function selectFolder(folder) {
  console.log(currentFolder);

}



// cambiare il curremt folder

// log del folder corrente

// evidenzio il nome del folder selezionato

//svuoto il div della lista dei messaggi 

//ricarico la lista dei messaggi a partire dall' array del folder che ho scelto
  //chiamo la funzione addMessage() per visualizzare il primo elemento dell' array nella pagina

  // successivamente, faccio un ciclo per leggere tutti gli elementi dell' array e aggiungerli






