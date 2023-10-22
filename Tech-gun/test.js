/*
+ * *
+ + *
+  + +

*/


function printPattern(n) {

   for(let  i=0; i<n ; i++){
    let str  =""
    for(let j = 0; j<n; j++){

        if(i>=j){
         str += " + "
        }else{
           str += " * " 
        }
    }
    console.log(str);
   }
}
  
printPattern(5);