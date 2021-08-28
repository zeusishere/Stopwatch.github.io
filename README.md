
# Stopwatch Application 
This Project contains a web-Based stopwatch app , created using Html ,Css and vanilla Js for the front-end .
The stopwatch can be used to measure time intervals with an accuracy of 1/100th of a second .
The stopwatch has the format of  00hr : 00min :00 sec :00 milliseconds .
link to the project : https://zeusishere.github.io/Stopwatch.github.io/ 
## functionality
1. Start  button-
  start button , as the name implies, runs the timer of the stopwatch .
2. Stop button-
Stop button is used to bring to halt an already running Stopwatch with the timer stopped at the corresponding time interval.
3.Reset button-
Reset button on addition to stopping the stopwatch , resets the timer of of stopwatch to 00hr : 00min :00 sec :00 milliseconds .
4. Lap button-
this function adds the time of that instant to the result section for you to compare times for  more than one test runs .
## Technologies used
1. Html
2. Css
3. Vanilla JavaScript
## Problems-faced
1. bug faced while resetting the timer to 00 , which didn't work for for hr , min, second timer screens .
 the bug was due to an event registered  with a delayed execution (setTimeOut) and was later rectified using clearTimeout .

 
