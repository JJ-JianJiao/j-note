import View from './view.js';
import icons from 'url:../../img/icons.svg';

class SearchResultsView extends View{
    #parentEl = document.querySelector(".search-results");
    #prevBtn = document.querySelector('.pagination__btn--prev');
    #nextBtn = document.querySelector('.pagination__btn--next');
    #currentIndex = 0;
    #maxPage = 0;
    
    _clear(){
        this.#parentEl.querySelector(".results").innerHTML = "";
    }

    render(data){
        this._data = data;
        console.log(data.length);
        this.#maxPage = Math.ceil(this._data.length/10);
        this.#showSearchResultsBarBtns();
        for(let max = this.#currentIndex + 10 <= this._data.length ? this.#currentIndex + 10 : this._data.length, index = this.#currentIndex; index < max; ++index){
            console.log(this);
            console.log(this.#parentEl);
            console.log(this.#parentEl.querySelector(".results"));
            this.#parentEl.querySelector(".results").insertAdjacentHTML('beforeend',this.#generateMarkup(index));
        };
        this.#setSearchResultsBarBtns();
    }
    #hideSearchResultsBarBtns() {  
        this.#prevBtn.style.display="none";
        this.#nextBtn.style.display="none";
    };

    #showSearchResultsBarBtns() {  
        this.#prevBtn.style.display="block";
        this.#nextBtn.style.display="block";
    };

    #setSearchResultsBarBtns() {  
        const pre = this.#currentIndex/10;
        const next = pre + 2;
        console.log(`Pre:${pre}, MaxPage:${this.#maxPage}, next: ${next}`);
        if(pre != 0){
            this.#prevBtn.querySelector('span').textContent = `Page ${pre}`;
        }
        else{
            this.#prevBtn.style.display="none";
        }
        if(next === this.#maxPage + 1){
            this.#nextBtn.style.display="none";
        }
        else{
            this.#nextBtn.querySelector('span').textContent = `Page ${next}`;
        }
    };

    #generateMarkup(i){
        return `
        <li class="preview">
          <a class="preview__link" href="#${this._data[i].id}">
            <figure re class="preview__fig">
              <img src="${this._data[i].image}" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${this._data[i].title}</h4>
              <p class="preview__publisher">${this._data[i].publisher}</p>
              <div class="preview__user-generated">
                <svg>
                  <use href="${icons}#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
      `;
    };
    
    init(){
        this.#hideSearchResultsBarBtns();
        this.#parentEl.addEventListener('click',this.#clickSearchResults.bind(this));
    };

    #clickSearchResults(e){
        // console.log(e.target);
        if(e.target.closest('.preview__link')){
            // console.log('clicked recipe');
            this.#parentEl.querySelector('.preview__link--active')?.classList.remove('preview__link--active');
            e.target.closest('.preview__link').classList.add('preview__link--active');
        }
        else if(e.target.closest('.pagination__btn--prev')){
            console.log('clicked prev btn');
            this.#currentIndex -= 10;
            this._clear();
            this.render(this._data);
        }
        else if(e.target.closest('.pagination__btn--next')){
            console.log('clicked next btn');
            this.#currentIndex += 10;
            this._clear();
            this.render(this._data);
        }
    };
}

export default new SearchResultsView();