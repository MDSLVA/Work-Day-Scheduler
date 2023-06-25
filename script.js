
$(function () {

  var currentDate = dayjs().format('MMMM D, YYYY');
  var currentDayEl = document.getElementById('currentDay');
  currentDayEl.textContent = currentDate;
  var currentHour = dayjs().hour();
  

  var timeBlocks = document.querySelectorAll('.time-block');
  timeBlocks.forEach(function (block) {
    var blockHour = parseInt(block.id.split('-')[1]);

    if (blockHour < currentHour) {
      block.classList.add('past');
    } else if (blockHour === currentHour) {
      block.classList.add('present');
    } else {
      block.classList.add('future');
    }


    var saveButton = block.querySelector('.saveBtn');
    saveButton.addEventListener('click', function () {
      var userInput = block.querySelector('.description').value;
      var blockId = block.id;
      localStorage.setItem(blockId, userInput);
      alert('User input saved!');
    });

  
  
  });


  




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // 
  
  
  
  //TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  $(".time-block").each(function() {
    var hourId = $(this).attr("id");
    var savedEvent = localStorage.getItem(hourId);

    // Check if there is a saved event for the current hour
    if (savedEvent) {
      // Populate the event in the description textarea
      $(this).find(".description").val(savedEvent);
    }
  });
  
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  
  
  // TODO: Add code to display the current date in the header of the page.

var currentDate = dayjs().format('MMMM D, YYYY');
var currentDayElement = document.getElementById('currentDay');
currentDayElement.textContent = currentDate;
});
