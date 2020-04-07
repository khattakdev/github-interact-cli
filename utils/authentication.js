const fs = require("fs");
const io = require("console-read-write");
const auth = require("./auth");
const { green, red, yellow } = require("chalk");

module.exports = async () => {
  if (auth.Authorization === "") {
    io.write(
      red(
        "\n> To use the CLI without any issue, first enter your GitHub access token. THIS IS ONE TIME THING.\n"
      )
    );
    io.write(
      green(
        "> If you do not know how to create one, check -> https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line\n"
      )
    );

    io.write(yellow("Token: "));
    const token = await io.read();

    const data = `module.exports = {
		Authorization: "Token ${token}",
	  }`;

    fs.writeFile("./utils/auth.js", data, (err) => {});
  }
};