/**
 * THE SORTING HAT: DATA EDITION
 * Core Application Logic
 */

// ==========================================================================
// 1. CONFIGURATION & DATA LAYER
// ==========================================================================
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdIPYYl93wXVgaI0Zxrc4OPnh2XumkEfDHK8arlXaSJOB4Acg/formResponse";
const ENTRY_IDS = {
    name: "entry.431617569", 
    email: "entry.353762943", 
    age: "entry.35781867", 
    gender: "entry.445576122",
    city: "entry.1094314191", 
    zodiac: "entry.1846838341", 
    trait: "entry.1694315295",
    prediction: "entry.1246443221", 
    winner: "entry.1760783397", 
    scores: "entry.478097052"
};

const HOUSE_LORE = {
    G: {
        name: "Gryffindor", colorHex: "#d12a2a", prefect: "Percy Weasley", headOfHouse: "Minerva McGonagall",
        colors: "Scarlet & Gold", mascot: "The Lion", relic: "The Sword of Gryffindor", 
        relicImg: "images/g-sword.jpg", crestImg: "images/g_logo.png",
        bgImg: "images/gryffindor_common_bg.png", giantMascot: "images/gryffindor_mascot.png",
        tagline: "ONLY THE BRAVE", 
        verse: "You might belong in Gryffindor,\nWhere dwell the brave at heart,\nTheir daring, nerve and chivalry\nSet Gryffindors apart.",
        vignette: "rgba(45, 0, 0, 0.95)",
        badgeImg: "images/g-crest.png",
        idFrontImg: "images/gryffindor_idfront.jpg",
        idBackImg: "images/gryffindor_idback.jpg",
        ghost: "Nearly Headless Nick",
        colorImg: "images/color-gryffindor.png", 
        ghostImg: "images/ghost-gryffindor.png",
        prefectMessage: "Congratulations! I'm Prefect Percy Weasley, and I'm delighted to welcome you to GRYFFINDOR HOUSE. Our emblem is the lion, the bravest of all creatures; our house colours are scarlet and gold, and our common room lies up in Gryffindor Tower. I simply know you'll be comfortable here.",
        prefectMessageExtended: `This is, quite simply, the best house at Hogwarts. It’s where the bravest and boldest end up – for instance: Albus Dumbledore! Yes, Dumbledore himself, the greatest wizard of our time, was a Gryffindor! If that’s not enough for you, I don’t know what is.

                                 I won’t keep you long, as all you need to do to find out more about your house is to follow Harry Potter and his friends as I lead them up to their dormitories. Enjoy your time at Hogwarts – but how could you fail to? You’ve become part of the best house in the school.`,
        loreText: "You probably know that some of Gryffindor’s most renowned members include Albus Dumbledore and Harry Potter. But did you know the sword of Gryffindor was made a thousand years ago by goblins, or that Head of House Minerva McGonagall’s hobbies include correcting articles in Transfiguration Today and supporting the Montrose Magpies?"
    },
    S: {
        name: "Slytherin", colorHex: "#2e9e4f", prefect: "Gemma Farley", headOfHouse: "Severus Snape",
        colors: "Green & Silver", mascot: "The Serpent", relic: "Slytherin's Locket", 
        relicImg: "images/s-locket.jpg", crestImg: "images/s_logo.png",
        bgImg: "images/slytherin_common_bg.png", giantMascot: "images/slytherin_mascot.png",
        tagline: "THE MOST RESOURCEFUL OF THEM ALL", 
        verse: "Or perhaps in Slytherin\nYou’ll make your real friends,\nThose cunning folk use any means,\nTo achieve their ends.",
        vignette: "rgba(0, 30, 15, 0.95)",
        badgeImg: "images/s-crest.png",
        idFrontImg: "images/slytherin_idfront.jpg",
        idBackImg: "images/slytherin_idback.jpg",
        ghost: "The Bloody Baron",
        colorImg: "images/colour-slytherin.png", 
        ghostImg: "images/ghost-slytherin.png",
        prefectMessage: "Congratulations! I'm Prefect Gemma Farley, and I'm delighted to welcome you to SLYTHERIN HOUSE. Our emblem is the serpent, the wisest of creatures; our house colours are emerald green and silver, and our common room lies behind a concealed entrance down in the dungeons. You are here because you have the potential to be great.",
        prefectMessageExtended: `Now, there are a few things you should know about Slytherin – and a few you should forget. Firstly, let’s dispel a few myths. You might have heard rumours about Slytherin house – that we’re all into the Dark Arts, and will only talk to you if your great-grandfather was a famous wizard, and rubbish like that. Well, you don’t want to believe everything you hear from competing houses. I’m not denying that we’ve produced our share of Dark wizards, but so have the other three houses – they just don’t like admitting it. And yes, we have traditionally tended to take students who come from long lines of witches and wizards, but nowadays you’ll find plenty of people in Slytherin house who have at least one Muggle parent. Here’s a little-known fact that the other three houses don’t bring up much: Merlin was a Slytherin. Yes, Merlin himself, the most famous wizard in history! He learned all he knew in this very house! Do you want to follow in the footsteps of Merlin? Or would you rather sit at the old desk of that illustrious ex-Hufflepuff, Eglantine Puffett, inventor of the Self-Soaping Dishcloth? I didn’t think so.

But that’s enough about what we’re not. Let’s talk about what we are, which is the coolest and edgiest house in this school. We play to win, because we care about the honour and traditions of Slytherin.

We also get respect from our fellow students. Yes, some of that respect might be tinged with fear, because of our Dark reputation, but you know what? It can be fun, having a reputation for walking on the wild side. Chuck out a few hints that you’ve got access to a whole library of curses, and see whether anyone feels like nicking your pencil case.

But we’re not bad people. We’re like our emblem, the snake: sleek, powerful, and frequently misunderstood.

For instance, we Slytherins look after our own – which is more than you can say for Ravenclaw. Apart from being the biggest bunch of swots you ever met, Ravenclaws are famous for clambering over each other to get good marks, whereas we Slytherins are brothers. The corridors of Hogwarts can throw up surprises for the unwary, and you’ll be glad you’ve got the Serpents on your side as you move around the school. As far as we’re concerned, once you’ve become a snake, you’re one of ours – one of the elite.

Because you know what Salazar Slytherin looked for in his chosen students? The seeds of greatness. You’ve been chosen by this house because you’ve got the potential to be great, in the true sense of the word. All right, you might see a couple of people hanging around the common room whom you might not think are destined for anything special. Well, keep that to yourself. If the Sorting Hat put them in here, there’s something great about them, and don’t you forget it.

And talking of people who aren’t destined for greatness, I haven’t mentioned the Gryffindors. Now, a lot of people say that Slytherins and Gryffindors represent two sides of the same coin. Personally, I think Gryffindors are nothing more than wannabe Slytherins. Mind you, some people say that Salazar Slytherin and Godric Gryffindor prized the same kinds of students, so perhaps we are more similar than we like to think. But that doesn’t mean that we cosy up with Gryffindors. They like beating us only slightly less than we like beating them.

A few more things you might need to know: our house ghost is the Bloody Baron. If you get on the right side of him he’ll sometimes agree to frighten people for you. Just don’t ask him how he got bloodstained; he doesn’t like it.

The password to the common room changes every fortnight. Keep an eye on the noticeboard. Never bring anyone from another house into our common room or tell them our password. No outsider has entered it for more than seven centuries.

Well, I think that’s all for now. I’m sure you’ll like our dormitories. We sleep in ancient four-posters with green silk hangings, and bedspreads embroidered with silver thread. Medieval tapestries depicting the adventures of famous Slytherins cover the walls, and silver lanterns hang from the ceilings. You’ll sleep well; it’s very soothing, listening to the lake water lapping against the windows at night.`,
        loreText: "You probably know that some of Slytherin’s most renowned members include Severus Snape and Bellatrix Lestrange. But did you know Merlin himself was a Slytherin, or that according to legend, the ribbon of a First Class Order of Merlin is green to reflect his Hogwarts house?"
    },
    R: {
        name: "Ravenclaw", colorHex: "#5d9bde", prefect: "Robert Hilliard", headOfHouse: "Filius Flitwick",
        colors: "Blue & Bronze", mascot: "The Eagle", relic: "Ravenclaw's Diadem", 
        relicImg: "images/r-crown.jpg", crestImg: "images/r_logo.png",
        bgImg: "images/ravenclaw_common_bg.png", giantMascot: "images/ravenclaw_mascot.png",
        tagline: "NEVER STOP LEARNING", 
        verse: "Or yet in wise old Ravenclaw,\nIf you’ve a ready mind,\nWhere those of wit and learning,\nWill always find their kind.",
        vignette: "rgba(5, 10, 40, 0.95)",
        badgeImg: "images/r-crest.png",
        idFrontImg: "images/ravenclaw_idfront.jpg",
        idBackImg: "images/ravenclaw_idback.jpg",
        ghost: "The Grey Lady",
        colorImg: "images/colour-ravenclaw.png", 
        ghostImg: "images/ghost-ravenclaw.png",
        prefectMessage: "Congratulations! I'm Prefect Robert Hilliard, and I'm delighted to welcome you to RAVENCLAW HOUSE. Our emblem is the eagle, which soars where others cannot climb; our house colours are blue and bronze. Our common room is found at the top of Ravenclaw Tower, boasting the most stunning views of the castle grounds.",
        prefectMessageExtended: `Without wishing to boast, this is the house where the cleverest witches and wizards live. Our founder, Rowena Ravenclaw, prized learning above all else – and so do we. Unlike the other houses, who all have concealed entrances to their common rooms, we don’t need one. The door to our common room lies at the top of a tall, winding staircase. It has no handle, but an enchanted bronze knocker in the shape of an eagle. When you rap on the door, this knocker will ask you a question, and if you can answer it correctly, you are allowed in. This simple barrier has kept out everyone but Ravenclaws for nearly a thousand years.

Some first-years are scared by having to answer the eagle’s questions, but don’t worry. Ravenclaws learn quickly, and you’ll soon enjoy the challenges the door sets. It’s not unusual to find twenty people standing outside the common room door, all trying to work out the answer to the day’s question together. This is a great way to meet fellow Ravenclaws from other years, and to learn from them – although it is a bit annoying if you’ve forgotten your Quidditch robes and need to get in and out in a hurry. In fact, I’d advise you to triple-check your bag for everything you need before leaving Ravenclaw Tower.

Another cool thing about Ravenclaw is that our people are the most individual – some might even call them eccentrics. But geniuses are often out of step with ordinary folk, and unlike some other houses we could mention, we think you’ve got the right to wear what you like, believe what you want, and say what you feel. We aren’t put off by people who march to a different tune; on the contrary, we value them!

Speaking of eccentrics, you’ll like our Head of house, Professor Filius Flitwick. People often underestimate him, because he’s really tiny (we think he’s part elf, but we’ve never been rude enough to ask) and he’s got a squeaky voice, but he’s the best and most knowledgeable Charms master alive in the world today. His office door is always open to any Ravenclaw with a problem, and if you’re in a real state he’ll get out these delicious little cupcakes he keeps in a tin in his desk drawer and make them do a little dance for you. In fact, it’s worth pretending you’re in a real state just to see them jive.

Ravenclaw house has an illustrious history. Most of the greatest wizarding inventors and innovators were in our house, including Perpetua Fancourt, the inventor of the lunascope, Laverne de Montmorency, a great pioneer of love potions, and Ignatia Wildsmith, the inventor of Floo powder. Famous Ravenclaw Ministers for Magic include Millicent Bagnold, who was in power on the night that Harry Potter survived the Dark Lord’s curse, and defended the wizarding celebrations all over Britain with the words, 'I assert our inalienable right to party'. There was also Minister Lorcan McLaird, who was a quite brilliant wizard, but preferred to communicate by puffing smoke out of the end of his wand. Well, I did say we produce eccentrics. In fact, we are also the house that gave the wizarding world Uric the Oddball, who used a jellyfish for a hat. He’s the punch line of a lot of wizarding jokes.

As for our relationship with the other three houses: well, you’ve probably heard about the Slytherins. They’re not all bad, but you’d do well to be on your guard until you know them well. They’ve got a long house tradition of doing whatever it takes to win – so watch out, especially in Quidditch matches and exams.

The Gryffindors are OK. If I had a criticism, I’d say Gryffindors tend to be show-offs. They’re also much less tolerant than we are of people who are different; in fact, they’ve been known to make jokes about Ravenclaws who have developed an interest in levitation, or the possible magical uses of troll bogies, or ovomancy, which (as you probably know) is a method of divination using eggs. Gryffindors haven’t got our intellectual curiosity, whereas we’ve got no problem if you want to spend your days and nights cracking eggs in a corner of the common room and writing down your predictions according to the way the yolks fall. In fact, you’ll probably find a few people to help you.

As for the Hufflepuffs, well, nobody could say they’re not nice people. In fact, they’re some of the nicest people in the school. Let’s just say you needn’’t worry too much about them when it comes to competition at exam time.

I think that’s nearly everything. Oh yes, our house ghost is the Grey Lady. The rest of the school thinks she never speaks, but shell talk to Ravenclaws. She’s particularly useful if you’re lost, or you’ve mislaid something.

I’m sure you’ll have a good night. Our dormitories are in turrets off the main tower; our four-poster beds are covered in sky blue silk eiderdowns and the sound of the wind whistling around the windows is very relaxing.

And once again: well done on becoming a member of the cleverest, quirkiest and most interesting house at Hogwarts.`,
        loreText: "You probably know that some of Ravenclaw’s most renowned members include Gilderoy Lockhart and Luna Lovegood. But did you know Ravenclaw’s Grey Lady is the least talkative Hogwarts house ghost, or that Ravenclaw’s common room boasts the most stunning views of the castle grounds?"
    },
    H: {
        name: "Hufflepuff", colorHex: "#f3c633", prefect: "Gabriel Truman", headOfHouse: "Pomona Sprout",
        colors: "Yellow & Black", mascot: "The Badger", relic: "Hufflepuff's Cup", 
        relicImg: "images/h-cup.jpg", crestImg: "images/h_logo.png",
        bgImg: "images/hufflepuff_common_bg.png", giantMascot: "images/hufflepuff_mascot.png",
        tagline: "WHERE YOUR HEART IS", 
        verse: "You might belong in Hufflepuff,\nWhere they are just and loyal,\nThose patient Hufflepuffs are true\nAnd unafraid of toil.",
        vignette: "rgba(35, 25, 0, 0.95)",
        badgeImg: "images/h-crest.png",
        idFrontImg: "images/hufflepuff_idfront.jpg",
        idBackImg: "images/hufflepuff_idback.jpg",
        ghost: "The Fat Friar",
        colorImg: "images/colour-hufflepuff.png", 
        ghostImg: "images/ghost-hufflepuff.png",
        prefectMessage: "Congratulations! I'm Prefect Gabriel Truman, and I'm delighted to welcome you to HUFFLEPUFF HOUSE. Our emblem is the badger, an animal that is often underestimated. Our house colours are yellow and black, and our common room lies one floor below ground, towards the kitchens. You will find no true friends anywhere else.",
        prefectMessageExtended: `Now, there are a few things you should know about Hufflepuff house. First of all, let’s deal with a perennial myth about the place, which is that we’re the least clever house. WRONG. Hufflepuff is certainly the least boastful house, but we’ve produced just as many brilliant witches and wizards as any other. Want proof? Look up Grogan Stump, one of the most popular Ministers for Magic of all time. He was a Hufflepuff – as were the successful Ministers Artemesia Lufkin and Dugald McPhail. Then there’s the world authority on magical creatures, Newt Scamander; Bridget Wenlock, the famous thirteenth-century Arithmancer who first discovered the magical properties of the number seven, and Hengist of Woodcroft, who founded the all-wizarding village of Hogsmeade, which lies very near Hogwarts School. Hufflepuffs all.

So, as you can see, we’ve produced more than our fair share of powerful, brilliant and daring witches and wizards, but, just because we don’t shout about it, we don’t get the credit we deserve. Ravenclaws, in particular, assume that any outstanding achiever must have come from their house. I got into big trouble during my third year for duelling a Ravenclaw prefect who insisted that Bridget Wenlock had come from his house, not mine. I should have got a week of detentions, but Professor Sprout let me off with a warning and a box of coconut ice.

Hufflepuffs are trustworthy and loyal. We don’t shoot our mouths off, but cross us at your peril; like our emblem, the badger, we will protect ourselves, our friends and our families against all-comers. Nobody intimidates us.

However, it’s true that Hufflepuff is a bit lacking in one area. We’ve produced the fewest Dark wizards of any house in this school. Of course, you’d expect Slytherin to churn out evil-doers, seeing as they’ve never heard of fair play and prefer cheating over hard work any day, but even Gryffindor (the house we get on best with) has produced a few dodgy characters.

What else do you need to know? Oh yes, the entrance to the common room is concealed in a stack of large barrels in a nook on the right hand side of the kitchen corridor. Tap the barrel two from the bottom, middle of the second row, in the rhythm of ‘Helga Hufflepuff’, and the lid will swing open. We are the only house at Hogwarts that also has a repelling device for would-be intruders. If the wrong lid is tapped, or if the rhythm of the tapping is wrong, the illegal entrant is doused in vinegar.

You will hear other houses boast of their security arrangements, but it so happens that in more than a thousand years, the Hufflepuff common room and dormitories have never been seen by outsiders. Like badgers, we know exactly how to lie low – and how to defend ourselves.

Once you’ve opened the barrel, crawl inside and along the passageway behind it, and you will emerge into the cosiest common room of them all. It is round and earthy and low-ceilinged; it always feels sunny, and its circular windows have a view of rippling grass and dandelions.

There is a lot of burnished copper about the place, and many plants, which either hang from the ceiling or sit on the windowsills. Our Head of house, Professor Pomona Sprout, is Head of Herbology, and she brings the most interesting specimens (some of which dance and talk) to decorate our room – one reason why Hufflepuffs are often very good at Herbology. Our overstuffed sofas and chairs are upholstered in yellow and black, and our dormitories are reached through round doors in the walls of the common room. Copper lamps cast a warm light over our four-posters, all of which are covered in patchwork quilts, and copper bed warmers hang on the walls, should you have cold feet.

Our house ghost is the friendliest of them all: the Fat Friar. You’ll recognise him easily enough; he’s plump and wears monk’s robes, and he’s very helpful if you get lost or are in any kind of trouble.

I think that’s nearly everything. I must say, I hope some of you are good Quidditch players. Hufflepuff hasn’t done as well as I’d like in the Quidditch tournament lately.

You should sleep comfortably. We’re protected from storms and wind down in our dormitories; we never have the disturbed nights those in the towers sometimes experience.

And once again: congratulations on becoming a member of the friendliest, most decent and most tenacious house of them all.`,
        loreText: "You probably know that some of Hufflepuff’s most renowned members include Nymphadora Tonks and Cedric Diggory. But did you know that Hufflepuff’s house ghost, the Fat Friar, still resents the fact he was never made a cardinal? Or that Hufflepuff has produced the fewest Dark wizards of any house at Hogwarts?"
    }
};

