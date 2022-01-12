const clearAll=document.querySelector('.ac');
const del=document.querySelector('.del');
const one=document.querySelector('.one');
const two=document.querySelector('.two');
const three=document.querySelector('.three');
const four=document.querySelector('.four');
const five=document.querySelector('.five');
const six=document.querySelector('.six');
const seven=document.querySelector('.seven');
const eight=document.querySelector('.eight');
const nine=document.querySelector('.nine');
const zero=document.querySelector('.zero');
const divide=document.querySelector('.divide');
const multiply=document.querySelector('.mul');
const add=document.querySelector('.add');
const subtract=document.querySelector('.sub');
const equal=document.querySelector('.equal');
const dot=document.querySelector('.dot');
const result=document.querySelector('.res');
const values=document.querySelector('.vals');
let val1=[],sign=[];


document.querySelectorAll('.val').forEach((val)=>{
val.addEventListener('click',(event)=>{


let curVal=event.target.textContent;
let str=values.textContent;

if(curVal.toLowerCase()==="del")
{
values.textContent=str.substring(0,str.length-1);
}else if(curVal.toLowerCase()==="ac")
{
    values.textContent="";
    result.textContent="";
    val1=[];
    sign=[];

}else if(curVal!="="){
    values.innerHTML+=curVal;

}else{

    console.log(str);
    let i=0,j=0,ans=0;
    let operation='+';
    while(j<str.length)
    {
        let c=str.charAt(j);

        if(c=="+" || c==="-" || c=="*" || c=="/" || j===str.length-1)
        {
           
            if(j===str.length-1)
                j++;
         let num=parseInt(str.substring(i,j));
          if(operation==='+')
          {
             val1.push(num);
          }else if(operation==='-')
          {
              val1.push(num*-1);
          }else if(operation==='/')
          {
              val1.push(val1.pop()/num);
          }else if(operation==='*')
          {
              val1.push(val1.pop()*num);
          }
          operation=c;
          i=++j;

        }else{
            j++;
        }
    }
    while(val1.length>0)
    {
        ans+=val1.pop();
    }
    console.log(ans);

                result.textContent=ans;
                // values.textContent="";
}
})
});

function calc(val1,sign){
    let ans=[]
    while(sign.length!=0)
    {
        let c=sign.pop();

       ans.push(val1.pop())
        if(c==='+')
        {
           ans.push(val1.pop());
        }else if(c==='-')
        {
            ans.push(va.pop()*-1);
        }else if(c==='/')
        {
            ans.push(ans.pop()/val1.pop());
        }else if(c==='*')
        {
            ans.push(ans.pop()*val1.pop());
        }
    }
    console.log(ans);
    console.log(val1);
    return ans.pop();
    

}