
const inp = document.getElementById('inp')

const btn = document.getElementById('btn')

const list = document.getElementById('list')


let state = 0;
let liObj;
btn.addEventListener('click', function () {

    const todoText = inp.value;


    if (todoText === "" ||todoText==" ") {
        alert('empty todo');
        return;
    }

    if (state === 0) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerText = todoText;
        li.append(span);
        // li styling using DOM
        li.style.width = "350px"
        li.style.backgroundColor = '#8ecae6';
        li.style.fontSize = '1.2rem';
        li.style.padding = ' 12px 10px'
        li.style.margin = ' 10px'
        li.style.boxShadow = '1px 1px 2px #ccc';
        li.style.borderRadius = '8px';
        li.style.listStyle='none'
        li.style.minHeight='17px'

        // complete task
        span.addEventListener('mouseover',function(e){
            e.target.style.cursor="pointer"
        })
        span.addEventListener('click',function(e){
            e.target.classList.toggle('mystyle')
            li.classList.toggle('opacity')
        
           
        })

        //  //    HOVER ON LI
        // li.addEventListener('mouseover',function(e){
        //     e.target.style.fontWeight='900'
        // })

       
   


        // delete icon
        const del = document.createElement('i');
        del.classList.add("fas");
        del.classList.add("fa-trash-alt");

        // set icon on li 
        del.style.float = "right"

        const edit = document.createElement('i');
        edit.classList.add("fas");
        edit.classList.add("fa-pencil-alt");

        // set icon on li
        edit.style.float = "right"

        edit.style.marginRight = "20px";

        li.append(del);
        li.append(edit);
        list.append(li);
        
        inp.value=""

        del.addEventListener('click', function (e) {

            e.target.parentNode.remove(); 
            if(btn.innerText==="Edit"){
                
                btn.innertext="Add";
            }

    
        })

        del.addEventListener('mouseover',(e)=>{
            e.target.style.cursor = "pointer";
           

        })


             // MOVE UP OF LI

        const moveup = document.createElement('i');
        moveup.classList.add("fas");
        moveup.classList.add("fa-chevron-up");

        li.append(moveup);

        moveup.style.float="right"
        moveup.style.marginRight="25px" ;
        moveup.addEventListener('mouseenter',(e)=>{
            e.target.style.cursor = "pointer";
           

        })

     //    move up icon working

        moveup.addEventListener('click', function(){

        if(li.previousElementSibling===null){
        return;
        }

        const prevLi=li.previousElementSibling;
        prevLi.before(li);
        })

    

            // move down LI
        const movedown = document.createElement('i');
        movedown.classList.add("fas");
        movedown.classList.add("fa-chevron-down");
 
        li.append(movedown);

        movedown.style.float="right"
        movedown.style.marginRight="25px" ;
        movedown.addEventListener('mouseenter',(e)=>{
            e.target.style.cursor = "pointer";
           

        })

    // move down icon working

        movedown.addEventListener('click', function(){

            if(li.nextElementSibling===null){
            return;
            }
    
            const nextLi=li.nextElementSibling;
            nextLi.after(li);
        }    )

        //  //  completed task
        //  const comp = document.createElement('INPUT')
   
        //  comp.setAttribute("type", "checkbox");
     
        //  list.append(comp);
     
        //  comp.style.float='left'
     





        edit.addEventListener('click', function (e) {
            state = 1;
            liObj = e.target.parentNode;
            btn.innerText = "Edit"
            inp.value=li.innerText;
            span.innerText=""
            

            
        
        
        })

        edit.addEventListener('mouseenter',(e)=>{
            e.target.style.cursor = "pointer";
           

        })

    }
       
    if(state === 1) {
            liObj.firstChild.innerText = todoText;
            btn.innerText = "Add"
            inp.value = ""
            state = 0;
     }

   



})





































