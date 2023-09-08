import View from './view.js';
import icons from 'url:../../img/icons.svg'; //Parcel 2

class ResultsView extends View{
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipe found for your query! Please try again!';
    _message = '';

    _generateMarkup(i){
        return this._data.map(this._generateMarkupPreview).join('');
        
    };

    _generateMarkupPreview(result){
        return `
            <li class="preview">
                <a class="preview__link" href="#${result.id}">
                    <figure re class="preview__fig">
                        <img src="${result.image}" alt="${result.title}" />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${result.title}</h4>
                        <p class="preview__publisher">${result.publisher}</p>
                    </div>
                </a>
            </li>
         `;
    }
}

export default new ResultsView();