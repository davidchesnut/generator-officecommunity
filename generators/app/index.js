var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname, // Default to current folder name
      },
      {
        type: "checkbox",
        name: "addinfeatures",
        message: "Select features to add to your add-in",
        choices: ["Task pane","Custom functions","Content pane"]
      },
    ]);

    this.log("app name", answers.name);
    this.log("cool features", answers.addinfeatures);
  }

  method1() {
    this.log("method 1 just ran");
  }

  method2() {
    this.log("method 2 just ran");
  }
};
