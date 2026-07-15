/* ADL Week 2026 - todo o conteúdo editável fica neste arquivo. */
const STORAGE_KEY = 'adl_week_2026';

const MEMORY_PAIRS = [
  ['João 8:12','Eu sou a luz do mundo'],['Mateus 6:6','Ora em secreto'],
  ['Mateus 5:14','Vós sois a luz do mundo'],['Provérbios 20:27','O espírito do homem é a lâmpada do Senhor'],
  ['Salmo 119:105','Lâmpada para os meus pés é tua palavra'],['Filipenses 4:13','Tudo posso naquele que me fortalece'],
  ['Isaías 60:1','Levanta-te, resplandece'],['Lucas 11:33','Ninguém acende uma lâmpada e a esconde'],
  ['1 João 1:5','Deus é luz e não há nenhuma treva nele'],['Efésios 5:8','Andai como filhos da luz'],
  ['Mateus 25:4','As prudentes tomaram azeite nos seus vasos'],['Daniel 12:3','Os sábios resplandecerão como o fulgor do firmamento'],
  ['Provérbios 13:9','A luz dos justos alegra-se'],['João 1:5','A luz resplandece nas trevas'],
  ['2 Coríntios 4:6','Das trevas resplandecerá a luz'],['Mateus 5:16','Assim brilhe a vossa luz'],
  ['Apocalipse 21:23','A glória de Deus a iluminou'],['Lucas 12:35','Vossas lâmpadas acesas'],
  ['Isaías 9:2','O povo viu uma grande luz'],['Efésios 5:14','Desperta tu que dormes']
];
const WORD_PAIRS = [
  ['Azeite','Símbolo do Espírito Santo'],['Lâmpada','Testemunho e luz'],['Secreto','Lugar de comunhão'],
  ['Vigilância','Estar preparado'],['Luz','Aquilo que vence as trevas'],['Vaso','Aquilo que carrega o azeite'],
  ['Pavio','Parte que sustenta a chama'],['Noivo','Aquele cuja chegada é aguardada'],['Prudência','Sabedoria em ação'],
  ['Chama','Sinal de que há combustível'],['Trevas','Ausência de luz'],['Reserva','Provisão para o futuro']
];
const QUESTIONS = [
  {q:'Em Mateus 25, quantas virgens eram prudentes e quantas eram tolas?',o:['5 prudentes e 5 tolas','3 prudentes e 7 tolas','7 prudentes e 3 tolas','4 prudentes e 6 tolas'],a:0,e:'Mateus 25:2 - Cinco eram tolas e cinco eram prudentes.'},
  {q:'O que as virgens prudentes tinham que as tolas não tinham?',o:['Mais dinheiro','Azeite em reserva nos vasos','Lâmpadas maiores','Mais tempo'],a:1,e:'Mateus 25:4 - As prudentes levaram azeite em seus vasos.'},
  {q:'A cidade edificada sobre um monte não pode ser...',o:['Destruída','Escondida','Movida','Atacada'],a:1,e:'Mateus 5:14 - Não se pode esconder uma cidade edificada sobre um monte.'},
  {q:'Segundo Mateus 6:6, onde Jesus orienta que oremos?',o:['Na sinagoga','No quarto, com a porta fechada','No monte','Na praça'],a:1,e:'Jesus orienta a entrar no quarto e fechar a porta.'},
  {q:'Em qual livro está: “O espírito do homem é a lâmpada do Senhor”?',o:['Salmos','Isaías','Provérbios','Jó'],a:2,e:'A frase está em Provérbios 20:27.'},
  {q:'Complete: “Assim brilhe a vossa luz diante dos homens, para que...”',o:['...vos sigam','...glorifiquem o vosso Pai','...vos temam','...vejam os anjos'],a:1,e:'Mateus 5:16 - para que glorifiquem o Pai que está nos céus.'},
  {q:'Qual é o tema central da parábola das dez virgens?',o:['Generosidade','Vigilância e preparação','Fé e milagres','Perdão'],a:1,e:'A parábola ensina a permanecer preparado e vigilante.'},
  {q:'Segundo Lucas 11:33, onde não se deve esconder a lâmpada?',o:['No quarto','Debaixo do alqueire','No telhado','Perto da porta'],a:1,e:'A lâmpada deve ficar no velador para iluminar.'}
  ,{q:'Quem escreveu “Lâmpada para os meus pés é tua palavra”?',o:['Salomão','Davi, no livro de Salmos','Paulo','Isaías'],a:1,e:'A declaração está no Salmo 119:105.'}
  ,{q:'Na parábola, o que aconteceu quando o noivo demorou?',o:['Todas foram embora','Todas cochilaram e dormiram','As lâmpadas apagaram imediatamente','Começou uma festa'],a:1,e:'Mateus 25:5 diz que todas cochilaram e dormiram.'}
  ,{q:'À meia-noite, qual foi o anúncio ouvido pelas dez virgens?',o:['O azeite acabou','O noivo está chegando','A festa terminou','As portas foram abertas'],a:1,e:'Ouviu-se o grito: Eis o noivo! Saí ao seu encontro.'}
  ,{q:'O que as virgens tolas pediram às prudentes?',o:['Água','Comida','Azeite','Uma nova lâmpada'],a:2,e:'Elas pediram azeite porque suas lâmpadas estavam se apagando.'}
  ,{q:'O que aconteceu com a porta após a entrada das prudentes?',o:['Ficou aberta','Foi fechada','Foi destruída','Desapareceu'],a:1,e:'Mateus 25:10 registra que a porta foi fechada.'}
  ,{q:'Jesus conclui a parábola dizendo para...',o:['Viajar','Vigiar','Dormir','Comprar'],a:1,e:'Vigiai, porque não sabeis o dia nem a hora.'}
  ,{q:'Segundo 1 João 1:5, Deus é...',o:['Fogo','Vento','Luz','Água'],a:2,e:'Deus é luz, e nele não há treva nenhuma.'}
  ,{q:'Em Efésios 5:8, os cristãos são orientados a andar como...',o:['Reis','Filhos da luz','Soldados','Estrangeiros'],a:1,e:'Andai como filhos da luz.'}
  ,{q:'Em Isaías 60:1, qual é a primeira ordem?',o:['Esconde-te','Levanta-te e resplandece','Descansa','Volta para casa'],a:1,e:'Levanta-te, resplandece, porque vem a tua luz.'}
  ,{q:'O que aconteceu com a luz em João 1:5?',o:['Foi apagada','Resplandeceu nas trevas','Ficou escondida','Mudou de cor'],a:1,e:'A luz resplandece nas trevas, e as trevas não prevaleceram.'}
  ,{q:'Onde deve ser colocada uma lâmpada acesa?',o:['Debaixo da cama','No velador','Dentro de uma caixa','Atrás da porta'],a:1,e:'No velador, para que ilumine os que entram.'}
  ,{q:'Na parábola das dez virgens, quantas lâmpadas aparecem?',o:['Cinco','Dez','Quinze','Vinte'],a:1,e:'Cada uma das dez virgens levou a sua lâmpada.'}
];
const RIDDLES = [
  {q:'Quanto mais eu seco, mais molhado fico. O que sou eu?',a:'Uma toalha',h:'Usamos após o banho.'},
  {q:'Tenho cidades, mas não casas; florestas, mas não árvores; rios, mas não água. O que sou?',a:'Um mapa',h:'É uma representação.'},
  {q:'Sou leve como uma pena, mas ninguém consegue me segurar por muito tempo. O que sou?',a:'A respiração (o fôlego)',h:'Todos fazemos o tempo todo.'},
  {q:'Quanto mais você me tira, maior eu fico. O que sou?',a:'Um buraco',h:'Pense no oposto do que a frase sugere.'},
  {q:'Tenho mãos, mas não bato palmas; tenho rosto, mas não sorrio. O que sou?',a:'Um relógio',h:'Pode estar na parede.'},
  {q:'Um pai tem quatro filhos. Cada filho tem uma irmã. Quantos filhos ele tem?',a:'5 filhos',h:'A irmã é a mesma para todos.'},
  {q:'Estou no começo da eternidade, no fim do tempo e do espaço. Quem sou?',a:'A letra E',h:'Pense nas palavras.'},
  {q:'Nasço grande, diminuo com o tempo e entrego luz enquanto existo. O que sou?',a:'Uma vela',h:'Tem tudo a ver com luz.'}
  ,{q:'O que tem muitos dentes, mas não consegue morder?',a:'Um pente',h:'Usamos no cabelo.'}
  ,{q:'O que sobe quando a chuva desce?',a:'O guarda-chuva',h:'É aberto para nos proteger.'}
  ,{q:'O que tem pescoço, mas não tem cabeça?',a:'Uma garrafa',h:'Pode guardar líquidos.'}
  ,{q:'O que passa pela água e não se molha?',a:'A sombra',h:'Depende da luz.'}
  ,{q:'O que tem uma perna só, mas consegue ficar em pé?',a:'Um abajur',h:'Também serve para iluminar.'}
  ,{q:'O que quanto mais cresce, menos se vê?',a:'A escuridão',h:'É o oposto da luz.'}
  ,{q:'Tenho folhas, mas não sou árvore; tenho capa, mas não sou herói. O que sou?',a:'Um livro',h:'Você pode ler.'}
  ,{q:'O que corre, mas nunca anda; tem leito, mas nunca dorme?',a:'Um rio',h:'Leva água até o mar.'}
  ,{q:'Tenho olhos, mas não vejo. Quem sou?',a:'Uma batata',h:'É um alimento que nasce na terra.'}
  ,{q:'O que é seu, mas os outros usam mais do que você?',a:'O seu nome',h:'É como as pessoas chamam você.'}
  ,{q:'O que pode encher uma sala sem ocupar espaço?',a:'A luz',h:'É o tema central do evento.'}
  ,{q:'Qual palavra está sempre escrita incorretamente no dicionário?',a:'Incorretamente',h:'A resposta está na própria pergunta.'}
];

