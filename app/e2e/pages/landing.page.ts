import type { Locator, Page } from '@playwright/test';
import { ROUTES, type TestLocale } from '../fixtures/test-data';

export class LandingPage {
  readonly page: Page;

  // Selectors
  readonly heroHeading: Locator;
  readonly heroCta: Locator;
  readonly heroSubtitle: Locator;
  readonly connectWalletButton: Locator;
  readonly header: Locator;
  readonly footer: Locator;
  readonly headerLogo: Locator;
  readonly headerNavLinks: Locator;
  readonly footerPlatformLinks: Locator;
  readonly stats: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heroHeading = page.locator('#hero-heading');
    this.heroCta = page.locator('section[aria-labelledby="hero-heading"] a[href*="/courses"]');
    this.heroSubtitle = page.locator('section[aria-labelledby="hero-heading"] p').first();
    this.connectWalletButton = page.getByRole('button', { name: /connect wallet/i });
    this.header = page.locator('header');
    this.footer = page.locator('footer[role="contentinfo"]');
    this.headerLogo = page.getByLabel('Superteam Academy home').first();
    this.headerNavLinks = page.locator('nav[aria-label="Main navigation"] a');
    this.footerPlatformLinks = page.locator('footer ul[role="list"] a');
    this.stats = page.locator('section[aria-labelledby="hero-heading"]').locator('.flex.items-center.gap-2\\.5');
  }

  async navigate(locale?: TestLocale) {
    await this.page.goto(ROUTES.landing(locale));
  }

  async getHeroTitle(): Promise<string> {
    return (await this.heroHeading.textContent()) ?? '';
  }

  getCtaButton(): Locator {
    return this.heroCta;
  }

  async navigateToCourses() {
    await this.heroCta.click();
    await this.page.waitForURL(/\/courses/);
  }

  async getHeaderNavTexts(): Promise<string[]> {
    return this.headerNavLinks.allTextContents();
  }
}
