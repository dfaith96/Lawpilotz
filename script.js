const documentInput = document.querySelector('#document-upload');
const dropzone = document.querySelector('#dropzone');
const uploadTitle = document.querySelector('#upload-title');
const uploadHelp = document.querySelector('#upload-help');
const analyzeButton = document.querySelector('#analyze-button');
const results = document.querySelector('#results');

documentInput.addEventListener('change', () => {
  const [documentFile] = documentInput.files;
  if (!documentFile) return;
  uploadTitle.textContent = documentFile.name;
  uploadHelp.textContent = 'Document ready for review';
  dropzone.classList.add('has-file');
});

document.querySelectorAll('.analysis-choice').forEach((choice) => {
  choice.addEventListener('click', () => {
    document.querySelector('.analysis-choice.selected').classList.remove('selected');
    choice.classList.add('selected');
  });
});

analyzeButton.addEventListener('click', () => {
  analyzeButton.textContent = 'Reviewing document…';
  analyzeButton.disabled = true;
  window.setTimeout(() => {
    results.hidden = false;
    results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    analyzeButton.innerHTML = 'Analyze another document <span>→</span>';
    analyzeButton.disabled = false;
  }, 900);
});
