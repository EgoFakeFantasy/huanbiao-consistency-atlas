# 幻标 · 一致性强度图谱

静态网站，直接打开 `index.html` 可用。GitHub Pages 可从仓库根目录发布，无需构建。

内容以[幻标 2.0 原表](https://www.bilibili.com/opus/1023393752074420246)为参考，按每个 tier 的代表性公理重新命名并依相对一致性强度组织理论。原表的知乎[方向说明](https://zhuanlan.zhihu.com/p/2086038319830508988)列为参考链接。同一强度框直接并列等一致理论；实线表示已核对的强度上升，虚线只表示阅读顺序。

ZFC 之前新增算术段，从 Robinson 算术 Q，经 EFA、PRA/RCA₀/WKL₀、PA/ACA₀、ATR₀、Π¹₁-CA₀、完整二阶算术 Z₂，到每个有限 n 的 Zₙ，终点为 Zω。这里的 **ω 阶算术**依用户指定，指所有有限类型的理论并集，不引入新的无穷类型。PRA、IΣ₁、RCA₀、WKL₀ 等一致，PA 与 ACA₀ 等一致；即使 WKL₀ 比 RCA₀ 能证明更多二阶命题，也不能画成严格一致性强度箭头。参考 [Simpson《二阶算术子系统》](https://doi.org/10.1017/CBO9780511581007)与 [Schindler–Cheng 的高阶算术研究](https://www.uni-muenster.de/FB10/u/rds/cheng_yong_rds.pdf)。Q 与 EFA 附近仅按理论扩张排布，虚线不声称严格一致性差距。

“算术层：Q—Zω”是导航中的 **TIER 00**。桌面端的层次导航会保持在视野内；手机端右下角的“选择层次”可随时返回导航。页面资源使用版本参数，避免旧脚本缓存掩盖新增层次。每个 tier 上方都有关系区，分别标注已证的等一致或单向推论、命题判定，以及有文献依据的开放问题；“本图未核实”不等同于数学公开问题。[Friedman–Holy](https://www.logic.univie.ac.at/~dsyfriedman/papers/joint.peter.acc.pdf)讨论 PFA 与超紧致基数之间仍未闭合的一致性强度差距。

“世界基数”tier 以存在一枚 worldly cardinal（即 Vκ⊨ZFC）为起点。Con(ZFC) 层及传递 ZFC 模型层是前置档；[Hamkins 的强度链](https://jdh.hamkins.org/otherwordly-cardinals/)给出 worldly、真类多个 worldly、otherworldly、真类多个 otherworldly、totally otherworldly、真类多个 totally otherworldly，最后到不可达基数的严格一致性强度上升。worldly 不要求正则；[最小 worldly 基数的共尾度为 ω](https://jdh.hamkins.org/worldly-cardinals-are-not-always-downwards-absolute/)。[Kelley–Morse 类理论](https://jdh.hamkins.org/km-implies-conzfc/)另列为该区间的旁支，与相邻 otherworldly 档仅以阅读虚线连接；不宣称精确比较。

典型对应组包括 ZF+AD ≡Con ZFC+存在无穷多个 Woodin 基数、ZFC+PD ≡Con 每个有限 n 各有 n 个 Woodin 基数的公理模式、ZF+ADᵣ ≡Con 同时为 Woodin 与 <λ-强基数之极限的 λ、ZF+DC+所有实数集可测 ≡Con ZFC+不可达基数。此处的 ≡Con 表示相对一致性同强度，不表示两个理论互相蕴含。PFA 只标出来自超紧致基数的相容性构造。

命题弹窗附证明者、年份、工作介绍及原始论文 DOI 或原文链接。较高决定性层的精确表述参考 [Larson](https://paulblarson.github.io/Cabal_Determinacy.pdf) 与 [Steel](https://math.berkeley.edu/~steel/papers/tutorial3.pdf)。

“可扩与巨大基数”及更高各 tier 补入可扩基数与二阶逻辑 ULST 数、巨大基数与类型省略紧致性、I0 与 ultraexacting 基数、Berkeley 基数与受限 Vopěnka 原理、真类多个弱 Reinhardt 与 Reinhardt 基数等对应；各框附原论文。I3 对 Laver table 的 q(n) 全函数性是单向推论，ZFC 中可证与否仍未解决。I1 的组合性质也是相容性构造，不是等一致性配对。未核对到精确等一致对应的公理保持单独理论。

无选择公理的末两层改为偏序：Reinhardt 严格弱于 super-Reinhardt 和 Berkeley；super-Reinhardt 严格弱于 totally Reinhardt。club Berkeley 同时蕴含 Berkeley 与 totally Reinhardt；limit club Berkeley 蕴含 club Berkeley。普通 Berkeley 与 super-Reinhardt、totally Reinhardt 的一致性比较仍未解决。rank-Berkeley 可由 Reinhardt 推出，但二者是否等一致也是开放问题；不能把基数的大小顺序等同于理论的一致性强度。依据 [Bagaria–Koellner–Woodin](https://doi.org/10.1017/bsl.2019.28)、[Goldberg–Schlutzenberg](https://doi.org/10.4171/JEMS/1318) 及 [Choiceless Elementary Embeddings 的问题表](https://karagila.org/cheese/problems.pdf)。

“可测—超紧致基数”tier 另增 ZF+ADᵣ+「Θ 正则」的四项等一致组，包含 CH+ω₁ 上 ω₁-稠密理想及两种非平稳理想表述，依据 [Adolf 等人的论文](https://doi.org/10.48550/arXiv.2111.06220)。其上单列 LSA，依据 [Sargsyan–Trang 专著](https://doi.org/10.1017/9781009520683)说明定义、与 ADᵣ+Θ 正则的相对一致性比较及已知上界。LSA 蕴含 ¬ADᵣ，因此该箭头不表示直接蕴含；Woodin 极限及 PFA 只作为相容性上界。

LSA 之后单列 LSA⁺。Steel《Mouse Pairs and Suslin Cardinals》[定义 6.1、命题 6.2](https://math.berkeley.edu/~steel/papers/mousepairs.suslina.pdf)给出 LSA⁺ 的公式及 LSA⁺ 蕴含 LSA；原文也明确指出尚未证明二者具有严格不同的一致性强度。因此连接线使用“直接蕴含、严格强度未证”的标记，不把它们放入等一致框。[发表版本 DOI](https://doi.org/10.1142/9789819806584_0013)。

可测层之后增加 Mitchell 序刻度。可测基数处 GCH 失败、奇异强极限基数处 SCH 失败，与存在可测 κ 满足 o(κ)=κ⁺⁺ 三种理论等一致；依据 [Mitchell 的覆盖引理综述](https://people.clas.ufl.edu/wjm/files/covering.pdf)和 Gitik 的 [1989 年](https://doi.org/10.1016/0168-0072(89)90069-9)、[1991 年](https://doi.org/10.1016/0168-0072(91)90016-F)论文。Jensen 覆盖引理给出 ¬SCH ⇒ 0♯，这是单向必要条件，不把 0♯ 放入同一个等一致框。

超紧致层增加实数集结论：[Woodin 1988](https://doi.org/10.1073/pnas.85.18.6587)证明 L(ℝ) 的实数集由弱齐性树投影描述，并得到 L(ℝ)⊨AD；[Shelah–Woodin 1990](https://doi.org/10.1007/BF02801471)给出 L(ℝ) 中实数集的 Lebesgue 可测性、Baire 性质及不存在实数良序的结论。[Steel 2005](https://doi.org/10.2178/jsl/1129642125)还证明 PFA ⇒ L(ℝ)⊨AD。这些是直接推论或相容性构造，未把它们误列为超紧致的精确等一致理论。
