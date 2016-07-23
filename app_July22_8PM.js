$(document).ready(function () {
            var questionNum = 0;
            var userInput = 0;
            var numRight = 0;
            var indivQuestion = $('.question');

            function Question(prompt, answers, right) {
                this.prompt = prompt;
                this.answers = answers;
                this.right = right;
            }

            questions = [
        new Question(
                    "What does HTML stand for?", [
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language",
                "Hyper Text Markup Language",
            ],
                    3
        ),
        new Question(
                    "Who is making the Web standards?", [
                "Google",
                "Mozilla",
                "Microsoft",
                "The World Wide Web Consortium"
            ],
                    4
        ),
        new Question(
                    "Choose the correct HTML element for the largest heading:", [
                "<heading>",
                "<head>",
                "<h6>",
                "<h1>"
            ],
                    1

        ),
        new Question(
                    "What is the correct HTML element for inserting a line break?", [
                "<break>",
                "<lb>",
                "<br>"

            ],
                    3
        ),
        new Question(

                    "Choose the correct HTML element to define important text", [

            "<b>",
            "<important>",
            "<i>",
            "<strong>"
            ],
                    2
        )
    ];
