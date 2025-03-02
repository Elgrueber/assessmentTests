import { expect, Locator, Page } from '@playwright/test';

export default class HomePage {
    private page: Page;
    private createAccountLink: Locator;
    private signInLink: Locator;
    private shopNewYogaLink: Locator;
    private logo: Locator;
    private hamburgerProfileButton: Locator;
    private signOutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createAccountLink = page.getByRole('link', { name: 'Create an Account' });
        this.signInLink = page.getByRole('link', { name: 'Sign In' });
        this.shopNewYogaLink = page.locator('text=Shop New Yoga');
        this.logo = page.getByRole('link', { name: 'store logo' });
        this.hamburgerProfileButton = page.getByRole('button', { name: 'Change ' }).first();
        this.signOutLink = page.getByRole('link', { name: 'Sign Out' });
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

    async clickLogo() {
        await this.logo.click();
    }

    async clickHamburgerProfileButton() {
        await this.hamburgerProfileButton.click();
    }

    async clickSignOutLink() {
        await this.signOutLink.click();
    }
    getTitle() {
        return this.page.getByText('Home Page');
    }
}
