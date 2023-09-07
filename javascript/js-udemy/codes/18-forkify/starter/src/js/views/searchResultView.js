import icons from 'url:../../img/icons.svg';

class SearchResultsView{
    #parentEl = document.querySelector(".search-results");
    #prevBtn = document.querySelector('.pagination__btn--prev');
    #nextBtn = document.querySelector('.pagination__btn--next');
    #currentIndex = 0;
    #data;
    #maxPage = 0;

    #clear(){
        this.#parentEl.querySelector(".results").innerHTML = "";
    }

    render(data){
        this.#data = data;
        console.log(data.length);
        this.#maxPage = Math.ceil(this.#data.length/10);
        this.#showSearchResultsBarBtns();
        for(let max = this.#currentIndex + 10 <= this.#data.length ? this.#currentIndex + 10 : this.#data.length, index = this.#currentIndex; index < max; ++index){
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
          <a class="preview__link" href="#${this.#data[i].id}">
            <figure re class="preview__fig">
              <img src="${this.#data[i].image}" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${this.#data[i].title}</h4>
              <p class="preview__publisher">${this.#data[i].publisher}</p>
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
            this.#clear();
            this.render(this.#data);
        }
        else if(e.target.closest('.pagination__btn--next')){
            console.log('clicked next btn');
            this.#currentIndex += 10;
            this.#clear();
            this.render(this.#data);
        }
    };
}

export default new SearchResultsView();