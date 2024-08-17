function setSampleText() {
    const sampleText = document.getElementById('sampleText').value;
    document.getElementById('inputText').value = sampleText;
}

function generateRandomRatio() {
    const randomRatio = (Math.random()).toFixed(2);
    document.getElementById('replaceRatio').value = randomRatio;
    document.getElementById('replaceSlider').value = randomRatio;
}

function updateSlider() {
    const ratio = document.getElementById('replaceRatio').value;
    document.getElementById('replaceSlider').value = ratio;
}

function updateInput() {
    const ratio = document.getElementById('replaceSlider').value;
    document.getElementById('replaceRatio').value = ratio;
}

function replaceText() {
    const text = document.getElementById('inputText').value;
    const char = document.getElementById('replaceChar').value || 'K';
    const ratio = parseFloat(document.getElementById('replaceRatio').value);

    if (char.length !== 1) {
        alert("替换字符必须是单个字符！");
        return;
    }

    const numToReplace = Math.floor(text.length * ratio);
    const textArray = text.split('');

    const replaceIndices = [];
    while (replaceIndices.length < numToReplace) {
        const randomIndex = Math.floor(Math.random() * text.length);
        if (!replaceIndices.includes(randomIndex)) {
            replaceIndices.push(randomIndex);
        }
    }

    for (let i = 0; i < replaceIndices.length; i++) {
        textArray[replaceIndices[i]] = char;
    }

    const outputText = textArray.join('');
    document.getElementById('outputText').value = outputText;
}

function copyResult() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert("结果已复制到剪贴板！");
}
