import { test, expect } from '../fixtures';
import { getRandomEmail, getRandomPassword, PAGE_TITLE, PERSON_NAME } from '../testData';

const email = getRandomEmail();
const password = getRandomPassword();

test.describe('Registration', () => {
    test('User registration', async ({ page, homePage, createAccountPage, accountPage }) => {
        await page.goto('/');
        await homePage.clickCreateAccountLink();

        await createAccountPage.fillFirstNameInput(PERSON_NAME.firstName);
        await createAccountPage.fillLastNameInput(PERSON_NAME.lastName);
        await createAccountPage.fillEmailInput(email);
        await createAccountPage.fillPasswordInput(password);
        await createAccountPage.fillConfirmPassword(password);
        await createAccountPage.clickCreateAccount();

        await expect(accountPage.getMessageSignIn()).toBeVisible();
        await expect(accountPage.getTitle()).toHaveText(PAGE_TITLE.AccountPage);

        const emailText = await accountPage.getEmailAccountText();
        expect(emailText).toContain(email);
    });
});