const questions = [
    {
        text: "A magical goblet appears before you. Would you rather invent a potion that would guarantee you:",
        theme: "liquid", 
        answers: [
            { text: "The golden liquid that froths and sparks <br> (Glory)", scores: { G: 5, R: 0, H: 0, S: 0 } },
            { text: "The luminous emerald potion that swirls like smoke <br> (Power)", scores: { G: 0, R: 0, H: 0, S: 5 } },
            { text: "The clear blue liquid that smells of ink <br> (Wisdom)", scores: { G: 0, R: 5, H: 0, S: 0 } },
            { text: "The warm purple liquid that smells of chocolate <br> (Comfort)", scores: { G: 0, R: 0, H: 5, S: 0 } }
        ]
    },
    {
        text: "Four boxes are placed before you. Which would you try and open?",
        answers: [
            { text: "The small pewter box that says 'I open only for the worthy'", scores: { G: 5, R: 0, H: 0, S: 0 } },
            { text: "The gleaming jet black box marked with the rune of Merlin", scores: { G: 0, R: 0, H: 0, S: 5 } },
            { text: "The ornate golden casket that promises secret knowledge", scores: { G: 0, R: 5, H: 0, S: 0 } },
            { text: "The tortoiseshell box, inside which something is squeaking", scores: { G: 0, R: 0, H: 5, S: 0 } }
        ]
    },
    {
        text: "Which nightmare would frighten you most?",
        theme: "carousel", 
        answers: [
            { text: "Waking up to find that neither your friends nor your family have any idea who you are.", img: "nightmare_isolation.png", scores: { G: 0, R: 0, H: 5, S: 0 } },
            { text: "Being forced to speak in a silly voice while everyone laughs.", img: "nightmare_voice.png", scores: { G: 0, R: 0, H: 0, S: 5 } },
            { text: "Standing on top of something very high with nothing to stop you falling.", img: "nightmare_heights.png", scores: { G: 5, R: 0, H: 0, S: 0 } },
            { text: "An eye looking through the keyhole of a dark, windowless room you are locked in.", img: "nightmare_eye.png", scores: { G: 0, R: 5, H: 0, S: 0 } }
        ]
    },
    {
        text: "What are you most looking forward to learning at Hogwarts?",
        theme: "carousel", 
        answers: [
            { text: "Flying on a Broomstick", img: "broomstick_flying.png", scores: { G: 5, R: 0, H: 1, S: 0 } },
            { text: "Apparition and Disapparition", img: "apparition_person.png", scores: { G: 0, R: 3, H: 0, S: 2 } },
            { text: "Hexes, Jinxes, and Duelling", img: "hexes_jinxes.png", scores: { G: 0, R: 0, H: 0, S: 5 } },
            { text: "Transfiguration & Complex Spells", img: "transfiguration_obj.png", scores: { G: 0, R: 5, H: 0, S: 0 } },
            { text: "Care of Magical Creatures", img: "magical_creatures.png", scores: { G: 0, R: 0, H: 5, S: 0 } },
            { text: "Secrets about the Castle", img: "secrets_castle.png", scores: { G: 2, R: 2, H: 0, S: 2 } },
            { text: "Every area of magic", img: "every_magic.png", scores: { G: 2, R: 2, H: 0, S: 2 } }
        ]
    },
    {
        text: "Which of the following would you most like to study?",
        theme: "creature-3d",
        answers: [
            { text: "Centaurs", img: "centaur.png", bg: "centaur_bg.png", scores: { G: 3, R: 4, H: 0, S: 0 } },
            { text: "Dementors", img: "dementor.png", bg: "dementor_bg.png", scores: { G: 0, R: 4, H: 0, S: 3 } },
            { text: "Dragons", img: "dragon.png", bg: "dragon_bg.png", scores: { G: 0, R: 0, H: 2, S: 5 } },
            { text: "Ghosts", img: "ghosts.png", bg: "ghosts_bg.png", scores: { G: 2, R: 5, H: 0, S: 0 } },
            { text: "Goblins", img: "goblin.png", bg: "goblin_bg.png", scores: { G: 0, R: 0, H: 0, S: 5 } },
            { text: "Hippogriffs", img: "hippogriff.png", bg: "hippogriff_bg.png", scores: { G: 5, R: 0, H: 3, S: 0 } },
            { text: "Merpeople", img: "merpeople.png", bg: "merpeople_bg.png", scores: { G: 0, R: 0, H: 5, S: 2 } },
            { text: "Phoenix", img: "phoenix.png", bg: "phoenix_bg.png", scores: { G: 0, R: 0, H: 0, S: 5 } },
            { text: "Trolls", img: "troll.png", bg: "troll_bg.png", scores: { G: 5, R: 0, H: 0, S: 2 } },
            { text: "Unicorn", img: "unicorn.png", bg: "unicorn_bg.png", scores: { G: 3, R: 0, H: 4, S: 0 } },
            { text: "Vampires", img: "vampire.png", bg: "vampire_bg.png", scores: { G: 5, R: 3, H: 0, S: 0 } },
            { text: "Werewolves", img: "werewolf.png", bg: "werewolf_bg.png", scores: { G: 0, R: 0, H: 5, S: 0 } }
        ]
    },
    {
        text: "Which companion will you bring with you to Hogwarts?",
        theme: "triptych", 
        answers: [
            { text: "A Cat", scores: { }, followUp: { 
                text: "What kind of Cat?", theme: "flip-card", 
                answers: [ 
                    { text: "Ginger Cat", img: "cat_ginger.png", scores: { G: 4, R: 0, H: 1, S: 0 } }, 
                    { text: "Black Cat", img: "cat_black.png", scores: { G: 0, R: 0, H: 0, S: 4 } }, 
                    { text: "White Cat", img: "cat_white.png", scores: { G: 0, R: 3, H: 0, S: 2 } }, 
                    { text: "Tabby Cat", img: "cat_tabby.png", scores: { G: 2, R: 2, H: 1, S: 0 } }, 
                    { text: "Siamese Cat", img: "cat_siamese.png", scores: { G: 0, R: 2, H: 0, S: 3 } } 
                ] 
            } },
            { text: "A Toad", scores: { }, followUp: { 
                text: "What kind of Toad?", theme: "flip-card",
                answers: [ 
                    { text: "Common Toad", img: "toad_common.png", scores: { G: 0, R: 0, H: 5, S: 0 } }, 
                    { text: "Natterjack Toad", img: "toad_natterjack.png", scores: { G: 1, R: 0, H: 4, S: 0 } }, 
                    { text: "Dragon Toad", img: "toad_dragon.png", scores: { G: 3, R: 0, H: 0, S: 2 } }, 
                    { text: "Harlequin Toad", img: "toad_harlequin.png", scores: { G: 0, R: 3, H: 0, S: 2 } }, 
                    { text: "Three toed tree Toad", img: "toad_three_toed_tree.png", scores: { G: 0, R: 2, H: 3, S: 0 } } 
                ] 
            } },
            { text: "An Owl", scores: { }, followUp: { 
                text: "What kind of Owl?", theme: "flip-card",
                answers: [ 
                    { text: "Barn Owl", img: "owl_barn.png", scores: { G: 0, R: 2, H: 3, S: 0 } }, 
                    { text: "Tawny Owl", img: "owl_tawny.png", scores: { G: 2, R: 0, H: 3, S: 0 } }, 
                    { text: "Snowy Owl", img: "owl_snowy.png", scores: { G: 2, R: 3, H: 0, S: 0 } }, 
                    { text: "Screech Owl", img: "owl_screech.png", scores: { G: 0, R: 0, H: 0, S: 5 } }, 
                    { text: "Brown Owl", img: "owl_brown.png", scores: { G: 1, R: 1, H: 3, S: 0 } } 
                ] 
            } }
        ]
    },
    {
        text: "What kind of instrument most pleases your ear?",
        theme: "instrument",
        answers: [
            { text: "The Violin", img: "violin.png", scores: { G: 0, R: 0, H: 0, S: 5 } },
            { text: "The Trumpet", img: "trumpet.png", scores: { G: 5, R: 0, H: 0, S: 0 } },
            { text: "The Piano", img: "piano.png", scores: { G: 0, R: 5, H: 0, S: 0 } },
            { text: "The Drum", img: "drum.png", scores: { G: 0, R: 0, H: 5, S: 0 } }
        ]
    },
    {
        text: "Dawn or Dusk?",
        answers: [
            { text: "Dawn", scores: { G: 3, R: 0, H: 3, S: 0 } },
            { text: "Dusk", scores: { G: 0, R: 3, H: 0, S: 3 } }
        ]
    }
];

