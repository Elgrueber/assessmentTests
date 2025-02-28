import { expect, Locator, Page } from '@playwright/test';

export default class SuccessPurchasePage {
    private page: Page;
    private successPurchaseMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successPurchaseMessage = page.locator("[data-ui-id = 'page-title-wrapper']");
    }
    getSuccessPurchaseMessage() {
        return this.successPurchaseMessage;
    }
}
