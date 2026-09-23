const papers = {
  con: {
    title: 'Con(ZFC)：ZFC 的一致性', kind: '独立于 ZFC（若 ZFC 一致）',
    people: 'Kurt Gödel · 1931',
    story: '第二不完备性定理表明，足以表达算术且一致的 ZFC 不能证明自身的一致性。于是“存在 ZFC 模型”构成强三线的一种自然例子；此处说的是一般的一阶模型，不额外要求传递性。',
    sources: [['Gödel 1931 · DOI', 'https://doi.org/10.1007/BF01700692']]
  },
  ac: {
    title: '选择公理 AC', kind: '相对于 ZF 独立',
    people: 'Kurt Gödel · 1938；Paul Cohen · 1963–1964',
    story: 'Gödel 用可构造宇宙 L 给出 AC 与 ZF 相容的一侧；Cohen 的力迫及对称模型给出 AC 可以失败的一侧。ZF 与 ZFC 在一致性强度上相同，不能把“添加 AC”画成严格增强。',
    sources: [['Gödel 1938 · DOI', 'https://doi.org/10.1073/pnas.24.12.556'], ['Cohen 1963 · DOI', 'https://doi.org/10.1073/pnas.50.6.1143']]
  },
  ch: {
    title: '连续统假设 CH', kind: '相对于 ZFC 独立',
    people: 'Kurt Gödel · 1938；Paul Cohen · 1963',
    story: 'Gödel 证明 L 满足 GCH，因此 CH 与 ZFC 相容；Cohen 发明力迫，构造满足 ¬CH 的 ZFC 模型。单纯提高大基数强度通常也不会自动判定 CH。',
    sources: [['Gödel 1938 · DOI', 'https://doi.org/10.1073/pnas.24.12.556'], ['Cohen 1963 · DOI', 'https://doi.org/10.1073/pnas.50.6.1143']]
  },
  whitehead: {
    title: 'Whitehead 问题', kind: '相对于 ZFC 独立',
    people: 'Saharon Shelah · 1973–1974',
    story: '问题问：满足 Ext(A, ℤ)=0 的阿贝尔群是否必为自由群？Shelah 给出不同的集合论模型，使答案一真一假。这是独立性进入经典代数的代表案例。',
    sources: [['Shelah 1974 · DOI', 'https://doi.org/10.1007/BF02757281']]
  },
  lm: {
    title: '每个实数集都 Lebesgue 可测', kind: 'ZF + DC 下与不可达基数等一致',
    people: 'Robert Solovay · 1970；Saharon Shelah · 1984',
    story: 'Solovay 从不可达基数出发构造 ZF + DC 模型，其中每个实数集都可测；Shelah 证明不可达基数所提供的一致性强度不可省去。此命题与完整 AC 冲突，因此它处于 ZF + DC 分支。',
    sources: [['Solovay 1970 · DOI', 'https://doi.org/10.2307/1970696'], ['Shelah 1984 · DOI', 'https://doi.org/10.1007/BF02760522']]
  },
  tp: {
    title: 'ℵ₂ 的树性质', kind: '相对于 ZFC 独立；弱紧致基数给出相容性上界',
    people: 'William J. Mitchell · 1972',
    story: '树性质说每棵高度为 ℵ₂、各层小于 ℵ₂ 的树都有共尾分支。Mitchell 从弱紧致基数出发，经力迫得到 ℵ₂ 具有树性质的模型；在其他 ZFC 模型中存在 ℵ₂-Aronszajn 树。这里是模型构造，不是“弱紧致基数直接推出 ℵ₂ 树性质”。',
    sources: [['Mitchell 1972 · DOI', 'https://doi.org/10.1016/0003-4843(72)90017-4']]
  },
  vl: {
    title: 'V = L（所有集合都可构造）', kind: '相对于 ZFC 独立；可测基数判定其否定',
    people: 'Kurt Gödel · 1938；Dana Scott · 1961',
    story: 'Gödel 的 L 是 ZFC 的内模型；Scott 证明可测基数不可能存在于 L。因此 ZFC + “存在可测基数”直接推出 V ≠ L。此例展示大基数公理确实可以判定某些经典命题。',
    sources: [['Gödel 1938 · DOI', 'https://doi.org/10.1073/pnas.24.12.556'], ['Scott 原文', 'https://github.com/CMU-HoTT/scott/blob/main/pdfs/1961-measurable-cardinals-and-constructible-sets.pdf']]
  },
  pd: {
    title: '投射决定性 PD', kind: 'ZFC 中不能证明；由适当 Woodin 基数假设推出',
    people: 'Donald A. Martin、John R. Steel · 1988–1989',
    story: 'Martin 与 Steel 用迭代树证明：足够多的 Woodin 基数（常用表述为 ω 个 Woodin 基数且上方有可测基数）推出每个投射集合对应的无限博弈可决定。由此得到投射实数集的多种正则性。单个 Woodin 基数不足以在此处标作 PD 的充分假设。',
    sources: [['Martin–Steel 1989 · DOI', 'https://doi.org/10.1090/S0894-0347-1989-0955605-X']]
  },
  pfa: {
    title: '适当力迫公理 PFA', kind: '相对于 ZFC 独立；超紧致基数给出相容性上界',
    people: 'James E. Baumgartner · 1980 年代；1984 年发表',
    story: 'Baumgartner 利用超紧致基数作适当力迫迭代，构造满足 PFA 的模型。PFA 蕴含 ¬CH，并能解决许多 ℵ₁ 组合问题。标注“从超紧致出发可构造 PFA 模型”比写成“超紧致直接推出 PFA”准确。',
    sources: [['Baumgartner 1984 · DOI', 'https://doi.org/10.1016/B978-0-444-86580-9.50024-0']]
  },
  suslin: {
    title: 'Souslin 假设', kind: '相对于 ZFC 独立',
    people: 'Stanley Tennenbaum · 1960 年代；Robert Solovay、Tennenbaum · 1971',
    story: '问题问是否存在非标准的 Souslin 直线。Tennenbaum 构造存在侧模型；Solovay 与 Tennenbaum 用迭代力迫构造不存在侧模型，并发展了此类迭代技术。PFA 也判定 Souslin 假设为真。',
    sources: [['Solovay–Tennenbaum 1971 · DOI', 'https://doi.org/10.2307/1970860']]
  }
};

