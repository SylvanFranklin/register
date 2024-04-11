const crns = ["12345", "12345", "12345", "12345", "12345"];

for (let i = 0; i < crns.length; i++) {
    document.getElementById(`crn_id${i + 1}`).value = crns[i];
}

document.getElementsByName("REG_BTN")[1].click();
