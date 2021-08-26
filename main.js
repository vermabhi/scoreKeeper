var p1score=document.querySelector("#p1_win");
var p2score=document.querySelector("#p2_win");
var p1d=document.querySelector("#p1_score");
var p2d=document.querySelector("#p2_score");
var res=document.querySelector("#reset");
var inp=document.querySelector("input");
var totd=document.querySelector("p span");
var p1s=0;
var p2s=0;
var over=false;
var tot=5;
p1score.addEventListener("click",function()
{
    if(!over){
        p1s++;
        p1d.textContent = p1s;
        if(p1s===tot)
        {
            over=true;
            p1d.classList.add("some");
            // alert("Congo Player1");
        }
    }
});
p2score.addEventListener("click",function()
{
    if(!over){
        p2s++;
        p2d.textContent = p2s;
        if(p2s===tot)
        {
            over=true;
            p2d.classList.add("some");
            // alert("Congo Player2");
        }
    }
});
function Ress()
{
    p1s=0;
    p2s=0;
    p1d.textContent = p1s;
    p2d.textContent = p2s;
    p1d.classList.remove("some");
p2d.classList.remove("some");
over=false;
}
res.addEventListener("click",function(){
    Ress();
});

inp.addEventListener("change",function(){
    tot=Number(this.value);
    totd.textContent=this.value;
    Ress();
})