import { test, expect } from '../fixtures';
import { ADDRESS_DETAILS, getRandomEmail, getRandomPassword } from '../testData';
import { randomIndex } from '../helpers/utils';

const email = getRandomEmail();
const password = getRandomPassword();

test.describe('Functional test to add items to cart', () => {
    test.beforeEach(async ({ page, homePage, loginPage }) => {
        const email: string = process.env.USER_EMAIL!;
        const password: string = process.env.USER_PASSWORD!;

        await page.goto('/');
        await homePage.clickSignInLink();
        await loginPage.fillEmailAddressInput(email);
        await loginPage.fillPasswordInput(password);
        await loginPage.clickSignInBtn();
    });
    test('Choose item, put in cart', async ({ page, homePage, newCollectionPage }) => {
        await homePage.clickLogo();
        await homePage.clickShopNewYogaLink();
        await newCollectionPage.clickItemChoosen();
        await newCollectionPage.clickFirstSizeOption();
        await newCollectionPage.clickFirstColorOption();
        await newCollectionPage.clickAddToCartBtn();
        await expect(newCollectionPage.getAddedToCartMessage()).toBeVisible();
    });
});
