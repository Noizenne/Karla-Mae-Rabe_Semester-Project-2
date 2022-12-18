export function newDate(date) {
  const today = new Date().getTime();
  const endsAt = new Date(date).getTime();
  const difference = endsAt - today;

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  if (difference < 0) {
    return (document.getElementsByClassName("date").innerHTML = "Ended");
  }

  return (document.getElementsByClassName("date").innerHTML =
    days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s");
}
