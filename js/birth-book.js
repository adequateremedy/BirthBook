"use strict";


/* =========================================================
   COURT DESCRIPTIONS
   ========================================================= */

const courtDescriptions = {

    Seelie: `
        <p>
            While the Seelie Court is traditionally considered the "lighter" or more benevolent - often prone to acts of unexpected kindness, granting blessings, or repaying debts—this benevolence is highly conditional.
        </p>

        <p>
            Seelie aligned actions are driven by a rigid sense of pride and an absolute commitment to their word; they are bound to rigorously fulfill any oath or bargain they make and place immense value on the repayment of favors/debts.
        </p>

        <p>
            However, this lighter nature does not make them universally kind. Because their morality is based on archaic social codes rather than empathy, they are highly capricious and easily offended. A perceived slight, a breach of manners, or a failure to show proper deference can instantly turn a benevolent demeanor into cruel, disproportionate vengeance. They might reward someone for a polite greeting, but ruthlessly punish another simply for interrupting or failing to appreciate their gifts.
        </p>

        <p>
            Ultimately, being Seelie means their moral compass points strictly toward the preservation of law and honor. They are capable of profound generosity and terrifying wrath, but both are dictated entirely by how the world around them interacts with their specific, unyielding rules of engagement.
        </p>
    `,

    UnSeelie: `
        <p>
            While the Unseelie Court is traditionally considered the "darker" or malevolent Court—often prone to acts of mockery, curses, or sowing chaos—this malice is rarely mindless.
        </p>

        <p>
            Unseelie aligned actions are driven by ruthless pragmatism, raw passion, and a belief in survival of the fittest; they are unbound by rigid etiquette and place immense value on absolute freedom, instinct, and the exploitation of weakness.
        </p>

        <p>
            However, this darker nature does not make them villains. Because their morality is based purely on natural hierarchies and primal desires, they are wildly unpredictable. A display of strength or a clever trick can earn their fleeting respect, while an assumption of safety can instantly turn a playful encounter into a lethal lesson. They might spare someone for being entertaining, but ruthlessly torment another simply for being vulnerable or boring.
        </p>

        <p>
            Ultimately, being Unseelie means their moral compass points strictly toward personal liberty and the exercise of power. They are capable of sudden, brutal honesty and terrifying cruelty, but both are dictated entirely by their ever-shifting whims and the raw, unvarnished truths of the world around them.
        </p>
    `,

    Shadow: `
        <p>
            While the Shadow Court is traditionally considered the elusive or liminal Court—often prone to orchestrating events from the margins, whispered secrets, and collecting forgotten debts—this obscurity is intentionally hidden.
        </p>

        <p>
            Shadow aligned actions are driven by a chilling patience, the hoarding of leverage, and a commitment to the unseen consequence; they reject the radiant pageantry of the Seelie and the reckless chaos of the Unseelie, placing immense value on manipulation, subtlety, and the absolute power of knowing what others do not.
        </p>

        <p>
            However, this quiet nature does not make them neutral. Because their morality is based entirely on maintaining hidden designs and exploiting vulnerabilities, they are deeply calculating and can be utterly devoid of mercy. A well-placed piece of information or an oath sworn can earn their unseen protection, but exposing their machinations or threatening their sanctuaries can instantly turn them into inescapable executioners. They might quietly dismantle an enemy to honor a silent bargain, but ruthlessly erase a person from existence simply because they asked the wrong question.
        </p>

        <p>
            Ultimately, being Shadow means their moral compass points strictly toward the preservation of their own enigmatic influence and a balance of the unseen. They are capable of profound, life-saving interventions and terrifyingly silent erasure, but both are dictated entirely by how the others around them interact with their intricate, unspoken agendas.
        </p>
    `
};


/* =========================================================
   EXACT INTRO TEXT
   TARGETS THE EXISTING .intro-text ELEMENT
   ========================================================= */

