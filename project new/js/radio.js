let next=document.querySelector('#btn_next')
let prev=document.querySelector('#btn_prev')
let inner_line=document.querySelector('.outercolor')

document.querySelector('.radio').style.border="2px solid blue"
let count=0;
let p_count;
#next.addEventListener('click',next_fun)
 #prev.addEventListener('click',prev_fun)


function next_fun()
{
    count+=1;
    document.querySelectorAll('.radio')[count].style.border="2px solid blue"
    document.querySelectorAll('.radio')[count].style.transition="2s ease"
    p_count=count;

    if(count==1)
    {inner_line.style.width="6.5rem"; }
    if(count==2)
    {inner_line.style.width="12.5rem"}
    if(count==3)
    {inner_line.style.width="20rem"}
    inner_line.style.transition="1s ease"
}

function prev_fun()
{
    // p_count-=1;
    // console.log(p_count)
    document.querySelectorAll('.radio')[p_count].style.border="2px solid rgb(167, 159, 159)"
    p_count-=1;
    count=p_count;
    if(p_count==2)
    {inner_line.style.width="12.5rem"}
    if(p_count==1)
    {inner_line.style.width="6.5rem"}
    if(p_count==0)
    {inner_line.style.width="0rem"}
}