const ASSET_VERSION='20261119-2';
const asset=path=>`assets/${path}?v=${ASSET_VERSION}`;
const OLD='neighborhood-stickers.png',A='stickers-community-a.png',B='stickers-community-b.png',C='stickers-community-c.png';
const PLACES=[
  {id:'apartment',name:'公寓',cat:'building',sheet:A,pos:[0,0]}, {id:'highrise',name:'高樓',cat:'building',sheet:A,pos:[1,0]},
  {id:'rice',name:'稻田',cat:'nature',sheet:A,pos:[2,0]}, {id:'fishpond',name:'魚塭',cat:'nature',sheet:A,pos:[3,0]},
  {id:'tea',name:'茶園',cat:'nature',sheet:A,pos:[0,1]}, {id:'park',name:'公園',cat:'nature',sheet:OLD,pos:[1,0]},
  {id:'school',name:'學校',cat:'facility',sheet:OLD,pos:[0,0]}, {id:'library',name:'圖書館',cat:'facility',sheet:OLD,pos:[2,0]},
  {id:'clinic',name:'診所',cat:'facility',sheet:OLD,pos:[3,0],safe:true}, {id:'police',name:'警察局',cat:'facility',sheet:OLD,pos:[0,1],safe:true},
  {id:'fire',name:'消防隊',cat:'facility',sheet:OLD,pos:[1,1],safe:true}, {id:'garden',name:'菜園',cat:'facility',sheet:A,pos:[1,1]},
  {id:'factory',name:'工廠',cat:'facility',sheet:A,pos:[2,1]}, {id:'temple',name:'寺廟',cat:'facility',sheet:A,pos:[3,1]},
  {id:'oldstreet',name:'老街',cat:'facility',sheet:A,pos:[0,2]}, {id:'afterschool',name:'安親班',cat:'facility',sheet:A,pos:[1,2]},
  {id:'church',name:'教堂',cat:'facility',sheet:A,pos:[2,2]}, {id:'playground',name:'遊樂場',cat:'facility',sheet:A,pos:[3,2]},
  {id:'pool',name:'游泳池',cat:'facility',sheet:B,pos:[0,0]}, {id:'activity',name:'活動中心',cat:'facility',sheet:B,pos:[1,0]},
  {id:'hospital',name:'醫院',cat:'facility',sheet:B,pos:[2,0],safe:true}, {id:'bank',name:'銀行',cat:'facility',sheet:B,pos:[3,0]},
  {id:'market',name:'市場',cat:'shop',sheet:OLD,pos:[0,2]}, {id:'nightmarket',name:'夜市',cat:'shop',sheet:B,pos:[0,1]},
  {id:'stationery',name:'文具店',cat:'shop',sheet:B,pos:[1,1]}, {id:'restaurant',name:'餐廳',cat:'shop',sheet:OLD,pos:[2,2]},
  {id:'bakery',name:'麵包店',cat:'shop',sheet:B,pos:[3,1]}, {id:'breakfast',name:'早餐店',cat:'shop',sheet:B,pos:[0,2]},
  {id:'store',name:'便利商店',cat:'shop',sheet:OLD,pos:[1,2]}, {id:'snack',name:'小吃店',cat:'shop',sheet:B,pos:[2,2]},
  {id:'fastfood',name:'速食區',cat:'shop',sheet:B,pos:[3,2]}, {id:'hotel',name:'飯店',cat:'shop',sheet:C,pos:[0,0]},
  {id:'bookstore',name:'書店',cat:'shop',sheet:C,pos:[1,0]}, {id:'grocery',name:'雜貨店',cat:'shop',sheet:C,pos:[2,0]},
  {id:'supermarket',name:'超市賣場',cat:'shop',sheet:C,pos:[3,0]}, {id:'harbor',name:'漁港',cat:'traffic',sheet:C,pos:[0,1]},
  {id:'pier',name:'碼頭',cat:'traffic',sheet:C,pos:[1,1]}, {id:'crossing',name:'平交道',cat:'traffic',sheet:C,pos:[2,1],safe:true},
  {id:'parking',name:'停車場',cat:'traffic',sheet:C,pos:[3,1]}, {id:'gas',name:'加油站',cat:'traffic',sheet:C,pos:[0,2]},
  {id:'station',name:'火車站',cat:'traffic',sheet:OLD,pos:[2,1]}, {id:'bus',name:'公車站',cat:'traffic',sheet:OLD,pos:[3,1]}
];
const MAPS={campus:{src:asset('map-close.jpg'),pin:[18,23],label:'校園近景'},neighborhood:{src:asset('map-wide.jpg'),pin:[44,26],label:'學校周邊'},life:{src:asset('map-life.jpg'),pin:[16,34],label:'生活圈'},town:{src:asset('map-town.jpg'),pin:null,label:'蘇澳市區'}};
const ZHUYIN={
  apartment:['ㄍㄨㄥ','ㄩˋ'],highrise:['ㄍㄠ','ㄌㄡˊ'],rice:['ㄉㄠˋ','ㄊㄧㄢˊ'],fishpond:['ㄩˊ','ㄨㄣ'],tea:['ㄔㄚˊ','ㄩㄢˊ'],park:['ㄍㄨㄥ','ㄩㄢˊ'],
  school:['ㄒㄩㄝˊ','ㄒㄧㄠˋ'],library:['ㄊㄨˊ','ㄕㄨ','ㄍㄨㄢˇ'],clinic:['ㄓㄣˇ','ㄙㄨㄛˇ'],police:['ㄐㄧㄥˇ','ㄔㄚˊ','ㄐㄩˊ'],fire:['ㄒㄧㄠ','ㄈㄤˊ','ㄉㄨㄟˋ'],garden:['ㄘㄞˋ','ㄩㄢˊ'],
  factory:['ㄍㄨㄥ','ㄔㄤˇ'],temple:['ㄙˋ','ㄇㄧㄠˋ'],oldstreet:['ㄌㄠˇ','ㄐㄧㄝ'],afterschool:['ㄢ','ㄑㄧㄣ','ㄅㄢ'],church:['ㄐㄧㄠˋ','ㄊㄤˊ'],playground:['ㄧㄡˊ','ㄌㄜˋ','ㄔㄤˇ'],
  pool:['ㄧㄡˊ','ㄩㄥˇ','ㄔˊ'],activity:['ㄏㄨㄛˊ','ㄉㄨㄥˋ','ㄓㄨㄥ','ㄒㄧㄣ'],hospital:['ㄧ','ㄩㄢˋ'],bank:['ㄧㄣˊ','ㄏㄤˊ'],market:['ㄕˋ','ㄔㄤˇ'],nightmarket:['ㄧㄝˋ','ㄕˋ'],
  stationery:['ㄨㄣˊ','ㄐㄩˋ','ㄉㄧㄢˋ'],restaurant:['ㄘㄢ','ㄊㄧㄥ'],bakery:['ㄇㄧㄢˋ','ㄅㄠ','ㄉㄧㄢˋ'],breakfast:['ㄗㄠˇ','ㄘㄢ','ㄉㄧㄢˋ'],store:['ㄅㄧㄢˋ','ㄌㄧˋ','ㄕㄤ','ㄉㄧㄢˋ'],snack:['ㄒㄧㄠˇ','ㄔ','ㄉㄧㄢˋ'],
  fastfood:['ㄙㄨˋ','ㄕˊ','ㄑㄩ'],hotel:['ㄈㄢˋ','ㄉㄧㄢˋ'],bookstore:['ㄕㄨ','ㄉㄧㄢˋ'],grocery:['ㄗㄚˊ','ㄏㄨㄛˋ','ㄉㄧㄢˋ'],supermarket:['ㄔㄠ','ㄕˋ','ㄇㄞˋ','ㄔㄤˇ'],harbor:['ㄩˊ','ㄍㄤˇ'],
  pier:['ㄇㄚˇ','ㄊㄡˊ'],crossing:['ㄆㄧㄥˊ','ㄐㄧㄠ','ㄉㄠˋ'],parking:['ㄊㄧㄥˊ','ㄔㄜ','ㄔㄤˇ'],gas:['ㄐㄧㄚ','ㄧㄡˊ','ㄓㄢˋ'],station:['ㄏㄨㄛˇ','ㄔㄜ','ㄓㄢˋ'],bus:['ㄍㄨㄥ','ㄔㄜ','ㄓㄢˋ']
};
const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
const grid=$('#itemGrid'),stage=$('#mapStage'),layer=$('#placedLayer'),mapImage=$('#mapImage');
let selected=null, editingId=null, currentMap='campus', items=[], history=[];
function spriteStyle(p){return `background-image:url('${asset(p.sheet)}');background-position:${p.pos[0]*100/3}% ${p.pos[1]*50}%`}
function zhuyinParts(raw=''){const match=raw.match(/[ˊˇˋ˙]/);return{base:raw.replace(/[ˊˇˋ˙]/g,''),tone:match?.[0]||''}}
function labelHTML(p){return `<span class="annotated-label" aria-hidden="true">${[...p.name].map((char,i)=>{const z=zhuyinParts(ZHUYIN[p.id]?.[i]);return `<span class="ruby-unit"><span class="han">${char}</span><span class="zy-wrap"><span class="zy-base">${z.base}</span>${z.tone?`<span class="zy-tone">${z.tone}</span>`:''}</span></span>`}).join('')}</span><span class="sr-only">${p.name}</span>`}
function makePalette(filter='all'){
  grid.innerHTML=PLACES.filter(p=>filter==='all'||p.cat===filter).map(p=>`<button type="button" class="place-card ${selected===p.id?'selected':''}" data-place="${p.id}" aria-label="${p.name}" aria-pressed="${selected===p.id}"><span class="sticker" style="${spriteStyle(p)}"></span>${labelHTML(p)}</button>`).join('');
}
function selectPlace(id){selected=selected===id?null:id;makePalette($('.category.active').dataset.filter);const p=PLACES.find(x=>x.id===selected);$('#selectionTip').textContent=p?`已選「${p.name}」，請點地圖放置`:'請選擇一個地點物件';stage.classList.toggle('placing',!!p);$('#mapHint').textContent=p?`點地圖放置：${p.name}`:'先從工具箱選物件，再點地圖放置'}
grid.addEventListener('click',e=>{const btn=e.target.closest('[data-place]');if(btn)selectPlace(btn.dataset.place)});
$$('.category').forEach(b=>b.addEventListener('click',()=>{$$('.category').forEach(x=>x.classList.remove('active'));b.classList.add('active');makePalette(b.dataset.filter)}));
function snapshot(){history.push(JSON.stringify(items));if(history.length>30)history.shift()}
function addAt(x,y){if(!selected)return;snapshot();items.push({id:crypto.randomUUID?.()||Date.now().toString(36)+Math.random(),type:selected,x,y,note:'',help:''});render();const p=PLACES.find(q=>q.id===selected);toast(`已加入「${p.name}」`);selected=null;makePalette($('.category.active').dataset.filter);$('#selectionTip').textContent='請選擇一個地點物件';$('#mapHint').textContent='拖曳可移動；點物件可寫觀察';saveLocal()}
stage.addEventListener('click',e=>{if(e.target.closest('.placed-item'))return;if(!selected)return;const r=stage.getBoundingClientRect();addAt((e.clientX-r.left)/r.width*100,(e.clientY-r.top)/r.height*100)});
function render(){layer.innerHTML=items.map(it=>{const p=PLACES.find(q=>q.id===it.type);return `<button class="placed-item ${it.note||it.help?'has-note':''}" data-id="${it.id}" style="left:${it.x}%;top:${it.y}%" aria-label="${p.name}，點擊編輯觀察紀錄"><span class="sticker" style="${spriteStyle(p)}"></span><em>${labelHTML(p)}</em></button>`}).join('');updateTasks()}
let drag=null;
layer.addEventListener('pointerdown',e=>{const el=e.target.closest('.placed-item');if(!el)return;e.preventDefault();const it=items.find(x=>x.id===el.dataset.id);drag={el,it,startX:e.clientX,startY:e.clientY,x:it.x,y:it.y,moved:false};el.setPointerCapture(e.pointerId)});
layer.addEventListener('pointermove',e=>{if(!drag)return;const r=stage.getBoundingClientRect(),dx=(e.clientX-drag.startX)/r.width*100,dy=(e.clientY-drag.startY)/r.height*100;if(Math.abs(dx)+Math.abs(dy)>.5)drag.moved=true;drag.it.x=Math.max(3,Math.min(97,drag.x+dx));drag.it.y=Math.max(5,Math.min(94,drag.y+dy));drag.el.style.left=drag.it.x+'%';drag.el.style.top=drag.it.y+'%'});
layer.addEventListener('pointerup',e=>{if(!drag)return;const d=drag;drag=null;if(d.moved){history.push(JSON.stringify(items.map(it=>it.id===d.it.id?{...it,x:d.x,y:d.y}:it)));saveLocal()}else openEdit(d.it.id)});
function openEdit(id){editingId=id;const it=items.find(x=>x.id===id),p=PLACES.find(q=>q.id===it.type);$('#dialogTitle').textContent=p.name;$('#noteInput').value=it.note||'';$('#helpInput').value=it.help||'';$('#editDialog').showModal()}
$('#editForm').addEventListener('submit',e=>{if(e.submitter?.value==='cancel')return;const it=items.find(x=>x.id===editingId);if(!it)return;snapshot();it.note=$('#noteInput').value.trim();it.help=$('#helpInput').value.trim();render();saveLocal();toast('觀察紀錄已更新')});
$('#deleteItemBtn').addEventListener('click',()=>{snapshot();items=items.filter(x=>x.id!==editingId);$('#editDialog').close();render();saveLocal();toast('已刪除物件')});
function updateTasks(){const unique=new Set(items.map(x=>x.type)).size,safe=items.filter(x=>PLACES.find(p=>p.id===x.type)?.safe).length,notes=items.filter(x=>x.note||x.help).length;const state=[unique>=5,safe>=2,notes>=3];state.forEach((v,i)=>$('#task'+(i+1)).checked=v);const n=state.filter(Boolean).length;$('#missionCount').textContent=`${n}／3`;$('#progressText').textContent=`${n}／3 任務`;$('#progressBar').style.width=n/3*100+'%';const cert=$('#certificateBtn');cert.disabled=n<3;cert.textContent=n===3?'下載探索證書':'完成任務後領證';cert.title=n===3?'輸入姓名並下載含有作品地圖的證書':'完成三項探索任務後即可下載證書'}
function saveLocal(){localStorage.setItem('suaoMapItems',JSON.stringify(items));localStorage.setItem('suaoMapView',currentMap)}
$('#saveBtn').addEventListener('click',()=>{saveLocal();toast('作品已儲存在這台裝置')});
$('#undoBtn').addEventListener('click',()=>{if(!history.length)return toast('目前沒有可復原的步驟');items=JSON.parse(history.pop());render();saveLocal();toast('已復原上一步')});
$('#clearBtn').addEventListener('click',()=>{if(!items.length)return toast('地圖目前是空的');if(confirm('確定要清除地圖上的所有物件嗎？')){snapshot();items=[];render();saveLocal();toast('已清除全部物件')}});
function applyMap(){const cfg=MAPS[currentMap]||MAPS.campus;mapImage.src=cfg.src;mapImage.alt=`蘇澳國小${cfg.label}地圖`;const pin=$('.school-pin');pin.hidden=!cfg.pin;if(cfg.pin){pin.style.left=cfg.pin[0]+'%';pin.style.top=cfg.pin[1]+'%'}$$('.view-btn').forEach(x=>x.classList.toggle('active',x.dataset.map===currentMap))}
$$('.view-btn').forEach(b=>b.addEventListener('click',()=>{currentMap=b.dataset.map;applyMap();saveLocal();toast(`已切換：${MAPS[currentMap].label}`)}));
$('#helpBtn').addEventListener('click',()=>$('#helpDialog').showModal());$('#collapseBtn').addEventListener('click',()=>{const toolbox=$('#toolbox'),button=$('#collapseBtn'),c=toolbox.classList.toggle('collapsed');$('.app-shell').classList.toggle('toolbox-collapsed',c);button.textContent=c?'展開':'收合';button.setAttribute('aria-expanded',String(!c));button.setAttribute('aria-label',c?'展開工具箱':'收合工具箱')});
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._timer);t._timer=setTimeout(()=>t.classList.remove('show'),2100)}
function drawAnnotatedCanvas(ctx,p,x,y){const chars=[...p.name],unit=34,w=chars.length*unit+14;ctx.fillStyle='rgba(255,255,255,.94)';ctx.fillRect(x-w/2,y+41,w,52);chars.forEach((char,i)=>{const left=x-w/2+8+i*unit,z=zhuyinParts(ZHUYIN[p.id]?.[i]);ctx.fillStyle='#163a37';ctx.font='bold 18px sans-serif';ctx.fillText(char,left,y+72);ctx.fillStyle='#49615d';ctx.font='14px sans-serif';[...z.base].forEach((symbol,j)=>ctx.fillText(symbol,left+18,y+53+j*11));if(z.tone)ctx.fillText(z.tone,left+29,y+66)})}
async function exportWork(){
  const canvas=$('#exportCanvas'),ctx=canvas.getContext('2d'),bg=new Image();canvas.width=1600;canvas.height=1000;
  bg.src=mapImage.src;await bg.decode();
  ctx.fillStyle='#f8f4e8';ctx.fillRect(0,0,1600,1000);const ratio=Math.max(1600/bg.width,900/bg.height),dw=bg.width*ratio,dh=bg.height*ratio;ctx.drawImage(bg,(1600-dw)/2,80+(900-dh)/2,dw,dh);
  ctx.fillStyle='#146b63';ctx.fillRect(0,0,1600,80);ctx.fillStyle='white';ctx.font='bold 34px sans-serif';ctx.fillText('我的學校附近有什麼？｜蘇澳國小探索地圖',36,51);
  const sheets={};for(const name of [...new Set(items.map(it=>PLACES.find(p=>p.id===it.type)?.sheet).filter(Boolean))]){const img=new Image();img.src=asset(name);await img.decode();sheets[name]=img}items.forEach(it=>{const p=PLACES.find(q=>q.id===it.type);if(!p)return;const sheet=sheets[p.sheet],sw=sheet.width/4,sh=sheet.height/3,x=it.x/100*1600,y=80+it.y/100*900;ctx.drawImage(sheet,p.pos[0]*sw,p.pos[1]*sh,sw,sh,x-54,y-48,108,96);drawAnnotatedCanvas(ctx,p,x,y)});
  ctx.fillStyle='rgba(255,255,255,.93)';ctx.fillRect(22,885,1556,92);ctx.fillStyle='#163a37';ctx.font='bold 21px sans-serif';ctx.fillText(`探索成果：放入 ${items.length} 個地點｜完成 ${items.filter(x=>x.note||x.help).length} 筆觀察紀錄`,42,922);ctx.font='17px sans-serif';ctx.fillText('地圖資訊請配合實地踏查與最新公開資訊確認。',42,953);
  const a=document.createElement('a');a.download='蘇澳國小_我的學校附近探索作品.png';a.href=canvas.toDataURL('image/png');a.click();toast('作品圖片已匯出')
}
$('#exportBtn').addEventListener('click',exportWork);
$('#certificateBtn').addEventListener('click',()=>{if($('#certificateBtn').disabled)return;$('#studentName').value='';$('#certificateDialog').showModal();setTimeout(()=>$('#studentName').focus(),60)});
async function buildMapSnapshot(){
  const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d'),bg=new Image();canvas.width=1200;canvas.height=520;bg.src=mapImage.src;await bg.decode();
  const ratio=Math.max(canvas.width/bg.width,canvas.height/bg.height),dw=bg.width*ratio,dh=bg.height*ratio;ctx.drawImage(bg,(canvas.width-dw)/2,(canvas.height-dh)/2,dw,dh);
  const sheets={};for(const name of [...new Set(items.map(it=>PLACES.find(p=>p.id===it.type)?.sheet).filter(Boolean))]){const img=new Image();img.src=asset(name);await img.decode();sheets[name]=img}
  items.forEach(it=>{const p=PLACES.find(q=>q.id===it.type);if(!p)return;const sheet=sheets[p.sheet],sw=sheet.width/4,sh=sheet.height/3,x=it.x/100*canvas.width,y=it.y/100*canvas.height;ctx.drawImage(sheet,p.pos[0]*sw,p.pos[1]*sh,sw,sh,x-46,y-42,92,82);drawAnnotatedCanvas(ctx,p,x,y)});
  ctx.strokeStyle='#146b63';ctx.lineWidth=8;ctx.strokeRect(4,4,canvas.width-8,canvas.height-8);return canvas
}
async function downloadCertificate(name){
  const canvas=$('#certificateCanvas'),ctx=canvas.getContext('2d'),frame=new Image();canvas.width=1600;canvas.height=1200;frame.src=asset('certificate-frame.png');await frame.decode();ctx.drawImage(frame,0,0,canvas.width,canvas.height);
  ctx.textAlign='center';ctx.fillStyle='#146b63';ctx.font='900 58px "Noto Sans TC","PingFang TC",sans-serif';ctx.fillText('我的學校附近探索證書',800,170);
  ctx.fillStyle='#506964';ctx.font='700 25px "Noto Sans TC","PingFang TC",sans-serif';ctx.fillText('蘇澳國小・小小社區探險家',800,216);
  ctx.fillStyle='#173c38';ctx.font='900 46px "Noto Sans TC","PingFang TC",sans-serif';ctx.fillText(name,800,292);const nameWidth=Math.min(700,Math.max(260,ctx.measureText(name).width+90));ctx.strokeStyle='#e6b62e';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(800-nameWidth/2,310);ctx.lineTo(800+nameWidth/2,310);ctx.stroke();
  const map=await buildMapSnapshot();ctx.fillStyle='white';ctx.shadowColor='rgba(17,70,63,.22)';ctx.shadowBlur=18;ctx.fillRect(204,340,1192,552);ctx.shadowBlur=0;ctx.drawImage(map,225,362,1150,508);
  ctx.fillStyle='#173c38';ctx.font='700 27px "Noto Sans TC","PingFang TC",sans-serif';ctx.fillText(`完成 ${new Set(items.map(x=>x.type)).size} 種地點配置與 ${items.filter(x=>x.note||x.help).length} 筆觀察紀錄`,800,955);
  ctx.font='24px "Noto Sans TC","PingFang TC",sans-serif';ctx.fillText('已完成三項探索任務，展現觀察社區、認識環境與安全思考的能力。',800,1005);
  const date=new Intl.DateTimeFormat('zh-TW',{timeZone:'Asia/Taipei',year:'numeric',month:'long',day:'numeric'}).format(new Date());ctx.fillStyle='#60736f';ctx.font='22px "Noto Sans TC","PingFang TC",sans-serif';ctx.fillText(`完成日期：${date}`,800,1050);
  const a=document.createElement('a'),safeName=name.replace(/[\\/:*?"<>|]/g,'').trim()||'學生';a.download=`${safeName}_蘇澳國小探索證書.png`;a.href=canvas.toDataURL('image/png');a.click();toast('探索證書已下載')
}
$('#certificateForm').addEventListener('submit',async e=>{if(e.submitter?.value==='cancel')return;e.preventDefault();const name=$('#studentName').value.trim();if(!name){$('#studentName').focus();return}const btn=$('#downloadCertificateBtn');btn.disabled=true;btn.textContent='正在製作證書…';try{await downloadCertificate(name);$('#certificateDialog').close()}finally{btn.disabled=false;btn.textContent='下載 PNG 證書'}});
try{items=JSON.parse(localStorage.getItem('suaoMapItems')||'[]');currentMap=localStorage.getItem('suaoMapView')||'campus';if(currentMap==='wide')currentMap='neighborhood';if(currentMap==='close')currentMap='campus'}catch{items=[]}
items=items.filter(it=>PLACES.some(p=>p.id===it.type));applyMap();makePalette();render();
if(!localStorage.getItem('suaoHelpSeen')){setTimeout(()=>$('#helpDialog').showModal(),350);localStorage.setItem('suaoHelpSeen','1')}
