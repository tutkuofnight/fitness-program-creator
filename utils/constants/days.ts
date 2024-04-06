export const daylist = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

export default daylist.map(day => ({ selected: false, name: day }))