// ==========================================================================
// 2. GLOBAL STATE & BOOT SEQUENCE
// ==========================================================================
let houseScores = { G: 0, R: 0, H: 0, S: 0 };
let collectedData = {}; 
let currentQ = 0;
let currentOptionIndex = 0; 
let moteInterval, rayInterval;
let isTransitioning = false;
let currentAstroState = null;

initMagicalRays(); 

// ==========================================================================
// 3. PHASE 1: ONBOARDING & REGISTRATION
// ==========================================================================
function startCeremony() {
    const landing = document.getElementById("landing-page");
    const landingContent = document.querySelector(".landing-content"); 
    const regPage = document.getElementById("registration-page");
    const startBtn = document.querySelector(".start-btn");
    
    if (rayInterval) clearInterval(rayInterval);
    
    if (startBtn) {
        startBtn.style.transform = "scale(0.9)";
        startBtn.style.opacity = "0";
        startBtn.style.pointerEvents = "none";
    }

    if (landingContent) {
        landingContent.style.transition = "opacity 1s ease-in-out, transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)";
        landingContent.style.opacity = "0";
        landingContent.style.transform = "scale(1.1)"; 
    }
    
    landing.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => { landing.style.opacity = "0"; }, 300); 
    
    setTimeout(() => {
        regPage.style.zIndex = "10000";
        regPage.style.display = "flex";
        setTimeout(() => { regPage.style.opacity = "1"; }, 50);
    }, 800); 
    
    setTimeout(() => {
        landing.style.display = "none";
        initMotes(); 
        preloadAllMagicalAssets();
    }, 2000);
}

