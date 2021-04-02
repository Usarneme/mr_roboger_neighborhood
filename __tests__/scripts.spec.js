const { test, expect } = require("@jest/globals");
const { describe } = require("yargs");
import { beepBoop } from "../js/beepBoop"

test('sanity check', () => {
  expect(true).toEqual(true)
})

test("It should return an error if a non-number string is input", () => {
  const val = beepBoop("howdy partner")
  expect(val).toEqual(new Error("You must submit a number. Please try again."))
})

