

function  resultReport( marks ) {
        if(!Array.isArray(marks) == true){
            return "Invalid";
        }
        

        let markSheet = {
            finalScore : 0,
            pass : 0,
            fail : 0
        }
          let totalMarks = 0;
          let pass = 0;
          let fail = 0;
        for(const mark of marks){
            totalMarks = totalMarks + mark;
            
            if(mark >= 40){
              pass++;
           }
           else{
                fail++;
           } 
        }
        if(marks.length === 0){
            markSheet.finalScore = 0;
            return markSheet;
            
            // return { finalScore: 0, pass: 0, fail: 0 }
        }

     

        const Score = Number(totalMarks / marks.length);
        // Score = Number(Score);
        markSheet.finalScore = Math.round(Score);
        markSheet.pass = pass;
        markSheet.fail = fail; 

        return markSheet;
}

const finalScore = resultReport([]);
console.log(finalScore);


