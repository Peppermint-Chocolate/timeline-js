"use strict"
// This file can be found by a client request to /js/course.js which happens through
// the <script> tag in course.html.
// The static directory middleware gives the client access to this file.

const log = console.log; 
log('Loaded Timeline.js from the server.'); 

//Calling a Function defined inside another function in Javascript 
/*
function outer() { 
    function inner() {
        console.log("hi");
    }
    return {
        inner: inner
    };
}
var foo = outer();
foo.inner();
*/



(function (global, document) {

    // constructor for timeline 
    function TimelineGenerator(options) {
        this.querySelector = undefined; 
        this.tId = undefined; 
        this.eId = undefined; 
        this.eventColor = "rgba(255, 255, 255, 0.8)";  
        this.title = undefined; 
        this.backgroundColor = ""; 
        this.width = undefined; 
        this.element = undefined; 
        this.events = {}; 
        this.tags = {"default": "rgba(255, 255, 255, 0.8)"}; 


        //initiateTimeline(querySelector, tId, title, backgroundColor); 
        //function initiateEvent (querySelector, id, title, content) {}
    }

    // var eventColor = "rgba(255, 255, 255, 0.8)"; 
    // var events = {}; 
    // var tags = {"default": "rgba(255, 255, 255, 0.8)"}; 


    // helper functions 
    // function initiateTimeline (querySelector, tId, title, backgroundColor = "rgba(95, 95, 95, 0.2)") {
    //     this.querySelector = querySelector; 
    //     this.tId = tId; 
    //     this.title = title; 
    //     this.backgroundColor = backgroundColor; 

    //     const pos = document.getElementById(querySelector); 
    //     const newTimeline = document.createElement('div');
    //     newTimeline.className = "timeline";
    //     newTimeline.setAttribute("id", this.tId);
    //     newTimeline.style = "float: left;"

    //     const timelineTitle = document.createElement('div'); 
    //     timelineTitle.innerText = title; 
    //     appendChild(timelineTitle); 

    //     const space = document.createElement('div'); 
    //     space.className = "timeline-space"; 
    //     space.style = 'float: left; width: 700px; height:400px; margin-left:50px; border-style: solid; '; 
    //     space.style.backgroundColor = backgroundColor;
    //     appendChild(space); 
    // }

    function getScreen(e){
		var c = document.getElementById(this.tId + "-space");
        var t = c.getContext('2d');
        window.open('', document.getElementById(this.tId + "-space").toDataURL(t));
	}

    // create prototype 
    TimelineGenerator.prototype = {

        // create a new object of timeline, with default width and background color 
        makeTimeline: function(querySelector, tId, title, width = "1000px", backgroundColor = "rgba(50, 50, 50, 0.3)") {
            // initiateTimeline (querySelector, tId, title, backgroundColor); 

            this.querySelector = querySelector; 
            this.tId = tId; 
            this.title = title; 
            this.backgroundColor = backgroundColor; 
            this.width = width; 

            console.log("query, tID, title, and bgc: ", querySelector, tId, title, backgroundColor) 

            const pos = document.getElementById(querySelector); 
            const newTimeline = document.createElement('div');
            newTimeline.className = "timeline";
            newTimeline.setAttribute("id", this.tId);
            newTimeline.style = "float: left; margin-left: 50px; font-size: 22px; max-height: 320px; "
            console.log("newTimeline made.") 

            const timelineTitle = document.createElement('div'); 
            timelineTitle.innerText = title; 
            timelineTitle.setAttribute("id", this.tId + "-title");
            timelineTitle.style = 'display: block; position: relative; left: 50%; transform: translateX(-50%); font-size: 1.4rem; font-family: Arial, serif; font-weight: 250; margin-bottom: 8px; margin-left:265px; '; 
            // timelineTitle.style = 'display: inline-block; position: relative; left: 50%; transform: translateX(-50%); font-size: 1.4rem; font-family: Arial, serif; font-weight: 250; margin-bottom: 8px; margin-left:50px; '; 
            newTimeline.appendChild(timelineTitle); 
            console.log("timelineTitle made.") 

            // const timelineButtonContainer = document.createElement('div'); 
            // timelineButtonContainer.setAttribute("id", this.tId + "-button-container");
            // timelineButtonContainer.style = 'display: inline-block; float: right; margin-right: 5px; '; 

            // const timelineButton = document.createElement('button'); 
            // timelineButton.setAttribute("id", this.tId + "-button"); 
			// timelineButton.innerText = 'ScreenShot'; 
            // // timelineButton.style = 'position:absolute;margin-left:100px'
            // const timelineDownload = document.createElement('a'); 
            // timelineDownload.setAttribute("id", this.tId + "-button-download");

            // timelineButton.appendChild(timelineDownload); 
            // timelineButtonContainer.appendChild(timelineButton); 
            // newTimeline.appendChild(timelineButtonContainer); 

            const space = document.createElement('div'); 
            space.className = "timeline-space"; 
            space.setAttribute("id", this.tId + "-space");
            space.style = 'float: left; display: relative; height:275px; margin-left:50px; border-style: solid; '; 
            space.style.backgroundColor = backgroundColor; 
            space.style.width = width; 
            // var str = "content: ''; position: absolute;top: 50%;left: 0;border-top: 1px solid black;background: black; width: 100%;transform: translateY(-50%);";
            // //document.styleSheets[0].insertRule('Example1.special:before','content: "'+str+'";');
            // $('<style>Example1.special:before{content:"'+str+'"}</style>').appendTo('head');
            const line = document.createElement('hr'); 
            line.style = 'border: 0; height: 5px; background: rgba(50, 50, 50, 0.8); position: relative; top: 190px; z-index: 0;'; 
            line.style.width = width; 
            space.appendChild(line); 
 

            newTimeline.appendChild(space); 
            console.log("space made.") 

            const tagContainer = document.createElement('div'); 
            var allTags = "some tags";  
            tagContainer.className = "timeline-tags"; 
            tagContainer.innerText = allTags; 
            tagContainer.setAttribute("id", this.tId + "-tag-container"); 
            tagContainer.style = 'position: relative; top: -90px; left: 80px;  margin-left = 10px; color: rgba(250, 250, 250, 0); max-height: 80px; overflow: hidden; '; 
            tagContainer.style.width = width; 


            newTimeline.appendChild(tagContainer);

            // const line = document.createElement('div'); 
            // line.className = "timeline-line"; 
            // line.style = 

            pos.append(newTimeline) 
            console.log("newTimeline appended.") 

            //timelineButton.addEventListener('click', getScreen); 
            
        }
  
        // create a new event to be added in the timeline specified, with default background color 
        , makeEvent: function(querySelector, eId, title, content = "", posX = "0px") {
            this.querySelector = querySelector; 
            this.eId = eId; 
            this.title = title; 

            this.events[eId] = "default"; 

            // if (typeof(content) != "undefined") {
            //     content = ""; 
            // }
            this.content = content; 
            const convertPxtoInt = posX.replaceAll('px', '');
            const correctedPosX = (parseInt(convertPxtoInt) - 40).toString(); 
            const posXnew = correctedPosX.concat("px");

            this.posXnew = posX; 
            console.log("posX, posXnew: ", posX, posXnew) 


            //this.backgroundColor = backgroundColor; 
            console.log("query, eID, title, and content: ", querySelector, eId, title, content) 
            
            const pos = document.getElementById(this.tId + "-space"); 
            const newEventContainer = document.createElement('div');
            newEventContainer.setAttribute("id", this.eId);
            newEventContainer.className = "event-container";
            // newEventContainer.style = "float: left; position: relative;"; 
            newEventContainer.style = "float: left; width: 80px; height: 90px; position: absolute; margin-right: 3px; paddingBottom: 0px; font-size: 25px; z-index: 2; transform-style: preserve-3d;"
            newEventContainer.style.marginLeft = posXnew; 
            // backgroundColor = tags["default"]; 
            newEventContainer.style.backgroundColor = this.tags[this.events[eId]];
            // var eventColor = tags[events[eId]]
            var alpha = parseFloat(this.tags[this.events[eId]].split(',')[3]);

            newEventContainer.classList.add("default"); 


            const newEvent = document.createElement('div');
            newEvent.className = "event";
            //newEvent.style = "max-width: 80px; max-height: 90px; margin-bottom: 10px; overflow: hidden;"; 
            // newEvent.setAttribute("id", this.eId);
            // newEvent.style = "float: left; width: 80px; height: 90px; position: relative; margin-right: 3px; font-size: 25px; z-index: 2;"
            // newEvent.style.marginLeft = posX; 
            newEvent.style = "float: left; z-index: 3;"; 
            //newEvent.style.backgroundColor = backgroundColor;
            console.log("newEvent made.")

            const eventTitle = document.createElement('div'); 
            eventTitle.innerText = title; 
            eventTitle.className = "event-title";
            eventTitle.setAttribute("id", this.eId + "-title");
            eventTitle.style = "display: block; font-size: 0.95rem; font-family: Arial, serif; font-weight: bold; margin-top: 5px; margin-left: 5px; padding-bottom: 4px; max-width: 70px; overflow: hidden; ";
            newEvent.appendChild(eventTitle);

            const eventContent = document.createElement('div'); 
            eventContent.innerText = content; 
            eventContent.className = "event-content";
            eventContent.setAttribute("id", this.eId + "-content");
            // eventContent.style = "display: block; font-size: 1.0rem; margin-bottom: 5px; margin-left: 5px; margin-right: 5px; max-height: 60px; overflow: hidden; ";
            eventContent.style = "display: block; font-size: 0.8rem; font-family: Optima, sans-serif; color: rgb(50, 50, 50);  margin-bottom: 5px; margin-left: 5px; margin-right: 5px; max-width: 70px; max-height: 56px; overflow: hidden; ";
        

            newEventContainer.classList.add(eId + 'eventcontainer'); 
            newEvent.classList.add(eId + 'event'); 
            eventTitle.classList.add(eId + 'eventtitle'); 
            eventContent.classList.add(eId + 'eventcontent'); 
            
            newEvent.appendChild(eventContent);
            newEventContainer.appendChild(newEvent)

            
            const line2 = document.createElement('div'); 
            line2.style = "display: block; position: relative; width: 1px; height: 85px; border-left: 3px solid rgba(50, 50, 50, 0.8); top: 90px; left: 40px; z-index: 1; transform: translateZ(-5px)";
            newEventContainer.appendChild(line2);
            
            pos.append(newEventContainer) 
            
            console.log("newEvent appended.")
            console.log("events: ", this.events) 
            console.log("tags: ", this.tags) 

            const eventsCopy = this.events; 
            const tagsCopy = this.tags; 
            console.log("eventsCopy: ", eventsCopy) 
            console.log("tagsCopy: ", tagsCopy) 


            // window.onload=function(){
            //     var foo = document.getElementById(this.eId + "-content");
            //     foo.addEventListener('mouseover',function(){
            //         foo.style.height = "auto";
            //     })
            //     foo.addEventListener('mouseleave',function(){
            //         foo.style.maxHeight = "60px";
            //         foo.style.overflow = "hidden"; 
            //     })
            // }

            // document.getElementById(this.eId + "-content").addEventListener('mouseover', showMore); 
            function showMore(){
                document.querySelector('.'+eId+'eventcontent').style.overflow = "visible";
                document.querySelector('.'+eId+'eventcontent').style.maxHeight = "none";
                document.querySelector('.'+eId+'eventcontent').style.maxWidth = "70px";

                document.querySelector('.'+eId+'eventtitle').style.overflow = "visible";
                //document.querySelector('.'+eId+'eventtitle').style.maxWidth = "none";

                document.querySelector('.'+eId+'eventcontainer').style.paddingBottom = "5px";
                document.querySelector('.'+eId+'eventcontainer').style.height = "auto";
                // document.querySelector('.'+eId+'eventcontainer').style.width = "auto";
                document.querySelector('.'+eId+'eventcontainer').style.zIndex = "5";

                //console.log("this.events[eId]: ", this.events[eId])

                document.querySelector('.'+eId+'eventcontainer').style.backgroundColor = tagsCopy[eventsCopy[eId]].replace(/[^,]+(?=\))/, '1.0');
                
                console.log("mouse over content.") 
                // console.log("set event color to ", eventColor) 
            }

            function showLess(){
                document.querySelector('.'+eId+'eventcontent').style.overflow = "hidden";
                document.querySelector('.'+eId+'eventcontent').style.maxHeight = "56px";
                document.querySelector('.'+eId+'eventcontent').style.maxWidth = "70px";

                document.querySelector('.'+eId+'eventtitle').style.overflow = "hidden";
                document.querySelector('.'+eId+'eventtitle').style.maxWidth = "70px";

                document.querySelector('.'+eId+'eventcontainer').style.paddingBottom = "0px";
                document.querySelector('.'+eId+'eventcontainer').style.height = "90px";
                document.querySelector('.'+eId+'eventcontainer').style.width = "80px";
                document.querySelector('.'+eId+'eventcontainer').style.zIndex = "2";
                document.querySelector('.'+eId+'eventcontainer').style.backgroundColor = tagsCopy[eventsCopy[eId]].replace(/[^,]+(?=\))/, alpha);
                
                console.log("mouse leave content.") 
                // console.log("set event color to ", eventColor) 
            }

            document.querySelector('.'+eId+'event').addEventListener('mouseover', showMore)
            document.querySelector('.'+eId+'event').addEventListener('mouseleave', showLess)

            // optional 
            //this.newEvent.push(events)
        }
  
        // update the title and/or content of a event specified by its event ID 
        , updateEventContent: function(eId, title = "", content = "") {
            this.eId = eId; 
            this.title = title; 
            this.content = content; 
            //this.posX = posX; 
            //console.log("eID, title, content, and position: ", eId, title, content, position) 

            // const posEvent = document.getElementById(this.eId); 
            // posEvent.style.marginLeft = posXnew; 

            if (title != "") {
                const posTitle = document.getElementById(this.eId + "-title"); 
                posTitle.innerText = title; 

                console.log("event title updated."); 

            }

            if (content != "") { 
                const posContent = document.getElementById(this.eId + "-content"); 
                posContent.innerText = content; 

                console.log("event content updated."); 
            }

        }

         // update the position of a event specified by its event ID 
        , updateEventPosition: function(eId, posX) {
            this.eId = eId; 

            const convertPxtoInt = posX.replaceAll('px', '');
            const correctedPosX = (parseInt(convertPxtoInt) - 40).toString(); 
            const posXnew = correctedPosX.concat("px");

            this.posXnew = posX; 
            console.log("posX, posXnew: ", posX, posXnew) 
            // this.posX = posX; 
            console.log("eID and position: ", eId, posXnew) 

            const posEvent = document.getElementById(this.eId); 
            posEvent.style.marginLeft = posXnew; 

            console.log("event position updated."); 
        }
  
        // create a new tag for the timeline 
        , createTag: function(tagName, tagColor = "rgba(255, 255, 255, 0.8)") {
            // this.querySelector = querySelector; 
            // this.tId = tId; 
            this.tagName = tagName; 
            this.tagColor = tagColor; 

            // tags.push(
            //     {key: tagName, value: tagColor}
            // ); 

            const pos = document.getElementById(this.tId + "-tag-container"); 
            const newTag = document.createElement('div');
            var tagText = "<b>" + tagName + ": " + "</b>"; 


            newTag.innerHTML = tagText; 
            newTag.className = "timeline-tag";
            newTag.setAttribute("id", this.tId + tagName);
            newTag.style = "display: block; position: relative; font-size: 0.9rem; font-family: Arial, serif; margin-top: 2px; margin-bottom: 2px; max-width: 700px; overflow: hidden; color: rgba(50, 50, 50, 0.9); ";
            pos.appendChild(newTag);
            

            this.tags[tagName] = tagColor; 

            console.log("tag is ", this.tags); 
        }

        // add a tag specified by its tag name to an event specified by its event ID
        , addTagToEvent: function(eId, tagName) {
            this.eId = eId; 
            this.tagName = tagName; 

            // add tag name to identified event 
            const event = document.getElementById(this.eId); 
            event.classList.add(tagName);  
            event.classList.remove(this.events[eId]); 
            this.events[eId] = tagName; 
            console.log("add tag to event: ", event); 

            // update all event color accordingly 
            const pos = document.getElementById(this.tId).getElementsByClassName(tagName); 
            console.log(pos); 
            const posNum = pos.length; 

            for (var i = 0; i < posNum; i++) {
                pos[i].style.backgroundColor = this.tags[tagName]; 
            }

            const tag = document.getElementById(this.tId + tagName); 

            var tagText = "<b>" + tagName + ":  " + "</b>"; 
            let keys = Object.keys(this.events).filter(k=>this.events[k]===tagName);

            for (const key of keys) {
                const pos = document.getElementById(key + "-title").innerText;

                tagText = tagText + pos + "   |   "; 
            }
            console.log("tagText: ", tagText); 

            tag.innerHTML = tagText; 

            console.log("tags[tagName]: ", this.tags[tagName]); 

            console.log("event is ", this.events); 
        }

        // change color for all events, default is 'light grey' if not specified 
        , changeColorForBaseEvents: function(backgroundColor = "rgba(255, 255, 255, 0.8)") {
            this.backgroundColor = backgroundColor; 
            console.log("change event color to ", backgroundColor); 

            const pos = document.getElementById(this.tId).getElementsByClassName("event-container"); 
            console.log(pos); 
            const posNum = pos.length; 

            for (var i = 0; i < posNum; i++) {
                if (this.events[pos[i].id] == "default") {
                    pos[i].style.backgroundColor = backgroundColor; 
                }
            }


            this.tags["default"] = backgroundColor; 

            // for (const [key, value] of tags) {
            //     value = backgroundColor; 
            // }

            console.log("color changed."); 
        }

        // change the background color of the timeline specified by its timeline ID 
        , changeBackground: function(backgroundColor) {

            //this.tId = tId; 
            this.backgroundColor = backgroundColor; 

            console.log("tID, and bgc: ", this.tId, backgroundColor) 

            const pos = document.getElementById(this.tId + "-space"); 
            console.log("pos: ", pos)

            pos.style.backgroundColor = backgroundColor; 

        } 

        // remove a tag specified by its tag name and updates events accordingly 
        , removeTag: function(tagName) {
            this.tagName = tagName; 

            // add tag name to identified event 
            // const event = document.getElementById(this.eId); 
            // event.classList.add(tagName);  
            // event.classList.remove(events[eId]); 
            // events[eId] = tagName; 

            // update all event color accordingly 
            const pos = document.getElementById(this.tId).getElementsByClassName(tagName); 
            console.log(pos); 
            const posNum = pos.length; 
            console.log("events", this.events); 

            for (var i = 0, j = 0; j < posNum; j++) { 

                console.log("pos[i]: ", pos[i]); 
                console.log("tagName: ", tagName); 
                console.log("tags: ", this.tags); 

                pos[i].classList.add("default"); 
                pos[i].style.backgroundColor = this.tags["default"]; 

                this.events[pos[i].id] = "default"; 

                console.log("events: ", this.events); 

                // pos[i].classList.remove(tagName); 
                pos[i].classList.replace(tagName, "default"); 

                console.log("pos[i]", pos[i]); 
            }

            const newPos = document.getElementById(this.tId).getElementsByClassName("default"); 
            console.log(newPos); 
            const newPosNum = pos.length; 

            for (var i = 0; i < newPosNum; i++) {
                newPos[i].style.backgroundColor = this.tags["default"]; 
            }

            delete this.tags[tagName]; 

            const tagPos = document.getElementById(this.tId + tagName);
            // tagPos.remove(); 
            tagPos.parentNode.removeChild(tagPos);

            console.log("tags[tagName]: ", this.tags[tagName]); 
        }

        // delete an event specified by its event ID 
        , deleteEvent: function(eId) {

            this.eId = eId;  
            console.log("eID: ", eId); 

            const pos1 = document.getElementById(this.eId);
            const tagName = this.events[pos1.id]; 
            this.events[pos1.id] = "default"; 

            if(pos1){
                pos1.remove();
            }

            // update all tag accordingly 
            const pos = document.getElementById(this.tId).getElementsByClassName(tagName); 
            console.log(pos); 
            const posNum = pos.length; 

            for (var i = 0; i < posNum; i++) {
                pos[i].style.backgroundColor = this.tags[tagName]; 
            }

            const tag = document.getElementById(this.tId + tagName); 

            var tagText = "<b>" + tagName + ":  " + "</b>"; 
            let keys = Object.keys(this.events).filter(k=>this.events[k]===tagName);

            for (const key of keys) {
                const pos = document.getElementById(key + "-title").innerText; 
                
                tagText = tagText + pos + "   |   "; 
            }
            console.log("tagText: ", tagText); 

            tag.innerHTML = tagText; 


            console.log("event deleted."); 
        }

        // reset a timeline by deleting all its events and reseting the background color to default grey  
        , clearTimeline: function(backgroundColor = "rgba(50, 50, 50, 0.3)") {
            this.backgroundColor = backgroundColor; 
            const pos = document.getElementById(this.tId).getElementsByClassName("event-container"); 
            console.log(pos); 
            const posNum = pos.length; 

            for (var i = 0, j = 0; j < posNum; j++) {
                console.log("deleting event ", i); 

                if (typeof(pos[i]) != 'undefined' && pos[i] != null) {
                    pos[i].parentNode.removeChild(pos[i]); 
                    pos[i].remove(); 
                }

                console.log("deleted event ", i); 
            }
            
            // while(posNum > 0){

            //     if (typeof(pos[i]) != 'undefined' && pos[i] != null) {
            //         pos[i].parentNode.removeChild(pos[i]); 
            //         //pos[i].remove(); 
            //     }

            // }

            const tagPos = document.getElementById(this.tId).getElementsByClassName("timeline-tags"); 
            const tagPosNum = tagPos.length; 
            
            // while(tagPosNum > 0){
            //     tagPos[0].parentNode.removeChild(tagPos[0]); 
            // }

            for (var i = 0, j = 0; j < tagPosNum; j++) {

                if (typeof(tagPos[i]) != 'undefined' && tagPos[i] != null) {
                    tagPos[i].parentNode.removeChild(tagPos[i]); 
                    tagPos[i].remove(); 
                }

                console.log("deleted event ", i); 
            }


            // events = {}; 
            // tags = {"default": "rgba(255, 255, 255, 0.8)"}; 
            Object.keys(this.events).forEach(key => this.events[key]=null);
            Object.keys(this.tags).forEach(key => this.tags[key]=null);

            const pos2 = document.getElementById(this.tId + "-space"); 
            pos2.style.backgroundColor = backgroundColor; 

            console.log("timeline reseted."); 
        }

    } 
   

    global.TimelineGenerator = global.TimelineGenerator || TimelineGenerator

  
  })(window, window.document);