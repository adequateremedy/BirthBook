"use strict";


/* =========================================================
   COURT DESCRIPTIONS
   ========================================================= */

const courtDescriptions = {

    Seelie: `
        <p>
            While the Seelie Court is traditionally considered the
            "lighter" or more benevolent - often prone to acts of
            unexpected kindness, granting blessings, or repaying
            debts—this benevolence is highly conditional.
        </p>

        <p>
            Seelie aligned actions are driven by a rigid sense of
            pride and an absolute commitment to their word; they are
            bound to rigorously fulfill any oath or bargain they make
            and place immense value on the repayment of favors/debts.
        </p>

        <p>
            However, this lighter nature does not make them universally
            kind. Because their morality is based on archaic social
            codes rather than empathy, they are highly capricious and
            easily offended. A perceived slight, a breach of manners,
            or a failure to show proper deference can instantly turn
            a benevolent demeanor into cruel, disproportionate
            vengeance. They might reward someone for a polite greeting,
            but ruthlessly punish another simply for interrupting or
            failing to appreciate their gifts.
        </p>

        <p>
            Ultimately, being Seelie means their moral compass points
            strictly toward the preservation of law and honor. They
            are capable of profound generosity and terrifying wrath,
            but both are dictated entirely by how the world around them
            interacts with their specific, unyielding rules of
            engagement.
        </p>
    `,


    UnSeelie: `
        <p>
            While the Unseelie Court is traditionally considered the
            "darker" or malevolent Court—often prone to acts of mockery,
            curses, or sowing chaos—this malice is rarely mindless.
        </p>

        <p>
            Unseelie aligned actions are driven by ruthless pragmatism,
            raw passion, and a belief in survival of the fittest; they
            are unbound by rigid etiquette and place immense value on
            absolute freedom, instinct, and the exploitation of
            weakness.
        </p>

        <p>
            However, this darker nature does not make them villains.
            Because their morality is based purely on natural
            hierarchies and primal desires, they are wildly
            unpredictable. A display of strength or a clever trick can
            earn their fleeting respect, while an assumption of safety
            can instantly turn a playful encounter into a lethal lesson.
            They might spare someone for being entertaining, but
            ruthlessly torment another simply for being vulnerable or
            boring.
        </p>

        <p>
            Ultimately, being Unseelie means their moral compass points
            strictly toward personal liberty and the exercise of power.
            They are capable of sudden, brutal honesty and terrifying
            cruelty, but both are dictated entirely by their
            ever-shifting whims and the raw, unvarnished truths of the
            world around them.
        </p>
    `,


    Shadow: `
        <p>
            While the Shadow Court is traditionally considered the
            elusive or liminal Court—often prone to orchestrating events
            from the margins, whispered secrets, and collecting
            forgotten debts—this obscurity is intentionally hidden.
        </p>

        <p>
            Shadow aligned actions are driven by a chilling patience,
            the hoarding of leverage, and a commitment to the unseen
            consequence; they reject the radiant pageantry of the
            Seelie and the reckless chaos of the Unseelie, placing
            immense value on manipulation, subtlety, and the absolute
            power of knowing what others do not.
        </p>

        <p>
            However, this quiet nature does not make them neutral.
            Because their morality is based entirely on maintaining
            hidden designs and exploiting vulnerabilities, they are
            deeply calculating and can be utterly devoid of mercy.
            A well-placed piece of information or an oath sworn can
            earn their unseen protection, but exposing their
            machinations or threatening their sanctuaries can instantly
            turn them into inescapable executioners. They might quietly
            dismantle an enemy to honor a silent bargain, but ruthlessly
            erase a person from existence simply because they asked the
            wrong question.
        </p>

        <p>
            Ultimately, being Shadow means their moral compass points
            strictly toward the preservation of their own enigmatic
            influence and a balance of the unseen. They are capable of
            profound, life-saving interventions and terrifyingly silent
            erasure, but both are dictated entirely by how the others
            around them interact with their intricate, unspoken agendas.
        </p>
    `
};


