import { test, expect } from '../fixtures';
import { address } from '../testData';

test.describe('Sanity suite', () => {
    test.beforeEach(async ({ page, homePage, loginPage }) => {
        const email: string = process.env.USER_EMAIL!;
        const password: string = process.env.USER_PASSWORD!;
        await page.goto('/');
        await homePage.clickSignInLink();
        await loginPage.fillEmailAddressInput(email);
        await loginPage.fillPasswordInput(password);
        await loginPage.clickSignInBtn();
    });

    test('E2E. Choose item, put in cart, fill shipping address, make payment', async ({
        page,
        homePage,
        successPurchasePage,
        checkoutPage,
        newCollectionPage,
        headerComponent,
        proceedCheckoutModal,
        shippingPage,
    }) => {
        await homePage.clickShopNewYogaLink();
        await newCollectionPage.clickItemChoosen();
        await newCollectionPage.clickFirstSizeOption();
        await newCollectionPage.clickFirstColorOption();
        await newCollectionPage.clickAddToCartBtn();
        await expect(newCollectionPage.getAddedToCartMessage()).toBeVisible();

        await headerComponent.clickCart();
        await proceedCheckoutModal.clickProceedCheckoutBtn();

        await shippingPage.clickRateShipping();
        await shippingPage.clickSubmitShipping();

        await page.waitForURL('**/checkout/#payment');

        await checkoutPage.clickPlaceOrderBtn();

        await expect(successPurchasePage.getSuccessPurchaseMessage()).toHaveText('Thank you for your purchase!');
    });

    /*
  NOTE: The first time the fields are filled out in the test, the user's shipping details are automatically saved. 
  Since there is no option to delete the user's address via the UI, 
  I would need to make an API call to delete the shipping details. 
  Alternatively, this test can be performed with a new user, and the user can be removed afterward. 
  Therefore, I skipped the test.
  */

    test.skip('Proceed with payment and Fill Shipping Address', async ({
        page,
        checkoutPage,
        shippingPage,
        successPurchasePage,
        headerComponent,
        proceedCheckoutModal,
    }) => {
        await headerComponent.clickCart();
        await proceedCheckoutModal.clickProceedCheckoutBtn();
        await shippingPage.fillStreetInput(address.street);
        await shippingPage.fillCityInput(address.city);
        await shippingPage.clickRegionInput();
        await shippingPage.clickNameRegion();
        await shippingPage.fillZipCodeInput(address['zip code']);
        await shippingPage.fillPhoneInput(address.phone);
        await shippingPage.clickRateShipping();
        await shippingPage.clickSubmitShipping();

        await page.waitForURL('**/checkout/#payment');
        await checkoutPage.clickPlaceOrderBtn();

        await expect(successPurchasePage.getSuccessPurchaseMessage()).toHaveText('Thank you for your purchase!');
    });

    /*
    NOTE:
    I skipped this test because a method for adding a product to the cart needs to be created. 
    Currently, there is an E2E test that, once the method is created, can be split into smaller parts.
    */

    test.skip('Proceed with payment if Shipping Address Filled', async ({
        page,
        checkoutPage,
        shippingPage,
        successPurchasePage,
        headerComponent,
        proceedCheckoutModal,
    }) => {
        await headerComponent.clickCart();
        await proceedCheckoutModal.clickProceedCheckoutBtn();
        await shippingPage.clickRateShipping();
        await shippingPage.clickSubmitShipping();

        await page.waitForURL('**/checkout/#payment');
        await checkoutPage.clickPlaceOrderBtn();

        await expect(successPurchasePage.getSuccessPurchaseMessage()).toHaveText('Thank you for your purchase!');
    });
});
