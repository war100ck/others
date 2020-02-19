"use strict";
const { join } = require("path");
const { existsSync } = require("fs");
const {
  queueSave,
  customLocations
} = require("./utils");
const pathname = "/CommandsHelper/";
const getId = (() => { let id = 0; return () => id++; })();
const paramRegex = /(\d*)(\D*)/;



function open() {
  this.ui.open(`${pathname}${this.id}/`);
}

function webui(mod, ctx) {
  const path = join(__dirname, "..", "ui", "index.js");
  if (!existsSync(path)) return;
  const UI = require(path);
  const ui = UI(mod);
  const id = getId();

  ui.use(`${pathname}${id}/`, UI.static(join(__dirname, "ui")));

  ctx.webui = { ui, id, open };
}

module.exports = webui;


