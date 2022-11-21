# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

### Requirements

* install yarn. You could install it via npm
```shell
npm install --global yarn
```

```
$ git clone git@github.com:bybit-exchange/docs-v2.git  # clone the repo
```

```
$ cd docs-v2
```

```
$ yarn  # install the dependencies
$ yarn add docusaurus-plugin-openapi-docs
$ yarn add docusaurus-theme-openapi-docs
```


Running the below script copies our custom js files into an untracked lib directory, which enables sending authenticated requests to the bybit API.

It should be run on the first installation and on subsequent yarn upgrades.
```
$ chmod +x setup.sh
$ ./setup.sh
```

### Local Development
As we have english and chinese in the application, so you need to start them separately.
```
$ yarn start  # start the local EN site
```
```
$ yarn start --locale zh  # start the local CN site
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

```shell
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```shell
yarn deploy
```


