let myBlock;
let upButton;
let myFunctionList;
let funList = [];
const movementArray = [ "right", "left", "up", "down" ]
document.addEventListener("DOMContentLoaded", function () {
    myBlock = document.createElement("div")
    myBlock.textContent = "Hello world";
    myBlock.style.width = "100px";
    myBlock.style.height = "100px";
    myBlock.style.backgroundColor = "red";
    myBlock.style.color = "white";
    myBlock.style.lineHeight = "100px";
    myBlock.style.textAlign = "center";
    myBlock.style.position = "absolute";
    myBlock.style.top = "100px";
    myBlock.style.left = "150px";
    document.body.appendChild(myBlock);
    myFunctionList = document.createElement("div")
    document.body.appendChild(myFunctionList)
})
document.addEventListener("keydown", function (e) {
    e.preventDefault();
    if (e.keyCode == 39) addFun("right");
    else if (e.keyCode == 40) addFun("down");
    else if (e.keyCode == 38) addFun("up");
    else if (e.keyCode == 37) addFun("left");
    else if (e.keyCode == 67) { myBlock.style.backgroundColor = randomColor() }
    else if (e.keyCode == 82) { addFun(movementArray[ Math.floor(Math.random() * movementArray.length) ]) }
    else if (e.keyCode === 13 || e.keyCode === 32) mover();


})
function mover() {
    if (funList.length > 0) {
        let cur = myBlock.getBoundingClientRect();
        let el = funList.shift();
        let item = el.textContent.replace("+", "")
        myFunctionList.removeChild(el);
        myBlock.innerHTML = "Move:" + item
        if (item == "left") {
            myBlock.style.left = cur.left - cur.width + "px";
        }
        else if (item == "right") {
            myBlock.style.left = cur.left + cur.width + "px";
        }
        else if (item == "up") {
            myBlock.style.top = cur.top - cur.width + "px";
        }
        else if (item == "down") {
            myBlock.style.top = cur.top + cur.width + "px";
        }
        else { myBlock.innerHTML = "Seth Path " }
        setTimeout(mover, 1500)
        //  console.log(cur)
    }
}

function addFun(val) {

    let span = document.createElement("span")
    span.textContent = "+" + val;
    span.style.padding = "10px"
    span.style.border = "1px solid #ddd"
    span.addEventListener("mouseover", function () {
        this.style.backgroundColor = "red"
        this.style.color = "white"
    })
    span.addEventListener("mouseout", function () {
        this.style.backgroundColor = "white"
        this.style.color = "black"
    })
    span.addEventListener("click", function () {
        let curIndex = funList.indexOf(this);
        let tempRemove = funList.splice(curIndex, 1);
        myFunctionList.removeChild(this)
    })

    myFunctionList.appendChild(span)
    funList.push(span);
    console.log(funList)
}

function goLeft() {
    let temp = myBlock.offsetLeft;
    temp = temp - 50;
    myBlock.style.left = temp + "px"
}

function goRight() {
    let temp = myBlock.offsetLeft;
    temp = temp + 50;
    myBlock.style.left = temp + "px"
}

function goUp() {
    let temp = myBlock.offsetTop;
    temp = temp - 50;
    myBlock.style.top = temp + "px"
}
function goDown() {
    let temp = myBlock.offsetTop;
    temp = temp + 50;
    myBlock.style.top = temp + "px"
}
function randomColor() {
    return '#' + Math.random().toString(16).substr(-6)
}