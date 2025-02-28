import { expect, Locator, Page } from '@playwright/test';

export default class HomePage {
    private page: Page;
    private createAccountLink: Locator;
    private signInLink: Locator;
    private shopNewYogaLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createAccountLink = page.getByRole('link', { name: 'Create an Account' });
        this.signInLink = page.getByRole('link', { name: 'Sign In' });
        this.shopNewYogaLink = page.locator('text=Shop New Yoga');
    }

    async clickCreateAccountLink() {
        await this.createAccountLink.click();
    }

    async clickSignInLink() {
        await this.signInLink.click();
    }

    async clickShopNewYogaLink() {
        await this.shopNewYogaLink.click();
    }
}
