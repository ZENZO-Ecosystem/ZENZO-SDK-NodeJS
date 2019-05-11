# ZENZO Node.js SDK

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

**Notice:** This module and API is in early development and may change in the future.

[ZENZO Arcade Official Website](https://arcade.zenzo.io/)

[Raw API Endpoint Documentation](https://github.com/ZENZO-Ecosystem/Guides/blob/master/Developer-API-Guide.md)

# Getting Started

Install the ZENZO NPM Package with:
```
npm i zenzo-sdk-nodejs
```
Also, require the module in your Node.js application with:
```js
const ZENZO = require("zenzo-sdk-nodejs")
```

# Using the API

## Authentication

To authenticate with the ZENZO SDK, visit the [Arcade Dashboard](https://arcade.zenzo.io/account), hit the hidden "Developer Mode" button in the bottom-right of the page and copy your API key under your Deposit box. Throw it into the authenticator method, like the following:

```js
ZENZO.auth("api-key")
```

# Arcade SDK

The Arcade SDK is a partition of the ZENZO SDK that interacts with the Arcade's main service, this can be used for getting or manipulating account-related data, platform statistics, uptime, and more.

## Ping

```js
// Ping the Arcade, a response of "Pong!" will come back if the Arcade is alive and well
ZENZO.ping().then(res => {
  console.log(res) // Pong!
})
```

## Regen

```js
ZENZO.regen().then(res => {
  console.log(res.content) // New API Key
})
```

# Forge SDK

The Forge SDK is a partition of the ZENZO SDK that interacts with the Arcade Forge, a service for providing multi-platform, secure and valuable items and content within games. Using the Forge, you can create in-game items that are worth real monetary value, as all Forge items are backed by a specified amount of ZNZ, locked away until the item is either Smelted or Crafted.

The Forge can, for example:

- **Allow gamers to create and introduce truly custom in-game items.**

- **Allow gamers to 'own' their items entirely and permanently.**

- **Allow game developers to create a network of games where the items within them can be transferred between them, effortlessly.**

## List

An endpoint that gets an array containing all items owned by the API key's account.

```js
ZENZO.forgelist().then(res => {
  console.log(res.content) // JSON array of items
})
```

## Create

An endpoint that creates a Forge item with a specified value, name and image. The value of the item will be deducted from the API's account balance. If it cannot afford to create an item, an error will be thrown.

```js
ZENZO.forgecreate(10, "ZNZ Kitty", "https://cdn.crowdfundinsider.com/wp-content/uploads/2018/04/CryptoKittie-mascot-Lola.png").then(res => {
  console.log(res.content) // JSON object of the item
})
```

## Smelt

An endpoint that smelts (destroys) a Forge item, the value of the item will be converted back into blockchain ZNZ and added to the API's account balance.

```js
ZENZO.forgesmelt("item-id").then(res => {
  console.log(res.message) // Human-readable response
})
```

## Craft

An endpoint that crafts a new Forge item out of two older Forge items. The new item will have the combined value of both previous items, while the Name and Image can be customized again.

```js
ZENZO.forgecraft("item_one-id", "item_two-id", "crafted-item-name", "crafted-item-image-url").then(res => {
  console.log(res.message) // Human-readable response
  console.log(res.content) // JSON object of the item
})
```

## Transfers

An endpoint that transfers an item from the API's account to another Arcade account.

```js
ZENZO.forgetransfer("item-id", "user-id").then(res => {
  console.log(res.message) // Human-readable response
})
```

Example Node.js files can be found in the `/examples` directory within the repository.
