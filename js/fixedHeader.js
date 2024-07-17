const HeaderWrapper = this.document.getElementById("snp-header-wrapper");

window.addEventListener("scroll", function(){
    // console.log(this.pageYOffset)

    if (this.pageYOffset >= 449) {
        HeaderWrapper.classList.add("fixed-snp-header-wrapper");
    } else {
        HeaderWrapper.classList.remove("fixed-snp-header-wrapper");
    };
});