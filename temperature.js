//define temp scale variables.
let C = 'C'
let F = 'F'
let K = 'K'

// prompt user to select temp metric which they would like to convert from.
//provide options, ie, C,K,F (research keypad commands for temp symbols)
//If user choses unavalaible option, alert user of that program can't compute.
let startMet = prompt(`In which metric is the temperature you are converting?\nC - Celsius\nF - Farenheight\nK - Kelvin`)


if (startMet == C || startMet == F || startMet == K) {
    alert (`Thanks, you have chosen to convert from ${startMet}.`)
}
else{
    alert (`${startMet} not recognised.`)
}

//prompt user for value of temperature to convert.
let tempVal = prompt(`What is the numeric value of the temperature you would like to convert?`)

if (!isNaN(tempVal)) { 
    alert (`So, that's ${tempVal}${startMet}.`)
} 
else {
    alert (`${tempVal} not recognised.`)
}

//prompt user to select which temp metric they would like to convert to.
let endMet = prompt(`To which metric would you like to convert the temperature?\nC - Celsius\nF - Farenheight\nK - Kelvin`)
if (endMet == C || endMet == F || endMet == K) { 
   alert (`Okay, let's convert ${tempVal}${startMet} into ${endMet}.`)  
}
else {
   alert (`${endMet} not recognised.`)
}

//Calculate temperature conversion formulas dependant on users choices.

//Conversions from C
if (startMet == C && endMet == F) {
   alert (`${tempVal}C is ${tempVal * 9/5 + 32}F`) //F = C x 9/5 + 32
}
if (startMet == C && endMet == K) {
    alert (`${tempVal}C is ${Number(tempVal) + 273.15}K`) //K = C + 273.15  //// unfortunately I had to add Number() to stop this resulting in 0273.15, I am unsure why.
}    

//Conversions from F // These result in long decimal points, I'd like to clean them up with Math.round() but don't have time.
if (startMet == F && endMet == C) {
    alert (`${tempVal}F is ${(tempVal - 32) * 5/9}C`) //C = (F -32) * 5/9  ////
}
if (startMet == F && endMet == K) {
    alert (`${tempVal}F is ${(tempVal + 459.67) * 5/9}K`) //K = (F + 459.67) * 5/9
}

//Conversions from K
if (startMet == K && endMet == C) {
    alert (`${tempVal}K is ${tempVal - 273.15}C`) //C = K - 273.15
}
if (startMet == K && endMet == F) {
    alert (`${tempVal}K is ${tempVal * 9/5 - 459.67}F`) //F = K * 9/5 - 459.67
}
/*program must print out conversion in task specified format.
program must be able to convert in one metric into any other metric (c - k + f, etc.)*/

/*● Celsius from:
○ Fahrenheit: C = (F -32) x 5/9 USED
○ Kelvin: C = K - 273.15 Used

● Fahrenheit from:
○ Celsius: F = C x 9/5 + 32 USED
○ Kelvin: F = k x 9/5 - 459.67 USED

● Kelvin from:
○ Celsius: K = C + 273.15 USED
○ Fahrenheit: K = (F + 459.67) x 5/9 USED
*/