document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect input values
    const pregnancies = parseFloat(document.getElementById('pregnancies').value);
    const glucose = parseFloat(document.getElementById('glucose').value);
    const bp = parseFloat(document.getElementById('bp').value);
    const skin = parseFloat(document.getElementById('skin').value);
    const insulin = parseFloat(document.getElementById('insulin').value);
    const bmi = parseFloat(document.getElementById('bmi').value);
    const dpf = parseFloat(document.getElementById('dpf').value);
    const age = parseFloat(document.getElementById('age').value);

    // Dummy logistic regression model coefficients (replace with real ones)
    const coefficients = [0.5, 0.8, -0.3, 0.2, 0.1, 0.9, 1.2, 0.6];
    const intercept = -5;

    // Linear combination
    const linearSum = pregnancies * coefficients[0] +
                      glucose * coefficients[1] +
                      bp * coefficients[2] +
                      skin * coefficients[3] +
                      insulin * coefficients[4] +
                      bmi * coefficients[5] +
                      dpf * coefficients[6] +
                      age * coefficients[7] +
                      intercept;

    // Sigmoid function for probability
    const probability = 1 / (1 + Math.exp(-linearSum));

    const result = document.getElementById('result');
    result.textContent = probability > 0.5 ? '⚠️ High Risk of Diabetes' : '✅ Low Risk of Diabetes';
    result.style.color = probability > 0.5? 'red' : 'green';
});