const tiers = [
  {name:'三线', code:'TIER 01', summary:'以 ZF / ZFC 为基础，区分“能表述不可数对象”和“增加一致性强度”。', route:'基础理论与经典独立性', levels:[
    {name:'ZF', formula:'Zermelo–Fraenkel', description:'保留集合论基本公理，不预设选择公理。', relation:'ZF 与 ZFC 等一致；这里的箭头只表示添加公理。', problems:['ac']},
    {name:'ZFC', formula:'ZF + AC', description:'现代集合论常用背景。连续统假设、Souslin 假设和 Whitehead 问题在此仍独立。', problems:['ch','suslin','whitehead']}
  ], connector:'dashed', note:'修订点：AC 的加入改变可证明命题，却不提高相对于 ZF 的一致性强度。'},
  {name:'强三线', code:'TIER 02', summary:'原表以“存在 ZFC 模型”为标志；把模型含义限定为一般一阶模型。', route:'自我一致性界限', levels:[
    {name:'ZFC + Con(ZFC)', formula:'“存在 ZFC 的模型”', description:'由完备性定理，Con(ZFC) 与存在一阶 ZFC 模型相应。第二不完备性定理解释了这一层为何超出 ZFC 自身。', problems:['con']}
  ], note:'若另要求“传递模型”或“标准模型”，会得到更强的主张，不能与 Con(ZFC) 混用。'},
  {name:'二线', code:'TIER 03', summary:'不可达与 Mahlo 基数；同时放入一个跨越选择公理背景的等一致性案例。', route:'反射与实数集正则性', levels:[
    {name:'不可达基数', formula:'ZFC + “∃κ inaccessible”', description:'κ 为不可数、正则且强极限。Vκ 是 ZFC 的传递模型，因而严格超出“仅有 Con(ZFC)”的例子。'},
    {name:'Solovay–Shelah 水平', formula:'ZF + DC + “所有实数集可测”', description:'与不可达基数等一致，但基础理论不同；这条虚线表示强度对应，不表示 ZFC 直接蕴含该命题。', problems:['lm'], branch:true},
    {name:'Mahlo 基数', formula:'ZFC + “∃κ Mahlo”', description:'不可达基数在 κ 以下构成驻集；为更深的反射现象提供起点。'}
  ], connectors:['dashed','dashed'], note:'原表在二线同时提到不可达与 Mahlo；这里明确二者内部还有强弱差异。'},
  {name:'强二线', code:'TIER 04', summary:'划分性质与不可分辨元相关现象。把可比较的公理和旁支对象分开。', route:'树与划分性质', levels:[
    {name:'弱紧致基数', formula:'ZFC + “∃κ weakly compact”', description:'典型刻画包括 κ→(κ)²₂；可作为构造 ℵ₂ 树性质模型的起点。', problems:['tp']},
    {name:'Ramsey 基数', formula:'ZFC + “∃κ Ramsey”', description:'比弱紧致有更强的划分性质；原表所说的划分系列可在此继续展开。'}
  ], note:'Jónsson 基数与 0# 属于相关研究线索，不能仅凭名称塞进这一条实线顺序。'},
  {name:'一线', code:'TIER 05', summary:'可测、强、Woodin、强紧致和超紧致等主题；关键应用是内模型、决定性与力迫公理。', route:'滤子、嵌入与决定性', levels:[
    {name:'可测基数', formula:'ZFC + “∃κ measurable”', description:'存在 κ-完备非主超滤。Scott 定理直接否定 V=L。', problems:['vl']},
    {name:'强基数', formula:'ZFC + “∃κ strong”', description:'可比较嵌入对越来越高的 Vλ 的保留；一致性强度高于单个可测基数。'},
    {name:'Woodin 基数', formula:'ZFC + “∃δ Woodin”', description:'大量局部强性质在 δ 以下汇聚，决定性研究从这里显著展开。'},
    {name:'Woodin 基数列', formula:'ω 个 Woodin + 上方可测', description:'Martin–Steel 定理在适当大基数假设下推出投射决定性 PD。', problems:['pd']},
    {name:'超紧致基数', formula:'ZFC + “∃κ supercompact”', description:'可用来构造 PFA 模型；强紧致与超强基数也在原表这一档，但这里不把它们强行排成单链。', problems:['pfa']}
  ], connectors:['solid','solid','solid','solid'], note:'图上是精选路线，不宣称本 tier 所有大基数概念都有线性顺序。'},
  {name:'超一线', code:'TIER 06', summary:'从可扩到巨大与 n-巨大；特别提醒“最小见证者的位置”不同于公理的一致性强度。', route:'更高的初等嵌入', levels:[
    {name:'可扩基数', formula:'ZFC + extendible', description:'嵌入性质可跨任意高度延伸，处于超紧致之上。'},
    {name:'巨大基数', formula:'ZFC + huge', description:'存在更强的闭包嵌入。最小巨大基数可能小于最小超紧致基数；这并不颠倒两种公理的相对一致性强度。'},
    {name:'n-巨大系列', formula:'ZFC + n-huge', description:'沿有限次迭代继续增强。具体 n 的公理必须单独写明，不能用一个笼统名称代替证明。'}
  ], note:'此处忠实保留原表关于“基数性与一致性强度可能呈相反次序”的提醒，并明确比较对象。'},
  {name:'论天下', code:'TIER 07', summary:'进入 rank-into-rank 公理，讨论 I3 与 I2 等嵌入。', route:'秩内嵌入 · 第一段', levels:[
    {name:'I3', formula:'j: Vλ → Vλ', description:'非平凡初等嵌入，临界点低于 λ。讨论时需说明嵌入的定义域、值域与背景理论。'},
    {name:'I2 等增强', formula:'rank-into-rank', description:'在 I3 以上研究更强的嵌入结构。相关 HOD 问题是研究方向，不是从 I3 自动得到的定理。'}
  ], note:'HOD 猜想未在图中被标为“已判定的独立性命题”。'},
  {name:'论天中', code:'TIER 08', summary:'I1、I0 与相关增强；仍需清楚交代具体公理和嵌入对象。', route:'秩内嵌入 · 第二段', levels:[
    {name:'I1', formula:'j: Vλ+1 → Vλ+1', description:'定义域扩展到 Vλ+1；与 I3 有明显强度区分。'},
    {name:'I0', formula:'j: L(Vλ+1) → L(Vλ+1)', description:'作用于 L(Vλ+1) 的初等嵌入。属于标准 ZFC 框架内研究的极高强度假设之一。'}
  ], note:'“接近无选择边界”是原表的领域描述，不是 I0 蕴含 Reinhardt / Berkeley 的箭头。'},
  {name:'论天上', code:'TIER 09', branch:true, summary:'转入不采用完整选择公理的领域。具体假设与 ZFC 主线分支展示。', route:'ZF 下的高阶公理', levels:[
    {name:'ZF + choiceless 大基数', formula:'需逐个指定公理', description:'例如 Berkeley 基数属于此类讨论。去掉 AC 后，“可测”“大小”“初等嵌入”等比较方式都须重新核实。', branch:true}
  ], note:'原表称此区为“一阶的反选择领域”。网站暂不画它与 I0 的强度箭头；跨背景关系须以精确理论为单位证明。'},
  {name:'论天最上', code:'TIER 10', branch:true, summary:'在显式类理论中讨论 Reinhardt 等公理，并记录形式化和一致性状态。', route:'类理论与全宇宙嵌入', levels:[
    {name:'ZF / NBG / MK 的适当版本', formula:'先固定类理论与逻辑', description:'“j:V→V”涉及类嵌入，不能把它当作未经说明的普通 ZF 一阶句子。不同的类理论写法未必等价。', branch:true},
    {name:'Reinhardt 型假设', formula:'非平凡 j:V→V', description:'与完整 AC 不相容。无选择背景下的一致性问题仍属前沿；这里不对安全性或可比较性作超出已知结果的保证。', branch:true}
  ], connectors:['dashed'], note:'这一层与论天上之间只表示原 tier 的阅读顺序，不表示已证明的相对一致性严格次序。'}
];

