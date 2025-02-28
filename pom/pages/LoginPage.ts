import { expect, Locator, Page } from '@playwright/test';

export default class LoginPage {
    private page: Page;
    private emailAddressInput: any[] | Locator;
    private passwordInput: any[] | Locator;
    private signInBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailAddressInput = page.getByRole('textbox', { name: 'Email*' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password*' });
        this.signInBtn = page.getByRole('button', { name: 'Sign In' });
    }

    async fillEmailAddressInput(email: string) {
        await this.emailAddressInput.fill(email);
    }
    async fillPasswordInput(password: string) {
        await this.passwordInput.fill(password);
    }
    async clickSignInBtn() {
        await this.signInBtn.click();
    }
}
