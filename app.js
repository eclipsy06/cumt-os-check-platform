const chapters = [
  "操作系统基础",
  "进程管理",
  "内存管理",
  "设备管理",
  "文件系统"
];

const questionBank = [
  {
    id: "os-001",
    chapter: "操作系统基础",
    type: "fill",
    core: true,
    prompt: "操作系统的四大功能是____、____、____、____。",
    keywords: ["进程管理", "存储管理", "设备管理", "文件管理"],
    explain: "四大功能：进程管理、存储管理、设备管理、文件管理。现代操作系统还扩展了网络通信与服务、安全与保护等功能。"
  },
  {
    id: "os-002",
    chapter: "操作系统基础",
    type: "fill",
    core: true,
    prompt: "操作系统的四大特征是____、____、____、____。",
    keywords: ["并发", "共享", "虚拟", ["随机", "异步"]],
    explain: "四大特征：并发性、共享性、虚拟性、随机性/异步性。"
  },
  {
    id: "os-003",
    chapter: "操作系统基础",
    type: "fill",
    core: true,
    prompt: "并发是多个事件在同一____内发生；并行是多个事件在同一____发生。",
    keywords: ["时间间隔", "时刻"],
    explain: "并发强调同一时间间隔内发生，单 CPU 下常表现为微观交替、宏观同时；并行强调同一时刻发生，依赖多 CPU。"
  },
  {
    id: "os-004",
    chapter: "操作系统基础",
    type: "short",
    core: true,
    prompt: "简述联机批处理、脱机批处理和多道程序设计的区别。",
    keywords: ["联机", "主机", "串行", "脱机", "卫星机", "并行", "多道", "交替运行"],
    explain: "联机批处理仍由主机控制输入输出，主机与外设串行工作；脱机批处理增加卫星机，使主机与外设并行；多道是在内存中同时存放几道程序，等待 I/O 时切换执行其他程序。"
  },
  {
    id: "os-005",
    chapter: "操作系统基础",
    type: "short",
    core: true,
    prompt: "比较批处理、分时和实时操作系统的目标与适用场景。",
    keywords: ["批处理", "吞吐量", "分时", "交互", "响应", "实时", "及时", "外部事件"],
    explain: "批处理适合已调试好、不需要交互的大作业，目标是资源利用率和吞吐量；分时面向交互，重视及时响应；实时系统必须及时响应外部事件，响应要求比分时更高。"
  },
  {
    id: "os-006",
    chapter: "操作系统基础",
    type: "fill",
    prompt: "操作系统提供给程序使用系统服务的接口称为____；提供给用户操控计算机的接口称为____。",
    keywords: ["程序接口", "操作接口"],
    explain: "程序接口通常通过系统调用和 API 实现；操作接口包括命令界面、图形界面和作业控制命令语言。"
  },
  {
    id: "os-007",
    chapter: "操作系统基础",
    type: "short",
    core: true,
    prompt: "系统调用的作用和优点是什么？它与普通函数调用的关键区别是什么？",
    keywords: ["扩充机器功能", "访问", "底层资源", "安全", "用户态", "核心态", "模式切换"],
    explain: "系统调用使用户程序能安全访问底层软硬件资源而不必了解内部细节；普通函数调用通常在用户态完成，系统调用通常会从用户态切换到核心态。"
  },
  {
    id: "os-008",
    chapter: "操作系统基础",
    type: "fill",
    prompt: "CPU 的两种运行模式中，内核和驱动运行在____，一般用户进程运行在____。",
    keywords: [["核心态", "管态"], ["用户态", "目态"]],
    explain: "核心态/管态拥有更高特权，可访问所有内存和外设；用户态/目态受安全限制。"
  },

  {
    id: "proc-001",
    chapter: "进程管理",
    type: "fill",
    core: true,
    prompt: "进程是可并发运行的程序在某个数据集合上的一次____，是资源分配、保护和调度的基本单位。",
    keywords: ["运行过程"],
    explain: "进程强调动态性，是程序的一次运行过程。"
  },
  {
    id: "proc-002",
    chapter: "进程管理",
    type: "fill",
    core: true,
    prompt: "进程三态模型包括____、____、____。",
    keywords: ["就绪", "运行", "阻塞"],
    explain: "三态模型：就绪、运行、阻塞。"
  },
  {
    id: "proc-003",
    chapter: "进程管理",
    type: "short",
    core: true,
    prompt: "写出进程三态之间的典型转换原因。",
    keywords: ["就绪", "运行", "CPU", "阻塞", "I/O", "事件", "时间片", "抢占"],
    explain: "就绪到运行：被调度并分配 CPU；运行到阻塞：等待 I/O 等事件；阻塞到就绪：等待事件到来；运行到就绪：时间片用完或被高优先级进程抢占。"
  },
  {
    id: "proc-004",
    chapter: "进程管理",
    type: "fill",
    core: true,
    prompt: "PCB 记录进程的标识信息、现场信息和控制信息，是进程存在的____。",
    keywords: ["唯一标志"],
    explain: "系统通过 PCB 管理和控制进程，PCB 是进程存在的唯一标志。"
  },
  {
    id: "proc-005",
    chapter: "进程管理",
    type: "short",
    core: true,
    prompt: "比较程序、作业、进程、线程四个概念。",
    keywords: ["程序", "静态", "作业", "批处理", "进程", "动态", "线程", "调度"],
    explain: "程序是静态代码文件；作业是批处理系统中待装入运行的一系列程序和数据；进程是程序的一次运行过程；线程是进程中能独立执行的控制流，是处理器调度和分派的基本单位。"
  },
  {
    id: "proc-006",
    chapter: "进程管理",
    type: "fill",
    core: true,
    prompt: "某段时间内只能允许一个进程使用的资源称为____；访问该资源的代码段称为____。",
    keywords: ["临界资源", "临界区"],
    explain: "临界资源如打印机、共享变量；访问临界资源的程序段就是临界区。"
  },
  {
    id: "proc-007",
    chapter: "进程管理",
    type: "short",
    core: true,
    prompt: "临界区控制规则有哪些？",
    keywords: ["一次", "至多", "一个进程", "等待", "有限时间", "退出"],
    explain: "一次至多一个进程进入临界区；已有进程在临界区时，其他试图进入的进程应等待；进入临界区的进程应在有限时间内退出。"
  },
  {
    id: "proc-008",
    chapter: "进程管理",
    type: "fill",
    prompt: "进程通信常见三种方式是____、____、____。",
    keywords: ["消息传递", "共享内存", "管道"],
    explain: "消息传递灵活；共享内存效率高，适合大量数据；管道按 FIFO 传送数据流，需要严格同步。"
  },
  {
    id: "proc-009",
    chapter: "进程管理",
    type: "short",
    core: true,
    topic: "调度算法",
    calc: true,
    prompt: "三级调度分别是什么？各自负责什么？",
    keywords: ["高级调度", "作业调度", "中级调度", "换出", "换入", "低级调度", "进程调度", "CPU"],
    explain: "高级调度从后备作业中选作业并建立进程；中级调度在内存紧张时挂起/换出，合适时换入；低级调度把 CPU 分派给就绪队列中的某个进程。"
  },
  {
    id: "proc-010",
    chapter: "进程管理",
    type: "fill",
    core: true,
    topic: "调度算法",
    calc: true,
    prompt: "文档中要求前 5 种必会调度算法：____、____、____、____、____。",
    keywords: [["FCFS", "先来先服务"], ["SJF", "短作业优先"], ["SRTF", "最短剩余时间优先"], ["HRRF", "高响应比优先"], ["HPF", "优先权调度"]],
    explain: "前 5 种必会：FCFS、SJF、SRTF、HRRF、HPF。"
  },
  {
    id: "proc-011",
    chapter: "进程管理",
    type: "fill",
    core: true,
    topic: "调度算法",
    calc: true,
    prompt: "高响应比优先 HRRF 的响应比公式是：响应比 = 1 + ____ / ____。",
    keywords: ["等待时间", ["估计运行时间", "服务时间", "运行时间"]],
    explain: "响应比 = 1 + 已等待时间 / 估计运行时间。它兼顾等待时间和运行时间，非抢占式，不会发生饥饿。"
  },
  {
    id: "proc-012",
    chapter: "进程管理",
    type: "fill",
    topic: "调度算法",
    calc: true,
    prompt: "调度计算中，周转时间 = ____ - ____；带权周转时间 = ____ / ____。",
    keywords: ["完成时间", ["提交时间", "到达时间"], "周转时间", ["运行时间", "服务时间"]],
    explain: "周转时间 = 完成时间 - 提交时间/到达时间；带权周转时间 = 周转时间 / 运行时间。"
  },
  {
    id: "proc-013",
    chapter: "进程管理",
    type: "fill",
    core: true,
    prompt: "死锁产生的四个必要条件是____、____、____、____。",
    keywords: ["互斥", ["请求与保持", "占有且等待"], ["不剥夺", "不可剥夺"], "环路等待"],
    explain: "死锁四个必要条件：互斥、请求与保持、不剥夺、环路等待。"
  },
  {
    id: "proc-014",
    chapter: "进程管理",
    type: "short",
    core: true,
    prompt: "说明线程与进程的区别与联系。",
    keywords: ["进程", "资源", "线程", "调度", "共享", "并发", "开销", "地址空间"],
    explain: "进程是拥有资源的基本单位，线程是独立调度的基本单位；线程可共享所属进程资源；线程切换开销显著小于进程；引入线程后同一进程内也能并发。"
  },
  {
    id: "proc-015",
    chapter: "进程管理",
    type: "short",
    core: true,
    topic: "银行家算法",
    calc: true,
    prompt: "银行家算法进行资源请求检查时通常有哪些步骤？",
    keywords: ["Need", "Max", "Allocation", "Request", "Available", "试分配", "安全性", "安全序列"],
    explain: "先算 Need = Max - Allocation；检查 Request <= Need 和 Request <= Available；试分配后执行安全性检查；存在安全序列则允许分配，否则撤销。"
  },

  {
    id: "mem-001",
    chapter: "内存管理",
    type: "short",
    core: true,
    prompt: "比较覆盖技术和交换技术。",
    keywords: ["覆盖", "程序内部", "程序员", "外存", "交换", "进程", "操作系统", "内存利用率"],
    explain: "覆盖把程序分成不能同时执行的模块，当前需要的模块才进内存，要求程序员指定覆盖结构，主要发生在一个程序内部；交换由操作系统把暂时不能运行的进程换出，把具备条件的进程换入，主要发生在不同进程之间。"
  },
  {
    id: "mem-002",
    chapter: "内存管理",
    type: "fill",
    core: true,
    prompt: "动态可变分区分配算法包括首次适应、____、最佳适应、____、快速适应。",
    keywords: [["循环首次适应", "邻近适应", "Next Fit"], ["最坏适应", "Worst Fit"]],
    explain: "五种算法：首次适应、循环首次适应、最佳适应、最坏适应、快速适应。"
  },
  {
    id: "mem-003",
    chapter: "内存管理",
    type: "fill",
    core: true,
    prompt: "最佳适应算法容易产生很多极小且无法利用的____。",
    keywords: ["外部碎片"],
    explain: "最佳适应找能满足要求且最小的空闲分区，容易留下很多极小外部碎片。"
  },
  {
    id: "mem-004",
    chapter: "内存管理",
    type: "fill",
    core: true,
    prompt: "快表 TLB 保存当前最近访问过的____，用于加快____。",
    keywords: ["页表项", "地址转换"],
    explain: "地址转换时先查快表，命中即可直接得到物理块号，避免访问主存页表。"
  },
  {
    id: "mem-005",
    chapter: "内存管理",
    type: "fill",
    core: true,
    topic: "页式地址转换",
    calc: true,
    prompt: "页式地址转换中，逻辑地址 A、页面大小 L，则页号 P = ____，页内偏移 d = ____。",
    keywords: [["INT[A/L]", "A/L", "取整"], ["A MOD L", "A%L", "取余"]],
    explain: "页号 P = INT[A/L]，页内偏移 d = A MOD L。"
  },
  {
    id: "mem-006",
    chapter: "内存管理",
    type: "fill",
    topic: "页式地址转换",
    calc: true,
    prompt: "某系统页大小 1KB，逻辑地址 2345，页表中 2 号页对应 4 号块，则物理地址是____。",
    keywords: ["4393"],
    explain: "P=INT[2345/1024]=2，d=2345 MOD 1024=297，物理地址=4*1024+297=4393。"
  },
  {
    id: "mem-007",
    chapter: "内存管理",
    type: "short",
    core: true,
    prompt: "从目的、大小和逻辑地址空间三个角度比较分段和分页。",
    keywords: ["分页", "系统管理", "固定", "一维", "分段", "用户", "可变", "二维"],
    explain: "分页出于系统管理需要，页大小固定，地址空间一维；分段出于用户需要，段大小可变，地址空间二维。"
  },
  {
    id: "mem-008",
    chapter: "内存管理",
    type: "short",
    core: true,
    prompt: "段页式存储管理的基本原理是什么？",
    keywords: ["先分段", "分页", "段表", "页表", "物理块号", "页内偏移", "物理地址"],
    explain: "段页式先按逻辑程序分段，再把每段划分为等长页；转换时先查段表得到页表起始地址，再查页表得到物理块号，最后加页内偏移形成物理地址。"
  },
  {
    id: "mem-009",
    chapter: "内存管理",
    type: "fill",
    core: true,
    topic: "页面置换",
    calc: true,
    prompt: "常考页面置换算法包括____、____、____、____。",
    keywords: [["OPT", "最佳置换"], ["FIFO", "先进先出"], ["LRU", "最近最久未使用"], ["Clock", "时钟"]],
    explain: "四种常考算法：OPT、FIFO、LRU、Clock/NRU。"
  },
  {
    id: "mem-010",
    chapter: "内存管理",
    type: "short",
    core: true,
    topic: "页面置换",
    calc: true,
    prompt: "说明 OPT、FIFO、LRU、Clock 分别淘汰什么页面。",
    keywords: ["OPT", "最长时间", "FIFO", "最先进入", "LRU", "最久没有被访问", "Clock", "访问位"],
    explain: "OPT 淘汰以后永远不用或最长时间不访问的页；FIFO 淘汰最先进入内存的页；LRU 淘汰最近一段时间最久未访问的页；Clock 扫描访问位，1 清 0 给机会，0 淘汰。"
  },
  {
    id: "mem-011",
    chapter: "内存管理",
    type: "fill",
    topic: "页面置换",
    calc: true,
    prompt: "FIFO 简单但性能差，可能产生分配物理块增加而缺页率反而升高的____。",
    keywords: [["Belady异常", "异常"]],
    explain: "FIFO 容易产生 Belady 异常。"
  },

  {
    id: "dev-001",
    chapter: "设备管理",
    type: "fill",
    core: true,
    prompt: "按信息交换单位，设备可分为____设备和____设备。",
    keywords: ["块", "字符"],
    explain: "块设备如磁盘，以数据块为单位，可寻址；字符设备如键盘/打印机，以字符为单位，不可寻址。"
  },
  {
    id: "dev-002",
    chapter: "设备管理",
    type: "fill",
    core: true,
    prompt: "按资源分配共享方式，设备可分为____设备、____设备、____设备。",
    keywords: ["独占", "共享", "虚拟"],
    explain: "独占设备分配给一个进程后直到释放；共享设备可交替寻址使用；虚拟设备通过 SPOOLing 将独占设备改造成共享设备。"
  },
  {
    id: "dev-003",
    chapter: "设备管理",
    type: "fill",
    core: true,
    prompt: "I/O 设备四种控制方式按 CPU 干预逐渐减少依次是____、____、____、____。",
    keywords: ["程序循环查询", "中断驱动", "DMA", "通道"],
    explain: "四种控制方式：程序循环查询方式、中断驱动方式、直接内存访问 DMA 方式、通道控制方式。"
  },
  {
    id: "dev-004",
    chapter: "设备管理",
    type: "short",
    core: true,
    prompt: "比较程序循环查询、中断驱动、DMA、通道控制方式的原理和优缺点。",
    keywords: ["查询", "盲等", "中断", "部分并行", "DMA", "成块", "通道", "高度并行"],
    explain: "查询方式硬件简单但 CPU 盲等；中断驱动提高 CPU 利用率但大量小数据会频繁中断；DMA 成块在内存和外设间传输，仅开始和结束需 CPU 干预；通道能执行 I/O 指令，实现 CPU、通道、外设高度并行，但结构复杂、成本高。"
  },
  {
    id: "dev-005",
    chapter: "设备管理",
    type: "fill",
    core: true,
    prompt: "缓冲技术包括单缓冲、____、多缓冲/循环缓冲、____。",
    keywords: ["双缓冲", "缓冲池"],
    explain: "缓冲技术分类：单缓冲、双缓冲、多缓冲/循环缓冲、缓冲池。"
  },
  {
    id: "dev-006",
    chapter: "设备管理",
    type: "short",
    core: true,
    prompt: "SPOOLing 的原理和结构是什么？",
    keywords: ["假脱机", "多道程序", "磁盘", "独占设备", "共享", "输入井", "输出井", "输入进程", "输出进程"],
    explain: "SPOOLing 利用多道程序设计和高速磁盘，用软件模拟脱机 I/O 的卫星机操作，把低速独占设备改造成逻辑/虚拟共享设备；结构包括输入井、输出井、输入缓冲区、输出缓冲区、输入进程、输出进程。"
  },
  {
    id: "dev-007",
    chapter: "设备管理",
    type: "short",
    core: true,
    prompt: "设备独立性的含义和优点是什么？",
    keywords: ["逻辑设备名", "物理设备", "方便编程", "灵活性", "重定向", "适应性", "扩展性"],
    explain: "设备独立性指应用程序独立于具体物理设备，只使用逻辑设备名；优点是方便编程，提高设备分配灵活性，便于设备故障重定向和硬件升级。"
  },

  {
    id: "file-001",
    chapter: "文件系统",
    type: "fill",
    core: true,
    prompt: "文件逻辑结构包括无结构文件（____文件）和有结构文件（____文件）。",
    keywords: ["流式", "记录式"],
    explain: "无结构文件也称流式文件；有结构文件也称记录式文件。"
  },
  {
    id: "file-002",
    chapter: "文件系统",
    type: "fill",
    core: true,
    prompt: "文件物理结构主要有____分配、____分配、____分配。",
    keywords: ["连续", "链接", "索引"],
    explain: "文件在外存上的常见物理组织形式：连续分配、链接分配、索引分配。"
  },
  {
    id: "file-003",
    chapter: "文件系统",
    type: "short",
    core: true,
    prompt: "连续分配的优缺点是什么？",
    keywords: ["顺序访问", "直接访问", "随机访问", "外部碎片", "动态增长"],
    explain: "连续分配顺序访问速度快，支持直接/随机访问；缺点是易产生外部碎片，空间利用率低，文件难以动态增长。"
  },
  {
    id: "file-004",
    chapter: "文件系统",
    type: "short",
    core: true,
    prompt: "链接分配的优缺点是什么？",
    keywords: ["离散", "指针", "外部碎片", "动态增长", "顺序访问", "随机访问"],
    explain: "链接分配用指针连接离散物理块，消除外部碎片，支持动态增长；缺点是主要适合顺序访问，不支持高效随机访问，隐式链接还存在指针开销和可靠性问题。"
  },
  {
    id: "file-005",
    chapter: "文件系统",
    type: "short",
    core: true,
    prompt: "索引分配的优缺点是什么？",
    keywords: ["索引块", "物理地址", "随机访问", "动态增长", "无外部碎片", "存储开销"],
    explain: "索引分配为每个文件建立索引块，记录数据块物理地址；优点是支持随机访问、动态增长且无外部碎片；缺点是索引块带来额外存储开销。"
  },
  {
    id: "file-006",
    chapter: "文件系统",
    type: "fill",
    core: true,
    prompt: "位示图法用 1 bit 表示一个物理块，通常 1 表示____，0 表示____。",
    keywords: [["已分配", "占用"], "空闲"],
    explain: "文档表述：1 表示该块已分配，0 表示该块空闲。"
  },
  {
    id: "file-007",
    chapter: "文件系统",
    type: "short",
    core: true,
    prompt: "位示图法如何进行磁盘块分配和回收？优点是什么？",
    keywords: ["扫描", "0", "改为1", "物理块号", "回收", "改为0", "常驻内存", "位运算"],
    explain: "分配时扫描位示图找到 0，将其改为 1，并由行列号算物理块号；回收时根据物理块号定位对应位，把 1 改为 0；优点是位示图小，可常驻内存，分配回收快。"
  },
  {
    id: "file-008",
    chapter: "文件系统",
    type: "fill",
    core: true,
    topic: "文件索引",
    calc: true,
    prompt: "多级索引中，顶级索引块不直接指向数据块，而是指向____。",
    keywords: ["次级索引块"],
    explain: "当文件很大，一个索引块装不下所有物理块号时，需要按层级组织索引块。"
  },
  {
    id: "file-009",
    chapter: "文件系统",
    type: "fill",
    topic: "文件索引",
    calc: true,
    prompt: "混合索引把____地址和多级____地址结合在一个 inode 中。",
    keywords: ["直接", "间接"],
    explain: "混合索引常见于 UNIX inode，把直接地址和一级、二级、三级间接地址结合。"
  },
  {
    id: "file-010",
    chapter: "文件系统",
    type: "fill",
    topic: "文件索引",
    calc: true,
    prompt: "若块大小 1KB，索引项 4B，则每个索引块可存放____个地址项。",
    keywords: ["256"],
    explain: "1KB = 1024B，1024 / 4 = 256。"
  },
  {
    id: "file-011",
    chapter: "文件系统",
    type: "short",
    core: true,
    prompt: "为什么要引入索引节点 i-node？它的优缺点是什么？",
    keywords: ["文件名", "描述信息", "分开", "目录项", "inode", "磁盘I/O", "检索速度", "额外"],
    explain: "i-node 把文件名和其他描述信息分开，目录项只保留文件名和 inode 指针，能缩小目录项、减少目录检索时的磁盘 I/O、提高检索速度；缺点是找到文件名后可能还要额外读取 inode。"
  },
  {
    id: "file-012",
    chapter: "文件系统",
    type: "short",
    core: true,
    prompt: "比较文件静态共享和动态共享，并说明硬链接与软链接。",
    keywords: ["静态共享", "目录树", "硬链接", "链接计数", "软链接", "路径名", "动态共享", "打开文件表"],
    explain: "静态共享在进程结束后仍存在，常见硬链接和软链接；硬链接让多个目录项指向同一 inode，并维护链接计数；软链接是保存路径名的特殊文件；动态共享只在进程运行期间存在，通过系统打开文件表和进程打开文件表实现。"
  }
];

