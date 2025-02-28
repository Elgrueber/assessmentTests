import { test, expect } from '../fixtures';
import { getRandomEmail, getRandomPassword } from '../testData';

test.describe('Authorization', () => {
    test('User authorization', async ({ page, homePage, loginPage }) => {
        const email: string = process.env.USER_EMAIL!;
        const password: string = process.env.USER_PASSWORD!;

        await page.goto('/');

        await homePage.clickSignInLink();
        await loginPage.fillEmailAddressInput(email);
        await loginPage.fillPasswordInput(password);
        await loginPage.clickSignInBtn();
    });
});
