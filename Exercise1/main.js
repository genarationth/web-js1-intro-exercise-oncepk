function ChangeName() {
  let person = prompt("What's your name?", "");
  let names = document.querySelector(".myname");
  names.innerHTML = person;
}
