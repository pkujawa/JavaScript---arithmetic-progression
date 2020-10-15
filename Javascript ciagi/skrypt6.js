
function ciag()
{
var liczba = document.getElementById("liczba").value;
var roznica = document.getElementById("roznica").value;
var ilosc = document.getElementById("ilosc").value;
var result = "Ciąg arytmetyczny zawiera wyrazy: " + liczba 
liczba = parseInt(liczba);
roznica = parseInt(roznica);
ilosc = parseInt(ilosc);
for (i=1; i<=ilosc-1; i++)
 {
	liczba = liczba + roznica;
	result = result + ', ' + liczba;
 } 
 

document.getElementById("result").innerHTML=result;

}
