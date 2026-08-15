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
            consequence; they reject the radiant pageantry of the Seelie
            and the reckless chaos of the Unseelie, placing immense
            value on manipulation, subtlety, and the absolute power of
            knowing what others do not.
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
            erase a person from existence simply because they asked
            the wrong question.
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
        question: "What feeling does this evoke?",
        choices: [
            { text: "Bound", alignment: "S" },
            { text: "Unbound", alignment: "U" }
        ]
    },

    {
        file: "visual-02.webm",
        question: "What feeling does this evoke?",
        choices: [
            { text: "Untamed", alignment: "U" },
            { text: "Ordered", alignment: "S" }
        ]
    },

    {
        file: "visual-03.webm",
        question: "What feeling does this evoke?",
        choices: [
            { text: "Protected", alignment: "S" },
            { text: "Defiant", alignment: "U" }
        ]
    },

    {
        file: "visual-04.webm",
        question: "What feeling does this evoke?",
        choices: [
            { text: "Independent", alignment: "U" },
            { text: "Obligated", alignment: "S" }
        ]
    },

    {
        file: "visual-05.webm",
        question: "What feeling does this evoke?",
        choices: [
            { text: "Empowered", alignment: "U" },
            { text: "Honored", alignment: "S" }
        ]
    },

    {
        file: "visual-06.webm",
        question: "What feeling does this evoke?",
        choices: [
            { text: "Respected", alignment: "S" },
            { text: "Unrestrained", alignment: "U" }
        ]
    },

    {
        file: "visual-07.webm",
        question: "What feeling does this evoke?",
        choices: [
            { text: "Driven", alignment: "U" },
            { text: "Fulfilled", alignment: "S" }
        ]
    },

    {
        file: "visual-08.webm",
        question: "What feeling does this evoke?",
        choices: [
            { text: "Loyal", alignment: "S" },
            { text: "Instinctive", alignment: "U" }
        ]
    },

    {
        file: "visual-09.webm",
        question: "What feeling does this evoke?",
        choices: [
            { text: "Unaccountable", alignment: "U" },
            { text: "Responsible", alignment: "S" }
        ]
    },

    {
        file: "visual-10.webm",
        question: "What feeling does this evoke?",
        choices: [
            { text: "Liberated", alignment: "U" },
            { text: "Secure", alignment: "S" }
        ]
    }

];


/* =========================================================
   AUDIO EXPERIENCES
   ========================================================= */

const audioExperiences = [

    {
        file: "audio-01.mp3",
        question: "What feeling does this awaken in you?",
        choices: [
            { text: "Committed", alignment: "S" },
            { text: "Passionate", alignment: "U" }
        ]
    },

    {
        file: "audio-02.mp3",
        question: "What feeling does this awaken in you?",
        choices: [
            { text: "Impulsive", alignment: "U" },
            { text: "Disciplined", alignment: "S" }
        ]
    },

    {
        file: "audio-03.mp3",
        question: "What feeling does this awaken in you?",
        choices: [
            { text: "Devoted", alignment: "S" },
            { text: "Self-Possessed", alignment: "U" }
        ]
    },

    {
        file: "audio-04.mp3",
        question: "What feeling does this awaken in you?",
        choices: [
            { text: "Defiant", alignment: "U" },
            { text: "Dutiful", alignment: "S" }
        ]
    },

    {
        file: "audio-05.mp3",
        question: "What feeling does this awaken in you?",
        choices: [
            { text: "Honorable", alignment: "S" },
            { text: "Ruthless", alignment: "U" }
        ]
    },

    {
        file: "audio-06.mp3",
        question: "What feeling does this awaken in you?",
        choices: [
            { text: "Self-Serving", alignment: "U" },
            { text: "Reciprocal", alignment: "S" }
        ]
    },

    {
        file: "audio-07.mp3",
        question: "What feeling does this awaken in you?",
        choices: [
            { text: "Restrained", alignment: "S" },
            { text: "Uninhibited", alignment: "U" }
        ]
    },

    {
        file: "audio-08.mp3",
        question: "What feeling does this awaken in you?",
        choices: [
            { text: "Wary", alignment: "U" },
            { text: "Trusting", alignment: "S" }
        ]
    },

    {
        file: "audio-09.mp3",
        question: "What feeling does this awaken in you?",
        choices: [
            { text: "Bound by Promise", alignment: "S" },
            { text: "Free of Obligation", alignment: "U" }
        ]
    },

    {
        file: "audio-10.mp3",
        question: "What feeling does this awaken in you?",
        choices: [
            { text: "Restless", alignment: "U" },
            { text: "Content", alignment: "S" }
        ]
    }

];


