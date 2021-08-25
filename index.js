// // buttons dom elements
// let startBtn = document.querySelector("#start");
// let stopBtn = document.querySelector("#stop");
// let resetBtn = document.querySelector("#reset");
// let lapBtn = document.querySelector("#lap");
// // section to display results of stopwatch
// let result_list = document.querySelector("#result-list");
// // separator elements between different units of time
// let separators = document.querySelectorAll(".separator");
// //  status reperesnts whether stopwatch is on (i.e true) or off(i.e false)
// let status = false;
// // declaring variables used to calculate time duration
// let hr, min, sec, millisec;
// // timer animation logic
// // prev displays for timer
// let prev_displays = document.querySelectorAll(".prev") ;
// let hr_prev = prev_displays[0];
// let min_prev = prev_displays[1];
// let sec_prev = prev_displays[2];
// let millisec_prev = prev_displays[3];
// // next displays of timers
// let next_displays = document.querySelectorAll(".next") ;
// let hr_next = next_displays[0] ;
// let min_next = next_displays[1];
// let sec_next = next_displays[2];

// let update_sec_prev ;
    
// // function to start the stopwatch
// // least count of stopwatch is 1/100th of a second 
// function startStopwatch() 
// {
    
//   millisec = parseInt(millisec_prev.textContent);
   
//     millisec += 1;
//     // updates millisecond value and increments sec value
//     if (millisec == 100) 
//     {
//         millisec = 0;
//         sec = parseInt(sec_prev.textContent);
//         sec += 1;
//         if (sec < 10) {
//             sec = '0' + sec;
//         }
//         sec_next.textContent=sec ;
//         // transition the sliding up timer screen to make it visible
//         sec_next.classList.add("animate");
//         // resets the  timer screen to its original place after 500miiliseconds
//         updatePrev= setTimeout(()=>
//         {
//             sec_prev.textContent = sec;
//             sec_next.classList.toggle("animate");
//         },500)

//     }
//     // updates secs and increments min value
//     if (sec == 60) {
//         sec = 0;
//         min = parseInt(min_prev.textContent);
//         min += 1;
//         if (min < 10)
//         {
//             min ='0'+min ;
//         }
//         min_next.textContent=min;
//           // transition the sliding up timer screen to make it visible
//         min_next.classList.add("animate") ;
//          // resets the  timer screen to its original place after 500miiliseconds
//         setTimeout(() =>
//         {
//             min_prev.textContent = min ;
//             min_next.classList.toggle("animate");
//         },500)
//     }
//     // updates min and increments hour value
//     if (min == 60) {
//         min = 0;
//         hr = parseInt(hr_prev.textContent);
//         hr += 1;
//         if(hr<10)
//         {
//             hr='0'+hr;
//         }
//         hr_next.textContent=hr ;
//           // transition the sliding up timer screen to make it visible
//         hr_next.classList.add("animate");
//          // resets the  timer screen to its original place after 500 milliseconds
//         setTimeout( ()=>
//         {
//             hr_prev.textContent=hr ;
//             hr_next.classList.toggle("animate");
//         },500)
//     }

//     // code below adds a 0 to single digit values of millisec , sec , min ,hour
//     if (parseInt(millisec) < 10) {
//         millisec = '0' +parseInt(millisec);
//     }
//     if (parseInt(sec) < 10) {
//         sec = '0' +parseInt(sec);
//     }
//     if (parseInt(min) < 10) {
//         min = '0' + parseInt(min);
//     }
//     if (parseInt(hr) < 10) {
//         hr = '0' +parseInt(hr);
//     }
//     // increments the value of millisec
//     millisec_prev.textContent = millisec;



// }


// // stores the reference to setInterval object
// let stopwatch;
// // uses start button to activate stopwatch
// startBtn.addEventListener("click", function () {

//     // a check in place to prevent to prevent current stopwatch instance to be re-iinitialized
//     if (status == false) 
//     {
//         status = true;
//         // activates blinking animation of separators
//         for(let separator of separators)
//         {
//             separator.classList.add("blinking-animate-separators");
//         }
        
//         stopwatch = setInterval(startStopwatch, 10);


//     }
// });

// // deactivates the stopwatch
// function stopStopwatch() {


//     // clearing already set intervals and timeouts
//     clearInterval(stopwatch);
//     clearTimeout(updatePrev);
//     // stopping blinking animations
//     for(let separator of separators)
//     {
//         separator.classList.remove("blinking-animate-separators");
//     }
//     status = false;

// }
// // uses stop button to deactivate the stopwatch
// stopBtn.addEventListener("click", stopStopwatch);

// resetBtn.addEventListener("click",  function()  {
//      stopStopwatch();
//     sec_next.textContent = "00";
// //    resetting stopwatch to initial values
//     hr_prev.textContent = "00";
//     min_prev.textContent = "00";
//     sec_prev.textContent = "00";
//     millisec_prev.textContent = '00';
    
   
   
// });
// // lap functionality
// function addTimeToList() {
//     console.log("inside addTimeToList") ;
//     let time_String = hr_prev.textContent + ' : ' + min_prev.textContent + " : " + sec_prev.textContent + " : " +  millisec_prev.textContent;
//     let li_element = document.createElement("li");
//     li_element.innerHTML=time_String;
//     result_list.prepend(li_element);
// }
// lapBtn.addEventListener("click", addTimeToList)







