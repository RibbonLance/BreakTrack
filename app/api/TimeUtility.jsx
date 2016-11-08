// Absolute Dependencies

 // Relative Dependencies

 // Variable Declarations

   // eslint-disable-next-line
function parseMillisecondsIntoReadableTime(milliseconds) {
 // Get hours from milliseconds
  const hours = milliseconds / (1000 * 60 * 60);
  const absoluteHours = Math.floor(hours);
  const minutes = (hours - absoluteHours) * 60;
  const absoluteMinutes = Math.floor(minutes);
  const seconds = (minutes - absoluteMinutes) * 60;
  const absoluteSeconds = Math.floor(seconds);

  const h = absoluteHours > 9
   ? absoluteHours
   : `0${absoluteHours}`;
  const m = absoluteMinutes > 9
   ? absoluteMinutes
   : `0${absoluteMinutes}`;
  const s = absoluteSeconds > 9
     ? absoluteSeconds
     : `0${absoluteSeconds}`;

  let readable;
  if (absoluteHours > 0) {
    readable = `${h}:${m}:${s}`; // TODO xD
  }

  readable = `${m}:${s}`;

  return readable;
}


export default parseMillisecondsIntoReadableTime;
