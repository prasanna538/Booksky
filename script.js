var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")
var addbutton=document.getElementById("addbutton")

addbutton.addEventListener("click",function()
{
    overlay.style.display="block"
    popup.style.display="block"
})

var cancel=document.getElementById("cancel")

cancel.addEventListener("click",function(event){
   event.preventDefault()
   overlay.style.display="none"
   popup.style.display="none"
})

var tank=document.querySelector(".tank")
var addbook=document.getElementById("add-book")
var title=document.getElementById("title")
var author=document.getElementById("author")
var describe=document.getElementById("describe")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h2>${title.value}</h2>
    <h5>${author.value}</h5>
    <p>${describe.value}</p>
    <button onclick="del(event)">Delete</button>`
    tank.append(div)
    overlay.style.display="none"
    popup.style.display="none"
}
)
function del(event){
   event.target.parentElement.remove()
}