function preloadAllMagicalAssets() {
    const allImages = new Set([
        // Core Backgrounds & Crests
        "images/Red_bg.jpg", "images/Green_bg.jpg", "images/Blue_bg.jpg", "images/Yellow_bg.jpg",
        "images/g_logo.png", "images/s_logo.png", "images/r_logo.png", "images/h_logo.png",
        
        // Hardcoded Quiz Assets (Potions, Boxes, Companions, Tarot)
        "images/potion_glory.png", "images/potion_power.png", "images/potion_wisdom.png", "images/potion_comfort.png",
        "images/SmallPewter.png", "images/JetBlack.png", "images/GoldenCasket.png", "images/TortoiseShell.png",
        "images/cat.png", "images/toad.png", "images/owl.png",
        "images/tarot_corner1.png", "images/tarot_corner2.png", "images/tarot_corner3.png",
        
        // Astrolabe
        "images/dawn_scenery.png", "images/dusk_scenery.png", "images/dawn_button.png", "images/dusk_button.png"
    ]);

    questions.forEach(q => {
        if (q.answers) {
            q.answers.forEach(a => {
                if (a.img) allImages.add(`images/${a.img}`);
                if (a.bg) allImages.add(`images/${a.bg}`);
                // Check follow-up questions (like the specific breeds of cats/owls)
                if (a.followUp && a.followUp.answers) {
                    a.followUp.answers.forEach(fa => {
                        if (fa.img) allImages.add(`images/${fa.img}`);
                    });
                }
            });
        }
    });

    Object.values(HOUSE_LORE).forEach(lore => {
        allImages.add(lore.relicImg);
        allImages.add(lore.crestImg);
        allImages.add(lore.bgImg);
        allImages.add(lore.giantMascot);
        allImages.add(lore.badgeImg);
        allImages.add(lore.idFrontImg);
        allImages.add(lore.idBackImg);
        allImages.add(lore.colorImg);
        allImages.add(lore.ghostImg);
    });

    allImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

function submitRegistration() {
    const fields = ["reg-name", "reg-email", "reg-age", "reg-gender", "reg-city", "reg-zodiac", "reg-trait"];
    
    const emailField = document.getElementById("reg-email");
    let emailVal = "";

    if (emailField) {
        emailVal = emailField.value.trim().toLowerCase();
        if (!emailVal || !emailVal.includes("@") || !emailVal.includes(".")) {
            // Magical Alert instead of browser alert
            showMinistryAlert("Invalid Entry", "The Ministry requires a valid Owl Post Address (Email).");
            return;
        }
        
        // 1. CHECK FOR EXISTING PROFILE
        const savedProfileStr = localStorage.getItem("hogwarts_profile_" + emailVal);
        if (savedProfileStr) {
            // Use magical alert, pass the teleportation logic as a callback!
            showMinistryAlert("Records Found", "Welcome back! The Ministry has retrieved your existing records.", () => {
                const profile = JSON.parse(savedProfileStr);
                collectedData = profile.data;
                houseScores = profile.scores;
                
                if (moteInterval) clearInterval(moteInterval);
                
                const regPage = document.getElementById("registration-page");
                if (regPage) {
                    regPage.style.transition = "opacity 0.8s ease";
                    regPage.style.opacity = "0"; 
                    setTimeout(() => { 
                        regPage.style.display = "none"; 
                        showResultsDashboard(profile.winner); 
                    }, 800);
                }
            });
            return; 
        }
    }

    // 2. NORMAL FLOW FOR NEW USERS
    for (let id of fields) {
        const val = document.getElementById(id).value;
        if (!val) { 
            // Magical Alert instead of browser alert
            showMinistryAlert("Incomplete Form", "The Ministry requires ALL particulars."); 
            return; 
        }
        collectedData[id.replace("reg-", "")] = val;
    }

    if (moteInterval) clearInterval(moteInterval);
    askPreference();

    const regPage = document.getElementById("registration-page");
    if (regPage) {
        regPage.style.transition = "opacity 0.8s ease";
        regPage.style.opacity = "0"; 
        setTimeout(() => { regPage.style.display = "none"; }, 1000);
    }
}

// ==========================================================================
// CUSTOM MINISTRY ALERT SYSTEM
// ==========================================================================
function showMinistryAlert(title, message, callback) {
    const overlay = document.createElement("div");
    overlay.className = "ministry-alert-overlay";
    overlay.innerHTML = `
        <div class="ministry-alert-box">
            <h3 class="ministry-alert-title">${title}</h3>
            <p class="ministry-alert-text">${message}</p>
            <button class="ministry-alert-btn">ACKNOWLEDGE</button>
        </div>
    `;
    document.body.appendChild(overlay);

    // Trigger animation
    setTimeout(() => overlay.classList.add("active"), 10);

    // Handle closure and callback
    const btn = overlay.querySelector(".ministry-alert-btn");
    btn.onclick = () => {
        overlay.classList.remove("active");
        setTimeout(() => {
            overlay.remove();
            if (callback) callback();
        }, 400);
    };
}

function askPreference() {
    const gameBox = document.getElementById("game-box");
    if(gameBox) gameBox.style.display = "none";

    const screen = document.createElement("div");
    screen.className = "house-split-screen";
    screen.style.zIndex = "10005";
    
    const houses = [
        { id: "Hufflepuff", trait: "Loyalty", class: "quad-h", img: "images/h_logo.png" }, 
        { id: "Gryffindor", trait: "Bravery", class: "quad-g", img: "images/g_logo.png" }, 
        { id: "Slytherin",  trait: "Ambition", class: "quad-s", img: "images/s_logo.png" }, 
        { id: "Ravenclaw",  trait: "Wisdom",   class: "quad-r", img: "images/r_logo.png" }  
    ];

   houses.forEach(h => {
        const quad = document.createElement("div");
        quad.className = `quadrant ${h.class}`;
        quad.innerHTML = `<img src="${h.img}" class="quad-crest"><div class="quad-info"><h2 class="quad-name">${h.id.toUpperCase()}</h2><p class="quad-trait">${h.trait}</p></div>`;
        
        quad.onclick = () => {
            collectedData.prediction = h.id; 

            // 1. Gently fade out the House Selection screen with a cinematic push
            screen.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
            screen.style.opacity = "0";
            screen.style.transform = "scale(1.05)"; 

            // 2. Wait for the screen to be completely gone
            setTimeout(() => { 
                screen.remove(); 
                
                // 3. Prepare the Quiz Engine to be invisible initially
                if(gameBox) { 
                    gameBox.style.setProperty("display", "flex", "important"); 
                    gameBox.style.opacity = "0"; 
                    gameBox.style.transition = "opacity 1.5s ease-in-out"; // Add smooth fade
                }

                // 4. Initialize the first question in the DOM
                startQuiz(); 
                
                // 5. Trigger the fade-in after a micro-delay so the browser registers the transition
                setTimeout(() => {
                    if(gameBox) gameBox.style.opacity = "1";
                }, 50);

            }, 1000); // 1-second delay perfectly matches the fade-out
        };
        screen.appendChild(quad);
    });

    const centerBox = document.createElement("div");
    centerBox.className = "center-question-box";
    centerBox.innerHTML = `<div class="center-content-wrapper"><img src="images/sorting-hat.png" class="center-hat"><div class="center-text">Which House<br>Calls to You?</div></div>`;
    screen.appendChild(centerBox);
    document.body.appendChild(screen);
}

// ==========================================================================
// 4. PHASE 2: CORE QUIZ ENGINE
// ==========================================================================
function startQuiz() { 
    currentQ = 0; 
    showQuestion(); 
}

function showQuestion() {
    const q = questions[currentQ];
    currentOptionIndex = 0; 
    
    const element = document.getElementById("typewriter-text");
    const optionsDiv = document.getElementById("options");
    const gameBox = document.getElementById("game-box");

    if (gameBox) gameBox.classList.remove("triptych-mode", "flip-card-mode");

    element.innerHTML = `<span class="manifesting-text">${q.text}</span>`;
    
    optionsDiv.innerHTML = "";
    optionsDiv.style.opacity = "1"; 
    optionsDiv.className = "";
    optionsDiv.style.pointerEvents = "auto";
    
    if(gameBox) {
        gameBox.style.display = "flex";
        gameBox.style.opacity = "1";
    }
    
    const isCarousel = q.text.includes("nightmare") || q.text.includes("garden"); 
    const isDiorama = q.text.includes("learning");

    if (isDiorama) {
        document.body.style.setProperty('--mist-color', 'transparent');
        const ghostColors = { "centaur.png": "140, 50, 10", "goblin.png": "255, 190, 40", "merpeople.png": "0, 200, 150", "ghost.png": "70, 100, 160", "vampire.png": "200, 0, 30", "werewolf.png": "250, 250, 245", "troll.png": "100, 120, 150" };

        let trackHtml = q.answers.map((ans, i) => {
            let color = ghostColors[ans.img] || "150, 220, 255"; 
            return `<div class="diorama-item ${i === 0 ? 'active' : ''}" style="--ghost-color: ${color};"><img src="images/${ans.img}" class="diorama-img" alt="${ans.text}"></div>`;
        }).join('');

        optionsDiv.innerHTML = `
            <div class="diorama-wrapper" style="opacity: 0; animation: mistReveal 1s ease 0.5s forwards;">
                <div class="carousel-wrapper">
                    <button type="button" class="nav-arrow" onclick="cycleOption(-1, 'diorama')">&#10094;</button>
                    <div class="diorama-stage"><div class="diorama-bg"></div><div class="diorama-track" id="diorama-track">${trackHtml}</div><div id="diorama-title" class="diorama-title-overlay">${q.answers[0].text}</div><div class="diorama-mask"></div></div>
                    <button type="button" class="nav-arrow" onclick="cycleOption(1, 'diorama')">&#10095;</button>
                </div>
                <div class="select-btn-container" style="margin-top: 5px;">
                    <button type="button" class="select-btn" onclick="confirmSelection(event)">SELECT</button>
                </div>
            </div>
        `;
        optionsDiv.style.display = "block";
        updateDioramaMath();

    } else if (q.theme === "creature-3d") {
        window.currentCreatureIndex = 0; 
        optionsDiv.className = "options-grid theme-creature-carousel";
        optionsDiv.style.display = "flex";
        optionsDiv.innerHTML = `
            <div class="creature-slider-container" style="opacity: 0; animation: mistReveal 1s ease 0.5s forwards;">
                <button type="button" class="nav-arrow" onclick="cycleOption(-3, 'creature')">&#10094;</button>
                <div class="creature-slider-window"><div class="creature-track" id="creature-track"></div></div>
                <button type="button" class="nav-arrow" onclick="cycleOption(3, 'creature')">&#10095;</button>
            </div>
        `;

        const track = document.getElementById("creature-track");
        q.answers.forEach(ans => {
            const card = document.createElement("div");
            card.className = "creature-card";
            card.innerHTML = `<div class="wrapper"><img src="images/${ans.bg}" class="cover-image" alt="Background"></div><img src="images/${ans.img}" class="character" alt="${ans.text}"><div class="title-container"><h3 class="title">${ans.text}</h3></div>`;
            card.onclick = () => handleAnswer(ans);
            track.appendChild(card);
        });

    } else if (isCarousel) {
        optionsDiv.innerHTML = `
            <div class="carousel-wrapper" style="opacity: 0; animation: mistReveal 1s ease 0.5s forwards;">
                <button type="button" class="nav-arrow" onclick="cycleOption(-1, 'slider')">&#10094;</button>
                <div id="active-card" class="slider-card"></div>
                <button type="button" class="nav-arrow" onclick="cycleOption(1, 'slider')">&#10095;</button>
            </div>
            <div class="select-btn-container" style="opacity: 0; animation: mistReveal 1s ease 0.8s forwards;">
                <button type="button" class="select-btn" onclick="confirmSelection(event)">SELECT</button>
            </div>
        `;
        updateSliderCard();
        optionsDiv.style.display = "block";

    } else {
        let theme = "standard";
        if (q.text.includes("goblet")) theme = "liquid";
        else if (q.text.includes("boxes")) theme = "box";
        else if (q.text.includes("Dawn")) theme = "binary";
        else if (q.text.includes("companion")) theme = "triptych"; 
        else if (q.text.includes("instrument")) theme = "instrument";
        else if (q.theme === "flip-card") theme = "flip-card";

        if (q.text.includes("Dawn") || q.text.includes("Dusk")) {
            if(gameBox) gameBox.style.display = 'none'; 
            const portal = document.getElementById("binary-portal");
            if (portal) portal.classList.add("active");
            return;
        }

        optionsDiv.className = "options-grid theme-" + theme;
        optionsDiv.style.display = "flex";

        if (theme === "triptych") {
            if(gameBox) gameBox.classList.add("triptych-mode");
            const petData = [{ id: 'cat', img: 'cat.png', title: 'Cats', index: 'I' }, { id: 'toad', img: 'toad.png', title: 'Toads', index: 'II' }, { id: 'owl', img: 'owl.png', title: 'Owls', index: 'III' }];
            [q.answers.find(a => a.text.includes("Cat")), q.answers.find(a => a.text.includes("Toad")), q.answers.find(a => a.text.includes("Owl"))].forEach((ans, index) => {
                const data = petData[index];
                const card = document.createElement("div");
                card.className = "card-triptych";
                card.innerHTML = `<div class="triptych-visuals"><img src="images/${data.img}" class="triptych-img" alt="${data.title}"><div class="triptych-gradient"></div></div><div class="triptych-ui"><div class="triptych-diamond"><span>${data.index}</span></div><h3 class="triptych-title">${data.title}</h3><button class="triptych-select">SELECT</button></div>`;
                card.onclick = () => { handleAnswer(ans); };
                card.style.animationDelay = `${0.4 + (index * 0.2)}s`;
                optionsDiv.appendChild(card);
            });
            
        } else if (theme === "flip-card") {
            if(gameBox) gameBox.classList.add("flip-card-mode"); 
            optionsDiv.className = "options-grid theme-flip-card";
            q.answers.forEach((ans, index) => {
                const card = document.createElement("div");
                card.className = "card-flip-container";
                const roman = ["I", "II", "III", "IV", "V"][index];
                let cornerImg = q.text.includes("Toad") ? "tarot_corner2.png" : q.text.includes("Owl") ? "tarot_corner3.png" : "tarot_corner1.png";
                
                card.innerHTML = `
                    <div class="card-flip-inner">
                        <div class="card-flip-front">
                            <div class="astrolabe-ring ring-outer"></div><div class="astrolabe-ring ring-inner"></div>
                            <div class="tarot-corner corner-tl" style="background-image: url('images/${cornerImg}');"></div><div class="tarot-corner corner-tr" style="background-image: url('images/${cornerImg}');"></div>
                            <div class="tarot-corner corner-bl" style="background-image: url('images/${cornerImg}');"></div><div class="tarot-corner corner-br" style="background-image: url('images/${cornerImg}');"></div>
                            <div class="astrolabe-numeral">✦ ${roman} ✦</div><h3 class="astrolabe-title">${ans.text}</h3>
                        </div>
                        <div class="card-flip-back">
                            <img src="images/${ans.img}" class="flip-img" alt="${ans.text}">
                            <div class="flip-overlay"><button class="diamond-btn"><span class="star-layer"></span><span class="diamond-text">SELECT</span></button></div>
                        </div>
                    </div>
                `;
                card.querySelector('.diamond-btn').onclick = (e) => { e.stopPropagation(); handleAnswer(ans); };
                card.style.animationDelay = `${0.3 + (index * 0.1)}s`;
                optionsDiv.appendChild(card);
            });

        } else {
            q.answers.forEach((ans, index) => {
                const card = document.createElement("div");
                card.className = "magical-card";
                if (theme === "liquid") {
                    card.classList.add("card-liquid", ["liquid-gold", "liquid-green", "liquid-blue", "liquid-purple"][index]);
                    card.innerHTML = `<div class="liquid-wrapper"></div><img src="images/${["potion_glory.png", "potion_power.png", "potion_wisdom.png", "potion_comfort.png"][index]}" class="vial-img" alt="Potion"><div class="vial-shine"></div><span class="card-text">${ans.text}</span>`;
                } else if (theme === "box") {
                    card.classList.add("card-box", ["box-pewter", "box-black", "box-gold", "box-shell"][index]);
                    card.innerHTML = `<div class="box-visual-wrapper"><img src="images/${["SmallPewter.png", "JetBlack.png", "GoldenCasket.png", "TortoiseShell.png"][index]}" class="box-img" alt="Magical Box"><div class="box-shadow-ground"></div></div><span class="card-text">${ans.text}</span>`;
                } else if (theme === "instrument") {
                    card.classList.add("card-instrument");
                    card.innerHTML = `<img src="images/${ans.img}" class="instrument-img" alt="${ans.text}"><span class="dormant-text">${ans.text}</span><span class="card-text">${ans.text}</span>`;
                } else {
                    card.innerHTML = `<span class="card-text">${ans.text}</span>`;
                }
                card.onclick = () => handleAnswer(ans);
                card.style.animationDelay = `${0.4 + (index * 0.15)}s`;
                optionsDiv.appendChild(card);
            });
        }
    }
    updateProgress();
}

function handleAnswer(answerObj) {
    if (isTransitioning) return; 
    isTransitioning = true; 
    
    const optionsDiv = document.getElementById("options");
    if (optionsDiv) {
        optionsDiv.style.pointerEvents = "none";
        optionsDiv.style.transition = "opacity 0.4s ease";
        optionsDiv.style.opacity = "0"; 
    }

    if (!answerObj.scores) return console.error("Missing scores!");
    for(let key in answerObj.scores) houseScores[key] += answerObj.scores[key];
    if (answerObj.followUp) questions.splice(currentQ + 1, 0, answerObj.followUp);

    currentQ++;
    const box = document.getElementById("game-box");
    if(box) { box.classList.add("shake"); setTimeout(() => box.classList.remove("shake"), 500); }

    if (currentQ < questions.length) {
        setTimeout(() => { showQuestion(); isTransitioning = false; }, 500);
    } else {
        showDecisionScreen();
    }
}

// ==========================================================================
// 5. PHASE 3: THEME CONTROLLERS & INTERACTIVITY
// ==========================================================================
function confirmSelection(e) { 
    if (e) { e.preventDefault(); e.stopPropagation(); }
    handleAnswer(questions[currentQ].answers[currentOptionIndex]); 
}

function cycleOption(dir, type) {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    const len = questions[currentQ].answers.length;
    
    if (type === 'slider' || type === 'diorama') {
        currentOptionIndex = (currentOptionIndex + dir + len) % len;
        type === 'slider' ? updateSliderCard() : updateDioramaMath();
    } else if (type === 'creature') {
        window.currentCreatureIndex = (window.currentCreatureIndex + dir < 0) ? len - 3 : (window.currentCreatureIndex + dir >= len) ? 0 : window.currentCreatureIndex + dir;
        updateCreatureTrack(document.getElementById("creature-track"));
    }
}

function updateSliderCard() {
    const option = questions[currentQ].answers[currentOptionIndex];
    const card = document.getElementById("active-card");
    if(!card) return;

    const mistMap = { "nightmare_isolation.png": "rgba(0, 100, 255, 0.2)", "nightmare_voice.png": "rgba(128, 0, 128, 0.2)", "nightmare_heights.png": "rgba(255, 50, 0, 0.2)", "nightmare_eye.png": "rgba(0, 255, 100, 0.15)", "broomstick_flying.png": "rgba(200, 50, 0, 0.2)", "apparition_person.png": "rgba(255, 215, 0, 0.15)", "hexes_jinxes.png": "rgba(0, 255, 100, 0.15)", "transfiguration_obj.png": "rgba(180, 0, 255, 0.2)", "magical_creatures.png": "rgba(34, 139, 34, 0.2)", "secrets_castle.png": "rgba(25, 25, 112, 0.3)", "every_magic.png": "rgba(255, 255, 255, 0.15)" };
    document.body.style.setProperty('--mist-color', mistMap[option.img] || "rgba(255,255,255,0.05)");

    card.style.opacity = "0"; card.style.transform = "scale(0.9)";
    setTimeout(() => {
        card.innerHTML = `<div class="nightmare-visual"><img src="${option.img ? `images/${option.img}` : ''}" class="nightmare-img" alt="${option.text}"></div><div class="card-title">${option.text}</div>`;
        card.style.opacity = "1"; card.style.transform = "scale(1)";
    }, 200);
}

function updateDioramaMath() {
    const track = document.getElementById("diorama-track");
    const title = document.getElementById("diorama-title");
    const items = document.querySelectorAll(".diorama-item");
    if (!track || !title) return;

    track.style.transform = `translate3d(-${currentOptionIndex * 320}px, 0, 0)`;
    items.forEach((item, index) => item.classList.toggle("active", index === currentOptionIndex));

    title.style.opacity = "0";
    setTimeout(() => { title.innerText = questions[currentQ].answers[currentOptionIndex].text; title.style.opacity = "1"; }, 200);
}

function updateCreatureTrack(track) { track.style.transform = `translate3d(-${(window.currentCreatureIndex / 3) * 890}px, 0, 0)`; }

// --- Astrolabe Logic ---
function handleBinaryChoice(choiceText) {
    handleAnswer({ text: choiceText, scores: (choiceText === "Dawn") ? { G: 3, R: 0, H: 3, S: 0 } : { G: 0, R: 3, H: 0, S: 3 } });
    setTimeout(() => { const portal = document.getElementById('binary-portal'); if(portal) portal.classList.remove('active'); }, 1500);
}

function rotateAstrolabe(side) {
    const dial = document.getElementById('astro-dial'), bg = document.querySelector('.astrolabe-bg'), title = document.getElementById('astro-title'), desc = document.getElementById('astro-desc');
    if (!dial || dial.classList.contains('locked')) return;

    document.querySelectorAll('.astrolabe-scenery').forEach(el => el.classList.remove('active-scenery'));

    if (side === 'dawn') {
        dial.style.transform = 'rotate(0deg)'; 
        bg.style.opacity = '1'; bg.style.background = 'radial-gradient(circle at center, rgba(255, 140, 0, 0.15) 0%, rgba(0,0,0,1) 80%)';
        title.innerText = "DAWN"; title.style.color = "#ffd700"; title.style.letterSpacing = "25px"; desc.innerText = "A new beginning. The light that guides.";
        document.querySelector('.scenery-dawn')?.classList.add('active-scenery');
    } else {
        dial.style.transform = 'rotate(-180deg)'; 
        bg.style.opacity = '1'; bg.style.background = 'radial-gradient(circle at center, rgba(100, 150, 255, 0.15) 0%, rgba(0,0,0,1) 80%)';
        title.innerText = "DUSK"; title.style.color = "#c8d8e4"; title.style.letterSpacing = "25px"; desc.innerText = "The quiet end. The shadows that protect.";
        document.querySelector('.scenery-dusk')?.classList.add('active-scenery');
    }
}

function resetAstrolabe() {
    const dial = document.getElementById('astro-dial'), bg = document.querySelector('.astrolabe-bg'), title = document.getElementById('astro-title'), desc = document.getElementById('astro-desc');
    if (!dial || dial.classList.contains('locked')) return;
    dial.style.transform = 'rotate(-90deg)'; bg.style.opacity = '0';
    title.innerText = "DAWN OR DUSK?"; title.style.color = "#fff"; title.style.letterSpacing = "10px";
    if(desc) desc.innerText = "Choose your celestial alignment"; 
    document.querySelectorAll('.astrolabe-scenery').forEach(el => el.classList.remove('active-scenery'));
}

function selectAstrolabeChoice(choiceText) {
    const dial = document.getElementById('astro-dial'), ui = document.querySelector('.astro-ui');
    if (dial.classList.contains('locked')) return; 
    
    dial.classList.add('locked');
    dial.style.transform += ' scale(3)'; dial.style.opacity = '0';
    if (ui) { ui.style.transition = "opacity 0.5s ease"; ui.style.opacity = "0"; }
    
    document.querySelectorAll('.active-scenery').forEach(el => { el.style.transform = 'translate(-50%, -50%) scale(3)'; el.style.opacity = '0'; });
    
    setTimeout(() => {
        handleBinaryChoice(choiceText);
        setTimeout(() => {
            dial.classList.remove('locked'); dial.style.opacity = '1';
            if (ui) ui.style.opacity = '1'; 
            document.querySelectorAll('.astrolabe-scenery').forEach(el => { el.style.transform = 'translate(-50%, -50%) scale(1)'; el.style.opacity = ''; el.classList.remove('active-scenery'); });
            resetAstrolabe();
        }, 500);
    }, 1000);
}

function setAstroState(state) {
    const portal = document.getElementById('binary-portal'), dial = document.getElementById('astro-dial');
    if (!portal || !portal.classList.contains('active') || dial.classList.contains('locked')) return;
    currentAstroState = state; 
    portal.classList.remove('hover-dawn', 'hover-dusk');
    portal.classList.add(state === 'Dawn' ? 'hover-dawn' : 'hover-dusk');
    rotateAstrolabe(state.toLowerCase());
}

function confirmAstroSelection() { if (currentAstroState) selectAstrolabeChoice(currentAstroState); }

function clearAstroState() {
    const portal = document.getElementById('binary-portal'), dial = document.getElementById('astro-dial');
    if (!portal || !portal.classList.contains('active') || dial.classList.contains('locked')) return;
    currentAstroState = null; portal.classList.remove('hover-dawn', 'hover-dusk'); resetAstrolabe(); 
}

// ==========================================================================
// 6. PHASE 4: RESOLUTION, DATA SUBMISSION & DASHBOARD
// ==========================================================================
function getWinnerCode() {
    let max = 0, winnerCode = "G";
    for (let house in houseScores) { if (houseScores[house] > max) { max = houseScores[house]; winnerCode = house; } }
    const prefCode = collectedData.prediction ? collectedData.prediction.charAt(0) : "";
    if(prefCode && houseScores[prefCode] === max) winnerCode = prefCode;
    return winnerCode;
}

function showDecisionScreen() {
    const gameBox = document.getElementById("game-box");
    const overlay = document.createElement("div");
    overlay.className = "decision-overlay"; overlay.style.zIndex = "9500"; 
    
    const pContainer = document.createElement("div"); pContainer.className = "decision-particles";
    const uiContainer = document.createElement("div"); uiContainer.className = "decision-ui-wrapper";
    uiContainer.innerHTML = `<img src="images/sorting-hat.png" class="decision-hat"><h2 class="decision-title">The Sorting Hat is ready to make its decision</h2><button class="decision-btn" onclick="revealFinalHouse()">CONTINUE</button>`;
    
    overlay.appendChild(pContainer); overlay.appendChild(uiContainer); document.body.appendChild(overlay);
    
    setTimeout(() => { 
        overlay.style.opacity = "1"; spawnDecisionParticles(pContainer);
        overlay.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 30, y = (window.innerHeight / 2 - e.pageY) / 30;
            pContainer.style.transform = `translate(${x}px, ${y}px)`;
            uiContainer.style.transform = `translate(${x * -0.5}px, ${y * -0.5}px)`;
        });
    }, 50);

    if (gameBox) { gameBox.style.opacity = "0"; setTimeout(() => { gameBox.style.display = "none"; }, 1000); }
}

