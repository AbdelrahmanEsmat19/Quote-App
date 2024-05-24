var quotes = [
    {
        quote: '“Be yourself; everyone else is already taken.”',
        author: 'By : Oscar Wilde'
    },
    {
        quote: '“So many books, so little time.”',
        author: 'By : Frank Zappa'
    },
    {
        quote: '“A room without books is like a body without a soul.”',
        author: 'By : Marcus Tullius Cicero'
    },
    {
        quote: '“You only live once, but if you do it right, once is enough.”',
        author: 'By : Mae West'
    },

    {
        quote: '“Be the change that you wish to see in the world.”',
        author: 'By : Mahatma Gandhi'
    },
];


var oldQuoteIndex;


function generateQuote() {

    var quoteIndex = Math.floor(Math.random() * quotes.length); 

    while (quoteIndex == oldQuoteIndex) {

        quoteIndex = Math.floor(Math.random() * quotes.length);

    }
    
    oldQuoteIndex = quoteIndex;
    document.getElementById("quoteBox").classList.replace('opacity-0' , "opacity-100")
    document.getElementById("quote").innerHTML = quotes[quoteIndex].quote;
    document.getElementById("author").innerHTML = quotes[quoteIndex].author;
    


}

