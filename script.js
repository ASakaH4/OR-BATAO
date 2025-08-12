// script.js - main app logic
// Expects quizData (array of {q,a}), theoryText (string), pdfLinks (array {title,url}), socialLinks (array {title,url})

/* ---------- Tab switching ---------- */
const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

/* ---------- Quiz UI ---------- */
const qTextEl = document.getElementById('q-text');
const qNumberEl = document.getElementById('q-number');
const answerBox = document.getElementById('answerBox');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressText = document.getElementById('progressText');

let index = 0;
function renderQuestion(i, animated = true) {
  if (!Array.isArray(quizData) || quizData.length === 0) {
    qTextEl.textContent = "No quiz data found.";
    qNumberEl.textContent = "Question";
    answerBox.style.display = "none";
    progressText.textContent = "";
    return;
  }
  const item = quizData[i];
  qNumberEl.textContent = `Q ${i+1}`;
  // simple fade animation
  if (animated) {
    qTextEl.style.opacity = 0;
    setTimeout(()=> {
      qTextEl.innerHTML = item.q;
      qTextEl.style.opacity = 1;
    }, 160);
  } else qTextEl.innerHTML = item.q;

  answerBox.style.display = "none";
  answerBox.innerHTML = item.a;
  progressText.textContent = `${i+1} / ${quizData.length}`;
}

showAnswerBtn.addEventListener('click', () => {
  if (answerBox.style.display === 'block') {
    answerBox.style.display = 'none';
    showAnswerBtn.textContent = 'Show Answer';
    answerBox.setAttribute('aria-hidden','true');
  } else {
    answerBox.style.display = 'block';
    showAnswerBtn.textContent = 'Hide Answer';
    answerBox.setAttribute('aria-hidden','false');
  }
});

nextBtn.addEventListener('click', () => {
  if (index < quizData.length - 1) index++;
  renderQuestion(index);
});

prevBtn.addEventListener('click', () => {
  if (index > 0) index--;
  renderQuestion(index);
});

/* keyboard support */
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextBtn.click();
  if (e.key === 'ArrowLeft') prevBtn.click();
  if (e.key === 'Enter') showAnswerBtn.click();
});

/* ---------- Load theory ---------- */
const theoryTextEl = document.getElementById('theoryText');
if (typeof theoryText === 'string') {
  // preserve line breaks
  theoryTextEl.innerHTML = theoryText.replace(/\n/g,'<br>');
} else {
  theoryTextEl.textContent = "No theory content found.";
}

/* ---------- PDF tab ---------- */
const pdfSelect = document.getElementById('pdfSelect');
const pdfViewer = document.getElementById('pdfViewer');

if (Array.isArray(pdfLinks)) {
  pdfLinks.forEach(link => {
    const opt = document.createElement('option');
    opt.value = link.url;
    opt.textContent = link.title;
    pdfSelect.appendChild(opt);
  });
}

pdfSelect.addEventListener('change', () => {
  const v = pdfSelect.value;
  pdfViewer.src = v || '';
});

/* ---------- Social tab ---------- */
const socialSelect = document.getElementById('socialSelect');
const openSocialBtn = document.getElementById('openSocialBtn');

if (Array.isArray(socialLinks)) {
  socialLinks.forEach(link => {
    const opt = document.createElement('option');
    opt.value = link.url;
    opt.textContent = link.title;
    socialSelect.appendChild(opt);
  });
}

openSocialBtn.addEventListener('click', () => {
  const u = socialSelect.value;
  if (u) window.open(u, '_blank', 'noopener');
});

/* ---------- initial render ---------- */
renderQuestion(index);