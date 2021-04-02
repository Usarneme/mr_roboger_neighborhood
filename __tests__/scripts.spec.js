const { test, expect } = require("@jest/globals");
const { describe } = require("yargs");

test('sanity check', () => {
  expect(true).toEqual(true)
})
// test("It should return an error if a non-number string is input", () => {
//   expect(beepBoop("howdy partner")).toBe("Error(\"You must submit a number. Please try again.\")")
// })

// describe('beepBoop func', () => {
//   test('sanity 2', () => {
//     expect(true).toEqual(true)
//   })
// })

describe('outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');
    test('test 1', () => {
      console.log('test for describe inner 1');
      expect(true).toEqual(true);
    });
  });

  console.log('describe outer-b');

  test('test 1', () => {
    console.log('test for describe outer');
    expect(true).toEqual(true);
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2');
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2');
      expect(false).toEqual(false);
    });
  });

  console.log('describe outer-c');
});