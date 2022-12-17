class LoginPage {
    get 'Enter Page'() {
        return '.top-panel__userbar__auth__ico';
    }
    get 'Login From Email'() {
        return '#loginFormLoginEmailLink';
    }
    get 'Email Field'() {
        return '#loginForm .i-popup__input';
    }
    get 'Password Field'() {
        return '#loginForm .i-input_with-padding.i-popup__input';
    }
    get 'Disabled Login Button'() {
        return '#loginForm .i-popup__form-button.i-button_disabled';
    }
    get 'Login Button'() {
        return '#loginForm .i-popup__form-button';
    }
    get 'Login Error Message'() {
        return '#loginForm .i-popover__line';
    }
    get 'Password Error Message'() {
        return '//*[@class="i-input-group__popover i-input-group__popover_login i-input-group__popover_visible"]/div/div/div';

    }
}

module.exports = {
    LoginPage
};