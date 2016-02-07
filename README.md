# Landing Page

A generic landing page template with some neat features. It will reload the page
when you make changes to most of the files (routes don't work currently).

## Installation

```
npm install
npm start
```

## Deployment

```
npm run build
```

## Usage

Fork it and add you own markup, styles and routes.

### Routes

It uses express as the backend and routes are defined in the `src/server.js`
file, see the `src/routes` directory for example routes.

### Styles

Create your own scss files in the `src/styles` directory and import them in
the `src/styles/main.scss` file.

### Views

It uses handlebars as the templating system, see the `src/views` directory for
examples. Currently helpers and partials are defined in the `src/server.js`
file.
