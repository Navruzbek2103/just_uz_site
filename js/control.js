const getSelectDirection = document.querySelector(".intro-wrapper-itemDirection")
const getSelectArea = document.querySelector(".intro-wrapper-itemArea")
const getSelectDirectionList = document.querySelector(".intro-wrapper-directionList")
const getSelectAreaList = document.querySelector(".intro-wrapper-selectAreaList")
const elBody = document.querySelector("body")

let counterClickDirection = 0;
function showSelectDirectionDropdownFunc(){
    elBody.addEventListener("click", (p) => {
        if(p.target.className === "intro-wrapper-directionItem" || p.target.className === "intro-wrapper-directionItem-link"){
            getSelectDirection.childNodes[1].textContent = p.target.textContent;
        }
        
        if(p.target.className === "intro-wrapper-item-textDirection" || p.target.className === "intro-wrapper-item intro-wrapper-itemDirection" || p.target.className === "intro-wrapper-item-downArrowRole" || p.target.className === "intro-wrapper-item-downArrowRole intro-wrapper-item-downArrowRole-active"){
            counterClickDirection++;
            getSelectAreaList.classList.remove("intro-wrapper-selectAreaList-active")
            getSelectAreaList.previousElementSibling.classList.remove("intro-wrapper-item-downArrowArea-active")
            if(counterClickDirection % 2 !== 0){
                getSelectDirectionList.classList.add("intro-wrapper-directionList-active")
                getSelectDirectionList.previousElementSibling.classList.add("intro-wrapper-item-downArrowRole-active")    
                            
            }
            
            else if(counterClickDirection % 2 === 0){
                getSelectDirectionList.classList.remove("intro-wrapper-directionList-active")
                getSelectDirectionList.previousElementSibling.classList.remove("intro-wrapper-item-downArrowRole-active")
            }
        }
        else{
            getSelectDirectionList.classList.remove("intro-wrapper-directionList-active")
            getSelectDirectionList.previousElementSibling.classList.remove("intro-wrapper-item-downArrowRole-active")
        }
    })
}
showSelectDirectionDropdownFunc()

function showSelectAreaDropdownFunc(){
    elBody.addEventListener("click", (e) => {
        if(e.target.className === "intro-wrapper-selectAreaItem" || e.target.className === "intro-wrapper-selectAreaItem-link"){
            getSelectArea.childNodes[1].textContent = e.target.textContent;
        }
        if(e.target.className === "intro-wrapper-item-textArea" || e.target.className === "intro-wrapper-item intro-wrapper-itemArea" || e.target.className === "intro-wrapper-item-downArrowArea" || e.target.className === "intro-wrapper-item-downArrowArea intro-wrapper-item-downArrowArea-active"){
            counterClickDirection++;
            getSelectDirectionList.classList.remove("intro-wrapper-directionList-active")
            getSelectDirectionList.previousElementSibling.classList.remove("intro-wrapper-item-downArrowRole-active")
            if(counterClickDirection % 2 !== 0){
                getSelectAreaList.classList.add("intro-wrapper-selectAreaList-active")
                getSelectAreaList.previousElementSibling.classList.add("intro-wrapper-item-downArrowArea-active")
            }
            else if(counterClickDirection % 2 === 0){
                getSelectAreaList.classList.remove("intro-wrapper-selectAreaList-active")
                getSelectAreaList.previousElementSibling.classList.remove("intro-wrapper-item-downArrowArea-active")
            }
        }
        else{
            getSelectAreaList.classList.remove("intro-wrapper-selectAreaList-active")
            getSelectAreaList.previousElementSibling.classList.remove("intro-wrapper-item-downArrowArea-active")
        }
    })
}
showSelectAreaDropdownFunc()