# Frontend Mentor Challenges

A Mono-Repo setup using Lerna workspaces to showcase my submissions to challenges [Frontent Mentor](https://www.frontendmentor.io/) meanwhile experimenting with stuff I pick up along the way

The main idea is to manage the list of challenges from Frontend Mentor in challenges directory. Any code changes in master will trigger a workflow which will deploy the changes to the specific domains through Firebase Hosting

Challenges Completed so far,

* [QR Code Component](https://qr-component-fe.web.app/)
* [Advice Generator App](https://advice-generator-fe.web.app/)
* [Notifications Page](https://notifications-page-fe.web.app/)
* [Age Calculator App](https://age-calculator-fe.web.app/)

### Local Setup

```bash
# Install the dependencies
yarn

# Start the applications in localhost in the respective ports
# Configured in app specific webpack config
# QR Code Component -> localhost:3001
# Advice Generator App -> localhost:3002
# Notifications Page -> localhost:3003
# Age Calculator App -> localhost:3004

yarn start
```

### Adding a new application to the mono repo

1. Add a new target in Firebase Hosting from Firebase Console
2. Add a reference to the target in `.firebaserc`
3. Add a reference to the application build directory for that particular target in `firebase.json`
4. Trigger the CD by updating the changes to master on remote

### Feedback

Since this repository is for experimental purposes, I am open to any feedback or suggestion over the code or practices. Any feedback is appreciated, feel free to ping me on [LinkedIn](https://www.linkedin.com/in/smgsankar)