const introText = `
<p>
    Before birth, there is no history.
</p>

<p>
    No name. No memory. No understanding of the world beyond the confines of the womb.
</p>

<p>
    There is only experience.
</p>

<p>
    Every sensation that reaches the unborn mind becomes part of its earliest formation—warmth and pressure, rhythm and disturbance, stillness and movement, comfort and uncertainty. None of it is understood in the way an adult understands the world. Yet it is experienced, and experience leaves its impression.
</p>

<p>
    The impressions that follow are presented through abstract imagery. They are not literal scenes, objects, memories, or events. They are visual representations of experiences occurring before birth.
</p>

<p>
    Some impressions may be accompanied by sound or music. <strong>These sounds are part of the presentation and atmosphere; they are not necessarily sounds the character is experiencing within the womb.</strong> Other impressions may have no sound at all.
</p>

<p>
    Experience each impression <strong>as the character</strong>, from within that existence.
</p>

<p>
    Do not ask what the image is.
</p>

<p>
    Ask instead:
</p>

<p>
    <strong>What would I feel if this were my experience?</strong>
</p>

<p>
    After each impression, you will be presented with two opposing feelings. Choose the one that best reflects the experience being formed within you.
</p>

<p>
    Your choice is not about identifying what the image depicts.
</p>

<p>
    It is about <strong>what the experience makes you feel—and why.</strong>
</p>

<p>
    There is no answer you are expected to find.
</p>

<p>
    There is only the experience, the feeling it creates, and the choice you make from it.
</p>
`;


/* =========================================================
   PUT INTRO INTO THE EXISTING .intro-text ELEMENT
   ========================================================= */

const introElement =
    document.querySelector(".intro-text");

if (introElement) {

    introElement.innerHTML =
        introText;

}


/* =========================================================
   VISUAL EXPERIENCES
   ========================================================= */

const visualExperiences = [

    {
        file: "visual-01.webm",
        choices: [
            { text: "Bound", alignment: "S" },
            { text: "Unbound", alignment: "U" }
        ]
    },

    {
        file: "visual-02.webm",
        choices: [
            { text: "Untamed", alignment: "U" },
            { text: "Tamed", alignment: "S" }
        ]
    },

    {
        file: "visual-03.webm",
        choices: [
            { text: "Protected", alignment: "S" },
            { text: "Exposed", alignment: "U" }
        ]
    },

    {
        file: "visual-04.webm",
        choices: [
            { text: "Independent", alignment: "U" },
            { text: "Dependent", alignment: "S" }
        ]
    },

    {
        file: "visual-05.webm",
        choices: [
            { text: "Empowered", alignment: "U" },
            { text: "Powerless", alignment: "S" }
        ]
    },

    {
        file: "visual-06.webm",
        choices: [
            { text: "Respected", alignment: "S" },
            { text: "Disrespected", alignment: "U" }
        ]
    },

    {
        file: "visual-07.webm",
        choices: [
            { text: "Driven", alignment: "U" },
            { text: "Unmotivated", alignment: "S" }
        ]
    },

    {
        file: "visual-08.webm",
        choices: [
            { text: "Loyal", alignment: "S" },
            { text: "Disloyal", alignment: "U" }
        ]
    },

    {
        file: "visual-09.webm",
        choices: [
            { text: "Unaccountable", alignment: "U" },
            { text: "Accountable", alignment: "S" }
        ]
    },

    {
        file: "visual-10.webm",
        choices: [
            { text: "Liberated", alignment: "U" },
            { text: "Constrained", alignment: "S" }
        ]
    }

];


/* =========================================================
   AUDIO EXPERIENCES
   ========================================================= */

const audioExperiences = [

    {
        file: "audio-01.mp3",
        duration: 5,
        choices: [
            { text: "Committed", alignment: "S" },
            { text: "Uncommitted", alignment: "U" }
        ]
    },

    {
        file: "audio-02.mp3",
        duration: 27,
        choices: [
            { text: "Impulsive", alignment: "U" },
            { text: "Disciplined", alignment: "S" }
        ]
    },

    {
        file: "audio-03.mp3",
        duration: 20,
        choices: [
            { text: "Devoted", alignment: "S" },
            { text: "Detached", alignment: "U" }
        ]
    },

    {
        file: "audio-04.mp3",
        duration: 8,
        choices: [
            { text: "Rebellious", alignment: "U" },
            { text: "Dutiful", alignment: "S" }
        ]
    },

    {
        file: "audio-05.mp3",
        duration: 7,
        choices: [
            { text: "Honorable", alignment: "S" },
            { text: "Dishonorable", alignment: "U" }
        ]
    },

    {
        file: "audio-06.mp3",
        duration: 13,
        choices: [
            { text: "Self-Serving", alignment: "U" },
            { text: "Selfless", alignment: "S" }
        ]
    },

    {
        file: "audio-07.mp3",
        duration: 31,
        choices: [
            { text: "Restrained", alignment: "S" },
            { text: "Uninhibited", alignment: "U" }
        ]
    },

    {
        file: "audio-08.mp3",
        duration: 4,
        choices: [
            { text: "Wary", alignment: "U" },
            { text: "Trusting", alignment: "S" }
        ]
    },

    {
        file: "audio-09.mp3",
        duration: 11,
        choices: [
            { text: "Bound by Promise", alignment: "S" },
            { text: "Free of Obligation", alignment: "U" }
        ]
    },

    {
        file: "audio-10.mp3",
        duration: 13,
        choices: [
            { text: "Restless", alignment: "U" },
            { text: "Content", alignment: "S" }
        ]
    }

];


