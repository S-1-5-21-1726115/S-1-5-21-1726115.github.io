function main() {
    unsupport_javascript_link = document.getElementById("unsupported")
    unsupport_javascript_link.textContent = ""
    unsupport_javascript_link.attributes['href'].textContent = ""
    support_javascript_link = document.getElementById("supported")
    support_javascript_link.textContent = "回到首页"
    support_javascript_link.addEventListener("click", function() {
        window.location.href = "/main.html"
    })
    mainpage = document.getElementById("mainpage")
    mainpage.addEventListener("click", function() {
        elements = document.body.children
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.animation = "fade-out 1s ease-in forwards"
            elements[i].style.animationDelay = i * 500 + "ms"
        }
        setTimeout(function() {
            window.location.href = "/main.html"
        }, 500 * document.body.children.length + 1500)
    })
}
document.addEventListener("DOMContentLoaded", main)