function revealFinalHouse() {
    const overlay = document.querySelector(".decision-overlay");
    const winnerCode = getWinnerCode();
    const fullNames = { "G": "Gryffindor", "R": "Ravenclaw", "H": "Hufflepuff", "S": "Slytherin" };
    
    if (collectedData.email) {
        const userProfile = {
            winner: winnerCode,
            scores: houseScores,
            data: collectedData
        };
        localStorage.setItem("hogwarts_profile_" + collectedData.email.toLowerCase(), JSON.stringify(userProfile));
    }

    sendDataToSheet(fullNames[winnerCode], houseScores);
    showResultsDashboard(winnerCode);

    if (overlay) { 
        overlay.style.transition = "opacity 0.4s ease"; 
        overlay.style.opacity = "0"; 
        setTimeout(() => { overlay.remove(); }, 400); 
    }
}

function showResultsDashboard(winnerCode) {
    const dashboard = document.getElementById("results-dashboard");
    const lore = HOUSE_LORE[winnerCode];
    
    dashboard.style.backgroundImage = `url('${lore.bgImg}')`;
    dashboard.style.setProperty('--vignette-color', lore.vignette);
    dashboard.style.setProperty('--id-front-url', `url('${lore.idFrontImg}')`);
    dashboard.style.setProperty('--id-back-url', `url('${lore.idBackImg}')`);
    
    document.getElementById("hero-tagline").innerText = lore.tagline;
    document.getElementById("hero-verse").innerText = lore.verse;
    document.getElementById("hero-crest").src = lore.badgeImg;
    document.getElementById("hero-house-name").innerText = lore.name.toUpperCase();
    document.getElementById("hero-house-name").style.color = lore.colorHex;
    document.getElementById("hero-mascot").src = lore.giantMascot;
    document.getElementById("lore-text").innerText = lore.loreText;
    
    document.getElementById("d-name").innerText = collectedData.name ? collectedData.name.toUpperCase() : "UNKNOWN STUDENT";
    document.getElementById("d-house").innerText = lore.name.toUpperCase();
    document.getElementById("d-house").style.color = lore.colorHex; 
    document.getElementById("d-prefect-sig").innerText = lore.headOfHouse;
    document.getElementById("d-age").innerText = collectedData.age || "UNKNOWN";
    document.getElementById("d-city").innerText = collectedData.city ? collectedData.city.toUpperCase() : "UNKNOWN";
    document.getElementById("d-zodiac").innerText = collectedData.zodiac ? collectedData.zodiac.toUpperCase() : "UNKNOWN";
    document.getElementById("d-trait").innerText = collectedData.trait ? collectedData.trait.toUpperCase() : "UNKNOWN";
    if (collectedData.gender) document.getElementById("d-gender-label").innerText = collectedData.gender.toUpperCase();

    document.getElementById("act3-relic-name").innerText = lore.relic;
    document.getElementById("act3-color-name").innerText = lore.colors;
    document.getElementById("act3-ghost-name").innerText = lore.ghost;
    document.getElementById("act3-prefect-msg").innerText = lore.prefectMessage;
    document.getElementById("act3-prefect-msg-ext").innerText = lore.prefectMessageExtended;
    
    const extWrapper = document.getElementById("prefect-ext-wrapper"), readBtn = document.getElementById("read-more-btn");
    if(extWrapper) extWrapper.classList.remove("expanded");
    if(readBtn) readBtn.innerText = "READ MORE";
    
    document.getElementById("act3-relic-img").src = lore.relicImg; 
    document.getElementById("act3-color-img").src = lore.colorImg; 
    document.getElementById("act3-ghost-img").src = lore.ghostImg;

    generateRadarChart(houseScores, lore.colorHex);
    
    dashboard.style.display = "block";
    setTimeout(() => { dashboard.style.opacity = "1"; }, 100);
}

