// select the container div element
const container = $(".container");

// loop through the hours of the business day
for (let i = 8; i <= 17; i++) {
  // create a new row for each hour
  const row = $("<div>").addClass("row time-block ");

  // create a div for the hour
  const hour = $("<div>").addClass("hour col-2").text(`${i}:00`);
  // create a textarea for the event
  const event = $("<textarea>").addClass("col-8 description");

  // create a button for saving the event
  const saveBtn = $("<button>")
    .addClass("saveBtn col-1")
    .html('<i class="fas fa-lg fa-save"></i>');
   // create a button for deleting the event
  const deleteBtn = $("<button>")
    .addClass("deleteBtn col-1")
    .html('<i class="fas fa-lg fa-trash"></i>');


  // append the hour, event,saveBtn, and delete button to the row
 
  row.append(hour, event, saveBtn,deleteBtn );

  // append the row to the container div
  container.append(row);
}

// select all the timeblock rows
const rows = $(".row");

// get the current hour
const currentHour = moment().hour();

// color the rows based on the current hour
//-------------------------------------------------------------------------
// loop through the rows
rows.each(function () {
  // get the hour of the current row
  const rowHour = parseInt($(this).find(".hour").text().substr(0, 2));

  // compare the hour of the current row to the current hour
  if (rowHour < currentHour) {
    // if the row hour is less than the current hour, add the 'past' class
    $(this).addClass("past");
  } else if (rowHour === currentHour) {
    // if the row hour is equal to the current hour, add the 'present' class
    $(this).addClass("present");
  } else {
    // if the row hour is greater than the current hour, add the 'future' class
    $(this).addClass("future");
  }
});

// Save the event to local storage
//-----------------------------------------------------------------------------

// add event listener to the save button
$(".saveBtn").on("click", function () {
  // get the textarea value
  const event = $(this).siblings(".description").val();
  // get the hour of the row
  const hour = $(this).siblings(".hour").text();

  // save the event to local storage
  localStorage.setItem(hour, event);
});

// load the events from local storage
//-----------------------------------------------------------------------------

function loadEvents() {
  // loop through the rows
  rows.each(function () {
    // get the hour of the current row
    const hour = $(this).find(".hour").text();
    // get the event from local storage
    const event = localStorage.getItem(hour);

    // if there is an event, set the textarea value to the event
    if (event) {
      $(this).find(".description").val(event);
    }
  });

}
// delete the event from local storage
$('.deleteBtn').on("click", function() {
  // get the hour of the row
  const hour = $(this).siblings(".hour").text();
  // remove the event from local storage
  localStorage.removeItem(hour);
  // clear the textarea
  $(this).siblings(".description").val("");
});

  // call the loadEvents function when the page loads
  $(document).ready(function () {
    loadEvents();
  });
