const prices = new Map([
    ["New client Private Lesson", "$70"],
    ["3 Private Lessons", "$212"],
    ["5 Private Lessons", "$340"],
    ["One Month Unlimited Classes", "$190"],
]);  

    let text = "";
    prices.forEach(function (value, key) {
        text += key + " - " + value + "<br>";
    });
    for (item of prices.keys()) {
        console.log(item);
    }
    document.getElementById('prices').innerHTML = text;
var table = document.getElementById('table');
            if(table){
                table.addEventListener('mouseover', function(event){
                    event.target.className = "red";
                });
                table.addEventListener('mouseout', function(event){
                    event.target.className = "while";
                });
            }

for(var i=0; i<rows; i++){
    var tr = document.createElement('tr');
    for(var j=0; j<cols; j++){
        var td = document.createElement('td');
        td.className = "while";
        tr.append(td);
    }
    table.append(tr);
}
