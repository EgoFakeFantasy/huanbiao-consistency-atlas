const papers = {
  con: {
    title: 'Con(ZFC)：ZFC 的一致性', kind: '独立于 ZFC（若 ZFC 一致）',
    people: 'Kurt Gödel · 1931',
    story: '第二不完备性定理表明，若 ZFC 一致，它不能证明自身的一致性。完备性定理把 Con(ZFC) 与“一般一阶 ZFC 模型存在”对应起来；传递模型和 worldly cardinal 都是后续更强的层次。',
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
    story: 'Baumgartner 从超紧致基数出发，经适当力迫迭代构造 PFA 模型。PFA 蕴含 ¬CH；Steel 于 2005 年进一步证明 PFA 蕴含 L(ℝ)⊨AD。这条链给出超紧致对实数集决定性的另一种相容性解释；超紧致本身并不保证原模型满足 PFA。',
    sources: [['Baumgartner 1984 · DOI', 'https://doi.org/10.1016/B978-0-444-86580-9.50024-0'],['Steel 2005 · DOI','https://doi.org/10.2178/jsl/1129642125']]
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
  realvalued: ['Solovay 1971 · DOI', 'https://doi.org/10.1090/pspum/013.1/0290961'],
  bonneyosinski: ['Boney–Osinski 2026 · DOI', 'https://doi.org/10.48550/arXiv.2505.15574'],
  beyondhod: ['Aguilera–Bagaria–Goldberg–Lücke 2025 · DOI', 'https://doi.org/10.48550/arXiv.2509.10254'],
  berkeleyvp: ['Berkeley 基数与 Vopěnka 原理 · DOI', 'https://doi.org/10.48550/arXiv.2404.10455'],
  goldberg: ['Goldberg 2021 · DOI', 'https://doi.org/10.48550/arXiv.2107.13119'],
  beyondchoice: ['Bagaria–Koellner–Woodin 2019 · DOI', 'https://doi.org/10.1017/bsl.2019.28'],
  periodicity: ['Goldberg–Schlutzenberg 2024 · DOI', 'https://doi.org/10.4171/JEMS/1318'],
  choicelessproblems: ['Choiceless Elementary Embeddings · 问题 8(e)', 'https://karagila.org/cheese/problems.pdf'],
  laver: ['Laver 1995 · DOI', 'https://doi.org/10.1006/aima.1995.1014'],
  biane: ['Biane《Laver tables and combinatorics》· DOI', 'https://doi.org/10.48550/arXiv.1810.00548'],
  dimontewu: ['Dimonte–Wu 2015 · DOI', 'https://doi.org/10.48550/arXiv.1510.03287'],
  adthetareg: ['Adolf–Sargsyan–Trang–Wilson–Zeman · DOI', 'https://doi.org/10.48550/arXiv.2111.06220'],
  lsabook: ['Sargsyan–Trang《The Largest Suslin Axiom》· DOI', 'https://doi.org/10.1017/9781009520683'],
  steelmouse: ['Steel《Mouse Pairs and Suslin Cardinals》· DOI', 'https://doi.org/10.1142/9789819806584_0013'],
  steelmousepdf: ['Steel 作者公开稿 · 第 6 节', 'https://math.berkeley.edu/~steel/papers/mousepairs.suslina.pdf'],
  mitchellcover: ['Mitchell《The Covering Lemma》· 第 2 节', 'https://people.clas.ufl.edu/wjm/files/covering.pdf'],
  mitchellcore: ['Mitchell 1984 · DOI', 'https://doi.org/10.1017/S030500410006151X'],
  gitik1989: ['Gitik 1989 · DOI', 'https://doi.org/10.1016/0168-0072(89)90069-9'],
  gitik1991: ['Gitik 1991 · DOI', 'https://doi.org/10.1016/0168-0072(91)90016-F'],
  woodin1988: ['Woodin 1988 · DOI', 'https://doi.org/10.1073/pnas.85.18.6587'],
  shelahwoodin: ['Shelah–Woodin 1990 · DOI', 'https://doi.org/10.1007/BF02801471'],
  steelpfa: ['Steel 2005 · DOI', 'https://doi.org/10.2178/jsl/1129642125'],
  hamkinsworldly: ['Hamkins 2017 · worldly 与不可达', 'https://jdh.hamkins.org/worldly-cardinals-are-not-always-downwards-absolute/'],
  hamkinsother: ['Hamkins 2020 · otherworldly 强度链', 'https://jdh.hamkins.org/otherwordly-cardinals/'],
  hamkinskm: ['Hamkins 2014 · Kelley–Morse', 'https://jdh.hamkins.org/km-implies-conzfc/'],
  gitmankm: ['Gitman · KM 强度讲义', 'https://victoriagitman.github.io/files/kelleymorsechoice-workshop.pdf'],
  goldbergweak: ['Goldberg · 弱／强不可达等一致', 'https://math.berkeley.edu/~goldberg/Papers/StrongCompactnessAndUA.pdf'],
  robinsonq: ['Tarski–Mostowski–Robinson 1953 · 原文', 'https://www.sciencedirect.com/science/article/pii/S0049237X09702939'],
  simpson: ['Simpson《二阶算术子系统》· DOI', 'https://doi.org/10.1017/CBO9780511581007'],
  kirbyparis: ['Kirby–Paris 1982 · DOI', 'https://doi.org/10.1112/blms/14.4.285'],
  schindlercheng: ['Schindler–Cheng《高阶算术》· 原文', 'https://www.uni-muenster.de/FB10/u/rds/cheng_yong_rds.pdf'],
  kohlenbach: ['Kohlenbach 2000 · 高阶反向数学', 'https://tidsskrift.dk/brics/article/view/20216'],
  pfastrength: ['Friedman–Holy · PFA 一致性强度', 'https://www.logic.univie.ac.at/~dsyfriedman/papers/joint.peter.acc.pdf']
};

Object.assign(papers, {
  analytic: {title:'解析决定性（Π¹₁-Det）',kind:'无参数版本与 0# 存在等价',people:'Donald A. Martin · 1970；Leo Harrington · 1978',story:'Martin 从 0# 的不可分辨元证明无参数解析博弈决定性；Harrington 证明逆向。此处是细体、无实参数的 Π¹₁；若要求所有实参数，需相应地要求每个实数的 sharp 存在。',sources:[references.harrington,references.larson]},
  delta2: {title:'Δ¹₂ 决定性',kind:'与单个 Woodin 基数等一致',people:'W. Hugh Woodin · 1989；逆向见 Koellner–Woodin 2010',story:'Woodin 找到这一层投射决定性的精确强度：存在一个 Woodin 基数。这里采用不带实参数的细体 Δ¹₂；粗体版本不可直接替换。',sources:[references.larson]},
  projabs: {title:'投射绝对性',kind:'与“任意有限多个强基数”模式等一致',people:'Kai Hauser · 1995；W. Hugh Woodin（反向力迫构造）',story:'适当定义的投射公式在集合力迫下保持真值，其一致性强度与对每个有限 n 存在 n 个强基数的公理模式吻合。',sources:[references.hauser]},
  ad: {title:'决定性公理 AD',kind:'与无穷多个 Woodin 基数等一致',people:'W. Hugh Woodin · 1980 年代；Koellner–Woodin · 2010',story:'Woodin 的导出模型给出从 Woodin 基数到 ZF+AD 的相容性构造；反向从 AD 得到相应大基数内模型。AD 与完整选择公理不相容，所以必须保留 ZF 背景。',sources:[references.larson,references.welch]},
  adplus: {title:'AD⁺ + θ₀ < Θ',kind:'与 Woodin 极限及一枚 <λ-强基数等一致',people:'W. Hugh Woodin；John R. Steel（证明梗概，2009）',story:'Steel 的定理 15.1 精确配对 ZF+AD⁺+θ₀<Θ 与 ZFC 中“存在 Woodin 基数的极限 λ，且某 κ<λ 对所有 α<λ 都是 α-强”的假设。',sources:[references.steel]},
  adr: {title:'实数博弈决定性 ADᵣ',kind:'与强基数及 Woodin 极限假设等一致',people:'W. Hugh Woodin；John R. Steel · 2009',story:'ADᵣ 要求玩家每步可选一个实数的博弈都可决定。对应的 ZFC 假设是存在 λ，它同时是 Woodin 基数和 <λ-强基数的极限。',sources:[references.steeldm,references.larson]},
  adthetareg: {title:'ADᵣ + Θ 正则',kind:'与多种稠密理想理论等一致',people:'Dominik Adolf、Grigor Sargsyan、Nam Trang、Trevor Wilson、Martin Zeman · 2022 年预印本；2024 年发表',story:'Θ 是实数集所能满射到的序数的上确界。论文定理 1.5 将 ZF+ADᵣ+「Θ 为正则基数」与 ZFC+CH+「ω₁ 上有 ω₁-稠密理想」配对；推论 1.6 和定理 1.10 还给出非平稳理想版本。证明结合决定性模型上的力迫与核心模型归纳。CH 是该对应理论的一部分。',sources:[references.adthetareg]},
  lsa: {title:'最大 Suslin 公理 LSA',kind:'一致性强度高于 ADᵣ + Θ 正则；LSA 蕴含 ¬ADᵣ',people:'W. Hugh Woodin（提出）；Grigor Sargsyan、Nam Trang · 2024 年专著',story:'LSA 是 ZF+AD⁺，并要求存在最大的 Suslin 基数且它对序数可定义满射不可达。Sargsyan–Trang 研究其最小模型，证明其满足 Mouse Set Conjecture；PFA 可给出最小 LSA 模型，Woodin 基数的 Woodin 极限给出相容性上界。这些是单向上界，不是与 LSA 等一致的配对。LSA 蕴含 ¬ADᵣ，所以此处的向上箭头仅比较一致性强度。',sources:[references.lsabook]},
  lsaplus: {title:'LSA⁺ 蕴含 LSA',kind:'直接蕴含已证；严格一致性强度尚未证明',people:'John R. Steel · 2023 年修订稿；2025 年发表',story:'Steel 在《Mouse Pairs and Suslin Cardinals》定义 6.1 中令 LSA⁺ 为 AD⁺ 加上“存在实数集 A，它不属于任何 OD(s)，其中 s 是取值于某个 α<Θ 的可数序数序列”。命题 6.2 证明 LSA⁺ 蕴含 LSA：Suslin 且余 Suslin 的集合可由这样的序列定义，而见证 A 不可如此定义。原文说明，LSA⁺ 是否具有严格更高的一致性强度尚未证明；定理 6.3 给出来自 least branch hod pair 的单向相容性上界。',sources:[references.steelmouse,references.steelmousepdf]},
  projlm: {title:'所有投射实数集都可测',kind:'与不可达基数等一致',people:'Robert Solovay · 1970；Saharon Shelah · 1984',story:'这只量化投射集合，因而可与 ZFC 共存；其一致性强度仍达到不可达基数。与“所有实数集都可测”的 ZF+DC 理论并列，但两个理论的陈述不同。',sources:[references.solovay,references.shelah,references.goldstern]},
  baire: {title:'所有实数集都有 Baire 性质',kind:'ZF+DC 背景下与 ZFC 等一致',people:'Saharon Shelah · 1984',story:'Shelah 的模型表明，ZF+DC 加上每个实数集都有 Baire 性质不需要不可达基数。与所有实数集可测的强度对照鲜明。',sources:[references.shelah]},
  precip: {title:'ω₁ 上存在 precipitous ideal',kind:'与可测基数等一致',people:'Thomas Jech、Menachem Magidor、William Mitchell、Karel Prikry · 1980',story:'从可测基数经塌缩得到 ω₁ 上的 precipitous ideal；反向由泛超幂推出内模型中有可测基数。此结论不声称 ω₁ 本身在 ZFC 中可测。',sources:[references.precipitous]},
  realvalued: {title:'连续统是实值可测基数',kind:'与可测基数等一致',people:'Robert M. Solovay · 1971',story:'从可测基数出发，经随机实数力迫使连续统成为实值可测；反向可从实值可测性得到可测基数的内模型。此处的“实值可测”不等于所有实数集在原 Lebesgue 测度下可测。',sources:[references.realvalued]},
  mitchellorder: {title:'可测基数的 Mitchell 序',kind:'测度结构的细分；此处不宣称有独立性命题的精确配对',people:'William J. Mitchell · 1970 年代；1984 年系统研究',story:'对同一可测基数 κ 上的正规测度 U、W，若 U 属于由 W 形成的超幂 Ult(V,W)，写作 U ◁ W。Mitchell 序 o(κ) 衡量这个良基关系的秩；o(κ)≥2 表示测度之间已有非平凡层级。它为下方的 κ⁺⁺ 阈值提供刻度。',sources:[references.mitchellcore,references.mitchellcover]},
  gchmeas: {title:'可测基数处 GCH 失败',kind:'与 ∃κ o(κ)=κ⁺⁺ 等一致',people:'William J. Mitchell · 1984；Moti Gitik · 1990 年代',story:'问题是可测基数 κ 能否满足 2^κ>κ⁺。Mitchell 序达到 κ⁺⁺ 可经力迫给出这样的模型；反向核心模型分析把 GCH 在可测基数处的失败转化为同等级的测度序列。等一致只比较理论能否有模型，不表示每个见证 κ 都有 o(κ)=κ⁺⁺。',sources:[references.mitchellcover,references.mitchellcore]},
  schfail: {title:'奇异基数假设 SCH 失败',kind:'与 ∃κ o(κ)=κ⁺⁺ 等一致；严格强于 0♯ 的必要条件',people:'Moti Gitik · 1989、1991',story:'这里的 ¬SCH 指某个奇异强极限 μ 满足 2^μ>μ⁺。Gitik 先由 o(κ)=κ⁺⁺ 构造失败模型，再证明逆向一致性下界。Jensen 的覆盖引理还给出 ¬SCH ⇒ 0♯ 存在；这一单向蕴含远不足以把 0♯ 与 ¬SCH 放进同一强度框。',sources:[references.gitik1989,references.gitik1991,references.mitchellcover]},
  schsharp: {title:'SCH 失败必有 0♯',kind:'单向必要条件；不构成等一致',people:'Ronald Jensen · 1970 年代；William J. Mitchell（综述）',story:'Jensen 覆盖引理推出：若 0♯ 不存在，则每个奇异强极限基数都满足 SCH。因此 ZFC+¬SCH 推出 0♯ 存在。但 ¬SCH 的精确相对一致性强度达到 o(κ)=κ⁺⁺，不能把它和单个 0♯ 并列。',sources:[references.mitchellcover,references.gitik1991]},
  pdregular: {title:'投射实数集的正则性',kind:'PD 的直接推论；非等一致配对',people:'Donald A. Martin、John R. Steel · 1989',story:'PD 判定所有投射博弈，从而所有投射实数集都 Lebesgue 可测、具有 Baire 性质及完美集性质。这里是从决定性导出的正则性结论；它们单独作为理论时不能直接并列为 PD 的精确强度。',sources:[references.martinsteel]},
  lrtrees: {title:'L(ℝ) 中实数集的决定性',kind:'超紧致基数的直接推论；非精确等一致',people:'W. Hugh Woodin · 1988',story:'Woodin 证明：若存在超紧致基数，则 L(ℝ) 的每个实数集是弱齐性树的投影，由此 L(ℝ) 满足 AD。这个内模型结论不能读成 V 的每个实数集都可决定；L(ℝ)⊨AD 已在无穷 Woodin 层列作较低强度的等一致理论。',sources:[references.woodin1988]},
  lrregular: {title:'L(ℝ) 中实数集的正则性',kind:'超紧致基数的直接推论；限定在内模型 L(ℝ)',people:'Saharon Shelah、W. Hugh Woodin · 1990',story:'Shelah–Woodin 证明，超紧致基数使 L(ℝ) 的每个实数集都 Lebesgue 可测并具有 Baire 性质，且 L(ℝ) 中不存在实数的良序。由 L(ℝ) 中的决定性还得到完美集性质。完整 ZFC 中当然仍有不可测的实数集，因此 L(ℝ) 的范围不能省略。',sources:[references.shelahwoodin,references.woodin1988]},
  transitive: {title:'存在传递的 ZFC 模型',kind:'严格强于 Con(ZFC)，严格弱于存在 worldly cardinal',people:'Gödel 不完备性定理；Joel David Hamkins · 2020 年强度整理',story:'传递模型的成员关系是真实的 ∈，并自动良基；一般一阶模型不必如此。若 M 是传递 ZFC 模型，则 M 内还有较小的一阶 ZFC 模型，所以传递模型假设能证明 Con(ZFC)。Hamkins 给出它与 worldly cardinal 之间的严格相对一致性次序。',sources:[references.hamkinsother]},
  worldly: {title:'世界基数（worldly cardinal）',kind:'∃κ Vκ ⊨ ZFC',people:'Ernst Zermelo（累积层宇宙）；Joel David Hamkins · 2017 年分析',story:'κ 是 worldly，当且仅当累积层 Vκ 满足 ZFC。不可达基数必为 worldly；反向不成立，最小 worldly 基数实际上具有可数共尾度。worldly 的强度严格高于仅存在传递 ZFC 模型，并严格低于不可达基数。',sources:[references.hamkinsworldly,references.hamkinsother]},
  manyworldly: {title:'真类多个世界基数',kind:'严格高于存在一枚 worldly，低于 otherworldly',people:'Joel David Hamkins · 2020',story:'陈述为“对每个序数 α，都存在 α 以上的 worldly 基数 κ”。它与仅有一枚 worldly 的假设不能合并；Hamkins 的强度链把它严格放在单枚 worldly 与 otherworldly 之间。',sources:[references.hamkinsother]},
  otherworldly: {title:'otherworldly 基数',kind:'严格高于真类多个 worldly',people:'Jason Chen、Joel David Hamkins · 2020',story:'存在 κ<λ 满足 Vκ ≺ Vλ，即较低的秩初段在一阶语言中完全初等地嵌入较高秩初段。Hamkins 证明 κ 必为 worldly，且其下有无界多个 worldly 基数。这给出真类多个 worldly 之上的严格强度层。',sources:[references.hamkinsother]},
  totallyother: {title:'totally otherworldly 基数',kind:'严格高于真类多个 otherworldly',people:'Joel David Hamkins · 2020',story:'κ 对任意高度 θ 都能找到 λ>θ，使 Vκ ≺ Vλ。Hamkins 证明它是 Σ₂ 正确的 worldly 基数，并是 otherworldly 基数的极限；存在一枚与存在真类多个都位于不可达基数假设之下。',sources:[references.hamkinsother]},
  km: {title:'Kelley–Morse 类集合论 KM',kind:'严格弱于存在不可达基数；与相邻 otherworldly 档不画精确箭头',people:'John L. Kelley、Anthony Morse；Joel David Hamkins · 2014；Victoria Gitman · 2017',story:'KM 允许类量词参与类概括，可构造一阶真谓词及传递 ZFC 模型的初等塔。若 κ 不可达，则以 Vκ 为集合、其所有子集为类可构造 KM 模型。KM 严格弱于一枚不可达基数；此图不把它与紧邻的 otherworldly 档标成已核对的精确强度关系。',sources:[references.hamkinskm,references.gitmankm]},
  weakinaccessible: {title:'弱不可达与强不可达',kind:'两种存在断言等一致；基数性质本身不同',people:'Kurt Gödel（可构造宇宙 L）；Gabriel Goldberg（综述）',story:'弱不可达指不可数正则极限基数，不要求强极限；强不可达再要求 2^λ<κ 对每个 λ<κ 成立。若 V 中有弱不可达 κ，则在内模型 L 中 κ 为强不可达，故两种存在断言等一致。这不表示同一个 κ 在 V 中必为强不可达。',sources:[references.goldbergweak]},
  grothendieck: {title:'Grothendieck 宇宙',kind:'存在断言与存在强不可达基数对应',people:'Alexander Grothendieck（范畴论宇宙）；Joel David Hamkins · 2017 年说明',story:'一个非平凡的 Grothendieck 宇宙对常用集合构造封闭，可写为 Vκ，其中 κ 为强不可达基数。因而“存在这样的宇宙”在 ZFC 中与“存在强不可达基数”对应。worldly 的 Vκ 虽满足 ZFC，但当 κ 奇异时不具备同样的外部封闭性。',sources:[references.hamkinsworldly]},
  qessential: {title:'Robinson 算术 Q 的本质不可判定性',kind:'最低算术档；Q 无归纳公理模式',people:'Raphael M. Robinson、Alfred Tarski、Andrzej Mostowski · 1953',story:'Q 只用有限条很弱的自然数算术公理，已足以编码计算。原始工作证明 Q 本质不可判定：任何一致、可递归公理化且包含 Q 的理论都不可判定。这里说的是理论可判定性，不是 Q 与更高理论等一致。',sources:[references.robinsonq]},
  efa: {title:'初等函数算术 EFA',kind:'IΔ₀ + Exp；处于 Q 与 PRA 之间的标准弱算术档',people:'Stephen G. Simpson、Rick L. Smith · 1980 年代（弱子系统研究）',story:'EFA 在有界归纳 IΔ₀ 上加入指数函数全定义，比无归纳的 Q 更便于编码有限证明与初等计算。它是独立的弱算术档；这里没有把它和 PRA、RCA₀ 的同强度组并列。',sources:[references.simpson]},
  wkl: {title:'弱 König 引理 WKL',kind:'WKL₀ 严格扩展 RCA₀，却与 PRA、IΣ₁、RCA₀ 等一致',people:'Dénes König · 1927；Leo Harrington（保守性证明，1980 年代）；Stephen G. Simpson · 2009',story:'WKL 断言每棵无限二叉树都有无限路径。在 RCA₀ 上，它对应许多紧致性定理；Harrington 的保守性结果说明 WKL₀ 虽能证明 RCA₀ 不能证明的二阶命题，却没有提高这一组理论的一致性强度。',sources:[references.simpson]},
  goodstein: {title:'Goodstein 定理不能由 PA 证明',kind:'PA 独立性例子；不把定理本身标成 ACA₀ 的等一致配对',people:'Reuben Goodstein · 1944；Laurence Kirby、Jeff Paris · 1982',story:'Goodstein 序列终会归零，但 Kirby–Paris 证明这一陈述在一致的 PA 中不可证明；证明分析序列的序数下降。ACA₀ 与 PA 等一致且对一阶算术保守，故不能仅因它位于同一强度框就说 ACA₀ 证明 Goodstein 定理。',sources:[references.kirbyparis,references.simpson]},
  atr: {title:'算术超限递归 ATR₀',kind:'反向数学中的高阶子系统',people:'Harvey Friedman（研究计划）；Stephen G. Simpson · 2009',story:'ATR₀ 允许沿编码的可数良序反复执行算术可定义运算，支持 Borel 与解析集的许多经典结果。它强于 ACA₀；图中的上升表示经形式化证明核对的理论强度，具体定理须按编码版本理解。',sources:[references.simpson]},
  cantorbedixson: {title:'Cantor–Bendixson 分解',kind:'适当编码版本在 ACA₀ 上与 Π¹₁-CA₀ 等价',people:'Georg Cantor、Ivar Bendixson（经典定理）；Stephen G. Simpson · 2009（反向数学刻画）',story:'闭集分解为完美核与可数散点部分。对可分完备空间中闭集编码的精确版本，Simpson 的反向数学结果在 ACA₀ 上把这一分解与 Π¹₁ 概括配对；不能把未经编码的任意拓扑表述直接替换。',sources:[references.simpson]},
  fullz2: {title:'完整二阶算术 Z₂',kind:'全公式二阶概括；采用形式理论的 Henkin 语义',people:'Stephen G. Simpson · 2009（标准形式化）',story:'Z₂ 允许对所有二阶算术公式作集合概括，变量分别遍历自然数及自然数集。这里比较的是可公理化形式理论的一致性强度，采用 Henkin 模型；不要把它与满二阶语义下的唯一标准模型混同。',sources:[references.simpson]},
  finiteorders: {title:'有限阶高阶算术 Z₃、Z₄、…',kind:'每升高一阶，一致性强度严格增加',people:'Ralf Schindler、Yong Cheng · 2015',story:'Zₙ 加入直到第 n 阶的有限类型及相应的概括。Schindler–Cheng 指出 Zₙ₊₁ 能证明 Con(Zₙ)，因此 Z₂<Con Z₃<Con⋯；网页用 Z₃ 与 n≥4 的模式档展示，不把所有有限 n 错放进一个等一致框。',sources:[references.schindlercheng]},
  omegaorders: {title:'ω 阶算术：所有有限类型',kind:'Zω = ⋃ₙ≥₂ Zₙ；不是无穷类型量化',people:'Schindler–Cheng（有限阶强度链）；Ulrich Kohlenbach · 2000（有限类型框架）',story:'按本图约定，Zω 收集每个有限 n 的 Zₙ 公理及所有有限类型；单条公式只涉及有限阶。Zω 包含并证明每个固定有限阶理论的一致性（可在更高有限阶形式化），而 ZFC 能构造其标准有限类型模型。这里不把 ω 阶误读成允许集合所有有限类型对象的新无穷类型。',sources:[references.schindlercheng,references.kohlenbach]},
  laverq: {title:'Laver table 的 q(n) 对每个 n 都有定义',kind:'I3 下可证明；ZFC 中的可证性仍未解决',people:'Richard Laver · 1992 年预印本，1995 年发表',story:'设 p(m) 是 2^m 阶 Laver table 首行的周期，q(n)=min{m:p(m)≥2^n}。I3 给出的秩内嵌入使这些周期无界，因此 q 为全函数。这是 I3 的单向推论；不能据此声称 q 的全函数性与 I3 等一致，也不能声称已证明它独立于 ZFC。',sources:[references.laver,references.biane]},
  i1forcing: {title:'I1 与 λ⁺、λ⁺⁺ 的树性质可相容',kind:'I1 给出相容性上界；不是等一致式',people:'Vincenzo Dimonte、Liuzhen Wu · 2015',story:'作者发展保持 I1(λ) 的力迫工具，分别研究它与多种 λ 附近组合性质的相容性，例子包括 λ⁺ 或 λ⁺⁺ 上的树性质、GCH 首次失败等。论文没有将这些性质单独判为与 I1 等一致。',sources:[references.dimontewu]},
  exacting: {title:'exacting 基数的位置',kind:'一致性强度严格介于 I3 与 I2 之间',people:'Juan Pablo Aguilera、Joan Bagaria、Gabriel Goldberg、Philipp Lücke · 2025',story:'论文的推论 5.11 给出严格分层：Con(ZFC+I2) 强于 Con(ZFC+存在 exacting 基数)，后者又强于 Con(ZFC+I3)。因此把它单设一档，不与两端并列。',sources:[references.beyondhod]},
  i2hod: {title:'I2 与 HOD 假设的相容性结果',kind:'从 I2 得到相对一致性；非等一致',people:'Aguilera、Bagaria、Goldberg、Lücke · 2025',story:'论文推论 5.6 证明：若 ZFC+I2 一致，则 ZFC 与 HOD 假设、某个 exacting 基数及其上方一个可扩基数一起也一致。这是内模型／力迫的相容性结论，不表示 I2 直接推出 HOD 假设。',sources:[references.beyondhod]},
  i0hod: {title:'ultraexacting 与 HOD 猜想',kind:'同强度理论的结构结果',people:'Aguilera、Bagaria、Goldberg、Lücke · 2025',story:'论文将 ultraexacting 基数与 I0 配成等一致理论，并证明 ultraexacting 可用带序数可定义谓词的初等自嵌入刻画。它们的存在与 V=HOD 不相容；这不是将 HOD 猜想本身标成已解决。',sources:[references.beyondhod]},
  reinhardtclass: {title:'弱 Reinhardt 与 Reinhardt 的真类版本',kind:'无选择二阶背景下等一致',people:'Gabriel Goldberg · 2021',story:'若存在真类多个弱 Reinhardt 基数，Goldberg 构造含有真类多个 Reinhardt 基数的内模型；反向显然。这是关于“真类多个”的结果，不能移用于单个 Reinhardt 基数。',sources:[references.goldberg]},
});

const tiers = [
  {name:'算术层：Q—Zω',code:'TIER 00',summary:'从 Robinson 算术 Q 到包含所有有限类型的 ω 阶算术；按形式理论的一致性强度分档。',route:'Q → EFA → PRA/RCA₀ → PA/ACA₀ → ATR₀ → Π¹₁-CA₀ → Z₂ → Zₙ → Zω',relations:[['已证等一致','PRA ≡Con IΣ₁ ≡Con RCA₀ ≡Con WKL₀；PA ≡Con ACA₀',references.simpson],['已证强度','对每个有限 n≥2，Zₙ₊₁ 证明 Con(Zₙ)',references.schindlercheng],['已判定','Goodstein 定理不可由 PA 证明；ZFC 可证明该定理',references.kirbyparis],['暂不比较','Q→EFA→PRA 的虚线只标理论扩张；本图未核实严格 Con 差距']],bands:[
    {label:'Robinson 算术 Q',theories:[['Q','有限公理；不含归纳公理模式']],reason:'Q 是本图的最低算术层。它已本质不可判定，但这一性质不表示它与后面的算术理论等一致。',sources:[references.robinsonq],problems:['qessential']},
    {label:'初等函数算术 EFA',theories:[['IΔ₀ + Exp（EFA）','有界归纳与指数全函数性']],reason:'在 Q 之上增加受限归纳和指数；这里只按理论扩张排列，不用实线声称已核对的严格一致性差距。',sources:[references.simpson],problems:['efa'],link:'dashed'},
    {label:'PRA / IΣ₁ / RCA₀ / WKL₀',theories:[['PRA','原始递归算术'],['IΣ₁','Σ₁ 公式的归纳'],['RCA₀','递归概括的二阶算术'],['WKL₀','RCA₀ + 弱 König 引理']],reason:'四种理论等一致。WKL₀ 在二阶命题上比 RCA₀ 强，但 Harrington 的保守性定理说明两者的一致性强度相同。',sources:[references.simpson],problems:['wkl'],link:'dashed'},
    {label:'PA / ACA₀',theories:[['PA','一阶 Peano 算术；全一阶归纳'],['ACA₀','算术公式的二阶概括']],reason:'Friedman 的保守性定理：ACA₀ 对一阶算术语句不超过 PA，因此两者等一致。Goodstein 定理是 PA 的经典不可证明命题。',sources:[references.simpson,references.kirbyparis],problems:['goodstein'],link:'solid'},
    {label:'ATR₀',theories:[['ATR₀','沿可数良序作算术超限递归']],reason:'对应描述集合论与超限递归中的一批定理；高于 ACA₀。',sources:[references.simpson],problems:['atr'],link:'solid'},
    {label:'Π¹₁-CA₀',theories:[['Π¹₁-CA₀','余解析公式的概括']],reason:'适当编码的 Cantor–Bendixson 分解在 ACA₀ 上与此概括公理等价。',sources:[references.simpson],problems:['cantorbedixson'],link:'solid'},
    {label:'完整二阶算术 Z₂',theories:[['Z₂','对全部二阶算术公式概括']],reason:'采用形式理论的 Henkin 语义；它强于此前列出的有限概括片段。',sources:[references.simpson],problems:['fullz2'],link:'solid'},
    {label:'三阶算术 Z₃',theories:[['Z₃','再加入自然数集的集合']],reason:'Z₃ 可证明 Con(Z₂)，因此严格提高一致性强度。',sources:[references.schindlercheng],problems:['finiteorders'],link:'solid'},
    {label:'有限高阶算术 Zₙ（每个固定 n≥4）',theories:[['Zₙ（n≥4）','每个有限 n 都是单独的一致性强度档']],reason:'对每个 n，Zₙ₊₁ 可证明 Con(Zₙ)；这里用一个系列卡片缩写无限多档，不表示所有 n 等一致。',sources:[references.schindlercheng],problems:['finiteorders'],series:true,link:'solid'},
    {label:'ω 阶算术 Zω',theories:[['Zω = ⋃ₙ≥₂ Zₙ','所有有限类型；没有新设无穷类型']],reason:'Zω 汇集所有有限阶算术 Zₙ 的公理；每条公式仍只涉及有限类型。ZFC 能构造 Zω 的标准模型并证明其一致性，因此两者处于不同的一致性强度层。',sources:[references.schindlercheng,references.kohlenbach],problems:['omegaorders'],link:'solid'}
  ],note:'“算术阶数”指允许哪些有限类型的对象，不等于公式的算术层级。Q、EFA 附近的虚线只排理论扩张，不声称已核对严格一致性差距；WKL₀ 与 RCA₀ 虽证明力不同，仍等一致。'},
  {name:'ZFC 与模型存在',code:'TIER 01',summary:'从 ZFC 基准到一般模型、传递模型；三者须分档，随后进入 worldly。',route:'ZFC → Con(ZFC) → 传递 ZFC 模型',relations:[['已证强度','ZFC <Con ZFC+Con(ZFC) <Con 存在传递 ZFC 模型 <Con 存在 worldly 基数',references.hamkinsother],['已判定','CH 与 ¬CH、Souslin 假设的两侧答案均可与 ZFC 相容'],['区分背景','ZF+DC+所有实数集有 Baire 性质与 ZFC 等一致，不表示它蕴含 AC',references.shelah]],bands:[
    {label:'基准层',theories:[
      ['ZF','不含选择公理'],['ZFC','ZF + AC'],['ZFC + CH','连续统假设成立'],['ZFC + ¬CH','连续统假设失败'],['ZFC + Souslin 假设','无 Souslin 直线'],['ZFC + ¬Souslin 假设','存在 Souslin 直线'],['ZF + DC + 所有实数集有 Baire 性质','Shelah 模型']
    ],reason:'这些理论的相容性可由 ZFC 的相容性获得；这里的并列只表示等一致，不表示理论互相蕴含。',sources:[references.shelah],problems:['ac','ch','suslin','whitehead','baire']},
    {label:'Con(ZFC) 层',theories:[['ZFC + Con(ZFC)','ZFC 自身一致'],['ZFC +「存在一个一阶 ZFC 模型」','由完备性定理对应'],['ZF + Con(ZF)','与 ZFC 形式化等一致']],reason:'模型指一般一阶模型；第二不完备性定理把此层严格分离于基准层。',problems:['con'],link:'solid'},
    {label:'传递 ZFC 模型层',theories:[['ZFC +「存在传递的 ZFC 模型」','真实 ∈ 的良基模型']],reason:'传递模型比单纯 Con(ZFC) 更强，但其存在仍弱于下一 tier 的世界基数假设。',sources:[references.hamkinsother],problems:['transitive'],link:'solid'}
  ],note:'CH、Souslin 假设和 Whitehead 问题两侧答案位于基准框；Con(ZFC) 与传递模型各自占更高的前置档。'},
  {name:'世界基数',code:'TIER 02',summary:'从一枚世界基数出发，展示 worldly 到不可达基数之前的严格强度链。',route:'worldly → otherworldly → totally otherworldly → 不可达',relations:[['已证强度','worldly → 真类多个 worldly → otherworldly → 真类多个 otherworldly → totally otherworldly；每步严格增强',references.hamkinsother],['已证上界','存在不可达基数给出这一链各档的相容性上界',references.hamkinsother],['尚未标定','KM 是该区间的旁支；本图未核实它与相邻 otherworldly 档的精确比较',references.gitmankm]],bands:[
    {label:'世界基数层',theories:[['ZFC + 存在 worldly 基数 κ','Vκ ⊨ ZFC']],reason:'每个不可达基数都是 worldly，但最小 worldly 基数可为奇异，且其共尾度为 ω。此层严格高于仅存在传递 ZFC 模型。',sources:[references.hamkinsworldly,references.hamkinsother],problems:['worldly']},
    {label:'真类多个世界基数',theories:[['ZFC + 存在真类多个 worldly 基数','∀α ∃κ>α (Vκ ⊨ ZFC)']],reason:'要求 worldly 基数在序数中无界，严格强于仅有一枚。',sources:[references.hamkinsother],problems:['manyworldly'],link:'solid'},
    {label:'otherworldly 层',theories:[['ZFC + 存在 otherworldly 基数 κ','∃λ>κ (Vκ ≺ Vλ)']],reason:'较低秩初段在较高秩初段中一阶初等；严格高于真类多个 worldly。',sources:[references.hamkinsother],problems:['otherworldly'],link:'solid'},
    {label:'真类多个 otherworldly',theories:[['ZFC + 存在真类多个 otherworldly 基数','每个序数之上都有一个']],reason:'对每个高度都有秩初段的初等扩张起点；严格高于只存在一个 otherworldly。',sources:[references.hamkinsother],problems:['otherworldly'],link:'solid'},
    {label:'totally otherworldly 层',theories:[['ZFC + 存在 totally otherworldly 基数 κ','任意 θ 都有 λ>θ 且 Vκ ≺ Vλ']],reason:'同一 κ 可初等地嵌入任意高的秩初段；严格高于真类多个 otherworldly。',sources:[references.hamkinsother],problems:['totallyother'],link:'solid'},
    {label:'真类多个 totally otherworldly',theories:[['ZFC + 存在真类多个 totally otherworldly 基数','每个高度之上都有一个']],reason:'严格高于单枚 totally otherworldly，仍严格低于不可达基数存在。',sources:[references.hamkinsother],problems:['totallyother'],link:'solid'},
    {label:'Kelley–Morse 类理论 · 区间旁支',theories:[['KM（含全类概括的类集合论）','真谓词与秩初段初等塔']],reason:'KM 严格弱于存在不可达基数，并强于大量迭代 Con(ZFC) 层。这里把它作为同一区间的旁支；虚线不宣称它与上一档有已核对的精确比较。',sources:[references.hamkinskm,references.gitmankm],problems:['km'],link:'dashed'}
  ],note:'Hamkins 给出的 worldly → otherworldly → totally otherworldly 各档在一致性强度上严格递增。KM 另作区间旁支；下一个 tier 的不可达基数是以上各档的已知上界。'},
  {name:'不可达基数',code:'TIER 03',summary:'不可达基数对应实数集正则性；Mahlo 则另列为更强的基数公理。',route:'不可达 → Mahlo',relations:[['已证等一致','存在强不可达 ≡Con 存在弱不可达 ≡Con ZF+DC+所有实数集可测',references.shelah],['已证强度','存在 Mahlo 基数严格强于存在不可达基数'],['判定范围','“所有投射实数集可测”可与 ZFC 共存；“所有实数集可测”在图中使用 ZF+DC 背景',references.solovay]],bands:[
    {label:'不可达层',theories:[['ZFC + 存在强不可达基数','不可数正则强极限 κ'],['ZFC + 存在弱不可达基数','在 L 中取得强不可达下界'],['ZFC + 存在 Grothendieck 宇宙','范畴论的集合宇宙'],['ZF + DC + 每个实数集都 Lebesgue 可测','Solovay–Shelah 等一致性'],['ZFC + 每个投射实数集都 Lebesgue 可测','投射集版本']],reason:'这五种理论在一致性强度上相同。弱／强不可达的基数性质不同；两条可测性理论使用不同基础公理或量化范围。',sources:[references.goldbergweak,references.hamkinsworldly,references.solovay,references.shelah,references.goldstern],problems:['weakinaccessible','grothendieck','lm','projlm']},
    {label:'Mahlo 层',theories:[['ZFC + 存在 Mahlo 基数','其下不可达基数构成驻集']],reason:'原 tier 中的下一枚大基数；目前不附会未经核对的“经典问题”等一致式。',link:'solid'}
  ],note:'同一 tier 内仍有严格的强度差异，因此每个档位单独成组。'},
  {name:'弱紧致基数',code:'TIER 04',summary:'把树性质、不可分辨元和划分性质各自配到准确的强度层。',route:'弱紧致、0# 与 Ramsey',relations:[['已证等一致','存在弱紧致基数 ≡Con ℵ₂ 具有树性质',references.mitchell],['已证等价','0♯ 存在与无参数 Π¹₁ 决定性对应；有实参数版本不能直接替换',references.harrington],['单向判定','¬SCH ⇒ 0♯ 存在；¬SCH 的精确强度另在 Mitchell 序 κ⁺⁺ 层',references.mitchellcover],['暂不比较','Ramsey 与相邻框之间只用阅读虚线；本图未核实精确关系']],bands:[
    {label:'弱紧致层',theories:[['ZFC + 存在弱紧致基数','κ 的树性质／划分性质'],['ZFC + ℵ₂ 具有树性质','Mitchell–Silver 等一致性'],['ZFC + 必然 c.c.c. 极大性原则','Hamkins–Woodin 等一致性']],reason:'ℵ₂ 树性质的上界由 Mitchell 的塌缩构造给出，下界由 L 中的弱紧致基数给出。',sources:[references.mitchell,references.hamkins],problems:['tp']},
    {label:'0# 层',theories:[['ZFC + 0# 存在','L 的不可分辨元'],['ZFC + 无参数解析决定性 Π¹₁-Det','Martin–Harrington 定理']],reason:'解析决定性是细体、无实参数的等价型配对。Jensen 覆盖引理还表明 ¬SCH 必有 0♯；这只是单向必要条件，¬SCH 的精确强度另列在 Mitchell 序层。',sources:[references.harrington,references.larson,references.mitchellcover],problems:['analytic','schsharp'],link:'solid'},
    {label:'Ramsey 层',theories:[['ZFC + 存在 Ramsey 基数','强化的划分性质']],reason:'单独陈列；与前两组的视觉次序只沿用原 tier 的阅读顺序。',link:'dashed'}
  ],note:'虚线表示本图没有声称相邻两组存在严格的一致性强度箭头。'},
  {name:'可测—超紧致基数',code:'TIER 05',summary:'以 Mitchell 序定位 GCH 与 SCH 的失败，再细分决定性、LSA 与超紧致的实数集结论。',route:'可测 → Mitchell 序 → ADᵣ → LSA → 超紧致',relations:[['已证等一致','可测基数 ≡Con ω₁ 上 precipitous ideal；o(κ)=κ⁺⁺ ≡Con 可测 κ 处 ¬GCH ≡Con ¬SCH',references.gitik1991],['已证等一致','无穷多个 Woodin ≡Con ZF+AD；ADᵣ+Θ 正则另有 CH+稠密理想刻画',references.adthetareg],['单向判定','LSA ⇒ ¬ADᵣ；LSA⁺ ⇒ LSA；超紧致 ⇒ L(ℝ)⊨AD',references.lsabook],['开放问题','LSA⁺ 是否严格高于 LSA？',references.steelmouse],['开放问题','PFA 与超紧致是否等一致？',references.pfastrength]],bands:[
    {label:'可测层',theories:[['ZFC + 存在可测基数','κ-完备非主超滤'],['ZFC + ω₁ 上存在 precipitous ideal','Jech–Magidor–Mitchell–Prikry'],['ZFC + 连续统实值可测','Solovay 的随机实数模型']],reason:'三种理论等一致。可测基数还直接推出 V ≠ L；后者是命题判定。',sources:[references.precipitous,references.realvalued],problems:['vl','precip','realvalued']},
    {label:'Mitchell 序 ≥ 2 层',theories:[['ZFC + ∃可测 κ (o(κ) ≥ 2)','正规测度之间出现非平凡序']],reason:'Mitchell 序衡量同一可测基数上正规测度的迭代结构；此档用于显示刻度，不把它冒充为 GCH 或 SCH 失败的精确强度。',sources:[references.mitchellcore,references.mitchellcover],problems:['mitchellorder'],link:'solid'},
    {label:'Mitchell 序 κ⁺⁺ 层',theories:[['ZFC + ∃可测 κ (o(κ) = κ⁺⁺)','测度序列达到关键阈值'],['ZFC + ∃可测 κ (2^κ > κ⁺)','可测基数处 GCH 失败'],['ZFC + ¬SCH','某奇异强极限 μ 满足 2^μ > μ⁺']],reason:'三种理论等一致。Gitik 给出 SCH 失败的上下界；可测基数处 GCH 失败的配对见 Mitchell 的覆盖引理综述。这里是相对一致性，不是各命题直接互推。',sources:[references.mitchellcover,references.gitik1989,references.gitik1991],problems:['gchmeas','schfail'],link:'solid'},
    {label:'强基数模式层',theories:[['ZFC + 对每个有限 n 存在 n 个强基数','公理模式'],['ZFC + 投射绝对性','集合力迫下的精确版本']],reason:'投射绝对性的量词与力迫范围须按原定理理解。',sources:[references.hauser],problems:['projabs'],link:'dashed'},
    {label:'单个 Woodin 层',theories:[['ZFC + 存在 Woodin 基数','一枚 Woodin'],['ZFC + Δ¹₂ 决定性','细体／无实参数版本']],reason:'Woodin 的精确等一致性结果；不可把 Δ¹₂ 换成整个 PD。',sources:[references.larson],problems:['delta2'],link:'dashed'},
    {label:'PD 有限模式层',theories:[['ZFC + PD','所有投射博弈可决定'],['ZFC + {「存在 n 个 Woodin」: n∈ω}','每个有限 n 一条公理']],reason:'此处是公理模式：每个有限 n 各有一条证明要求；它不等于单条“存在无穷多个 Woodin”。PD 还推出投射实数集的正则性。',sources:[references.martinsteel,references.larson],problems:['pd','pdregular'],link:'solid'},
    {label:'AD / 真正无穷 Woodin 层',theories:[['ZFC + 存在无穷多个 Woodin 基数','同一模型中有 ω 序列'],['ZF + AD','所有整数博弈可决定'],['ZFC + L(ℝ) ⊨ AD','内模型决定性']],reason:'Woodin 的等一致性。ZF+AD 与完整 AC 冲突；三个理论并列仅指相对一致性强度相同。',sources:[references.larson,references.welch],problems:['ad'],link:'solid'},
    {label:'AD⁺ + θ₀ < Θ 层',theories:[['ZFC + λ 为 Woodin 极限，且某 κ<λ 是 <λ-强','精确大基数假设'],['ZF + AD⁺ + θ₀ < Θ','Solovay 序列开始分层']],reason:'Woodin 的等一致性，见 Steel 定理 15.1。',sources:[references.steel],problems:['adplus'],link:'solid'},
    {label:'ADᵣ 层',theories:[['ZFC + λ 同时是 Woodin 与 <λ-强基数的极限','导出模型假设'],['ZF + ADᵣ','实数选择的博弈可决定'],['ZF + AD + 每个实数集都是 Suslin','等价表述']],reason:'Woodin–Steel 的等一致性；末两项在 AD 背景下还可证明等价。',sources:[references.steeldm,references.larson],problems:['adr'],link:'solid'},
    {label:'ADᵣ + Θ 正则层',theories:[['ZF + ADᵣ + Θ 为正则基数','实数博弈决定性'],['ZFC + CH + ω₁ 上存在 ω₁-稠密理想','定理 1.5'],['ZFC + CH + NSω₁ 在稠密多个条件下为 ω₁-稠密','推论 1.6'],['ZFC + NS 在 Pω₁(ℝ) 上强且伪齐性','定理 1.10']],reason:'四项在相对一致性强度上相同；CH 只出现在相应的两个 ZFC 理想理论中，不能从其他框里省略或移入。',sources:[references.adthetareg],problems:['adthetareg'],link:'solid'},
    {label:'最大 Suslin 公理 LSA 层',theories:[['ZF + LSA','AD⁺ + 最大 Suslin 基数为 OD-不可达']],reason:'LSA 的一致性强度高于 ADᵣ+Θ 正则，但 LSA 本身蕴含 ¬ADᵣ；实线仅比较一致性强度。PFA 与 Woodin 极限层提供相容性上界，目前不把它们并列为等一致。',sources:[references.lsabook],problems:['lsa'],link:'solid'},
    {label:'LSA⁺ 层',theories:[['ZF + LSA⁺','AD⁺ + ∃A⊆ℝ ∀α<Θ ∀s:ω→α (A∉OD(s))']],reason:'Steel 定义 6.1 与命题 6.2：LSA⁺ 直接蕴含 LSA。它们是否有严格不同的一致性强度，原文明确列为尚未证明；这里单列理论，不与 LSA 同框标成等一致。定理 6.3 给出 least branch hod pair 假设下的相容性上界。',sources:[references.steelmouse,references.steelmousepdf],problems:['lsaplus'],link:'implication'},
    {label:'超紧致层',theories:[['ZFC + 存在超紧致基数','强闭包初等嵌入']],reason:'Woodin 与 Shelah–Woodin 证明超紧致基数对 L(ℝ) 中实数集的决定性、可测性和 Baire 性质有强烈推论；Baumgartner 从此出发构造 PFA 模型。这些均不是超紧致的精确等一致配对。',sources:[references.woodin1988,references.shelahwoodin,references.steelpfa],problems:['pfa','lrtrees','lrregular'],link:'dashed'}
  ],note:'¬SCH 比 0♯ 的单向必要条件强，精确落在 Mitchell 序 κ⁺⁺ 层。LSA ⟹ ¬ADᵣ；LSA⁺ ⟹ LSA，但严格一致性强度差异未证。超紧致的实数集结论限于 L(ℝ)。'},
  {name:'可扩与巨大基数',code:'TIER 06',summary:'以模型论刻画补足可扩与巨大层；同框只放已核对的等价或等一致理论。',route:'可扩 → Vopěnka → 巨大',relations:[['已证刻画','最小可扩基数 = ULST(L²)；每个固定 n 的最小 C⁽ⁿ⁾-可扩基数 = 对应 sort logic 的 ULST',references.bonneyosinski],['已证等价','VP 对应“每种抽象逻辑都有 ULST 数”的公理模式；巨大基数有类型省略紧致性刻画',references.bonneyosinski],['避免合并','不同 n 的 C⁽ⁿ⁾-可扩与 n-巨大是逐级系列，不构成同一等一致框']],bands:[
    {label:'可扩层',theories:[['ZFC + 存在可扩基数','extendible'],['ZFC + 二阶逻辑 L² 的 ULST 数存在','该数恰是最小可扩基数']],reason:'Boney–Osinski 定理 6.2 给出同一模型内的精确刻画：最小可扩基数 = ULST(L²)。',sources:[references.bonneyosinski]},
    {label:'C⁽ⁿ⁾-可扩系列（固定 n≥1）',theories:[['ZFC + 存在 C⁽ⁿ⁾-可扩基数','逐一固定 n'],['ZFC + sort logic Lˢ⁽ⁿ⁾ 的 ULST 数存在','最小 C⁽ⁿ⁾-可扩基数']],reason:'定理 6.3 对每个固定 n 给出精确对应；不同 n 之间不可视为同一强度。',sources:[references.bonneyosinski],link:'solid'},
    {label:'Vopěnka 原理 VP',theories:[['ZFC + VP','类形式的 Vopěnka 原理'],['ZFC +「每种逻辑都有 ULST 数」','相应公理模式']],reason:'推论 6.4 给出等价公理模式；这里的“每种逻辑”按原文的抽象逻辑定义理解。',sources:[references.bonneyosinski],link:'solid'},
    {label:'巨大层',theories:[['ZFC + 存在巨大基数 κ','某目标 λ>κ'],['ZFC + L(Q^WF) 满足相应的类型省略紧致性','[λ]^κ_*–κ 紧致性']],reason:'定理 4.5 对给定 κ<λ 逐点等价；存在量化后得到同一强度的理论。',sources:[references.bonneyosinski],link:'solid'},
    {label:'n-巨大系列（固定 n≥2）',theories:[['ZFC + 存在 n-巨大基数','n 分别指定']],reason:'1-巨大即巨大；n≥2 的每一项单列于此，未找到可靠的经典问题精确等一致配对。',link:'solid'}
  ],note:'ULST 指向上 Löwenheim–Skolem–Tarski 数。这里的模型论对应是精确刻画；n-巨大暂不添未经核对的等一致式。'},
  {name:'I3 与 I2',code:'TIER 07',summary:'I3 的 Laver table 推论与 I3、I2 之间的 exacting 层一起显示。',route:'rank-into-rank 第一段',relations:[['已证强度','I3 <Con 存在 exacting 基数 <Con I2',references.beyondhod],['单向判定','I3 ⇒ Laver table 的 q(n) 对每个 n 有定义',references.laver],['开放问题','q(n) 全函数性是否可在 ZFC 中证明？',references.laver]],bands:[
    {label:'I3',theories:[['ZFC + I3','非平凡 j:Vλ→Vλ']],reason:'I3 可证明首行 Laver table 周期无界，因此 q(n) 对每个 n 有定义；ZFC 能否证明该全函数性仍未解决。',sources:[references.laver],problems:['laverq']},
    {label:'exacting 层',theories:[['ZFC + 存在 exacting 基数','严格介于 I3 与 I2']],reason:'2025 年结果证明这一层的一致性强度严格高于 I3、低于 I2。',sources:[references.beyondhod],problems:['exacting'],link:'solid'},
    {label:'I2',theories:[['ZFC + I2','更强的秩内嵌入']],reason:'I2 还给出 HOD 假设与 exacting、上方可扩基数共同成立的相对一致性。',sources:[references.beyondhod],problems:['i2hod'],link:'solid'}
  ],note:'I3 对 q(n) 是单向判定，不能据此推断 q(n) 与 I3 等一致或已知独立于 ZFC。'},
  {name:'I1 与 I0',code:'TIER 08',summary:'I1 添入组合性质的相容性工作；I0 添入已证明的同强度理论。',route:'rank-into-rank 第二段',relations:[['已证等一致','I0 ≡Con 存在 ultraexacting 基数',references.beyondhod],['相容性结论','I1 可与相应的 λ⁺ 或 λ⁺⁺ 树性质分别相容；不能推成同时成立',references.dimontewu],['区分层次','树性质的力迫相容性不是 I1 的等一致刻画']],bands:[
    {label:'I1',theories:[['ZFC + I1','j:Vλ+1→Vλ+1']],reason:'I1(λ) 与 λ⁺ 或 λ⁺⁺ 的树性质等组合性质有分别构造的相容性结果；这里不宣称它们同时成立或等一致。',sources:[references.dimontewu],problems:['i1forcing']},
    {label:'I0',theories:[['ZFC + I0','j:L(Vλ+1)→L(Vλ+1)'],['ZFC + 存在 ultraexacting 基数','Aguilera–Bagaria–Goldberg–Lücke']],reason:'2025 年论文定理 A 证明两者等一致；并非断言两个公理在同一模型中等价。',sources:[references.beyondhod],problems:['i0hod'],link:'solid'}
  ],note:'I1 的组合结论是力迫相容性结果；I0 的 ultraexacting 配对才是等一致性结果。'},
  {name:'Reinhardt 基数',code:'TIER 09',branch:true,summary:'rank-Berkeley 与 Reinhardt 的精确等一致性仍是开放问题；单个 Reinhardt 放在此处。',route:'无选择公理 · rank-Berkeley / Reinhardt',relations:[['已证上界','rank-Berkeley ≤Con Reinhardt'],['开放问题','二者是否等一致？']],bands:[
    {label:'rank-Berkeley 层',theories:[['ZF + 存在 rank-Berkeley 基数','rBC'],['ZF + VP^ω(OR) + ¬VP(OR)','受限 Vopěnka 模式']],reason:'两项等一致（定理 5.14）。Reinhardt 可推出 rank-Berkeley 的存在；反向是否达到相同一致性强度仍是开放问题。基数本身的大小与公理的一致性强度也不能混为一谈。',sources:[references.berkeleyvp,references.periodicity,references.choicelessproblems]},
    {label:'单个 Reinhardt',theories:[['NBG − AC + 存在 Reinhardt 基数','非平凡类嵌入 j:V→V']],reason:'全宇宙嵌入须在无选择的类理论中形式化。它提供 rank-Berkeley 的一致性上界；目前不能把二者标成等一致。',sources:[references.beyondchoice,references.periodicity],link:'dashed'},
    {label:'真类多个 Reinhardt',theories:[['NBG − AC + 真类多个 Reinhardt 基数','全宇宙自嵌入'],['NBG − AC + 真类多个弱 Reinhardt 基数','目标内模型含每个序数的双幂集']],reason:'Goldberg 2021 年证明两种真类版本等一致；该结论不适用于单个 Reinhardt，也不自动与 super-Reinhardt 比较。',sources:[references.goldberg],problems:['reinhardtclass'],link:'dashed'}
  ],note:'已证：Con(Reinhardt) ⇒ Con(rank-Berkeley)。是否等一致尚无定论。下一层的 Berkeley 能向下反映出 Reinhardt 模型；这才是把 Berkeley 放到 Reinhardt 之后的依据。'},
  {name:'Berkeley 与强化 Reinhardt',code:'TIER 10',branch:true,summary:'Reinhardt 的强化与 Berkeley 分支形成偏序：Berkeley 与 super-Reinhardt 的先后尚未解决。',route:'无选择公理 · 两条相交的强化链',relations:[['严格强度链','Reinhardt <Con super-Reinhardt <Con totally Reinhardt'],['另一严格关系','Reinhardt <Con Berkeley'],['直接蕴含','club Berkeley ⇒ totally Reinhardt、Berkeley；limit club Berkeley ⇒ club Berkeley'],['仍未比较','Berkeley 与 super-Reinhardt、totally Reinhardt']],bands:[
    {label:'super-Reinhardt',theories:[['NBG − AC + 存在 super-Reinhardt 基数','固定 κ；任意 λ 都有 j:V→V 且 j(κ)>λ']],reason:'定义 2.2；定理 2.1 证明它在较低秩强反映 Reinhardt。因此其一致性强度严格高于单个 Reinhardt。与普通 Berkeley 的相对强弱未定。',sources:[references.beyondchoice]},
    {label:'Berkeley',theories:[['ZF + 存在 Berkeley 基数','BC'],['ZF + 𝕍ℙ^ω + ¬𝕍ℙ','受限可定义类模式']],reason:'两项等一致（定理 5.13）。定理 3.7 从最小 Berkeley 下方得到 Reinhardt 连同更强传统大基数的模型，故 Berkeley 严格强于单个 Reinhardt；它与 super-Reinhardt 的先后仍未解决。',sources:[references.berkeleyvp,references.beyondchoice],link:'dashed'},
    {label:'totally Reinhardt',theories:[['ZF + 存在 totally Reinhardt 基数','对每个 A，秩段内有 A-super-Reinhardt']],reason:'定义 2.3：对每个 A⊆Vκ，相应的 (Vκ,Vκ+1) 二阶模型满足 A-super-Reinhardt；因此向下反映 super-Reinhardt。普通 Berkeley 与此层的比较没有定论。',sources:[references.beyondchoice],link:'dashed'},
    {label:'club Berkeley',theories:[['ZF + 存在 club Berkeley 基数','临界点可取自任意 club C⊆δ']],reason:'定理 3.8：club Berkeley 本身是 totally Reinhardt；它也加强普通 Berkeley。仅凭此直接蕴含，不宣称已证明与 totally Reinhardt 严格不等一致。',sources:[references.beyondchoice],link:'dashed'},
    {label:'limit club Berkeley',theories:[['ZF + 存在 limit club Berkeley 基数','club Berkeley 且为 Berkeley 基数的极限']],reason:'定义 3.9；定理 3.9 在较低秩得到同时是 Berkeley 与 super-Reinhardt 的基数。它蕴含 club Berkeley；不额外宣称严格一致性差距。',sources:[references.beyondchoice],link:'dashed'}
  ],note:'上方关系图给出已证的严格强度或直接蕴含；框间虚线只排布内容。普通 Berkeley 与 super-Reinhardt、totally Reinhardt 的相对一致性强度仍未解决。'}
];

const tierList = document.querySelector('#tier-list');
const detail = document.querySelector('#detail');
const popover = document.querySelector('#popover');
let selected = 0;
let activeBadge = null;
let popoverShownAt = 0;

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderNavigation() {
  tierList.replaceChildren();
  tiers.forEach((tier, index) => {
    if (index === 9) tierList.append(element('div','branch-divider','无选择公理分支 · 跨背景谨慎比较'));
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
  titleArea.append(element('span','detail-kicker',`${tier.code} / ${selected===0?'算术序列':tier.branch?'ZF 分支':'ZFC 主线'}`));
  const title = element('h2',null,tier.name); title.id='tier-title';
  titleArea.append(title,element('p','detail-summary',tier.summary));
  head.append(titleArea,element('span','detail-index',tier.code.slice(-2)));
  detail.append(head);
  if(tier.branch)detail.append(element('div','branch-alert','本层属于无选择公理的研究线。虚线只表示主题或原 tier 的阅读顺序，不声称与 ZFC 主线有已证明的强弱关系。'));
  detail.append(element('p','route-label',tier.route));
  if(tier.relations?.length){const relations=element('div','relation-map');relations.append(element('strong','relation-map-title','强度关系、命题判定与待解问题'));tier.relations.forEach(([label,value,source])=>{const row=element('div','relation-map-row');row.append(element('span',null,label),element('b',null,value));if(source){const anchor=element('a','relation-source','文献 ↗');anchor.href=source[1];anchor.target='_blank';anchor.rel='noopener noreferrer';anchor.setAttribute('aria-label',source[0]);row.append(anchor);}relations.append(row);});detail.append(relations);}
  const list=element('div','level-list');
  tier.bands.forEach((band,index)=>{
    if(index>0){
      const connector=element('div',`connector${band.link==='solid'?'':band.link==='implication'?' implies':' dashed'}`);
      connector.setAttribute('aria-label',band.link==='solid'?'已知强度上升':band.link==='implication'?'反向公理直接蕴含；严格一致性强度未证':'阅读顺序；不主张严格强弱');
      if(band.link==='implication')connector.append(element('span','connector-label','直接蕴含 · 严格强度未证'));
      list.append(connector);
    }
    const card=element('article',`level${tier.branch?' branch':''}`);
    const top=element('div','level-top');
    top.append(element('h3',null,band.label),element('span','equicon-label',band.series?'逐级系列 · 非等一致':band.theories.length>1?'≡ Con · 同一强度':'单独理论'));
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
        badge.title='查看命题、证明及原始工作';
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
  popoverShownAt=Date.now();
  if(activeBadge&&activeBadge!==badge)activeBadge.setAttribute('aria-expanded','false');
  activeBadge=badge;badge.setAttribute('aria-expanded','true');
  popover.replaceChildren();
  const head=element('div','pop-head');
  const group=element('div');group.append(element('div','pop-kind',data.kind),element('h3',null,data.title));
  const close=element('button','close-pop','×');close.type='button';close.setAttribute('aria-label','关闭命题说明');close.addEventListener('click',hidePopover);
  head.append(group,close);popover.append(head);
  const who=element('p');const bold=element('strong',null,'证明／研究者与时间：');who.append(bold,document.createTextNode(data.people));popover.append(who);
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
window.addEventListener('scroll',()=>{if(!popover.hidden&&Date.now()-popoverShownAt>300)hidePopover();},{passive:true});
window.addEventListener('resize',hidePopover);
renderNavigation();renderDetail();
