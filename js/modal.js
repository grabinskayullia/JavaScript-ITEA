var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Send info in console.log
var addTime = document.getElementById('add');

addTime.addEventListener('click', getN);

function getN() {
  var getName = document.getElementById('name_input').value;
  console.log(getName);
}

function getAge() {
    var getAge = document.getElementById('age_input').value;
    console.log(getAge);
}
addTime.addEventListener('click', getAge);
