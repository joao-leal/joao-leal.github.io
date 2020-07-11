function DropDownMenu() {
    
    var el = document.getElementById("dropdown_click");
    if (el.className === "nav") {
        el.className += " responsive";
    }
    else {
        el.className = "nav";
    }
    /*change nav to nav.responsive*/
}