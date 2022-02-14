# Setup flow

## if you have installed tools to macos.

There is a [reference site](https://d.sonicjam.co.jp/post/52541343939).

### Uninstall Node.js with this command.

```bash
lsbom -f -l -s -pf /var/db/receipts/org.nodejs.pkg.bom \
| while read i; do
  sudo rm /usr/local/${i}
done
sudo rm -rf /usr/local/lib/node \
     /usr/local/lib/node_modules \
     /var/db/receipts/org.nodejs.*
```

### Uninstall npm with this command.

```bash
sudo rm -rf ~/.npm
```

### Exit and Quit Terminal.

exit and quit.

### Delete these following files in "/usr/local/bin" directory.

```bash
node
npm
npx
yarn
yarnpkg
```

## Install tools for develop functions.

Install Node.js Package [here](https://nodejs.org/ja/).

Open terminal.

```bash
mkdir cloudfunctions
```

```bash
cd cloudfunctions
```

Check firebase exists or not.

```bash
firebase --version
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

## If you clone repository, you must fix following files.

- index.js
- .eslintrc.js

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

⚠️ Raise your project plan to "Blaze" before you deploy app.

```bash
cd ..
```

```bash
firebase deploy
```

```bash

```
