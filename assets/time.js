let d = new Date(),
time = d.getHours(),
greeting = document.getElementById('greeting');

if (time < 12) {
  greeting.textContent = 'morning';
}
if (time > 12) {
  greeting.textContent = 'afternoon';
}
if (time > 20) {
  greeting.textContent = 'evening';
}
if (time > 24 && time < 5) {
  greeting.textContent = 'night';
}