/* =========================================================
   VISUAL → AUDIO → VISUAL → AUDIO
   ========================================================= */

const experiences = [];

for (let i = 0; i < 10; i++) {

    experiences.push({
        ...visualExperiences[i],
        type: "Visual"
    });

    experiences.push({
        ...audioExperiences[i],
        type: "Audio"
    });

}


/* =========================================================
   SETTINGS
   ========================================================= */

const VISUAL_FADE_DURATION = 1500;


/* =========================================================
   GAME STATE
   ========================================================= */

let currentExperience = 0;
let seelieScore = 0;
let unseelieScore = 0;


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const introScreen =
    document.getElementById("introScreen");

const experienceScreen =
    document.getElementById("experienceScreen");

const resultScreen =
    document.getElementById("resultScreen");

const beginButton =
    document.getElementById("beginButton");

const experienceType =
    document.getElementById("experienceType");

const experienceNumber =
    document.getElementById("experienceNumber");

const videoContainer =
    document.getElementById("videoContainer");

const visualPlayer =
    document.getElementById("visualPlayer");

const audioContainer =
    document.getElementById("audioContainer");

const audioPlayer =
    document.getElementById("audioPlayer");

const questionContainer =
    document.getElementById("questionContainer");

const questionLabel =
    document.querySelector(".question-label");

const choiceContainer =
    document.getElementById("choiceContainer");

const courtName =
    document.getElementById("courtName");

const courtDescription =
    document.getElementById("courtDescription");


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
   STOP CURRENT MEDIA
   ========================================================= */

function stopCurrentMedia() {

    visualPlayer.pause();
    audioPlayer.pause();

    visualPlayer.onended = null;
    visualPlayer.onloadedmetadata = null;

    audioPlayer.onended = null;
    audioPlayer.oncanplay = null;

    visualPlayer.removeAttribute("src");
    audioPlayer.removeAttribute("src");

    visualPlayer.load();
    audioPlayer.load();

    visualPlayer.style.opacity = "0";

    audioPlayer.volume = 1;

}


/* =========================================================
   VISUAL FADE IN
   ========================================================= */

function fadeVideoIn(video) {

    video.style.opacity = "0";

    const startTime =
        performance.now();

    function animate(currentTime) {

        const elapsed =
            currentTime - startTime;

        const progress =
            Math.min(
                elapsed / VISUAL_FADE_DURATION,
                1
            );

        video.style.opacity =
            progress;

        if (progress < 1) {

            requestAnimationFrame(
                animate
            );

        }

    }

    requestAnimationFrame(
        animate
    );

}


/* =========================================================
   VISUAL FADE OUT
   ========================================================= */

function fadeVideoOut(video) {

    return new Promise(resolve => {

        const startTime =
            performance.now();

        function animate(currentTime) {

            const elapsed =
                currentTime - startTime;

            const progress =
                Math.min(
                    elapsed / VISUAL_FADE_DURATION,
                    1
                );

            video.style.opacity =
                1 - progress;

            if (progress < 1) {

                requestAnimationFrame(
                    animate
                );

            } else {

                video.style.opacity = "0";

                resolve();

            }

        }

        requestAnimationFrame(
            animate
        );

    });

}


/* =========================================================
   BEGIN
   ========================================================= */

beginButton.addEventListener(
    "click",
    () => {

        currentExperience = 0;
        seelieScore = 0;
        unseelieScore = 0;

        showScreen(
            experienceScreen
        );

        loadExperience();

    }
);


/* =========================================================
   LOAD EXPERIENCE
   ========================================================= */

function loadExperience() {

    const experience =
        experiences[currentExperience];

    if (!experience) {

        determineCourt();

        return;

    }

    stopCurrentMedia();

    experienceType.textContent =
        experience.type.toUpperCase();

    experienceNumber.textContent =
        `${currentExperience + 1} / 20`;

    questionContainer.classList.add(
        "hidden"
    );

    choiceContainer.innerHTML = "";


    /* =====================================================
       VISUAL
       ===================================================== */

    if (
        experience.type === "Visual"
    ) {

        videoContainer.classList.remove(
            "hidden"
        );

        audioContainer.classList.add(
            "hidden"
        );

        visualPlayer.src =
            `assets/visuals/${experience.file}`;

        visualPlayer.load();


        visualPlayer.onloadedmetadata =
            () => {

                fadeVideoIn(
                    visualPlayer
                );

            };


        visualPlayer.onended =
            async () => {

                visualPlayer.onended = null;

                await fadeVideoOut(
                    visualPlayer
                );

                showQuestion(
                    experience
                );

            };


        const playPromise =
            visualPlayer.play();

        if (
            playPromise !== undefined
        ) {

            playPromise.catch(
                error => {

                    console.error(
                        "Visual playback failed:",
                        error
                    );

                }
            );

        }

        return;

    }


    /* =====================================================
       AUDIO
       ===================================================== */

    videoContainer.classList.add(
        "hidden"
    );

    audioContainer.classList.remove(
        "hidden"
    );

    playAudioExperience(
        experience
    );

}