const cards = [
  ["操作系统基础", "OS四大功能", "进程管理、存储管理、设备管理、文件管理。"],
  ["操作系统基础", "OS四大特征", "并发性、共享性、虚拟性、随机性/异步性。"],
  ["操作系统基础", "并发与并行", "并发：同一时间间隔；并行：同一时刻。"],
  ["操作系统基础", "系统调用", "访问底层资源，通常引起用户态到核心态的切换。"],
  ["进程管理", "三态模型", "就绪、运行、阻塞。阻塞事件完成后回到就绪。"],
  ["进程管理", "PCB", "进程存在的唯一标志。"],
  ["进程管理", "调度算法", "FCFS、SJF、SRTF、HRRF、HPF。"],
  ["进程管理", "死锁四条件", "互斥、请求与保持、不剥夺、环路等待。"],
  ["内存管理", "可变分区算法", "首次、循环首次、最佳、最坏、快速适应。"],
  ["内存管理", "快表", "保存最近访问过的页表项，加快地址转换。"],
  ["内存管理", "页面置换", "OPT、FIFO、LRU、Clock。"],
  ["设备管理", "四种控制方式", "程序循环查询、中断驱动、DMA、通道。"],
  ["设备管理", "SPOOLing", "输入井、输出井、输入/输出缓冲区、输入/输出进程。"],
  ["文件系统", "逻辑结构", "流式文件、记录式文件。"],
  ["文件系统", "物理结构", "连续分配、链接分配、索引分配。"],
  ["文件系统", "inode", "目录项只保留文件名和 inode 指针，提高检索速度。"]
];

