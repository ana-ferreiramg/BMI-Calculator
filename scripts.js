document.getElementById('btn_calc').addEventListener("click", function() {
    var height = parseInt(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var newHeight = parseFloat(height/100);
    var bmi = weight/(newHeight * newHeight);

    bmi = bmi.toFixed(1);

    if (bmi == Infinity || bmi == undefined || isNaN(bmi)) {
        document.getElementById('bmi_result').innerHTML = ' ';
        document.getElementById('result').style.backgroundColor = 'rgba(220, 220, 220, 0.479)';
    } else {
        document.getElementById('bmi_result').innerHTML = bmi;
    }

    if (bmi <= 18.6) {
        document.getElementById('result').style.color = 'rgba(0, 0, 0, 0.8)';
        document.getElementById('result').style.backgroundColor = '#FFC107';
    } else if (bmi > 18.6 && bmi < 24.9){
        document.getElementById('result').style.color = 'whitesmoke';
        document.getElementById('result').style.backgroundColor = '#17A2B8';
    } else if (bmi > 24.9) {
        document.getElementById('result').style.color = 'whitesmoke';
        document.getElementById('result').style.backgroundColor = '#DC3545';
    }
});