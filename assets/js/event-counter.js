// Define event dates for different counters
const eventDate1 = new Date("August 30, 2024 10:00:00").getTime();
const eventDate2 = new Date("September 1, 2024 14:00:00").getTime();
const eventDate3 = new Date("September 5, 2024 08:30:00").getTime();
const eventDate4 = new Date("September 10, 2024 17:45:00").getTime();
const eventDate5 = new Date("September 15, 2024 12:00:00").getTime();
const eventDate6 = new Date("September 20, 2024 09:00:00").getTime();
// Add more event dates for other counters

function updateCounter(eventDate, daysId, hoursId, minutesId, secondsId) {
  const countdown = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById(daysId).innerHTML = days;
    document.getElementById(hoursId).innerHTML = hours;
    document.getElementById(minutesId).innerHTML = minutes;
    document.getElementById(secondsId).innerHTML = seconds;

    if (timeLeft < 0) {
      clearInterval(countdown);
      document.getElementById(daysId).innerHTML = "0";
      document.getElementById(hoursId).innerHTML = "0";
      document.getElementById(minutesId).innerHTML = "0";
      document.getElementById(secondsId).innerHTML = "0";
    }
  }, 1000);
}

// Initialize counters with their respective event dates and element IDs
updateCounter(eventDate1, "days1", "hours1", "minutes1", "seconds1");
updateCounter(eventDate2, "days2", "hours2", "minutes2", "seconds2");
updateCounter(eventDate3, "days3", "hours3", "minutes3", "seconds3");
updateCounter(eventDate4, "days4", "hours4", "minutes4", "seconds4");
updateCounter(eventDate5, "days5", "hours5", "minutes5", "seconds5");
updateCounter(eventDate6, "days6", "hours6", "minutes6", "seconds6");
// Add more counters with respective event dates and element IDs