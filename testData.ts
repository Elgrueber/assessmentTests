import { faker } from '@faker-js/faker';
import SuccessPurchasePage from './pom/pages/SuccessPurchasePage';
import CheckoutPage from './pom/pages/CheckoutPage';
import CreateAccountPage from './pom/pages/CreateAccountPage';

export const getRandomEmail = () => {
    return faker.internet.email();
};

export const getRandomPassword = (length?: number) => {
    let password = '';
    const minLength = 8;
    const maxLength = 20;
    const randomLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let passwordLength: number;

    if (length !== undefined) {
        if (length <= 0) {
            throw new Error('Length must be a positive integer greater than zero.');
        }
        passwordLength = length;
    } else {
        passwordLength = randomLength;
    }
    while (!/[0-9]/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[\W_]/.test(password)) {
        password = faker.internet.password({
            pattern: /[A-Za-z0-9_\W]/,
            length: passwordLength,
        });
    }
    return password;
};

export const PERSON_NAME = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
};

export const ADDRESS_DETAILS = {
    city: faker.location.city(),
    street: faker.location.street(),
    zip: faker.location.zipCode(),
    phone: faker.phone.number(),
};

export const PAGE_TITLE = {
    HomePage: 'Home Page',
    LoginPage: 'Customer Login',
    AccountPage: 'My Account',
    LogoutPage: 'You are signed out',
    ShippingPage: 'Shipping Address',
    SuccessPurchasePage: 'Thank you for your purchase!',
    CreateAccountPage: 'Create New Customer Account',
};
