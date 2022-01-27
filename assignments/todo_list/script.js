var input=document.querySelector("input");
var btn=document.querySelector("button");
var para=document.querySelector(".todos");

var count=0;

btn.addEventListener('click',function(){
    
    var newPara=document.createElement('p');
    newPara.setAttribute("key",count);
    var data=input.value;
    newPara.append(data);
    para.append(newPara);
    console.log(newPara);
    count+=1;
    newPara.addEventListener('click',function(){
        newPara.remove();
    })
    input.value='';
})