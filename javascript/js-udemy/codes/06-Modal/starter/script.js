'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const showModal = function () {  
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const showModalBtns = document.querySelectorAll(".show-modal");
showModalBtns.forEach(element => {
    element.addEventListener("click", (e)=>{
        showModal();
    })
});

const closeModal = document.querySelector(".close-modal").addEventListener("click", (e)=>{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
})