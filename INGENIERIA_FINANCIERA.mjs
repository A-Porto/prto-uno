
console.log("INGENIERIA FINANCIERA")
//calculo del interes compuesto
//Vf=valor final en $
//Vin=Valor inicial en $
//InA=ingreso anual en $ 
//In=Interes anual en % 
 //A=numero de años
 console.log("CALCULO DEL INTERES COMPUESTO")
let Vf = 0; 
let y = 0;

function calculadora(Vin,InA,In,A){  
for(let i = 1; i<=A; i++){
  y=InA* Math.pow((1+(In/100)),i);
  Vf += y;
}
Vf += Vin * Math.pow((1+(In/100)),A); 
console.log(`Calculo del imteres compuesto = $${Vf.toFixed(2)}`);
}

calculadora(11000000,12000000,7,10);

//calculadora para determinar el periodo de amortizacion del prestamo 
//mp = monto del prestamo
//intres =   interes del prestamo
//fae = flujo de efectivo mensual(pago mensual al banco)
let vpn = 0 //Valor presente neto
let n = 1;
console.log( "CALCULO DEL VALOR PRESENTE DEL FLUJO ANUAL")
console.log('Y PERIODO DE AMORTIZACION DEL PRESTAMO')
function calculo(mp,fae,interes){  
  while( mp > 0){
   vpn= (fae*12)/Math.pow((1+(interes/100)),n);
    mp -= vpn;
    
console.log(`periodo de retorno ${n} años, valor presente del flujo ${vpn.toFixed(2)}, deuda restante ${mp.toFixed(2)}`);
n++
  }
  console.log(` la deuda se cancela a los ${n-2} años y ${(-12*mp/vpn).toFixed(1)} meses` )
}
calculo(100000000,575000,5.5)
