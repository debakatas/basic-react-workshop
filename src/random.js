/*
    Small function to generate a random number
    between a given range (Integers)
*/
const randomInRange = (min = 0, max = 10) =>
    Math.floor(Math.random() * (max - min + 1) + min);

export default randomInRange;
