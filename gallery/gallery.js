// Initialize MixItUp after DOM load
document.addEventListener("DOMContentLoaded", function () {
    const containerEl = document.querySelector(".gallery__images");
    if (containerEl) {
        mixitup(containerEl, {
            selectors: {
                target: ".mix"
            },
            animation: {
                duration: 300
            },
            load: {
                filter: "all"
            }
        });
    }
});
