
let divs = document.getElementsByTagName("div");
let selectFunction = () => {
    let inputData = window.getSelection().toString();
    if (inputData.length > 10){
        alert(inputData);
    }
}
for (let ele of divs) {
    ele.addEventListener('mouseup', selectFunction);
}