

function  isSame(arr1 , arr2 ) {
    

         if(!Array.isArray(arr1)  || !Array.isArray(arr2)){
            return "Invalid";
         }
          if(arr1.length != arr2.length ){
            return false;
          }
           for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
              return false;
          }
    }
    return true;
}

const same = isSame( [1 , 4 , 5], [1 , 4 , 5]);
console.log(same);
