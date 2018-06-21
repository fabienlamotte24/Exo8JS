function number(){
  var age = document.getElementById("age").value;
  var regex = /^[\d]{1,3}$/;
  if(regex.test(age) == true){
      if(age>=18){
        alert("Vous êtes majeur");
      }else{
        alert("Vous êtes mineur");
      }
  }else{
    alert("Vous n'avez le droit qu'à la saisie de chiffre!");
  }
}
