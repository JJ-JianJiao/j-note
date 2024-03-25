import View from './view.js';
import icons from 'url:../../img/icons.svg'; //Parcel 2

class AddRecipeView extends View{
    _parentElement = document.querySelector('.upload');
    _message = 'Recipe was successfully uploaded :)';

    _window = document.querySelector(".add-recipe-window");
    _overlay = document.querySelector(".overlay");
    _btnOpen = document.querySelector(".nav__btn--add-recipe");
    _btnClose = document.querySelector(".btn--close-modal");
    
    constructor(){
        super();
        this.addHandlerShowRecipeWindow();
        this.addHandlerCloseRecipeWindow();
    }

    toogleRecipeWindow(){
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
    }

    addHandlerShowRecipeWindow(){
        this._btnOpen.addEventListener('click', this.toogleRecipeWindow.bind(this));
    }

    addHandlerCloseRecipeWindow(){
        this._btnClose.addEventListener('click', this.toogleRecipeWindow.bind(this));
    }

    addHandlerUpload(handler){
        this._parentElement.addEventListener('submit', function (e) {  
            e.preventDefault();
            const dataArray = [...new FormData(this)];
            console.log(dataArray);
            const data = Object.fromEntries(dataArray);
            handler(data);
        })
    }


    _generateMarkup(){
        
    }
}

export default new AddRecipeView();