const state = {
  answered: 0,
  correct: 0,
  mistakes: {}
};

function loadState() {
  const saved = localStorage.getItem("osCheckState");
  if (saved) {
    Object.assign(state, JSON.parse(saved));
  }
}

function saveState() {
  localStorage.setItem("osCheckState", JSON.stringify(state));
}

function byId(id) {
  return document.getElementById(id);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function setView(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === viewId));
  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === viewId));
  const titles = {
    dashboard: "总览",
    practice: "章节检测",
    exam: "随机组卷",
    calc: "计算专项",
    cards: "背诵卡片",
    mistakes: "错题本"
  };
  byId("viewTitle").textContent = titles[viewId];
  if (viewId === "mistakes") renderMistakes();
  if (viewId === "dashboard") renderDashboard();
}

function initSelectors() {
  const chapterOptions = [`<option value="all">全部章节</option>`, ...chapters.map(c => `<option value="${c}">${c}</option>`)].join("");
  byId("chapterSelect").innerHTML = chapterOptions;
  byId("cardChapter").innerHTML = chapterOptions;
}

function renderDashboard() {
  const total = questionBank.length;
  byId("statAnswered").textContent = state.answered;
  byId("statAccuracy").textContent = state.answered ? `${Math.round(state.correct / state.answered * 100)}%` : "0%";
  byId("statMistakes").textContent = Object.keys(state.mistakes).length;
  byId("statTotal").textContent = total;

  byId("chapterProgress").innerHTML = chapters.map(ch => {
    const qs = questionBank.filter(q => q.chapter === ch);
    const wrong = qs.filter(q => state.mistakes[q.id]).length;
    const pct = qs.length ? Math.max(0, Math.round((qs.length - wrong) / qs.length * 100)) : 0;
    return `
      <div class="chapter-row">
        <b>${ch}</b>
        <div class="bar"><span style="width:${pct}%"></span></div>
        <span>${pct}%</span>
      </div>
    `;
  }).join("");
}

