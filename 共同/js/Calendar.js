'use strict'

function mainCalendar(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const firstDay = new Date(year,month - 1,1).getDay();
    const lastDate = new Date(year,month,0).getDate();
    const weekday = ["日","月","火","水","木","金","土"];
    
    let dayCount = 1;
    let createHTML = "";
    
    createHTML = "<h1>" + year + "/" + month + "</h1>";
    createHTML += "<table>" + "<tr>";
    
    for (let i = 0; i < weekday.length; i++){
        createHTML += "<td>" + weekday[i] + "</td>";
    }
    createHTML += "</tr>"
    
    for (let j = 0; j < 12; j++){
        createHTML += "<tr>";
        if (j % 2 == 1){
            for (let d = 0; d < 7; d++){
                createHTML += "<td class='plan'>" + "</td>";
            }
        }else {
            for (let d = 0; d < 7; d++){
                if(j == 0 && d < firstDay){
                    createHTML += "<td>" + "</td>";
                }else if (dayCount > lastDate){
                    createHTML += "<td>" + "</td>";
                }else {
                    if (d == 0 ){
                        createHTML += "<td class='red'>" + dayCount + "</td>";
                        dayCount++
                    }else if (d ==6){
                        createHTML += "<td class='blue'>" + dayCount + "</td>";
                        dayCount++
                    }else {
                        createHTML += "<td>" + dayCount + "</td>";
                        dayCount++
                    }
                }
            }
        }
        
        createHTML += "</tr>";
    }
    createHTML += "</table>";
    
    document.querySelector('#calendar').innerHTML = createHTML;
    console.log(createHTML);
    

}


function calendar1(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const firstDay = new Date(year,month,1).getDay();
    const lastDate = new Date(year,month + 1,0).getDate();
    const weekday = ["日","月","火","水","木","金","土"];
    
    let dayCount = 1;
    let createHTML = "";
    
    createHTML = "<h1>" + year + "/" + (month + 1)  + "</h1>";
    createHTML += "<table>" + "<tr>";
    
    for (let i = 0; i < weekday.length; i++){
        createHTML += "<td>" + weekday[i] + "</td>";
    }
    createHTML += "</tr>"
    
    for (let j = 0; j < 12; j++){
        createHTML += "<tr>";
        if (j % 2 == 1){
            for (let d = 0; d < 7; d++){
                createHTML += "<td class='plan'>" + "</td>";
            }
        }else {
            for (let d = 0; d < 7; d++){
                if(j == 0 && d < firstDay){
                    createHTML += "<td>" + "</td>";
                }else if (dayCount > lastDate){
                    createHTML += "<td>" + "</td>";
                }else {
                    if (d == 0 ){
                        createHTML += "<td class='red'>" + dayCount + "</td>";
                        dayCount++
                    }else if (d ==6){
                        createHTML += "<td class='blue'>" + dayCount + "</td>";
                        dayCount++
                    }else {
                        createHTML += "<td>" + dayCount + "</td>";
                        dayCount++
                    }
                }
            }
        }
        
        createHTML += "</tr>";
    }
    createHTML += "</table>";
    
    document.querySelector('#calendar').innerHTML = createHTML;
}


function calendar2(){
    alert("未完成です。");
}