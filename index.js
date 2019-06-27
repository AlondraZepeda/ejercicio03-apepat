var  converter  = require ( ' number-to-words ' ) ; 
console.log(converter.toWords ( 13 )) ; //  => “trece” 
 
//  Números decimales:
converter.towords (2.9) ; //  => “dos” 
 
//  Números negativos:
converter.toWords (- 3) ; //  => "menos tres" 
 
//  Grandes números:
converter.toWords (99254) ;