function sendDataToSheet(winner, scores) {
    const formData = new FormData();
    for (let k in collectedData) formData.append(ENTRY_IDS[k], collectedData[k]);
    formData.append(ENTRY_IDS.winner, winner);
    formData.append(ENTRY_IDS.scores, JSON.stringify(scores));
    fetch(GOOGLE_FORM_URL, { method: "POST", mode: "no-cors", body: formData }).catch(console.error);
}

// ==========================================================================
// 7. VISUAL EFFECTS (VFX) & UI UTILITIES
// ==========================================================================
function updateProgress() {
    const bar = document.getElementById("progress-fill");
    if(bar) bar.style.width = ((currentQ) / questions.length * 100) + "%";
}

function spawnDecisionParticles(container) {
    for (let i = 0; i < 25; i++) {
        const shard = document.createElement("div"); shard.className = "magic-shard";
        shard.style.left = Math.random() * 100 + "%"; shard.style.top = Math.random() * 100 + "%";
        shard.style.setProperty('--rot', Math.random() * 360 + 'deg'); shard.style.setProperty('--scale', Math.random() * 0.8 + 0.3);
        shard.style.animationDelay = (Math.random() * 5) + "s"; shard.style.animationDuration = (Math.random() * 15 + 10) + "s";
        container.appendChild(shard);
    }
    for (let i = 0; i < 40; i++) {
        const ember = document.createElement("div"); ember.className = "magic-ember";
        ember.style.left = Math.random() * 100 + "%"; ember.style.top = Math.random() * 100 + "%";
        ember.style.setProperty('--scale', Math.random() * 1.5 + 0.5);
        ember.style.animationDelay = (Math.random() * 3) + "s"; ember.style.animationDuration = (Math.random() * 6 + 4) + "s";
        container.appendChild(ember);
    }
}

