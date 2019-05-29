function GetNum1() {
    return parseInt(document.getElementById('Num1').value);

}
function GetNum2() {
    return parseInt(document.getElementById('Num2').value);

}
function Tinh(Num1,Num2,Math) {
    var res=0;
switch (Math) {
    case 1:
        res =Num1 + Num2;
        break;
    case 2:
        res =Num1 - Num2;
        break;
    case 3:
        res =Num1 * Num2;
        break;
    case 4:
        res =Num1/Num2;
        break;
}
document.getElementById('Result').innerHTML=res;
}