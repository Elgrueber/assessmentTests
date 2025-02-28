import { expect, Locator, Page } from '@playwright/test';

export default class LoginPage {
    private page: Page;
    private streetInput: Locator;
    private cityInput: Locator;
    private regionInput: Locator;
    private nameRegion: Promise<string[]>;
    private zipCodeInput: Locator;
    private phoneInput: Locator;
    private rateShipping: Locator;
    private submitShipping: Locator;

    constructor(page: Page) {
        this.page = page;
        this.streetInput = page.getByRole('textbox', { name: 'Street Address: Line 1' });
        this.cityInput = page.getByRole('textbox', { name: 'City *' });
        this.regionInput = page.locator('select[name="region_id"]');
        this.nameRegion = page.selectOption('select[name="region_id"]', { label: 'Alaska' });
        this.zipCodeInput = page.getByRole('textbox', { name: 'Zip/Postal Code *' });
        this.phoneInput = page.getByRole('textbox', { name: 'Phone Number *' });
        this.rateShipping = page.getByRole('radio', { name: 'Table Rate Best Way' });
        this.submitShipping = page.getByRole('button', { name: 'Next' });
    }

    async fillStreetInput(value: string) {
        await this.streetInput.fill(value);
    }
    async fillCityInput(value: string) {
        await this.cityInput.fill(value); 
    }
    async clickRegionInput() {
        await this.regionInput.click();
    }
    async fillZipCodeInput(value: string) {
        await this.zipCodeInput.fill(value);
    }
    async fillPhoneInput(value: string) {
        await this.phoneInput.fill(value);
    }
    async clickRateShipping() {
        await this.rateShipping.click();
    }
    async clickSubmitShipping() {
        await this.submitShipping.click();
    }
    async clickNameRegion() {
        await this.clickNameRegion();
    }
}
