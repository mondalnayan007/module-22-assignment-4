


function  onlyCharacter( str ) {
          

          if(typeof(str) != "string"){
            return "Invalid";
          }
         newStr = str.split(" ").join("");
            return newStr.toUpperCase();
         
}

const str = onlyCharacter(true);
console.log(str);