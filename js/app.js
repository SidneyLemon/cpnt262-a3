const form = document.querySelector('form');
const output = document.querySelector('.output');

const handleSubmit = function(event) {
  event.preventDefault();

  // Possible values for `day`: 
  // 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'
  const day = form.day.value; 

  // Possible values for `meal`: 
  // 'breakfast', 'lunch', 'dinner'
  const meal = form.meal.value; 

  console.log(day, meal);

  // Declare a variable to hold the answer
  let answer;

  /*************************************/
  /* ^^^ Don't edit the above code ^^^ */
  /*************************************/

  /***********************/
  /* Put your code below */
  /***********************/

  // Using if, else if and else blocks: assign a meal recommendation to `answer` based on the submitted options for `day` and `meal`.

 
  // Tuesday
  if (day === 'tue' && meal === 'breakfast') {
    answer = 'Eggs';
  }
  else if (day === 'tue' && meal === 'lunch') {
    answer = 'Tacos';
  }
  else if (day === 'tue' && meal === 'dinner') {
    answer = 'Chilli';
  }
  // Wednesday
  else if (day === 'wed' && meal === 'breakfast') {
    answer = 'Toast';
  }
  else if (day === 'wed' && meal === 'lunch') {
    answer = 'Sandwich';
  }
  else if (day === 'wed' && meal === 'dinner') {
    answer = 'Burgers';
  }
  // Thursday
  else if (day === 'thu' && meal === 'breakfast') {
    answer = 'Fruit';
  }
  else if (day === 'thu' && meal === 'lunch') {
    answer = 'Salad';
  }
  else if (day === 'thu' && meal === 'dinner') {
    answer = 'Pasta';
  }
  // Friday
  else if (day === 'fri' && meal === 'breakfast') {
    answer = 'Yogurt';
  }
  else if (day === 'fri' && meal === 'lunch') {
    answer = 'Smoothie';
  }
  else if (day === 'fri' && meal === 'dinner') {
    answer = 'Quesadilla';
  }
  // Saturday
  else if (day === 'sat' && meal === 'breakfast') {
    answer = 'cereal';
  }
  else if (day === 'sat' && meal === 'lunch') {
    answer = 'sushi';
  }
  else if (day === 'sat' && meal === 'dinner') {
    answer = 'Burgers';
  }
  // sunday
  else if (day === 'sun' && meal === 'breakfast') {
    answer = 'Granola bar';
  }
  else if (day === 'sun' && meal === 'lunch') {
    answer = 'Burrito';
  }
  else if (day === 'sun' && meal === 'dinner') {
    answer = 'Pizza';
  }
  // Monday
  else if (day === 'mon' && meal === 'breakfast') {
    answer = 'French Toast';
  }
  else if (day === 'mon' && meal === 'lunch') {
    answer = 'Soup';
  }
  else if (day === 'mon' && meal === 'dinner') {
    answer = 'Lasagna';
  }
  // Please Select
  else  {
    answer = 'Please select both options';
  }


  /************************************/
  /* Don't edit the rest of this code */
  /************************************/

  output.innerHTML = answer;

}

form.addEventListener('submit', handleSubmit);