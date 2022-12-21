class PersonalAccount {
  get 'Personal Account Button'() {
    return '.top-panel__userbar__user__name__inner';
  }

  get 'Personal Account Header'() {
    return '.l-row-user-name h1';
  }

  get 'Exit Button'() {
    return '.l-col-3 .uc-nav.uc-nav-last li a';
  }

  get 'Favorites Area'() {
    return '.viewer-type-card__wrapper #goods-table';
  }

  get 'Favorites Title'() {
    return '.item-type-card__title';
  }

  get 'Favorites Tab'() {
    return '#user-tab-wishlist';
  }
}

module.exports = {
  PersonalAccount,
};
