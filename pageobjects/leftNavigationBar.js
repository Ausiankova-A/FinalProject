class LeftNavBar {
    get 'Navigation Links'() {
        return '.menu-link-action.main-nav__list__item';

    }
    get 'Books Section'() {
        return '.main-nav__list__li_wnav:nth-child(3)';

    }
}

module.exports = {
    LeftNavBar
};