function renderQuiz(container, questions, title = "本轮检测") {
  const box = byId(container);
  if (!questions.length) {
    box.innerHTML = `<div class="quiz-status">没有匹配题目。</div>`;
    return;
  }
  box.innerHTML = `
    <div class="quiz-status">${title}：共 ${questions.length} 题。填空题按关键词自动核对，简答题按关键词命中自查。</div>
    ${questions.map((q, index) => renderQuestion(q, index)).join("")}
  `;
  bindQuestionActions(box);
}

function renderQuestion(q, index) {
  const typeLabel = q.type === "fill" ? "填空题" : "简答题";
  const calc = q.calc ? `<span class="tag calc">${q.topic || "计算"}</span>` : "";
  const body = q.type === "fill" ? `
    <input class="fill-input" type="text" placeholder="输入答案，多个空可用逗号、顿号或空格分隔。">
  ` : `
    <textarea placeholder="在这里写出你的答案，再点“核对答案”。"></textarea>
  `;
  return `
    <article class="quiz-card" data-qid="${q.id}">
      <div class="quiz-meta">
        <span class="tag">${q.chapter}</span>
        <span class="tag">${typeLabel}</span>
        ${q.core ? '<span class="tag">核心</span>' : ''}
        ${calc}
      </div>
      <h3 class="question-title">${index + 1}. ${q.prompt}</h3>
      ${body}
      <div class="quiz-actions">
        <button class="primary-btn check-answer">核对答案</button>
        <button class="ghost-btn mark-wrong">加入错题</button>
      </div>
      <div class="answer-box"></div>
    </article>
  `;
}

