"use strict"
// This file can be found by a client request to /js/course.js which happens through
// the <script> tag in course.html.
// The static directory middleware gives the client access to this file.

console.log('Loaded examples.js from the server.') 

// helpful website for choosing RGB colors 
// https://www.w3schools.com/css/css_colors_rgb.asp

// development/testing process: Example0
console.log('define timeline.') 
const t0 = new TimelineGenerator() 
console.log('timeline initiated.')  
t0.makeTimeline("Example_0", "Example0", "CSC309H1 Semester Timeline", "1000px", "rgba(163, 161, 165, 0.7)") 
console.log('timeline makeEvent.')  
t0.makeEvent("Example_0", "Start", "Start of Term", "Course starts", "50px") 
t0.makeEvent("Example_0", "A_1", "Asgmt.1", "Ex 1", "150px") 
t0.makeEvent("Example_0", "A_2", "Asgmt.2", "Exercise on library system", "390px") 
t0.makeEvent("Example_0", "IP_1", "Individual Proposal", "A proposal of library", "300px")  
t0.makeEvent("Example_0", "P_1", "Phase I", "Front-end operation of the team project and TA meeting", "420px") 
t0.makeEvent("Example_0", "A_3", "Asgmt.3", "Eexercise on restaurant reservation", "570px") 
t0.makeEvent("Example_0", "AR", "Alpha Release", "Initial release of library", "680px")  
t0.makeEvent("Example_0", "P_2", "Phase II", "Back-end operation of the team project and TA meeting", "790px") 
t0.makeEvent("Example_0", "IP_2", "Individual Project", "Final submission", "860px") 
t0.makeEvent("Example_0", "End", "End of Term", "Course ends", "950px") 
console.log('update event.') 
t0.updateEventContent("A_1", "", "Exercise on twitter layout") 
t0.updateEventPosition("A_2", "260px")
t0.createTag("Assignments", "rgba(250, 255, 229, 0.8)") 
t0.createTag("Team_Project", "rgba(249, 231, 241, 0.8)") 
t0.createTag("Individual_Project", "rgba(222, 245, 244, 0.8)") 
console.log('tag created')  
t0.addTagToEvent("A_1", "Assignments") 
t0.addTagToEvent("A_2", "Assignments") 
t0.addTagToEvent("A_3", "Assignments") 
t0.addTagToEvent("IP_1", "Individual_Project")
t0.addTagToEvent("AR", "Individual_Project")
t0.addTagToEvent("IP_2", "Individual_Project")
t0.addTagToEvent("P_1", "Team_Project") 
t0.addTagToEvent("P_2", "Team_Project") 
// t0.deleteEvent("A_2") 
// t0.removeTag("Assignments") 
// t0.addTagToEvent("Event3", "default")
// t0.changeBackground("rgba(50, 50, 50, 0.4)"); 
// console.log('change color for events.')  
// t0.changeColorForBaseEvents("rgba(255, 239, 228, 1)") 
// t0.changeColorForBaseEvents() 
// console.log('delete one event.')  
// console.log('delete all events and reset timeilne.') 
// t0.clearTimeline() 



// User Action -- insertEvent 
const insertEvent = document.querySelector("#insertEvent");
insertEvent.addEventListener('submit', insertE);
function insertE(e) {
    e.preventDefault();
    const eId = document.querySelector('#inserteId').value;
    const title = document.querySelector('#insertTitle').value;
    const content = document.querySelector('#insertContent').value;
    const position = document.querySelector('#insertPosition').value;
    t0.makeEvent("Example_0", eId, title, content, position, );
}


// User Action -- deleteEvent 
const deleteEvent = document.querySelector("#deleteEvent");
deleteEvent.addEventListener('submit', deleteE);
function deleteE(e) {
    e.preventDefault();
    const eId = document.querySelector('#deleteId').value;
    t0.deleteEvent(eId);
}


// User Action -- changeColorBaseEvents 
const colorBaseEvents = document.querySelector("#changeColorBaseEvents");
colorBaseEvents.addEventListener('submit', setColorBaseEvents);
function setColorBaseEvents(e) {
    e.preventDefault();
    const color = document.querySelector('#newChangeColorBaseEvents').value;
    const opacity = 0.8; 

    // convert the RGB color input into RGBA 
    const rgbaCol = 'rgba(' + parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + opacity + ')';
    t0.changeColorForBaseEvents(rgbaCol);
}


