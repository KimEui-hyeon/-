function send(){
   const msg = document.getElementById('message').value;
   const table = document.getElementById('table');
   const newRow = table.insertRow();
   const newCell = newRow.insertCell(0);
   newCell.innerText =msg;
}

function getMessages(){


}