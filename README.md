# Klime - Climbing Problem Design App (iOS)

<div style="display:flex; justify-content: center; align-items: center">
<img src="./app/assets/klime.png" alt="Klime App Icon" width="200"/>
<span>Klime is a React Native iOS application designed for rock climbers to create and design their own climbing problems by adding circles to existing climbing wall images. With Klime, users can save, name, and select difficulty levels for their climbing problems. Additionally, upcoming features will allow users to upload pictures and edit created problems.</span>
</div>

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Deployment](#deployment)
  - [Installation](#installation)
- [Preview](#preview)
- [Features](#features)
- [Contributors](#contributors)

## Getting Started

These instructions will help you set up and run the Klime app on your iOS device or simulator.

### Prerequisites

Before you begin, ensure you have the following tools and dependencies installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) 
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) for testing
- Optional: [Xcode](https://developer.apple.com/documentation/safari-developer-tools/installing-xcode-and-simulators) if you want to run the app on an iOS [simulator](https://developer.apple.com/documentation/safari-developer-tools/adding-additional-simulators)
- Optional: [Expo Go](https://apps.apple.com/us/app/expo-go/id982107779) if you want to run the app on your iOS device

### Deployment [TO DO]

Using your iOS device to visit this page **[TO DO: add hyperlink]**, or scan this QR code **[TO DO: add QR code]**

### Installation

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

## Preview and Features
<div style="display: flex; align-items: center">
<img src="./app/assets/preview.gif" width="200"/>

- **Climbing Problem Design**: Create and design climbing problems by adding circles to climbing wall images.
- **Problem Saving**: Save your created problems for future reference.
- **Problem Naming**: Give unique names to your climbing problems.
- **Difficulty Selection**: Assign difficulty levels to your problems.
- **Upcoming Features**: Stay tuned for the ability to upload pictures, edit created problems and other cool features!
</div>


## Contributors
Front End Team: 
- [Hollis Vohr](https://www.linkedin.com/in/hollisvohr/)
- [Jason Alberto](https://www.linkedin.com/in/jason-alberto/)
- [Jade Shi](https://www.linkedin.com/in/ziyu-jade-shi/)

Back End Team:
- [Blain Glasgow](https://www.linkedin.com/in/blaine-glasgow-134a9017a/)
- [Jesse Thomas](https://www.linkedin.com/in/jesse-g-thomas/)
- [Nick Tassinari](https://www.linkedin.com/in/tassinarinicholas/)