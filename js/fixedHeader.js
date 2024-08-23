const HeaderWrapper = this.document.getElementById("header-wrapper");

window.addEventListener("scroll", function(){
    // console.log(this.pageYOffset)

    if (this.pageYOffset >= 449) {
        HeaderWrapper.classList.add("fixed-header-wrapper");
    } else {
        HeaderWrapper.classList.remove("fixed-header-wrapper");
    };
});