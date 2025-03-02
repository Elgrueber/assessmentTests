import { expect, Page } from '@playwright/test';

export default class LogoutPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getMessageSignOut() {
        return this.page.getByText('You are signed out');
    }
}
