function beepBoop(number) {
  // Confirm the number is a number and not alphanum or something else
  if (Number.isNaN(Number(number)) && number !== "0") return new Error("You must submit a number. Please try again.")
  if (number === "0") return [0]
  const outputArray = [0]

  for (let index = 1; index <= Number(number); index += 1) {
    console.log("looping",number,index)
    const numberArray = number.split("")
    console.log("numberArray",numberArray)
    if (index === 1 || numberArray.includes("1")) {
      outputArray.push("Beep!")
      continue
    }
    outputArray.push(index)
  }
  console.log(outputArray)
  return outputArray
}
