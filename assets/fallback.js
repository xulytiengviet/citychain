(()=>{'use strict';
const host=document.querySelector('#fallbackCity'),cats=window.CityApp.data.categories;
const ns='http://www.w3.org/2000/svg';const make=(tag,attrs={},text)=>{const e=document.createElementNS(ns,tag);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,String(v));if(text)e.textContent=text;return e};
const svg=make('svg',{viewBox:'0 0 1000 720','preserveAspectRatio':'xMidYMid meet','aria-label':'Sơ đồ thành phố blockchain dạng isometric'});
const defs=make('defs');const gradient=make('radialGradient',{id:'cityGlow',cx:'50%',cy:'44%',r:'50%'});gradient.append(make('stop',{offset:'0%','stop-color':'#0b4365','stop-opacity':'.65'}),make('stop',{offset:'100%','stop-color':'#040915','stop-opacity':'0'}));defs.append(gradient);const blur=make('filter',{id:'towerBloom',x:'-80%',y:'-80%',width:'260%',height:'260%'});blur.append(make('feGaussianBlur',{stdDeviation:'4'}));defs.append(blur);svg.append(defs);svg.append(make('ellipse',{cx:'500',cy:'340',rx:'440',ry:'260',fill:'url(#cityGlow)'}));
const streets=make('g',{stroke:'#146389','stroke-width':'.7','stroke-opacity':'.34',fill:'none'});
for(let i=-14;i<=14;i++){const offset=i*29;streets.append(make('path',{d:`M${500+offset},150 L${500+offset-360},590`}),make('path',{d:`M${500+offset},150 L${500+offset+360},590`}))}svg.append(streets);
const circuits=make('g',{stroke:'#12add6','stroke-opacity':'.43',fill:'none','stroke-width':'1.4'});
for(let i=0;i<20;i++){const a=i*Math.PI*2/20;const x=500+Math.cos(a)*270,z=370+Math.sin(a)*150;circuits.append(make('polyline',{points:`500,370 ${x.toFixed(1)},370 ${x.toFixed(1)},${z.toFixed(1)}`}))}svg.append(circuits);
const structures=[];
for(let i=0;i<20;i++){const c=cats[i],r=i<10?183:306,a=(i%10)/10*Math.PI*2+Math.PI/7+(i<10?0:.28);const wx=Math.cos(a)*r,wz=Math.sin(a)*r;const x=500+wx*.95, y=365+wz*.48,ht=(i<10?52:37)+(i*17%40);structures.push({c,x,y,ht,z:wz})}
structures.sort((a,b)=>a.y-b.y);
function tower(d){const {c,x,y,ht}=d,w=33,h=16;colorTower(c,x,y,ht,w,h)}
function colorTower(c,x,y,ht,w,dep){const g=make('g',{class:'svg-building',role:'button',tabindex:'0','aria-label':c.title,style:'cursor:pointer'});const top=`${x},${y-ht} ${x+w},${y-ht-dep*.7} ${x+w*2},${y-ht} ${x+w},${y-ht+dep*.7}`;const left=`${x},${y-ht} ${x+w},${y-ht+dep*.7} ${x+w},${y+dep*.7} ${x},${y}`;const right=`${x+w},${y-ht+dep*.7} ${x+w*2},${y-ht} ${x+w*2},${y} ${x+w},${y+dep*.7}`;
 const stroke={'stroke':c.color,'stroke-width':'1.5','stroke-opacity':'.84','stroke-linejoin':'round'};
 g.append(make('polygon',{points:left,fill:'#071f38',...stroke}),make('polygon',{points:right,fill:'#071525',...stroke}),make('polygon',{points:top,fill:c.color,'fill-opacity':'.25',...stroke}));
 for(let i=0;i<3;i++){const cy=y-ht+17+i*Math.max(8,(ht-20)/3);if(cy<y){g.append(make('line',{x1:x+3,y1:cy,x2:x+w-3,y2:cy+dep*.3,stroke:c.color,'stroke-opacity':'.4'}),make('line',{x1:x+w+3,y1:cy+dep*.3,x2:x+w*2-3,y2:cy-1,stroke:c.color,'stroke-opacity':'.32'}))}}
 g.append(make('text',{x:x+w,y:y-ht-12,'text-anchor':'middle',fill:c.color,'font-size':'11','font-weight':'800','font-family':'monospace','paint-order':'stroke',stroke:'#020916','stroke-width':'3.5'},c.icon+' '+c.title));g.addEventListener('click',()=>window.CityApp.selectCategory(c.id));g.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();window.CityApp.selectCategory(c.id)}});svg.append(g)
}
for(const d of structures)tower(d);
const core={title:'Lõi blockchain',icon:'⬡',color:'#0fe6fa',id:'blk'};colorTower(core,455,400,136,45,24);
svg.append(make('text',{x:500,y:79,'text-anchor':'middle',fill:'#bcefff','font-size':'18','letter-spacing':'6','font-family':'monospace','font-weight':'900'},'CITYCHAIN • 20 NEON DISTRICTS'));
svg.append(make('text',{x:500,y:634,'text-anchor':'middle',fill:'#6baec6','font-size':'13','letter-spacing':'2','font-family':'monospace'},'SƠ ĐỒ ISOMETRIC DỰ PHÒNG · CHỌN TÒA NHÀ ĐỂ KHÁM PHÁ'));
host.append(svg);
})();