const tierList = document.querySelector('#tier-list');
const detail = document.querySelector('#detail');
const popover = document.querySelector('#popover');
let selected = 2;
let activeBadge = null;

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderNavigation() {
  tierList.replaceChildren();
  tiers.forEach((tier, index) => {
    if (index === 8) tierList.append(element('div','branch-divider','无选择公理分支 · 跨背景谨慎比较'));
    const button = element('button',`tier-button${tier.branch?' branch':''}${selected===index?' active':''}`);
    button.type = 'button';
    button.setAttribute('aria-current',selected===index?'true':'false');
    button.setAttribute('aria-label',`${tier.name}，查看一致性强度层次`);
    button.append(element('span','tier-dot'));
    const labels = element('span','tier-label',tier.name);
    labels.append(element('span','tier-code',tier.code));
    button.append(labels,element('span','tier-chevron','→'));
    button.addEventListener('click',()=>{selected=index;hidePopover();renderNavigation();renderDetail();if(window.innerWidth<901)detail.scrollIntoView({behavior:'smooth',block:'start'});});
    tierList.append(button);
  });
}

function renderDetail() {
  const tier = tiers[selected];
  detail.replaceChildren();
  const head = element('div','detail-head');
  const titleArea = element('div');
  titleArea.append(element('span','detail-kicker',`${tier.code} / ${tier.branch?'ZF 分支':'ZFC 主线'}`));
  const title = element('h2',null,tier.name); title.id='tier-title';
  titleArea.append(title,element('p','detail-summary',tier.summary));
  head.append(titleArea,element('span','detail-index',String(selected+1).padStart(2,'0')));
  detail.append(head);
  if(tier.branch)detail.append(element('div','branch-alert','本层属于无选择公理的研究线。虚线只表示主题或原 tier 的阅读顺序，不声称与 ZFC 主线有已证明的强弱关系。'));
  detail.append(element('p','route-label',tier.route));
  const list=element('div','level-list');
  tier.levels.forEach((level,index)=>{
    if(index>0){const kind=tier.connectors?.[index-1]||tier.connector||'solid';list.append(element('div',`connector${kind==='dashed'?' dashed':''}`));}
    const card=element('article',`level${level.branch?' branch':''}`);
    const top=element('div','level-top');
    top.append(element('h3',null,level.name),element('span','formula',level.formula));
    card.append(top,element('p',null,level.description));
    if(level.relation)card.append(element('p','relation',level.relation));
    if(level.problems?.length){
      const row=element('div','problems');row.append(element('span','problems-label','关联命题 ↗'));
      level.problems.forEach(id=>{
        const badge=element('button','problem-badge',papers[id].title);badge.type='button';badge.dataset.problemId=id;
        badge.setAttribute('aria-haspopup','dialog');badge.setAttribute('aria-expanded','false');
        badge.title='查看独立性证明与原始工作';
        badge.addEventListener('mouseenter',()=>showPopover(badge));
        badge.addEventListener('focus',()=>showPopover(badge));
        badge.addEventListener('click',event=>{event.stopPropagation();showPopover(badge);});
        row.append(badge);
      });card.append(row);
    }
    list.append(card);
  });
  detail.append(list,element('p','aside-note',tier.note));
}

