
function suma() {

    var a;
    var b;
    var suma;
    
    a= parseInt (prompt("por favor ingresar el primer valor"));
    b= parseInt (prompt("por favor ingresar el segundo valor"));
    
    suma = a + b;
    
    alert(" el resultado de la sum es:" + suma);    
}

function opBasicas(){

    var a; 
    var b; 
    var suma;
    var resta;
    var multiplicacion;
    var division;
 
    a= parseInt(prompt("Por favor ingrese el primer valor"));
    b= parseInt(prompt("Por favor ingrese el segundo valor"));

    suma = a + b; 
    resta = a-b;
    multiplicacion= a*b;
    division= a/b;

    alert(" el resultado de la suma es:" + suma);
    alert(" el resultado de la resta es:" + resta);    
    alert(" el resultado de la multiplicacion:" + multiplicacion);    
    alert(" el resultado de la division:" + division);    
}

function nMayor() {

    var a;
    var b;
    
    a= parseInt (prompt("por favor ingresar el primer valor a comparar"));
    b= parseInt (prompt("por favor ingresar el segundo valor a comparar"));

    if (a == b){ 
    alert("los valores ingresados son iguales")    
    }else if (a>b){
        alert("El numero mayor es " + a) 
    }else{
        alert("El numero mayor es " + b)   
    }

}

function parOimpar() {

    var a;

    a= parseInt (prompt("por favor digite el valor"));


    if (a%2==0){
        alert("el valor ingresado es un numero par")
    } else {
        alert("el numero ingresado es impar")
    } 

}


function raiz(){

    var a;
    var r; 

    a= parseInt (prompt("por favor digite el valor"));
    
    r= Math .sqrt(a);

    alert("el resultado de la raiz cuadrada del valor es: " + r);
}

function cuadrado(){

    var a;

    a= parseInt (prompt("por favor digite el valor"));
    
    a= a*a;

    alert("el valor al cuadrado del numero digitado es: " + a);
}

function area(){

    var a;
    var b;
    var area;

    a= parseInt(prompt("por favor ingrese el valor de la base del traingulo"));
    b= parseInt(prompt("por favor ingrese el valor de la altura del triangulo"));

    area = a*b/2

    alert("El area del triangulo es: " + area);

}

function centimetros(){

    var a;
    var centimetros;

    a= parseInt(prompt("por favor ingrese el valor de los metros que desea hallar en centimetros"));

    centimetros= a*100; 

    alert("El valor de " + a + " metros en centimetros es: " + centimetros + " centimetros");

}


function nacimiento(){

    var a;
    var edad; 

    a= parseInt(prompt("por favor ingrese su edad"));

    edad= 2022-a;

    alert("Su año de nacimiento es: " + edad); 
}

function capital(){

    var c;
    var a;
    var g_a;
    var g_t;

    c= parseInt(prompt("por favor ingrese el valor de su capital" ));
    a= parseInt(prompt("por favor ingrese el numero de años "));

    g_a = c*(0.24*a);
    g_t = g_a+c;

    alert("La ganacia total es:  " + g_t);

}