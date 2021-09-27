let array1 = [1,0,2,3,4,13,12,11];
let array2 = [3,5,6,7,8,13,13,'13',13,13,13];
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
    for(let i=count;i<array2.length;i++){
  console.log("hi")
  b.push(array2[i])
    }
}
if(count<array1.length && count===array2.length){
    for(let i=count;i<array1.length;i++){

  b.push(array1[i])
    }
}
console.log(b)