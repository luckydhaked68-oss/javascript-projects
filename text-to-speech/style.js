const textInput = document.getElementById("textinput");
const voiceSelect = document.getElementById("voiceSelect");

const speakBtn = document.getElementById("speakBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");

const synth = window.speechSynthesis;

let voices = [];
let utterance;

// Load available voices
function loadVoices() {

    voices = synth.getVoices();

    voiceSelect.innerHTML = "";

    voices.forEach((voice, index) => {

        const option = document.createElement("option");

        option.value = index;

        option.textContent = `${voice.name} (${voice.lang})`;

        voiceSelect.appendChild(option);

    });

}

loadVoices();

if (speechSynthesis.onvoiceschanged !== undefined) {

    speechSynthesis.onvoiceschanged = loadVoices;

}

// Speak Button
speakBtn.addEventListener("click", () => {

    if (textInput.value.trim() === "") {

        alert("Please enter some text.");

        return;

    }

    synth.cancel();

    utterance = new SpeechSynthesisUtterance(textInput.value);

    utterance.voice = voices[voiceSelect.value];

    utterance.rate = 1;

    utterance.pitch = 1;

    utterance.volume = 1;

    synth.speak(utterance);

});

// Pause / Resume Button
pauseBtn.addEventListener("click", () => {

    if (synth.speaking && !synth.paused) {

        synth.pause();

        pauseBtn.textContent = "▶ Resume";

    } else if (synth.paused) {

        synth.resume();

        pauseBtn.textContent = "⏸ Pause";

    }

});

// Stop Button
stopBtn.addEventListener("click", () => {

    synth.cancel();

    pauseBtn.textContent = "⏸ Pause";

});