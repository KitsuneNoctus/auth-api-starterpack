# Bookeepr Documentation
To keep track important information (currently contacts only):
* Contacts
* Account Info - N/A
* New Destinations - N/A

## About
Bookeepr is where people can add information to contact profiles on people they know of, whether it be an industry contact, or someone from your social circle. Bookeepr allows you to create and keep track of any important contacts you make, and share them with the world.

CURRENTLY, LOGIN ONLY WORK ON LOCAL MACHINES - SORRY

There is hope to update this in future to do even more!

## Development
[Project Repository](https://github.com/KitsuneNoctus/auth-api-starterpack)
Currently in its first stages of development. Ver. 1.0.0

### How to Conribute
1. Fork the project over, and clone from your repository
1. Follow the steps of [installation](#Installation) to get all packages
1. Continue to make changes on your local
1. BE sure to have a dotenv set with the following. Setup your Google items [here](https://console.cloud.google.com/getting-started). If you need help, follow the items in step 1 of [this tutorial](https://www.loginradius.com/blog/async/google-authentication-with-nodejs-and-passportjs/) to setup.
    ```bash
    GOOGLE_CLIENT_ID = googleClientID
    GOOGLE_CLIENT_SECRET = googleSecret
    ```

1. If there is any need for you to use your own db, then make sure to set one up properly with mongo atlus

## Installation

1. Open the repository folder in your editor of choice:

    ```bash
    $ cd auth-api-starterpack
    ```

1. Run `npm install` to install project dependencies into the activated environment.
1. Execute `npm start` to run the development server.


## Deployment
> Currently not deployed
[Launch](https://bookeepr-bew.herokuapp.com/)

### Heroku

Follow this [Node.js Deployment Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs) to deploy your application on Heroku. Be sure to complete all of the steps!


