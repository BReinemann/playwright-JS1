const { test, expect } = require('@playwright/test');
import { FormPage } from '../pages/formPage';

test.describe('Novatechdev test @smoke', () => {
    test('Software Solutions Form', async ({ page }) => {
        const form = new FormPage(page);
        await page.goto('https://www.novatechdev.com/');
        await form.fillForm(); 
    });
});