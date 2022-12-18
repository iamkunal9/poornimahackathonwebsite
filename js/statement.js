import pstatdata from "./stat.json" assert { type: "json" };
function setData(sno,org,pstatement,category,domain,psid){
    return `<td>${sno}</td><td>${org}</td><td>${pstatement}</td><td>${category}</td><td>${domain}</td><td>${psid}</td>`;
}
var vardata="";
var i=0,j=0;
var tabl = document.querySelector("tbody");
for(i=0;i<pstatdata.length;i++){
    



var data = document.createElement('tr');
data.innerHTML = setData(pstatdata[i][0],pstatdata[i][1],pstatdata[i][2],pstatdata[i][3],pstatdata[i][4],pstatdata[i][5]);
tabl.appendChild(data);
}

// console.log(pstatdata);

