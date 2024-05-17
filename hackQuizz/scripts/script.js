let inputData = "";
let show = false;
class Question {
    question = "";
    trueIndex = [];
    answer = [];
    constructor(question, trueIndex, answer) {
        this.question = question;
        this.trueIndex = trueIndex;
        this.answer = answer;
    }
    getData () {
        let result = "";
        for (let i = 0; i < this.answer.length; i++) {
            let data = this.answer[i];
            let isTrue = checkContainIndex(this.trueIndex, i);
            result += `<div style='color: ${isTrue ? "red" : "white"}' >${data}</div>`;
        }
        return result;
    }
}
let questionList = [
    new Question(`What was the earlier name of java programming language ?`,
        [1],
        [`A. Exclipse`, `B. OAK`, `C. Java`, `D. Netbeans`]),
    new Question(`public class MyFirstClass {
public static void main(String[] args) {
System.out.println(args[1]);
}
}
Which of the following commands will compile and then print "hello" ?`,
        [1],
        [`A. javac MyFirstClass
java MyFirstClass hello hello`, `B. javac MyFirstClass.java
java MyFirstClass hello hello`, `C. javac MyFirstClass
java MyFirstClass hello`, `D. javac MyFirstClass.java
java MyFirstClass hello`]),

]
let checkContainIndex = (array, element) => {
    for (let checkElelement of array) {
        if (element == checkElelement) {
            return true;
        }
    }
    return false;
}
let checkContainQuestion = () => {
    for (let questionCheck of questionList){
        if (questionCheck.question.includes(inputData)) {
            return questionCheck;
        }
    }
}

let selectFunction = () => {
    inputData = window.getSelection().toString();
}
let keydown = (event) => {
    let checkKey = event.key == "a";
    if (checkKey && inputData.length > 10 && !show) {
        show = true;
        showTable();
    } else {
        show = false;
        inputData = "";
        hiddenTable();
    }
}
let setupEvent = () => {
    let table = document.getElementById("lqt-show");
    let body = document.getElementsByTagName("body")[0];
    let divs = document.getElementsByTagName("div");

    if (!table) {
        body.innerHTML += `<div id='lqt-show' style='
            width: 500px; padding: 20px 10px; position: fixed; top: 30px; right: 30px;
            background-color: rgba(0,0,0,0.9); border-radius: 20px; z-index: 9000;
            display: none;
        '></div>`
    }

    for (let ele of divs) {
        ele.addEventListener('mouseup', selectFunction);
    }
    body.addEventListener('keydown', keydown);

}
let showTable = () => {
    let element = document.getElementById("lqt-show");
    if (element) {
        element.style.display = "block";
        let dataQuestion = checkContainQuestion();
        console.log(dataQuestion)
        if (dataQuestion){
            element.innerHTML = dataQuestion.getData();
        } else {
            element.innerHTML = `not matching any question on database`
        }
    } else {
        console.log("Element with id 'lqt-show' not found");
    }
}
let hiddenTable = () => {
    let element = document.getElementById("lqt-show");
    if (element) {
        element.style.display = "none";
    } else {
        console.log("Element with id 'lqt-show' not found");
    }
}

setupEvent();