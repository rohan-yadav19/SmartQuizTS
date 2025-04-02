import inquirer from "inquirer";

async function runQuiz() {
  const quiz = await inquirer.prompt([
    {
      name: "question_1",
      type: "list",
      message:
        "Q1. What is the correct way to check if two values are not equal in TypeScript?",
      choices: ["a==b", "a===c", "a=b", "a!==b"],
    },
    {
      name: "question_2",
      type: "list",
      message:
        "Q2. Which of the following characters is commonly allowed in variable names in TypeScript?",
      choices: ["$", "@", "#", "&"],
    },
    {
      name: "question_3",
      type: "list",
      message:
        "Q3. Which operator is commonly used for string concatenation in TypeScript?",
      choices: ["+", "-", "*", "/"],
    },
    {
      name: "question_4",
      type: "list",
      message:
        "Q4. In TypeScript, which symbol is commonly used to terminate a statement?",
      choices: [".", ",", ":", ";"],
    },
    {
      name: "question_5",
      type: "list",
      message:
        "Q5. Which method of inquirer.js is used to start the prompt interface and receive user input?",
      choices: ["start()", "prompt()", "init()", "run()"],
    },
  ]);

  let score = 0;
  if (quiz.question_1 === "a!==b") {
    console.log("1. Correct");
    score++;
  } else console.log("1. Incorrect!");

  if (quiz.question_2 === "$") {
    console.log("2. Correct");
    score++;
  } else console.log("2. Incorrect!");

  if (quiz.question_3 === "+") {
    console.log("3. Correct");
    score++;
  } else console.log("3. Incorrect!");

  if (quiz.question_4 === ";") {
    console.log("4. Correct");
    score++;
  } else console.log("4. Incorrect!");

  if (quiz.question_5 === "prompt()") {
    console.log("5. Correct");
    score++;
  } else console.log("5. Incorrect!");

  console.log(`Score: ${score}`);
}

// Call the async function
runQuiz();
