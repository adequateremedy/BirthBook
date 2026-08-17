"use strict";

/* =========================================================
   COURT DESCRIPTIONS
   ========================================================= */

const courtDescriptions = {
    Seelie: `
        <p>The Seelie Court operates on a deeply ingrained psychology of immense vanity and an absolute obsession with aesthetic perfection. In their daily lives, this manifests as a profound dedication to beauty, art, and the meticulous maintenance of their relationships and physical appearances, making them impeccable hosts and deeply devoted partners. However, their social interactions are often heavily guided by complex etiquette and weaponized politeness. They speak with soft, measured words and shower their targets with disarming compliments. This help them navigate life with a fluid, musical grace, cloaking their inherent nature in a veneer of vibrant grandeur and blinding beauty. However, they are utterly obsessed with the grand spectacles of high society, lavish feasts, dancing beneath moonlight, and engaging poetic battles of wit. Every interaction with a Seelie is governed by an incredibly strict, unyielding code of etiquette and hospitality. They demand flawless manners from everyone they encounter.</p> 

<p>Beneath this dazzling surface lies a dangerous, conditional mercy that can turn lethal without a moment's warning. This is because the Seelie do not operate on human morality; they have always viewed mortals as amusing pets or temporary playthings to be discarded at their whim. If someone were to accidentally violate their hyper-specific rules of etiquette, the Seelie would almost always choose to inflict severe, disproportionate curses with a bright, cheerful smile and polite demeanor. They are the type who will trap a traveler in a dance without shoes, over hot coals, punishing a minor annoyance by turning it into a beautiful, tragedy.</p>

<p>To easily spot a Seelie, one must observe the unnerving uncanny valley effect they project. Their physical symmetry is absolute and unblemished, and they move with a frictionless grace that seems to never disturb the ground beneath them. They exude an overpowering natural scent of heavy honey or cloying summer blooms, and behaviorally, they share the Unseelie's profound biological inability to tell a direct lie. To navigate this, the Seelie rely entirely on masterful omission, double-speak, and carefully worded half-truths to maintain their flawless image. They also share the identical ancient biological vulnerability to cold iron.</p>
    `,

    UnSeelie: `
        <p>The Unseelie Court are driven by raw primal instinct, deep passions, and brutal honesty that completely strips away any pretense of manners. In their daily lives, they are profoundly authentic; they do not engage in fake pleasantries or intricate social games, making them fiercely loyal friends and straightforward neighbors where one always knows where they stand.</p> 

<p>What makes them unique is their absolute rejection of high-society civility and their complete embrace of the wild, untamed aspects of nature. They prefer the immediate impact of blunt truths and direct action over polite excuses or manipulation. Because of this, they entirely reject elegant illusions, shiny gems, and sophisticated social gatherings, but rather prefer dark art, projected pains, and sincere truth.</p> 

<p>UnSeelie often project a cold, primal hostility toward most others, almost naturally. They move with either an obvious stillness or with a jagged, unnatural speed simply for the reaction of their spectators. Their gatherings are often chaotic, dark, and loud affairs intended to mock traditional beauty by celebrating grunge, the bitter cold, and physical decay.</p> 

<p>For the Unseelie, humans are pawns used to entertain and/or gain advantages. Their interactions with mortals almost always remain focused on their own desires and gains. Driven by a deep-seated hatred, fear, and a brutal survival instinct, they do not require an excuse or a broken rule to justify their temperament, and they often take a sadistic delight in justified torment.</p>

<p>Spotting an Unseelie involves looking for sharp, asymmetrical features and subtle micro-expressions—which are kept completely suppressed unless they are actively provoked or threatened. Their physical presence often carries a visceral weight; they radiate an unnatural, bone-deep coldness, and they almost always carry the heavy, atmospheric scent of raw, wet dirt. They share a paralyzing biological vulnerability to cold iron, and are bound by the same ancient inability - like their Seelie counterparts - to speak an outright lie, though they bypass this limitation through sheer, unfiltered bluntness.</p> 

<p>There are no polite riddles or hidden agendas here; the Unseelie display themselves proudly, making their intentions well known.</p>
    `,

    Shadow: `
        <p>The Shadow Fae are characterized by hyper-vigilant, deeply secretive, and elusive behaviors born from a sudden and inherent isolation. They are not an official Court, but rather outcasts born to either Seelie or Unseelie parents. They operate entirely in the liminal space between the two extreme Courts. They move like the smoke, fog, and shadows; smooth and almost invisibly, and congregate within forgotten spaces, such as alleys, rooftops, and deep caves. They rarely raise their voices above a muted whisper, and would rather choose subtle espionage and mastery of manipulation over a grand battle or wild fight.</p> 

<p>Their physical presence is defined by a stony, unreadable stoicism, often hiding thoughts and emotions behind a cold, blank stare. This shapes them into quiet observers who use absolute silence as an impenetrable shield. While this makes them heavily guarded, it also makes them deeply attentive listeners and fiercely loyal keepers of confidence for those who manage to earn their trust. To easily spot a Shadow Fae, one must look for the distinct optical blurring they cause; their physical edges seem perpetually out of focus when viewed directly, creating a subtle sensory disorientation, or they will seem to carry shadows around their skin.</p> 

<p>To the Shadow Fae, information is the ultimate currency, and they like dabble in gossip as a means to gather forbidden knowledge, trade stolen memories, and archiving secrets. Instead of fighting openly for dominance, the Shadow Fae often use blackmail and political schemes to make quiet shifts in balances of power. They view mortals as useful tools, friends, enemies, lovers, and sometimes all at the same time, per their mood. The Shadow Fae thrive almost exclusively in loopholes and gray areas. They are patient, and will never chase someone down or curse them openly; instead, they would rather ruin their sanity from afar or slide a lethal poison into their glass while they look the other way. Behaviorally, they share the Seelie's emotional restraint and the Unseelie's sharp survival instincts, relying entirely on evasion and stealth. Like the other Fae, they share the fundamental biological weakness to cold iron.</p>
    `
};

