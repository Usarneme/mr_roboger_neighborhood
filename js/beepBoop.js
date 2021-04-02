function beepBoop(number) {
  // Confirm the number is a number and not alphanum or something else
  if (Number.isNaN(Number(number)) && number !== "0") return new Error("You must submit a number. Please try again.")
  const outputArray = [0]
  if (number === "0") return outputArray

  for (let index = 1; index <= Number(number); index += 1) {
    const numbers = (""+index).split("")
    if (index === 3 || numbers.includes("3")) {
      outputArray.push("Won't you be my neighbor?")
      continue
    }
    if (index === 2 || numbers.includes("2")) {
      outputArray.push("Boop!")
      continue
    }
    if (index === 1 || numbers.includes("1")) {
      outputArray.push("Beep!")
      continue
    }
    outputArray.push(index)
  }
  return outputArray
}

export { beepBoop }