function bindQuestionActions(scope) {
  scope.querySelectorAll(".check-answer").forEach(btn => {
    btn.addEventListener("click", () => checkAnswer(btn.closest(".quiz-card")));
  });
  scope.querySelectorAll(".mark-wrong").forEach(btn => {
    btn.addEventListener("click", () => {
      const q = getQuestion(btn.closest(".quiz-card").dataset.qid);
      state.mistakes[q.id] = q.id;
      saveState();
      renderDashboard();
      const box = btn.closest(".quiz-card").querySelector(".answer-box");
      box.classList.add("show");
      box.innerHTML = `<span class="result-bad">已加入错题本。</span><br>${q.explain}`;
    });
  });
}

function getQuestion(id) {
  return questionBank.find(q => q.id === id);
}

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[，,。.;；:：、/\\()（）[\]【】"'“”‘’\-_=+]/g, "");
}

function keywordHit(text, keyword) {
  const source = normalize(text);
  const choices = Array.isArray(keyword) ? keyword : [keyword];
  return choices.some(item => source.includes(normalize(item)));
}

function getHits(text, keywords) {
  return (keywords || []).filter(keyword => keywordHit(text, keyword));
}

function checkAnswer(card) {
  const q = getQuestion(card.dataset.qid);
  const box = card.querySelector(".answer-box");
  const field = q.type === "fill" ? card.querySelector(".fill-input") : card.querySelector("textarea");
  const text = field.value.trim();

  if (!text) {
    box.classList.add("show");
    box.innerHTML = `<span class="result-bad">先写下你的答案。</span>`;
    return;
  }

  const hits = getHits(text, q.keywords);
  const required = q.type === "fill" ? q.keywords.length : Math.min(5, Math.ceil(q.keywords.length * 0.6));
  const correct = hits.length >= required;
  const prefix = q.type === "fill"
    ? `关键词命中：${hits.length}/${q.keywords.length}`
    : `关键词命中：${hits.length}/${q.keywords.length}，请对照要点自查`;

  state.answered += 1;
  if (correct) {
    state.correct += 1;
    delete state.mistakes[q.id];
  } else {
    state.mistakes[q.id] = q.id;
  }
  saveState();
  renderDashboard();
  box.classList.add("show");
  box.innerHTML = `<span class="${correct ? "result-good" : "result-bad"}">${prefix}</span><br>${q.explain}`;
}

