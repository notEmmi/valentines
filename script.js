function revealMessage() {
    document.getElementsByClassName("letter")[0].style.display = "block";
    document.getElementsByClassName("envelope")[0].style.display = "none";
}

let no_count = 0;

function nay() {
    if (no_count == 0) {
        document.getElementsByClassName("nothing-yet")[0].style.display = "none";
        document.getElementsByClassName("on-no-1")[0].style.display = "block";
    }
    else if (no_count == 1) {
        document.getElementsByClassName("on-no-1")[0].style.display = "none";
        document.getElementsByClassName("on-no-2")[0].style.display = "block";
    }
    else if (no_count == 2) {
        document.getElementsByClassName("on-no-2")[0].style.display = "none";
        document.getElementsByClassName("on-no-3")[0].style.display = "block";
        document.getElementsByClassName("no-button")[0].style.display = "none";
    }

    no_count++;
}

function yay() {
    document.getElementsByClassName("letter")[0].style.display = "none";
    
    /* pop gif for 1 second */
    document.getElementsByClassName("cat-jiggy")[0].style.display = "block";
    setTimeout(function() {
        document.getElementsByClassName("cat-jiggy")[0].style.display = "none";
        document.getElementsByClassName("the-date")[0].style.display = "block";
    }, 1000);
}
