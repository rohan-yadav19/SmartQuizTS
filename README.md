# SmartQuizTS

A dynamic and interactive quiz system built with TypeScript. This project lets users test their knowledge on various topics with multiple-choice questions, real-time scoring, and smooth navigation.

## Features

- Interactive command-line interface using Inquirer.js
- Multiple-choice questions with TypeScript-specific content
- Real-time score tracking
- Immediate feedback for each answer
- Clean and user-friendly interface

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/rohan-yadav19/SmartQuizTS.git
cd SmartQuizTS
```

2. Install dependencies:
```bash
npm install
```

## Usage

To start the quiz, run:
```bash
npx ts-node index.ts
```

The quiz will present you with 5 multiple-choice questions about TypeScript. After answering all questions, you'll receive your final score.

## Project Structure

- `index.ts` - Main application file containing quiz logic
- `package.json` - Project configuration and dependencies
- `tsconfig.json` - TypeScript configuration

## Dependencies

- `inquirer` - For interactive command-line interface
- `nodemon` - For development and auto-reloading
- `@types/node` - TypeScript type definitions for Node.js

## License

ISC

## Author

Rohan Yadav

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
