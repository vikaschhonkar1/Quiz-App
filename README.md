Quiz App:
This Web App is created as an Assessement for PLAYPOWER Labs


Task Details:
Create a single-page application that displays a series of questions (assessment) and users are able to answer them. 
At the end of the assessment, a score is displayed based on user responses to each question.
Get a list of questions from a predefined JSON. You can choose the JSON structure that suits best to the task.


Technologies Used:
● HTML - For the web framework
● CSS - For styling components
● JavaScript - For magic!


Task Details:
● User Flow -
   ○ Show the start screen to the user. It should display the assessment title as defined in the input JSON.
   ○ On clicking the start button, the first question from the list should be display to the student.
   ○ Display the question - user should be able to select the answer and move to the NEXT or PREVIOUS question using buttons in the footer. Show the student’s progress by displaying the current question number and total questions in the footer.
   ○ After submitting the last question, it should show the total score and a congratulatory message on the next screen.
● Question Type
   ○ MCQ Single Correct - It should have MCQ-type questions with 4 options and only one correct answer.
● Validations should be implemented wherever required.


Live Demo:
The Web App is Deployed on Netlify using Manual Deploy Feauture
Live Link: https://quiz-app-vikas.netlify.app/


Steps to Run Project in Local Environment:
1. Download and extract the zip file in a folder.
2. Open folder using VSCode or any other editor of your choice
3. Use Live Server Extension of VSCode to open teh project.


Bonus Tasks:
● Deployed on Netlify
● Responsive Application suitable for every Screen Size Device
● At the end of test, user is able to see summary of his responses and the correct answer alongwith the EXPLAINATION.


JSON Structure used in Project:
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
      "explanation": "Explaination of Solution"
    }
  ]
}


Developed by: 
Vikas Chhonkar
Student (JCBUST YMCA, Faridabad)
Roll No.: 19001015065