/* =========================================================
   VISUAL EXPERIENCES
   ========================================================= */

const visualExperiences = [
    { file: "visual-01.webm", choices: [{ text: "Anchored", alignment: "S" }, { text: "Adrift", alignment: "U" }] },
    { file: "visual-02.webm", choices: [{ text: "Contained", alignment: "U" }, { text: "Boundless", alignment: "S" }] },
    { file: "visual-03.webm", choices: [{ text: "Centered", alignment: "S" }, { text: "Scattered", alignment: "U" }] },
    { file: "visual-04.webm", choices: [{ text: "Distorted", alignment: "U" }, { text: "Clear", alignment: "S" }] },
    { file: "visual-05.webm", choices: [{ text: "Drifting", alignment: "U" }, { text: "Guided", alignment: "S" }] },
    { file: "visual-06.webm", choices: [{ text: "Serene", alignment: "S" }, { text: "Turbulent", alignment: "U" }] },
    { file: "visual-07.webm", choices: [{ text: "Erratic", alignment: "U" }, { text: "Steady", alignment: "S" }] },
    { file: "visual-08.webm", choices: [{ text: "Focused", alignment: "S" }, { text: "Disoriented", alignment: "U" }] },
    { file: "visual-09.webm", choices: [{ text: "Fractured", alignment: "U" }, { text: "Intact", alignment: "S" }] },
    { file: "visual-10.webm", choices: [{ text: "Shifting", alignment: "U" }, { text: "Constant", alignment: "S" }] }
];

/* =========================================================
   AUDIO EXPERIENCES
   ========================================================= */

const audioExperiences = [
    { file: "audio-01.mp3", choices: [{ text: "Foreign", alignment: "U" }, { text: "Familiar", alignment: "S" }] },
    { file: "audio-02.mp3", choices: [{ text: "Distant", alignment: "U" }, { text: "Close", alignment: "S" }] },
    { file: "audio-03.mp3", choices: [{ text: "Warm", alignment: "S" }, { text: "Cold", alignment: "U" }] },
    { file: "audio-04.mp3", choices: [{ text: "Rushed", alignment: "U" }, { text: "Patient", alignment: "S" }] },
    { file: "audio-05.mp3", choices: [{ text: "Heavy", alignment: "S" }, { text: "Hollow", alignment: "U" }] },
    { file: "audio-06.mp3", choices: [{ text: "Muffled", alignment: "U" }, { text: "Clear", alignment: "S" }] },
    { file: "audio-07.mp3", choices: [{ text: "Smooth", alignment: "S" }, { text: "Jagged", alignment: "U" }] },
    { file: "audio-08.mp3", choices: [{ text: "Threatening", alignment: "U" }, { text: "Safe", alignment: "S" }] },
    { file: "audio-09.mp3", choices: [{ text: "Calm", alignment: "S" }, { text: "Restless", alignment: "U" }] },
    { file: "audio-10.mp3", choices: [{ text: "Wandering", alignment: "U" }, { text: "Leading", alignment: "S" }] }
];

/* =========================================================
   VISUAL → AUDIO → VISUAL → AUDIO
   ========================================================= */

const experiences = [];

for (let i = 0; i < 10; i++) {
    experiences.push({ ...visualExperiences[i], type: "Visual" });
    experiences.push({ ...audioExperiences[i], type: "Audio" });
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

    try {
        visualPlayer.load();
        audioPlayer.load();
    } catch (e) {
        // Suppress unhandled interrupt promises
    }

    visualPlayer.style.opacity = "0";
    audioPlayer.volume = 1;
}

/* =========================================================
   VISUAL FADE IN
   ========================================================= */

