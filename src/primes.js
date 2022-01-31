export default function primes(number, array = [...Array(number).keys()]){
  function isPrime(num, div = 3){
    if(num === 2) return true;
    if(num < 2 || num % 2 === 0)  return false;
    if(div * div > num) return true;
    if(num % div === 0) return false;
    return isPrime(num, div + 2);
  }
  return array.filter( e => isPrime(e));
}


