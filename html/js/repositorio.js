
import {vgApp,goPag}    from '/saber/js/saber_VGlob.js'

import src from '/saber/js/repositorioSrc.js'
import sess   from '../k1/libK3_Sesion.js'

window.vgApp = vgApp; // import para Ajax
window.addNodo = src.addNodo;

function sesionRepositorioOK(){
	src.initAppRepo();
	src.getTiposList();
}

function initRepositorio(){
//	sess.validaSesion('usrMenu', sesionRepositorioOK); // kernel/libK1_sesion.js
	sesionRepositorioOK();
}

window.onload = initRepositorio;
//  lista links : http://worldplants.webarchiv.kit.edu
//http://ww2.bgbm.org/mcl/results.asp?name=Acanthus+mollis&area1=&bool1=&mclStatus1=&order=name&count=4&advanced=&family=&Submit=Query
//https://www.ncbi.nlm.nih.gov/gquery/?term=Acanthus+mollis