// User Action -- changeColorBackground 
const colorBackground = document.querySelector("#changeColorBackground");
colorBackground.addEventListener('submit', setColorBackground);
function setColorBackground(e) {
    e.preventDefault();
    const color = document.querySelector('#newChangeColorBackground').value;
    const opacity = 0.6; 

    // convert the RGB color input into RGBA 
    const rgbaCol = 'rgba(' + parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + opacity + ')';
    t0.changeBackground(rgbaCol);
}


// User Action -- updateEventContent 
const updateEventContent = document.querySelector("#updateEventContent");
updateEventContent.addEventListener('submit', updateEC);
function updateEC(e) {
    e.preventDefault();
    const eId = document.querySelector('#updateId_content').value;
    const title = document.querySelector('#updateTitle').value;
    const content = document.querySelector('#updateContent').value;

    t0.updateEventContent(eId, title, content);
}


// User Action -- updateEventPosition 
const updateEventPosition = document.querySelector("#updateEventPosition");
updateEventPosition.addEventListener('submit', updateEP);
function updateEP(e) {
    e.preventDefault();
    const eId = document.querySelector('#updateId_position').value;
    const posX = document.querySelector('#updatePosition').value;

    t0.updateEventPosition(eId, posX);
}


// User Action -- createTag 
const createTag = document.querySelector("#createTag");
createTag.addEventListener('submit', createT);
function createT(e) {
    e.preventDefault();
    const tagName = document.querySelector('#createTagName').value;
    const color = document.querySelector('#chooseTagColor').value;
    const opacity = 0.7; 

    // convert the RGB color input into RGBA 
    const rgbaCol = 'rgba(' + parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + opacity + ')';
    
    t0.createTag(tagName, rgbaCol);
}


// User Action -- addTagToEvent 
const addTagToEvent = document.querySelector("#addTagToEvent");
addTagToEvent.addEventListener('submit', addTagToE);
function addTagToE(e) {
    e.preventDefault();
    const eId = document.querySelector('#addTagEId').value;
    const tagName = document.querySelector('#addTagName').value;

    t0.addTagToEvent(eId, tagName);
}


// User Action -- removeTag 
const removeTag = document.querySelector("#removeTag");
removeTag.addEventListener('submit', removeT);
function removeT(e) {
    e.preventDefault();
    const tagName = document.querySelector('#removeTagName').value;

    t0.removeTag(tagName);
}


// User Action -- clearTimeline
const clearTimeline = document.querySelector("#clearTimeline");
clearTimeline.addEventListener('submit', resetT);
function resetT(e) {
    e.preventDefault();
    // const eId = document.querySelector('#deleteId').value;
    t0.clearTimeline();
}




///////////// STEP 1 /////////////
const t1 = new TimelineGenerator()  
t1.makeTimeline("Example_1", "Example1", "CSC309H1 Semester Timeline", "1000px", "rgba(163, 161, 165, 0.7)") 



///////////// STEP 2 /////////////
const t2 = new TimelineGenerator()  
t2.makeTimeline("Example_2", "Example2", "CSC309H1 Semester Timeline", "1000px", "rgba(163, 161, 165, 0.7)") 
t2.makeEvent("Example_2", "Start_2", "Start of Term", "Course starts", "50px") 
t2.makeEvent("Example_2", "A_1_2", "Asgmt.1", "Ex 1", "150px") 
// t2.makeEvent("Example_2", "A_2_2", "Asgmt.2", "Exercise on library system", "390px") 
// t2.makeEvent("Example_2", "A_3_2", "Asgmt.3", "Eexercise on restaurant reservation", "570px") 
t2.makeEvent("Example_2", "End_2", "End of Term", "Course ends", "950px") 

const insertEvent_2 = document.querySelector("#insertEvent_2");
insertEvent_2.addEventListener('submit', insertE_2);
function insertE_2(e) {
    e.preventDefault();
    const eId = document.querySelector('#inserteId_2').value;
    const title = document.querySelector('#insertTitle_2').value;
    const content = document.querySelector('#insertContent_2').value;
    const position = document.querySelector('#insertPosition_2').value;
    t2.makeEvent("Example_2", eId, title, content, position, );
}


