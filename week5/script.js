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
    }
}

function downloadQR() {
    qrCanvas.width = qrImage.naturalWidth;
    qrCanvas.height = qrImage.naturalHeight;
    ctx.drawImage(qrImage, 0, 0);
    var link = document.createElement('a');
    link.download = 'qrcode.jpg';
    link.href = qrCanvas.toDataURL('image/jpeg');
    link.click();
}

