const http = require('http');
const args = process.argv.slice(2);
let flags = [];
let toShow = [];
let lookup= {
  'flagsToNames':{
    'a': 'appetizer',
    'p': 'big plates',
    's': 'soup',
    'g': 'burger',
    'b': 'beer specials',
    'f': 'catch',
    'c': 'from the bar'
  },
  'namesToHeadings':{
    'appetizer': "APPETIZERS",
    'big plates': "BIG PLATES",
    'soup': "SOUP",
    'burger': "BURGER",
    'catch': "CATCH OF THE DAY",
    'from the bar': "COCKTAILS",
    'beer specials': "BEER SPECIALS"
  }
}
let markup = " ";
for (i in args) {
  args[i][0]=='-' && flags.push(...args[i].slice(1).split(''))
}
if(flags.includes('h')){
  console.log(`
      Need Help?
      Do not use any flags if you want to see all of the specials.

      FLAGS (can be combined):
      [-a]: appetizers
      [-b]: beer
      [-c]: cocktails
      [-f]: catch of the day
      [-g]: burger
      [-p]: big plates
      [-s]: soup

      HELP:
      [-h]: Will override any other flags and display this help menu

      EXAMPLES:
        node thechris.js -ac (will return appetizers and cocktails)
        node thechris.js -p -s (big plates / soup)
    `);
}
else{
  http.get('http://christopherscambridge.com.s122913.gridserver.com/menus/194-2', (res)=>{
    res.on('data', (c)=>{
      markup += `${c}`;
    }).on('end', () => {
      if(markup.length){
          let finalOutput = '';
          markup = markup.split(/[\n\t]/).join('');
          let findU=/updated ([^<&-]*)?/g;
          let u = findU.exec(markup)[1];
          console.log(`+++++++++++++++++++++++\nUPDATED ON ${u}\n+++++++++++++++++++++++`);
          if(flags.length){
            for(k in lookup.flagsToNames){
              if(flags.includes(k)){
                toShow.push(lookup.flagsToNames[k]);
              }
            }
          } else{
            toShow.push(...Object.keys(lookup.namesToHeadings));
          }
          let f = findItemInfo(toShow, markup);
          console.log(`${f}\n`);
      }

    });
  }).on('error', (e)=>{
    console.log(`ERROR: ${e.message}`);
  });

}

function findItemInfo(names, findIn){
  let final = '';
  for(n in names){
    let reg = new RegExp(`${names[n]}.*?</h6>(.*?)<h6`,'gi');
    let matches = reg.exec(findIn),
        m = `\n\n${lookup.namesToHeadings[names[n]]}\n====================\n`;
    if(matches.length > 1){
      let t = matches[1].split(/<\/p>/).slice(0,-1);
      for(j in t){
        if(names[n] == 'beer specials'){
          if(t[j].match(/<h1>/g)){
            let findHeading = new RegExp('<h1>.*?<strong>(.*?)</', 'g')
            let heading = findHeading.exec(t[j]);
            if(heading.length > 1){
              t[j] = `--------------------\n ${heading[1].toUpperCase()} \n--------------------\n${t[j]}`;
              t[j] = t[j].replace(/(<h1>.*?<\/h1>)/g, '');
            }
          }
        }
        t[j] = t[j].replace(/<br.*?\/>/g, '<br/>\n');
        t[j] = t[j].replace(/<.*?>/g, '');
        t[j] = t[j].replace(/&amp;/g, 'and');
        t[j] = t[j].replace(/&#8217;/g, '\'');
        t[j] = t[j].replace(/(\d+\.\d+)/g, "\n- $1\n");
      }
      m += t.join('\n\n');
    }
    final+=m;
  }
  return final;
}
