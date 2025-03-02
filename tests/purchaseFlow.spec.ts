import { test, expect } from '../fixtures';
import { ADDRESS_DETAILS, getRandomEmail, getRandomPassword, PAGE_TITLE } from '../testData';

const email = getRandomEmail();
const password = getRandomPassword();

test.describe('E2E tests', () => {
    test('E2E. Login, choose item, put in cart, fill shipping address, make payment', async ({
        page,
        loginPage,
        homePage,
        successPurchasePage,
        checkoutPage,
        newCollectionPage,
        headerComponent,
        proceedCheckoutModal,
        shippingPage,
        logoutPage,
    }) => {
        const email: string = process.env.USER_EMAIL!;
        const password: string = process.env.USER_PASSWORD!;

        await page.goto('/');

        await homePage.clickSignInLink();
        await loginPage.fillEmailAddressInput(email);
        await loginPage.fillPasswordInput(password);
        await loginPage.clickSignInBtn();

        await expect(homePage.getTitle()).toHaveText(PAGE_TITLE.HomePage);

        await homePage.clickLogo();
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

        await expect(successPurchasePage.getSuccessPurchaseMessage()).toHaveText(PAGE_TITLE.SuccessPurchasePage);

        await homePage.clickHamburgerProfileButton();
        await homePage.clickSignOutLink();

        await expect(logoutPage.getMessageSignOut()).toHaveText(PAGE_TITLE.LogoutPage);
    });
});