/* =========================================================
   EXPERIENCE ORDER
   VISUAL 1 → AUDIO 1 → VISUAL 2 → AUDIO 2...
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

const FADE_DURATION = 1500;


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
   MEDIA CLEANUP
   ========================================================= */

function stopCurrentMedia() {

    visualPlayer.pause();
    audioPlayer.pause();

    visualPlayer.onended = null;
    audioPlayer.onended = null;
    audioPlayer.ontimeupdate = null;

    visualPlayer.removeAttribute("src");
    audioPlayer.removeAttribute("src");

    visualPlayer.load();
    audioPlayer.load();

    visualPlayer.style.opacity = "0";
    audioPlayer.volume = 0;

}


/* =========================================================
   VIDEO FADE IN
   ========================================================= */

function fadeVideoIn(video) {

    video.style.opacity = "0";

    const startTime = performance.now();

    function animate(currentTime) {

        const progress = Math.min(
            (currentTime - startTime) / FADE_DURATION,
            1
        );

        video.style.opacity = progress;

        if (progress < 1) {
            requestAnimationFrame(animate);
        }

    }

    requestAnimationFrame(animate);

}


/* =========================================================
   VIDEO FADE OUT
   ========================================================= */

function fadeVideoOut(video) {

    return new Promise(resolve => {

        const startTime = performance.now();

        function animate(currentTime) {

            const progress = Math.min(
                (currentTime - startTime) / FADE_DURATION,
                1
            );

            video.style.opacity = 1 - progress;

            if (progress < 1) {

                requestAnimationFrame(animate);

            } else {

                video.style.opacity = "0";

                resolve();

            }

        }

        requestAnimationFrame(animate);

    });

}


/* =========================================================
   AUDIO FADE IN
   ========================================================= */

function fadeAudioIn(audio) {

    audio.volume = 0;

    const startTime = performance.now();

    function animate(currentTime) {

        const progress = Math.min(
            (currentTime - startTime) / FADE_DURATION,
            1
        );

        audio.volume = progress;

        if (progress < 1) {
            requestAnimationFrame(animate);
        }

    }

    requestAnimationFrame(animate);

}


/* =========================================================
   AUDIO FADE OUT
   ========================================================= */

