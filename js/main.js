var qouteArray = [
    { 
        content:  'Be yourself; everyone else is already taken. '        ,
        author: 'Oscar Wilde'
      },
    { 
        content:    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."       ,
        author: 'Marilyn Monroe'
      },
    { 
        content:   " Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. "      ,
        author: 'Albert Einstein'
      },
    { 
        content:    'So many books, so little time.'       ,
        author:         'Frank Zappa'
      },
    { 
        content:   'A room without books is like a body without a soul. '     ,
        author:     'Marcus Tullius Cicero'
      },
    { 
        content:     "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."      ,
        author:     "Bernard M. Baruch"
      },
    { 
        content:     `You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.`      ,
        author:     'William W. Purkey'
      },
    { 
        content:    `You know you're in love when you can't fall asleep because reality is finally better than your dreams`       ,
        author:     `Dr. Seuss`
      },
    { 
        content:      `You only live once, but if you do it right, once is enough.`     ,
        author:     `Mae West`
      },
    { 
        content:     `Be the change that you wish to see in the world.`      ,
        author: `Mahatma Gandhi`
      },
    { 
        content:      `In three words I can sum up everything I've learned about life: it goes on`     ,
        author:     `Robert Frost`
      },
    { 
        content:   `If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.`        ,
        author:     `J.K. Rowling`
      },
    { 
        content:     `Do not walk in front of me… I may not follow
        Do not walk behind me… I may not lead
        Walk beside me… just be my friend`      ,
        author:     `Albert Camus`
      },
    { 
        content:    `If you tell the truth, you don't have to remember anything.`       ,
        author:       `Mark Twain`
      },
    { 
        content:    `Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .`        ,
        author:     `C.S. Lewis`
      },
    { 
        content:      `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.`     ,
        author:   `Maya Angelou`
      },
    { 
        content:      `A friend is someone who knows all about you and still loves you`      ,
        author:     `Elbert Hubbard`
      },
    { 
        content:    `To live is the rarest thing in the world. Most people exist, that is all.`       ,
        author:     `Oscar Wilde`
      },
    { 
        content:    `Live as if you were to die tomorrow. Learn as if you were to live forever.`       ,
        author:     `Mahatma Gandhi`
      },
    { 
        content:    `We accept the love we think we deserve.`       ,
        author:     `Stephen Chbosky`
      },
    { 
        content:    `To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.`       ,
        author:     `Ralph Waldo Emerson`
      },
    { 
        content:    `Insanity is doing the same thing, over and over again, but expecting different results.`       ,
        author:     `Narcotics Anonymous`
      },
    { 
        content:    `It is better to be hated for what you are than to be loved for what you are not.`       ,
        author:     `Andre Gide`
      },
    { 
        content:    `Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.`       ,
        author:     `H. Jackson Brown Jr.`
      }
]


var qouteContent = document.getElementById('quote')
var qouteAuthor = document.getElementById('author')

function makeQoute() {
    var Random = Math.random()*(qouteArray.length)
    var makeRandomNumber = Math.round(Random)
    
    qouteContent.innerHTML =  `"`+ qouteArray[makeRandomNumber].content +`"`
    qouteAuthor.innerHTML = `--`+ qouteArray[makeRandomNumber].author
    
}