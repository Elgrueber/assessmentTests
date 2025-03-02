import { test, expect } from '../fixtures';
import { getRandomEmail, getRandomPassword, PAGE_TITLE } from '../testData';

test.describe('Functional test for login and signout', () => {
    test('Login and signout', async ({ page, homePage, loginPage, logoutPage }) => {
        const email: string = process.env.USER_EMAIL!;
        const password: string = process.env.USER_PASSWORD!;

        await page.goto('/');

        await homePage.clickSignInLink();
        await loginPage.fillEmailAddressInput(email);
        await loginPage.fillPasswordInput(password);
        await loginPage.clickSignInBtn();

        await expect(homePage.getTitle()).toHaveText(PAGE_TITLE.HomePage);

        await homePage.clickHamburgerProfileButton();
        await homePage.clickSignOutLink();

        await expect(logoutPage.getMessageSignOut()).toBeVisible();
    });
});
