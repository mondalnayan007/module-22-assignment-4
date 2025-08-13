




function totalFine( fare ) {
          

    const totalFine = fare + (fare * 20/100) + 30 ;
    if(typeof(fare) === "string" || fare <= 0){
        return "Invalid";
    }
    else{
        return totalFine;
    }

    
}

const Fine =  totalFine(0)

console.log(Fine);