const defaultState = () => ({
  version: 1, started: false, screen: 'scoreboard',
  eventName: 'A Lâmpada e o Azeite - ADL Week 2026',
  closing: 'Só sustentamos no exterior aquilo que cultivamos no secreto.',
  teams: [
    {id:'a',name:'Time A',color:'#3B82F6',initial:0,score:0},
    {id:'b',name:'Time B',color:'#EF4444',initial:0,score:0},
    {id:'c',name:'Time C',color:'#22C55E',initial:0,score:0},
    {id:'d',name:'Time D',color:'#F59E0B',initial:0,score:0}
  ],
  history: [], showBets: false,
  timer: {duration:2400,remaining:2400,running:false,lastTick:null},
  memory: null, quiz: null, auction: null
});

let state = loadState() || defaultState();
let timerHandle = null;
const app = document.querySelector('#app');

function loadState(){ try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch { return null; } }
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function esc(v=''){ return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function shuffle(a){ const x=[...a]; for(let i=x.length-1;i;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];} return x; }
function toast(msg){ const el=document.querySelector('#toast'); el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),2600); }
function team(id){ return state.teams.find(t=>t.id===id); }
function formatTime(s){ s=Math.max(0,Math.round(s)); return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`; }
function sortTeams(){ return [...state.teams].sort((a,b)=>b.score-a.score || a.name.localeCompare(b.name)); }
function responseOrder(start=0){ return state.teams.map((_,i)=>state.teams[(i+start)%state.teams.length]); }
function ordinalRank(t){ const ranked=sortTeams(), scores=[...new Set(ranked.map(x=>x.score))]; const p=scores.indexOf(t.score)+1; return ranked.filter(x=>x.score===t.score).length>1?'Empate':`${p}º lugar`; }
function awardRow(label, deltas, description=''){
  state.teams.forEach(t=>t.score=Math.max(0,t.score+(deltas[t.id]||0)));
  state.history.push({label,deltas,description,at:new Date().toISOString()}); save();
}
function historyFor(id,label){ return state.history.filter(h=>h.label===label).reduce((s,h)=>s+(h.deltas[id]||0),0); }

function render(){
  if(!state.started){ renderSetup(); return; }
  const page = state.screen==='scoreboard'?scoreboard():state.screen==='memory'?memoryPage():state.screen==='quiz'?quizPage():state.screen==='auction'?auctionPage():finalPage();
  app.innerHTML = state.screen==='final'?page:`<div class="shell">${header()}${page}</div>`;
  bindCommon(); save();
}
function header(){
  const nav=[['scoreboard','Placar'],['memory','Memória'],['quiz','Quiz'],['auction','Leilão'],['final','Encerramento']];
  return `<header class="topbar"><div class="brand"><strong>${esc(state.eventName)}</strong><small>Central do operador</small></div><div class="mini-scores">${state.teams.map(t=>`<div class="mini" style="--team:${t.color}"><span>${esc(t.name)}</span><b>${t.score} pts</b></div>`).join('')}</div><div class="timer"><span id="timer" class="timer-display ${state.timer.remaining<=60?'urgent':''}">${formatTime(state.timer.remaining)}</span><button class="btn small" data-timer="toggle">${state.timer.running?'Pausar':'Iniciar'}</button><button class="btn small ghost" data-timer="reset">↺</button></div></header><nav class="menu">${nav.map(([id,n])=>`<button data-nav="${id}" class="${state.screen===id?'active':''}">${n}</button>`).join('')}<button data-action="restart">Reiniciar evento</button></nav>`;
}
function bindCommon(){
  document.querySelectorAll('[data-nav]').forEach(b=>b.onclick=()=>{state.screen=b.dataset.nav;render();});
  document.querySelector('[data-action="restart"]')?.addEventListener('click',confirmRestart);
  document.querySelectorAll('[data-timer]').forEach(b=>b.onclick=()=>timerAction(b.dataset.timer));
}
function renderSetup(){
  const resumed=!!loadState()?.started;
  app.innerHTML=`<main class="setup"><section class="setup-card"><div class="setup-title"><div class="lamp">🪔</div><p class="eyebrow">ADL Week 2026</p><h1>Prepare a competição</h1><p class="subtitle">Defina os times e a pontuação trazida da mineração.</p></div>${resumed?`<div class="panel notice spaced"><b>Há uma sessão anterior salva.</b><div class="actions spaced"><button id="continue" class="btn primary">Continuar sessão</button><button id="discard" class="btn ghost">Configurar novo evento</button></div></div>`:''}<form id="setup-form"><div class="grid two">${state.teams.map((t,i)=>`<div class="panel team-setup" style="--team:${t.color}"><h2>Time ${String.fromCharCode(65+i)}</h2><div class="form-row"><label>Nome<input name="name-${t.id}" value="${esc(t.name)}" required></label><label>Cor<input name="color-${t.id}" type="color" value="${t.color}"></label><label>Pontos iniciais<input name="score-${t.id}" type="number" min="0" step="1" value="${t.initial}"></label></div></div>`).join('')}</div><div class="panel setup-options"><label>Tempo total (minutos)<input name="minutes" type="number" min="1" max="180" value="${state.timer.duration/60}"></label><label>Mensagem de encerramento<input name="closing" value="${esc(state.closing)}"></label><label class="check"><input name="showBets" type="checkbox" ${state.showBets?'checked':''}> Mostrar apostas enquanto são digitadas</label></div><div class="center"><button class="btn primary" type="submit">Iniciar evento →</button></div></form></section></main>`;
  document.querySelector('#continue')?.addEventListener('click',()=>{state=loadState();render();});
  document.querySelector('#discard')?.addEventListener('click',()=>{state=defaultState();render();});
  document.querySelector('#setup-form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);state.teams.forEach(t=>{t.name=f.get(`name-${t.id}`).trim();t.color=f.get(`color-${t.id}`);t.initial=Math.max(0,Number(f.get(`score-${t.id}`))||0);t.score=t.initial;});state.closing=f.get('closing').trim()||defaultState().closing;state.showBets=!!f.get('showBets');state.timer.duration=Math.max(60,Number(f.get('minutes'))*60||2400);state.timer.remaining=state.timer.duration;state.started=true;state.screen='scoreboard';save();render();};
}

function scoreboard(){
  const ranked=sortTeams(), lead=Math.max(1,...ranked.map(t=>t.score));
  return `<main class="page"><div class="page-head"><div><p class="eyebrow">Visão geral</p><h1>Placar da disputa</h1><p class="subtitle">Acompanhe cada ponto e escolha a próxima dinâmica.</p></div><div class="actions"><button class="btn" id="copy-partial">Copiar parcial</button><button class="btn" id="manual">Ajuste manual</button></div></div><section class="grid score-grid">${ranked.map(t=>`<article class="panel score-card" style="--team:${t.color};--progress:${Math.max(4,t.score/lead*100)}%"><span class="rank">${ordinalRank(t)}</span><h2>${esc(t.name)}</h2><div class="score">${t.score}<small> pts</small></div><div class="progress"><i></i></div></article>`).join('')}</section><section class="panel spaced"><h2>Histórico de rodadas</h2><div style="overflow:auto"><table><thead><tr><th>Time</th><th>Inicial</th><th>Memória</th><th>Quiz</th><th>Leilão</th><th>Ajustes</th><th>Total</th></tr></thead><tbody>${state.teams.map(t=>`<tr><td style="color:${t.color}"><strong>${esc(t.name)}</strong></td><td>${t.initial}</td><td>${signed(historyFor(t.id,'Memória'))}</td><td>${signed(historyFor(t.id,'Quiz'))}</td><td>${signed(historyFor(t.id,'Leilão'))}</td><td>${signed(historyFor(t.id,'Ajuste'))}</td><td><strong>${t.score}</strong></td></tr>`).join('')}</tbody></table></div></section><section class="panel"><h2>Próximo passo</h2><p class="muted">Escolha uma dinâmica. Você pode voltar ao placar a qualquer momento.</p><div class="actions"><button class="btn primary" data-go="memory">Super Jogo da Memória</button><button class="btn" data-go="quiz">Quiz de Apostas</button><button class="btn" data-go="auction">Leilão de Enigmas</button><button class="btn success" data-go="final">Encerramento</button></div></section></main>`;
}
function signed(n){ return n>0?`+${n}`:String(n); }
function bindScoreboard(){
  document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{state.screen=b.dataset.go;render();});
  document.querySelector('#copy-partial').onclick=()=>copyText(partialText());
  document.querySelector('#manual').onclick=manualModal;
}
function partialText(final=false){ const icons=['🥇','🥈','🥉','4️⃣']; return `${final?'🏆 RESULTADO FINAL':'📊 PARCIAL'} - ADL Week 2026\n`+sortTeams().map((t,i)=>`${icons[i]} ${t.name}: ${t.score} pts`).join('\n'); }
function copyText(text){ navigator.clipboard?.writeText(text).then(()=>toast('Texto copiado!')).catch(()=>{prompt('Copie o texto:',text);}); }
function manualModal(){
  showModal(`<h2>Ajuste manual</h2><p class="muted">Use valores positivos para bônus e negativos para correções.</p><form id="manual-form" class="grid">${state.teams.map(t=>`<label style="color:${t.color}">${esc(t.name)}<input name="${t.id}" type="number" step="1" value="0"></label>`).join('')}<label>Descrição<input name="description" placeholder="Ex.: bônus de participação"></label><div class="actions"><button class="btn primary">Aplicar</button><button type="button" class="btn ghost" data-close>Cancelar</button></div></form>`);
  document.querySelector('#manual-form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target),d={};state.teams.forEach(t=>d[t.id]=Number(f.get(t.id))||0);awardRow('Ajuste',d,f.get('description'));closeModal();render();toast('Ajuste registrado');};
}

function initMemory(){
  const count=20, pairs=MEMORY_PAIRS.slice(0,count);
  const cards=shuffle(pairs.flatMap((p,i)=>p.map((text,side)=>({id:`${i}-${side}`,pair:i,text,open:false,matched:false}))));
  state.memory={status:'playing',theme:'verses',count,cards,turn:0,selected:[],pairs:[0,0,0,0],moves:[],awards:null,confirmed:false}; save();
}
function memoryPage(){
  const m=state.memory;
  if(!m) return `<main class="page"><div class="page-head"><div><p class="eyebrow">Dinâmica 1</p><h1>Super Jogo da Memória</h1><p class="subtitle">Encontre pares temáticos. Acertou? O time joga novamente.</p></div></div><section class="panel"><h2>Configuração</h2><div class="grid two"><label>Número de pares<select id="memory-count">${[8,12,16,20].map(n=>`<option ${n===20?'selected':''}>${n}</option>`).join('')}</select></label><label>Tema<select id="memory-theme"><option value="verses">Versículos</option><option value="words">Palavras e definições</option><option value="numbers">Números</option></select></label></div><p class="notice spaced">A ordem será ${state.teams.map(t=>esc(t.name)).join(' → ')}. Em caso de empate, os pontos das posições serão divididos igualmente.</p><button id="start-memory" class="btn primary spaced">Iniciar jogo</button></section></main>`;
  if(m.status==='result') return resultPage('Memória','Resultado do jogo',m.awards,m.confirmed,'confirm-memory',[],'memory','quiz');
  const t=state.teams[m.turn];
  return `<main class="page"><div class="page-head"><div><p class="eyebrow">Dinâmica 1</p><h1>Jogo da Memória</h1></div><div class="actions"><button id="undo-memory" class="btn">Desfazer jogada</button><button id="finish-memory" class="btn danger">Encerrar agora</button></div></div><div class="turn-banner" style="--team:${t.color}">Vez de ${esc(t.name)}</div><div class="grid pairs">${state.teams.map((x,i)=>`<div class="pair-score" style="--team:${x.color}">${esc(x.name)} <b>${m.pairs[i]} pares</b></div>`).join('')}</div><section class="memory-grid">${m.cards.map((c,i)=>`<button class="memory-card ${c.open?'open':''} ${c.matched?'matched':''}" data-card="${i}" ${c.matched||c.open||m.selected.length>=2?'disabled':''}><span>${esc(c.text)}</span></button>`).join('')}</section></main>`;
}
function bindMemory(){
  document.querySelector('#start-memory')?.addEventListener('click',()=>{const count=Number(document.querySelector('#memory-count').value),theme=document.querySelector('#memory-theme').value;let pairs=theme==='words'?WORD_PAIRS:theme==='numbers'?Array.from({length:20},(_,i)=>[String(i+1),String(i+1)]):MEMORY_PAIRS;pairs=pairs.slice(0,Math.min(count,pairs.length));state.memory={status:'playing',theme,count:pairs.length,cards:shuffle(pairs.flatMap((p,i)=>p.map((text,side)=>({id:`${i}-${side}`,pair:i,text,open:false,matched:false})))),turn:0,selected:[],pairs:[0,0,0,0],moves:[],awards:null,confirmed:false};save();render();});
  document.querySelectorAll('[data-card]').forEach(b=>b.onclick=()=>flipCard(Number(b.dataset.card)));
  document.querySelector('#undo-memory')?.addEventListener('click',undoMemory);
  document.querySelector('#finish-memory')?.addEventListener('click',finishMemory);
  document.querySelector('#confirm-memory')?.addEventListener('click',()=>confirmGame('memory','Memória'));
  bindResultNavigation();
}
function flipCard(i){ const m=state.memory,c=m.cards[i]; if(c.open||c.matched||m.selected.length>=2)return;m.moves.push(JSON.stringify({cards:m.cards,pairs:m.pairs,turn:m.turn,selected:m.selected}));c.open=true;m.selected.push(i);save();render();if(m.selected.length===2)setTimeout(resolveMemory,650); }
function resolveMemory(){const m=state.memory;if(!m||m.selected.length!==2)return;const [a,b]=m.selected.map(i=>m.cards[i]);if(a.pair===b.pair){a.matched=b.matched=true;m.pairs[m.turn]++;}else{a.open=b.open=false;m.turn=(m.turn+1)%4;}m.selected=[];if(m.cards.every(c=>c.matched))finishMemory();else{save();render();}}
function undoMemory(){const m=state.memory,last=m.moves.pop();if(!last){toast('Nenhuma jogada para desfazer');return;}const x=JSON.parse(last);Object.assign(m,x);save();render();}
function rankAwards(values,points=[60,40,20,0]){const indices=values.map((v,i)=>i).sort((a,b)=>values[b]-values[a]);const awards=[0,0,0,0];let p=0;while(p<indices.length){let q=p+1;while(q<indices.length&&values[indices[q]]===values[indices[p]])q++;const avg=Math.round(points.slice(p,q).reduce((a,b)=>a+b,0)/(q-p));for(let k=p;k<q;k++)awards[indices[k]]=avg;p=q;}return Object.fromEntries(state.teams.map((t,i)=>[t.id,awards[i]]));}
function finishMemory(){const m=state.memory;if(!m)return;m.status='result';m.awards=rankAwards(m.pairs);save();render();}

function initQuiz(){ const selected=shuffle(QUESTIONS); state.quiz={status:'bet',index:0,questions:selected,bets:{},answers:{},results:[],locked:false,confirmed:false,awards:null}; save(); }
function quizPage(){const qz=state.quiz;if(!qz)return introGame('Dinâmica 2','Quiz de Apostas','Vinte perguntas em sequência. Acertou: ganha 2× a aposta. Errou: perde.','start-quiz');if(qz.status==='result')return resultPage('Quiz','Resultado do quiz',qz.awards,qz.confirmed,'confirm-quiz',qz.results,'quiz','auction');const q=qz.questions[qz.index],order=responseOrder(qz.index),total=qz.questions.length;if(qz.status==='bet')return `<main class="page"><p class="eyebrow">Pergunta ${qz.index+1} de ${total} · Fase de aposta</p><h1 class="question">${esc(q.q)}</h1><p class="notice">Ordem desta rodada: ${order.map(t=>esc(t.name)).join(' → ')}. Registre apostas em múltiplos de 10.</p><section class="grid bet-grid spaced">${order.map(t=>`<div class="panel bet-card" style="--team:${t.color}"><h2>${esc(t.name)}</h2>${t.score===0?`<div class="hidden-bet">Sem pontos</div>`:`<label>Aposta<input data-bet="${t.id}" type="number" min="10" max="${t.score}" step="10" value="${qz.bets[t.id]||10}"></label><div class="${state.showBets?'bet-value':'hidden-bet'}">${state.showBets?`${qz.bets[t.id]||10} pts`:'Aposta oculta'}</div>`}</div>`).join('')}</section><button id="lock-bets" class="btn primary spaced">Travar apostas e mostrar opções</button></main>`;return `<main class="page"><p class="eyebrow">Pergunta ${qz.index+1} de ${total} · Resposta</p><h1 class="question">${esc(q.q)}</h1><p class="notice">Responde primeiro: <b style="color:${order[0].color}">${esc(order[0].name)}</b>. Depois: ${order.slice(1).map(t=>esc(t.name)).join(' → ')}.</p><section class="options">${q.o.map((o,i)=>`<button class="option ${qz.revealed?(i===q.a?'correct':'wrong'):''}" data-option="${i}" ${qz.revealed?'disabled':''}><b>${'ABCD'[i]}.</b> ${esc(o)}</button>`).join('')}</section>${qz.revealed?`<section class="panel spaced"><h2 class="success-text">Resposta: ${'ABCD'[q.a]}</h2><p>${esc(q.e)}</p><div class="grid bet-grid">${order.map(t=>`<label style="color:${t.color}">${esc(t.name)} respondeu<select data-answer="${t.id}"><option value="correct">Corretamente</option><option value="wrong">Errado</option></select></label>`).join('')}</div><button id="apply-answer" class="btn primary spaced">Aplicar resultado</button></section>`:'<p class="muted spaced">Clique na alternativa correta para revelar.</p>'}</main>`;}
function introGame(eye,title,text,id){return `<main class="page"><div class="page-head"><div><p class="eyebrow">${eye}</p><h1>${title}</h1><p class="subtitle">${text}</p></div></div><section class="panel"><h2>Pronto para começar?</h2><p class="notice">O estado será salvo automaticamente a cada etapa.</p><button id="${id}" class="btn primary spaced">Iniciar dinâmica</button></section></main>`;}
function bindQuiz(){
  document.querySelector('#start-quiz')?.addEventListener('click',()=>{initQuiz();render();});
  document.querySelectorAll('[data-bet]').forEach(i=>i.oninput=()=>{state.quiz.bets[i.dataset.bet]=validWager(i.value,team(i.dataset.bet).score);i.value=state.quiz.bets[i.dataset.bet];save();if(state.showBets)render();});
  document.querySelector('#lock-bets')?.addEventListener('click',()=>{for(const t of state.teams)state.quiz.bets[t.id]=t.score===0?0:validWager(state.quiz.bets[t.id]||10,t.score);state.quiz.status='answer';save();render();});
  document.querySelectorAll('[data-option]').forEach(b=>b.onclick=()=>{state.quiz.revealed=true;save();render();});
  document.querySelector('#apply-answer')?.addEventListener('click',applyQuizAnswer);
  document.querySelector('#confirm-quiz')?.addEventListener('click',()=>confirmGame('quiz','Quiz'));
  bindResultNavigation();
}
function validWager(v,max){if(max<=0)return 0;return Math.min(max,Math.max(10,Math.floor((Number(v)||10)/10)*10));}
function applyQuizAnswer(){const qz=state.quiz,deltas={};state.teams.forEach(t=>{const correct=document.querySelector(`[data-answer="${t.id}"]`).value==='correct',bet=qz.bets[t.id]||0;deltas[t.id]=correct?bet*2:-bet;});qz.results.push({label:`Pergunta ${qz.index+1}`,deltas});if(qz.index>=qz.questions.length-1){qz.status='result';qz.awards=state.teams.reduce((o,t)=>(o[t.id]=qz.results.reduce((s,r)=>s+(r.deltas[t.id]||0),0),o),{});}else{qz.index++;qz.status='bet';qz.bets={};qz.revealed=false;}save();render();}

function initAuction(){state.auction={status:'bid',index:0,riddles:shuffle(RIDDLES),bids:{},results:[],order:[],attempt:0,revealed:false,confirmed:false,awards:null};save();}
function auctionPage(){const a=state.auction;if(!a)return introGame('Dinâmica 3','Leilão de Enigmas','Vinte charadas em sequência. Dê lances pelo direito de responder.','start-auction');if(a.status==='result')return resultPage('Leilão','Resultado do leilão',a.awards,a.confirmed,'confirm-auction',a.results,'auction','final');const r=a.riddles[a.index],total=a.riddles.length;if(a.status==='bid')return `<main class="page"><p class="eyebrow">Enigma ${a.index+1} de ${total} · Fase de lances</p><div class="riddle">${esc(r.q)}</div><section class="grid bet-grid spaced">${state.teams.map(t=>`<div class="panel bet-card" style="--team:${t.color}"><h2>${esc(t.name)}</h2>${t.score===0?'<div class="hidden-bet">Sem pontos</div>':`<label>Lance<input data-bid="${t.id}" type="number" min="10" max="${t.score}" step="10" value="${a.bids[t.id]||10}"></label>`}</div>`).join('')}</section><button id="lock-bids" class="btn primary spaced">Encerrar lances</button></main>`;const current=state.teams[a.order[a.attempt]];return `<main class="page"><p class="eyebrow">Enigma ${a.index+1} de ${total} · Fase de resposta</p><div class="riddle">${esc(r.q)}</div><div class="bid-order">${a.order.map((idx,i)=>`<div class="bid-row" style="--team:${state.teams[idx].color};opacity:${i<a.attempt?.45:1}"><b>${i+1}. ${esc(state.teams[idx].name)}</b><span>${a.bids[state.teams[idx].id]} pts</span></div>`).join('')}</div>${current?`<section class="panel center"><p class="eyebrow">Direito de resposta</p><h1 style="color:${current.color}">${esc(current.name)}</h1>${a.revealed?`<p class="question">${esc(r.a)}</p>`:`<button id="hint" class="btn ghost">Mostrar dica</button><button id="reveal-riddle" class="btn">Revelar resposta</button>`}<p id="hint-text" class="muted"></p><div class="actions" style="justify-content:center"><button id="correct-riddle" class="btn success">Correto</button><button id="wrong-riddle" class="btn danger">Errado</button><button id="pass-riddle" class="btn ghost">Desistiu</button></div></section>`:`<section class="panel center"><h2>Enigma cancelado</h2><button id="next-riddle" class="btn primary">Próximo</button></section>`}</main>`;}
function bindAuction(){
  document.querySelector('#start-auction')?.addEventListener('click',()=>{initAuction();render();});
  document.querySelectorAll('[data-bid]').forEach(i=>i.onchange=()=>{state.auction.bids[i.dataset.bid]=validWager(i.value,team(i.dataset.bid).score);i.value=state.auction.bids[i.dataset.bid];save();});
  document.querySelector('#lock-bids')?.addEventListener('click',()=>{const a=state.auction;state.teams.forEach(t=>a.bids[t.id]=t.score?validWager(a.bids[t.id]||10,t.score):0);a.order=state.teams.map((_,i)=>i).filter(i=>a.bids[state.teams[i].id]>0).sort((i,j)=>a.bids[state.teams[j].id]-a.bids[state.teams[i].id]);a.status='answer';a.attempt=0;save();render();});
  document.querySelector('#hint')?.addEventListener('click',()=>document.querySelector('#hint-text').textContent=state.auction.riddles[state.auction.index].h);
  document.querySelector('#reveal-riddle')?.addEventListener('click',()=>{state.auction.revealed=true;save();render();});
  document.querySelector('#correct-riddle')?.addEventListener('click',()=>resolveRiddle('correct'));
  document.querySelector('#wrong-riddle')?.addEventListener('click',()=>resolveRiddle('wrong'));
  document.querySelector('#pass-riddle')?.addEventListener('click',()=>resolveRiddle('pass'));
  document.querySelector('#next-riddle')?.addEventListener('click',nextRiddle);
  document.querySelector('#confirm-auction')?.addEventListener('click',()=>confirmGame('auction','Leilão'));
  bindResultNavigation();
}
function resolveRiddle(result){const a=state.auction,idx=a.order[a.attempt],t=state.teams[idx],bet=a.bids[t.id],d={a:0,b:0,c:0,d:0};if(result==='correct'){d[t.id]=bet;a.results.push({label:`Enigma ${a.index+1}`,deltas:d});nextRiddle();return;}if(result==='wrong'){d[t.id]=-bet;a.results.push({label:`Enigma ${a.index+1} - tentativa`,deltas:d});}a.attempt++;a.revealed=false;if(a.attempt>=a.order.length)nextRiddle();else{save();render();}}
function nextRiddle(){const a=state.auction;if(a.index>=a.riddles.length-1){a.status='result';a.awards=state.teams.reduce((o,t)=>(o[t.id]=a.results.reduce((s,r)=>s+(r.deltas[t.id]||0),0),o),{});}else{a.index++;a.status='bid';a.bids={};a.order=[];a.attempt=0;a.revealed=false;}save();render();}

function resultPage(game,title,awards,confirmed,id,rows=[],replayKey='',nextScreen=''){return `<main class="page"><p class="eyebrow">${game} · Resultado</p><h1>${title}</h1><section class="grid score-grid">${state.teams.map(t=>`<div class="panel score-card" style="--team:${t.color}"><h2>${esc(t.name)}</h2><div class="score">${signed(awards[t.id]||0)}<small> pts</small></div></div>`).join('')}</section>${rows.length?`<section class="panel spaced"><h2>Detalhamento</h2><table><thead><tr><th>Etapa</th>${state.teams.map(t=>`<th>${esc(t.name)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(r.label)}</td>${state.teams.map(t=>`<td>${signed(r.deltas[t.id]||0)}</td>`).join('')}</tr>`).join('')}</tbody></table></section>`:''}<section class="panel center"><p>${confirmed?'Resultado já adicionado ao placar. Você pode jogar novamente sem duplicar os pontos anteriores.':'Revise o resultado antes de confirmar.'}</p><div class="actions" style="justify-content:center"><button id="${id}" class="btn primary" ${confirmed?'disabled':''}>${confirmed?'Adicionado ao placar':'Confirmar e adicionar ao placar'}</button>${replayKey?`<button class="btn" data-replay="${replayKey}">Jogar novamente</button>`:''}${nextScreen?`<button class="btn success" data-next="${nextScreen}">Seguir para ${nextScreen==='quiz'?'Quiz':nextScreen==='auction'?'Leilão':'Encerramento'} →</button>`:''}<button class="btn ghost" data-nav="scoreboard">Voltar ao placar</button></div></section></main>`;}
function bindResultNavigation(){document.querySelectorAll('[data-replay]').forEach(b=>b.onclick=()=>{state[b.dataset.replay]=null;save();render();});document.querySelectorAll('[data-next]').forEach(b=>b.onclick=()=>{state.screen=b.dataset.next;save();render();});}
function confirmGame(key,label){const g=state[key];if(g.confirmed)return;awardRow(label,g.awards);g.confirmed=true;state.screen='scoreboard';save();render();toast('Resultado adicionado ao placar');}

function finalPage(){const ranked=sortTeams(),positions=['first','second','third'],medals=['🥇','🥈','🥉'];return `<main class="final page"><div class="center"><p class="eyebrow">ADL Week 2026</p><h1>Uma chama permaneceu acesa</h1><p class="final-quote">“${esc(state.closing)}”</p></div><section class="podium">${ranked.slice(0,3).map((t,i)=>`<div class="podium-place ${positions[i]}" style="--team:${t.color}"><span class="medal">${medals[i]}</span><b>${esc(t.name)}</b><strong>${t.score} pts</strong></div>`).join('')}</section><section class="panel"><table><thead><tr><th>Posição</th><th>Time</th><th>Inicial</th><th>Memória</th><th>Quiz</th><th>Leilão</th><th>Total</th></tr></thead><tbody>${ranked.map((t,i)=>`<tr><td>${ordinalRank(t)}</td><td style="color:${t.color}"><strong>${esc(t.name)}</strong></td><td>${t.initial}</td><td>${signed(historyFor(t.id,'Memória'))}</td><td>${signed(historyFor(t.id,'Quiz'))}</td><td>${signed(historyFor(t.id,'Leilão'))}</td><td><strong>${t.score}</strong></td></tr>`).join('')}</tbody></table><div class="actions spaced" style="justify-content:center"><button id="copy-final" class="btn primary">Copiar resultado para WhatsApp</button><button class="btn ghost" data-nav="scoreboard">Voltar ao placar</button></div></section></main>`;}
function bindFinal(){document.querySelector('#copy-final')?.addEventListener('click',()=>copyText(partialText(true)));document.querySelector('[data-nav="scoreboard"]')?.addEventListener('click',()=>{state.screen='scoreboard';render();});}

function showModal(html){document.querySelector('#modal-root').innerHTML=`<div class="modal-backdrop"><div class="modal panel">${html}</div></div>`;document.querySelectorAll('[data-close]').forEach(b=>b.onclick=closeModal);}
function closeModal(){document.querySelector('#modal-root').innerHTML='';}
function confirmRestart(){showModal(`<h2>Reiniciar evento?</h2><p class="danger-text">Todo o placar e o progresso das dinâmicas serão apagados.</p><div class="actions"><button id="really-restart" class="btn danger">Apagar e reiniciar</button><button class="btn ghost" data-close>Cancelar</button></div>`);document.querySelector('#really-restart').onclick=()=>{localStorage.removeItem(STORAGE_KEY);state=defaultState();closeModal();render();};}
function timerAction(action){if(action==='toggle'){state.timer.running=!state.timer.running;state.timer.lastTick=Date.now();}else{state.timer.running=false;state.timer.remaining=state.timer.duration;}save();render();}
function tick(){if(state.started&&state.timer.running){const now=Date.now(),elapsed=Math.floor((now-(state.timer.lastTick||now))/1000);if(elapsed>0){state.timer.remaining=Math.max(0,state.timer.remaining-elapsed);state.timer.lastTick=now;if(state.timer.remaining===0)state.timer.running=false;save();const el=document.querySelector('#timer');if(el){el.textContent=formatTime(state.timer.remaining);el.classList.toggle('urgent',state.timer.remaining<=60);}if(state.timer.remaining===0)toast('Tempo encerrado! O operador pode continuar.');}}}
setInterval(tick,500);

document.addEventListener('click',e=>{
  if(state.screen==='scoreboard'&&e.target.closest('#copy-partial,#manual,[data-go]'))setTimeout(bindScoreboard);
});
const originalRender=render;
render=function(){originalRender(); if(!state.started)return; if(state.screen==='scoreboard')bindScoreboard();if(state.screen==='memory')bindMemory();if(state.screen==='quiz')bindQuiz();if(state.screen==='auction')bindAuction();if(state.screen==='final')bindFinal();};

if(loadState()?.started){
  const saved=loadState();
  state=defaultState(); state.started=false;
  app.innerHTML='';
  state=saved;
  showModal(`<h2>Continuar sessão anterior?</h2><p>Encontramos um evento em andamento com o placar salvo.</p><div class="actions"><button id="resume-session" class="btn primary">Continuar</button><button id="new-session" class="btn danger">Reiniciar</button></div>`);
  document.querySelector('#resume-session').onclick=()=>{closeModal();render();};
  document.querySelector('#new-session').onclick=()=>{localStorage.removeItem(STORAGE_KEY);state=defaultState();closeModal();render();};
} else render();
