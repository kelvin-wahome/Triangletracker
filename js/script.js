function triangleType(){
  var length1 = parseInt (document.getElementById('length1').value);
  var length2 = parseInt (document.getElementById('length2').value);
  var length3 = parseInt (document.getElementById('length3').value);
  var result = document.getElementById('result')

  if(length1===length2 && length2===length3){
    alert('This is an Equilateral triangle')

  }
   else if(lenth1!== length2 && length2=== length3){
     alert("This is an Isosceles triangle")
   }

   else if (length1!==length2 && length2!==length3 && length1!==length3){
     alert("This is a Scalene triangle")

   }

}
