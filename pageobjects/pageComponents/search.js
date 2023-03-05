class Search {
  get 'Search Field'() {
    return '.ui-autocomplete-input';
  }

  get 'First Search Result'() {
    return '.viewer-type-card_has-filter.viewer-type-card li:first-child';
  }

  get 'Invalid Search Result'() {
    return '.breadcrumbs__list__li.active.last.a-open h1 span';
  }
}

module.exports = {
  Search,
};