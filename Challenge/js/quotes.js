const quotes=[
    {
        quote:"Be yourself; everyone else is already taken.",
        author:"Oscar Wilde",
    },
    {
        quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author:"Marilyn Monroe",
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:"Albert Einstein",
    },
    {
        quote:"So many books, so little time.",
        author:"Frank Zappa",
    },
    {
        quote:"A room without books is like a body without a soul.",
        author:"Marcus Tullius Cicero",
    },
    {
        quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author:"Bernard M. Baruch",
    },
    {
        quote:"You only live once, but if you do it right, once is enough.",
        author:"Mae West",
    },
    {
        quote:"Be the change that you wish to see in the world.",
        author:"Mahatma Gandhi",
    },
    {
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        author:"Robert Frost",
    },
    {
        quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals",
        author:"J.K. Rowling, Harry Potter and the Goblet of Fire",
    },
];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

function random_quote(){
    const index=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[index].quote;
    author.innerText=quotes[index].author;
}

random_quote();