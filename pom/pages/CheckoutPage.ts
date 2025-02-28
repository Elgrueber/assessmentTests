import { expect, Locator, Page } from '@playwright/test';

export default class CheckoutPage {
    private page: Page;
    private placeOrderBtn: Locator;
    private sameAddressCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.placeOrderBtn = page.getByRole('button', { name: 'Place Order' });
        this.sameAddressCheckbox = page.getByRole('checkbox', { name: 'My billing and shipping' });
    }
    async checkSameAddressCheckbox() {
        await this.sameAddressCheckbox.click();
    }
    async clickPlaceOrderBtn() {
        await this.placeOrderBtn.click();
    }
}
