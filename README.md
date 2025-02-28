Test Automation Framework with Playwright

This repository was created as part of a technical interview. The task: Choose four test cases that you believe are critical for the given web application. Ensure your tests are well-structured, maintainable, and efficient. Website: https://magento.softwaretestingboard.com/

To identify critical test cases for the Magento website, I've focused on the core functionalities because, for an e-commerce platform like this, it’s crucial to ensure that the user can complete a purchase. The following functionalities were selected by me: 
1. Registration 
2. Login. Both were chosen because without login, it is impossible to make a purchase. 
3. Product selection and adding to the cart. 
4. Filling in contact details and payment.

For the creation of the framework, the following methods and techniques were used:
Page Object Model: Separate folders for Pages, Components, and Modal Windows.
I added a .env file to store credentials and URLs locally.
I also integrated Prettier to improve code formatting.
I use testData for constants and have integrated the Faker library.
For user registration, I use different credentials since the email cannot be repeated. All other tests run with a specific user, and their credentials are stored in the .env file (which is included in .gitignore).
I used beforeEach to perform the login before each test. 
Possible improvements:
Creating a dedicated "precondition" method.
Besides that, I would improve my framework by creating separate methods—for example, extracting the functionality of adding a product to the cart into a separate method. E2E tests become somewhat heavy, but since the best practice is test independence, the E2E test can be shortened by creating additional methods.

