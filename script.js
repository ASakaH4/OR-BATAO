// script.js

// =======================
// MEDICAL QUIZ TAB
// =======================
let currentQuestionIndex = 0;

function showQuestion(index) {
    if (!quizData || quizData.length === 0) {
        document.getElementById("quizQuestion").innerHTML = "<p>No quiz data found</p>";
        return;
    }

    const q = quizData[index];
    document.getElementById("quizQuestion").innerHTML = `<b>Q${index + 1}:</b> ${q.question}`;
    document.getElementById("quizAnswer").innerHTML = ""; // hide answer until clicked
}

function showAnswer() {
    if (!quizData || quizData.length === 0) return;
    document.getElementById("quizAnswer").innerHTML = `<b>Answer:</b> ${quizData[currentQuestionIndex].answer}`;
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

// =======================
// THEORY TAB
// =======================
function loadTheory() {
    if (typeof theoryData !== "undefined" && theoryData.trim() !== "") {
        document.getElementById("theoryContent").innerHTML = theoryData;
    } else {
        document.getElementById("theoryContent").innerHTML = "<p>No theory content found</p>";
    }
}

// =======================
// PDF TAB
// =======================
function loadPDFs() {
    const pdfList = document.getElementById("pdfList");
    pdfList.innerHTML = "";

    if (typeof pdfData !== "undefined" && pdfData.length > 0) {
        pdfData.forEach((pdf, index) => {
            const btn = document.createElement("button");
            btn.innerText = `${index + 1}. ${pdf.name}`;
            btn.onclick = () => openPDF(pdf.url);
            pdfList.appendChild(btn);
        });
    } else {
        pdfList.innerHTML = "<p>No PDFs available</p>";
    }
}

function openPDF(url) {
    document.getElementById("pdfViewer").src = url;
}

// =======================
// SOCIAL TAB
// =======================
function loadSocialLinks() {
    const socialList = document.getElementById("socialList");
    socialList.innerHTML = "";

    if (typeof socialData !== "undefined" && socialData.length > 0) {
        socialData.forEach((link, index) => {
            const btn = document.createElement("button");
            btn.innerText = `${index + 1}. ${link.name}`;
            btn.onclick = () => openSocial(link.url);
            socialList.appendChild(btn);
        });
    } else {
        socialList.innerHTML = "<p>No social links available</p>";
    }
}

function openSocial(url) {
    document.getElementById("socialViewer").src = url;
}

// =======================
// TAB SWITCHING
// =======================
function openTab(tabName) {
    const tabContents = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";

    if (tabName === "MedicalQuiz") {
        showQuestion(currentQuestionIndex);
    } else if (tabName === "Theory") {
        loadTheory();
    } else if (tabName === "PDF") {
        loadPDFs();
    } else if (tabName === "Social") {
        loadSocialLinks();
    }
}

// =======================
// INIT
// =======================
document.addEventListener("DOMContentLoaded", function () {
    openTab("MedicalQuiz"); // default tab
});