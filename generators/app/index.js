var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "What do you want to name your add-in? (My Office Add-in)",
        default: "My Office Add-in",
      },
      {
        type: "list",
        name: "host",
        message: "Which Office client application would you like to support?",
        choices: ["Excel","Onenote","Outlook","Powerpoint","Project","Word"]
      },
      {
        type: "list",
        name: "language",
        message: "Select the programming language for your add-in.",
        choices: ["TypeScript","JavaScript"]
      },
      {
        type: "checkbox",
        name: "addinfeatures",
        message: "Select features to add to your add-in",
        choices: ["Task pane","Custom functions","Content pane"]
      },
      {
        type: "list",
        name: "framework",
        message: "Select framework to use.",
        choices: ["None","JQuery","React"]
      },
    ]);

    this.log("app name", answers.name);
    this.log("host", answers.host);
    this.log("language", answers.language);
    this.log("addinfeatures", answers.addinfeatures);
    this.log("framework", answers.framework);
  }

  writeafile() {
    this.log("method 1 just ran");
    //this.log("answer was",this.answers.framework);
    this.fs.copyTpl(
      this.templatePath('manifests/excel-basic.xml'),
      this.destinationPath('public/excel-basic.xml'),
      { title: 'Templating with Yeoman' }
    );
  }

  method2() {
    this.log("method 2 just ran");
  }
};
