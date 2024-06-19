1 -
bigO is a way to mathematically figure out which of codes two is better, which one runs more efficienly.

how can i see if Code1 or code2 is better? code1 versus code2 => we see using an analysis based on time complexity + space complexity

2 -
worst scenario/worst case

We always look for the worst case
the best omega
the avarege theta
the worst is the Omicron

We always look for the worst case
3 - exemple

function logItens(n){
for(let i = 0; i <n; i++) {
console.log(i)
}
}
O(n)
4 - big o constants
Drop constants
function logItens(n){
for(let i = 0; i <n; i++) {
console.log(i)
}
for(let j = 0; j <n; j++) {
console.log()
}
n + n = 2n
o(2n);
still o(n)

DROP CONSTANTS

5 - o(n^2)
function logItems(n){
for(leti=0;i<n;i++){
for(let j=0; j<n; j++){
console.log(i,j)
}
}
}

n \* n = n^2
o(n)2
6 - Drop non-dominants - Simplify big o
o(n^2)
function logItems(n){
for(leti=0;i<n;i++){
for(let j=0; j<n; j++){
console.log(i,j)
}
}
for(let k = 0; k < n; k++){
console.log(k)
}
}

O(n^2 + n) => O(n^2)

7 - O(1)
function addItens(n){
    return n + n 
}

function addItens(n){
    return n + n + n 
}
o(2) = o(1)

THE MOST EFFICIENTE = O(1)

8 - Divide and Conquer

O(log n )


9 - Diferent terms 
function logItens(a,b){
    for(let i =0; i <a; i++){
        console.log(i)
    }
    for(let j = 0; j < b; j++){
        console.log(j)
    }
}

quando se troca o a, b por n, a gente simplifica do jeito matematico 
seria O(a + b) = O(n)

10 - Arrays
[11, 3, 23, 7]
0, 1, 2, 3
myArray.push(17)
[11, 3, 23, 7, 17]
myArray.pop()
[11, 3, 23, 7]
O(1) = Ambos são O 1

mas isso é diferente com shift
myArray.shift()
pq ele entra no inicio 

O(n) = shift e unshift

Já para .splice é o mesmo O(n)

Tier list 
S = O(1) Constant
A = O(log n) (divide and conquer)
B = O(N) ok Proportional
C = O(n^2) - Worst case LOOP WITHIN A LOOP
