// how destrcutring values in object ? also with nested object

let obj ={
    name: "obj", 
    age : 7,
    type : "ES6",
    num : 81717280556,
    address :{
        state : "uttrakhand",
        code : 262501
    },
    id :01
};
// required  to use only key name for access value as variable intill you don't change it
                               // for nested obj
let {name , age , type,  num, address :{state ,  code} ,id} =obj; 
console.log(state); // output : uttrakhand

// how change name with distructuring ??

let {name : title , age : umar ,   address:{ state : rajya , code : program}, ...remains} =obj;
console.log(title); // output : obj // name refrece as title now 
console.log(umar); //   output : 7 // age is now umar 

// using rest parameter all others value those not assinged new name store on it.
// console.log(remains); // output : { type: 'ES6', num: 81717280556, id: 1 }



// (...)spread operator and (...) rest parameter in object destructuring  =>

let obj2 ={
    name2 : "obj2",
    type1 :   "nesting",
    ...obj // spread operator

}
                                    // rest param
let {name2 : title2 ,type1 :type2 , ...remainObj} = obj2;
console.log(title2); // output :obj2
console.log(type2);  // output :nesting
console.log(remainObj); 
/*
 output for remainObj: all reamins value using spread operator
  age: 7,
  type: 'ES6',
  num: 81717280556,
  address: { state: 'uttrakhand', code: 262501 },
  id: 1
}

*/