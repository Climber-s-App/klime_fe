# Klime - Climbing Problem Design App (iOS)
## Introduction
  <img align='left' src="https://user-images.githubusercontent.com/123802263/265318670-186a990b-f94e-4015-943e-b4b4bfd0caa3.png" alt="Klime App Icon" width="80"/>
   <span>Klime is a React Native iOS application designed for rock climbers to create and design their own climbing problems by adding circles to existing climbing wall images. With Klime, users can save, name, and select difficulty levels for their climbing problems. Additionally, upcoming features will allow users to upload pictures and edit created problems.</span>

## Preview

<img alt='Preview gif' src='https://user-images.githubusercontent.com/123802263/265536407-ef2ca28b-3e0b-45db-a4d9-d381818869ae.gif'  width=150/>

## Installation
These instructions will help you set up and run the Klime app on your iOS device or simulator.

**Choice 1:** Using your iOS device to visit our deployed site **[TO DO: add hyperlink]**, or scan this QR code **[TO DO: add QR code]**

**Choice 2:** Install Klime on your local machine. Before you begin, ensure you have the following tools and dependencies installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) 
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) for testing
- [Xcode](https://developer.apple.com/documentation/safari-developer-tools/installing-xcode-and-simulators) if you want to run the app on an iOS [simulator](https://developer.apple.com/documentation/safari-developer-tools/adding-additional-simulators)
- Download [Expo Go](https://apps.apple.com/us/app/expo-go/id982107779) on your phone if you want to run the app on your iOS device

1. Run the following commands in order to clone the Klime repository to your local machine and install the dependencies:

   ```bash
   git clone git@github.com:Climber-s-App/klime_fe.git
   cd klime_fe
   npm install
   ```
2. To run the app on an iOS device: <br/>run `npm start` and using your iOS device to scan the QR code displayed in the terminal
3. To run the app on an iOS simulator: <br/>In `Xcode`, on menu located near the top left corner of the window, click `Xcode` > `Open Developer Tool` > `Simulator`. In `Simulator`, click `File` > `Open Simulator` and choose the device you want to use <br /><br/>
In your terminal, run `npm start` and then press `i`, the app should now be running on the simulator you selected. When necessary, press `r` or `cmd + d` to reload the app <br /><br/>
Klime uses Cypress for testing. To run the tests, use command `npx cypress open`


## Features
- **Climbing Problem Design**: Create and design climbing problems by adding circles to climbing wall images.
- **Problem Saving**: Save your created problems for future reference.
- **Problem Naming**: Give unique names to your climbing problems.
- **Difficulty Selection**: Assign difficulty levels to your problems.
- **Upcoming Features**: Stay tuned for the ability to upload pictures, edit created problems and other cool features!


## Contributors
- Hollis Vohr [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hollisvohr/) [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hvohr)
- Jade Shi [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ziyu-jade-shi/) [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Jade-ZS)
- Jason Alberto [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jason-alberto/) [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jalbe0076)


## Acknowledgement 
Thanks [Blain Glasgow](https://www.linkedin.com/in/blaine-glasgow-134a9017a/), [Jesse Thomas](https://www.linkedin.com/in/jesse-g-thomas/), and [Nick Tassinari](https://www.linkedin.com/in/tassinarinicholas/) for building the [Back End for Klime](https://github.com/Climber-s-App/klime_be). 



