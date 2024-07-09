
(function(){
    "use strict";
    let bla="bla bla bla";
    console.log(bla);
    /*
      Der Inhalt dieses Skripts gelangt
      nicht in den Global Scope.
    */
  })();          
  
  // Als Arrow Function
  (()=>{
    "use strict";
    let bla="bla bla bla";
  })();
  
  // global scope
var strA = "Hallo";

function doThis() {
  // function scope
  var strB = "Tschüss";
  // global scope
  strC = "Howdy";
}

console.log(strA); // "Hallo"
doThis();
console.log(strB); // ReferenceError: strB is not defined
console.log(strC); // "Howdy"

function dropThat() {
  "use strict";
  strD = "Was läuft?"; // Fehler bei Aufruf der Funktion!
}

dropThat(); // ReferenceError: assignment to undeclared variable strD          
          