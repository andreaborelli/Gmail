// invio dati al click
function Submit() {
  var id = window.opener.generateEmailId();
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var object = document.getElementById("object").value;
    var message = document.getElementById("message").value;
  window.opener.addMessageTosent(id, from, to, object, message);
  //  window.opener.selectFolder('sent');
  window.close();
  }
  
