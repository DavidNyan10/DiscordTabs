const { Plugin } = require("powercord/entities");
const { React, ReactDOM } = require("powercord/webpack");
const TestHead = require("./Components/TestHead");

module.exports = class DiscordTabs extends Plugin {
	startPlugin() {
		// Thanks stackoverflow for this
		const dtContainer = document.createElement("div");
		const target = document.querySelector(".chat-2ZfjoI .title-31SJ6t");

		target.after(dtContainer);

		ReactDOM.render(TestHead, dtContainer);
	}
};