///////////// STEP 3 ///////////// 
const t3 = new TimelineGenerator()  
t3.makeTimeline("Example_3", "Example3", "CSC309H1 Semester Timeline", "1000px", "rgba(163, 161, 165, 0.7)") 
t3.makeEvent("Example_3", "Start_3", "Start of Term", "Course starts", "50px") 
t3.makeEvent("Example_3", "A_1_3", "Asgmt.1", "Ex 1", "150px") 
t3.makeEvent("Example_3", "A_2_3", "Asgmt.2", "Exercise on library system", "390px") 
t3.makeEvent("Example_3", "A_3_3", "Asgmt.3", "Eexercise on restaurant reservation", "570px") 
t3.makeEvent("Example_3", "End_3", "End of Term", "Course ends", "950px")
// t3.updateEventContent("A_1_3", "", "Exercise on twitter layout") 

const updateEventContent_3 = document.querySelector("#updateEventContent_3");
updateEventContent_3.addEventListener('submit', updateEC_3);
function updateEC_3(e) {
    e.preventDefault();
    const eId = document.querySelector('#updateId_content_3').value;
    const title = document.querySelector('#updateTitle_3').value;
    const content = document.querySelector('#updateContent_3').value;

    t3.updateEventContent(eId, title, content);
}



///////////// STEP 4 ///////////// 
const t4 = new TimelineGenerator()  
t4.makeTimeline("Example_4", "Example4", "CSC309H1 Semester Timeline", "1000px", "rgba(163, 161, 165, 0.7)") 
t4.makeEvent("Example_4", "Start_4", "Start of Term", "Course starts", "50px") 
t4.makeEvent("Example_4", "A_1_4", "Asgmt.1", "Ex 1", "150px") 
t4.makeEvent("Example_4", "A_2_4", "Asgmt.2", "Exercise on library system", "390px") 
t4.makeEvent("Example_4", "A_3_4", "Asgmt.3", "Eexercise on restaurant reservation", "570px") 
t4.makeEvent("Example_4", "End_4", "End of Term", "Course ends", "950px")
t4.updateEventContent("A_1_4", "", "Exercise on twitter layout") 
// t4.updateEventPosition("A_2_4", "260px") 

const updateEventPosition_4 = document.querySelector("#updateEventPosition_4");
updateEventPosition_4.addEventListener('submit', updateEP_4);
function updateEP_4(e) {
    e.preventDefault();
    const eId = document.querySelector('#updateId_position_4').value;
    const posX = document.querySelector('#updatePosition_4').value;

    t4.updateEventPosition(eId, posX);
}


///////////// STEP 5 ///////////// 
const t5 = new TimelineGenerator()  
t5.makeTimeline("Example_5", "Example5", "CSC309H1 Semester Timeline", "1000px", "rgba(163, 161, 165, 0.7)") 
t5.makeEvent("Example_5", "Start_5", "Start of Term", "Course starts", "50px") 
t5.makeEvent("Example_5", "A_1_5", "Asgmt.1", "Ex 1", "150px") 
t5.makeEvent("Example_5", "A_2_5", "Asgmt.2", "Exercise on library system", "390px") 
t5.makeEvent("Example_5", "A_3_5", "Asgmt.3", "Eexercise on restaurant reservation", "570px") 
t5.makeEvent("Example_5", "End_5", "End of Term", "Course ends", "950px")
t5.updateEventContent("A_1_5", "", "Exercise on twitter layout") 
t5.updateEventPosition("A_2_5", "260px")
t5.createTag("Assignments", "rgba(250, 255, 229, 0.8)")
t5.createTag("Team_Project", "rgba(249, 231, 241, 0.8)")
// t5.createTag("Individual_Project", "rgba(222, 245, 244, 0.8)")

const createTag_5 = document.querySelector("#createTag_5");
createTag_5.addEventListener('submit', createT_5);
function createT_5(e) {
    e.preventDefault();
    const tagName = document.querySelector('#createTagName_5').value;
    const color = document.querySelector('#chooseTagColor_5').value;
    const opacity = 0.7; 

    // convert the RGB color input into RGBA 
    const rgbaCol = 'rgba(' + parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + opacity + ')';
    
    t5.createTag(tagName, rgbaCol);
}


