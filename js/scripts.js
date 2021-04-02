function beepBoop(number) {
  // Confirm the number is a number and not alphanum or something else
  if (Number.isNaN(Number(number)) && number !== "0") return new Error("You must submit a number. Please try again.")
  if (number === "0") return [0]
  const outputArray = [0]

  for (let index = 1; index <= Number(number); index += 1) {
    const numbers = (""+index).split("")
    if (index === 3 || numbers.includes("3")) {
      outputArray.push("Won't your be my neighbor?")
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

function resetApplication() {
  $(".results").text("").hide()
  $("form").trigger("reset")
}

function generateSuccessHtml(resultsArray) {
  let html = `<div class="container justify-content-center text-center m-2 p-2"><ul>`
  resultsArray.forEach(function(element, index) {
    html += `<li class="justify-content-center">${element}</li>`
  })
  html += "</ul></div>"
  console.log(html)
  return html
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault()
    const userInput = $("#numberInput").val().toString()
    const result = beepBoop(userInput)
    if (result instanceof Error) {
      const errorHtml = `
        <div class="alert alert-danger" role="alert">
          ${result}
        </div>`
      $(".results").html(errorHtml).show()
    } else {
      resetApplication()
      $(".results").html(generateSuccessHtml(result)).show()
    }
  })

  $("#resetButton").click(resetApplication)
})