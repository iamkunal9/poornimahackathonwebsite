
function setData(sno,org,pstatement,category,domain,psid){
    return `<td>${sno}</td><td>${org}</td><td>${pstatement}</td><td>${category}</td><td>${domain}</td><td>${psid}</td>`;
}

fetch('https://poornimahackathon.pythonanywhere.com/api/v1/problems/data', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(pstatdata => run(pstatdata))

function run(pstatdata){
var vardata="";
var i=0,j=0;
var tabl = document.querySelector("tbody");
for(i=0;i<pstatdata.length;i++){
    



var data = document.createElement('tr');
data.innerHTML = setData(pstatdata[i].sno,pstatdata[i].org,pstatdata[i].title,pstatdata[i].category,pstatdata[i].psid,pstatdata[i].domain);
tabl.appendChild(data);
}

// console.log(pstatdata);

}