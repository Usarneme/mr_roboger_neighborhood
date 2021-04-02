const { test, expect } = require("@jest/globals");
const { describe } = require("yargs");
import { beep } from "sisteransi";
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

test("It should return [0,Beep!] if '1' is input", () => {
  const val = beepBoop("1")
  expect(val).toEqual([0,"Beep!"])
})

test("It should return [0,Beep!,Boop!] if 2 is input", () => {
  const val = beepBoop("2")
  expect(val).toEqual([0,"Beep!","Boop!"])
})

test("It should return [0,Beep!,Boop!,Won't you be my neighbor?] if 3 is input", () => {
  const val = beepBoop("3")
  expect(val).toEqual([0,"Beep!","Boop!","Won't you be my neighbor?"])
})

test("It should return [0,Beep!,Boop!,Won't you be my neighbor?,4] if 4 is input", () => {
  const val = beepBoop("4")
  expect(val).toEqual([0,"Beep!","Boop!","Won't you be my neighbor?",4])
})

test("It should return [0,Beep!,Boop!,Won't you be my neighbor?,4,5] if 5 is input", () => {
  const val = beepBoop("5")
  expect(val).toEqual([0,"Beep!","Boop!","Won't you be my neighbor?",4,5])
})

test("It should return [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9] if 9 is input", () => {
  const val = beepBoop("9")
  expect(val).toEqual([0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9])
})

test("It should return [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!] if 10 is input", () => {
  const val = beepBoop("10")
  expect(val).toEqual([0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,"Beep!"])
})

test("It should return [0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?,Beep!,Beep!,Beep!,Beep!,Beep!,Beep!,Boop!] if 20 is input", () => {
  const val = beepBoop("20")
  expect(val).toEqual([0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,"Beep!","Beep!","Boop!","Won't you be my neighbor?","Beep!","Beep!","Beep!","Beep!","Beep!","Beep!","Boop!"])
})

test("It should return correct output if 32 is input", () => {
  const val = beepBoop("32")
  expect(val).toEqual([0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,"Beep!","Beep!","Boop!","Won't you be my neighbor?","Beep!","Beep!","Beep!","Beep!","Beep!","Beep!","Boop!","Boop!","Boop!","Won't you be my neighbor?","Boop!","Boop!","Boop!","Boop!","Boop!","Boop!","Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?"])
})

test("It should return correct output if 53 is input", () => {
  const val = beepBoop("53")
  expect(val).toEqual([0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,"Beep!","Beep!","Boop!","Won't you be my neighbor?","Beep!","Beep!","Beep!","Beep!","Beep!","Beep!","Boop!","Boop!","Boop!","Won't you be my neighbor?","Boop!","Boop!","Boop!","Boop!","Boop!","Boop!","Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?",40,"Beep!","Boop!","Won't you be my neighbor?",44,45,46,47,48,49,50,"Beep!","Boop!","Won't you be my neighbor?"])
})

