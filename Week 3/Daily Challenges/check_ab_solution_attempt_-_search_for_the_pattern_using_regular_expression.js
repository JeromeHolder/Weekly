const checkAb = function(str) {
    const re = /a.{3}b/;
    return re.test(str);
}

console.log(checkAb("lane borrowed" )); //true
console.log(checkAb("after badly")); //false
console.log(checkAb("Laura sobs" )); //true