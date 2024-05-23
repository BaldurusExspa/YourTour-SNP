window.addEventListener("scroll", function(){
    // console.log(this.pageYOffset)

    const headerWrapper = document.getElementById("snp-header-wrapper");
    const header = this.document.getElementById("snp-header");

    if (this.pageYOffset >= 449) {
        headerWrapper.classList.add("fixed-snp-header-wrapper");
        header.classList.add("fixed-snp-header");
    } else {
        headerWrapper.classList.remove("fixed-snp-header-wrapper");
        header.classList.remove("fixed-snp-header");
    }
});