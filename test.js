let n=5;
for(i=1;i<=n;i++){
  for( let j=i;j<=n-i;j++){
    console.log(' ');
  }  
  for(let k=0;k<2*i-1;k++){
    if (i===1 || i===n) {
       console.log('*');

    } else {
        if (k===0 || k===2*i-2) {
            console.log('*');
        } else {
            console.log(' ');
        }
    }
  }
}