let d = new Date(),
time = d.getHours(),
greeting = document.getElementById('greeting');


if (time < 12) {
  greeting.textContent = 'morning';
}
else if (time < 17) {
  greeting.textContent = 'afternoon';
}
else if (time < 21) {
  greeting.textContent = 'evening';
}
else {
  greeting.textContent = 'night';
}