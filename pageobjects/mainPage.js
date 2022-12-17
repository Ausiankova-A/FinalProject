class MainPage {
    get 'Slider Links'() {
        return '.offers-slider__pagination__item span';
    }
    get 'Category Goods'() {
        return '.b-mpgs-header h2 a';
    }
    get 'Top Panel Items'() {
        return '.top-panel__hnav__li.top-panel__hnav__li_r a';
    }
    get 'Stationery Main Menu'() {
        return '#staticmenu_body_business li a';
    }
    get 'Books Main Menu'() {
        return '#staticmenu_body_books li a';
    }
    get 'Up Button'() {
        return '.up-btn.up-btn_visible';
    }
}

module.exports = {
    MainPage
};