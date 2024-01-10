let element = document.getElementById("list");
let close = document.getElementById("close");

element.onclick = () => {
    document.getElementById("ul").style.display = "flex";
    element.style.display = "none";
    close.style.display = "flex";

};
close.onclick = () => {
    document.getElementById("ul").style.display = "none";
    close.style.display = "none";
    element.style.display = "flex";
};

let elements = document.querySelectorAll('ul li');
elements.forEach(e => {
    e.onclick = () => {
        elements.forEach(e => e.classList.remove("active"));
        e.classList.add("active");
    };
});