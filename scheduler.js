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
    .addClass("saveBtn col-2")
    .html('<i class="fas fa-lg fa-save"></i>');

  // append the hour, event, and saveBtn to the row
  row.append(hour, event, saveBtn);

  // append the row to the container div
  container.append(row);
  
}

// select all the timeblock rows
const rows = $(".row");

// get the current hour
const currentHour = moment().hour();


// loop through the rows
rows.each(function () {
  // get the hour of the current row
  const rowHour = parseInt($(this).find(".hour").text().substr(0,2));



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


