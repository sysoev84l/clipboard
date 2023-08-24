function addText(e) {
    e.preventDefault();
    let selection = window.getSelection();
    let addedText = "\nАндреи, Андреи, кругом одни Андреи!!";
    let copytext = selection + addedText;
    e.clipboardData.setData('text/plain', copytext);
}
document.addEventListener('copy', addText);