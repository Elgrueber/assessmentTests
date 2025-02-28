import { faker } from '@faker-js/faker';

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

export const fistName = faker.person.firstName();
export const lastName = faker.person.lastName();

export const address = {
    city: 'Paris',
    street: 'Main',
    'zip code': '12345',
    phone: '123456789',
};
