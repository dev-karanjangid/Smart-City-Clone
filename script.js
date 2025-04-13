
// navigation script

let navigation=document.querySelector("nav")
let navigationIcon=document.querySelector("#navIcon")

navigationIcon.addEventListener("click", ()=>{
    navigation.classList.toggle("menuClick")
});


// FAQ script 

let outerFaq=document.querySelectorAll(".faq h3");

outerFaq.forEach((items,index)=>{
    items.addEventListener("click", ()=>{

        items.nextElementSibling.classList.toggle("faqOutputShow")

        outerFaq.forEach((innerItems,innerIndex)=>{
            if(innerIndex != index){
                innerItems.nextElementSibling.classList.remove("faqOutputShow")
                innerItems.firstElementChild.innerHTML= "-"
            }
        })

        if(items.firstElementChild.innerHTML== "-"){
            items.firstElementChild.innerHTML= "+"
        }
        else{
            items.firstElementChild.innerHTML= "-"
        }
    })
});






// popup contact form 

let popupBtn=document.querySelector("#popupButton");
let popupClass=document.querySelector(".popup");
let popupClose=document.querySelector(".popup>h3>span")

popupBtn.addEventListener("click",()=>{
    popupClass.classList.add("popupShow")
});

popupClose.addEventListener("click",()=>{
    popupClass.classList.remove("popupShow")
});