function fadeVideoIn(video) {
    video.style.opacity = "0";
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / VISUAL_FADE_DURATION, 1);
        video.style.opacity = progress;

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

/* =========================================================
   VISUAL FADE OUT
   ========================================================= */

function fadeVideoOut(video) {
    return new Promise(resolve => {
        const startTime = performance.now();

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / VISUAL_FADE_DURATION, 1);
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
   BEGIN
   ========================================================= */

beginButton.addEventListener("click", () => {
    // Unlock media for mobile by triggering silent initial play/pause
    const unlockVisual = visualPlayer.play();
    if (unlockVisual !== undefined) {
        unlockVisual.then(() => { visualPlayer.pause(); }).catch(() => {});
    }

    const unlockAudio = audioPlayer.play();
    if (unlockAudio !== undefined) {
        unlockAudio.then(() => { audioPlayer.pause(); }).catch(() => {});
    }

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

    stopCurrentMedia();

    experienceType.textContent = experience.type.toUpperCase();
    experienceNumber.textContent = `${currentExperience + 1} / 20`;
    questionContainer.classList.add("hidden");
    choiceContainer.innerHTML = "";

    /* =====================================================
       VISUAL
       ===================================================== */

    if (experience.type === "Visual") {
        videoContainer.classList.remove("hidden");
        audioContainer.classList.add("hidden");

        visualPlayer.src = `assets/visuals/${experience.file}`;
        visualPlayer.load();

        const handleVisualStart = () => {
            fadeVideoIn(visualPlayer);
        };

        // Fire immediately if video is already cached and ready
        if (visualPlayer.readyState >= 1) {
            handleVisualStart();
        } else {
            visualPlayer.onloadedmetadata = handleVisualStart;
        }

        visualPlayer.onended = async () => {
            visualPlayer.onended = null;
            await fadeVideoOut(visualPlayer);
            showQuestion(experience);
        };

        const playPromise = visualPlayer.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error("Visual playback failed:", error);
            });
        }
        return;
    }

    /* =====================================================
       AUDIO
       ===================================================== */

    videoContainer.classList.add("hidden");
    audioContainer.classList.remove("hidden");
    playAudioExperience(experience);
}

/* =========================================================
   AUDIO PLAYBACK
   ========================================================= */

function playAudioExperience(experience) {
    const audio = audioPlayer;
    let started = false;
    let finished = false;

    audio.pause();
    audio.currentTime = 0;
    audio.volume = 1;
    audio.src = `assets/audio/${experience.file}`;
    audio.load();

    /* =====================================================
       AUDIO ENDED
       ===================================================== */

    audio.onended = () => {
        if (finished) return;
        finished = true;
        audio.onended = null;
        audio.oncanplay = null;
        showQuestion(experience);
    };

    /* =====================================================
       START AUDIO
       ===================================================== */

    function startAudio() {
        if (started || finished) return;
        started = true;
        audio.volume = 1;

        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error("Audio playback failed:", experience.file, error);
                started = false;
            });
        }
    }

    if (audio.readyState >= 3) {
        startAudio();
    } else {
        audio.oncanplay = () => {
            audio.oncanplay = null;
            startAudio();
        };
    }
}

/* =========================================================
   SHOW QUESTION
   ========================================================= */

function showQuestion(experience) {
    questionContainer.classList.remove("hidden");
    choiceContainer.innerHTML = "";

    const firstChoice = experience.choices[0];
    const secondChoice = experience.choices[1];

    const firstButton = document.createElement("button");
    firstButton.type = "button";
    firstButton.className = "choice-button";
    firstButton.textContent = firstChoice.text;

    const orText = document.createElement("span");
    orText.className = "choice-or";
    orText.textContent = " or ";

    const secondButton = document.createElement("button");
    secondButton.type = "button";
    secondButton.className = "choice-button";
    secondButton.textContent = secondChoice.text;

    const questionMark = document.createElement("span");
    questionMark.className = "choice-question-mark";
    questionMark.textContent = "?";

    choiceContainer.appendChild(firstButton);
    choiceContainer.appendChild(orText);
    choiceContainer.appendChild(secondButton);
    choiceContainer.appendChild(questionMark);

    firstButton.addEventListener("click", () => {
        recordChoice(firstChoice);
    });

    secondButton.addEventListener("click", () => {
        recordChoice(secondChoice);
    });
}

/* =========================================================
   RECORD CHOICE
   ========================================================= */

function recordChoice(choice) {
    if (choice.alignment === "S") {
        seelieScore++;
    } else if (choice.alignment === "U") {
        unseelieScore++;
    }

    currentExperience++;

    if (currentExperience >= experiences.length) {
        determineCourt();
    } else {
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
    } else if (unseelieScore > seelieScore) {
        court = "UnSeelie";
    } else {
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
    courtDescription.innerHTML = courtDescriptions[court];
}
