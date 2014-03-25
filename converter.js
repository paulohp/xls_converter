#!/usr/bin/env node

/**
 * Module Dependencies
 */

var program = require('commander');
var fs = require('fs');
var _ = require('underscore');

program
    .version('0.0.1')
    .option('-o, --to_object', 'Convert to Object Javascript')
    .option('-x, --to_xls', 'Convert to XLS')
    .parse(process.argv);

/**/
if (program.to_object) console.log('- object js ');
if (program.to_xls) {

    fs.readFile('translations.js', 'utf8', function(err, data){

        var csv = dados.map(function(linha){
            return linha.map(function(celula){
                return '"'+(celula.replace(/\"/g, '\"').replace(/\r/g, '\\r'))+'"';
            }).join(';');
        }).join('\n');

        console.log(csv);

        fs.writeFile('translate.csv', csv, function(err){
            if (err) throw err;
            console.log('It\'s saved!');
        });

    });

}
