document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("page-loader");
    const video = document.querySelector(".video-bg video");

    const hideLoader = () => {
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 600); 
    };
    
    if (video) {
        if (video.readyState >= 3) {
            hideLoader();
        } else {
            video.addEventListener("canplaythrough", hideLoader);
            setTimeout(hideLoader, 3000);
        }
    } else {
        window.addEventListener("load", hideLoader);
    }
});
