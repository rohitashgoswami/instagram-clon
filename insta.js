const likeBtn = document.querySelector("#likeBtn");
const saveBtn = document.querySelector("#saveBtn");
const sendBtn = document.querySelector("#sendBtn");
const shareList = document.querySelector("#share");


likeBtn.addEventListener("click", ()=> {
    likeBtn.classList.toggle("active");
});  
saveBtn.addEventListener("click", ()=> {
    saveBtn.classList.toggle("active");
});  

// menuBar.addEventListener("click", ()=>{
//     menuBar.classList.add("style");
// });


function fun(){
    document.getElementById("menubar").style.visibility="visible";
    document.getElementById("menubar").classList.add("style");
}

function remove(){
    document.getElementById("menubar").classList.remove("style");
    document.getElementById("menubar").style.visibility="hidden";
}

let flag = 0

sendBtn.addEventListener("click", function () {
    if (flag == 0) {
        shareList.style.visibility = "visible"
        console.log("clicked")
        flag = 1 
    } else{
        shareList.style.visibility = "hidden"
        console.log("unclicked")
        flag = 0
    }
})

// function shareList(){
//     document.getElementById("share").style.visibility="visible"
// }