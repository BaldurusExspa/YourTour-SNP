window.addEventListener("scroll", function(){
    // console.log(this.pageYOffset)

    var headerWrapper = document.getElementById("snp-header-wrapper")
    var header = this.document.getElementById("snp-header")

    if (this.pageYOffset >= 449) {
        headerWrapper.classList.add("fixed-snp-header-wrapper")
        header.classList.add("fixed-snp-header")
    } else {
        headerWrapper.classList.remove("fixed-snp-header-wrapper")
        header.classList.remove("fixed-snp-header")
    }
})