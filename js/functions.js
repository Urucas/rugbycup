angular

.module('app', [])

.service('Fixture', ['$http', function($http){
	return {
		get: function(){
			// everything would be static, no time for API
			// pass
		}
	}
}]) 

.controller('MainCtrl', ['Fixture', function(Fixture){

	this.showPreloader = function() {
		$(".nav-tabs").hide();
		$(".tab").hide();
		$(".loading_modal").show();
	}

	this.hidePreloader = function(section) {
		document.location.href = "#"+section;
		$(".nav-tabs").show();
		$(".nav-tabs").find("li").each(function(){
			$(this).removeClass("active");
			if($(this).attr("rel")==section) $(this).addClass("active");
		});
		$("."+section+"-content").show();
		$(".loading_modal").hide();
	}

	this.loadEquipos = function() {
		this.showPreloader();
		var that = this;
		setTimeout(function(){
			that.hidePreloader("equipos");
		}, 1500);
	}

	this.loadFixture = function() {
		this.showPreloader();
		var that = this;
		setTimeout(function(){
			that.hidePreloader("fixture");
		}, 1500);
	}

	this.loadGrupos = function() {
		this.showPreloader();
		var that = this;
		setTimeout(function(){
			that.hidePreloader("grupos");
		}, 1500);
	}

	this.loadCanchas = function() {
		this.showPreloader();
		var that = this;
		setTimeout(function(){
			that.hidePreloader("canchas");
		}, 1500);
	}

	this.loadReglamento = function() {
		this.showPreloader();
		var that = this;
		setTimeout(function(){
			that.hidePreloader("reglamento");
		}, 1500);
	}


	this.signup = true;

	this.sponsors = [];
	
	this.sponsors.push({
		imagen: 'img/frontend/provin.png',
		link: 'https://www.facebook.com/pages/Club-Atl%C3%A9tico-Provincial/704455729575876?fref=ts'
	});
	this.sponsors.push({
		imagen: "img/frontend/pranzo.jpg", 
		link: "https://www.facebook.com/pranzoviandas?fref=ts"
	});
	this.sponsors.push({
		imagen: 'img/frontend/adrenalina-uno.jpg',
		link: "https://www.facebook.com/AdrenalinaUno.FanPage?fref=ts"
	});
	this.sponsors.push({
		imagen: 'img/frontend/positive-media.jpg',
		link: "https://www.facebook.com/positivemediaweb?fref=ts"
	});
	
	this.sponsors.push({
		imagen: 'img/frontend/kriket.png',
		link: 'https://www.facebook.com/organizateconkriket?fref=ts'
	})
	
	this.sponsors = shuffle(this.sponsors);

	this.fechas = [];
	this.fechas.push({
		grupo:"Grupo A",
		partidos: [
			{ hora: '12:00', equipo1: "La Peña", equipo2: "La Bufy", cancha: 1 },
			{ hora: '12:00', equipo1: "Spartak", equipo2: "Old Scholl", cancha: 2 },
			{ hora: '13:10', equipo1: "La Peña", equipo2: "Spartak", cancha: 3 },
			{ hora: '13:10', equipo1: "La Bufy", equipo2: "Old Scholl", cancha: 4 },
			{ hora: '14:20', equipo1: "La Peña", equipo2: "Old Scholl", cancha: 3 },
			{ hora: '14:20', equipo1: "La Bufy", equipo2: "Spartak", cancha: 4 }
		]
	});
	this.fechas.push({
		grupo:"Grupo B",
		partidos: [
			{ hora: '12:00', equipo1: "La Pajarera", equipo2: "Gatasos F.C.", cancha: 3 },
			{ hora: '12:00', equipo1: "Irreal Madrid", equipo2: "Barca F.C.", cancha: 4 },
			{ hora: '13:10', equipo1: "La Pajarera", equipo2: "Irreal Madrid", cancha: 5 },
			{ hora: '13:10', equipo1: "Gatasos F.C.", equipo2: "Barca F.C.", cancha: 6 },
			{ hora: '14:20', equipo1: "La Pajarera", equipo2: "Barca F.C", cancha: 5 },
			{ hora: '14:20', equipo1: "Gatasos F.C.", equipo2: "Real Madrid", cancha: 6 }
		]
	});
	
	this.fechas.push({
		grupo:"Grupo C",
		partidos: [
			{ hora: '12:00', equipo1: "88", equipo2: "Amenabar F.C.", cancha: 5 },
			{ hora: '12:00', equipo1: "La Resaka", equipo2: "Los Esquejes", cancha: 6 },
			{ hora: '13:10', equipo1: "88", equipo2: "La Resaka", cancha: 1 },
			{ hora: '13:10', equipo1: "Amenabar F.C.", equipo2: "Los Esquejes", cancha: 2 },
			{ hora: '14:20', equipo1: "88", equipo2: "Los Esquejes", cancha: 3 },
			{ hora: '14:20', equipo1: "Amenaba F.C.", equipo2: "La Resaka", cancha: 4 }
		]
	});

	this.fechas.push({
		grupo:"Grupo D",
		partidos: [
			{ hora: '12:35', equipo1: "La Sede", equipo2: "Quilmes", cancha: 1 },
			{ hora: '12:35', equipo1: "Velez", equipo2: "Los Trotaworld", cancha: 2 },
			{ hora: '13:45', equipo1: "La Sede", equipo2: "Velez", cancha: 3 },
			{ hora: '13:45', equipo1: "Quilmes", equipo2: "Los Trotaworld", cancha: 4 },
			{ hora: '14:55', equipo1: "La Sede", equipo2: "Los Trotaworld", cancha: 5 },
			{ hora: '14:55', equipo1: "Quilmes", equipo2: "Velez", cancha: 6 }
		]
	});

	this.fechas.push({
		grupo:"Grupo E",
		partidos: [
			{ hora: '12:35', equipo1: "Los Cacos de tablada", equipo2: "Santa Fe F.C.", cancha: 3 },
			{ hora: '12:35', equipo1: "La Maddalena OT", equipo2: "ZN", cancha: 4 },
			{ hora: '13:45', equipo1: "Los Cacos de tablada", equipo2: "La Maddalena OT", cancha: 5 },
			{ hora: '13:45', equipo1: "Santa Fe F.C.", equipo2: "ZN", cancha: 6 },
			{ hora: '14:55', equipo1: "Los Cacos de tablada", equipo2: "ZN", cancha: 1 },
			{ hora: '14:55', equipo1: "Santa Fe F.C.", equipo2: "La Maddalena OT", cancha: 2 }
		]
	});



	this.equipos = [];
	this.equipos.push({
		id:1,
		nombre: 'Cerveceros',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Diego Brezik',
			'Ezequiel Pereyra',
			'David Posada',
			'Matias Lanfranco',
			'Ezequiel Irala',
			'Ricardo Gomez'
		]
	});
	this.equipos.push({
		id:2,
		nombre: 'La Resaka',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Guillermo Ronco',
			'Guid Di Lucca',
			'Fernando Acuña',
			'Rodrigo Goenaga',
			'Marcelo Ganna',
			'Agustin Dutto',
			'Roberto Manias',
			'Martin Mocagatta'
		]
	});
	this.equipos.push({
		id:3,
		nombre: 'Zn',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Martin Fraile',
			'Patricio Rojo',
			'Julian Fernandez',
			'Martin Amiano',
			'Federico Mena',
			'Franco Turco'
		]
	});
	this.equipos.push({
		id:4,
		nombre: '88',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Emiliano Fraile',
			'Andres Pozza',
			'De Oña Santiago',
			'Anselmi Pablo',
			'Javier Giuffrida',
			'Nicolas Carelli'
		]
	});
	this.equipos.push({
		id:5,
		nombre: 'Barca FC',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Gonzalo Acuña',
			'Brian Mansilla',
			'Sebastian Garcilazo',
			'Juan Fleitas',
			'Fernando Ruiz',
			'Genaro Gonzales',
			'Alejandro Pelliza Gonzales',
			'Federico Lopez'
		]
	});
	
	this.equipos.push({
		id:6,
		nombre: 'Gatasos F.C.',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Martin Lares',
			'Emanuel Catalano',
			'Bruno Fisicaro',
			'Franco Duca',
			'Ignacio Pizarro',
			'Lautaro Marchin'
		]
	});
	this.equipos.push({
		id:7,
		nombre: 'Irreal Madrid',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Archilla Federico',
			'Gomez Pablo',
			'Majul Mariano',
			'Majul Lautaro',
			'Palazolo Leandro',
			'Pederzoli Ignacio',
			'Pederzoli Guid'
		]
	});
	
	this.equipos.push({
		id:8,
		nombre: 'La Bufy',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Luciano Tarallo',
			'Octavio Gomez',
			'Bautista Leone',
			'Mateo Asegurado',
			'Lucas Gomez',
			'Jacinto Gomez'
		]
	});

	this.equipos.push({
		id:9,
		nombre: 'La Pajarera',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Ezequiel Jurado',
			'Lisandro Villavicencio',
			'Juan Jose Estevez',
			'Diego Moscato',
			'Marcelo Laborde',
			'Ramiro España',
			'Sebastian Gallo',
			'Mariano De la Riestra'
		]
	});

	this.equipos.push({
		id:10,
		nombre: 'La Peña del Miercoles',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Marcos Trinidad',
			'Martin Pendino',
			'Marcelo Abreu',
			'Facundo Andrenaci',
			'Juan Grassi',
			'Leo Garcia',
			'Vicente Castellano',
			'Emilio Usman'
		]
	});

	this.equipos.push({
		id:11,
		nombre: 'La Sede',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Tulian Lucas',
			'Barbieri Agustin',
			'Nballarini Guido',
			'Navarrete Luciano',
			'Oro Manuel',
			'Berardo Facundo',
			'Araut Matias',
			'Zuker Alexis'
		]
	});

	this.equipos.push({
		id:21,
		nombre: 'La Vieja Amelia',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Ezequiel Perez',
			'Lisandro Lussenhoff',
			'Mariano Lussenhoff',
			'Matias Caligaris',
			'Brian Samudio',
			'Fabricio Aguirre',
			'Berardo Facundo',
			'Ezequiel Ramiez'
		]
	});

	this.equipos.push({
		id:12,
		nombre: 'Los Cacos de tablada',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Ulises Rios',
			'German Rusello',
			'Alejo Leon',
			'Enzo Yañez',
			'Lautaro Garcia',
			'Agustin Tedesco',
			'Ivan Rangoni',
			'Rodrigo Baez'
		]
	});

	this.equipos.push({
		id:13,
		nombre: 'Los Esquejes',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Cristian Modica',
			'Cristian Castellli',
			'Federico Toscano',
			'Franco Merolli',
			'Ignacio Merolli',
			'Alejo Saldaña',
			'Ivan Segundo',
			'Marcelo Merolli'
		]
	});

	this.equipos.push({
		id:14,
		nombre: 'Los Trotawold',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Javier Costa',
			'Luscas Girolami',
			'Nicolas Rebuzzi',
			'German Anselmi',
			'Federico Colombo',
			'Pablo Vitale',
			'Gaston Haurat'
		]
	});

	this.equipos.push({
		id:15,
		nombre: 'La Maddalena OT',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Guillermo Frisco',
			'Franco Tosto',
			'Ezequiel Alonso',
			'Sebastian Morelli',
			'Federico Areses',
			'Andres Areses',
			'Matias Girolami',
			'Pablo Torres'
		]
	});

	this.equipos.push({
		id:16,
		nombre: 'NN',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Emanuel Bigatti',
			'Facundo Marcantonio',
			'Lucas Martinez',
			'Matias Belza',
			'Ayrton Galceran',
			'Gonzalo Giordano',
			'Joaquin Mayta',
			'Sebastian Bigatti'
		]
	});


	this.equipos.push({
		id:17,
		nombre: 'Old Scholl',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Juan Pablo Badano',
			'Sebastian Locret',
			'Carlos Silva',
			'Leandro Pierucci',
			'Franco Martinez',
			'Martin Troielli',
			'Nicolas Troielli',
			'Julian Pizarro'
		]
	});

	this.equipos.push({
		id:18,
		nombre: 'Quilmes',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Fabricio Bonofiglio',
			'Ramiro Diaz',
			'Cristian Zaccari',
			'Luciano Latini',
			'Franco Cicapolli',
			'Gonzalo de la Huerta'
		]
	});

	this.equipos.push({
		id:19,
		nombre: 'Santa Fe F.C.',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Adrian Inturias',
			'David Muñoz',
			'Gonzalo Guitian',
			'Pablo Ghio',
			'Gustavo Tripi',
			'Santiago Fernandez',
			'Dario Ceballe',
			'Francos Cescotti'
		]
	});


	this.equipos.push({
		id:20,
		nombre: 'Spartak',
		imagen: '/img/frontend/blank-team.png',
		jugadores: [
			'Mauro Gonzales',
			'Ezequiel Maujo',
			'Hernan Phillip',
			'Marcos Selliez',
			'Santiago Remon',
			'Nicolas March',
			'Cristan Amarillo',
			'Guillermo Allo'
		]
	});

	this.selectedEquipo = this.equipos[0].id;

	this.grupos = [];
	this.grupos.push({
		nombre: "Grupo A",
		equipos: [
			{ id: 1, nombre: "La Peña", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "La Bufy", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "Spartak", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "Old Scholl", pj: 0, ga: 0, gc: 0, puntos: 0 }
		]
	});
	this.grupos.push({
		nombre: "Grupo B",
		equipos: [
			{ id: 1, nombre: "La Pajarera", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "Gatasos F.C.", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "Irreal Madrid", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "Barca FC", pj: 0, ga: 0, gc: 0, puntos: 0 }
		]
	});
	this.grupos.push({
		nombre: "Grupo C",
		equipos: [
			{ id: 1, nombre: "88", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "Amenabar F.C", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "Los Trotaworld", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "Los Esquejes", pj: 0, ga: 0, gc: 0, puntos: 0 }
		]
	});
	this.grupos.push({
		nombre: "Grupo D",
		equipos: [
			{ id: 1, nombre: "La Sede", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "Quilmes", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "Deportivo Chacuro", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "La Resaka", pj: 0, ga: 0, gc: 0, puntos: 0 }
		]
	});
	this.grupos.push({
		nombre: "Grupo E",
		equipos: [
			{ id: 1, nombre: "Los Cacos de tablada", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "Santa Fe F.C.", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "La Maddalena OT", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "ZN", pj: 0, ga: 0, gc: 0, puntos: 0 }
		]
	});

	this.grupos.push({
		nombre: "Grupo F",
		equipos: [
			{ id: 1, nombre: "Cerveceros", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "NN", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "La vieja Amelia", pj: 0, ga: 0, gc: 0, puntos: 0 },
			{ id: 2, nombre: "Magic Paint", pj: 0, ga: 0, gc: 0, puntos: 0 }
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

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

$(window).bind('scroll', function() {
	if($(window).scrollTop() > 280) {
		$('.nav-tabs').css('position', 'fixed');
	}
	else {
		$('.nav-tabs').css('position','absolute');
	}
});
