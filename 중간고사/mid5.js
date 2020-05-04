let array=[];
let result=0;
for(let i=0;i<100;i++) {
    array[i]=parseInt(Math.random()*100+1);
}
array.map((a)=>{
    if(a%2==0) {
        result+=a;
    }
})
console.log(result)