function convertFahrToCelsius(parameter) {
  if(!Number.isInteger(parseInt(parameter)) || Array.isArray(parameter)){
    return `${JSON.stringify(parameter)} is not a valid number but a/an ${Object.prototype.toString.call(parameter).slice(8, -1)}`;
     
  }else{
    return result = (parameter - 32)*(5/9).toFixed(4); 
    
  }  
};

  convertFahrToCelsius();

 


function checkYuGiOh(n){
  const arr_item = [];
  let obj; 
  if(!Number.isInteger(parseInt(n))){
    return `invalid parameter: ${JSON.stringify(n)}`;
  }else{
    for(let i=1; i<=n; i++){
      obj = "";
      if (i % 2 === 0 && i % 5 ===0) {
        obj +="yu-gi-oh"
      } else if(i % 3 ===0 && i % 5 ===0) {
          obj +="gi-oh"
      }else if(i %2  ===0 && i % 3 ===0){
          obj +="yu-gi"
      }else if(i % 2 ===0 && i % 5 ===0){
        obj +="yu-oh"
      }else if(i % 2 ===0){
        obj +="yu"
      }else if(i % 3 ===0){
        obj +="gi"
      }else if(i % 5 ===0){
        obj +="oh"

      }
      arr_item.push(obj || i);
    }
  }
  return arr_item;
}
 checkYuGiOh();


