
var tot = 0;
for (var i=2; i< process.argv.length;i++) {
    //console.log("i   =" + i);
    //console.log("tot =" + tot);
    tot += Number(process.argv[i]);
}

console.log(tot);