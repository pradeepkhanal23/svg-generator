// importing dependency packages
const inquirer = require("inquirer");
const colors = require("colors");
const availableColors = require("../data/colors");
const generateLogo = require("../utils/generateLogo");

const fs = require("fs");

function validateColor(color) {
  // Check if the color a valid hexadecimal color using regular expression
  const hexColorRegex = /^#([0-9A-F]{3}){1,2}$/i;

  //also checking wether color is a string value from the available colors array
  if (hexColorRegex.test(color) || availableColors.includes(color)) {
    return true;
  } else if (color === "") {
    console.log(colors.bgRed(`${color} is requibgRed`));
    return false;
  } else {
    console.log(colors.bgRed(`\n${color} is not a valid color`));
    return false;
  }
}

function validateText(text) {
  if (!text) {
    console.log(colors.bgRed(`${text} is requibgRed`));
    return false;
  } else if (!isNaN(text)) {
    console.log(colors.bgRed(`\n${text} must be a text`));
    return false;
  } else if (text.length > 3) {
    console.log(colors.bgRed(`\n${text} must be of 3 characters`));
    return false;
  } else {
    return true;
  }
}

const questions = [
  {
    type: "input",
    message: colors.green("Enter the text to use in your SVG:"),
    name: "text",
    validate: validateText,
  },
  {
    type: "input",
    message: colors.green(
      "Enter the text color (either a string or a hex value):"
    ),
    name: "textColor",
    validate: validateColor,
  },
  {
    type: "list",
    message: colors.green("Choose the shape for your SVG:"),
    name: "shape",
    choices: ["Traingle", "Circle", "Square"],
  },
  {
    type: "input",
    message: colors.green(
      "Enter the color for your shape (either a string or a hex value):"
    ),
    name: "shapeColor",
    validate: validateColor,
  },
];

//function to write svg file
function writeToFile(createdFile, shapeName) {
  fs.writeFile(`./examples/${shapeName}.svg`, createdFile, (error) => {
    error
      ? console.log(colors.bgRed(error))
      : console.log(colors.bgGreen("Generated logo.svg !!"));
  });
}

function userInput() {
  inquirer.prompt(questions).then((answers) => {
    let logo = generateLogo(answers);
    writeToFile(logo, answers.shape);
    console.log(answers);
  });
}

module.exports = userInput;
