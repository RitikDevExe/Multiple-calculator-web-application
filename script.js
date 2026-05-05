   // Simple interest script!
  function calculateSI() {
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);

    if (!p || !r || !t) {
      document.getElementById("siOutput").innerText = "Please enter valid inputs";
      return;
    }

    let interest = (p * r * t) / 100;
    let total = p + interest;

    document.getElementById("siOutput").innerText = `Interest: ₹${interest.toFixed(2)}, Total Amount: ₹${total.toFixed(2)}`;
  }

//   BMI script!
  function calculateBMI() {
    let h = parseFloat(document.getElementById("height").value);
    let w = parseFloat(document.getElementById("weight").value);

    if (!h || !w) {
      document.getElementById("bmiOutput").innerText = "Please enter valid inputs";
      return;
    }

    let hM = h / 100;
    let bmi = w / (hM * hM);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    document.getElementById("bmiOutput").innerText = `BMI: ${bmi.toFixed(2)} (${category})`;
  }

//   Calorie calculator script. 
  function calculateCalories() {
    let age = parseFloat(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let w = parseFloat(document.getElementById("calWeight").value);
    let h = parseFloat(document.getElementById("calHeight").value);
    let activity = parseFloat(document.getElementById("activity").value);

    if (!age || !w || !h) {
      document.getElementById("calorieOutput").innerText = "Please enter valid inputs";
      return;
    }

    let bmr = 0;
    if (gender === "male") {
      bmr = 10*w + 6.25*h - 5*age + 5;
    } else {
      bmr = 10*w + 6.25*h - 5*age - 161;
    }

    let calories = bmr * activity;

    document.getElementById("calorieOutput").innerText = `Daily Calories: ${calories.toFixed(2)} kcal`;
  }