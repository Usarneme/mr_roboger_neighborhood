import { beepBoop } from './beepBoop.js'

function resetApplication() {
  $(".results").text("").hide()
  $("form").trigger("reset")
}

function generateSuccessHtml(resultsArray) {
  let html = `<div class="container"><div class="row text-center justify-content-center"><h2 data-toggle="tooltip" data-placement="top" title="Specification Asks For Results From 0 Up To And Including The Number Entered So There Will Always Be One More Beep Boop Phrase Than The Number Entered." tabindex="0">${resultsArray.length} Beep Boops!</h2></div><div class="row justify-content-center text-center results-container">`
  resultsArray.forEach(function(element, index) {
    html += `<div class="col-12 btn-outline-info result-individual">${element}</div>`
  })
  html += "</div></div>"
  return html
}

function enableTooltips() {
  $('[data-toggle="tooltip"]').tooltip()
}

function playSound(id) {
  document.getElementById(id).play()
}

function resetSounds() {
  document.getElementById("beep").pause()
  document.getElementById("beep").currentTime = 0
  document.getElementById("boop").pause()
  document.getElementById("boop").currentTime = 0
  document.getElementById("neighbor").pause()
  document.getElementById("neighbor").currentTime = 0
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault()
    const userInput = $("#numberInput").val().toString()
    const result = beepBoop(userInput)
    resetSounds()
    const lastResult = result[result.length - 1]
    if (lastResult === "Beep!") playSound("beep")
    if (lastResult === "Boop!") playSound("boop")
    if (lastResult === "Won't you be my neighbor?") playSound("neighbor")

    if (result instanceof Error) {
      const errorHtml = `<div class="alert alert-danger" role="alert">${result}</div>`
      $(".results").html(errorHtml).show()
    } else {
      resetApplication()
      $(".results").html(generateSuccessHtml(result)).show()
      enableTooltips()
    }
  })

  $("#resetButton").click(resetApplication)
})

