
export function suma(x, y) {
  if (isNaN(x) || isNaN(y)) {
    return NaN;
  } 
  return x + y;
 // return parseFloat(x) + parseFloat(y);
}


export function validadorDeTokens(token) {
  //El token tiene que tener mínimo 20 caracteres
  if (token.length < 20) return false;
  //El token no puede tener ningún número
  for (let i=0; i<token.length; i++)
    if (["0","1","2","3","4","5","6","7","8","9"].indexOf(token.charAt(i)) !== -1 ) {
    return false;
    }
    
  // Token validado
  return true
}

 export function creaArrayDe3(a,b,c) {
  return [a,b,c];
}

 