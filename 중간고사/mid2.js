let array=[];
for(let i=0;i<100;i++) {
    array[i]=parseInt(Math.random()*100+1);
}
array.sort(function(a,b) {
    return b-a;
})
console.log(array)