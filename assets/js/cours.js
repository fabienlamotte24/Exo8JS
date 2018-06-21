function number(){
  var age = document.getElementById("age").value;
  var regex = /^[\d]{2}$/;
  if(regex.test(age) == true){
      if(age>=18){
        alert("Vous êtes majeur");
      }else{
        alert("Vous êtes mineur");
      }
  }else{
    alert("Insérez un nombre à deux chiffres pour indiquer votre âge !");
  }
}