function fadeAudioOut(audio) {

    return new Promise(resolve => {

        const startingVolume = audio.volume;

        const startTime =
            performance.now();

        function animate(currentTime) {

            const progress = Math.min(
                (currentTime - startTime) / FADE_DURATION,
                1
            );

            audio.volume =
                startingVolume *
                (1 - progress);

            if (progress < 1) {

                requestAnimationFrame(animate);

            } else {

                audio.volume = 0;

                resolve();

            }

        }

        requestAnimationFrame(animate);

    });

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
        `${currentExperience + 1} / ${experiences.length}`;

    questionContainer.classList.add("hidden");

    choiceContainer.innerHTML = "";


    /* =====================================================
       VISUAL
       ===================================================== */

    if (experience.type === "Visual") {

        videoContainer.classList.remove("hidden");

        audioContainer.classList.add("hidden");

        visualPlayer.src =
            `assets/visuals/${experience.file}`;

        visualPlayer.load();

        visualPlayer.onloadedmetadata = () => {

            fadeVideoIn(visualPlayer);

        };

        visualPlayer.onended = async () => {

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

        if (playPromise !== undefined) {

            playPromise.catch(error => {

                console.error(
                    "Visual playback failed:",
                    error
                );

            });

        }

        return;

    }


    /* =====================================================
       AUDIO
       ===================================================== */

    videoContainer.classList.add("hidden");

    audioContainer.classList.remove("hidden");

    playAudioExperience(
        experience
    );

}


/* =========================================================
   PLAY AUDIO EXPERIENCE
   ========================================================= */

function playAudioExperience(experience) {

    const audio =
        audioPlayer;

    let finished = false;

    let completionTimer = null;


    /*
     * This function is deliberately protected against
     * multiple completion signals. The audio can finish
     * through the native "ended" event, the timeupdate
     * check, or the duration safeguard below.
     */

    const finishAudio = async () => {

        if (finished) {
            return;
        }

        finished = true;


        if (completionTimer !== null) {

            clearTimeout(
                completionTimer
            );

            completionTimer = null;

        }


        audio.onended = null;
        audio.ontimeupdate = null;


        await fadeAudioOut(audio);


        audio.pause();

        audio.currentTime =
            audio.duration || 0;


        showQuestion(
            experience
        );

    };


    audio.pause();

    audio.currentTime = 0;

    audio.volume = 0;

    audio.src =
        `assets/audio/${experience.file}`;

    audio.load();


    /* =====================================================
       NATIVE END EVENT
       ===================================================== */

    audio.onended = () => {

        finishAudio();

    };


    /* =====================================================
       CURRENT-TIME END CHECK
       ===================================================== */

    audio.ontimeupdate = () => {

        if (
            Number.isFinite(audio.duration) &&
            audio.duration > 0 &&
            audio.currentTime >=
                audio.duration - 0.15
        ) {

            finishAudio();

        }

    };


    /* =====================================================
       METADATA / DURATION SAFEGUARD
       ===================================================== */

    audio.onloadedmetadata = () => {

        const duration =
            audio.duration;

        if (
            Number.isFinite(duration) &&
            duration > 0
        ) {

            /*
             * This is only a final safeguard.
             * It waits slightly beyond the actual duration,
             * so the MP3 is allowed to reach its natural end.
             */

            completionTimer =
                setTimeout(
                    () => {

                        if (
                            audio.currentTime >=
                            duration - 0.25
                        ) {

                            finishAudio();

                        }

                    },
                    (duration * 1000) + 250
                );

        }

    };


    /* =====================================================
       START PLAYBACK WHEN READY
       ===================================================== */

    const startPlayback = () => {

        const playPromise =
            audio.play();

        if (
            playPromise !== undefined
        ) {

            playPromise
                .then(() => {

                    fadeAudioIn(
                        audio
                    );

                })
                .catch(error => {

                    console.error(
                        "Audio playback failed:",
                        experience.file,
                        error
                    );

                });

        }

    };


    if (
        audio.readyState >= 3
    ) {

        startPlayback();

    }

    else {

        audio.oncanplay = () => {

            audio.oncanplay = null;

            startPlayback();

        };

    }

}


/* =========================================================
   SHOW QUESTION
   ========================================================= */

function showQuestion(experience) {

    questionContainer.classList.remove(
        "hidden"
    );

    questionLabel.textContent =
        experience.question;

    choiceContainer.innerHTML = "";


    experience.choices.forEach(
        choice => {

            const button =
                document.createElement(
                    "button"
                );

            button.type = "button";

            button.className =
                "choice-button";

            button.textContent =
                choice.text;


            button.addEventListener(
                "click",
                () => {

                    recordChoice(
                        choice
                    );

                }
            );


            choiceContainer.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   RECORD CHOICE
   ========================================================= */

function recordChoice(choice) {

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

function displayResult(court) {

    showScreen(
        resultScreen
    );

    courtName.textContent =
        court;

    courtDescription.innerHTML =
        courtDescriptions[court];

}
