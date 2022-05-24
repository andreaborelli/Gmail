
// apertura finestra su +
function Email() {
  var popup = window.open('form.html', 'email', 'popup');
};

function addMessageTosent(idValue, fromValue, toValue, objectValue, messageValue) {
  const newMessage = {
    id: idValue,
    from: fromValue,
    to: toValue,
    object: objectValue,
    message: messageValue,
    }
    folders.sent.push(newMessage);
    folders.sent.reverse(newMessage);
    if (currentFolderName === 'sent' ) {
      selectFolder(currentFolderName);
    }
}
// row email
function addMessageToDOM(id, from, to, object, message) {
  var addNewMail = document.createElement("div");
  addNewMail.classList.add("emailRow");
  addNewMail.setAttribute("id", id);

var messageTemplate = 
'<div class="emailRow__options">' +
  ' <input type="checkbox" class="check"/> ' +
'</div>' +
'<h3 class="emailRow__title">'+from+'</h3>'+ 
'<div class="emailRow__message">' +
  '<h4>'
    +object+
    '<span class="emailRow__description">'+ ' - ' +message+'</span>'+
  '</h4>'+ 
  '<button type="button" class="trash" id="trash" onclick="trash('+ id +', this)">'+
    '<span><i class="fa fa-trash fa-lg" aria-hidden="true"></i></span>'+
  '</button>'+
'</div>'+
'<p class="emailRow__time">'+'10 apr'+'</p>';
  addNewMail.innerHTML = messageTemplate;
  document.getElementById("newMessage").appendChild(addNewMail);
};
// end row email

function generateEmailId(){
    return Date.now();

}
// delet email
function trash(idTodelet,event){
  for (var i = 0; i < currentFolder.length; i++) {
   console.log("valore di: i", i);
   console.log(currentFolder[i].id);
   if (idTodelet === currentFolder[i].id) {
     currentFolder.splice(i, 1)
     // rimuovi 1 prima dell'indice 
   }
  }
  selectFolder(currentFolderName);
}
// end delet mail

function trashFull() {
  alert("da implementare ToDo");
  // document.getElementById("emailRow").remove();
}

// Checkbox

function checkFull() {

  var inputs = document.querySelectorAll('.check');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
  }

  this.onclick = uncheckFull;
}

function uncheckFull() {
  var inputs = document.querySelectorAll('.check');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }

  this.onclick = checkFull; 
}

var full = document.getElementById("checkfull");
full.onclick = checkFull; 

// End Checkbox


//creo un oggetto messaggio 
  //aggiungo un messaggio all' array
/*var messageList = [
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
*/
function loadMessages() { // sostituire messlist con currentFolder - fatto
  window.addMessageToDOM(currentFolder[0].id, currentFolder[0].from, currentFolder[0].to, currentFolder[0].object, currentFolder[0].message);
}

folders = {
  inbox: [  {
    id: 1653053654211,
    from: " Andrea",
    to: "andrea@mail.it",
    object: "Corso",
    message: "Corso in preparazione",
  },
  {
    id: 1653053833375,
    from: " Luca",
    to: "luca@mail.it",
    object: "Corso",
    message: "Corso in preparazione"
  }
  ],
  sent: [
    {
      id: 1653053804204,
      from: " Andrea",
      to: "andrea@mail.it",
      object: "inviato",
      message: "messaggio inviato",
    }  
    
  ]

}

currentFolderName = "inbox";
currentFolder = folders[currentFolderName]



//legarla all onclick dei folder
function selectFolder(folderName) {
  currentFolderName = folderName;
  currentFolder = folders[currentFolderName]
  removeAllMessages()
  for (var i = 0; i < currentFolder.length; i++) {
    window.addMessageToDOM(currentFolder[i].id, currentFolder[i].from, currentFolder[i].to, currentFolder[i].object, currentFolder[i].message);
  }
  // sidebarSelected(folderName)
// to do selezionare div corrente con class sidebar clicked 
// aggiungere classe al div msg inviati in modo da rimanere cliccato su class sidebarOption__selected
//fare un ciclo for su currentFolder
  // per ogni elemento farlo vedere nella pagina 
}
// levare sidebarOption__selected dall'elemento di prima selezionato

// element selected menu sidebar 
// aggiungere Foldername

// 
function menuListener(folderName) {
var menuSidebar = document.getElementById("menu__sidebar");
var sidebarOption = menuSidebar.getElementsByClassName("sidebarOption");
for (var i = 0; i < sidebarOption.length; i++) {
  if (folderName === sidebarOption[i].getAttribute('id')){
    sidebarOption[i].classList.add('sidebarOption__selected');
  } else {
    sidebarOption[i].classList.remove('sidebarOption__selected');
  }
 // per ogni option tolgo la classe selected 
//  se l'id option combacia con il folder corrente gli metto la classe selected 
}
  // seleziono tutti i div figli con classe option 
  // per ognuno di questi div fare l'if, confrondando l'id con la stringa memorizzata in currentFolderName nell'if aggiungo nell'else tolgo
  // aggiungendo e togliendo la classe dentro il for
}
function removeAllMessages() {
  var newMessageContainer = document.getElementById('newMessage');
  newMessageContainer.innerHTML = '';
  /* 
  while (newMessageContainer.firstChild) {
    newMessageContainer.removeChild(newMessageContainer.lastChild);
  }
} */
}

// cambiare il curremt folder

// log del folder corrente

// evidenzio il nome del folder selezionato

//svuoto il div della lista dei messaggi 

//ricarico la lista dei messaggi a partire dall' array del folder che ho scelto
  //chiamo la funzione addMessage() per visualizzare il primo elemento dell' array nella pagina

  // successivamente, faccio un ciclo per leggere tutti gli elementi dell' array e aggiungerli

 /* close sidebar */
 $(document).ready(function () {
  $(".burger").on('click', function () {
    $(".emailList").toggleClass("emailList__close");
  });
});

$(document).ready(function () {
  $(".toggle__menu-item").on('click', function () {
    $(".menu-item").toggleClass("menu-item__open");
  });
});

// Array


function counter() {
let even = [2, 4, 6, 8, 10];
let shots = [1, 3, 5, 7, 9];

for (let i = 0; i < even.length; i++) {
  console.log(even[i]* 10);
  console.log(shots[i]* 10);
  console.log(even + shots);
}
}
counter();
