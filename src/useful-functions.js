// поверне час в форматі читабельному
function getTimeComponents(time) {
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60 * 60 * 24)) / 1000);
  return { hours, mins, secs };
}
// рандомний колір
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// доводить формат строки заповнювачати (довжина,заповнювач)
function pad(value) {
  return String(value).padStart(2, '0');
}
