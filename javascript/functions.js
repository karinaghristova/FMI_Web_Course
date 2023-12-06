function navbarIcon(){
    var x = document.getElementById("navbar");
    if (x.className === "nav-menu"){
        x.className += " responsive";
    }else{
        x.className = "nav-menu";
    }
}