function timeConvert(runtime) {
  const hours = (runtime / 60);
  const runTimeHours = Math.floor(hours);

  const minutes = (hours - runTimeHours) * 60;
  const runTimeMinutes = Math.round(minutes);

  return `${runTimeHours}h${runTimeMinutes}`;
}

export default timeConvert;