///////////// STEP 6 ///////////// 
const t6 = new TimelineGenerator()  
t6.makeTimeline("Example_6", "Example6", "CSC309H1 Semester Timeline", "1000px", "rgba(163, 161, 165, 0.7)") 
t6.makeEvent("Example_6", "Start_6", "Start of Term", "Course starts", "50px") 
t6.makeEvent("Example_6", "A_1_6", "Asgmt.1", "Ex 1", "150px") 
t6.makeEvent("Example_6", "A_2_6", "Asgmt.2", "Exercise on library system", "390px") 
t6.makeEvent("Example_6", "A_3_6", "Asgmt.3", "Eexercise on restaurant reservation", "570px") 
t6.makeEvent("Example_6", "End_6", "End of Term", "Course ends", "950px")
t6.updateEventContent("A_1_6", "", "Exercise on twitter layout") 
t6.updateEventPosition("A_2_6", "260px")
t6.createTag("Assignments", "rgba(250, 255, 229, 0.8)")
t6.createTag("Team_Project", "rgba(249, 231, 241, 0.8)")
t6.createTag("Individual_Project", "rgba(222, 245, 244, 0.8)")
t6.addTagToEvent("A_1_6", "Assignments")
// t6.addTagToEvent("A_2_6", "Assignments")
// t6.addTagToEvent("A_3_6", "Assignments")

const addTagToEvent_6 = document.querySelector("#addTagToEvent_6");
addTagToEvent_6.addEventListener('submit', addTagToE_6);
function addTagToE_6(e) {
    e.preventDefault();
    const eId = document.querySelector('#addTagEId_6').value;
    const tagName = document.querySelector('#addTagName_6').value;

    t6.addTagToEvent(eId, tagName);
}



const t6_1 = new TimelineGenerator()  
t6_1.makeTimeline("Example_6_1", "Example6_1", "CSC309H1 Semester Timeline", "1000px", "rgba(163, 161, 165, 0.7)") 
t6_1.makeEvent("Example_6_1", "Start_6_1", "Start of Term", "Course starts", "50px") 
t6_1.makeEvent("Example_6_1", "A_1_6_1", "Asgmt.1", "Ex 1", "150px") 
t6_1.makeEvent("Example_6_1", "A_2_6_1", "Asgmt.2", "Exercise on library system", "390px") 
t6_1.makeEvent("Example_6_1", "A_3_6_1", "Asgmt.3", "Eexercise on restaurant reservation", "570px") 
t6_1.makeEvent("Example_6_1", "End_6_1", "End of Term", "Course ends", "950px")
t6_1.makeEvent("Example_6_1", "IP_1_6_1", "Individual Proposal", "A proposal of library", "300px")  
t6_1.makeEvent("Example_6_1", "P_1_6_1", "Phase I", "Front-end operation of the team project and TA meeting", "420px") 
t6_1.makeEvent("Example_6_1", "AR_6_1", "Alpha Release", "Initial release of library", "680px")  
t6_1.makeEvent("Example_6_1", "P_2_6_1", "Phase II", "Back-end operation of the team project and TA meeting", "790px") 
t6_1.makeEvent("Example_6_1", "IP_2_6_1", "Individual Project", "Final submission", "860px") 
t6_1.updateEventContent("A_1_6_1", "", "Exercise on twitter layout") 
t6_1.updateEventPosition("A_2_6_1", "260px")
t6_1.createTag("Assignments", "rgba(250, 255, 229, 0.8)")
t6_1.createTag("Team_Project", "rgba(249, 231, 241, 0.8)")
t6_1.createTag("Individual_Project", "rgba(222, 245, 244, 0.8)")
t6_1.addTagToEvent("A_1_6_1", "Assignments")
t6_1.addTagToEvent("A_2_6_1", "Assignments")
t6_1.addTagToEvent("A_3_6_1", "Assignments")
t6_1.addTagToEvent("IP_1_6_1", "Individual_Project")
t6_1.addTagToEvent("AR_6_1", "Individual_Project")
t6_1.addTagToEvent("IP_2_6_1", "Individual_Project")
t6_1.addTagToEvent("P_1_6_1", "Team_Project") 
t6_1.addTagToEvent("P_2_6_1", "Team_Project") 



