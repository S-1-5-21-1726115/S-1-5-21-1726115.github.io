function main() {
    const TestElements = document.getElementsByClassName("test")
    for (let i = 0; i < TestElements.length; i++) {
        TestElements[i].textContent = "当你看到这段文本时，表明你的浏览器启用且支持JavaScript."
    }
    AllElements = document.body.children
    for (let i = 0; i < AllElements.length; i++) {
        setTimeout(function() {
            AllElements[i].classList.add("loaded")
        }, i * 500)
    }

    function modifyText() {
        const Elements = document.getElementsByClassName("randomchar")
        for (let i = 0; i < Elements.length; i++) {
            const start = 0x4E00;
            const end = 0x9FFF;
            const randomChar = String.fromCharCode(Math.floor(Math.random() * (end - start)) + start)
            Elements[i].innerHTML = "<span style='font-family: monospace'>" + randomChar + "</span>"
        }
    }
    setInterval(modifyText, 1 / 60) //60 FPS
}
document.addEventListener("DOMContentLoaded", main)