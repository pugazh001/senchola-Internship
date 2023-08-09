const buttons=document.querySelectorAll(".btn");
const boxes=document.querySelectorAll(".box");
const searchBox=document.querySelector("#search");

/* Search Product */
searchBox.addEventListener('keyup',(e)=>{
    searctext=e.target.value.toLowerCase().trim();
    boxes.forEach((box)=>{
        // console.log(box);
        const data=box.dataset.item;
        // console.log(data);
        if(data.includes(searctext)){ 
            box.style.display="block";
        }else{
            box.style.display="none";
        }
    });
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    buttons[0].classList.add('btn-clicked');
});

buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        setActiveBtn(e);
        
        //product Filder
        const btnfilter=e.target.dataset.filter;

        boxes.forEach((box)=>{
            if(btnfilter=='all'){
                box.style.display="block";
            }else{
                const boxfilter=box.dataset.item;
                if(btnfilter==boxfilter){
                    box.style.display="block"
                }
                else{
                    box.style.display="none"
                }
            }
        })

    });
});

function setActiveBtn(e){
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked')
    });
  e.target.classList.add('btn-clicked');
};


