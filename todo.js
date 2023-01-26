

let table=[];
function ajout(){
    let taker= document.getElementById("taker").value;
    console.log(taker);
    
  if(taker.length == 0){
    alert('write somethong do to please')
}else{
// console.log(taker);
    let lesTaches=document.getElementById("lesTaches");
    // console.log(lesTaches);
    lesTaches.innerHTML+=`
    <div class="flex-column flex-md-row d-flex justify-content-around   p-3 w-75 mb-2  "style="background-color: red;">
    <div class=" text-center fw-bolder p-2"><p class="m-0">${taker}</p></div>
    <div class="d-flex align-items-center justify-content-around mt-5 mt-md-0">
     <button type="submit" class="btn btn-success text-white ms-1 done" > done</button>
     <button type="submit" class="btn btn-warning ms-1 text-white doing "> doing</button>
     <button type="submit" class="btn btn-danger ms-1 text-white todo"> to do</button>
    </div>

 </div>
    `
    let tabDoing=[];
   let tabDone=[];
   let tabP=[]
   let tabToDo=[]
   var Doing= document.querySelectorAll('.doing');
    var Done= document.querySelectorAll('.done');
    var pharse=document.querySelectorAll('p');
    var ToDo = document.querySelectorAll('.todo');
    // var Doing= document.querySelectorAll('doing')
 for(let i=0;i< Done.length;i++){

    tabDone.push(Done[i]); 
    // console.log(tabDone);
    // console.log(`longeur de tabDone=${tabDone.length}`);
   tabP.push(pharse[i])
//    console.log(tabP);
    // console.log( `longeur de tabP=${tabp.length}`);
    tabDoing.push( Doing[i])
    // console.log(tabDoing);
    //  console.log( `longeur de tabDoing=${tabDoing.length}`);
    tabToDo.push(ToDo[i])
        // console.log(tabTodo);
    //  console.log( `longeur de tabToDo=${tabToDo.length}`);

    Done[i].onclick = function coleurVert() {
     
        
        console.log(tabP);
        const findPWithDone=tabP.find((item,index)=>index===tabDone.indexOf(Done[i]))
        // const findPWithDone=tabP.find((item,index)=>console.log(index))
        
        // console.log(findPWithDone);
        
        console.log(tabDone.indexOf(Done[i]));
        
        findPWithDone.parentNode.parentNode.style.background ='green';
        findPWithDone.style.color ='white'
        
        // console.log(tabDone.indexOf(Done[i]));
        // this.parentNode.previousElementSibling.parentNode.style.background ='green';
        // this.parentNode.previousElementSibling.style.color ='white';
        // if () {
            
        // }
        
    }
    Doing[i].onclick = function coleurJaune() {
        const findPWithDoing= tabP.find((item,index)=>index=== tabDoing.indexOf(Doing[i]))
        findPWithDoing.parentNode.parentNode.style.background ='orange';
        findPWithDoing.style.color ='white'
    }
    ToDo[i].onclick= function couleurRouge(){
        const findPWithToDO= tabP.find((item,index)=>index=== tabToDo.indexOf(ToDo[i]))
        findPWithToDO.parentNode.parentNode.style.background ='red';
        findPWithToDO.style.color ='white'
    }
   

    
 }
 
}

// table.push(taker)
// console.log(table);

// return table
}
// let table1= table;
// console.log(table1);