function initMotes() {
    const container = document.getElementById("registration-page");
    if (!container) return;
    moteInterval = setInterval(() => {
        const mote = document.createElement("div"); mote.classList.add("mote");
        mote.style.left = Math.random() * 100 + "%"; mote.style.setProperty('--drift', Math.random());
        const size = Math.random() * 7 + 5, duration = Math.random() * 8 + 4, colors = ['#ff4500', '#ff8c00', '#ffd700', '#ff6347'], rc = colors[Math.floor(Math.random() * colors.length)];
        mote.style.width = size + "px"; mote.style.height = size + "px"; mote.style.animationDuration = duration + "s";
        mote.style.background = `radial-gradient(circle, #fff 10%, ${rc} 100%)`; mote.style.boxShadow = `0 0 15px ${rc}`;
        container.appendChild(mote); setTimeout(() => mote.remove(), duration * 1000);
    }, 200);
}

function initMagicalRays() {
    const container = document.querySelector('.magical-rays');
    if (!container) return;
    rayInterval = setInterval(() => {
        const ray = document.createElement('div'), duration = Math.random() * 2 + 1;  
        ray.classList.add('ray');
        ray.style.height = (Math.random() > 0.7) ? (Math.random() * 2 + 1) + 'px' : (Math.random() * 10 + 2) + 'px';
        ray.style.background = 'linear-gradient(90deg, transparent, rgba(65, 105, 225, 0.4), transparent)';
        ray.style.width = (Math.random() * 300 + 100) + 'px'; ray.style.setProperty('--angle', (Math.random() * 360) + 'deg');
        ray.style.animation = `shootOut ${duration}s ease-out forwards`;
        container.appendChild(ray); setTimeout(() => ray.remove(), duration * 1000);
    }, 150); 
}

