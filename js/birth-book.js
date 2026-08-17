"use strict";

/* =========================================================
   COURT DESCRIPTIONS
   ========================================================= */

const courtDescriptions = {
    Seelie: `
        <img src="assets/Seelie-Result.png" alt="Seelie Result">
    `,

    UnSeelie: `
        <img src="assets/UnSeelie-Result.png" alt="UnSeelie Result">
    `,

    Shadow: `
        <img src="assets/Shadow-Result.png" alt="Shadow Result">
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
let hasRepeated = false;

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
const repeatContainer = document.getElementById("repeatContainer");
const repeatButton = document.getElementById("repeatButton");
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
    hasRepeated = false;

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
    hasRepeated = false;

    experienceType.textContent = experience.type.toUpperCase();
    experienceNumber.textContent = `${currentExperience + 1} / 20`;
    questionContainer.classList.add("hidden");
    choiceContainer.innerHTML = "";
    repeatContainer.classList.add("hidden");

    /* =====================================================
       VISUAL
       ===================================================== */

    if (experience.type === "Visual") {
        videoContainer.classList.remove("hidden");
        audioContainer.classList.add("hidden");
        playVisualExperience(experience);
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
   VISUAL PLAYBACK
   ========================================================= */

function playVisualExperience(experience) {
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

    if (!hasRepeated) {
        repeatContainer.classList.remove("hidden");
    } else {
        repeatContainer.classList.add("hidden");
    }
}

/* =========================================================
   REPEAT BUTTON LOGIC
   ========================================================= */

repeatButton.addEventListener("click", () => {
    const experience = experiences[currentExperience];
    hasRepeated = true;
    questionContainer.classList.add("hidden");

    if (experience.type === "Visual") {
        playVisualExperience(experience);
    } else {
        playAudioExperience(experience);
    }
});

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
