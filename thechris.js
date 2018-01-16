const http = require('http');
const args = process.argv.slice(2);
let flags = [];
let markup = " ";
for (i in args) {
  args[i][0]=='-' && flags.push(...args[i].slice(1).split(''))
}
http.get('http://christopherscambridge.com.s122913.gridserver.com/menus/194-2', (res)=>{
  res.on('data', (c)=>{
    markup += `${c}`;
  }).on('end', () => {
    if(markup.length){
        let finalOutput = '';
        markup = markup.split(/[\n\t]/).join('');
        let findU=/updated ([^<&-]*)?/g;
        let u = findU.exec(markup)[1];
        console.log(`++++++++++++++++\nUPDATED ON ${u}\n++++++++++++++++`);
        let apps = findSpecialItem('appetizer', markup);
        let plates = findSpecialItem('big plates', markup);
        let soup = findSpecialItem('soup', markup);
        let burger = findSpecialItem('burger', markup);
        let fish = findSpecialItem('catch', markup);
        let cocktail = findSpecialItem('from the bar', markup);

        if(flags.length){
          if(flags.indexOf('a') >= 0){
            finalOutput+=`\nAPPETIZERS:\n==========\n${apps}\n`;
          }
          if(flags.indexOf('b') >= 0){
            finalOutput+=`\nBURGER:\n==========\n${burger}\n`;
          }
          if(flags.indexOf('p') >= 0){
            finalOutput+=`\nBIG PLATES:\n==========\n${plates}\n`;
          }
          if(flags.indexOf('s') >= 0){
            finalOutput+=`\nSOUP:\n==========\n${soup}\n`;
          }
          if(flags.indexOf('f') >= 0){
            finalOutput+=`\nCATCH OF THE DAY:\n==========\n${fish}\n`;
          }
          if(flags.indexOf('c') >= 0){
            finalOutput+=`\nCOCKTAILS:\n==========\n${cocktail}\n`;
          }
        }
        else{
          finalOutput += `\nAPPETIZERS:\n==========\n${apps}\n\nBURGER:\n==========\n${burger}\n\nBIG PLATES:\n==========\n${plates}\n\nSOUP:\n==========\n${soup}\n\nCATCH OF THE DAY:\n==========\n${fish}\n\nCOCKTAIL:\n==========\n${cocktail}\n`;
        }
        console.log(finalOutput);
    }

  });
}).on('error', (e)=>{
  console.log(`ERROR: ${e.message}`);
});

function findSpecialItem(name, findIn){
  let reg = new RegExp(`${name}.*?</h6>(.*?)<h`,'gi');
  let matches = reg.exec(findIn),
      m = '';
  if(matches.length > 1){
    let t = matches[1].split(/<\/p>/).slice(0,-1);
    for(j in t){
      t[j] = t[j].replace(/<br.*?\/>/g, '<br/>\n');
      t[j] = t[j].replace(/<.*?>/g, '');
      t[j] = t[j].replace(/&amp;/g, 'and');
      t[j] = t[j].replace(/(\d+\.\d+)/g, "\n- $1");
    }
    m = t.join('\n\n');
  }
  return m;
}
