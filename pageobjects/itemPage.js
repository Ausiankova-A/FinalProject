class ItemPage {
    get 'Product Name'() {
        return '//*[@class="b-product-title__heading"]/h1';
    }
    get 'Add To Cart Button'() {
        return '.first-button';
    }
}

module.exports = {
    ItemPage
};