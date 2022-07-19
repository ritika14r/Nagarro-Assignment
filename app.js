//Todo added on press enter

window.addEventListener('keydown', (e) => {
    if(e.target.value!=''){
        if (e.which == 13) {
            addingtodo();
        }
    }
});
//checked todo

function donetodo(donetodobox,textbox){
   
    if(!donetodobox.hasAttribute('checked')){
        donetodobox.setAttribute("checked","")
        textbox.setAttribute("class",'todocheckbox');
        

    }
    else{
        donetodobox.removeAttribute("checked")
        textbox.removeAttribute("class",'todocheckbox');
        
    }
}


//edit button
function editbutton(textbox){
    textbox.disabled=!textbox.disabled;
}


//remove button
function rmvbutton(container,todo){
    // console.log("remove");
    container.removeChild(todo);
}




function addingtodo(){

    // console.log("inside");
    
    //-----creating all element individually & setting its property
    let todo=document.createElement('div');
        todo.id="todo1";
    let donetodobox=document.createElement('input');
        donetodobox.id="checkingbox";
        donetodobox.type="checkbox";
    let textbox=document.createElement('input');
        textbox.classList.add('todotext');
        textbox.type="text";
        var txt= document.getElementById("inputtext").value;
        textbox.setAttribute('value',txt);
        textbox.id="todotextid";
        textbox.setAttribute('disabled','');
    let edit=document.createElement('button');
        edit.innerHTML="✏️";
        edit.id="editing";
    let rmv=document.createElement('button');
        rmv.innerHTML="❎";
        rmv.id="rmvbutton";

    //----appending all element inside todo
    todo.appendChild(donetodobox);
    todo.appendChild(textbox);
    todo.appendChild(edit);
    todo.appendChild(rmv);
    //----now appending todo inside the container
    let container=document.getElementById("container2");
    container.appendChild(todo);

    //---resetting the input field
    document.getElementById("inputtext").value="";

    

    donetodobox.addEventListener('change',()=>donetodo(donetodobox,textbox));
    edit.addEventListener('click',()=>editbutton(textbox));
    rmv.addEventListener('click',()=>rmvbutton(container,todo))


    
}

$('#addbutton').on('click',addingtodo)