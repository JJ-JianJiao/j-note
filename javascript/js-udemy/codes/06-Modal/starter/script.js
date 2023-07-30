'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const showModalBtns = document.querySelectorAll(".show-modal");

const hideModal = function () {  
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

const showModal = function () {  
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

showModalBtns.forEach(element => {
    element.addEventListener("click", (e)=>{
        showModal();
    })
});

closeModal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);
document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape" && !modal.classList.contains("hidden")){
        hideModal();
    }
})
