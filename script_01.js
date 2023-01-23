
/***** Erinnerung:s *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// nested arrays [[[]]]
// nested arrays - hier [[],[]]
// arr =   [
//                  ["Ich","bin","Max"],
//                  ["Ich","bin","Moritz"]
//          ];


// output(arr);
// output(arr[0]);
// output(arr[0][2]);
// output(arr[1][0]);


// nested loop

// for (let i = 0; i < arr.length; i++) {
//         // const element = arr[i];
//         for (let j = 0; j < arr[i].length; j++) {
//         output("Index i: " + i + " Index j: " + j);
//         output(arr[i][j]);    
        
//         }
// }

/***** Objekte 1 Daten/Funktionen *******/

// let person = {
//                         firstName:"Yunaisy",
//                         familyName:"Jug",
//                         salary: [120000,160000],
//                         permission: true,
//                         sayHello:
//                                 function(){
//                                         return "Hello, ich bin " + this.firstName + "!";
//                                 }

// };

// output(person);
// output(person.firstName); // Dot-Syntax
// output(person.permission); // Dot-Syntax
// output(person.salary[1]); // Dot-Syntax

// person.familyName = "Jug";
// output(person.sayHello());

// const txt =     "Ich bin " + person.firstName + " " +
//                 person.familyName +
//                 " und verdiene " + 
//                 person.salary[1] + " p.a";

// output(txt);


/***** Objekte 2 - Hierarchie *******/

// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // Kate Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest

const baikal = {
                value:"10m",
                deep:{
                        deeper:{
                                deepest: "Das Licht - auf 1642m!"
                        }

                }



};


output(baikal);
output(baikal.value);
output(baikal.deep.deeper.deepest);

/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}