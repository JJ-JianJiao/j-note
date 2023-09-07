class SearchView{
    #parentEl = document.querySelector('.search');

    getQuery(){
        return this.#parentEl.querySelector('.search__field').value;
    }

    addHandlerRender(handler){
        this.#parentEl.querySelector(".search__btn").addEventListener('click',handler);
    }
}

export default new SearchView();