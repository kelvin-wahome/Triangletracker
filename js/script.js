function triangType(){
  var a = parseInt (document.getElementById('a').value);
  var b = parseInt (document.getElementById('b').value);
  var c = parseInt (document.getElementById('c').value);
var sides=[];
sides.push (a, b, c);
var d = sides [0];
var e = sides [1];
var f = sides [2];
  if(d===e && e===f && d===f){
    alert("Equilateral Triangle");
  }

  else if( d==e || e==f || d==f ){
    alert("Isosceles");
  }
   else if ( d!==e && d!==f && e!==f){
     alert("Scalene")
   }
   else{
     alert("Not a triangle");
   }

}
