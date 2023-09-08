import View from './view.js';
import icons from 'url:../../img/icons.svg'; //Parcel 2

class PaginationView extends View{
    _parentElement = document.querySelector('.pagination');


    addHandlerClick(handler){
        this._parentElement.addEventListener('click',function (e) {  
            const btn = e.target.closest('.btn--inline');
            if(!btn) return;
            handler(+btn.dataset.goto);
        })
    }

    _generateMarkup(){
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        // console.log(numPages);
        //page 1, and there are other pages
        if(this._data.page === 1 && numPages > 1){
            return `
                ${this._paginationNextMarkup()}
            `;
        }
        // last page
        if(this._data.page === numPages && numPages > 1){
            return `
                ${this._paginationPrevMarkup()}
            `;
        }
        //other page
        if(this._data.page < numPages){
            return `
                ${this._paginationPrevMarkup()}
                ${this._paginationNextMarkup()}
            `;
        }
        //page 1, and there are no other pages
        return ``;
    }

    _paginationPrevMarkup(){
        return `
            <button data-goto="${this._data.page - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${this._data.page -1}</span>
            </button>
        `;
    }
    _paginationNextMarkup(){
        return `
            <button data-goto="${this._data.page + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${this._data.page + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
        `;
    }
}

export default new PaginationView();