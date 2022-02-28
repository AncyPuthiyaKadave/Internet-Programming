function sayhello()
{
    var heading = document.getElementById("heading");
    var paragraph = document.getElementById("paragraph");
    
    heading.innerHTML = "hello, how are you";
    paragraph.firstChild.nodeValue ="good morning";
}
document.addEventListener("click",sayhello);
