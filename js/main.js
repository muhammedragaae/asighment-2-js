quotes = [
    {
        quote : "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", 
        writer : "― Marilyn Monroe",
    },

    {
        quote : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", 
        writer : "― Albert Einstein",
    },

    {
        quote : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", 
        writer : "― Bernard M. Baruch",
    },

    {
        quote : "“You only live once, but if you do it right, once is enough.”", 
        writer : "― Mae West",
    },

    {
        quote : "“Be the change that you wish to see in the world.”", 
        writer : "― Mahatma Gandhi",
    },

    {
        quote : "“Live as if you were to die tomorrow. Learn as if you were to live forever.”", 
        writer : "― Mahatma Gandhi",
    },

    {
        quote : "“If you tell the truth, you don't have to remember anything.”", 
        writer : "― Mark Twain",
    },

    {
        quote : "“A friend is someone who knows all about you and still loves you.”", 
        writer : "― Elbert Hubbard",
    },

    {
        quote : "“It is our choices, Harry, that show what we truly are, far more than our abilities.”", 
        writer : "― J.K. Rowling, Harry Potter and the Chamber of Secrets",
    },

    {
        quote : "“The fool doth think he is wise, but the wise man knows himself to be a fool.”", 
        writer : "― William Shakespeare",
    },
]
// console.log(quotes.length);

let quoteRandomizer = 0;
let lastRandomizer ; 
function getRandomQuote() {
    quoteRandomizer = Math.floor(Math.random() * quotes.length);
    /* if (lastind == quoteRandomizer) {
        console.log(lastind == quoteRandomizer);
    } */

    while (lastRandomizer == quoteRandomizer) {
        quoteRandomizer = Math.floor(Math.random() * quotes.length);

    }
    lastRandomizer = quoteRandomizer
    
    document.getElementById("quote").innerHTML= quotes [quoteRandomizer].quote;
    document.getElementById("writer").innerHTML= quotes [quoteRandomizer].writer;
}





