const axios = require('axios');
const {
  expect,
} = require('chai');

describe('api testing of "Oz.by" website', function () {
  test('check status code results of adding item to the cart', async () => {
    const response = await axios.get('https://oz.by/goods/ajax/html_box.php?idGoods=10275829&type=html&sm=true&searchToken=57a9a1f9cd2ce56c9489c17696d68b96&secondGoodsFromSet=10354879');
    expect(response.status).to.equal(200);
  });
  test('check status code for opening map with shops on the item page', async () => {
    const response = await axios.get('https://oz.by/goods/ajax/html_box.php?idGoods=101036204&type=html&sm=true&searchToken=&secondGoodsFromSet=101036207');
    expect(response.status).to.equal(200);
  });
  test('check status code for opening personal account', async () => {
    const response = await axios.get('https://oz.by/personal/');
    expect(response.status).to.equal(200);
  });
});
