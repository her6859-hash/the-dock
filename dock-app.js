// The Dock - JavaScript Application
// Audio-ready version with proper file paths

// EXPANDED CONTENT DATABASES
const quotesDB = {
    gratitude: [
        { text: "Gratitude turns what we have into enough.", author: "Aesop" },
        { text: "The root of joy is gratefulness.", author: "David Steindl-Rast" },
        { text: "When I started counting my blessings, my whole life turned around.", author: "Willie Nelson" },
        { text: "Enjoy the little things, for one day you may look back and realize they were the big things.", author: "Robert Brault" },
        { text: "This is a wonderful day. I have never seen this one before.", author: "Maya Angelou" },
        { text: "Wear gratitude like a cloak and it will feed every corner of your life.", author: "Rumi" },
        { text: "Gratitude is not only the greatest of virtues, but the parent of all others.", author: "Cicero" },
        { text: "Acknowledging the good that you already have in your life is the foundation for all abundance.", author: "Eckhart Tolle" },
        { text: "Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.", author: "Marcel Proust" },
        { text: "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.", author: "Melody Beattie" },
        { text: "When you are grateful, fear disappears and abundance appears.", author: "Tony Robbins" },
        { text: "Piglet noticed that even though he had a very small heart, it could hold a rather large amount of gratitude.", author: "A.A. Milne" },
        { text: "The struggle ends when gratitude begins.", author: "Neale Donald Walsch" },
        { text: "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.", author: "G.K. Chesterton" },
        { text: "Gratitude is a powerful catalyst for happiness. It is the spark that lights a fire of joy in your soul.", author: "Amy Collette" },
        { text: "Trade your expectation for appreciation and the world changes instantly.", author: "Tony Robbins" },
        { text: "Reflect upon your present blessings, of which every man has plenty.", author: "Charles Dickens" },
        { text: "The more grateful I am, the more beauty I see.", author: "Mary Davis" },
        { text: "Feeling gratitude and not expressing it is like wrapping a present and not giving it.", author: "William Arthur Ward" },
        { text: "Sometimes the smallest things take up the most room in your heart.", author: "Winnie the Pooh" }
    ],
    humor: [
        { text: "I am not superstitious, but I am a little stitious.", author: "Michael Scott" },
        { text: "I used to think I was indecisive, but now I am not so sure.", author: "Unknown" },
        { text: "Behind every great man is a woman rolling her eyes.", author: "Jim Carrey" },
        { text: "I love deadlines. I like the whooshing sound they make as they fly by.", author: "Douglas Adams" },
        { text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
        { text: "Age is of no importance unless you are a cheese.", author: "Billie Burke" },
        { text: "I'm not lazy. I'm just on energy-saving mode.", author: "Unknown" },
        { text: "The road to success is dotted with many tempting parking spaces.", author: "Will Rogers" },
        { text: "I'm not great at the advice. Can I interest you in a sarcastic comment?", author: "Chandler Bing" },
        { text: "The elevator to success is out of order. You will have to use the stairs, one step at a time.", author: "Joe Girard" },
        { text: "I have not failed. I have just found 10,000 ways that won't work.", author: "Thomas Edison" },
        { text: "Common sense is like deodorant. The people who need it most never use it.", author: "Unknown" },
        { text: "Before you marry a person, you should first make them use a computer with slow internet to see who they really are.", author: "Will Ferrell" },
        { text: "If at first you don't succeed, then skydiving definitely isn't for you.", author: "Steven Wright" },
        { text: "The problem with troubleshooting is that trouble shoots back.", author: "Unknown" },
        { text: "I'm at that age where my back goes out more than I do.", author: "Unknown" },
        { text: "My room is not messy. It is an obstacle course designed to keep me fit.", author: "Unknown" },
        { text: "I'm not arguing. I'm just explaining why I'm right.", author: "Unknown" },
        { text: "Light travels faster than sound. This is why some people appear bright until you hear them speak.", author: "Alan Dundes" },
        { text: "The only mystery in life is why the kamikaze pilots wore helmets.", author: "Al McGuire" }
    ],
    stoicism: [
        { text: "You have power over your mind, not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
        { text: "We suffer more often in imagination than in reality.", author: "Seneca" },
        { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
        { text: "The impediment to action advances action. What stands in the way becomes the way.", author: "Marcus Aurelius" },
        { text: "It is not what happens to you, but how you react to it that matters.", author: "Epictetus" },
        { text: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.", author: "Marcus Aurelius" },
        { text: "The best revenge is not to be like your enemy.", author: "Marcus Aurelius" },
        { text: "Waste no more time arguing what a good man should be. Be one.", author: "Marcus Aurelius" },
        { text: "If it is not right, do not do it. If it is not true, do not say it.", author: "Marcus Aurelius" },
        { text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", author: "Marcus Aurelius" },
        { text: "He who fears death will never do anything worth of a man who is alive.", author: "Seneca" },
        { text: "Luck is what happens when preparation meets opportunity.", author: "Seneca" },
        { text: "It's not that we have a short time to live, but that we waste much of it.", author: "Seneca" },
        { text: "The whole future lies in uncertainty: live immediately.", author: "Seneca" },
        { text: "Wealth consists not in having great possessions, but in having few wants.", author: "Epictetus" },
        { text: "First say to yourself what you would be; and then do what you have to do.", author: "Epictetus" },
        { text: "Don't explain your philosophy. Embody it.", author: "Epictetus" },
        { text: "It's not what happens to you, but how you react that matters.", author: "Epictetus" },
        { text: "No man is free who is not master of himself.", author: "Epictetus" },
        { text: "If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, 'He was ignorant of my other faults, else he would not have mentioned these alone.'", author: "Epictetus" },
        { text: "When you arise in the morning, think of what a precious privilege it is to be alive.", author: "Marcus Aurelius" },
        { text: "Accept the things to which fate binds you, and love the people with whom fate brings you together.", author: "Marcus Aurelius" },
        { text: "The soul becomes dyed with the color of its thoughts.", author: "Marcus Aurelius" },
        { text: "Confine yourself to the present.", author: "Marcus Aurelius" },
        { text: "How much more grievous are the consequences of anger than the causes of it.", author: "Marcus Aurelius" },
        { text: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.", author: "Marcus Aurelius" },
        { text: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it.", author: "Marcus Aurelius" },
        { text: "The mind that is anxious about future events is miserable.", author: "Seneca" },
        { text: "True happiness is to enjoy the present, without anxious dependence upon the future.", author: "Seneca" },
        { text: "Begin at once to live, and count each separate day as a separate life.", author: "Seneca" },
        { text: "Difficulties strengthen the mind, as labor does the body.", author: "Seneca" },
        { text: "Life is very short and anxious for those who forget the past, neglect the present, and fear the future.", author: "Seneca" },
        { text: "Associate with people who are likely to improve you.", author: "Seneca" },
        { text: "He suffers more than necessary, who suffers before it is necessary.", author: "Seneca" },
        { text: "There is no person so severely punished, as those who subject themselves to the whip of their own remorse.", author: "Seneca" },
        { text: "Make the best use of what is in your power, and take the rest as it happens.", author: "Epictetus" },
        { text: "Circumstances don't make the man, they only reveal him to himself.", author: "Epictetus" },
        { text: "Know, first, who you are, and then adorn yourself accordingly.", author: "Epictetus" },
        { text: "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.", author: "Epictetus" },
        { text: "Only the educated are free.", author: "Epictetus" }
    ],
    fatherhood: [
        { text: "A truly rich man is one whose children run into his arms when his hands are empty.", author: "Unknown" },
        { text: "The greatest mark of a father is how he treats his children when no one is looking.", author: "Dan Pearce" },
        { text: "My father gave me the greatest gift anyone could give another person: he believed in me.", author: "Jim Valvano" },
        { text: "He did not tell me how to live; he lived, and let me watch him do it.", author: "Clarence Budington Kelland" },
        { text: "Any man can be a father, but it takes someone special to be a dad.", author: "Anne Geddes" },
        { text: "A father is neither an anchor to hold us back nor a sail to take us there, but a guiding light whose love shows us the way.", author: "Unknown" },
        { text: "The power of a dad in a child's life is unmatched.", author: "Justin Ricklefs" },
        { text: "A good father is one of the most unsung, unpraised, unnoticed, and yet one of the most valuable assets in our society.", author: "Billy Graham" },
        { text: "Fathers, be your daughter's first love and your son's first hero.", author: "Unknown" },
        { text: "One father is more than a hundred schoolmasters.", author: "George Herbert" },
        { text: "It is not flesh and blood, but the heart which makes us fathers and sons.", author: "Friedrich Schiller" },
        { text: "A father's smile has been known to light up a child's entire day.", author: "Susan Gale" },
        { text: "The quality of a father can be seen in the goals, dreams, and aspirations he sets not only for himself, but for his family.", author: "Reed Markham" },
        { text: "A father doesn't tell you that he loves you. He shows you.", author: "Dimitri the Stoneheart" },
        { text: "My father didn't do anything unusual. He only did what dads are supposed to do—be there.", author: "Max Lucado" },
        { text: "When my father didn't have my hand, he had my back.", author: "Linda Poindexter" },
        { text: "A father carries pictures where his money used to be.", author: "Steve Martin" },
        { text: "The older I get, the smarter my father seems to get.", author: "Tim Russert" },
        { text: "I cannot think of any need in childhood as strong as the need for a father's protection.", author: "Sigmund Freud" },
        { text: "Dads are most ordinary men turned by love into heroes, adventurers, storytellers, and singers of song.", author: "Pam Brown" },
        { text: "A father is someone you look up to no matter how tall you grow.", author: "Unknown" },
        { text: "The heart of a father is the masterpiece of nature.", author: "Antoine François Prévost" },
        { text: "Dad: A son's first hero, a daughter's first love.", author: "Unknown" },
        { text: "It's only when you grow up and step back from him—or leave him for your own home—it's only then that you can measure his greatness and fully appreciate it.", author: "Margaret Truman" },
        { text: "By the time a man realizes that maybe his father was right, he usually has a son who thinks he's wrong.", author: "Charles Wadsworth" }
    ],
    grief: [
        { text: "Grief is the price we pay for love.", author: "Queen Elizabeth II" },
        { text: "What we have once enjoyed we can never lose. All that we love deeply becomes a part of us.", author: "Helen Keller" },
        { text: "Those we love don't go away, they walk beside us every day.", author: "Unknown" },
        { text: "How lucky I am to have something that makes saying goodbye so hard.", author: "A.A. Milne" },
        { text: "Grief, I have learned, is really just love. It is all the love you want to give but cannot.", author: "Jamie Anderson" },
        { text: "Death ends a life, not a relationship.", author: "Mitch Albom" },
        { text: "The reality is that you will grieve forever. You will not 'get over' the loss of a loved one; you will learn to live with it.", author: "Elisabeth Kübler-Ross" },
        { text: "Although it's difficult today to see beyond the sorrow, may looking back in memory help comfort you tomorrow.", author: "Unknown" },
        { text: "When someone you love becomes a memory, the memory becomes a treasure.", author: "Unknown" },
        { text: "Unable are the loved to die, for love is immortality.", author: "Emily Dickinson" },
        { text: "The song is ended, but the melody lingers on.", author: "Irving Berlin" },
        { text: "Perhaps they are not stars in the sky, but rather openings where our loved ones shine down to let us know they are happy.", author: "Eskimo Legend" },
        { text: "What the heart has once owned and had, it shall never lose.", author: "Henry Ward Beecher" },
        { text: "They that love beyond the world cannot be separated by it. Death cannot kill what never dies.", author: "William Penn" },
        { text: "Tears are the silent language of grief.", author: "Voltaire" },
        { text: "Only people who are capable of loving strongly can also suffer great sorrow, but this same necessity of loving serves to counteract their grief and heals them.", author: "Leo Tolstoy" },
        { text: "There is a sacredness in tears. They are not a mark of weakness, but of power.", author: "Washington Irving" },
        { text: "No one ever told me that grief felt so like fear.", author: "C.S. Lewis" },
        { text: "Grief is like the ocean; it comes in waves, ebbing and flowing. Sometimes the water is calm, and sometimes it is overwhelming.", author: "Vicki Harrison" },
        { text: "The pain of grief is just as much part of life as the joy of love.", author: "Colin Murray Parkes" },
        { text: "The deeper that sorrow carves into your being, the more joy you can contain.", author: "Kahlil Gibran" },
        { text: "We must embrace pain and burn it as fuel for our journey.", author: "Kenji Miyazawa" },
        { text: "Give sorrow words; the grief that does not speak whispers the o'er-fraught heart and bids it break.", author: "William Shakespeare" },
        { text: "You will lose someone you can't live without, and your heart will be badly broken, and the bad news is that you never completely get over the loss of your beloved.", author: "Anne Lamott" },
        { text: "Life is eternal, and love is immortal, and death is only a horizon.", author: "Rossiter Worthington Raymond" },
        { text: "The risk of love is loss, and the price of loss is grief. But the pain of grief is only a shadow when compared with the pain of never risking love.", author: "Hilary Stanton Zunin" },
        { text: "Grief never ends, but it changes. It is a passage, not a place to stay.", author: "Holly Prigerson" },
        { text: "Your grief path is yours alone, and no one else can walk it, and no one else can understand it.", author: "Terri Irwin" },
        { text: "There are no goodbyes for us. Wherever you are, you will always be in my heart.", author: "Mahatma Gandhi" },
        { text: "Memory is a way of holding on to the things you love, the things you are, the things you never want to lose.", author: "Kevin Arnold" }
    ],
    peace: [
        { text: "Peace comes from within. Do not seek it without.", author: "Buddha" },
        { text: "If you want to make peace with your enemy, you have to work with your enemy. Then he becomes your partner.", author: "Nelson Mandela" },
        { text: "Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.", author: "Ronald Reagan" },
        { text: "You will find peace not by trying to escape your problems, but by confronting them courageously.", author: "J. Donald Walters" },
        { text: "Nobody can bring you peace but yourself.", author: "Ralph Waldo Emerson" },
        { text: "Inner peace begins the moment you choose not to allow another person or event to control your emotions.", author: "Pema Chödrön" },
        { text: "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be.", author: "Wayne Dyer" },
        { text: "When you find peace within yourself, you become the kind of person who can live at peace with others.", author: "Peace Pilgrim" },
        { text: "The life of inner peace, being harmonious and without stress, is the easiest type of existence.", author: "Norman Vincent Peale" },
        { text: "Set peace of mind as your highest goal, and organize your life around it.", author: "Brian Tracy" },
        { text: "Do not let the behavior of others destroy your inner peace.", author: "Dalai Lama" },
        { text: "Learning to distance yourself from all the negativity is one of the greatest lessons to achieve inner peace.", author: "Roy T. Bennett" },
        { text: "The greatest weapon against stress is our ability to choose one thought over another.", author: "William James" },
        { text: "Peace is liberty in tranquility.", author: "Cicero" },
        { text: "When things change inside you, things change around you.", author: "Unknown" }
    ],
    strength: [
        { text: "Strength does not come from physical capacity. It comes from an indomitable will.", author: "Mahatma Gandhi" },
        { text: "The world breaks everyone, and afterward, some are strong at the broken places.", author: "Ernest Hemingway" },
        { text: "You never know how strong you are until being strong is your only choice.", author: "Bob Marley" },
        { text: "Strength and growth come only through continuous effort and struggle.", author: "Napoleon Hill" },
        { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
        { text: "Courage is not having the strength to go on; it is going on when you don't have the strength.", author: "Theodore Roosevelt" },
        { text: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.", author: "Dale Carnegie" },
        { text: "Life doesn't get easier or more forgiving, we get stronger and more resilient.", author: "Steve Maraboli" },
        { text: "A hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles.", author: "Christopher Reeve" },
        { text: "The oak fought the wind and was broken, the willow bent when it must and survived.", author: "Robert Jordan" }
    ],
    mindfulness: [
        { text: "Be where you are; otherwise you will miss your life.", author: "Buddha" },
        { text: "The present moment is filled with joy and happiness. If you are attentive, you will see it.", author: "Thich Nhat Hanh" },
        { text: "In today's rush, we all think too much, seek too much, want too much, and forget about the joy of just being.", author: "Eckhart Tolle" },
        { text: "Mindfulness isn't difficult, we just need to remember to do it.", author: "Sharon Salzberg" },
        { text: "The little things? The little moments? They aren't little.", author: "Jon Kabat-Zinn" },
        { text: "Wherever you are, be all there.", author: "Jim Elliot" },
        { text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.", author: "Bil Keane" },
        { text: "Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves.", author: "Thich Nhat Hanh" },
        { text: "The best way to capture moments is to pay attention. This is how we cultivate mindfulness.", author: "Jon Kabat-Zinn" },
        { text: "Life is a dance. Mindfulness is witnessing that dance.", author: "Amit Ray" }
    ]
};
const videosDB = {
    fishing: [
        { id: "kOWhaX3dDKw", title: "Peaceful Lake Fishing at Dawn" },
        { id: "jW9U2qhJGNk", title: "Fly Fishing in Mountain Stream" },
        { id: "lDi9uFcD7XI", title: "Calm Morning Fishing" },
        { id: "QphMx0NsV0k", title: "Quiet Fishing Moments" },
        { id: "E4r7OX9wFnI", title: "Fishing Therapy" },
        { id: "hGlyFc79BUE", title: "Solo Fishing Day" },
        { id: "V_nPSm4VHXY", title: "River Fishing Relaxation" },
        { id: "BfT1D5OUhNs", title: "Seasonal Fishing Scenes" },
        { id: "8na5RhFZFgo", title: "Early Morning Cast" },
        { id: "TM9pckEJm1E", title: "Shore Fishing Peace" },
        { id: "CNYXGKnwJNE", title: "Quiet Fishing Moments" },
        { id: "MqF5CQR3MfE", title: "Solitude on the Water" },
        { id: "RjCN66LPHIw", title: "Fishing at Golden Hour" },
        { id: "d-nbNLpZgUo", title: "Peaceful Lakeside Fishing" },
        { id: "XN4vzQO4sHo", title: "Meditation by the Water" },
        { id: "zR_VYjwGNaU", title: "Calm Waters Clear Mind" },
        { id: "gJhj8FIqm8I", title: "Sunrise Fishing Session" },
        { id: "KD-TYDCnZHk", title: "Peaceful Bass Fishing" },
        { id: "mC8z2LjVFqg", title: "Fishing in Scottish Highlands" },
        { id: "TzW8eHK9KYU", title: "Solo Fishing Adventure" }
    ],
    beagles: [
        { id: "D-UmfqFjpl0", title: "Dog Reacts to Magic Tricks" },
        { id: "h4hBqSlAiIk", title: "Dogs Meeting Babies Compilation" },
        { id: "5xLmV1YFZH0", title: "Dogs and Kids Best Friends" },
        { id: "fWPp8cqJ3YM", title: "Funny Dog Fails" },
        { id: "gX3sD9ry7Fc", title: "Guilty Dogs Compilation" },
        { id: "tP-Ipsat90c", title: "Dogs Being Weird" },
        { id: "mRf3-JkwqfU", title: "Dogs and Treats" },
        { id: "y7kZtNBz3kM", title: "Dogs Being Goofy" },
        { id: "z6EchXyieos", title: "Puppy First Day Home" },
        { id: "JZ9f47P3C_E", title: "Beagles Being Silly" },
        { id: "AZ2ZPmEfjvU", title: "Happy Beagles Playing" },
        { id: "dQcEHv_36Pc", title: "Beagles Howling Together" },
        { id: "h_lKdTI4dRE", title: "Funny Dog Moments" },
        { id: "AePRGMqTs1M", title: "Beagle Adventures" },
        { id: "KKcGP3F0aPg", title: "Dogs Making Friends" },
        { id: "CgGvlmFFSWk", title: "Playful Puppies" },
        { id: "CGz2lV0DF9k", title: "Dogs Meeting New Siblings" },
        { id: "EHGOdLv_PVw", title: "Excited Dogs Coming Home" },
        { id: "YVp3Y3JBXss", title: "Dogs Talking Back" },
        { id: "wBSnCmRmWIU", title: "Wholesome Dog Moments" }
    ],
    goodnews: [
        { id: "uaWA2GbcnJU", title: "People Being Awesome" },
        { id: "7ugJhY3KhsA", title: "Random Acts of Kindness" },
        { id: "X-P9TJRqRm4", title: "Faith in Humanity Restored" },
        { id: "nKxvDYHkfSg", title: "Kindness Compilation" },
        { id: "UxKY3Nt3AhM", title: "People Helping People" },
        { id: "0hzxwoZDUiw", title: "Wholesome Moments" },
        { id: "YQ4V_-GY3PM", title: "Heartwarming Stories" },
        { id: "eREjx25lQJU", title: "Humans Being Bros" },
        { id: "PhqR2fvW8Do", title: "Good People Doing Good Things" },
        { id: "Z4gBxj7rMlY", title: "Touching Moments" },
        { id: "tYzMYcUty6s", title: "Community Coming Together" },
        { id: "EvVXlZVsE9E", title: "Surprising Kindness" },
        { id: "q5z_qLQhWlE", title: "Making a Difference" },
        { id: "v3w2AbuZl4k", title: "Uplifting News" },
        { id: "P8LQ9tMqbP0", title: "Positive Stories" },
        { id: "g0tPNP8SY0Q", title: "Hope and Kindness" },
        { id: "jJNrYuq02Zk", title: "Good Deeds Caught on Camera" },
        { id: "zzs4iMb8_fU", title: "Acts of Kindness 2024" },
        { id: "nRclAwsPVwM", title: "Restoring Faith" },
        { id: "zlfKdbWwruY", title: "Good News Stories" }
    ],
    random: [
        { id: "pFlcqWQVVuU", title: "Tiny Hamster Eating Tiny Burritos" },
        { id: "Awf45u6zrP0", title: "People Are Awesome" },
        { id: "3GRSbr0EYYU", title: "Funny Animal Moments" },
        { id: "RP4abiHdQpc", title: "Oddly Satisfying Compilation" },
        { id: "Xn5QdIm9lYA", title: "Cute Baby Animals" },
        { id: "Ko_DRb0d_Xk", title: "Amazing Skills Compilation" },
        { id: "eRBOgtp0Hac", title: "Wholesome Internet Moments" },
        { id: "_MaJJJXzLXU", title: "Feel Good Moments" },
        { id: "5_sfnQDr1-o", title: "Satisfying Videos" },
        { id: "ZP7K9SycELA", title: "Pure Joy Moments" },
        { id: "p8ncvpLJi4s", title: "Unexpected Wholesomeness" },
        { id: "SL_x1rRg7mM", title: "Happy Accidents" },
        { id: "n9ZKZ6pVK4c", title: "Delightful Surprises" },
        { id: "w7x_lWJNnNg", title: "Made Me Smile" },
        { id: "5XmRDk4aR7k", title: "Happiness Compilation" },
        { id: "TXe0JScPPx4", title: "Joy in Simple Things" },
        { id: "b89CnP0Iq30", title: "Awesome Humans" },
        { id: "NHfRPW_kkfE", title: "Life is Beautiful" },
        { id: "E5KC1E5NyR0", title: "Smile Guaranteed" },
        { id: "7xjQvFe7Fwc", title: "Funny Moments Caught on Camera" }
    ]
};


const articlesDB = [
    { title: "Practical Tools for Managing Depression", excerpt: "Evidence-based strategies and self-help tools specifically designed for men dealing with depression and difficult emotions.", source: "HeadsUpGuys", url: "https://headsupguys.org/take-action/", category: "general" },
    { title: "Self-Check: Stress and Depression", excerpt: "A quick assessment tool to help you understand what you might be experiencing and find appropriate resources.", source: "HeadsUpGuys", url: "https://headsupguys.org/self-check/", category: "anxious" },
    { title: "How to Deal with Grief", excerpt: "Understanding the grieving process and practical ways to cope with loss while still taking care of yourself.", source: "HelpGuide", url: "https://www.helpguide.org/mental-health/grief/coping-with-grief-and-loss", category: "grief" },
    { title: "Coping with Losing a Parent", excerpt: "Losing a parent is one of life's most difficult experiences. Here are ways to navigate the grief and honor their memory.", source: "Verywell Mind", url: "https://www.verywellmind.com/coping-with-the-death-of-a-parent-4065547", category: "grief" },
    { title: "Building Resilience", excerpt: "Resilience is not something you are born with. It is built through practice. Here is how to develop it.", source: "APA", url: "https://www.apa.org/topics/resilience/building-your-resilience", category: "overwhelmed" },
    { title: "Grounding Techniques for Anxiety", excerpt: "When anxiety hits, these grounding techniques can help bring you back to the present moment.", source: "Verywell Mind", url: "https://www.verywellmind.com/grounding-techniques-for-ptsd-2797300", category: "anxious" },
    { title: "The Science of Gratitude", excerpt: "Research shows that practicing gratitude can significantly improve mental health and overall wellbeing.", source: "Greater Good", url: "https://greatergood.berkeley.edu/topic/gratitude/definition", category: "perspective" },
    { title: "Breathing Exercises for Stress", excerpt: "Simple breathing techniques that can help calm your nervous system and reduce stress in minutes.", source: "Healthline", url: "https://www.healthline.com/health/breathing-exercises-for-anxiety", category: "anxious" },
    { title: "Understanding Male Depression", excerpt: "Men often experience and express depression differently. Learn to recognize the signs and find help.", source: "Mental Health America", url: "https://www.mhanational.org/conditions/depression-men", category: "sad" },
    { title: "Mindfulness for Beginners", excerpt: "A practical introduction to mindfulness meditation and how it can help reduce stress and improve focus.", source: "Mindful", url: "https://www.mindful.org/meditation/mindfulness-getting-started/", category: "overwhelmed" },
    { title: "The Healing Power of Nature", excerpt: "Scientific evidence shows spending time in nature significantly reduces stress, anxiety, and depression.", source: "NIH", url: "https://www.nih.gov/news-events/nih-research-matters/spending-time-nature-linked-better-health-wellbeing", category: "reset" },
    { title: "Sleep and Mental Health", excerpt: "Understanding the bidirectional relationship between sleep and mental health, plus tips for better rest.", source: "Sleep Foundation", url: "https://www.sleepfoundation.org/mental-health", category: "overwhelmed" },
    { title: "Men and Emotional Expression", excerpt: "Breaking down barriers: why emotional expression matters and how to get more comfortable with it.", source: "Good Therapy", url: "https://www.goodtherapy.org/blog/why-dont-men-show-their-emotions-0912177", category: "general" },
    { title: "Managing Workplace Stress", excerpt: "Practical strategies for handling stress at work and maintaining work-life balance.", source: "APA", url: "https://www.apa.org/topics/healthy-workplaces/work-stress", category: "anxious" },
    { title: "The Art of Letting Go", excerpt: "Learn why holding on hurts and how to practice acceptance and letting go of things beyond your control.", source: "Psychology Today", url: "https://www.psychologytoday.com/us/blog/theory-knowledge/201509/the-art-of-letting-go", category: "overwhelmed" },
    { title: "Finding Purpose After Loss", excerpt: "How to rebuild meaning and purpose in life after experiencing significant loss.", source: "What's Your Grief", url: "https://whatsyourgrief.com/finding-purpose-after-loss/", category: "grief" },
    { title: "Progressive Muscle Relaxation", excerpt: "A step-by-step guide to this effective technique for reducing physical tension and mental stress.", source: "Mayo Clinic", url: "https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/relaxation-technique/art-20045368", category: "anxious" },
    { title: "The Benefits of Exercise on Mental Health", excerpt: "How physical activity helps with depression, anxiety, and stress - and how to get started.", source: "Harvard Health", url: "https://www.health.harvard.edu/mind-and-mood/exercise-is-an-all-natural-treatment-to-fight-depression", category: "sad" },
    { title: "Journaling for Mental Health", excerpt: "The therapeutic benefits of writing and different journaling techniques to try.", source: "PsychCentral", url: "https://psychcentral.com/lib/the-health-benefits-of-journaling", category: "general" },
    { title: "Understanding and Managing Anger", excerpt: "Healthy ways to process and express anger without letting it control you.", source: "APA", url: "https://www.apa.org/topics/anger/control", category: "overwhelmed" },
    { title: "The Power of Social Connection", excerpt: "Why meaningful relationships matter for mental health and how to strengthen your connections.", source: "Mental Health Foundation", url: "https://www.mentalhealth.org.uk/our-work/public-engagement/thriving-with-nature/social-connectedness", category: "sad" },
    { title: "Dealing with Change and Uncertainty", excerpt: "Strategies for coping with life transitions and embracing uncertainty with resilience.", source: "Psychology Today", url: "https://www.psychologytoday.com/us/blog/the-athletes-way/201608/how-cope-change-and-uncertainty", category: "anxious" },
    { title: "Self-Compassion Practices", excerpt: "Learning to treat yourself with the same kindness you'd show a good friend.", source: "Greater Good", url: "https://greatergood.berkeley.edu/topic/self_compassion/definition", category: "sad" },
    { title: "Creating Healthy Boundaries", excerpt: "Why boundaries matter and how to set them in relationships, work, and life.", source: "Psychology Today", url: "https://www.psychologytoday.com/us/blog/prescriptions-life/201709/the-power-boundaries", category: "overwhelmed" },
    { title: "Managing Panic Attacks", excerpt: "Understanding panic attacks and practical techniques to work through them when they happen.", source: "Anxiety Canada", url: "https://www.anxietycanada.com/articles/managing-panic-attacks/", category: "anxious" },
    { title: "The Importance of Routine", excerpt: "How establishing daily routines can provide stability, reduce anxiety, and improve mental health.", source: "Northwestern Medicine", url: "https://www.nm.org/healthbeat/healthy-tips/the-importance-of-maintaining-structure-and-routine-during-stressful-times", category: "overwhelmed" },
    { title: "Cognitive Behavioral Techniques", excerpt: "Practical CBT strategies you can use on your own to challenge negative thought patterns.", source: "Mind", url: "https://www.mind.org.uk/information-support/drugs-and-treatments/cognitive-behavioural-therapy-cbt/about-cbt/", category: "anxious" },
    { title: "Honoring a Parent's Memory", excerpt: "Meaningful ways to remember and celebrate a parent who has passed away.", source: "Legacy Connect", url: "https://www.legacy.com/news/advice-and-support/ways-to-honor-deceased-parents/", category: "grief" },
    { title: "Men's Mental Health Statistics", excerpt: "Understanding the unique challenges men face with mental health and why seeking help matters.", source: "NAMI", url: "https://www.nami.org/Blogs/NAMI-Blog/June-2022/Men-s-Mental-Health-Month-What-You-Need-to-Know", category: "general" },
    { title: "Finding a Therapist", excerpt: "A practical guide to finding the right mental health professional and what to expect from therapy.", source: "APA", url: "https://www.apa.org/topics/psychotherapy/understanding", category: "general" }
];

const wordLists = {
    list1: ['sunset', 'sunrise', 'moonlight', 'starry', 'golden', 'misty', 'rainy', 'snowy', 'autumn', 'spring', 'summer', 'winter', 'twilight', 'dawn', 'dusk', 'bright', 'soft', 'warm', 'cool', 'gentle'],
    list2: ['peaceful', 'calm', 'serene', 'quiet', 'cozy', 'dreamy', 'magical', 'ancient', 'wild', 'gentle', 'flowing', 'still', 'vast', 'tiny', 'hidden', 'floating', 'dancing', 'sleeping', 'growing', 'healing'],
    list3: ['mountain', 'ocean', 'forest', 'meadow', 'river', 'lake', 'garden', 'cabin', 'lighthouse', 'bridge', 'path', 'bench', 'dock', 'boat', 'tree', 'flower', 'bird', 'cloud', 'waterfall', 'island']
};

// FAVORITES SYSTEM
class FavoritesManager {
    constructor() {
        this.favorites = this.loadFavorites();
    }
    
    loadFavorites() {
        const stored = localStorage.getItem('dock_favorites');
        return stored ? JSON.parse(stored) : [];
    }
    
    saveFavorites() {
        localStorage.setItem('dock_favorites', JSON.stringify(this.favorites));
    }
    
    addFavorite(item) {
        const exists = this.favorites.some(fav => 
            fav.type === item.type && 
            (fav.text === item.text || fav.title === item.title)
        );
        
        if (!exists) {
            this.favorites.unshift({ ...item, timestamp: Date.now() });
            this.saveFavorites();
            return true;
        }
        return false;
    }
    
    removeFavorite(index) {
        this.favorites.splice(index, 1);
        this.saveFavorites();
    }
    
    isFavorited(item) {
        return this.favorites.some(fav => 
            fav.type === item.type && 
            (fav.text === item.text || fav.title === item.title)
        );
    }
    
    getFavorites() {
        return this.favorites;
    }
}

const favoritesManager = new FavoritesManager();

// AUDIO SYSTEM - Ready for audio files
class AudioManager {
    constructor() {
        this.sounds = {
            water: null,
            birds: null,
            dock: null
        };
        this.playing = {
            water: false,
            birds: false,
            dock: false
        };
        this.initAudio();
    }
    
    initAudio() {
        // Create audio objects with paths to sound files
        // IMPORTANT: Add your audio files to a 'sounds' folder and uncomment these lines:
        
        // this.sounds.water = new Audio('sounds/water-lapping.mp3');
        // this.sounds.birds = new Audio('sounds/morning-birds.mp3');
        // this.sounds.dock = new Audio('sounds/dock-creak.mp3');
        
        // Configure each sound
        // for (const key in this.sounds) {
        //     if (this.sounds[key]) {
        //         this.sounds[key].loop = true;
        //         this.sounds[key].volume = 0.3; // Adjust volume (0.0 to 1.0)
        //     }
        // }
    }
    
    toggle(soundType) {
        this.playing[soundType] = !this.playing[soundType];
        
        if (this.sounds[soundType]) {
            if (this.playing[soundType]) {
                this.sounds[soundType].play().catch(err => {
                    console.log('Audio playback failed:', err);
                    this.playing[soundType] = false;
                });
            } else {
                this.sounds[soundType].pause();
            }
        } else {
            // Audio files not loaded yet
            console.log(`${soundType} sound file not found. Add audio files to sounds/ folder.`);
        }
        
        return this.playing[soundType];
    }
    
    isPlaying(soundType) {
        return this.playing[soundType];
    }
}

const audioManager = new AudioManager();

// TIME OF DAY SYSTEM
class TimeOfDayManager {
    constructor() {
        this.updateTimeOfDay();
        setInterval(() => this.updateTimeOfDay(), 60000);
    }
    
    getTimeOfDay() {
        const hour = new Date().getHours();
        
        if (hour >= 5 && hour < 7) return 'dawn';
        if (hour >= 7 && hour < 18) return 'day';
        if (hour >= 18 && hour < 20) return 'sunset';
        return 'night';
    }
    
    updateTimeOfDay() {
        const timeOfDay = this.getTimeOfDay();
        const body = document.body;
        
        body.classList.remove('dawn', 'day', 'sunset', 'night');
        body.classList.add(timeOfDay);
        
        this.updateCelestialBodies();
        
        const starsContainer = document.getElementById('stars');
        if (timeOfDay === 'night') {
            this.createStars(starsContainer);
        }
    }
    
    updateCelestialBodies() {
        const hour = new Date().getHours();
        const minute = new Date().getMinutes();
        const totalMinutes = hour * 60 + minute;
        
        const sun = document.getElementById('sun');
        const moon = document.getElementById('moon');
        
        if (hour >= 6 && hour < 20) {
            sun.classList.remove('hidden-celestial');
            moon.classList.add('hidden-celestial');
            
            const sunMinutes = totalMinutes - 360;
            const sunProgress = sunMinutes / 840;
            const sunAngle = Math.PI * sunProgress;
            
            const centerX = window.innerWidth / 2;
            const sunX = centerX + Math.cos(sunAngle - Math.PI) * (window.innerWidth * 0.4);
            const sunY = 80 + Math.sin(sunAngle) * -60;
            
            sun.style.left = `${sunX}px`;
            sun.style.top = `${sunY}px`;
        } else {
            sun.classList.add('hidden-celestial');
            moon.classList.remove('hidden-celestial');
            
            let moonMinutes = totalMinutes;
            if (hour < 6) moonMinutes += 1440;
            moonMinutes -= 1200;
            
            const moonProgress = moonMinutes / 600;
            const moonAngle = Math.PI * moonProgress;
            
            const centerX = window.innerWidth / 2;
            const moonX = centerX + Math.cos(moonAngle - Math.PI) * (window.innerWidth * 0.4);
            const moonY = 80 + Math.sin(moonAngle) * -60;
            
            moon.style.left = `${moonX}px`;
            moon.style.top = `${moonY}px`;
        }
    }
    
    createStars(container) {
        if (container.children.length > 0) return;
        
        const numStars = 100;
        const width = window.innerWidth;
        const height = window.innerHeight * 0.22;
        
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * width + 'px';
            star.style.top = Math.random() * height + 'px';
            star.style.animationDelay = Math.random() * 3 + 's';
            container.appendChild(star);
        }
    }
}

const timeManager = new TimeOfDayManager();

// MAIN APPLICATION
let currentMood = null;
let currentVideoCategory = null;
let breathingTimeout = null;
let currentWords = ['sunset', 'peaceful', 'mountain'];
let currentQuote = null;
let currentArticle = null;

const pages = {
    landing: document.getElementById('landing-page'),
    mood: document.getElementById('mood-page'),
    content: document.getElementById('content-page'),
    quote: document.getElementById('quote-display'),
    videoSelect: document.getElementById('video-page'),
    videoDisplay: document.getElementById('video-display'),
    article: document.getElementById('article-page'),
    photos: document.getElementById('photos-page'),
    breathing: document.getElementById('breathing-page'),
    grounding: document.getElementById('grounding-page'),
    create: document.getElementById('create-page'),
    favorites: document.getElementById('favorites-page')
};

function showPage(pageId) {
    Object.values(pages).forEach(page => page.classList.remove('active'));
    pages[pageId].classList.add('active');
    
    if (pageId !== 'breathing') stopBreathing();
    if (pageId !== 'videoDisplay') document.getElementById('video-player').src = '';
    if (pageId === 'create') shuffleAllWords();
    if (pageId === 'favorites') loadFavoritesPage();
}

function getRandomQuote() {
    const topics = Object.keys(quotesDB);
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    const topicQuotes = quotesDB[randomTopic];
    return { ...topicQuotes[Math.floor(Math.random() * topicQuotes.length)], topic: randomTopic };
}

function getQuoteForMood(mood) {
    const moodTopicWeights = {
        'anxious': { stoicism: 3, peace: 2, mindfulness: 2, gratitude: 1, humor: 1 },
        'sad': { grief: 2, gratitude: 2, strength: 1, peace: 1, humor: 1 },
        'overwhelmed': { stoicism: 3, mindfulness: 2, peace: 2, humor: 1 },
        'missing-dad': { grief: 3, fatherhood: 3, gratitude: 1 },
        'perspective': { stoicism: 3, mindfulness: 2, gratitude: 2, peace: 1 },
        'reset': { humor: 2, gratitude: 2, mindfulness: 2, peace: 1 }
    };
    
    const weights = moodTopicWeights[mood] || { gratitude: 1, humor: 1, stoicism: 1, fatherhood: 1, grief: 1 };
    const weightedTopics = [];
    
    for (const [topic, weight] of Object.entries(weights)) {
        for (let i = 0; i < weight; i++) weightedTopics.push(topic);
    }
    
    const randomTopic = weightedTopics[Math.floor(Math.random() * weightedTopics.length)];
    const topicQuotes = quotesDB[randomTopic] || quotesDB.gratitude;
    return { ...topicQuotes[Math.floor(Math.random() * topicQuotes.length)], topic: randomTopic };
}

function getRandomVideo(category) {
    const videos = videosDB[category] || videosDB.random;
    const video = videos[Math.floor(Math.random() * videos.length)];
    return { ...video, embedUrl: `https://www.youtube.com/embed/${video.id}` };
}

function getRandomArticle() {
    return articlesDB[Math.floor(Math.random() * articlesDB.length)];
}

function shuffleWord(listName) {
    const list = wordLists[listName];
    return list[Math.floor(Math.random() * list.length)];
}

function shuffleAllWords() {
    currentWords = [shuffleWord('list1'), shuffleWord('list2'), shuffleWord('list3')];
    document.getElementById('word1-text').textContent = currentWords[0];
    document.getElementById('word2-text').textContent = currentWords[1];
    document.getElementById('word3-text').textContent = currentWords[2];
}

function loadLandingQuote() {
    const quote = getRandomQuote();
    document.getElementById('landing-quote').textContent = '"' + quote.text + '"';
    document.getElementById('landing-author').textContent = '— ' + quote.author;
}

function loadQuote() {
    currentQuote = getQuoteForMood(currentMood);
    document.getElementById('display-quote').textContent = '"' + currentQuote.text + '"';
    document.getElementById('display-author').textContent = '— ' + currentQuote.author;
    document.getElementById('quote-topic').textContent = currentQuote.topic;
    
    const favoriteBtn = document.getElementById('quote-favorite-btn');
    const isFav = favoritesManager.isFavorited({ type: 'quote', text: currentQuote.text });
    if (isFav) {
        favoriteBtn.classList.add('favorited');
    } else {
        favoriteBtn.classList.remove('favorited');
    }
}

function loadVideo() {
    const video = getRandomVideo(currentVideoCategory);
    document.getElementById('video-player').src = video.embedUrl;
    document.getElementById('video-title').textContent = video.title;
    
    const names = { fishing: 'Fishing', beagles: 'Beagles', goodnews: 'Good News', random: 'Random' };
    document.getElementById('video-category-title').textContent = names[currentVideoCategory] || 'Video';
}

function loadArticle() {
    currentArticle = getRandomArticle();
    document.getElementById('article-source').textContent = currentArticle.source;
    document.getElementById('article-title').textContent = currentArticle.title;
    document.getElementById('article-excerpt').textContent = currentArticle.excerpt;
    document.getElementById('article-link').href = currentArticle.url;
    
    const favoriteBtn = document.getElementById('article-favorite-btn');
    const isFav = favoritesManager.isFavorited({ type: 'article', title: currentArticle.title });
    if (isFav) {
        favoriteBtn.classList.add('favorited');
    } else {
        favoriteBtn.classList.remove('favorited');
    }
}

function loadFavoritesPage() {
    const favorites = favoritesManager.getFavorites();
    const listContainer = document.getElementById('favorites-list');
    const emptyContainer = document.getElementById('favorites-empty');
    
    listContainer.innerHTML = '';
    
    if (favorites.length === 0) {
        emptyContainer.classList.remove('hidden');
        return;
    }
    
    emptyContainer.classList.add('hidden');
    
    favorites.forEach((fav, index) => {
        const item = document.createElement('div');
        item.className = `favorite-item ${fav.type}-favorite`;
        
        if (fav.type === 'quote') {
            item.innerHTML = `
                <div class="favorite-type">Quote</div>
                <div class="favorite-text">"${fav.text}"</div>
                <div class="favorite-author">— ${fav.author}</div>
                <button class="remove-favorite-btn" data-index="${index}">
                    <svg viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            `;
        } else if (fav.type === 'article') {
            item.innerHTML = `
                <div class="favorite-type">${fav.source}</div>
                <div class="favorite-text" style="font-weight: 700; margin-bottom: 0.5rem;">${fav.title}</div>
                <div class="favorite-author" style="margin-bottom: 0.75rem;">${fav.excerpt}</div>
                <a href="${fav.url}" target="_blank" rel="noopener" style="color: var(--accent-warm); text-decoration: none; font-size: 0.85rem;">Read article →</a>
                <button class="remove-favorite-btn" data-index="${index}">
                    <svg viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            `;
        }
        
        listContainer.appendChild(item);
    });
    
    document.querySelectorAll('.remove-favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(btn.dataset.index);
            favoritesManager.removeFavorite(index);
            loadFavoritesPage();
        });
    });
}

function resetBreathing() {
    stopBreathing();
    document.getElementById('breath-text').textContent = 'Tap to start';
    document.getElementById('breath-circle').className = 'breath-circle';
}

function startBreathing() {
    document.getElementById('start-breathing-btn').classList.add('hidden');
    document.getElementById('stop-breathing-btn').classList.remove('hidden');
    runBreathCycle();
}

function runBreathCycle() {
    const circle = document.getElementById('breath-circle');
    const text = document.getElementById('breath-text');
    
    circle.className = 'breath-circle inhale';
    text.textContent = 'Breathe in...';
    
    breathingTimeout = setTimeout(() => {
        circle.className = 'breath-circle hold';
        text.textContent = 'Hold...';
        
        breathingTimeout = setTimeout(() => {
            circle.className = 'breath-circle exhale';
            text.textContent = 'Breathe out...';
            
            breathingTimeout = setTimeout(runBreathCycle, 8000);
        }, 7000);
    }, 4000);
}

function stopBreathing() {
    if (breathingTimeout) {
        clearTimeout(breathingTimeout);
        breathingTimeout = null;
    }
    document.getElementById('start-breathing-btn').classList.remove('hidden');
    document.getElementById('stop-breathing-btn').classList.add('hidden');
    document.getElementById('breath-text').textContent = 'Tap to start';
    document.getElementById('breath-circle').className = 'breath-circle';
}

async function generateImage() {
    const btn = document.getElementById('generate-btn');
    const imageContainer = document.getElementById('generated-image');
    const prompt = `A beautiful, calming image of a ${currentWords[0]} ${currentWords[2]} with a ${currentWords[1]} atmosphere, digital art style, peaceful and serene`;
    
    btn.disabled = true;
    btn.textContent = 'Generating...';
    imageContainer.innerHTML = '<p class="generate-placeholder">Creating your image...</p>';
    
    setTimeout(() => {
        imageContainer.innerHTML = `<p class="generate-placeholder">Image prompt ready:<br><br><em>"${prompt}"</em><br><br>Connect an AI image API (like DALL-E, Stable Diffusion, or Gemini) to generate real images.</p>`;
        btn.disabled = false;
        btn.textContent = 'Generate Image';
    }, 1500);
}

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    loadLandingQuote();
    
    // Navigation
    document.getElementById('enter-btn').addEventListener('click', () => showPage('mood'));
    document.getElementById('back-to-landing').addEventListener('click', () => { loadLandingQuote(); showPage('landing'); });
    document.getElementById('back-to-mood').addEventListener('click', () => showPage('mood'));
    document.getElementById('back-from-quote').addEventListener('click', () => showPage('content'));
    document.getElementById('back-from-video-select').addEventListener('click', () => showPage('content'));
    document.getElementById('back-from-video').addEventListener('click', () => showPage('videoSelect'));
    document.getElementById('back-from-article').addEventListener('click', () => showPage('content'));
    document.getElementById('back-from-photos').addEventListener('click', () => showPage('content'));
    document.getElementById('back-from-breathing').addEventListener('click', () => showPage('content'));
    document.getElementById('back-from-grounding').addEventListener('click', () => showPage('content'));
    document.getElementById('back-from-create').addEventListener('click', () => showPage('content'));
    document.getElementById('back-from-favorites').addEventListener('click', () => showPage('content'));
    
    // Mood selection
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentMood = btn.dataset.mood;
            const titles = {
                'anxious': 'Finding calm',
                'sad': 'A gentle space',
                'overwhelmed': 'One thing at a time',
                'missing-dad': 'Remembering',
                'perspective': 'Seeing clearly',
                'reset': 'Fresh start'
            };
            document.getElementById('content-title').textContent = titles[currentMood] || 'Your space';
            showPage('content');
        });
    });
    
    // Content selection
    document.querySelectorAll('.content-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            if (type === 'quote') { loadQuote(); showPage('quote'); }
            else if (type === 'video') showPage('videoSelect');
            else if (type === 'article') { loadArticle(); showPage('article'); }
            else if (type === 'photos') showPage('photos');
            else if (type === 'breathing') { resetBreathing(); showPage('breathing'); }
            else if (type === 'grounding') showPage('grounding');
            else if (type === 'create') showPage('create');
            else if (type === 'favorites') showPage('favorites');
        });
    });
    
    // Video category selection
    document.querySelectorAll('.video-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentVideoCategory = btn.dataset.category;
            loadVideo();
            showPage('videoDisplay');
        });
    });
    
    // Action buttons
    document.getElementById('new-quote-btn').addEventListener('click', loadQuote);
    document.getElementById('next-video-btn').addEventListener('click', loadVideo);
    document.getElementById('next-article-btn').addEventListener('click', loadArticle);
    document.getElementById('start-breathing-btn').addEventListener('click', startBreathing);
    document.getElementById('stop-breathing-btn').addEventListener('click', stopBreathing);
    document.getElementById('breath-circle').addEventListener('click', () => {
        if (!breathingTimeout) startBreathing();
    });
    
    // Word shuffling
    document.getElementById('word1').addEventListener('click', () => {
        currentWords[0] = shuffleWord('list1');
        document.getElementById('word1-text').textContent = currentWords[0];
    });
    document.getElementById('word2').addEventListener('click', () => {
        currentWords[1] = shuffleWord('list2');
        document.getElementById('word2-text').textContent = currentWords[1];
    });
    document.getElementById('word3').addEventListener('click', () => {
        currentWords[2] = shuffleWord('list3');
        document.getElementById('word3-text').textContent = currentWords[2];
    });
    document.getElementById('shuffle-all-btn').addEventListener('click', shuffleAllWords);
    document.getElementById('generate-btn').addEventListener('click', generateImage);
    
    // Favorites
    document.getElementById('quote-favorite-btn').addEventListener('click', () => {
        if (currentQuote) {
            const item = {
                type: 'quote',
                text: currentQuote.text,
                author: currentQuote.author,
                topic: currentQuote.topic
            };
            
            const btn = document.getElementById('quote-favorite-btn');
            if (favoritesManager.isFavorited(item)) {
                const favorites = favoritesManager.getFavorites();
                const index = favorites.findIndex(fav => 
                    fav.type === 'quote' && fav.text === item.text
                );
                if (index !== -1) {
                    favoritesManager.removeFavorite(index);
                    btn.classList.remove('favorited');
                }
            } else {
                favoritesManager.addFavorite(item);
                btn.classList.add('favorited');
            }
        }
    });
    
    document.getElementById('article-favorite-btn').addEventListener('click', () => {
        if (currentArticle) {
            const item = {
                type: 'article',
                title: currentArticle.title,
                excerpt: currentArticle.excerpt,
                source: currentArticle.source,
                url: currentArticle.url
            };
            
            const btn = document.getElementById('article-favorite-btn');
            if (favoritesManager.isFavorited(item)) {
                const favorites = favoritesManager.getFavorites();
                const index = favorites.findIndex(fav => 
                    fav.type === 'article' && fav.title === item.title
                );
                if (index !== -1) {
                    favoritesManager.removeFavorite(index);
                    btn.classList.remove('favorited');
                }
            } else {
                favoritesManager.addFavorite(item);
                btn.classList.add('favorited');
            }
        }
    });
    
    // Audio controls
    document.getElementById('water-audio-btn').addEventListener('click', function() {
        const isPlaying = audioManager.toggle('water');
        this.classList.toggle('active', isPlaying);
    });
    
    document.getElementById('birds-audio-btn').addEventListener('click', function() {
        const isPlaying = audioManager.toggle('birds');
        this.classList.toggle('active', isPlaying);
    });
    
    document.getElementById('dock-audio-btn').addEventListener('click', function() {
        const isPlaying = audioManager.toggle('dock');
        this.classList.toggle('active', isPlaying);
    });
    
    // Window resize handler
    window.addEventListener('resize', () => {
        timeManager.updateCelestialBodies();
    });
});
