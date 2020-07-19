function validations()
 {
  var fn = document.getElementById('fn');
  var ln = document.getElementById('ln');
if (fn.value.trim()=="")
{
  document.getElementById('lb1').style="color:red; visibility:visible;";
  return false;
}
else if (ln.value.trim()=="")
{
  document.getElementById('lb2').style="color:red; visibility:visible;";
  return false;
}
else if (fn.value == ln.value)
{
alert("firstname and lastname should not be same.....") ;
return false;
}
else
{
return true;
}
}
