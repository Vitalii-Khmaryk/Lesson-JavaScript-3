let b=1;
let a= +prompt('введіть число для обчислення факторіала');
for(let i=a;i>0;i--){b*=i;} console.log(`task1=${b}`);


for(let a=1000; a<=9999; a+=3){console.log(`task2=${a}`);}

for(let i=1; i<=55; i+=2){console.log(`task3=${i}`);}

for(let i=90; i>=0; i-=5){console.log(`task4=${i}`);}

for(let i=1 , c=2; i<=20;i++, c*=2){console.log(`task5=${c}`);}

for(let a=2; a<10000; a=2*a-1){console.log(`task6=${a}`);}

for(let a=-166; a<=99; a=2*a+200){console.log(`task7=${a}`);}


let a1 = +prompt('Введіть число');
let b1 = prompt('Степінь');
let result=1;
if (b1>0) {   
for ( let i=1; i<=b1; i++){
    result*=a1;   }
    console.log(`task8=${result}`);
}
else if (b1<0){
    result=(a1**b1);
    console.log(`task8=${result}`);
}
else if (b1==0){
    result=(a1**0);
    console.log(`task8=${result}`);
}








