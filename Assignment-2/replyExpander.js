/*
    Write a script that loads the replies under the comments
*/

// Inspected the replies button and searched for all the classes it contains
// It contains these classes

let buttonClasses= ['yt-spec-button-shape-next','yt-spec-button-shape-next--text','yt-spec-button-shape-next--call-to-action',
'yt-spec-button-shape-next--size-m','yt-spec-button-shape-next--icon-leading','yt-spec-button-shape-next--align-by-text']

// Searching for elements which contains all of these classes 

let combinedClassQueryParam='';
for(let i in buttonClasses){
  combinedClassQueryParam.append('.'+buttonClasses[i])
}

let replyButtons=document.querySelectorAll(combinedClassQueryParam)

// Every reply consists of two buttons i.e each for expand and dimnish
// Clicking the alternate buttons 
for(let i=0;i<replyButtons.length;i+=2){
    replyButtons[i].click()
}