/* =========================================================
   VISUAL EXPERIENCES
   ========================================================= */

const visualExperiences = [

    {
        file: "visual-01.webm",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Confined", alignment: "U" },
            { text: "Free", alignment: "S" }
        ]
    },

    {
        file: "visual-02.webm",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Calm", alignment: "U" },
            { text: "Hyper", alignment: "S" }
        ]
    },

    {
        file: "visual-03.webm",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Safe", alignment: "S" },
            { text: "Threatened", alignment: "U" }
        ]
    },

    {
        file: "visual-04.webm",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Connected", alignment: "S" },
            { text: "Isolated", alignment: "U" }
        ]
    },

    {
        file: "visual-05.webm",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Peaceful", alignment: "S" },
            { text: "Disturbed", alignment: "U" }
        ]
    },

    {
        file: "visual-06.webm",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Open", alignment: "S" },
            { text: "Closed", alignment: "U" }
        ]
    },

    {
        file: "visual-07.webm",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Comforted", alignment: "S" },
            { text: "Uncomfortable", alignment: "U" }
        ]
    },

    {
        file: "visual-08.webm",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Hopeful", alignment: "U" },
            { text: "Hopeless", alignment: "S" }
        ]
    },

    {
        file: "visual-09.webm",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Loved", alignment: "S" },
            { text: "Rejected", alignment: "U" }
        ]
    },

    {
        file: "visual-10.webm",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Trusting", alignment: "U" },
            { text: "Suspicious", alignment: "S" }
        ]
    }
];


/* =========================================================
   AUDIO EXPERIENCES
   ========================================================= */

const audioExperiences = [

    {
        file: "audio-01.mp3",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Energized", alignment: "U" },
            { text: "Drained", alignment: "S" }
        ]
    },

    {
        file: "audio-02.mp3",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Relaxed", alignment: "S" },
            { text: "Tense", alignment: "U" }
        ]
    },

    {
        file: "audio-03.mp3",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Drawn In", alignment: "U" },
            { text: "Pushed Away", alignment: "S" }
        ]
    },

    {
        file: "audio-04.mp3",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Curious", alignment: "S" },
            { text: "Uneasy", alignment: "U" }
        ]
    },

    {
        file: "audio-05.mp3",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Reassured", alignment: "S" },
            { text: "Alarmed", alignment: "U" }
        ]
    },

    {
        file: "audio-06.mp3",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Grounded", alignment: "S" },
            { text: "Unstable", alignment: "U" }
        ]
    },

    {
        file: "audio-07.mp3",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Joyful", alignment: "S" },
            { text: "Sorrowful", alignment: "U" }
        ]
    },

    {
        file: "audio-08.mp3",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Powerful", alignment: "U" },
            { text: "Powerless", alignment: "S" }
        ]
    },

    {
        file: "audio-09.mp3",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Welcomed", alignment: "S" },
            { text: "Unwelcome", alignment: "U" }
        ]
    },

    {
        file: "audio-10.mp3",
        question: "Does this experience make you feel:",
        choices: [
            { text: "Certain", alignment: "U" },
            { text: "Uncertain", alignment: "S" }
        ]
    }
];


/* =========================================================
   COMBINE EXPERIENCES
   ========================================================= */

const experiences = [

    ...visualExperiences.map(item => ({
        ...item,
        type: "Visual"
    })),

    ...audioExperiences.map(item => ({
        ...item,
        type: "Audio"
    }))

];


/* =========================================================
   GAME STATE
   ========================================================= */

let currentExperience = 0;

let seelieScore = 0;
let unseelieScore = 0;


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const introScreen = document.getElementById("introScreen");
const experienceScreen = document.getElementById("experienceScreen");
const resultScreen = document.getElementById("resultScreen");

const beginButton = document.getElementById("beginButton");

const experienceType = document.getElementById("experienceType");
const experienceNumber = document.getElementById("experienceNumber");

const videoContainer = document.getElementById("videoContainer");
const visualPlayer = document.getElementById("visualPlayer");

