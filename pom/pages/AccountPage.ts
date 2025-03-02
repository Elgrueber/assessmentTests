import { expect, Locator, Page } from '@playwright/test';

export default class AccountPage {
    private page: Page;
    private emailAccount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailAccount = page.locator('.box-content p');
    }

    getMessageSignIn() {
        return this.page.getByText('Thank you for registering');
    }
    async getEmailAccountText(): Promise<string | null> {
        return await this.emailAccount.textContent();
    }
    getTitle() {
        return this.page.getByRole('heading', { name: 'My Account' }).locator('span');
    }
}
