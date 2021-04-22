# javascript-challenge
javascript homework - javascript and DOM manipulation

## development notes
- starting with UFO-1.  
- Using the UFO dataset, write code that appends a table to the web page and then adds new rows of data for each UFO sighting.
- Note to self:  creating an HTML table by hand is possible, but way too much work, too error prone.  With some digging, found a much cleaner approach as reflected in the function createTable.  All of the day is showing up on the web page.
- The Button and the Form are working using d3.select.  Collecting the actual value entered by the user.
- Added a filter to filter by the entered date.  Works.  So far.
- All of UFO-1 is working.  After trying to build an updateTable function and realizing that I had taken way too complex a path... and then relistening to the 14.3 class lecture, I got way smarter on how to solve this.
- UFO-2
- Added the additional filter fields into index.html.
- After spending a bunch of time trying to build a separate reset function to rebuild the table using D3 to add and delete rows from the table, I went back and listened to session 14.3 and took a much cleaner and simpler approach.  
- Created a 'resetTable' function which calls createTable with a new dataset.
- There are two runEnter functions.  At this time, only runEnter2 is being called as it handles all of the filter input.
- A known bug is that when the reset button is pushed, the filter textboxes do not refresh with the placeholder text (or the text is still being written over the top).  Multiple attempts were made to fix this bug, I brought it to my tutor, I brought it to office hours, and I asked the class in Slack.  I was unsuccessful in fixing the bug.  
- The reset works beautifully and consistently for resetting the data in the table.
