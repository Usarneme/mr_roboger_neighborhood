# Mr. Roboger's Neighborhood
## By Usarneme/Tom

---

### Project Description

This project is a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number (ala FizzBuzz) with the following exceptions:

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

* The number 13 should be replaced with "Won't you be my neighbor?"
* The number 21 should be replaced with "Boop".
* The number 32 should be replaced with "Won't you be my neighbor?"

A user should be able to enter a new number and see new results over and over again.

> Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5
---
### Tech Stack
1. HTML5+CSS3
2. JavaScript/ES6+
3. jQuery
4. Bootstrap
---

### Project Build Available At: 

[https://usarneme.github.io/mr_roboger_neighborhood](https://usarneme.github.io/mr_roboger_neighborhood)

---
### Installation Instructions
1. Clone this repo: 

```sh
git clone https://github.com/Usarneme/mr_roboger_neighborhood
```

2. Enter new directory 
```sh
cd mr_roboger_neighborhood
```
3. Begin a web server in order to interact with and view index.html. For example:
  * If you have python, you can use: `python2 -m SimpleHTTPServer 8080` in the project root directory
  * Or you can use [VScode LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  * Or whatever server you know how to run/prefer to use
4. Open your browser and navigate to the webserver location (for example: localhost:8080)
---
### Known Issues:
1. None known.
2. Please open a pull request if you have any issues!
---
### Test Suite/Specification

> See also [the Jest Test File](https://github.com/Usarneme/mr_roboger_neighborhood/blob/main/__tests__/scripts.spec.js) for Jest Test Suite which includes 14 passing tests. View Test Results from Project Directory by Running `yarn run test` or if you prefer npm `npm run test`

```
Describe: beepBoop()


Test: "It should return an error if a non-number string is input"
Code: beepBoop("howdy partner")
Expected Output: Error("You must submit a number. Please try again.")

Test: "It should return an error if a non-number alphanumeric string is input"
Code: beepBoop("123abc")
Expected Output: Error("You must submit a number. Please try again.")

Test: "It should return [0] array if "0" string is input"
Code: beepBoop("0")
Expected Output: [0]

Test: "It should return [0,Beep] if "1" is input"
Code: beepBoop("1")
Expected Output: [0,"Beep"]

Test: "It should return [0,Beep,Boop] if "2" is input"
Code: beepBoop("2")
Expected Output: [0,"Beep","Boop"]

Test: "It should return [0,Beep,Boop,Won't you be my neighbor] if "3" is input"
Code: beepBoop("1")
Expected Output: [0,"Beep","Boop","Won't you be my neighbor?"]

Test: "It should return [0,Beep,Boop,Won't you be my neighbor,4,5] if "5" is input"
Code: beepBoop("1")
Expected Output: [ 0, 'Beep!', 'Boop!', "Won't your be my neighbor?", 4, 5 ]

Test: "It should return [ 0, 'Beep!', 'Boop!', "Won't your be my neighbor?", 4, 5, 6, 7, 8, 9 ] if "9" is input"
Code: beepBoop("9")
Expected Output: [ 0, 'Beep!', 'Boop!', "Won't your be my neighbor?", 4, 5, 6, 7, 8, 9 ]

Test: "It should return [0,'Beep!','Boop!',"Won't your be my neighbor?",4,5,6,7,8,9,'Beep!'] if "10" is input"
Code: beepBoop("10")
Expected Output: [0,'Beep!','Boop!',"Won't your be my neighbor?",4,5,6,7,8,9,'Beep!']

Test: "It should return [0,'Beep!','Boop!',"Won't your be my neighbor?",4,5,6,7,8,9,'Beep!','Beep!','Boop!',"Won't your be my neighbor?",'Beep!','Beep!','Beep!','Beep!','Beep!','Beep!','Boop!'] if "20" is input"
Code: beepBoop("20")
Expected Output: [0,'Beep!','Boop!',"Won't your be my neighbor?",4,5,6,7,8,9,'Beep!','Beep!','Boop!',"Won't your be my neighbor?",'Beep!','Beep!','Beep!','Beep!','Beep!','Beep!','Boop!']

Test: "It should return [0,'Beep!','Boop!',"Won't your be my neighbor?",4,5,6,7,8,9,'Beep!','Beep!','Boop!',"Won't your be my neighbor?",'Beep!','Beep!','Beep!','Beep!','Beep!','Beep!','Boop!','Boop!','Boop!',"Won't your be my neighbor?",'Boop!','Boop!','Boop!','Boop!','Boop!','Boop!',"Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?"] when "32" is input"
Code: beepBoop("32")
Expected Output: [0,'Beep!','Boop!',"Won't your be my neighbor?",4,5,6,7,8,9,'Beep!','Beep!','Boop!',"Won't your be my neighbor?",'Beep!','Beep!','Beep!','Beep!','Beep!','Beep!','Boop!','Boop!','Boop!',"Won't your be my neighbor?",'Boop!','Boop!','Boop!','Boop!','Boop!','Boop!',"Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?"]

Test: "It should return [0,'Beep!','Boop!',"Won't your be my neighbor?",4,5,6,7,8,9,'Beep!','Beep!','Boop!',"Won't your be my neighbor?",'Beep!','Beep!','Beep!','Beep!','Beep!','Beep!','Boop!','Boop!','Boop!',"Won't your be my neighbor?",'Boop!','Boop!','Boop!','Boop!','Boop!','Boop!',"Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?",40,'Beep!','Boop!',"Won't your be my neighbor?",44,45,46,47,48,49,50,'Beep!','Boop!',"Won't your be my neighbor?"] when "53" is input."
Code: beepBoop("53")
Expected Output: [0,'Beep!','Boop!',"Won't your be my neighbor?",4,5,6,7,8,9,'Beep!','Beep!','Boop!',"Won't your be my neighbor?",'Beep!','Beep!','Beep!','Beep!','Beep!','Beep!','Boop!','Boop!','Boop!',"Won't your be my neighbor?",'Boop!','Boop!','Boop!','Boop!','Boop!','Boop!',"Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?","Won't your be my neighbor?",40,'Beep!','Boop!',"Won't your be my neighbor?",44,45,46,47,48,49,50,'Beep!','Boop!',"Won't your be my neighbor?"]

```
---
### License is GPLv3 and I make no claim to copyright. 
<br />

> You can't steal what is freely given. Enjoy!

<br />
<br />
<br />
<br />
<p align="center">
  <small>Made with ❤️ in Portland, Oregon. </small>
</p>