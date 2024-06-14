const input = document.getElementById("input")
const img = document.getElementById('img');

async function generateQrcode() {
    const inputValue = input.value
    const qr = `https://api.qrserver.com/v1/create-qr-code/?color=52734D&bgcolor=DDFFBC&size=500X500&data=${inputValue}`
    img.src = qr;
}

