/* Given the 'id' attribute of a form element, this will return the value entered by the user into that form element. */
function formValue(id) {
  // This code returns the element object whose id property matches the HTML id and easy to get access to a specific element such as a form answer.
  let formElement = document.getElementById(id);

  // This code represents if the input id does not match the return id, it will be a null error. It will show the formElement value instead of the user input.
  // return `[${id} NOT FOUND]`;
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

  // This code removes any white space or unnessary spaces on the ends of the element object. You will place id of the input in the "" and replace the placeholder name to what it is on HTML.
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 'className', this will add that class name to the HTML element with the specified id. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time the Generate button is clicked. */
function generate() {
  // TASKS TO DO:
  // Retrieve form values
  let relative = formValue("relative");
  let adjective1 = formValue("adjective-1");
  let adjective2 = formValue("adjective-2");
  let adjective3 = formValue("adjective-3");
  let famousPerson = formValue("famous-person");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let petName = formValue("pet-name");

  // Insert form values into madlib.
  let madLib = `  
Dear ${relative},
<br><br>
I have been having as really ${adjective1} time
at camp. The counselour is ${adjective2} and
the food is ${adjective3}. I met ${famousPerson}
and we quickly became ${noun}. Talk soon!
<br><br>
Your ${dessert},
<br>
${petName}`;
  // Output madlib to player.
  document.getElementById("output").innerHTML = madLib;
  addClassToElement("container", "generated");
}
