const HeaderWrapper = this.document.getElementById("snp-header-wrapper");
const Header = this.document.getElementById("snp-header");
const Img = this.document.getElementById("snp-header-img");

window.addEventListener("scroll", function(){
    // console.log(this.pageYOffset)

    if (this.pageYOffset >= 449) {
        HeaderWrapper.classList.add("fixed-snp-header-wrapper");
        Header.classList.add("fixed-snp-header");
        Img.setAttribute ('src', '../media/icons/YourTour_bl.svg');
    } else {
        HeaderWrapper.classList.remove("fixed-snp-header-wrapper");
        Header.classList.remove("fixed-snp-header");
        Img.setAttribute ('src', '../media/icons/YourTour_wh.svg');
    };
});