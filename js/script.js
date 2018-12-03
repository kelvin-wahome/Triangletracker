function triangleType(){
  var a = parseInt (document.getElementById('length1').value);
  var b = parseInt (document.getElementById('length2').value);
  var c = parseInt (document.getElementById('length3').value);
  var result = document.getElementById('result')

  if(length1===length2 && length2===length3){
    document.getElementById('This is an Equilateral triangle')

  }
   else if(lenth1!== length2 && length2=== length3){
     document.getElementById("This is an Isosceles triangle")
   }

   else if (length1!==length2 && length2!==length3 && length1!==length3){
     document.getElementById("This is a Scalene triangle")

   }

}
