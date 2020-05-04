let array=[];
let result=0;
for(let i=0;i<100;i++) {
    array[i]=parseInt(Math.random()*100+1);
    result+=array[i];
}
console.log((result/100).toFixed(1))