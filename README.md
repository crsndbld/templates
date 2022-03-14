# templates

# Requirement
* git
* node.js
* next.js

# Installation
```bash
yarn create next-app --typescript
yarn add --dev --exact prettier
yarn add --dev eslint-config-prettier
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
yarn add relay-runtime react-relay
yarn add --dev relay-compiler graphql babel-plugin-relay @types/react-relay

npm install -g graphqurl
gq https://new-macaque-58.hasura.app/v1beta1/relay -H "X-Hasura-Admin-Secret: hkZzsMJnmuzi70gpsb5vpeyPkNPYj1hqXyuoBLDMwCmbagKUg64yb0KnOX4twaKA" --introspect > schema.graphql

```

# Usage
```bash
cd next-app
yarn dev

```

# Note


# Author

# License