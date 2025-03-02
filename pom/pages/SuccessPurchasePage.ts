import { expect, Locator, Page } from '@playwright/test';

export default class SuccessPurchasePage {
    private page: Page;
    private successPurchaseMessage: Locator;

    constructor(page: Page) {
        this.page = page;
    }

    getSuccessPurchaseMessage() {
        return this.page.getByText('Thank you for your purchase!');
    }
}
