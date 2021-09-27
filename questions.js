//Q1
/*
function difference(a,b){
    c=a+","+b
    //console.log(c)
    c=c.split(',')
    //console.log(new Set(c))
    //console.log(c)
    let unique = c.filter((item, i, ar) =>ar.indexOf(item) === i);
    console.log(unique)
    }
let a=[1, 2, 3, 4, 5] 
let b=[1, [2], [3, [[4]]],[5,6]]
difference(a,b)
*/

//Q2 nth largest
/*
function nthlargest(arr,n){
    arr=arr.sort(function(a,b) {return b-a})
    console.log(arr[n-1])
}
let a=[43, 56, 23, 89, 88, 90, 99, 652] 
let n=4
nthlargest(a,n)
*/

//Q3 find the longest common starting substring in a set of strings
function longest_common_substring(){

}
str='google'
substr='go'
longest_common_substring()


//Q5 adding array elements index by index
let array1 = [1,0,2,3,4,13];
let array2 = [3,5,6,7,8];
b=[]
count=0
for(let i=0;i<array1.length;i++){
    for(let j=i;j<array2.length;j++){
        if(i===j){
            b.push(array1[i]+array2[j])
            count+=1
        }
    }
}
console.log(count)
if(count<array2.length && count===array1.length){
  console.log("hi")
  b.push(array2[count])
}
if(count<array1.length && count===array2.length){
  b.push(array1[count])
}