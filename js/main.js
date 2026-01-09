import { partnerLogoBasePath, productList, partnerLogos } from "./data.js";


// Nav
$(function() {
    $(".navbar").hidescroll();

    //mobile dropdown menu
    const toggleBtn = $("#toggle_btn");
    const dropdownMenu = $(".dropdown-menu");
    toggleBtn.click(() => {
        dropdownMenu.toggleClass("open");
    });
});




// Partner Logos
$(function () {
    const container = document.getElementById('partner-logo-list');

    partnerLogos.forEach((logo) => {
        const img = document.createElement('img');
        img.src = partnerLogoBasePath + logo.fileName;
        img.alt = logo.alt; 
        img.classList.add('logo-ticker-image');
        container.appendChild(img);
    })
});

// Products
    // thêm activeTab vào li đầu tiên
    $("li:first").addClass("activeTab");

    // đổi màu activeTab
    $("li").on("click", function() {
        $("li").removeClass("activeTab");
        $('div[id="products-tabs"] ul .r-tabs-state-active').addClass('activeTab');
    })


$(function () {
    $('#products-tabs').responsiveTabs({
        animation : "slide",
    });
}) 

// Best sellers

$(function () {
    $('.slider').slick({
        autoplay: true,
        dots: true,
    });
});

// stats
$(function () {
    const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelectorAll( '.counter' ).forEach((node) => IO.observe(node))
IO.observe( el )
})
