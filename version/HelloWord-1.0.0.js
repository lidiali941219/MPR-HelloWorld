'use strict'

const Plugin = {
    "name": "HelloWorld",
    "version": "1.0.0",
    "depends": {
        "pluginLoader": "2.X.X"
    },
    "Events": ["messageCreate"],
    "Commands": [],
    "author": ["Lida Li"],
    "link": "https://github.com/ExpTechTW/MPR-TimeNow",
    "resources": ["AGPL-3.0"],
    "description": "HelloWorld"
}

const pluginLoader = require('../Core/pluginLoader')

async function messageCreate(client, message) {
    if (message.content == "$Hi"||message.content == "$hi") {
        message.reply(await pluginLoader.embed("Hello World!!!"))
    }
}

module.exports = {
    Plugin,
    messageCreate
}