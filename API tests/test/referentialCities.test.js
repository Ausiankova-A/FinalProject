const axios = require('axios')
const referential = require('../testData/referential.json')
const Validator = require('jsonschema').Validator;
const validator = new Validator('../sendHttpRequest');
const {
    sendHttpRequest
} = require('../sendHttpRequest')

describe('api testing of "Oz.by" website', function () {

    test('check status code results of adding item to the cart', async () => {
        const config = {
            url: 'https://oz.by/goods/ajax/html_box.php?idGoods=10275829&type=html&sm=true&searchToken=57a9a1f9cd2ce56c9489c17696d68b96&secondGoodsFromSet=10354879'
        }
        const result = await sendHttpRequest(config);
        console.log(result);
        expect(result.status).toEqual(200);
    });
    test('check status code for opening map with shops on the item page', async () => {
        const config = {
            url: 'https://oz.by/goods/ajax/html_box.php?idGoods=101036204&type=html&sm=true&searchToken=&secondGoodsFromSet=101036207'
        }
        const result = await sendHttpRequest(config);
        console.log(result);
        expect(result.status).toEqual(200);
    });
    test('check status code for opening personal account', async () => {
        const config = {
            url: 'https://oz.by/personal/'
        }
        const result = await sendHttpRequest(config);
        console.log(result);
        expect(result.status).toEqual(200);
    });

})