const audioContainer = document.getElementById("audioContainer");
const audioPlayer = document.getElementById("audioPlayer");

const questionContainer = document.getElementById("questionContainer");
const questionLabel = document.querySelector(".question-label");
const choiceContainer = document.getElementById("choiceContainer");

const courtName = document.getElementById("courtName");
const courtDescription = document.getElementById("courtDescription");


/* =========================================================
   SCREEN MANAGEMENT
   ========================================================= */

function showScreen(screen) {

    introScreen.classList.remove("active");
    experienceScreen.classList.remove("active");
    resultScreen.classList.remove("active");

    screen.classList.add("active");
}


/* =========================================================
   BEGIN
   ========================================================= */

beginButton.addEventListener("click", () => {

    currentExperience = 0;

    seelieScore = 0;
    unseelieScore = 0;

    showScreen(experienceScreen);

    loadExperience();

});


/* =========================================================
   LOAD EXPERIENCE
   ========================================================= */

function loadExperience() {

    const experience = experiences[currentExperience];

    if (!experience) {
        determineCourt();
        return;
    }


    /* -----------------------------------------
       Progress
       ----------------------------------------- */

    experienceType.textContent = experience.type.toUpperCase();

    experienceNumber.textContent =
        `${currentExperience + 1} / ${experiences.length}`;


    /* -----------------------------------------
       Reset Question
       ----------------------------------------- */

    questionContainer.classList.add("hidden");

    choiceContainer.innerHTML = "";


    /* -----------------------------------------
       VISUAL
       ----------------------------------------- */

    if (experience.type === "Visual") {

        videoContainer.classList.remove("hidden");
        audioContainer.classList.add("hidden");

        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        audioPlayer.removeAttribute("src");
        audioPlayer.load();


        visualPlayer.pause();

        visualPlayer.src =
            `assets/visuals/${experience.file}`;

        visualPlayer.load();

        visualPlayer.onended = () => {
            showQuestion(experience);
        };

        visualPlayer.play().catch(() => {
            showQuestion(experience);
        });

    }


    /* -----------------------------------------
       AUDIO
       ----------------------------------------- */

    else {

        videoContainer.classList.add("hidden");
        audioContainer.classList.remove("hidden");

        visualPlayer.pause();

        visualPlayer.removeAttribute("src");
        visualPlayer.load();


        audioPlayer.pause();

        audioPlayer.src =
            `assets/audio/${experience.file}`;

        audioPlayer.load();

        audioPlayer.onended = () => {
            showQuestion(experience);
        };

        audioPlayer.play().catch(() => {
            showQuestion(experience);
        });

    }

}


/* =========================================================
   SHOW QUESTION
   ========================================================= */

function showQuestion(experience) {

    questionContainer.classList.remove("hidden");

    questionLabel.textContent =
        experience.question;

    choiceContainer.innerHTML = "";


    experience.choices.forEach(choice => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "choice-button";

        button.textContent = choice.text;

        button.addEventListener("click", () => {
            recordChoice(choice);
        });

        choiceContainer.appendChild(button);

    });

}


/* =========================================================
   RECORD CHOICE
   ========================================================= */

function recordChoice(choice) {

    if (choice.alignment === "S") {

        seelieScore++;

    }

    else if (choice.alignment === "U") {

        unseelieScore++;

    }


    currentExperience++;


    if (currentExperience >= experiences.length) {

        determineCourt();

    }

    else {

        loadExperience();

    }

}


/* =========================================================
   DETERMINE COURT
   ========================================================= */

function determineCourt() {

    let court;


    if (seelieScore > unseelieScore) {

        court = "Seelie";

    }

    else if (unseelieScore > seelieScore) {

        court = "UnSeelie";

    }

    else {

        court = "Shadow";

    }


    displayResult(court);

}


/* =========================================================
   DISPLAY RESULT
   ========================================================= */

function displayResult(court) {

    showScreen(resultScreen);

    courtName.textContent = court;

    courtDescription.innerHTML =
        courtDescriptions[court];

}
