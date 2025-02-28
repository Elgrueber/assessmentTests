import { expect, Locator, Page } from '@playwright/test';

export default class ProceedCheckoutModal {
    private page: Page;
    private proceedCheckoutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.proceedCheckoutBtn = page.getByRole('button', { name: 'Proceed to Checkout' });
    }

    async clickProceedCheckoutBtn() {
        await this.proceedCheckoutBtn.click();
    }
}
