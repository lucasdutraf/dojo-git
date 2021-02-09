function getNthFib(n) {

   for(let fibCounter = 3; fibCounter <= n; fibCounter++)
     lastTwo = [lastTwo[1], lastTwo[0] + lastTwo[1]];

   return n == 1 ? lastTwo[0] : lastTwo[1];
}
