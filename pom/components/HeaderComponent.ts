import { expect, Page } from '@playwright/test';

export default class HeaderComponent {
    private page: Page;
    private searchInput;
    private choosenOption;
    private cart;
    constructor(page: Page) {
        this.page = page;
        this.searchInput = this.page.getByRole('combobox', { name: ' Search' });
        this.choosenOption = page.locator('select option').first();
        this.cart = page.locator('a.showcart');
    }

    async fillSearchInput(item: string) {
        await this.searchInput.fill(item);
    }
    async clickchoosenOption() {
        await this.choosenOption.click();
    }
    async clickCart() {
        await this.cart.click();
    }
}
