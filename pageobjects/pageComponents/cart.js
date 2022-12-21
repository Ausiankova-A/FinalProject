class Cart {
  get 'Cart Button'() {
    return '.top-panel__userbar__cart__item';
  }

  get 'First Item Title'() {
    return '.goods-table-cell__line.goods-table-cell__line_title';
  }

  get 'Item Title'() {
    return '.goods-table-cell__line.goods-table-cell__line_title';
  }

  get 'Item Checkbox'() {
    return '.goods-table__cell.goods-table__cell_first .i-checkbox_large';
  }

  get 'Check All Checkbox'() {
    return '.checkAll';
  }

  get 'Empty Cart Title'() {
    return '.i-textual__plain.i-textual__plain_arrow.i-textual__plain_limited';
  }

  get 'Checkout Button'() {
    return '.deal-form-footer__control';
  }

  get 'Delivery Address Button'() {
    return '.deal-form-main__input_faded.deal-form-main__input_valid';
  }

  get 'Add Address Button'() {
    return '.i-context-box-main__footer-cell .i-button_gray.i-button_large';
  }

  get 'Delivery Street'() {
    return '#i-street';
  }

  get 'Delivery House'() {
    return '#i-house';
  }

  get 'Delivery Flat'() {
    return '#i-flat';
  }

  get 'Delivery Entrance'() {
    return '#i-entrance';
  }

  get 'Delivery Floor'() {
    return '#i-floor';
  }

  get 'Add Address'() {
    return '.i-context-box-list__input_link';
  }

  get 'Delivery Address Field'() {
    return '.deal-form-main__input.deal-form-main__input_popup.i-input.i-input_no-border-radius.deal-form-main__input_faded.deal-form-main__input_valid';
  }

  get 'Name Surname Error Message'() {
    return '#enter-fullname .i-popover__main';
  }

  get 'Name Field'() {
    return '.i-input_error';
  }

  get 'Name Field Data'() {
    return '#enter-fullname .deal-form-main__input.i-input.i-input_no-border-radius';
  }

  get 'Payment Method Field'() {
    return '#select-payment-link';
  }

  get 'Payment By Installment Card'() {
    return '.payment-methods li:nth-child(2)';
  }

  get 'Payment Method Field Data'() {
    return '#select-payment-link .i-input__sub';
  }

  get 'First Item In Cart'() {
    return '.goods-table__body .i-checkbox.i-checkbox_large input';
  }

  get 'Delete Item Button'() {
    return '.goods-table-cell__sub-cell_button .i-button_small.remove';
  }

  get 'Deletion Confirmation Button'() {
    return '.goods-table-popup__cell .remove-yes';
  }

  get 'Move To Favorites Button'() {
    return '.goods-table-cell__sub-cell_button .i-button_small.addto-favs';
  }

  get 'Confirmation Move To Favorites Button'() {
    return '.goods-table-popup__cell .addto-favs-yes';
  }
  get 'Checkout Error Message'() {
    return '.error-main .i-popover__main';
  }
}

module.exports = {
  Cart,
};