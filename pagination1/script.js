

let link = document.getElementsByClassName("link");

let currentValue = 1;


function activeLink()
{
    for(l of link)
    {
        l.classList.remove("active");
    }
    event.target.classList.add("active");
    currentValue =event.target.value;


    // window.location.href = `page${currentValue}.html`;
}


function backbtn()
{
    if(currentValue > 1)
    {
        for(l of link)
            {
                l.classList.remove("active");
            }
            currentValue--;
            link[currentValue-1].classList.add("active")
            // window.location.href = `page${currentValue}.html`;
    }
}





function nextbtn()
{
    if(currentValue < link.length)
    {
        for(l of link)
            {
                l.classList.remove("active");
            }
            currentValue++;
            link[currentValue-1].classList.add("active")
            // window.location.href = `page${currentValue}.html`;
    }
}


