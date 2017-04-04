function processData(input) {
    //Enter your code here
    var all = input.split('\n');
    var n = parseInt(all[0]);
    
    var Persons = function (input, num) {
        var persons = [];
        var input = input;
        var num = num;
        var fn = {};

        fn.run = function () {
            fn.llenarPersons();
            fn.imprimirPerson();
        }
        fn.llenarPersons = function () {
            var datos = input.slice(1,num+1);
            datos.forEach( fn.parsearPerson );
        }
        fn.parsearPerson = function (p) {
            var person = p.split(' ');
            persons.push({name:person[0], phone:person[1]});
        }
        fn.imprimirPerson = function () {
            var datos = input.splice(num+1, 2*num+1);
            datos.forEach( fn.compararPerson );
        }
        fn.compararPerson = function (name) {
            var persons_length = persons.length;
            for (var i = 0; i < persons_length; i++) {
                if ( name === persons[i].name ) {
                    console.log(persons[i].name + '=' + persons[i].phone);
                    break;
                } else if ( i === (persons_length-1) ){
                    console.log("Not found");
                    break;
                }
            }               
        }

        return fn;    
    }

    var P = new Persons(all, n);
    P.run();
} 

var loadJSON = function(url, callback){
    var file = new XMLHttpRequest();
    //file.overrideMimeType("application/text");
    file.open("GET", url, true);
    file.onreadystatechange = function(responseText){
        if(file.readyState == 4 && file.status == "200"){
            var content = JSON.parse(file.responseText);
            callback.call(this, content);
        }
    };
    file.send();
};

var url = 'Download Test Case #2 of Day 8: Dictionaries and Maps.txt';
loadJSON(url, function (data) {
    console.log(data);
})
var reader = new FileReader();
var input = "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry";
processData(input);