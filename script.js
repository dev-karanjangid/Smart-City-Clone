let navigation=document.querySelector("nav")
let navigationIcon=document.querySelector("#navIcon")

navigationIcon.addEventListener("click", ()=>{
    navigation.classList.toggle("mIcon")
})


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





