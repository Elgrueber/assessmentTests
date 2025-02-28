import { test, expect } from '../fixtures';
import { getRandomEmail, getRandomPassword, fistName, lastName } from '../testData';

const email = getRandomEmail();
const password = getRandomPassword();

test.describe('Registration', () => {
    test('User registration', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: 'Create an Account' }).click();
        await page.getByRole('textbox', { name: 'First Name*' }).fill(fistName);
        await page.getByRole('textbox', { name: 'Last Name*' }).fill(lastName);
        await page.getByText('Email', { exact: true }).fill(email);
        await page.getByRole('textbox', { name: 'Password*', exact: true }).fill(password);
        await page.getByRole('textbox', { name: 'Confirm Password*' }).fill(password);
        await page.getByRole('button', { name: 'Create an Account' }).click();
        await expect(page.getByText('Thank you for registering')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'My Account' }).locator('span')).toBeVisible();
    });
});
