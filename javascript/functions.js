function navbarIcon(){
    var x = document.getElementById("navbar");
    if (x.className === "nav-menu"){
        x.className += " responsive";
    }else{
        x.className = "nav-menu";
    }
}

var paragraphsVisible = true;

function toggleParagraphs(event) {
    var clickedElement = event.target;

    if (clickedElement.tagName === 'H1') {
        var parentDiv = clickedElement.closest('div');
        var paragraphs = parentDiv.getElementsByClassName('collapsable');

        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.display = paragraphsVisible ? 'none' : 'block';
        }

        paragraphsVisible = !paragraphsVisible; 
    }
}

function toggleParagraph(clickedHeading) {
    var paragraph = clickedHeading.nextElementSibling;

    if (paragraph.style.display === 'block') {
        paragraph.style.display = 'none';
    } else {
        paragraph.style.display = 'block';
    }
}