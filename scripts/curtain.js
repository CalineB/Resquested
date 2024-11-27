document.getElementById("ouvrirRideaux").addEventListener("click", function(e) {
    e.preventDefault();
  
    document.querySelector(".contenu").style.display = "block"; 
  
    document.querySelector(".rideau.gauche").classList.add("open");
    document.querySelector(".rideau.droite").classList.add("open");
  
    setTimeout(function() {
      document.querySelector(".enterance").style.display = "none"; 
      //window.location.href = "/index.html";
    }, 3000);  
  });
  