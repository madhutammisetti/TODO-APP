
// <h1 id="input-header">TODO APP</h1>
//<form id = "todoform" >
 //<input placeholder="Enter Your TODO Here" id="inputtext" type="text" >  
 //<input id="submitbtn" type="submit" >    
//</form> 


var todoform = document.getElementById("todoform");
var inputtext = document.getElementById("inputtext");
var cardsection = document.getElementById("card-section")
todoform.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(inputtext.value);  
    if(inputtext.value !== ""){
        randertodocard(inputtext.value);
        inputtext.value="";
    } 
    else{
        alert("Hey You !! Enter Your TODO")
    }
})

function randertodocard(todotext){      // here todotext is nothing but the inputtext.value


    // <div id="card-section">

    // <diV class="card">
    //     <div class="todoWrapper">
    //         <P class="todomessage">Buy Apples !!!!</p>
    //             <div>
    //             <i class="fas fa-pen"></i>
    //             <i class="fas fa-trash"></i>
    //             <i class="fas fa-check"></i>
    //         </div>
    //     </div>
    //     <div class="editInput">
    //         <input type="Text" value="Buy Apples !!">
    //         <i class="fas fa-save"></i>
    //     </div>

    // </diV>

    //Card
    var todocard = document.createElement("div");
    todocard.classList.add("card");
    var todoWrapper = document.createElement("div");
    todoWrapper.classList.add("todoWrapper");

    var message = document.createElement("p");
    message.classList.add("todomessage");
    message.innerHTML=todotext;
    todoWrapper.appendChild(message);

    var icons = document.createElement("div");

    var deleteIcon = document.createElement('i');
    deleteIcon.classList.add("fas");
    deleteIcon.classList.add("fa-trash");
    icons.appendChild(deleteIcon);

    var completeIcon = document.createElement("i")
    completeIcon.classList.add("fas");
    completeIcon.classList.add("fa-check");
    icons.appendChild(completeIcon)

    var editIcon = document.createElement('i');
    editIcon.classList.add("fas");
    editIcon.classList.add("fa-pen")
    icons.appendChild(editIcon);


    todoWrapper.appendChild(icons);
    todocard.appendChild(todoWrapper);
    // console.log(todocard)


    // <div class="editInput">
    // //         <input type="Text" value="Buy Apples !!">
    // //         <i class="fas fa-save"></i>
    // //     </div>

var editinputsection = document.createElement("div");
editinputsection.classList.add("editInput");
var editinputtext = document.createElement("input");
editinputtext.type="Text";
editinputtext.value="edit able text ";
var  saveicon = document.createElement("i");
saveicon.classList.add("fas")
saveicon.classList.add("fa-save")
editinputsection.appendChild(editinputtext);
editinputsection.appendChild(saveicon);

todocard.appendChild(editinputsection)

cardsection.appendChild(todocard)

console.log(cardsection)





deleteIcon.addEventListener("click",function(){
    todocard.remove();
})   

completeIcon.addEventListener("click",function(){
   message.style.textDecoration="line-through";
})

completeIcon.addEventListener("dblclick", function(){
    message.style.textDecoration="none";
})

editIcon.addEventListener("click" , function(){
    editinputsection.style.display = "flex";
    editinputtext.value=todotext;
    todoWrapper.style.display="none";

})
saveicon.addEventListener("click" , function(){
    editinputsection.style.display = "none";
    message.innerHTML= editinputtext.value;
    todoWrapper.style.display="flex" 
})
   
}