function startPractice() {
  const ch = byId("chapterSelect").value;
  const type = byId("typeSelect").value;
  const qs = questionBank.filter(q => (ch === "all" || q.chapter === ch) && (type === "all" || q.type === type));
  renderQuiz("practiceArea", qs, ch === "all" ? "全部章节检测" : ch);
}

function startExam() {
  const count = Number(byId("examCount").value);
  const level = byId("examLevel").value;
  let qs = questionBank;
  if (level === "core") qs = qs.filter(q => q.core);
  if (level === "calc") qs = qs.filter(q => q.calc || q.core);
  renderQuiz("examArea", shuffle(qs).slice(0, count), "随机组卷");
}

function startCalc() {
  const topic = byId("calcSelect").value;
  const qs = questionBank.filter(q => q.topic === topic || (topic === "页面置换" && q.prompt.includes("置换")));
  renderQuiz("calcArea", qs, topic);
}

function renderCards() {
  const ch = byId("cardChapter").value;
  let list = cards.filter(c => ch === "all" || c[0] === ch);
  list = shuffle(list).slice(0, 8);
  byId("cardGrid").innerHTML = list.map(c => `
    <article class="flash-card">
      <h3>${c[1]}</h3>
      <p class="tag">${c[0]}</p>
      <div class="flash-answer">${c[2]}</div>
    </article>
  `).join("");
  document.querySelectorAll(".flash-card").forEach(card => {
    card.addEventListener("click", () => card.classList.toggle("revealed"));
  });
}

