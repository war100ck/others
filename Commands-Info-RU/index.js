"use strict";
const {
    initCtx,
    makeHook,
} = require("./utils");

const CommandsHelperOptions = require("./commands");
const webui = require("./ui");

function CommandsHelper(_) {
    const ctx = initCtx(_);
    const hook = makeHook(_, ctx);
    webui(_, ctx);
    _.command.add("com", CommandsHelperOptions, ctx);
}

module.exports = CommandsHelper;