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
  let html = `<div class="container"><div class="row text-center justify-content-center"><h2 data-toggle="tooltip" data-placement="top" title="Specification Asks For Results From 0 Up To And Including The Number Entered So There Will Always Be One More Beep Boop Phrase Than The Number Entered.">${resultsArray.length} Beep Boops!</h2></div><div class="row justify-content-center text-center results-container">`
  resultsArray.forEach(function(element, index) {
    html += `<div class="col-12 btn-outline-info result-individual">${element}</div>`
  })
  html += "</div></div>"
  return html
}

function enableTooltips() {
  $('[data-toggle="tooltip"]').tooltip()
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
      enableTooltips()
    }
  })

  $("#resetButton").click(resetApplication)
})