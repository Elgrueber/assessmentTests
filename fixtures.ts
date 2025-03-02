import { test as base, Page } from '@playwright/test';
import HomePage from './pom/pages/HomePage';
import LoginPage from './pom/pages/LoginPage';
import NewCollectionPage from './pom/pages/NewCollectionPage';
import HeaderComponent from './pom/components/HeaderComponent';
import ProceedCheckoutModal from './pom/modalWindows/ProceedCheckoutModal';
import ShippingPage from './pom/pages/ShippingPage';
import CheckoutPage from './pom/pages/CheckoutPage';
import SuccessPurchasePage from './pom/pages/SuccessPurchasePage';
import LogoutPage from './pom/pages/LogoutPage';
import CreateAccountPage from './pom/pages/CreateAccountPage';
import AccountPage from './pom/pages/AccountPage';

type MyFixtures = {
    homePage: HomePage;
    loginPage: LoginPage;
    newCollectionPage: NewCollectionPage;
    headerComponent: HeaderComponent;
    proceedCheckoutModal: ProceedCheckoutModal;
    shippingPage: ShippingPage;
    checkoutPage: CheckoutPage;
    successPurchasePage: SuccessPurchasePage;
    logoutPage: LogoutPage;
    createAccountPage: CreateAccountPage;
    accountPage: AccountPage;
    password: string;
    email: string;
};

export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    newCollectionPage: async ({ page }, use) => {
        await use(new NewCollectionPage(page));
    },
    headerComponent: async ({ page }, use) => {
        await use(new HeaderComponent(page));
    },
    proceedCheckoutModal: async ({ page }, use) => {
        await use(new ProceedCheckoutModal(page));
    },
    shippingPage: async ({ page }, use) => {
        await use(new ShippingPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    successPurchasePage: async ({ page }, use) => {
        await use(new SuccessPurchasePage(page));
    },
    logoutPage: async ({ page }, use) => {
        await use(new LogoutPage(page));
    },
    createAccountPage: async ({ page }, use) => {
        await use(new CreateAccountPage(page));
    },
    accountPage: async ({ page }, use) => {
        await use(new AccountPage(page));
    },
});

export { expect } from '@playwright/test';
