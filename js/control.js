const getSelectDirection = document.querySelector(".intro-wrapper-itemDirection")
const getSelectArea = document.querySelector(".intro-wrapper-itemArea")
const getSelectDirectionList = document.querySelector(".intro-wrapper-directionList")
const getSelectAreaList = document.querySelector(".intro-wrapper-selectAreaList")
const elBody = document.querySelector("body")
const getSortList = document.querySelector(".lawyersPage-box-result-list")
const getModal = document.querySelector(".userpicModal")
const getAvatar = document.querySelector(".lawyerProfile-imgBox")
const getBody = document.querySelector("body")

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
        else if(p.target.className === "intro-wrapper" || p.target.className === "container-big intro container-big" || p.target.className === "intro-wrapper-text" || p.target.className === "intro-wrapper-title"){
            console.log(p.target);
            
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
        else if(e.target.className === "intro-wrapper" || e.target.className === "container-big intro container-big" || e.target.className === "intro-wrapper-text" || e.target.className === "intro-wrapper-title"){
            getSelectAreaList.classList.remove("intro-wrapper-selectAreaList-active")
            getSelectAreaList.previousElementSibling.classList.remove("intro-wrapper-item-downArrowArea-active")
        }
    })
}
showSelectAreaDropdownFunc()

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if(window.scrollY > 80){
        header.classList.add("header-active")
    }
    else{
        header.classList.remove("header-active")

    }
})

function showSortByList (){
    elBody.addEventListener("click", (e) => {
        if(e.target.className === "lawyersPage-box-result-text"){
            counterClickDirection++
            if(counterClickDirection % 2 !== 0){
                getSortList.style.display = "block"
            }
            else{
                getSortList.style.display = "none"
            }
        }
        
        else if (e.target.className === "lawyersPage-box-result-item"){
            counterClickDirection++
            getSortList.style.display = "none"
            e.target.parentNode.previousElementSibling.textContent = e.target.textContent
                
        }
        
    })
}

showSortByList()

function showAvatar () {
    getAvatar.addEventListener("click", (e) => {
        if(e.target.className === "lawyerProfile-imgBox" || e.target.className === "lawyerProfile-imgBox-img"){
            getModal.classList.add("userpicModal-active")
            getBody.style.overflow = "hidden"    
            window.scrollTo({
                top: 0,
            })
        }
    })
}

showAvatar()

function closeAvatar() {
    getModal.addEventListener("click", (e) => {
        console.log(e.target);
        
        if(e.target.className === "userpicModal userpicModal-active" || e.target.className === "userpicModal-closeIcon"){
            getModal.classList.remove("userpicModal-active")
            getBody.style.overflow = "scroll"    
        }
    })

}
closeAvatar()