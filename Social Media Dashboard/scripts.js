let checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
    }
});

let trans = () => {
    console.log(document.documentElement);
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 1000);
};

//

document.getElementById("instagram").addEventListener("click", function () {
    window.location = "https://instagram.com/nilansh_07"
})

document.getElementById("yt").addEventListener("click", function () {
    window.location = "https://youtube.com/@nilansh_07"
})

document.getElementById("twt").addEventListener("click", function () {
    window.location = "https://twitter.com/nilansh_07"
})