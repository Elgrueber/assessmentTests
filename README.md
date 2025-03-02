Test Automation Framework with Playwright

This repository was created as a part of a technical interview. The task: Choose four test cases that you believe are critical for the given web application. Ensure your tests are well-structured, maintainable, and efficient. Website: https://magento.softwaretestingboard.com/

To identify critical test cases for the Magento website, I focused on core functionalities because, for an e-commerce platform like this, it is essential to ensure that a user can successfully complete a purchase. I selected the following functionalities:
1.	Registration. Without registration and logging in, it's impossible to make a purchase.
2.	Login and logout.
3.	Product selection and adding to the cart.
4.	End-to-end purchase flow test.
The following methods and techniques were used to create the framework: 
Page Object Model, with separate folders for pages, components, and modal windows. 
Additionally, I added a .env file to store credentials and URLs locally. 
Also, Prettier was integrated to improve code formatting. 
I use testData for constants and have integrated the Faker library. I also added utils to helpers, where I store technical data. 
For user registration, I use random credentials since the email cannot be repeated. All other tests are executed with a specific user. You can create a .env file locally based on .env.example and use your own test data or use the following: 
USER_EMAIL= tester@testtest.com
USER_PASSWORD=Test.test
Possible improvements for the framework: creating separate "precondition" and "postcondition" methods. Also, End-to-end tests can become a bit heavy, but since the best practice is test independence, the E2E test can be simplified by creating additional API methods for login, cart cleaning, and other functionality.


