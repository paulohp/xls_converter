#!/usr/bin/env node

/**
 * Module Dependencies
 */

var program = require('commander');
var fs = require('fs');

program
    .version('0.0.1')
    .option('-o, --to_object', 'Convert to Object Javascript')
    .option('-x, --to_xls', 'Convert to XLS')
    .parse(process.argv);

/**/
if (program.to_object) console.log(' - object js ');
if (program.to_xls) {
	var dados = [
		['Nome',   'Sobrenome', 'Profissão'],
		['Paula',  'Tejando',   'Adivinha' ],
		['Cuca',   'Beludo',    'Padeiro'  ],
		['Thomas', 'Turbano',   'Popeye'   ]
	];

	var csv = dados.map(function(linha){
		return linha.map(function(celula){
			return '"'+(celula.replace(/\"/g, '\"').replace(/\r/g, '\\r'))+'"';
		}).join(';');
	}).join('\n');

	fs.writeFile('translate.csv', csv, function(err){
		if (err) throw err;
		console.log('It\'s saved!');
	});

	console.log(csv);
};
