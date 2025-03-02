import { expect, Locator, Page } from '@playwright/test';

export default class LoginPage {
    private page: Page;
    private itemChoosen: Locator;
    private firstSizeOption: Locator;
    private firstColorOption: Locator;
    private addToCartBtn: Locator;
    private addedToCartMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.itemChoosen = page.locator('.products-grid .product-item').first();
        this.firstSizeOption = page.getByRole('option').first();
        this.firstColorOption = page.locator('.swatch-option.color').first();
        this.addToCartBtn = page.getByRole('button', { name: 'Add to Cart' });
        this.addedToCartMessage = page.locator('div', { hasText: /added.*shopping.*cart/i }).first();
    }

    async clickItemChoosen() {
        await this.itemChoosen.click();
    }

    async clickFirstSizeOption() {
        await this.firstSizeOption.click();
    }

    async clickFirstColorOption() {
        await this.firstColorOption.click();
    }

    async clickAddToCartBtn() {
        await this.addToCartBtn.click();
    }

    getAddedToCartMessage() {
        return this.addedToCartMessage;
    }
}
