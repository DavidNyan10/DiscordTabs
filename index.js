const { Plugin } = require("powercord/entities");
const { getModule, React } = require("powercord/webpack");
const { inject, uninject } = require("powercord/injector");

module.exports = class DiscordTabs extends Plugin {
	startPlugin() {
		loadIcons();

		this.loadStylesheet("style.css");

		inject("dt-injection");
	}

	pluginWillUnload() {
		uninject("dt-injection");
	}
};
