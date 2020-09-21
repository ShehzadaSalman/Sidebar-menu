function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    var element = document.getElementById("black-overlay-id");
    element.classList.add("is-visible");
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var element = document.getElementById("black-overlay-id");
    element.classList.remove("is-visible");
  }
  
  
  
  
  
  // on click function for opening the sub menu
  function subMenu(param){
  let submenucontent = param.nextElementSibling;
  submenucontent.classList.toggle("submenu-visiblity");
  console.log("the click is working");
  }
  