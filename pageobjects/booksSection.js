class BooksSection {
  get 'Fiction Literature'() {
    return '.landing-nav-list__item:nth-child(3)';
  }

  get 'Classic Literature'() {
    return '.landing-nav-list__item:nth-child(4)';
  }
}

module.exports = {
  BooksSection,
};
