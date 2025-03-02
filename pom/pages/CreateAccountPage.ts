import { expect, Locator, Page } from '@playwright/test';

export default class CreateAccountPage {
    private page: Page;
    private firstNameInput: Locator;
    private lastNameInput: Locator;
    private emailInput: Locator;
    private passwordInput: Locator;
    private createAccountBtn: Locator;
    private confirmPassword: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = this.page.getByRole('textbox', { name: 'First Name*' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name*' });
        this.emailInput = page.getByText('Email', { exact: true });
        this.passwordInput = page.getByRole('textbox', { name: 'Password*', exact: true });
        this.confirmPassword = page.getByRole('textbox', { name: 'Confirm Password*' });
        this.createAccountBtn = page.getByRole('button', { name: 'Create an Account' });
    }

    async fillFirstNameInput(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }
    async fillLastNameInput(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }
    async fillEmailInput(email: string) {
        await this.emailInput.fill(email);
    }
    async fillPasswordInput(password: string) {
        await this.passwordInput.fill(password);
    }
    async fillConfirmPassword(password: string) {
        await this.confirmPassword.fill(password);
    }
    async clickCreateAccount() {
        await this.createAccountBtn.click();
    }
}
