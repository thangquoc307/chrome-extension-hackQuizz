
let divs = document.getElementsByTagName("div");
let selectFunction = () => {
    let inputData = window.getSelection().toString();
    alert(inputData)
}
for (let ele of divs) {
    ele.addEventListener('mouseup', selectFunction);
}