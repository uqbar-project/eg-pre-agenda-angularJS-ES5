'use strict';

var app = angular.module('agendaApp', []);

app.controller('AgendaCtrl', function () {

	this.contactos = [{
		"nombre": "Juan",
		"apellido": "Perez",
		"telefono": "321472352",
		"email": "juan@gmail.com",
		"direccion": "Corrientes 1234, 3B"
	}, {
		"nombre": "Pablo",
		"apellido": "Alvarez",
		"telefono": "666",
		"email": "pablo@gmail.com",
		"direccion": "Belgrano 12, 4B"
	}, {
		"nombre": "Maria",
		"apellido": "Rodriguez",
		"telefono": "47584777",
		"email": "maria@gmail.com",
		"direccion": "Lavalle 123, 5B"
	}, {
		"nombre": "Andrea",
		"apellido": "Garcia",
		"telefono": "888890",
		"email": "andrea@gmail.com",
		"direccion": "Sarmiento 1234, 6B"
	}];

	this.textoBusqueda = '';

	this.limpiarBusqueda = function() {
		this.textoBusqueda = ''
	};

});
