"use strict";

const {
  CommandsHelperPath,
} = require("./utils");
const { push } = Array.prototype;
const tryRequire = () => {
  delete require.cache[require.resolve(CommandsHelperPath)];
  try { return require(CommandsHelperPath); }
  catch(_) { return []; }
};

function CommandsHelperOptions(...args) {
  const argLen = args.length;
  let tmp;
  if (!argLen) {

    return this.cmd.message(`CommandsHelper ${(this.enabled = !this.enabled) ? "Вкл" : "Откл"}ючен`);
  }
  else switch((tmp = args[0]) && tmp.toLowerCase()) {
   case "ui":
   case "webui":
    if (this.webui) {
      this.webui.open();
    }
    else {
      this.cmd.message(`<font color="#ff0000">WebUI dependency is not present.</font>`);
    }
    return;
  }


}

module.exports = CommandsHelperOptions;