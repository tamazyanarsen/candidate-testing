const codeText = document.querySelector('.code-text') as HTMLDivElement;
const sendBtn = document.querySelector('.btn-send');
const testCode = `
const newP = new MyPromise(resolve => setTimeout(() => {
    resolve(12)
}, 500));

newP.then(e => console.log(e + 1)) // 13
    .then(e => console.log(e + 1)); // 14

newP.then(e => console.log(e + 1)); // 13
`;
const testCodeElement = document.querySelector('.test-code');
if (testCodeElement) testCodeElement.innerHTML = `<pre>${testCode}</pre>`;
sendBtn?.addEventListener('click', () => {
    eval([codeText.innerText, testCode].join('\n'));
});