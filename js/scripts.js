function beepBoop(number) {
  // Confirm the number is a number and not alphanum or something else
  const integer = Number(number)
  if (!Number.isNaN(integer)) return new Error("You must submit a number. Please try again.")
  if (integer === 0) return [0]

  const outputArray = []
  for (let index = 0; index < integer; index += 1) {
    outputArray.push(index)
  }
}