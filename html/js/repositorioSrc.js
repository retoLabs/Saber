import utils  from '../k1/libK3_Utils.js'
import ajax   from '../k1/libK3_Ajax.js'



//------------------------------------------------------------------- Arbol


function ecoNodosSQL(xhr){
   var filas = utils.csv2filas(xhr.responseText);
	vgApp.lista = new Array();
	filas.map(function(fila){
		vgApp.lista.push(fila);
	})
//	console.log('codTipo: '+vgApp.codTipo);
	vgApp.appLstEsp.actualiza(filas);
}

function getNodosList(cod){
	vgApp.codTipo = cod;
	var stmt = '';
	stmt = "select * from nodos where ctg='"+ cod +"' order by tag;";

	var stmtB64 = Base64.encode(stmt);
	var body = {
		id : 1234567, //vgApp.encript.sessId,
		path : vgApp.sqlite.pathDB,
		db   : vgApp.sqlite.repoDB,
		stmt : stmtB64
	}
	var params = vgApp.paramsXHR;
	params.base = vgApp.sqlite.base;
	params.eco = ecoNodosSQL; 

	ajax.ajaxCmdShell(params,body);
}

function ecoTiposSQL(xhr){
   var filas = utils.csv2filas(xhr.responseText);
	vgApp.lista = new Array();
	filas.map(function(fila){
		vgApp.lista.push(fila);
	})
	vgApp.appLstEsp.setTipos(filas);
	vgApp.codTipo = 'WHAT';
	getNodosList(vgApp.codTipo);
}

function getTiposList(){
	var stmt = '';
	stmt = "select * from tipos;";
	console.log(stmt);

	var stmtB64 = Base64.encode(stmt);
	var body = {
		id : 1234567, //vgApp.encript.sessId,
		path : vgApp.sqlite.pathDB,
		db   : vgApp.sqlite.repoDB,
		stmt : stmtB64
	}
	var params = vgApp.paramsXHR;
	params.base = vgApp.sqlite.base;
	params.eco = ecoTiposSQL; 

	ajax.ajaxCmdShell(params,body);

}
//------------------------------------------------------------------- DML SQLite Agro
function ecoUpdateFila(xhr){
	alert(xhr.responseText);
}
function updateFila(fila){
	var stmt = "update agro set img='"+fila.img+"' where cod='" + fila.cod+"';";
	console.log(stmt);

	var stmtB64 = Base64.encode(stmt);
	var body = {
		id : 1234567, //vgApp.encript.sessId,
		path : vgApp.sqlite.pathDB,
		db   : vgApp.sqlite.repoDB,
		stmt : stmtB64
	}
	var params = vgApp.paramsXHR;
	params.base = vgApp.sqlite.base;
	params.eco = ecoUpdateFila; 

	ajax.ajaxCmdShell(params,body);
}

//------------------------------------------------------------------- Arbol
function showInfoNodo(tag){
	window.open('https://es.wikipedia.org/wiki/'+tag);
}

function ecoInsertNodo(xhr){
	alert(xhr.responseText);
}
function addNodo(event) {
	event.preventDefault();
	const formData = new FormData(event.target);
	const tag = formData.get('tag');
	const cod = vgApp.codTipo;
   console.log(tag+' '+cod);

	var stmt = "insert into nodos (tag,ctg) values ('"+tag+"','"+cod+"');" ;
	console.log(stmt);

	var stmtB64 = Base64.encode(stmt);
	var body = {
		id : 1234567, //vgApp.encript.sessId,
		path : vgApp.sqlite.pathDB,
		db   : vgApp.sqlite.repoDB,
		stmt : stmtB64
	}
	var params = vgApp.paramsXHR;
	params.base = vgApp.sqlite.base;
	params.eco = ecoInsertNodo; 

	ajax.ajaxCmdShell(params,body);
}

function initAppRepo(){
	vgApp.appLstEsp = new Vue({
		el: '#lstEsp',
			data: {
				items: [],
				tipos: [],
				activ: null,
				foto: null,
			},
		methods : {
			update : function(item){
				updateFila(item);
			},
			actualiza : function(items){
				this.items = items;
				if (items.length) this.idAct = items[0].id0;
			},
			setTipos : function(tipos){
				this.tipos = tipos;
			},
			getNodos(cod){
				getNodosList(cod);
			},
			showInfo : function(item){
					showInfoNodo(item.tag);
			}
		}
	})
}

export default {initAppRepo,getNodosList,getTiposList,addNodo}



//  lista links : http://worldplants.webarchiv.kit.edu
//http://ww2.bgbm.org/mcl/results.asp?name=Acanthus+mollis&area1=&bool1=&mclStatus1=&order=name&count=4&advanced=&family=&Submit=Query
//https://www.ncbi.nlm.nih.gov/gquery/?term=Acanthus+mollis