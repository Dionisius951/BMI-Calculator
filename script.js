// @ts-nocheck

function handleDataCalculator(){
    const weight = document.getElementById("weight").value
    const height = document.getElementById("height").value

    if (weight !== "" && height !== "") {
        return {
            weight : Number(weight),
            height : Number(height),
        }
    } else {
        alert("Isi data terlebih dahulu")
    }
}

function hitungBMI(){
    const data = handleDataCalculator();
    return ((data.weight/((data.height / 100)**2 )).toFixed(2))
}

function kategoriBMI(data){
    const outputData = document.querySelector('.output-data');
    let result = ""
    if (data <= 18.5) {
        result = "Under Weight";
    } else if (data > 18.5 && data <= 24.9) {
        result = "Normal Weight"
    } else if (data > 24.9 && data <= 29.9) {
        result = "Over Weight"
    } else {
        result = "Obesity"
    }

    outputData.innerHTML = `BMI Anda <b> ${data}</b>, Anda termasuk dalam kategori <b> ${result} </b>`
}

const btnSubmit = document.getElementById('btn-submit').addEventListener('click', function(event){
    event.preventDefault();

    kategoriBMI(hitungBMI())
})