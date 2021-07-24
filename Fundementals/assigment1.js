//1
var hello ; 
console.log(hello);
hello = 'world';


//2
var needle;
test();
function test(){
    var needle ;
    console.log(needle);
    needle = 'magnet';
}
needle = 'haystack';


// 3
var brendan ;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);



// 4
var food ;
console.log(food);
food  = 'chicken';
eat();
function eat(){
    var food ;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}


//5
mean();
console.log(food);
var mean = function() {
    var food ;
    food = "chicken";
    console.log(food);
    console.log(food);
    food = "fish";
}
console.log(food);


//6
console.log(genre);
var genre ;
rewind();
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    console.log(genre);
    gener = "r&b";
}
gener= "disco";
console.log(genre);

//7

var dojo; 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo ;
    dojo = "seattle";
    console.log(dojo);
    console.log(dojo);
    dojo = "burbank";
}
console.log(dojo);

//8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo ;
    dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}