const form = document.querySelector('form');

//this usecase will give you empty value.

form.addEventListener('submit', function (e) {
  e.preventDefault(); //this prevents from submitting

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height : ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight : ${weight}`;
  }
  else{
  const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //Show the results
  results.innerHTML = `<span>${bmi}</span>`
  
  if(bmi < 18.6){
    results.innerHTML = `User Bmi = ${results.innerHTML} and user is underweight`
  } else if(bmi >= 18.6 && bmi < 24.9){
    results.innerHTML = `User Bmi = ${results.innerHTML} and user is normal weight`
  }
  else if(bmi >= 24.9){
      results.innerHTML = `User Bmi = ${results.innerHTML} and user is obese`
  }

};

  
});
