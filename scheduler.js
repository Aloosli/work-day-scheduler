
// select the container div element
const container = $(".container");

// loop through the hours of the business day
for (let i = 9; i <= 17; i++) {
  // create a new row for each hour
  const row = $("<div>").addClass("row time-block");
  
  // create a div for the hour
  const hour = $("<div>")
    .addClass("hour col-2")
    .text(`${i}:00`);