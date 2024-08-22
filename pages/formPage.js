
import { expect, test, page } from '@playwright/test';
// var faker = require('../node_modules/@faker-js/faker');
import { faker } from '@faker-js/faker';

export class FormPage {
  constructor(page) {
    this.page = page;
    this.modifyStudy = page;
    this.sendBtn = page.locator('//button[normalize-space()="SEND"]');  
    this.fullNameField = page.locator('//input[@placeholder="Name"]');
    this.emailField = page.locator('//input[@placeholder="Email"]');
    // this.completeWarn3 = page.locator('(//span[contains(text(),"Please fill out this field")])[4]');
    this.completeWarn3 = page.locator('//div[4]/span[@class="flex items-center gap-1 text-strawberry-800 text-[14px]"]');
  }

  async fillForm() {
    faker.seed(123); // get consistent data 

    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const fullname = `${firstname} ${lastname}`
    const email = `${firstname}.${lastname}@example.com`
    await this.fullNameField.fill(fullname);
    await this.emailField.fill(email);
    await this.emailField.fill(email);
    await this.sendBtn.click();

    // First I forgot the await in the expect and searched the issue!
    // await this.page.waitForTimeout(100); // just to play with this value
    // expect (await this.completeWarn3).toBeAttached({ timeout: 10000 });

    await expect (this.completeWarn3).toBeVisible();
    console.log('Done');
  }
}