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
