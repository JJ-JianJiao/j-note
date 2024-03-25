import icons from 'url:../../img/icons.svg';


export default class View{
    _data;
    
    /**
     * Render the received object to the DOM
     * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
     * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
     * @returns {undefined | string} A markup string is retuend if render=false
     * @this {object} View instance
     * @author JianJ
     * @todo Finish impementation
     */
    render(data, render = true){
        if(!data || (Array.isArray(data) && data.length === 0)) 
            return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();

        if(!render) return markup;

        this._clear();
        this._parentElement.insertAdjacentHTML('beforeend', markup);
    }

    update(data){
        // if(!data || (Array.isArray(data) && data.length === 0)) 
        //     return this.renderError();
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const currentElemets = Array.from(this._parentElement.querySelectorAll('*'));
        // console.log(currentElemets);
        // console.log(newElements);

        newElements.forEach((newEl,i) =>{
            const curEl = currentElemets[i];
            // console.log(curEl, newEl ,newEl.isEqualNode(curEl));


            //update changed text
            if(!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== ''){
                // console.log('✈',curEl);
                // console.log('✈',newEl.firstChild.nodeValue.trim());
                curEl.textContent = newEl.textContent;
                Array.from(newEl.attributes).forEach(attr => {
                    curEl.setAttribute(attr.name,attr.value)
                });
            }

            //update changed atribues
            if(!newEl.isEqualNode(curEl)){
                // console.log(Array.from(newEl.attributes));
                // console.log(curEl);
                Array.from(newEl.attributes).forEach(attr => {
                    curEl.setAttribute(attr.name,attr.value)
                });
            }
        });
    }

    _clear(){
        this._parentElement.innerHTML = "";
    }

    renderSpinner() {  
        const markup = `
            <div class="spinner">
            <svg>
                <use href="${icons}#icon-loader"></use>
            </svg>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderError(message = this._errorMessage){
        const markup = `
            <div class="error">
                <div>
                <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                </svg>
                </div>
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderMessage(message = this._message){
        const markup = `
            <div class="message">
                <div>
                <svg>
                    <use href="${icons}#icon-smile"></use>
                </svg>
                </div>
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}