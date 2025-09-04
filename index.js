const NUMBERS = {
  0: "twelve",
  1: "one", 
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven", 
  12: "twelve",   
  13: "thirteen", 
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",   
  40: "forty",   
  50: "fifty"
}

function getMinWord(minute) {
  if (minute === 15) return "quarter"
  if (minute === 30) return "half"

  if (minute <= 20) {
    return NUMBERS[minute]
  } else {
    const tens = Math.floor(minute / 10) * 10
    const ones = minute - tens

    if (ones === 0) return NUMBERS[tens]
    return `${NUMBERS[tens]} ${NUMBERS[ones]}`
  }
}

function convertTimeToWords(time) {
  const [hourStr, minStr] = time.split(":")
  const hour = parseInt(hourStr, 10)
  const min = parseInt(minStr, 10)

  const nextHour = hour % 12 + 1

  if (hour === 0 && min === 0) return "midnight"
  if (hour === 12 && min === 0) return "midday"

  if (min === 0) return `${NUMBERS[hour]} o'clock`

  if (min <= 30) {
    const minWord = getMinWord(min)
    return `${minWord} past ${NUMBERS[hour]}`
  } else {
    const minWord = getMinWord(60 - min)
    return `${minWord} to ${NUMBERS[nextHour]}`
  }
}

module.exports = { convertTimeToWords }
