var input=document.querySelector("input");
var btn=document.querySelector("button");
var para=document.querySelector(".todos");
var api=document.querySelector('.api');
var btnApi=document.querySelector(".buttonApi");
var completed=document.querySelector(".completed");
var pending=document.querySelector(".pending");
var inserting=document.querySelector(".insert");

var count=0;

btn.addEventListener('click',function(){
    
    var newPara=document.createElement('p');
    newPara.setAttribute("key",count);
    var data=input.value;
    newPara.append(data);
    para.append(newPara);
    console.log(newPara);
    count+=1;
    newPara.addEventListener('click',function(e){
        newPara.remove();
        console.log(e.target)
    })
    input.value='';
})

btnApi.addEventListener("click",myApi);

function myApi(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res=>res.json())
    .then(data=>executeOpeartion(data))
}


function executeOpeartion(data){
    inserting.innerHTML="";
    // console.log(data)
    // console.log(data[1]);
    // console.log(data[1].completed);
    // console.log(completed.innerHTML=="Completed");
    // console.log(pending.innerHTML=="Pending");
    // console.log(completed.innerHTML);
    var trueStatement=document.createElement("div");
    var falseStatement=document.createElement("div");
   
    for(var i=0;i<data.length;i++){
            if(data[i].completed){
                let p2=document.createElement("p");
                p2.innerHTML=data[i].title;
                trueStatement.append(p2);
            }else if(data[i].completed==false){
                let p2=document.createElement("p");
                p2.innerHTML=data[i].title;
                falseStatement.append(p2);
            }
        
    }
    console.log(falseStatement);
    console.log(trueStatement);
    if(btnApi.value=="Completed"){
        // console.log("masssssssssssssssssssssssss");
        inserting.append(trueStatement);
    }else if(btnApi.value=="Pending"){
        // console.log("maiiiiiiiiiiiiiiiiiiiiiiiiiii");
        inserting.append(falseStatement);

}

}