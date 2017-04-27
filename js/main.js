//Script para suaviação de rolagem da página
$(document).on('click', '#menu-navegacao a', function(e) { 
// target element id 
var id = $(this).attr('href'); 

// target element 
var $id = $(id); 
if ($id.length === 0) { 
return; 
} 

// prevent standard hash navigation (avoid blinking in IE) 
e.preventDefault(); 

// top position relative to the document 
var pos = $(id).offset().top; 

// animated top scrolling 
$('body, html').animate({scrollTop: pos}); 
});

//instanciando o maxlenght do Pluggin Baixado no site https://codeload.github.com/mimo84/bootstrap-maxlength/legacy.zip/master
//1º Baixa o Plugin desejado - 
//2º Copia o arquivo do plugin desejado para a pasta JS (bootstrap-maxlength.jquery.json)
//3º Importa o pluggin na página que deseja usar o pluggin no componente
//4º No main.js, faz o script abaixo: ou copia do mesmo site: documentação:

	$('input[maxlength]').maxlength({
	    alwaysShow: true,
	    threshold: 10,
	    warningClass: "label label-success",
	    limitReachedClass: "label label-danger"
	});


