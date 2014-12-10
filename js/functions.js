angular

.module('app', [])

.service('Fixture', ['$http', function($http){
	return {
		get: function(){
			console.log("getting fixture");
		}
	}
}]) 

.controller('MainCtrl', ['Fixture', function(Fixture){

	this.section = "fixture";
	this.signup = true;

	this.sponsors = [];
	this.sponsors.push({
		imagen: "img/frontend/pranzo.jpg", 
		link: "https://www.facebook.com/pranzoviandas?fref=ts"
	});
	this.sponsors.push({
		imagen: 'img/frontend/adrenalina-uno.jpg',
		link: "https://www.facebook.com/AdrenalinaUno.FanPage?fref=ts"
	});

	this.fechas = [];
	this.fechas.push({
		fecha:1,
		partidos: [
			{ hora: '15:10', 
				equipo1: "Mcdalena",
				equipo2: "La cold",
				cancha: 1
			},
			{ hora: '15:10', 
				equipo1: "La wolko",
				equipo2: "Rompepiernas",
				cancha: 2
			}
		]
	});
	this.fechas.push({
		fecha:2,
		partidos: [
			{ hora: '16:10', 
				equipo1: "Mcdalena",
				equipo2: "La cold",
				cancha: 1
			},
			{ hora: '16:10', 
				equipo1: "La wolko",
				equipo2: "Rompepiernas",
				cancha: 2
			}
		]
	});
	
	this.equipos = [];
	this.equipos.push({
		id:1,
		nombre: 'Mcdalena',
		imagen: 'https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/dc26f2c4989c20a0fd3cdba8b7471ab5/medium.jpg',
		jugadores: [
			'Frisco, Guillermo',
			'Tosto, Franco',
			'Torres, Pablo',
			'Areses, Andres'
		]
	});
	this.equipos.push({
		id:2,
		nombre: 'La cold',
		imagen: 'http://s7d5.scene7.com/is/image/wasserstrom/freezers',
		jugadores: [
			'Vercesi, Juan Manuel',
			'Carelli, Rodrigo',
			'Lopez, Ricardo',
			'Ottoño, Mario'
		]
	});
	this.selectedEquipo = this.equipos[0].id;

	this.grupos = [];
	this.grupos.push({
		nombre: "Grupo 1",
		equipos: [
			{
				id: 1,
				nombre: "Mcdalena",
				pj: 1,
				ga: 0,
				gc: 6,
				puntos: 0
			},
			{
				id: 2,
				nombre: "La cold",
				pj: 1,
				ga: 3,
				gc: 1,
				puntos: 3
			}
		]
	});

	this.grupos.push({
		nombre: "Grupo 2",
		equipos: [
			{
				id: 1,
				nombre: "La wolko",
				pj: 1,
				ga: 0,
				gc: 6,
				puntos: 0
			},
			{
				id: 2,
				nombre: "Trotagays",
				pj: 1,
				ga: 3,
				gc: 1,
				puntos: 3
			}
		]
	});

	
}]);

$(document).ready(function(){

	$('[data-toggle="tooltip"]').tooltip();
 
	var myLatlng = new google.maps.LatLng(-32.962105, -60.663552);
	var mapOptions = {
		center: myLatlng,
		scaleControl: false,
		scrollwheel: false,
    draggable: false,
		zoom: 15
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
		animation: google.maps.Animation.DROP,
    title:"Se juega la #ProvinRugbyCup!"
	});
});
