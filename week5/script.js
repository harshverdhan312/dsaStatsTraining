var qrImage = document.getElementById("qrImage");
var qrText = document.getElementById("qrText");
var downloadBtn = document.getElementById("downloadBtn");
var qrCanvas = document.getElementById("qrCanvas");
var ctx = qrCanvas.getContext("2d");
var modeToggle = document.getElementById("modeToggle");
var body = document.body;

function generateQR() {
    var text = qrText.value.trim();
    if (text === "") {
        alert("Please enter text or URL to generate QR code.");
        return;
    }
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(text);
    qrImage.style.display = "block";
    qrImage.style.opacity = "0";

    setTimeout(function() {
        qrImage.style.opacity = "1";
    }, 100);

    qrImage.onload = function() {
        downloadBtn.style.display = "block";
        resetBtn.style.display = "block";
        drawToCanvas();
    }
}

function drawToCanvas() {
    qrCanvas.width = qrImage.width;
    qrCanvas.height = qrImage.height;
    ctx.drawImage(qrImage, 0, 0);
}

function downloadQRCode() {
    var canvas = qrCanvas;
    var dataURL = canvas.toDataURL('image/png');
    var link = document.createElement('a');
    link.href = dataURL;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

modeToggle.addEventListener("click", function() {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        modeToggle.innerText = "Switch to Dark Mode";
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        modeToggle.innerText = "Switch to Light Mode";
    }
});

if (!body.classList.contains("dark-mode")) {
    body.classList.add("light-mode");
}

function resetFields() {
    qrText.value = "";
    qrImage.style.display = "none";
    downloadBtn.style.display = "none";
    resetBtn.style.display = "none";
}