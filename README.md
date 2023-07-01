# Quiz App

This is a simple quiz website.

## Task Details

Create a single-page application that displays a series of questions and allows users to answer them. At the end of the assessment, a score is displayed based on the user's responses to each question. The list of questions is obtained from a predefined JSON.

### Technologies Used

- HTML: For the web framework.
- CSS: For styling components.
- JavaScript: For the application's functionality.

### User Flow

- Show the start screen to the user, displaying the assessment title defined in the input JSON.
- When the user clicks the start button, display the first question from the list.
- Display the question and allow the user to select an answer. Provide buttons in the footer to navigate to the next or previous question. Display the current question number and the total number of questions in the footer to show the student's progress.
- After submitting the last question, show the total score and a congratulatory message on the next screen.

### Question Type

- MCQ Single Correct: Multiple-choice questions with four options and only one correct answer.

### Validations

Implement validations wherever required.

### Bonus Tasks

- Deploy the app on Netlify.
- Make the application responsive to fit every screen size device.
- At the end of the test, allow the user to see a summary of their responses, along with the correct answer and an explanation.

## JSON Structure Used in Project

```json
{
  "heading": "Test Heading",
  "mcqs": [
    {
      "question": "Question Statement",
      "image": "",
      "choices": [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
      ],
      "correct": "Correct Option Value",
      "explanation": "Explanation of Solution"
    }
  ]
}
```

## Live Demo

The web app is deployed on Netlify using the manual deploy feature. You can access the live version using the following link:

[Quiz App Live Demo](https://quiz-app-vikas.netlify.app/)

## Steps to Run the Project in a Local Environment

1. Download and extract the zip file into a folder.
2. Open the folder using VSCode or any other editor of your choice.
3. Use the Live Server extension of VSCode or any web server of your choice to open the project.

## Developed by

Vikas Chhonkar  
