const data = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      options: [
        "<scripting>",
        "<javascript>",
        "<script>",
        "<js>",
      ],
      answer: "<script>",
    },
    {
      question: "How do we declare a JavaScript constant?",
      options: ["const", "let", "var", "define"],
      answer: "const",
    },
    {
      question: "What is the correct JavaScript syntax to change the content of the following HTML element: <p id='demo'>This is a demonstration.</p>",
      options: [
        "#demo.innerHTML = 'Hello World!'", 
        "document.getElementById('demo').innerHTML = 'Hello World!'", 
        "document.getElementByName('p').innerHTML = 'Hello World!'", 
        "document.getElement('p').innerHTML = 'Hello World!'"],
      answer: "document.getElementById('demo').innerHTML = 'Hello World!'",
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: [
        "alert('Hello World')", 
        "alertBox('Hello World')", 
        "msgBox('Hello World')", 
        "msg('Hello World')"],
      answer: "alert('Hello World')",
    },
    {
      question:
        "How do you create a function in JavaScript?",
      options: [
        "function = myFunction()", 
        "function:myFunction()", 
        "function: myfunction()", 
        "function myFunction()"],
      answer: "function = myFunction()",
    },
    {
      question:
        "How do you call a function named 'myFunction'?",
      options: [
        "call myFunction()", 
        "call function myFunction()", 
        "myFunction", 
        "pleaseCome myFunction()"],
      answer: "myFunction()",
    },
    {
      question:
        "How to write an IF statement in JavaScript?",
      options: [
        "if i = 5", 
        "if i == 5 then", 
        "if (i = 5) then", 
        "if (i === 5)"],
      answer: "if (i === 5)",
    },
    {
      question:
        "How does a FOR loop start?",
      options: [
        "for (let i = 0; i <= 5; i++)", 
        "for (i <= 5, i++)", 
        "for (i = 0; i >= 5)", 
        "for (let i = 0, i <= 5, i++)"],
      answer: "for (let i = 0; i <= 5; i++)",
    },
    {
      question:
        "How can you add a comment in a JavaScript?",
      options: [
        "'This is a comment'", 
        "*This is a comment*", 
        "//This is a comment", 
        "<!--This is a Comment-->"],
      answer: "//This is a comment",
    },
    {
      question:
        "What is the correct way to write a JavaScript array?",
      options: [
        "var colors = 1 = ('red'), 2 = ('green'), 1 = ('blue');", 
        "var colors = 'red', 'green', 'blue';", 
        "var colors = {'red', 'green', 'blue'}", 
        "var colors = ['red', 'green', 'blue']"],
      answer: "var colors = ['red', 'green', 'blue']",
    },
  ];
  
  export default data;