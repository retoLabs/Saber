

import {vgk}  from '/saber/k1/libK3_Utils.js'

export var vgApp = {
	paramsXHR : {
		app : '/saber',
		url : 'http://' + window.location.host,
		base : '/datos',
		otro : '',
		iam : '',
		eco : null
	},
	sqlite : {
		base   : '/saber/shell/sqlite',
		userDB : 'usersSaber.sqlite',
		sessDB : 'sessSaber.sqlite',
		pathDB : 'apps/Saber/sqlite',
		repoDB : 'repoSaber.sqlite',
		notaDB : 'notasSaber.sqlite',
		stmtDB : '',
	},
	cypher : {
		base   : '/shell/cypher',
		pathDB : 'apps/Saber/sqlite',
	},
	encript : {
		base   : '/saber/shell/encript',
	},
}

export function goPag(pag,_id){
	if (vgk.params) var idSess = vgk.params.idSess;
	switch (pag){
	}
}