///////////// STEP 7 ///////////// 
const t7 = new TimelineGenerator()  
t7.makeTimeline("Example_7", "Example7", "CSC309H1 Semester Timeline", "1000px", "rgba(163, 161, 165, 0.7)") 
t7.makeEvent("Example_7", "Start_7", "Start of Term", "Course starts", "50px") 
t7.makeEvent("Example_7", "A_1_7", "Asgmt.1", "Ex 1", "150px") 
t7.makeEvent("Example_7", "A_2_7", "Asgmt.2", "Exercise on library system", "390px") 
t7.makeEvent("Example_7", "A_3_7", "Asgmt.3", "Eexercise on restaurant reservation", "570px") 
t7.makeEvent("Example_7", "End_7", "End of Term", "Course ends", "950px")
t7.makeEvent("Example_7", "IP_1_7", "Individual Proposal", "A proposal of library", "300px")  
t7.makeEvent("Example_7", "P_1_7", "Phase I", "Front-end operation of the team project and TA meeting", "420px") 
t7.makeEvent("Example_7", "AR_7", "Alpha Release", "Initial release of library", "680px")  
t7.makeEvent("Example_7", "P_2_7", "Phase II", "Back-end operation of the team project and TA meeting", "790px") 
t7.makeEvent("Example_7", "IP_2_7", "Individual Project", "Final submission", "860px") 
t7.updateEventContent("A_1_7", "", "Exercise on twitter layout") 
t7.updateEventPosition("A_2_7", "260px")
t7.createTag("Assignments", "rgba(250, 255, 229, 0.8)")
t7.createTag("Team_Project", "rgba(249, 231, 241, 0.8)")
t7.createTag("Individual_Project", "rgba(222, 245, 244, 0.8)")
t7.addTagToEvent("A_1_7", "Assignments")
t7.addTagToEvent("A_2_7", "Assignments")
t7.addTagToEvent("A_3_7", "Assignments")
t7.addTagToEvent("IP_1_7", "Individual_Project")
t7.addTagToEvent("AR_7", "Individual_Project")
t7.addTagToEvent("IP_2_7", "Individual_Project")
t7.addTagToEvent("P_1_7", "Team_Project") 
t7.addTagToEvent("P_2_7", "Team_Project") 
t7.removeTag("Team_Project")
// t7.removeTag("Assignments") 

const removeTag_7 = document.querySelector("#removeTag_7");
removeTag_7.addEventListener('submit', removeT_7);
function removeT_7(e) {
    e.preventDefault();
    const tagName = document.querySelector('#removeTagName_7').value;

    t7.removeTag(tagName);
}


///////////// STEP 8 ///////////// 
const t8 = new TimelineGenerator() 
t8.makeTimeline("Example_8", "Example8", "CSC309H1 Semester Timeline", "1000px", "rgba(163, 161, 165, 0.7)") 
t8.makeEvent("Example_8", "Start_8", "Start of Term", "Course starts", "50px") 
t8.makeEvent("Example_8", "A_1_8", "Asgmt.1", "Ex 1", "150px") 
t8.makeEvent("Example_8", "A_2_8", "Asgmt.2", "Exercise on library system", "390px") 
t8.makeEvent("Example_8", "IP_1_8", "Individual Proposal", "A proposal of library", "300px")  
t8.makeEvent("Example_8", "P_1_8", "Phase I", "Front-end operation of the team project and TA meeting", "420px") 
t8.makeEvent("Example_8", "A_3_8", "Asgmt.3", "Eexercise on restaurant reservation", "570px") 
t8.makeEvent("Example_8", "AR_8", "Alpha Release", "Initial release of library", "680px")  
t8.makeEvent("Example_8", "P_2_8", "Phase II", "Back-end operation of the team project and TA meeting", "790px") 
t8.makeEvent("Example_8", "IP_2_8", "Individual Project", "Final submission", "860px") 
t8.makeEvent("Example_8", "End_8", "End of Term", "Course ends", "950px") 
t8.updateEventContent("A_1_8", "", "Exercise on twitter layout") 
t8.updateEventPosition("A_2_8", "260px") 
t8.createTag("Individual_Project", "rgba(222, 245, 244, 0.8)") 
t8.addTagToEvent("IP_1_8", "Individual_Project")
t8.addTagToEvent("AR_8", "Individual_Project")
t8.addTagToEvent("IP_2_8", "Individual_Project")
t8.deleteEvent("IP_1_8") 
// t8.deleteEvent("A_1_8")  


const deleteEvent_8 = document.querySelector("#deleteEvent_8");
deleteEvent_8.addEventListener('submit', deleteE_8);
function deleteE_8(e) {
    e.preventDefault();
    const eId = document.querySelector('#deleteId_8').value;
    t8.deleteEvent(eId);
}



