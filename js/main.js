/* var imgs = document.getElementsByClassName("img-fluid");
for(var i=0;i<imgs.length;i++)
{
    imgs[i].addEventListener("click",function(e) 
    {
        console.log(e.target)
    })
} */

/* var carImg=document.getElementById("carImg");
document.addEventListener("mousemove",function(e)
{
    carImg.style.top=e.clientY;
    carImg.style.left=e.clientX;
    
}) */





var carImgs=Array.from(document.getElementsByClassName("img-fluid"));
var lightBoxContainer=document.getElementById("lightBox-container");
var lightBoxItem=document.getElementById("lightBox-item");
var closeIcon=document.getElementById("close");
var pervIcon=document.getElementById("perv");
var nextIcon=document.getElementById("next");
var currentIndex=0;


for(var i=0;i<carImgs.length;i++)
{
    carImgs[i].addEventListener("click",function(e)
    {
        
        lightBoxContainer.style.display="flex";
        var imgSrc=e.target.src;
        lightBoxItem.style.cssText=`background-image:url(${imgSrc})`;
        currentIndex=carImgs.indexOf(e.target);
    })
}

closeIcon.addEventListener("click",closeSlider);

function closeSlider()
{
    lightBoxContainer.style.display="none"
}

nextIcon.addEventListener("click",getNextSlide);

function getNextSlide()
{
    currentIndex++;
    if(currentIndex==carImgs.length)
    {
        currentIndex=0;
    }
    var imgSrc=carImgs[currentIndex].src;
    lightBoxItem.style.cssText=`background-image:url(${imgSrc})`;
}

pervIcon.addEventListener("click",getPervSlide);

function getPervSlide()
{
    currentIndex--;
    if(currentIndex<0)
    {
        currentIndex=carImgs.length-1;
    }
    var imgSrc=carImgs[currentIndex].src;
    lightBoxItem.style.cssText=`background-image:url(${imgSrc})`;
}

document.addEventListener("keydown",function(e)
{
    if(e.key=="Escape")
    {
        closeSlider();
    }
    
    else if(e.key=="ArrowRight")
    {
        getNextSlide();
    }
    else if(e.key=="ArrowLeft")
    {
        getPervSlide();
    }
})

lightBoxContainer.addEventListener("click",function(e)
{
    if(e.target!=lightBoxItem&&e.target!=pervIcon&&e.target!=nextIcon)
    {
        closeSlider();
    }
})


/* 
    GET -- get data from server
    POST -- send data to server
    PUT -- update data on server
    DELETE -- delete data from db
    PATCH -- update piece of data 
*/
/* var httpRequest=new XMLHttpRequest();
var postsArr=[];
httpRequest.open("GET","https://jsonplaceholder.typicode.com/posts");
httpRequest.send();
httpRequest.addEventListener("readystatechange",function()
{
    if(httpRequest.readyState==4 && httpRequest.status==200)
    {
        postsArr=JSON.parse(httpRequest.response);
        displayPosts();
    }
}) 

function displayPosts()
{
     var cols = '';
     for(var i=0;i<postsArr.length;i++)
     {
        cols+=
        `
        <div class="col-md-3">
            <div>
                <h3>${postsArr[i].id}</h3>
                <h2>${postsArr[i].title}</h2>
                <p>${postsArr[i].body}</p>
            </div>
        </div>
        `
     }
     document.getElementById("postsRow").innerHTML=cols;
} */