function appendtolabel(value){
    document.getElementById("label").value += value;
}
function clearDisplay(){
    document.getElementById("label").value= "";
}
function calculate(){
    var label = document.getElementById("label");
    var result = eval(label.value);
    label.value = result;
}