///////////// STEP 9 ///////////// 
const t9 = new TimelineGenerator()  
t9.makeTimeline("Example_9", "Example9", "CSC309H1 Semester Timeline", "1000px", "rgba(163, 161, 165, 0.7)") 
t9.makeEvent("Example_9", "Start_9", "Start of Term", "Course starts", "50px") 
t9.makeEvent("Example_9", "A_1_9", "Asgmt.1", "Ex 1", "150px") 
t9.makeEvent("Example_9", "A_2_9", "Asgmt.2", "Exercise on library system", "390px") 
t9.makeEvent("Example_9", "A_3_9", "Asgmt.3", "Eexercise on restaurant reservation", "570px") 
t9.makeEvent("Example_9", "End_9", "End of Term", "Course ends", "950px")
t9.makeEvent("Example_9", "IP_1_9", "Individual Proposal", "A proposal of library", "300px")  
t9.makeEvent("Example_9", "P_1_9", "Phase I", "Front-end operation of the team project and TA meeting", "420px") 
t9.makeEvent("Example_9", "AR_9", "Alpha Release", "Initial release of library", "680px")  
t9.makeEvent("Example_9", "P_2_9", "Phase II", "Back-end operation of the team project and TA meeting", "790px") 
t9.makeEvent("Example_9", "IP_2_9", "Individual Project", "Final submission", "860px") 
t9.updateEventContent("A_1_9", "", "Exercise on twitter layout") 
t9.updateEventPosition("A_2_9", "260px")
t9.createTag("Assignments", "rgba(250, 255, 229, 0.8)")
t9.createTag("Team_Project", "rgba(249, 231, 241, 0.8)")
t9.createTag("Individual_Project", "rgba(222, 245, 244, 0.8)")
t9.addTagToEvent("A_1_9", "Assignments")
t9.addTagToEvent("A_2_9", "Assignments")
t9.addTagToEvent("A_3_9", "Assignments")
t9.addTagToEvent("IP_1_9", "Individual_Project")
t9.addTagToEvent("AR_9", "Individual_Project")
t9.addTagToEvent("IP_2_9", "Individual_Project")
t9.addTagToEvent("P_1_9", "Team_Project") 
t9.addTagToEvent("P_2_9", "Team_Project") 
t9.removeTag("Team_Project")
t9.removeTag("Assignments") 
// t9.deleteEvent("IP_1_9") 
// t9.deleteEvent("A_1_9") 
//t9.changeColorForBaseEvents("rgba(214, 247, 197, 1)") 

const colorBaseEvents_9 = document.querySelector("#changeColorBaseEvents_9");
colorBaseEvents_9.addEventListener('submit', setColorBaseEvents_9);
function setColorBaseEvents_9(e) {
    e.preventDefault();
    const color = document.querySelector('#newChangeColorBaseEvents_9').value;
    const opacity = 0.8; 

    // convert the RGB color input into RGBA 
    const rgbaCol = 'rgba(' + parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + opacity + ')';
    t9.changeColorForBaseEvents(rgbaCol);
}


///////////// STEP 10 ///////////// 
const t10 = new TimelineGenerator()  
t10.makeTimeline("Example_10", "Example10", "CSC309H1 Semester Timeline", "1000px", "rgba(163, 161, 165, 0.7)") 
t10.makeEvent("Example_10", "Start_10", "Start of Term", "Course starts", "50px") 
t10.makeEvent("Example_10", "A_1_10", "Asgmt.1", "Ex 1", "150px") 
t10.makeEvent("Example_10", "A_2_10", "Asgmt.2", "Exercise on library system", "390px") 
t10.makeEvent("Example_10", "A_3_10", "Asgmt.3", "Eexercise on restaurant reservation", "570px") 
t10.makeEvent("Example_10", "End_10", "End of Term", "Course ends", "950px")
t10.makeEvent("Example_10", "IP_1_10", "Individual Proposal", "A proposal of library", "300px")  
t10.makeEvent("Example_10", "P_1_10", "Phase I", "Front-end operation of the team project and TA meeting", "420px") 
t10.makeEvent("Example_10", "AR_10", "Alpha Release", "Initial release of library", "680px")  
t10.makeEvent("Example_10", "P_2_10", "Phase II", "Back-end operation of the team project and TA meeting", "790px") 
t10.makeEvent("Example_10", "IP_2_10", "Individual Project", "Final submission", "860px") 
t10.updateEventContent("A_1_10", "", "Exercise on twitter layout") 
t10.updateEventPosition("A_2_10", "260px")
t10.createTag("Assignments", "rgba(250, 255, 229, 0.8)")
t10.createTag("Team_Project", "rgba(249, 231, 241, 0.8)")
t10.createTag("Individual_Project", "rgba(222, 245, 244, 0.8)")
t10.addTagToEvent("A_1_10", "Assignments")
t10.addTagToEvent("A_2_10", "Assignments")
t10.addTagToEvent("A_3_10", "Assignments")
t10.addTagToEvent("IP_1_10", "Individual_Project")
t10.addTagToEvent("AR_10", "Individual_Project")
t10.addTagToEvent("IP_2_10", "Individual_Project")
t10.addTagToEvent("P_1_10", "Team_Project") 
t10.addTagToEvent("P_2_10", "Team_Project") 
t10.removeTag("Team_Project")
t10.removeTag("Assignments") 
t10.changeColorForBaseEvents("rgba(214, 247, 197, 1)")
// t10.changeBackground("rgba(123, 177, 234, 0.7)"); 

