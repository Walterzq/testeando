function formsubmit()
{
    alert("entro a la funcion");
    var nombre=document.getElementById('nombre').value;
    alert(nombre);
    var apellido=document.getElementById('apellido').value;
    alert(apellido);
    var email=document.getElementById('email').value;
    alert(email);
    var fecha_nacimiento=document.getElementById('fecha_nacimiento').value;
    alert(fecha_nacimiento);
    var edad=document.getElementById('edad').value;
    alert(edad);
    var nacionalidad=document.getElementById('nacionalidad').value;
    alert(nacionalidad);
    var dni=document.getElementById('dni').value;
    alert(dni);
    var genero=document.getElementById('genero').value;
    alert(genero);
    var estado_civil=document.getElementById('estado_civil').value;
    alert(estado_civil);
    var telefono=document.getElementById('telefono').value;
    alert(telefono);
    var celular=document.getElementById('celular').value;
    alert(celular);
    var direccion=document.getElementById('direccion').value;
    alert(direccion);
    var provincia=document.getElementById('provincia').value;
    alert(provincia);
    var codigo_postal=document.getElementById('codigo_postal').value;
    alert(codigo_postal);
    var pais=document.getElementById('pais').value;
    alert(pais);
    var nivel_estudio=document.getElementById('nivel_estudio').value;
    alert(nivel_estudio);
    var trabaja_actualmente=document.getElementById('trabaja_actualmente').value;
    alert(trabaja_actualmente);
    var busca_trabajo=document.getElementById('busca_trabajo').value;
    alert(busca_trabajo);
    var nombre=document.getElementById('nombre').value;
    alert(nombre);

    var formdata = 'nombre=' + nombre + '&apellido=' + apellido + '&email=' + email 
    + '&fecha_nacimiento=' + fecha_nacimiento + '&edad=' + edad 
    + '&nacionalidad=' + nacionalidad + '&dni=' + dni + '&genero=' + genero + '&estado_civil=' + estado_civil
    + '&telefono=' + telefono + '&celular=' + celular + '&direccion=' + direccion 
    + '&provincia=' + provincia + '&codigo_podtal=' + codigo_postal + '&pais=' + pais 
    + '&nivel_estudio=' + nivel_estudio + '&trabaja_actualmente=' + trabaja_actualmente
    + '&busca_trabajo=' + busca_trabajo  ;
    alert(formdata);


    if (nombre == '' ) {
		alert("Por favor ingresar nombre");
		return false;
	}
	if(apellido == '') {
		alert("Por favor ingresar apellido");
		return false;
	}
	if(email == '') {
		alert("Please Enter email");
		return false;
	}
	if(fecha_nacimiento == '') {
		alert("Por favor ingresar fecha_nacimiento");
		return false;
	}
    if(edad == '') {
		alert("Please Enter edad");
		return false;
	}
    if(nacionalidad == '') {
		alert("Please Enter nacionalidad");
		return false;
	}
    if(dni == '') {
		alert("Please Enter dni");
		return false;
	}
    if(genero == '') {
		alert("Please Enter genero");
		return false;
	}
    if(estado_civil == '') {
		alert("Please Enter estado_civil");
		return false;
	}
    if(telefono == '') {
		alert("Please Enter telefono");
		return false;
	}
    if(celular == '') {
		alert("Please Enter celular");
		return false;
	}
    if(direccion == '') {
		alert("Please Enter direccion");
		return false;
	}
    if(provincia == '') {
		alert("Please Enter provincia");
		return false;
	}
    if(codigo_postal == '') {
		alert("Please Enter codigo_postal");
		return false;
	}
    if(pais == '') {
		alert("Please Enter pais");
		return false;
	}
    if(nivel_estudio == '') {
		alert("Please Enter nivel_estudio");
		return false;
	}
    if(trabaja_actualmente == '') {
		alert("Please Enter trabaja_actualmente");
		return false;
	}
    if(busca_trabajo == '') {
		alert("Please Enter busca_trabajo");
		return false;
	}
    
	else {
	// codigo de Ajax para mandar codigo al php (backend)
	$.ajax({
		 type: "POST",
		 url: "guardardatos.php", //llama por ajax al php
		 data: formdata,
		 cache: false,
		 success: function(html) {
            alert(html);
           }
      });
    }
	return false;
    

}