function showPopover(badge) {
  const data=papers[badge.dataset.problemId];
  if(activeBadge&&activeBadge!==badge)activeBadge.setAttribute('aria-expanded','false');
  activeBadge=badge;badge.setAttribute('aria-expanded','true');
  popover.replaceChildren();
  const head=element('div','pop-head');
  const group=element('div');group.append(element('div','pop-kind',data.kind),element('h3',null,data.title));
  const close=element('button','close-pop','×');close.type='button';close.setAttribute('aria-label','关闭命题说明');close.addEventListener('click',hidePopover);
  head.append(group,close);popover.append(head);
  const who=element('p');const bold=element('strong',null,'解决者与时间：');who.append(bold,document.createTextNode(data.people));popover.append(who);
  const description=element('p');description.append(element('strong',null,'工作简介：'),document.createTextNode(data.story));popover.append(description);
  const links=element('div','pop-sources');data.sources.forEach(([label,url])=>{const a=element('a',null,label+' ↗');a.href=url;a.target='_blank';a.rel='noopener noreferrer';links.append(a);});popover.append(links);
  popover.hidden=false;
  requestAnimationFrame(()=>{
    const rect=badge.getBoundingClientRect();const width=popover.offsetWidth;const height=popover.offsetHeight;
    let x=Math.min(rect.left,window.innerWidth-width-12);x=Math.max(12,x);
    let y=rect.bottom+9;if(y+height>window.innerHeight-12)y=Math.max(12,rect.top-height-9);
    popover.style.left=`${x}px`;popover.style.top=`${y}px`;
  });
}

function hidePopover(){popover.hidden=true;if(activeBadge)activeBadge.setAttribute('aria-expanded','false');activeBadge=null;}
document.addEventListener('keydown',event=>{if(event.key==='Escape')hidePopover();});
document.addEventListener('click',event=>{if(!popover.hidden&&!popover.contains(event.target)&&!event.target.closest('.problem-badge'))hidePopover();});
window.addEventListener('scroll',()=>{if(!popover.hidden)hidePopover();},{passive:true});
window.addEventListener('resize',hidePopover);
renderNavigation();renderDetail();
