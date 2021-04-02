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

test("It should return an error if a non-number alphanumeric string is input", () => {
  const val = beepBoop("123abc")
  expect(val).toEqual(new Error("You must submit a number. Please try again."))
})

test("It should return an array of [0] when passed input of '0'", () => {
  const val = beepBoop("0")
  expect(val).toEqual([0])
})