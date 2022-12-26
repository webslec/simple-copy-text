const textareaContainer = document.getElementById('textarea-container');
const textareaElements = textareaContainer.getElementsByTagName('textarea');
const copyButtonElements = textareaContainer.getElementsByTagName('button');
const saveButton = document.getElementById('save-button');
const clearButton = document.getElementById('clear-button');

// Load saved text from local storage when the page loads
for (let i = 0; i < textareaElements.length; i++) {
  const textarea = textareaElements[i];
  const savedText = localStorage.getItem(textarea.id);
  if (savedText) {
    textarea.value = savedText;
  }
}

// Save text to local storage when the save button is clicked
saveButton.addEventListener('click', function() {
  for (let i = 0; i < textareaElements.length; i++) {
    const textarea = textareaElements[i];
    localStorage.setItem(textarea.id, textarea.value);
  }
});

// Clear all text when the clear button is clicked
clearButton.addEventListener('click', function() {
  for (let i = 0; i < textareaElements.length; i++) {
    const textarea = textareaElements[i];
    textarea.value = '';
    localStorage.removeItem(textarea.id);
  }
});

// Copy text from textarea when the copy button is clicked
for (let i = 0; i < copyButtonElements.length; i++) {
  const copyButton = copyButtonElements[i];
  copyButton.addEventListener('click', function() {
    const textareaId = copyButton.id.replace('copy-button-', 'textarea-');
    const textarea = document.getElementById(textareaId);
    textarea.select();
    document.execCommand('copy');
  });
}