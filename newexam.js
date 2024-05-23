let n=prompt("enter the number");
for(let i=1;i<=n;i++){
    for(let j=i;j>n;j++){
        document.write("&nbsp&nbsp")
    }
    for(j=1;j<=i;j++){
        document.write("*")
    }
    document.write("<br>")
}
for(let i=n;i>0;i--){
    for(let j=i;j>n;j++){
        document.write("&nbsp&nbsp")
    }
    for(j=1;j<=i;j++){
        document.write("*")
    }
    document.write("<br>")
}

