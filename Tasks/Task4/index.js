const push=document.querySelector('#push');
const tasK=document.querySelector('#tasks');
const newtasK=document.querySelector('#newtask input');
push.onclick = function(){
    if(newtasK.value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
       tasK.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${newtasK.value}
                </span>
                <button class="delete">
                <i class="fa fa-trash-o"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}