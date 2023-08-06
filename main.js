//1.sort array
function sort() {
    let arr = [6,5,8,4,8,0,1]
    console.log(arr.sort());
}
sort();
// "mango","orange","apple","banana"

//2.add element to array without push and unshift

var hello=[2,3,4]
var newarr=1;
var narr=[newarr,...hello];
var newelement=5;
var n=narr.concat(newelement);
console.log(n);

//3.find names in array

var names=["siva","kumar","chandran","vel","raja"];
// var source=names.indexOf("chandran",2);
console.log(names[2]);

//4.filter an array greater than 10

var gre=[10,12,20,36,76];
var ngre=gre.filter(element =>element >10);
console.log(ngre);

//5.check the find index less then 20
let fil=[30,41,20,22,21,15] 
let res=fil.findIndex(element =>element < 20);
console.log(res);