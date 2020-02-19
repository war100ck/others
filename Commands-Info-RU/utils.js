"use strict";

const fs = require("fs");
const journalPath = require("path").join(__dirname, "journal.json");







const initCtx = mod => {
  const _ = {};
  _.cmd = mod.command;
  _.send = mod.send.bind(mod);
  _.enabled = true;
  return _;
};

const makeHook = (_, ctx) => {
  const hook = _.hook;
  return function() { hook.apply(_, arguments).__self = ctx; };
};


module.exports = {
  initCtx,
  makeHook
};


