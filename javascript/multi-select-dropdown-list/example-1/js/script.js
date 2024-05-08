const selectBtn = document.querySelector(".select-btn");
const items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", ()=>{
    selectBtn.classList.toggle("open");
})


items.forEach(item=>{
    item.addEventListener("click", ()=>{
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked");
        let btnText = document.querySelector(".btn-text");
        console.log(btnText);
        if(checked && checked.length > 0){
            btnText.textContent = `Selected ${checked.length} languages.`;
        }
        else{
            btnText.textContent = "Select Language";
        }
    })
})