function sayhello()
{
    var heading = document.getElementById("heading");
    
    heading.innerHTML = "hello, how are you";
}
function alert()
{
    var paragraph = document.getElementById("paragraph");
    paragraph.firstChild.nodeValue ="good morning";


}
document.addEventListener("click",sayhello);
document.addEventListener(alert);

