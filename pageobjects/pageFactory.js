const {
  Search,
} = require('./pageComponents/search');
const {
  ItemPage,
} = require('./itemPage');
const {
  LeftNavBar,
} = require('./leftNavigationBar');
const {
  SectionPage,
} = require('./sectionPage');
const {
  BooksSection,
} = require('./booksSection');
const {
  LoginPage,
} = require('./pageComponents/login');
const {
  PersonalAccount,
} = require('./pageComponents/personalAccount');
const {
  Cart,
} = require('./pageComponents/cart');
const {
  MainPage,
} = require('./mainPage');

class PageFactory {
  static 'Search' = new Search();

  static 'Item Page' = new ItemPage();

  static 'Left Navigation Bar' = new LeftNavBar();

  static 'Section Page' = new SectionPage();

  static 'Books Section' = new BooksSection();

  static 'Login Page' = new LoginPage();

  static 'Personal Account' = new PersonalAccount();

  static 'Cart' = new Cart();

  static 'Main Page' = new MainPage();
}

module.exports = {
  PageFactory,
};
