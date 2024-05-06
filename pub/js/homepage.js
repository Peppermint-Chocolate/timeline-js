"use strict"
// This file can be found by a client request to /js/course.js which happens through
// the <script> tag in course.html.
// The static directory middleware gives the client access to this file.

console.log('Loaded examples.js from the server.') 

// helpful website for choosing RGB colors 
// https://www.w3schools.com/css/css_colors_rgb.asp

// development/testing process: Example0
console.log('define timeline.') 
const t = new TimelineGenerator() 
console.log('timeline initiated.')  
t.makeTimeline("Example_HP", "ExampleHP", "CSC309H1 Semester Timeline", "1000px", "rgba(163, 161, 165, 0.7)") 
console.log('timeline makeEvent.')  
t.makeEvent("Example_HP", "Start_HP", "Start of Term", "Course starts", "50px") 
t.makeEvent("Example_HP", "A_1_HP", "Asgmt.1", "Ex 1", "150px") 
t.makeEvent("Example_HP", "A_2_HP", "Asgmt.2", "Exercise on library system", "390px") 
t.makeEvent("Example_HP", "IP_1_HP", "Individual Proposal", "A proposal of library", "300px")  
t.makeEvent("Example_HP", "P_1_HP", "Phase I", "Front-end operation of the team project and TA meeting", "420px") 
t.makeEvent("Example_HP", "A_3_HP", "Asgmt.3", "Eexercise on restaurant reservation", "570px") 
t.makeEvent("Example_HP", "AR_HP", "Alpha Release", "Initial release of library", "680px")  
t.makeEvent("Example_HP", "P_2_HP", "Phase II", "Back-end operation of the team project and TA meeting", "790px") 
t.makeEvent("Example_HP", "IP_2_HP", "Individual Project", "Final submission", "860px") 
t.makeEvent("Example_HP", "End_HP", "End of Term", "Course ends", "950px") 
console.log('update event.') 
t.updateEventContent("A_1_HP", "", "Exercise on twitter layout") 
t.updateEventPosition("A_2_HP", "260px")
t.createTag("Assignments", "rgba(250, 255, 229, 0.8)") 
t.createTag("Team_Project", "rgba(249, 231, 241, 0.8)") 
t.createTag("Individual_Project", "rgba(222, 245, 244, 0.8)") 
console.log('tag created')  
t.addTagToEvent("A_1_HP", "Assignments") 
t.addTagToEvent("A_2_HP", "Assignments") 
t.addTagToEvent("A_3_HP", "Assignments") 
t.addTagToEvent("IP_1_HP", "Individual_Project")
t.addTagToEvent("AR_HP", "Individual_Project")
t.addTagToEvent("IP_2_HP", "Individual_Project")
t.addTagToEvent("P_1_HP", "Team_Project") 
t.addTagToEvent("P_2_HP", "Team_Project") 