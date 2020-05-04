function sum(array) {
    let sum=0;
    for(let i=0;i<array.length;i++) {
        sum+=array[i]
    }
    return sum;
}
function test_sum(callback) {
    let array=[]
    for(let i=0;i<5;i++) {
        array[i]=parseInt(Math.random()*11)
    }
    console.log(array)
    console.log(callback(array))
}
for(let i=0;i<5;i++) {
    test_sum(sum)
}
