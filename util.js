var bread = true

function bread_click() {
    if (bread == true) {
        document.pic.style = "-webkit-filter:grayscale(100%);filter:grayscale(100%)"
        bread = false
    }
    else {
        document.pic.style = ""
        bread = true
    }
}