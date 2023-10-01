// @ts-nocheck

function handleDataCalculator(){
    const weight = document.getElementById("weight").value
    const height = document.getElementById("height").value

    return {
        weight : Number(weight),
        height : Number(height),
    }
}

function hitungBMI(){
    const data = handleDataCalculator();
    return ((data.weight/((data.height / 100)**2 )).toFixed(2))
}

function kategoriBMI(data){
    const outputData = document.querySelector('.output-data');
    if (data <= 18.5) {
        outputData.innerHTML = "Under Weight";
    } else if (data > 18.5 && data <= 24.9) {
        outputData.innerHTML = "Normal Weight"
    } else if (data > 24.9 && data <= 29.9) {
        outputData.innerHTML = "Over Weight"
    }else if (data > 29.9) {
        outputData.innerHTML = "Obesity"
    } else {
        return
    }
}

const btnSubmit = document.getElementById('btn-submit').addEventListener('click', function(event){
    event.preventDefault();
    
    kategoriBMI(hitungBMI())
})