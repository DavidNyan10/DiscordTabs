const { React } = require("powercord/webpack");

module.exports = class TestHead extends React.Component {
	render() {
		console.log("yes");
		return <h1>Hello, World!</h1>;
	}
};