function renderMistakes() {
  const ids = Object.keys(state.mistakes);
  const list = ids.map(getQuestion).filter(Boolean);
  byId("mistakeList").innerHTML = list.length ? list.map(q => `
    <div class="mistake-item"><b>${q.chapter}</b>｜${q.prompt}</div>
  `).join("") : `<div class="quiz-status">错题本为空。做题时答错或手动加入后会出现在这里。</div>`;
  byId("mistakeArea").innerHTML = "";
}

function bindEvents() {
  document.querySelectorAll(".nav-item").forEach(btn => btn.addEventListener("click", () => setView(btn.dataset.view)));
  byId("startPractice").addEventListener("click", startPractice);
  byId("startExam").addEventListener("click", startExam);
  byId("startCalc").addEventListener("click", startCalc);
  byId("shuffleCards").addEventListener("click", renderCards);
  byId("cardChapter").addEventListener("change", renderCards);
  byId("reviewMistakes").addEventListener("click", () => {
    const qs = Object.keys(state.mistakes).map(getQuestion).filter(Boolean);
    renderQuiz("mistakeArea", qs, "错题重练");
  });
  byId("clearMistakes").addEventListener("click", () => {
    state.mistakes = {};
    saveState();
    renderMistakes();
    renderDashboard();
  });
  byId("resetProgress").addEventListener("click", () => {
    if (!confirm("确定清空答题记录和错题本吗？")) return;
    state.answered = 0;
    state.correct = 0;
    state.mistakes = {};
    saveState();
    renderDashboard();
    renderMistakes();
  });
}

loadState();
initSelectors();
bindEvents();
renderDashboard();
renderCards();
renderQuiz("practiceArea", questionBank.filter(q => q.chapter === "操作系统基础"), "操作系统基础");
