// let height = (document.getElementById('height-cm'));
// let weight = parseFloat(document.getElementById('weight-kg'));
//let bmi = (weight/Math.pow(height/100, 2)).toFixed(1);


function calculate(){
    // var sHeight = document.getElementsByName('height-cm').value;
    // var sWeight = document.getElementsByName('weight-kg').value;
    var sHeight = prompt('Height (cm)');
    var sWeight = prompt('Weight (kg)');
    var result = document.getElementById('result');
    var answer = document.getElementById('answer');

    let bmi = (sWeight/Math.pow(sHeight/100, 2)).toFixed(1);


    if (bmi !== NaN){
        if (bmi < 18.5){
            result.innerText = result.innerText + ' underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9){
            result.innerText = result.innerText + ' normal weight';
        } else if (bmi >= 25 && bmi <= 29.9){
            result.innerText = result.innerText + ' overweight';
        } else if (bmi>=30){
            result.innerText = result.innerText + ' obese';
        }
    }else{
        alert('enter a valid weight and/or height');
    }

    answer.innerText = bmi
}