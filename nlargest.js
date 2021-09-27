/*
function nthlargest(arr,n){
    arr=arr.sort(function(a,b) {return b-a})
    console.log(arr[n-1])
}
let a=[43, 56, 23, 89, 88, 90, 99, 652] 
let n=4
nthlargest(a,n)
*/
arr=[2,4,1,3,6]
n=2
for(var i=0;i<n;i++){
    max=i
    tmp=arr[i]
    for(var j=i+1;j<arr.length;j++){
        if(arr[j]>arr[i]){
            max=j
        }
    }
    arr[i]=arr[max]
    arr[max]=tmp
}
console.log(arr[max])
console.log(arr)
