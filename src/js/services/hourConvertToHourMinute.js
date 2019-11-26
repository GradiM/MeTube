// Cette fonction convertit les minutes (passées en paramètre) en heures + minutes
const hourConvertToHourMinute = (runtime) => {
  const hours = (runtime / 60);
  const runTimeHours = Math.floor(hours);

  const minutes = (hours - runTimeHours) * 60;
  const runTimeMinutes = Math.round(minutes);

  if (runTimeHours === 0) {
    return `${runTimeMinutes}min`;
  } if (runTimeMinutes === 0) {
    return `${runTimeHours}h`;
  }
  return `${runTimeHours}h${runTimeMinutes}`;
};

export default hourConvertToHourMinute;
