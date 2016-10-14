/*function makeid() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for( var i=0; i < 5; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
res = [];
while (res.length < 100) {
  var t = makeid();
  if (res.indexOf(t) === -1) {
    res.push(t);
  }
}*/

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var fs = require('fs');

var symbols = ["afhva", "xvhst", "ikcme", "weplp", "alrzs", "uqrlh", "hwgcn", "glhaa", "jrzsd", "xvctw", "lyhgt", "wuqzt", "ftufw", "ntzaw", "xsjjv", "ligmr", "ogfvj", "uvbqi", "iqudy", "wttlz", "jlfkz", "qdklu", "pcvfd", "fuhxo", "enjpm", "qucvl", "qtzhp", "qsdhe", "uuhfk", "twqay", "dirbw", "oputn", "bynxu", "ausrq", "dcmaa", "ewamj", "gbccz", "hpcml", "uxrej", "rrtoi", "kdfio", "kssun", "hbege", "lnysi", "jclni", "vycmx", "wmeem", "qxmlm", "ldvvg", "ehgtb", "efzva", "vosou", "hcasf", "gfumm", "frlli", "cgieg", "lkgwe", "ykvrk", "mcbnj", "bzvtz", "pypei", "xvwpq", "iwqqs", "kthcm", "bawsf", "lymtc", "wkjns", "xvsuw", "fwuzz", "dnpge", "flujd", "tppor", "ujyyy", "kityr", "ztpoo", "jvmlh", "fbnte", "gubhv", "qahef", "hzjqj", "jzimi", "kwijt", "vvmfn", "mlohh", "niiqz", "hkpra", "ilmme", "npwjs", "hmhyg", "bgwjk", "lyzrr", "zmduv", "ybmrx", "knwyp", "aglja", "eroor", "gdgte", "hrbqr", "kfsqs", "lbjem"];

var imports = '';
var tpl = '';
var list = '';

symbols.forEach((symbol) => {
  var className = capitalizeFirstLetter(symbol);
  tpl += `<d-${symbol}></d-${symbol}>`;
  imports += `import {${className}} from './generated/${symbol}'\n`;
  list += `, ${className}`;
  var cpt = `
import {Component} from '@angular/core'

@Component({
  selector: 'd-${symbol}',
  template: \`
    <span [attr.aria-label]="msg" [hidden]="false">This is a dummy component for ${className}</span>
    <div (click)="doNothing($event)"></div>
    \`,
})
export class ${className} {
    msg: string = 'nothing to say';
    doNothing(evt: any) {}
}
`;
  fs.writeFileSync('./tmp/' + symbol + '.ts', cpt, 'utf-8');
});

console.log(tpl);
console.log(imports);
console.log(list);