/* =========================================================
   AUDIO PLAYBACK

   NO AUDIO FADE.

   The actual MP3 "ended" event controls the transition.
   ========================================================= */

function playAudioExperience(
    experience
) {

    const audio =
        audioPlayer;

    let started = false;
    let finished = false;


    audio.pause();

    audio.currentTime = 0;

    audio.volume = 1;

    audio.src =
        `assets/audio/${experience.file}`;

    audio.load();


    audio.onended =
        () => {

            if (finished) {
                return;
            }

            finished = true;

            audio.onended = null;
            audio.oncanplay = null;

            showQuestion(
                experience
            );

        };


    function startAudio() {

        if (
            started ||
            finished
        ) {

            return;

        }

        started = true;

        const playPromise =
            audio.play();

        if (
            playPromise !== undefined
        ) {

            playPromise.catch(
                error => {

                    console.error(
                        "Audio playback failed:",
                        experience.file,
                        error
                    );

                    started = false;

                }
            );

        }

    }


    if (
        audio.readyState >= 3
    ) {

        startAudio();

    } else {

        audio.oncanplay =
            () => {

                audio.oncanplay = null;

                startAudio();

            };

    }

}


/* =========================================================
   SHOW QUESTION

   "Does this make you feel..." [BUTTON]
   "or" [BUTTON] "?"
   ========================================================= */

function showQuestion(
    experience
) {

    questionContainer.classList.remove(
        "hidden"
    );

    questionLabel.textContent =
        "Does this make you feel...";


    choiceContainer.innerHTML = "";


    const firstChoice =
        experience.choices[0];

    const secondChoice =
        experience.choices[1];


    const firstButton =
        document.createElement(
            "button"
        );

    firstButton.type =
        "button";

    firstButton.className =
        "choice-button";

    firstButton.textContent =
        firstChoice.text;


    const orText =
        document.createElement(
            "span"
        );

    orText.className =
        "choice-or";

    orText.textContent =
        " or ";


    const secondButton =
        document.createElement(
            "button"
        );

    secondButton.type =
        "button";

    secondButton.className =
        "choice-button";

    secondButton.textContent =
        secondChoice.text;


    const questionMark =
        document.createElement(
            "span"
        );

    questionMark.className =
        "choice-question-mark";

    questionMark.textContent =
        "?";


    choiceContainer.appendChild(
        firstButton
    );

    choiceContainer.appendChild(
        orText
    );

    choiceContainer.appendChild(
        secondButton
    );

    choiceContainer.appendChild(
        questionMark
    );


    firstButton.addEventListener(
        "click",
        () => {

            recordChoice(
                firstChoice
            );

        }
    );


    secondButton.addEventListener(
        "click",
        () => {

            recordChoice(
                secondChoice
            );

        }
    );

}


/* =========================================================
   RECORD CHOICE
   ========================================================= */

function recordChoice(
    choice
) {

    if (
        choice.alignment === "S"
    ) {

        seelieScore++;

    }

    else if (
        choice.alignment === "U"
    ) {

        unseelieScore++;

    }


    currentExperience++;


    if (
        currentExperience >=
        experiences.length
    ) {

        determineCourt();

    }

    else {

        loadExperience();

    }

}


/* =========================================================
   DETERMINE COURT

   EXACT TIE = SHADOW
   ========================================================= */

function determineCourt() {

    let court;


    if (
        seelieScore >
        unseelieScore
    ) {

        court = "Seelie";

    }

    else if (
        unseelieScore >
        seelieScore
    ) {

        court = "UnSeelie";

    }

    else {

        court = "Shadow";

    }


    displayResult(
        court
    );

}


/* =========================================================
   DISPLAY RESULT
   ========================================================= */

function displayResult(
    court
) {

    showScreen(
        resultScreen
    );

    courtName.textContent =
        court;

    courtDescription.innerHTML =
        courtDescriptions[court];

}
