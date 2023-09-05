let text=document.getElementById("text");
let toDoList=document.querySelector(".toDoList")
text.addEventListener("change",()=>{
    let divtasks=document.createElement("div");
    divtasks.classList.add("tasks");
    let taskBody=document.createElement("div");
    taskBody.classList.add("taskBody")
    let check=document.createElement("div");
    check.classList.add("check");
    let spanChecked=document.createElement("span");
    spanChecked.classList.add("material-symbols-outlined");
    spanChecked.innerText="check"
    spanChecked.id="Checkedd";
    
    check.addEventListener("click",()=>{
       
       
        if(spanChecked.style.display=="none")
        {
            spanChecked.style.display="flex"
            pTask.classList.add("text")
            taskBody.classList.add("back")
        }
        else{
            spanChecked.style.display="none"
            pTask.classList.remove("text")
            taskBody.classList.remove("back")
        }
    })
    pTask=document.createElement("p")
    pTask.innerText=text.value
    check.append(spanChecked)
    taskBody.append(check,pTask);
   
    let deletBtn=document.createElement("div");
    deletBtn.classList.add("deletBtn")
    let spanDelet=document.createElement("span")
    spanDelet.classList.add("material-symbols-outlined")
    spanDelet.innerText="gpp_bad"
    spanDelet.addEventListener("click",()=>{
        toDoList.removeChild(divtasks)
    })
    deletBtn.append(spanDelet)
    divtasks.append(taskBody,deletBtn);
    toDoList.append(divtasks);
    text.value=" "
    text.focus()

})