var image=["lighton.png","lightoff.jpg"];
var tag=document.querySelector("img");
var c=0;
function prev()
{
    c--;
    if(c<0)
    {
        c=image.length-1; 
        tag.src=image[c];
    }
    else{
    tag.src=image[c];
    }
}

function next()
{
    c++;
    if(c>=image.length)
    {
        c=0;
        tag.src=image[c];
    }
    else{
    tag.src=image[c];
    }
}