// function addPrefix(prefix){
//   return function yourName(name){
//     return `${prefix} ${name}`;
//   }
// }

// const prefixSir = addPrefix("Sir");

// console.log(prefixSir("Kate"));


// function soundMaker(sound) {
//   return function animalType(animal){
//     return `${animal} sound : ${sound}`
//   }
// }

// const animalNoise = soundMaker("roar");
// console.log(animalNoise("lion"));

// function nameEnhancer(x){
//   return function blah(y){
//     return `${x} ${y}`
//   }
// }

// const misterJunior = nameEnhancer("Mister")("Junior");
// const duchessThird = nameEnhancer("Duchess")("The Third");
// console.log(misterJunior);
// console.log(duchessThird);

// function addMult(x) {
//   return function multiply(y){
//     return x * y ;
//   }
// }


// const addTwoMultiplyByThree = addMult(2)(3);
// const addFiveMultiplyByNine = addMult(5)(9);
// console.log(addTwoMultiplyByThree);
// console.log(addFiveMultiplyByNine);

function reverseSentence(sentence, reversedSentence = []){
	if (sentence === ""){
		return reversedSentence.join(" ");
	}
	else{
		const originalArray = sentence.split(" ");
		reversedSentence.push(originalArray.pop());
		return reverseSentence(originalArray.join(" "), reversedSentence);
	}
} 
console.log(reverseSentence("I am a cat"));