const colorBackground_10 = document.querySelector("#changeColorBackground_10");
colorBackground_10.addEventListener('submit', setColorBackground_10);
function setColorBackground_10(e) {
    e.preventDefault();
    const color = document.querySelector('#newChangeColorBackground_10').value;
    const opacity = 0.6; 

    // convert the RGB color input into RGBA 
    const rgbaCol = 'rgba(' + parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16) + ',' + opacity + ')';
    t10.changeBackground(rgbaCol);
}



///////////// STEP 11 ///////////// 
const t11 = new TimelineGenerator()  
t11.makeTimeline("Example_11", "Example11", "CSC309H1 Semester Timeline", "1000px", "rgba(163, 161, 165, 0.7)") 
t11.makeEvent("Example_11", "Start_11", "Start of Term", "Course starts", "50px") 
t11.makeEvent("Example_11", "A_1_11", "Asgmt.1", "Ex 1", "150px") 
t11.makeEvent("Example_11", "A_2_11", "Asgmt.2", "Exercise on library system", "390px") 
t11.makeEvent("Example_11", "A_3_11", "Asgmt.3", "Eexercise on restaurant reservation", "570px") 
t11.makeEvent("Example_11", "End_11", "End of Term", "Course ends", "950px")
t11.makeEvent("Example_11", "IP_1_11", "Individual Proposal", "A proposal of library", "300px")  
t11.makeEvent("Example_11", "P_1_11", "Phase I", "Front-end operation of the team project and TA meeting", "420px") 
t11.makeEvent("Example_11", "AR_11", "Alpha Release", "Initial release of library", "680px")  
t11.makeEvent("Example_11", "P_2_11", "Phase II", "Back-end operation of the team project and TA meeting", "790px") 
t11.makeEvent("Example_11", "IP_2_11", "Individual Project", "Final submission", "860px") 
t11.updateEventContent("A_1_11", "", "Exercise on twitter layout") 
t11.updateEventPosition("A_2_11", "260px")
t11.createTag("Assignments", "rgba(250, 255, 229, 0.8)")
t11.createTag("Team_Project", "rgba(249, 231, 241, 0.8)")
t11.createTag("Individual_Project", "rgba(222, 245, 244, 0.8)")
t11.addTagToEvent("A_1_11", "Assignments")
t11.addTagToEvent("A_2_11", "Assignments")
t11.addTagToEvent("A_3_11", "Assignments")
t11.addTagToEvent("IP_1_11", "Individual_Project")
t11.addTagToEvent("AR_11", "Individual_Project")
t11.addTagToEvent("IP_2_11", "Individual_Project")
t11.addTagToEvent("P_1_11", "Team_Project") 
t11.addTagToEvent("P_2_11", "Team_Project") 
t11.removeTag("Team_Project")
t11.removeTag("Assignments") 
t11.changeColorForBaseEvents("rgba(214, 247, 197, 1)")
t11.changeBackground("rgba(123, 177, 234, 0.7)"); 
// t11.clearTimeline(); 

const clearTimeline_11 = document.querySelector("#clearTimeline_11");
clearTimeline_11.addEventListener('submit', resetT_11);
function resetT_11(e) {
    e.preventDefault();

    t11.clearTimeline();
}




