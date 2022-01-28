# Setup flow

## Install tools for develop functions.

```bash
mkdir cloudfunctions
```

```bash
cd cloudfunctions
```

```bash
npm install -g npm@8.4.0
```

```bash
npm install -g firebase-tools
```

## Login Firebase account

```bash
firebase login
```

## Initialize Firebase

Reference [here](https://www.to-r.net/media/note-rss/) ...

```bash
firebase init
```

- Functions: Configure a Cloud Functions directory and its files
- Use an existing project
- (project)
- Javascript or Typescript
- y
- Y
- Firebase initialization complete!

## Setup modules for web-app.

```bash
sudo npm install -g yarn
```

```bash
yarn -v
```

```bash
cd functions
```

```bash
yarn add express request-promise-native cors
```

```bash
npm install request
```

## Execute following command after you have edited code.

<p class="warn">Raise your project plan to "Blaze" before you deploy app.</p>

```bash
cd ..
```

```bash
firebase deploy
```

```bash

```



