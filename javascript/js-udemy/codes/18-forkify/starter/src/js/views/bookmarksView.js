import View from './view.js';
import PreviewView from './paginationView.js';
import icons from 'url:../../img/icons.svg'; //Parcel 2
import previewView from './previewView.js';

class BookmarksView extends View{
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
    _message = '';

    _generateMarkup(i){
        return this._data.map(bookmark => previewView.render(bookmark)).join('');
    };
}

export default new BookmarksView();