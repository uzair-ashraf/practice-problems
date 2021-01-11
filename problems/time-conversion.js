// Given a time in -hour AM / PM format, convert it to military(24 - hour) time.

//   Note: - 12: 00: 00AM on a 12 - hour clock is 00: 00: 00 on a 24 - hour clock.
// - 12: 00: 00PM on a 12 - hour clock is 12: 00: 00 on a 24 - hour clock.

function timeConversion(s) {
  let [hours, minutes, seconds] = s.split(':')
  const period = seconds.substring(2, seconds.length)
  seconds = seconds.substring(0, 2)
  if (period === 'AM') {
    if (hours === '12') {
      hours = '00'
    }
  } else {
    hours = hours === '12' ? hours : Number(hours) + 12
  }
  return [
    hours,
    minutes,
    seconds
  ].join(':')
}