// buttons dom elements
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");
let lapBtn = document.querySelector("#lap");
// section to display results of stopwatch
let result_list = document.querySelector("#result-list");
// separator elements between different units of time
let separators = document.querySelectorAll(".separator");
//  status reperesnts whether stopwatch is on (i.e true) or off(i.e false)
let status = false;
// declaring variables used to calculate time duration
let hr, min, sec, millisec;
// timer animation logic
// prev displays for timer
let prev_displays = document.querySelectorAll(".prev") ;
let hr_prev = prev_displays[0];
let min_prev = prev_displays[1];
let sec_prev = prev_displays[2];
let millisec_prev = prev_displays[3];
// next displays of timers
let next_displays = document.querySelectorAll(".next") ;
let hr_next = next_displays[0] ;
let min_next = next_displays[1];
let sec_next = next_displays[2];

let update_sec_prev ,update_min_prev,update_hr_prev ;
    
// function to start the stopwatch
// least count of stopwatch is 1/100th of a second 
function startStopwatch() 
{
    
  millisec = parseInt(millisec_prev.textContent);
   
    millisec += 1;
    // updates millisecond value and increments sec value
    if (millisec == 100) 
    {
        millisec = 0;
        sec = parseInt(sec_prev.textContent);
        sec += 1;
        if (sec < 10) {
            sec = '0' + sec;
        }
        sec_next.textContent=sec ;
        // transition the sliding up timer screen to make it visible
        sec_next.classList.add("animate");
        // resets the  timer screen to its original place after 500miiliseconds
        update_sec_prev= setTimeout(()=>
        {
            sec_prev.textContent = sec;
            sec_next.classList.toggle("animate");
        },500)

    }
    // updates secs and increments min value
    if (sec == 60) {
        sec = 0;
        min = parseInt(min_prev.textContent);
        min += 1;
        if (min < 10)
        {
            min ='0'+min ;
        }
        min_next.textContent=min;
          // transition the sliding up timer screen to make it visible
        min_next.classList.add("animate") ;
         // resets the  timer screen to its original place after 500miiliseconds
         update_min_prev=setTimeout(() =>
        {
            min_prev.textContent = min ;
            min_next.classList.toggle("animate");
        },500)
    }
    // updates min and increments hour value
    if (min == 60) {
        min = 0;
        hr = parseInt(hr_prev.textContent);
        hr += 1;
        if(hr<10)
        {
            hr='0'+hr;
        }
        hr_next.textContent=hr ;
          // transition the sliding up timer screen to make it visible
        hr_next.classList.add("animate");
         // resets the  timer screen to its original place after 500 milliseconds
         update_hr_prev=setTimeout( ()=>
        {
            hr_prev.textContent=hr ;
            hr_next.classList.toggle("animate");
        },500)
    }

    // code below adds a 0 to single digit values of millisec , sec , min ,hour
    if (parseInt(millisec) < 10) {
        millisec = '0' +parseInt(millisec);
    }
    if (parseInt(sec) < 10) {
        sec = '0' +parseInt(sec);
    }
    if (parseInt(min) < 10) {
        min = '0' + parseInt(min);
    }
    if (parseInt(hr) < 10) {
        hr = '0' +parseInt(hr);
    }
    // increments the value of millisec
    millisec_prev.textContent = millisec;



}


// stores the reference to setInterval object
let stopwatch;
// uses start button to activate stopwatch
startBtn.addEventListener("click", function () {

    // a check in place to prevent to prevent current stopwatch instance to be re-iinitialized
    if (status == false) 
    {
        status = true;
        // activates blinking animation of separators
        for(let separator of separators)
        {
            separator.classList.add("blinking-animate-separators");
        }
        
        stopwatch = setInterval(startStopwatch, 10);


    }
});

// deactivates the stopwatch
function stopStopwatch() {


    // clearing already set intervals and timeouts
    clearInterval(stopwatch);
    clearTimeout(update_sec_prev);
    clearTimeout(update_min_prev);
    clearTimeout(update_hr_prev);
    // stopping blinking animations
    for(let separator of separators)
    {
        separator.classList.remove("blinking-animate-separators");
    }
    status = false;

}
// uses stop button to deactivate the stopwatch
stopBtn.addEventListener("click", stopStopwatch);

resetBtn.addEventListener("click",  function()  {
     stopStopwatch();
  
//    resetting stopwatch to initial values
    
    sec_prev.textContent = "00";
    hr_prev.textContent = "00";
    min_prev.textContent = "00";
    sec_prev.textContent = "00";
    millisec_prev.textContent = '00';
    sec_next.textContent = "00";
    hr_next.textContent = "00";
    min_next.textContent = "00";
    sec_next.textContent = "00";
    millisec_next.textContent = '00';
    
   
   
});
// lap functionality
function addTimeToList() {
    console.log("inside addTimeToList") ;
    let time_String = hr_prev.textContent + ' hr : ' + min_prev.textContent + " min : " + sec_prev.textContent + " s : " +  millisec_prev.textContent+" ms";
    let li_element = document.createElement("li");
    li_element.innerHTML=time_String;
    result_list.prepend(li_element);
}
lapBtn.addEventListener("click", addTimeToList)


