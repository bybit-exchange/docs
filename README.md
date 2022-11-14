# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

### Requirements

* <a href="https://nodejs.org/en/download/">Node.js</a> version 16.14 or above (which can be checked by running node -v). You can use nvm for managing multiple Node versions on a single machine installed.

```
$ git clone git@github.com:bybit-exchange/new-docs.git  # clone the repo
```
```
$ cd new-docs
```
```
$ npm install  # install the dependencies
```

### Local Development
As we have english and chinese in the application, so you need to start them separately.
```
$ npm start  # start the default en site
```
```
$ npm run start -- --locale zh  # start cn site
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Project Structure
```shell
├── docs   # put english mdx files here
│
├── i18n  
│   ├── en
│   │   ├── docusaurus-plugin-content-docs
│   │   │   └── current.json
│   │   └── docusaurus-theme-classic
│   │       └── navbar.json
│   └── zh
│       ├── docusaurus-plugin-content-docs
│       │   └── current   # maintain CN mdx files here
│       │   │   └── derivatives
│       │   └── current.json  # CN sidebar name
│       │
│       └── docusaurus-theme-classic
│           └── navbar.json   # CN navbar name
├── sidebars.js   # sort and organize side category
│ 
├── docusaurus.config.js  # basic configs, including logo, path, and navbar, etc
```

### Build

```

```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```

```

Not using SSH:

```

```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
