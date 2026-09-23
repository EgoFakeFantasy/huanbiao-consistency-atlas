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
    title: 'ℵ₂ 的树性质', kind: '与弱紧致基数等一致',
    people: 'William J. Mitchell · 1972；Jack Silver · 1970 年代',
    story: 'Mitchell 从弱紧致基数出发，经力迫得到 ℵ₂ 具有树性质的模型；反向下界来自 L 中的弱紧致基数。这里是等一致，不是弱紧致基数直接推出 ℵ₂ 树性质。',
    sources: [['Mitchell 1972 · DOI', 'https://doi.org/10.1016/0003-4843(72)90017-4']]
  },
  vl: {
    title: 'V = L（所有集合都可构造）', kind: '相对于 ZFC 独立；可测基数判定其否定',
    people: 'Kurt Gödel · 1938；Dana Scott · 1961',
    story: 'Gödel 的 L 是 ZFC 的内模型；Scott 证明可测基数不可能存在于 L。因此 ZFC + “存在可测基数”直接推出 V ≠ L。此例展示大基数公理确实可以判定某些经典命题。',
    sources: [['Gödel 1938 · DOI', 'https://doi.org/10.1073/pnas.24.12.556'], ['Scott 原文', 'https://github.com/CMU-HoTT/scott/blob/main/pdfs/1961-measurable-cardinals-and-constructible-sets.pdf']]
  },
  pd: {
    title: '投射决定性 PD', kind: '与“每个有限 n 有 n 个 Woodin”模式等一致',
    people: 'Donald A. Martin、John R. Steel · 1988–1989',
    story: 'Martin 与 Steel 用迭代树建立从 Woodin 基数到投射决定性的方向；内模型结果给出每个有限阶所需的逆向强度。作为整套公理模式，PD 与“对每个有限 n 存在 n 个 Woodin”等一致。真正无穷多个 Woodin 与 AD 对应。',
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

const references = {
  larson: ['Larson《A Brief History of Determinacy》', 'https://paulblarson.github.io/Cabal_Determinacy.pdf'],
  welch: ['Welch 大基数与决定性讲义', 'https://people.maths.bris.ac.uk/~mapdw/tutorial4-June2014.pdf'],
  steel: ['Steel《Derived Models Associated to Mice》', 'https://math.berkeley.edu/~steel/papers/tutorial3.pdf'],
  steeldm: ['Steel 导出模型论文', 'https://math.berkeley.edu/~steel/papers/dm.pdf'],
  solovay: ['Solovay 1970 · DOI', 'https://doi.org/10.2307/1970696'],
  shelah: ['Shelah 1984 · DOI', 'https://doi.org/10.1007/BF02760522'],
  mitchell: ['Mitchell 1972 · DOI', 'https://doi.org/10.1016/0003-4843(72)90017-4'],
  harrington: ['Harrington 1978 · DOI', 'https://doi.org/10.2307/2273508'],
  martinsteel: ['Martin–Steel 1989 · DOI', 'https://doi.org/10.1090/S0894-0347-1989-0955605-X'],
  hauser: ['Hauser 投射绝对性论文 · DOI', 'https://doi.org/10.1016/0168-0072(94)00041-Z'],
  goldstern: ['Goldstern–Kellner–Shelah 2019', 'https://annals.math.princeton.edu/wp-content/uploads/annals-v190-n1-p02-s.pdf'],
  hamkins: ['Hamkins–Woodin 2004 · arXiv DOI', 'https://doi.org/10.48550/arXiv.math/0403165'],
  precipitous: ['Jech–Magidor–Mitchell–Prikry 1980 · DOI', 'https://doi.org/10.2307/2273349'],
  realvalued: ['Solovay 1971 · DOI', 'https://doi.org/10.1090/pspum/013.1/0290961']
};

Object.assign(papers, {
  analytic: {title:'解析决定性（Π¹₁-Det）',kind:'无参数版本与 0# 存在等价',people:'Donald A. Martin · 1970；Leo Harrington · 1978',story:'Martin 从 0# 的不可分辨元证明无参数解析博弈决定性；Harrington 证明逆向。此处是细体、无实参数的 Π¹₁；若要求所有实参数，需相应地要求每个实数的 sharp 存在。',sources:[references.harrington,references.larson]},
  delta2: {title:'Δ¹₂ 决定性',kind:'与单个 Woodin 基数等一致',people:'W. Hugh Woodin · 1989；逆向见 Koellner–Woodin 2010',story:'Woodin 找到这一层投射决定性的精确强度：存在一个 Woodin 基数。这里采用不带实参数的细体 Δ¹₂；粗体版本不可直接替换。',sources:[references.larson]},
  projabs: {title:'投射绝对性',kind:'与“任意有限多个强基数”模式等一致',people:'Kai Hauser · 1995；W. Hugh Woodin（反向力迫构造）',story:'适当定义的投射公式在集合力迫下保持真值，其一致性强度与对每个有限 n 存在 n 个强基数的公理模式吻合。',sources:[references.hauser]},
  ad: {title:'决定性公理 AD',kind:'与无穷多个 Woodin 基数等一致',people:'W. Hugh Woodin · 1980 年代；Koellner–Woodin · 2010',story:'Woodin 的导出模型给出从 Woodin 基数到 ZF+AD 的相容性构造；反向从 AD 得到相应大基数内模型。AD 与完整选择公理不相容，所以必须保留 ZF 背景。',sources:[references.larson,references.welch]},
  adplus: {title:'AD⁺ + θ₀ < Θ',kind:'与 Woodin 极限及一枚 <λ-强基数等一致',people:'W. Hugh Woodin；John R. Steel（证明梗概，2009）',story:'Steel 的定理 15.1 精确配对 ZF+AD⁺+θ₀<Θ 与 ZFC 中“存在 Woodin 基数的极限 λ，且某 κ<λ 对所有 α<λ 都是 α-强”的假设。',sources:[references.steel]},
  adr: {title:'实数博弈决定性 ADᵣ',kind:'与强基数及 Woodin 极限假设等一致',people:'W. Hugh Woodin；John R. Steel · 2009',story:'ADᵣ 要求玩家每步可选一个实数的博弈都可决定。对应的 ZFC 假设是存在 λ，它同时是 Woodin 基数和 <λ-强基数的极限。',sources:[references.steeldm,references.larson]},
  projlm: {title:'所有投射实数集都可测',kind:'与不可达基数等一致',people:'Robert Solovay · 1970；Saharon Shelah · 1984',story:'这只量化投射集合，因而可与 ZFC 共存；其一致性强度仍达到不可达基数。与“所有实数集都可测”的 ZF+DC 理论并列，但两个理论的陈述不同。',sources:[references.solovay,references.shelah,references.goldstern]},
  baire: {title:'所有实数集都有 Baire 性质',kind:'ZF+DC 背景下与 ZFC 等一致',people:'Saharon Shelah · 1984',story:'Shelah 的模型表明，ZF+DC 加上每个实数集都有 Baire 性质不需要不可达基数。与所有实数集可测的强度对照鲜明。',sources:[references.shelah]},
  precip: {title:'ω₁ 上存在 precipitous ideal',kind:'与可测基数等一致',people:'Thomas Jech、Menachem Magidor、William Mitchell、Karel Prikry · 1980',story:'从可测基数经塌缩得到 ω₁ 上的 precipitous ideal；反向由泛超幂推出内模型中有可测基数。此结论不声称 ω₁ 本身在 ZFC 中可测。',sources:[references.precipitous]},
  realvalued: {title:'连续统是实值可测基数',kind:'与可测基数等一致',people:'Robert M. Solovay · 1971',story:'从可测基数出发，经随机实数力迫使连续统成为实值可测；反向可从实值可测性得到可测基数的内模型。此处的“实值可测”不等于所有实数集在原 Lebesgue 测度下可测。',sources:[references.realvalued]},
});

const tiers = [
  {name:'三线',code:'TIER 01',summary:'基准一致性层：不同的经典理论与独立性命题，可以具有相同的相对一致性强度。',route:'ZFC 基准',bands:[
    {label:'基准层',theories:[
      ['ZF','不含选择公理'],['ZFC','ZF + AC'],['ZFC + CH','连续统假设成立'],['ZFC + ¬CH','连续统假设失败'],['ZFC + Souslin 假设','无 Souslin 直线'],['ZFC + ¬Souslin 假设','存在 Souslin 直线'],['ZF + DC + 所有实数集有 Baire 性质','Shelah 模型']
    ],reason:'这些理论的相容性可由 ZFC 的相容性获得；这里的并列只表示等一致，不表示理论互相蕴含。',sources:[references.shelah],problems:['ac','ch','suslin','whitehead','baire']}
  ],note:'CH、Souslin 假设和 Whitehead 问题两侧的答案都可以出现在基准层。'},
  {name:'强三线',code:'TIER 02',summary:'把“存在 ZFC 的模型”作为真正高于 ZFC 基准层的一致性阶。',route:'自我一致性',bands:[
    {label:'Con(ZFC) 层',theories:[['ZFC + Con(ZFC)','ZFC 自身一致'],['ZFC +「存在一个一阶 ZFC 模型」','由完备性定理对应'],['ZF + Con(ZF)','与 ZFC 形式化等一致']],reason:'这里的模型指一般一阶模型。若改成传递模型，强度会上升。',problems:['con']}
  ],note:'第二不完备性定理解释了此层与三线的严格差异。'},
  {name:'二线',code:'TIER 03',summary:'不可达基数对应实数集正则性；Mahlo 则另列为更强的基数公理。',route:'不可达 → Mahlo',bands:[
    {label:'不可达层',theories:[['ZFC + 存在不可达基数','正则强极限 κ'],['ZF + DC + 每个实数集都 Lebesgue 可测','Solovay–Shelah 等一致性'],['ZFC + 每个投射实数集都 Lebesgue 可测','投射集版本']],reason:'两条可测性理论都与不可达基数等一致，但各自使用不同的基础公理或量化范围。',sources:[references.solovay,references.shelah,references.goldstern],problems:['lm','projlm']},
    {label:'Mahlo 层',theories:[['ZFC + 存在 Mahlo 基数','其下不可达基数构成驻集']],reason:'原 tier 中的下一枚大基数；目前不附会未经核对的“经典问题”等一致式。',link:'solid'}
  ],note:'同一 tier 内仍有严格的强度差异，因此每个档位单独成组。'},
  {name:'强二线',code:'TIER 04',summary:'把树性质、不可分辨元和划分性质各自配到准确的强度层。',route:'弱紧致、0# 与 Ramsey',bands:[
    {label:'弱紧致层',theories:[['ZFC + 存在弱紧致基数','κ 的树性质／划分性质'],['ZFC + ℵ₂ 具有树性质','Mitchell–Silver 等一致性'],['ZFC + 必然 c.c.c. 极大性原则','Hamkins–Woodin 等一致性']],reason:'ℵ₂ 树性质的上界由 Mitchell 的塌缩构造给出，下界由 L 中的弱紧致基数给出。',sources:[references.mitchell,references.hamkins],problems:['tp']},
    {label:'0# 层',theories:[['ZFC + 0# 存在','L 的不可分辨元'],['ZFC + 无参数解析决定性 Π¹₁-Det','Martin–Harrington 定理']],reason:'这是细体、无实参数的理论等价型配对；带任意实参数的版本需要更强的假设。',sources:[references.harrington,references.larson],problems:['analytic'],link:'solid'},
    {label:'Ramsey 层',theories:[['ZFC + 存在 Ramsey 基数','强化的划分性质']],reason:'单独陈列；与前两组的视觉次序只沿用原 tier 的阅读顺序。',link:'dashed'}
  ],note:'虚线表示本图没有声称相邻两组存在严格的一致性强度箭头。'},
  {name:'一线',code:'TIER 05',summary:'这一层展开为多个精确对应组。PD 的有限模式与 AD 的真正无穷序列分列。',route:'可测 → 决定性 → 超紧致',bands:[
    {label:'可测层',theories:[['ZFC + 存在可测基数','κ-完备非主超滤'],['ZFC + ω₁ 上存在 precipitous ideal','Jech–Magidor–Mitchell–Prikry'],['ZFC + 连续统实值可测','Solovay 的随机实数模型']],reason:'三种理论等一致。可测基数还直接推出 V ≠ L；后者是命题判定。',sources:[references.precipitous,references.realvalued],problems:['vl','precip','realvalued']},
    {label:'强基数模式层',theories:[['ZFC + 对每个有限 n 存在 n 个强基数','公理模式'],['ZFC + 投射绝对性','集合力迫下的精确版本']],reason:'投射绝对性的量词与力迫范围须按原定理理解。',sources:[references.hauser],problems:['projabs'],link:'dashed'},
    {label:'单个 Woodin 层',theories:[['ZFC + 存在 Woodin 基数','一枚 Woodin'],['ZFC + Δ¹₂ 决定性','细体／无实参数版本']],reason:'Woodin 的精确等一致性结果；不可把 Δ¹₂ 换成整个 PD。',sources:[references.larson],problems:['delta2'],link:'dashed'},
    {label:'PD 有限模式层',theories:[['ZFC + PD','所有投射博弈可决定'],['ZFC + {「存在 n 个 Woodin」: n∈ω}','每个有限 n 一条公理']],reason:'此处是公理模式：每个有限 n 各有一条证明要求；它不等于单条“存在无穷多个 Woodin”。',sources:[references.martinsteel,references.larson],problems:['pd'],link:'solid'},
    {label:'AD / 真正无穷 Woodin 层',theories:[['ZFC + 存在无穷多个 Woodin 基数','同一模型中有 ω 序列'],['ZF + AD','所有整数博弈可决定'],['ZFC + L(ℝ) ⊨ AD','内模型决定性']],reason:'Woodin 的等一致性。ZF+AD 与完整 AC 冲突；三个理论并列仅指相对一致性强度相同。',sources:[references.larson,references.welch],problems:['ad'],link:'solid'},
    {label:'AD⁺ + θ₀ < Θ 层',theories:[['ZFC + λ 为 Woodin 极限，且某 κ<λ 是 <λ-强','精确大基数假设'],['ZF + AD⁺ + θ₀ < Θ','Solovay 序列开始分层']],reason:'Woodin 的等一致性，见 Steel 定理 15.1。',sources:[references.steel],problems:['adplus'],link:'solid'},
    {label:'ADᵣ 层',theories:[['ZFC + λ 同时是 Woodin 与 <λ-强基数的极限','导出模型假设'],['ZF + ADᵣ','实数选择的博弈可决定'],['ZF + AD + 每个实数集都是 Suslin','等价表述']],reason:'Woodin–Steel 的等一致性；末两项在 AD 背景下还可证明等价。',sources:[references.steeldm,references.larson],problems:['adr'],link:'solid'},
    {label:'超紧致层',theories:[['ZFC + 存在超紧致基数','强闭包初等嵌入']],reason:'Baumgartner 从这里构造 PFA 模型。目前不把 PFA 与超紧致写作等一致。',problems:['pfa'],link:'dashed'}
  ],note:'“ω 个 Woodin + 上方有可测基数”是推出 L(ℝ) ⊨ AD 的常用充分条件，不是 AD 的最小精确强度。'},
  {name:'超一线',code:'TIER 06',summary:'可扩、巨大及 n-巨大公理。未找到可安全并列的经典等一致命题时，只列已确认的理论。',route:'高阶初等嵌入',bands:[
    {label:'可扩层',theories:[['ZFC + 存在可扩基数','extendible']]},
    {label:'巨大层',theories:[['ZFC + 存在巨大基数','huge']],link:'solid'},
    {label:'n-巨大系列',theories:[['ZFC + 存在 n-巨大基数','固定有限 n']],reason:'n 必须逐一指定；不以一个笼统名称代替精确假设。',link:'solid'}
  ],note:'最小见证基数在序数上的位置，与两个公理的一致性强度比较是不同问题。'},
  {name:'论天下',code:'TIER 07',summary:'进入秩内嵌入；目前不附会未有可靠核对的等一致性命题。',route:'rank-into-rank 第一段',bands:[
    {label:'I3',theories:[['ZFC + I3','非平凡 j:Vλ→Vλ']]},
    {label:'I2',theories:[['ZFC + I2','更强的秩内嵌入']],link:'solid'}
  ],note:'HOD 猜想属于研究问题，这里没有把它写作已判定的独立性命题。'},
  {name:'论天中',code:'TIER 08',summary:'I1 与 I0 的定义域不同，按各自精确公理分组。',route:'rank-into-rank 第二段',bands:[
    {label:'I1',theories:[['ZFC + I1','j:Vλ+1→Vλ+1']]},
    {label:'I0',theories:[['ZFC + I0','j:L(Vλ+1)→L(Vλ+1)']],link:'solid'}
  ],note:'跨到无选择的大基数分支时不沿用这些箭头。'},
  {name:'论天上',code:'TIER 09',branch:true,summary:'无选择背景中的 Berkeley 等大基数另成分支。',route:'ZF 分支',bands:[
    {label:'Berkeley 型假设',theories:[['ZF + 存在 Berkeley 基数','需指定精确定义与背景理论']],reason:'目前不与 I0 或 Reinhardt 画未经证明的等一致性连接。'}
  ],note:'原 tier 的位置是导航安排，不自动给出与 ZFC 主线的相对一致性比较。'},
  {name:'论天最上',code:'TIER 10',branch:true,summary:'全宇宙类嵌入需要明确类理论与逻辑背景。',route:'无选择类理论分支',bands:[
    {label:'Reinhardt 型假设',theories:[['ZF / NBG / MK 的适当版本 + 非平凡 j:V→V','类嵌入须单独形式化']],reason:'与完整选择公理不相容；目前不宣称与 Berkeley 假设等一致。'}
  ],note:'这一层与论天上之间只保留原 tier 的阅读顺序。'}
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
  tier.bands.forEach((band,index)=>{
    if(index>0){
      const connector=element('div',`connector${band.link==='solid'?'':' dashed'}`);
      connector.setAttribute('aria-label',band.link==='solid'?'已知强度上升':'阅读顺序；不主张严格强弱');
      list.append(connector);
    }
    const card=element('article',`level${tier.branch?' branch':''}`);
    const top=element('div','level-top');
    top.append(element('h3',null,band.label),element('span','equicon-label',band.theories.length>1?'≡ Con · 同一强度':'单独理论'));
    card.append(top);
    const theoryGrid=element('div','theory-grid');
    band.theories.forEach(([name,description])=>{
      const theory=element('div','theory-card');
      theory.append(element('strong',null,name),element('small',null,description));
      theoryGrid.append(theory);
    });
    card.append(theoryGrid);
    if(band.reason)card.append(element('p','band-reason',band.reason));
    if(band.sources?.length){
      const sources=element('div','band-sources');
      band.sources.forEach(([label,url])=>{const anchor=element('a',null,label+' ↗');anchor.href=url;anchor.target='_blank';anchor.rel='noopener noreferrer';sources.append(anchor);});
      card.append(sources);
    }
    if(band.problems?.length){
      const row=element('div','problems');row.append(element('span','problems-label','关联命题 ↗'));
      band.problems.forEach(id=>{
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
