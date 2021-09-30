<h1 align="center">
  Firebase Cloud Functions
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/GabrielCordeiroDev/firebase-cloud-functions">

  <a href="https://www.linkedin.com/in/dev-gabriel-cordeiro/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Gabriel%20Cordeiro-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/GabrielCordeiroDev/firebase-cloud-functions">
  
  <img alt="GitHub" src="https://img.shields.io/github/license/GabrielCordeiroDev/firebase-cloud-functions">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=Firebase%20Cloud%20Functions&uri=https%3A%2F%2Fraw.githubusercontent.com%2FGabrielCordeiroDev%2Ffirebase-cloud-functions%2Fmain%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 👨🏻‍💻 About the project

This is a Serverless API developed with Firebase Cloud Functions for learning purposes.

## 🚀 Technologies

Technologies that I used to develop this API:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/)
- [Express](https://expressjs.com/pt-br/)
- [Eslint](https://eslint.org/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button.

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Firebase CLI](https://firebase.google.com/docs/cli)

> Obs.: You will need to create a [Firebase](https://firebase.google.com/) account and also a project to make Cloud Functions and Firestore Database available.

**Clone the project and access the folder**

```bash
$ git clone https://github.com/GabrielCordeiroDev/firebase-cloud-functions
$ cd firebase-cloud-functions/functions
```

**Environment Setting**

```bash
$ firebase login
$ firebase functions:config:set private.key="" project.id="" client.email=""
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables
$ cp .env.example .env
```

**Deploy**

```
$ yarn deploy
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/GabrielCordeiroDev/firebase-cloud-functions/blob/main/LICENSE) file for details.