function generateRadarChart(scores, mainColor) {
    let maxScore = Math.max(scores.G, scores.S, scores.R, scores.H, 1); 
    const getXY = (score, angle) => {
        const radius = (score / maxScore) * 80, rad = (Math.PI / 180) * angle;
        return { x: 100 + radius * Math.cos(rad), y: 100 - radius * Math.sin(rad) };
    };
    const pR = getXY(scores.R, 0), pG = getXY(scores.G, 90), pH = getXY(scores.H, 180), pS = getXY(scores.S, 270); 

    document.getElementById("radar-container").innerHTML = `
        <svg viewBox="0 0 200 200" width="100%" height="100%" overflow="visible">
            <polygon points="100,20 180,100 100,180 20,100" fill="none" stroke="rgba(197, 160, 89, 0.2)" stroke-width="1"/>
            <polygon points="100,60 140,100 100,140 60,100" fill="none" stroke="rgba(197, 160, 89, 0.1)" stroke-width="1"/>
            <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(197, 160, 89, 0.2)" stroke-width="1" stroke-dasharray="4 4"/>
            <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(197, 160, 89, 0.2)" stroke-width="1" stroke-dasharray="4 4"/>
            <image href="images/g_logo.png" x="85" y="-15" width="30" height="30" class="radar-crest" />
            <image href="images/r_logo.png" x="185" y="85" width="30" height="30" class="radar-crest" />
            <image href="images/s_logo.png" x="85" y="185" width="30" height="30" class="radar-crest" />
            <image href="images/h_logo.png" x="-15" y="85" width="30" height="30" class="radar-crest" />
            <polygon points="${pR.x},${pR.y} ${pG.x},${pG.y} ${pH.x},${pH.y} ${pS.x},${pS.y}" fill="${mainColor}66" stroke="${mainColor}" stroke-width="2"/>
            <circle cx="${pG.x}" cy="${pG.y}" r="4" fill="#fff"/><circle cx="${pR.x}" cy="${pR.y}" r="4" fill="#fff"/>
            <circle cx="${pS.x}" cy="${pS.y}" r="4" fill="#fff"/><circle cx="${pH.x}" cy="${pH.y}" r="4" fill="#fff"/>
        </svg>
    `;
}

function togglePrefectMessage() {
    const wrapper = document.getElementById("prefect-ext-wrapper"), btn = document.getElementById("read-more-btn");
    wrapper.classList.toggle("expanded");
    btn.innerText = wrapper.classList.contains("expanded") ? "READ LESS" : "READ MORE";
}

function applyHouseTheme(winnerCode) {
    document.body.classList.remove("G-theme", "S-theme", "R-theme", "H-theme");
    document.body.classList.add(winnerCode + "-theme");
    const artifacts = {
        "G": ["images/g-crest.png", "images/g-lion.png", "images/g-sword.png", "images/g-quidditch.png", "images/g-scarf.png"], 
        "S": ["images/s-crest.png", "images/s-snake.png", "images/s-wand.png", "images/s-potion.png", "images/s-nagini.png"], 
        "R": ["images/r-crest.png", "images/r-raven.png", "images/r-books.png", "images/r-scroll.png", "images/r-crown.png"], 
        "H": ["images/h-crest.png", "images/h-badger.png", "images/h-cup.png", "images/h-plant.png", "images/h-scarf.png"] 
    };
    const images = artifacts[winnerCode];
    if (!images) return;
    for (let i = 0; i < 20; i++) {
        const icon = document.createElement("img");
        icon.className = "house-icon"; icon.src = images[Math.floor(Math.random() * images.length)];
        icon.style.cssText = `width: ${Math.random() * 50 + 30}px; left: ${Math.random() * window.innerWidth}px; top: ${Math.random() * window.innerHeight}px; animation-delay: ${Math.random() * 1.5}s; position: absolute; z-index: -1; opacity: 0.2;`;
        document.body.appendChild(icon);
    }
}