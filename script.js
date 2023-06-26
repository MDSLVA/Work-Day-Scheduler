$(function () {
  // Get the current date using the dayjs library and format it as "MMMM D, YYYY".
  var currentDate = dayjs().format('MMMM D, YYYY');
  var currentDayEl = document.getElementById('currentDay');
  currentDayEl.textContent = currentDate;

  // Get the current hour using the dayjs library.
  var currentHour = dayjs().hour();

  var timeBlocks = document.querySelectorAll('.time-block');
  // Iterate over each time block element.
  timeBlocks.forEach(function (block) {
  // Extract the hour from the block's ID by splitting it and parsing it
  var blockHour = parseInt(block.id.split('-')[1]);
// Add appropriate CSS classes 
    if (blockHour < currentHour) {
      block.classList.add('past');
    } else if (blockHour === currentHour) {
      block.classList.add('present');
    } else {
      block.classList.add('future');
    }

// Attach a click event listener to the save button.
    var saveButton = block.querySelector('.saveBtn');
    saveButton.addEventListener('click', function () {
      var userInput = block.querySelector('.description').value;
      var blockId = block.id;
 // Store the user input in the local storage using the block's ID as the key.      
      localStorage.setItem(blockId, userInput);
      alert('User input saved!');
    });
  });

// Iterate over each time block element using jQuery.
  $(".time-block").each(function () {
    var hourId = $(this).attr("id");
    var savedEvent = localStorage.getItem(hourId);
    if (savedEvent) {
      $(this).find(".description").val(savedEvent);
    }
  });
});