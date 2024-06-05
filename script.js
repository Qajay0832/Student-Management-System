let body = document.getElementsByTagName('body')[0]
// let table = document.createElement("table");
// table.id="table";
// thead=`<tr>
// <th>ID</th>
// <th>Name</th>
// <th>Gender</th>
// <th>Class</th>
// <th>Marks</th>
// <th>Passing</th>
// <th>Email</th>
// </tr>`;
// table.innerHTML=thead;
// table.style.border='1px solid black'
// body.appendChild(table)


let tableData;
async function fetchData(){

    let json= await fetch('./data.json').then((response) => response.json())
        for(let m=0;m<json.length;m++){
        let id,name,standard,email,marks,gender,passing;
            tr=document.createElement('tr');
            tdid=document.createElement('td');
            tdname=document.createElement('td');
            tdgender=document.createElement('td');
            tdstandard=document.createElement('td');
            tdmarks=document.createElement('td');
            tdpassing=document.createElement('td');
            tdemail=document.createElement('td');
            id=json[m].id;
            name=json[m].first_name+" "+json[m].last_name;
            gender=json[m].gender;
            standard=json[m].class;
            marks=json[m].marks;
            if (json[m].passing==true){
                passing="passed";
            }
            else{
                passing="failed";
            }
            email=json[m].email;
            tdid.innerText=id;
            tdname.innerText=name   ;
            tdgender.innerText=gender;
            tdstandard.innerText=standard;
            tdmarks.innerText=marks;
            tdpassing.innerText=passing;
            tdemail.innerText=email;  
            tr.appendChild(tdid);
            tr.appendChild(tdname);
            tr.appendChild(tdgender);
            tr.appendChild(tdstandard);
            tr.appendChild(tdmarks);
            tr.appendChild(tdpassing);
            tr.appendChild(tdemail);
            tableBody.appendChild(tr);
        
    }
    
    ;
}
fetchData()
let searchText = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
let sortAtoZ = document.getElementById("sortAtoZ");
let sortZtoA = document.getElementById("sortZtoA");
let sortByMarks = document.getElementById("sortByMarks");
let sortByGender = document.getElementById("sortByGender");
let sortByClass = document.getElementById("sortByClass");
let sortByPassing = document.getElementById("sortByPassing");
let tableBody = document.getElementById("tableBody");
searchBtn.addEventListener("click", searchFunction);
sortAtoZ.addEventListener("click", sortAtoZFunction);
sortZtoA.addEventListener("click", sortZtoAFunction);
sortByPassing.addEventListener("click", sortByPassingFunction);
sortByGender.addEventListener("click", sortByGenderFunction);
sortByMarks.addEventListener("click", sortByMarksFunction);
sortByClass.addEventListener("click", sortByClassFunction);


function sortAtoZFunction(){
    renderTable()
    let i,x,y,switching,shouldSwitch;
    switching=true;
    while(switching){
        switching=false;
        for(i=1;i<table.rows.length-1;i++){
            x = table.rows[i].getElementsByTagName("td")[1];
            y = table.rows[i + 1].getElementsByTagName("td")[1];
            if (x.innerHTML > y.innerHTML) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            table.rows[i].parentNode.insertBefore(table.rows[i + 1], table.rows[i]);
            switching = true;
        }
    }
        
}
function sortZtoAFunction(){
    renderTable()
    let i,x,y,switching,shouldSwitch;
    switching=true;
    while(switching){
        switching=false;
        for(i=1;i<table.rows.length-1;i++){
            x = table.rows[i].getElementsByTagName("td")[1];
            y = table.rows[i + 1].getElementsByTagName("td")[1];
            if (x.innerHTML < y.innerHTML) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            table.rows[i].parentNode.insertBefore(table.rows[i + 1], table.rows[i]);
            switching = true;
        }
    }
        
}
function sortByPassingFunction(){
    renderTable()
    let i,x,switching;
    switching=true;
        for(i=1;i<table.rows.length-1;i++){
            x = table.rows[i].getElementsByTagName("td")[5];
            if (x.innerHTML=="failed") {
                table.rows[i].style.display='none';
            }
        }
        
}
function sortByGenderFunction(){
    renderTable()
    let i,x,y,switching,shouldSwitch;
    switching=true;
    while(switching){
        switching=false;
        for(i=1;i<table.rows.length-1;i++){
            x = table.rows[i].getElementsByTagName("td")[2];
            y = table.rows[i + 1].getElementsByTagName("td")[2];
            if (x.innerHTML > y.innerHTML) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            table.rows[i].parentNode.insertBefore(table.rows[i + 1], table.rows[i]);
            switching = true;
        }
    }
        
}
function sortByMarksFunction(){
    renderTable()
    let i,x,y,switching,shouldSwitch;
    switching=true;
    while(switching){
        switching=false;
        for(i=1;i<table.rows.length-1;i++){
            x = table.rows[i].getElementsByTagName("td")[4];
            y = table.rows[i + 1].getElementsByTagName("td")[4];
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            table.rows[i].parentNode.insertBefore(table.rows[i + 1], table.rows[i]);
            switching = true;
        }
    }
        
}
function sortByClassFunction(){
    renderTable()
    let i,x,y,switching,shouldSwitch;
    switching=true;
    while(switching){
        switching=false;
        for(i=1;i<table.rows.length-1;i++){
            x = table.rows[i].getElementsByTagName("td")[3];
            y = table.rows[i + 1].getElementsByTagName("td")[3];
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            table.rows[i].parentNode.insertBefore(table.rows[i + 1], table.rows[i]);
            switching = true;
        }
    }
        
}

function renderTable(){
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].style.display='table-row';
    }
}
function searchFunction() {
    if (search.value == "") {
        renderTable()
    }
    else {
        for (let i = 1; i < table.rows.length; i++) {
            for (let j = 0; j < table.rows[i].cells.length; j++) {
                table.rows[i].style.display='none';
                if (table.rows[i].cells[j].innerHTML.toLowerCase().includes(searchText.value.toLowerCase())) {
                    table.rows[i].style.display='table-row';
                    break;
                }
            }
        }
    }

}

