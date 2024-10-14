const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePass(length) {
    let password = ""
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

document.querySelector('.generate-btn').addEventListener('click', function() {
    let password1 = generatePass(15)
    let password2 = generatePass(15)
    document.getElementById("holderOne").textContent = password1
    document.getElementById("holderTwo").textContent = password2

});

function copyToClip(elId) {
    const textCopy = document.getElementById(elId).textContent;
    if (textCopy) {
        navigator.clipboard.writeText(textCopy).then(() => {
            alert("Password copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy password: ", err);
        });
    }
}

document.getElementById('holderOne').addEventListener('click', function() {
    copyToClip("holderOne");
});
document.getElementById("holderTwo").addEventListener('click', function() {
    copyToClip('holderTwo');
});