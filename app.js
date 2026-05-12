const chapters = [
  "操作系统基础",
  "进程管理",
  "内存管理",
  "设备管理",
  "文件系统"
];

const questionBank = [
  {
    id: "oswh-001",
    chapter: "操作系统基础",
    type: "short",
    core: true,
    prompt: "简述操作系统的四大功能，并分别说明每项功能的主要任务。",
    keywords: ["进程管理", "CPU", "存储管理", "内存", "设备管理", "I/O", "文件管理", "信息资源"],
    explain: "四大功能：进程管理，保证 CPU 正确地同时运行多道程序，处理进程建立、控制、通信、同步和资源共享；存储管理，管理内存分配、保护和虚拟存储；设备管理，管理 I/O 设备的分配、启动、控制、中断和缓冲；文件管理，组织和管理程序、数据等信息资源，提供按名存取、查询和保护接口。"
  },
  {
    id: "oswh-002",
    chapter: "操作系统基础",
    type: "short",
    core: true,
    prompt: "简述操作系统四大特征，并说明每个特征的含义。",
    keywords: ["并发", "时间间隔", "共享", "资源", "虚拟", "逻辑对象", "随机", "异步"],
    explain: "并发性：多个事件在同一时间间隔内发生；共享性：多个并发程序共享硬件和软件资源；虚拟性：把一个物理实体映射为一个或多个逻辑对象；随机性/异步性：程序运行时机、顺序和耗时不确定。"
  },
  {
    id: "oswh-003",
    chapter: "操作系统基础",
    type: "short",
    core: true,
    prompt: "比较联机批处理、脱机批处理和多道程序设计。",
    keywords: ["联机", "主机", "串行", "脱机", "卫星机", "并行", "多道", "交替运行"],
    explain: "联机批处理由监督程序把作业从输入设备输入并运行，主机与外设仍串行；脱机批处理增加卫星机，作业先由卫星机输入到磁带等介质，使主机与外设并行；多道程序设计在内存中同时存放几道程序，等待 I/O 时切换执行其他程序，提高 CPU 和资源利用率。"
  },
  {
    id: "oswh-004",
    chapter: "操作系统基础",
    type: "short",
    core: true,
    prompt: "说明并发和并行的区别与联系。",
    keywords: ["并发", "时间间隔", "并行", "同一时刻", "多CPU", "特例"],
    explain: "并发指多个事件在同一时期或时间间隔内发生，单 CPU 下通常是微观交替、宏观同时；并行指多个事件在同一时刻发生，依赖多 CPU。并行是并发的特例。"
  },
  {
    id: "oswh-005",
    chapter: "操作系统基础",
    type: "short",
    core: true,
    prompt: "比较批处理、分时和实时操作系统的适用场景、目标和特点。",
    keywords: ["批处理", "吞吐量", "分时", "交互", "响应", "实时", "外部事件", "及时"],
    explain: "批处理适合不需要交互的大作业，目标是提高资源利用率和吞吐量；分时系统通过时间片轮流服务多用户，强调同时性、交互性、独立性和及时性；实时系统必须及时响应外部事件，用于过程控制或实时信息处理，响应速度要求比分时系统更高。"
  },
  {
    id: "oswh-006",
    chapter: "操作系统基础",
    type: "short",
    prompt: "什么是程序接口和操作接口？分别包含哪些常见形式？",
    keywords: ["程序接口", "系统调用", "API", "操作接口", "命令界面", "图形界面", "作业控制"],
    explain: "程序接口是操作系统提供给程序使用系统服务和功能的接口，通常通过系统调用和 API 实现；操作接口是操作系统提供给用户操控计算机的接口，包括命令界面、图形界面和作业控制命令语言。"
  },
  {
    id: "oswh-007",
    chapter: "操作系统基础",
    type: "short",
    prompt: "系统调用的作用和优点是什么？它与普通函数调用有什么区别？",
    keywords: ["扩充机器功能", "系统能力", "底层资源", "安全", "用户态", "核心态", "模式切换"],
    explain: "系统调用用于扩充机器功能、增强系统能力、方便用户访问底层软硬件资源，同时屏蔽内部结构并保证安全。普通函数调用通常在用户态完成；系统调用通常会引起从用户态到核心态的处理器模式切换。"
  },
  {
    id: "oswh-008",
    chapter: "操作系统基础",
    type: "fill",
    core: true,
    prompt: "并发是多个事件在同一____内发生；并行是多个事件在同一____发生。",
    keywords: ["时间间隔", "时刻"],
    explain: "并发强调同一时间间隔，平行强调同一时刻。"
  },

  {
    id: "oswh-009",
    chapter: "进程管理",
    type: "short",
    core: true,
    prompt: "分别说明进程、程序、线程和作业的概念。",
    keywords: ["进程", "运行过程", "程序", "静态", "线程", "控制流", "作业", "批处理"],
    explain: "进程是可并发运行的程序在某个数据集合上的一次运行过程，是资源分配、保护和调度的基本单位；程序是静态代码文件；线程是进程中能够独立执行的控制流，是处理器调度和分派的基本单位；作业是批处理系统中要装入系统运行的一系列程序和数据。"
  },
  {
    id: "oswh-010",
    chapter: "进程管理",
    type: "short",
    core: true,
    prompt: "画出或描述进程三态模型，并说明状态转换的原因。",
    keywords: ["就绪", "运行", "阻塞", "CPU", "I/O", "事件", "时间片", "抢占"],
    explain: "三态为就绪、运行、阻塞。就绪到运行：被调度并分配 CPU；运行到阻塞：等待 I/O 或某事件；阻塞到就绪：等待事件到来；运行到就绪：时间片用完或被高优先级进程抢占。"
  },
  {
    id: "oswh-011",
    chapter: "进程管理",
    type: "short",
    core: true,
    prompt: "PCB 的作用是什么？为什么说 PCB 是进程存在的唯一标志？",
    keywords: ["PCB", "进程控制块", "标识信息", "现场信息", "控制信息", "管理", "控制", "唯一标志"],
    explain: "PCB 记录描述进程当前状态和控制进程运行的信息，包括标识信息、现场信息和控制信息。系统通过 PCB 管理和控制进程，因此 PCB 是进程存在的唯一标志。"
  },
  {
    id: "oswh-012",
    chapter: "进程管理",
    type: "short",
    prompt: "比较核心态和用户态。",
    keywords: ["核心态", "管态", "内核", "驱动", "特权", "用户态", "目态", "受限"],
    explain: "核心态/管态是系统内核和驱动运行的模式，拥有更高指令执行特权，可访问所有内存和外设；用户态/目态是一般用户进程运行模式，受到安全限制，只能访问自身映射的虚拟地址空间。"
  },
  {
    id: "oswh-013",
    chapter: "进程管理",
    type: "short",
    core: true,
    prompt: "说明临界资源、临界区和临界区控制规则。",
    keywords: ["临界资源", "一个进程", "临界区", "代码", "至多一个", "等待", "有限时间", "退出"],
    explain: "临界资源是某段时间内只能允许一个进程使用的资源；临界区是访问临界资源的代码段。控制规则：一次至多一个进程进入临界区；已有进程在临界区时其他进程等待；进入临界区的进程应在有限时间内退出。"
  },
  {
    id: "oswh-014",
    chapter: "进程管理",
    type: "short",
    core: true,
    prompt: "比较进程互斥和进程同步。",
    keywords: ["互斥", "竞争", "独占性资源", "同步", "共同任务", "协调", "执行次序", "特殊"],
    explain: "互斥是若干进程因竞争独占性资源而产生的竞争制约关系；同步是并发进程为完成共同任务，基于某个条件协调运行进度和执行次序而产生的协作制约关系。互斥是一种特殊的同步。"
  },
  {
    id: "oswh-015",
    chapter: "进程管理",
    type: "short",
    prompt: "说明消息传递、共享内存和管道通信的适用范围与特点。",
    keywords: ["消息传递", "消息缓冲区", "共享内存", "高效", "大量数据", "管道", "FIFO", "同步"],
    explain: "消息传递把数据封装为消息并通过消息缓冲区传递，灵活且适用范围广；共享内存在内存中划出共享区，效率高，适合大量数据传输；管道是连接读写进程的特殊文件，按 FIFO 传送数据流，需要严格同步。"
  },
  {
    id: "oswh-016",
    chapter: "进程管理",
    type: "short",
    core: true,
    topic: "调度算法",
    calc: true,
    prompt: "什么是三级调度？分别说明高级调度、中级调度和低级调度的任务。",
    keywords: ["高级调度", "作业调度", "后备作业", "中级调度", "挂起", "换入", "低级调度", "CPU"],
    explain: "高级调度/作业调度从后备作业中选作业并分配资源、建立进程调入内存；中级调度/平衡调度在内存紧张时挂起并换出进程，内存空闲时换入；低级调度/进程调度把 CPU 分派给就绪队列中的一个进程。"
  },
  {
    id: "oswh-017",
    chapter: "进程管理",
    type: "short",
    core: true,
    topic: "调度算法",
    calc: true,
    prompt: "简述 FCFS、SJF、SRTF、HRRF 和 HPF 五种调度算法的基本思想。",
    keywords: ["FCFS", "先来先服务", "SJF", "短作业", "SRTF", "剩余时间", "HRRF", "响应比", "HPF", "优先权"],
    explain: "FCFS 按就绪先后顺序调度；SJF 选择估计 CPU 时间最短的作业，非抢占；SRTF 是 SJF 的抢占式版本，选择剩余时间最短者；HRRF 按响应比=1+等待时间/估计运行时间选择；HPF 按优先权选择进程。"
  },
  {
    id: "oswh-018",
    chapter: "进程管理",
    type: "short",
    core: true,
    prompt: "说明死锁的定义和四个必要条件。",
    keywords: ["死锁", "互相等待", "互斥", "请求与保持", "不剥夺", "环路等待"],
    explain: "死锁是一组进程各自占有部分资源并等待其他进程释放资源，导致永远无法继续执行的状态。必要条件：互斥、请求与保持、不剥夺、环路等待。"
  },
  {
    id: "oswh-019",
    chapter: "进程管理",
    type: "short",
    core: true,
    prompt: "说明线程的概念，并比较线程和进程的区别与联系。",
    keywords: ["线程", "控制流", "调度", "进程", "资源", "共享", "并发", "开销"],
    explain: "线程是进程中能独立执行的控制流，是处理器调度和分派的基本单位。进程是拥有资源的基本单位，线程是调度的基本单位；线程可共享所属进程资源；线程切换开销小于进程；引入线程后同一进程内部也可以并发。"
  },
  {
    id: "oswh-020",
    chapter: "进程管理",
    type: "fill",
    core: true,
    topic: "调度算法",
    calc: true,
    prompt: "HRRF 的响应比 = 1 + ____ / ____。",
    keywords: ["等待时间", ["估计运行时间", "运行时间", "服务时间"]],
    explain: "响应比 = 1 + 已等待时间 / 估计运行时间。"
  },

  {
    id: "oswh-021",
    chapter: "内存管理",
    type: "short",
    core: true,
    prompt: "比较覆盖技术和交换技术。",
    keywords: ["覆盖", "程序内部", "模块", "程序员", "交换", "进程", "操作系统", "外存"],
    explain: "覆盖把一个程序分成若干不能同时执行的模块，当前需要的模块装入内存，不需要的放外存，要求程序员指定覆盖结构，主要发生在一个程序内部。交换是在内存紧张时由操作系统把暂时不能运行的进程换出，把具备运行条件的进程换入，主要发生在不同进程之间。"
  },
  {
    id: "oswh-022",
    chapter: "内存管理",
    type: "short",
    core: true,
    prompt: "说明五种动态可变分区分配算法的基本思想。",
    keywords: ["首次适应", "循环首次适应", "最佳适应", "最坏适应", "快速适应"],
    explain: "首次适应从头查找第一个满足要求的空闲分区；循环首次适应从上次位置之后开始查找；最佳适应找能满足要求且最小的分区；最坏适应找最大的空闲分区；快速适应按容量分类建立链表，直接到合适类别取分区。"
  },
  {
    id: "oswh-023",
    chapter: "内存管理",
    type: "short",
    core: true,
    prompt: "简述快表 TLB 的作用。",
    keywords: ["快表", "TLB", "高速缓存", "页表项", "命中", "物理块号", "地址转换", "内存访问"],
    explain: "快表是一组关联的高速缓存寄存器，用于保存最近访问过的页表项。地址转换时先查快表，命中则直接得到物理块号，避免访问主存页表，从而加快地址转换和内存访问。"
  },
  {
    id: "oswh-024",
    chapter: "内存管理",
    type: "short",
    core: true,
    prompt: "比较分段和分页。",
    keywords: ["分页", "系统管理", "固定", "一维", "分段", "用户", "可变", "二维"],
    explain: "目的：分页出于系统管理需要，分段出于用户需要。大小：页大小固定，由硬件决定；段大小可变，由程序逻辑决定。地址空间：分页是一维地址空间；分段是二维地址空间，需要段号和段内偏移。"
  },
  {
    id: "oswh-025",
    chapter: "内存管理",
    type: "short",
    core: true,
    prompt: "说明段页式存储管理的基本原理。",
    keywords: ["分段", "分页", "段表", "页表", "页表起始地址", "物理块号", "页内偏移"],
    explain: "段页式结合分段和分页：先把用户逻辑程序分段，再把每个段划分为等长页。地址转换时先查段表得到该段页表起始地址，再查页表得到物理块号，最后加页内偏移形成物理地址。"
  },
  {
    id: "oswh-026",
    chapter: "内存管理",
    type: "short",
    core: true,
    topic: "页面置换",
    calc: true,
    prompt: "说明请求式分页中的内存分配策略和页面调入策略。",
    keywords: ["固定分配局部置换", "可变分配全局置换", "可变分配局部置换", "请求调页", "预调页"],
    explain: "内存分配策略包括固定分配局部置换、可变分配全局置换、可变分配局部置换；页面调入策略包括请求调页，即用到才调入，以及预调页，即提前预判并调入。"
  },
  {
    id: "oswh-027",
    chapter: "内存管理",
    type: "short",
    core: true,
    topic: "页面置换",
    calc: true,
    prompt: "说明 OPT、FIFO、LRU、Clock 四种页面置换算法。",
    keywords: ["OPT", "最长时间", "FIFO", "最先进入", "LRU", "最久未使用", "Clock", "访问位"],
    explain: "OPT 淘汰以后永远不再使用或最长时间不访问的页，是理论最优；FIFO 淘汰最先进入内存的页，简单但可能性能差；LRU 淘汰最近一段时间最久未访问的页；Clock 把页面组成循环队列，访问位为 1 则清 0 给机会，访问位为 0 则淘汰。"
  },
  {
    id: "oswh-028",
    chapter: "内存管理",
    type: "fill",
    core: true,
    topic: "页式地址转换",
    calc: true,
    prompt: "页式地址转换中，逻辑地址 A、页面大小 L，则页号 P=____，页内偏移 d=____。",
    keywords: [["INT[A/L]", "A/L", "取整"], ["A MOD L", "A%L", "取余"]],
    explain: "页号 P=INT[A/L]，页内偏移 d=A MOD L。"
  },

  {
    id: "oswh-029",
    chapter: "设备管理",
    type: "short",
    core: true,
    prompt: "说明设备按信息交换单位和按资源分配共享方式的分类。",
    keywords: ["块设备", "字符设备", "独占设备", "共享设备", "虚拟设备", "SPOOLing"],
    explain: "按信息交换单位可分为块设备和字符设备：块设备如磁盘，以数据块为单位、传输率高、可寻址；字符设备如键盘/打印机，以字符为单位、不可寻址。按资源分配共享方式可分为独占设备、共享设备和虚拟设备，虚拟设备常由 SPOOLing 把独占设备改造为逻辑共享设备。"
  },
  {
    id: "oswh-030",
    chapter: "设备管理",
    type: "short",
    core: true,
    prompt: "说明程序循环查询、中断驱动、DMA 和通道控制四种 I/O 控制方式的原理及优缺点。",
    keywords: ["查询", "盲等", "中断", "CPU利用率", "DMA", "成块", "通道", "高度并行"],
    explain: "程序循环查询由 CPU 不断轮询设备状态，硬件简单但 CPU 盲等；中断驱动由外设完成 I/O 后向 CPU 发中断，提高 CPU 利用率但大量小数据会频繁中断；DMA 由 DMA 控制器在内存和外设间成块传输，减轻 CPU 负担但灵活性较差；通道控制由专用 I/O 处理机执行 I/O 指令，实现 CPU、通道、外设高度并行，但结构复杂、成本高。"
  },
  {
    id: "oswh-031",
    chapter: "设备管理",
    type: "short",
    prompt: "说明单缓冲、双缓冲、多缓冲和缓冲池。",
    keywords: ["单缓冲", "双缓冲", "多缓冲", "循环队列", "缓冲池", "队列", "共享"],
    explain: "单缓冲是在内存设一个缓冲区；双缓冲设两个缓冲区，输入和处理可更好并行；多缓冲/循环缓冲把多个缓冲区组织成循环队列；缓冲池统一管理多个缓冲区块，划分为空缓冲队列、输入队列、输出队列等，供全系统进程共享。"
  },
  {
    id: "oswh-032",
    chapter: "设备管理",
    type: "short",
    core: true,
    prompt: "说明 SPOOLing 的原理和结构。",
    keywords: ["假脱机", "多道程序", "磁盘", "独占设备", "共享", "输入井", "输出井", "输入进程", "输出进程"],
    explain: "SPOOLing 即假脱机技术，利用多道程序设计和高速大容量磁盘，在主机控制下用软件模拟脱机 I/O 中卫星机操作，把低速独占设备改造成多进程共享的逻辑/虚拟设备。结构包括输入井、输出井、输入缓冲区、输出缓冲区、输入进程和输出进程。"
  },
  {
    id: "oswh-033",
    chapter: "设备管理",
    type: "short",
    prompt: "什么是设备独立性？它有哪些优点？",
    keywords: ["逻辑设备名", "物理设备", "方便编程", "灵活性", "重定向", "适应性", "扩展性"],
    explain: "设备独立性指应用程序独立于具体物理设备，程序中只使用逻辑设备名。优点：方便用户编程；提高设备分配灵活性，设备损坏时可重定向到同类设备；改善系统适应性和扩展性，便于硬件升级。"
  },
  {
    id: "oswh-034",
    chapter: "设备管理",
    type: "fill",
    prompt: "SPOOLing 的结构包括磁盘上的____和____，内存中的输入/输出缓冲区，以及输入进程和输出进程。",
    keywords: ["输入井", "输出井"],
    explain: "SPOOLing 的典型结构：输入井、输出井、输入缓冲区、输出缓冲区、输入进程、输出进程。"
  },

  {
    id: "oswh-035",
    chapter: "文件系统",
    type: "short",
    core: true,
    prompt: "说明文件的逻辑结构，并比较流式文件和记录式文件。",
    keywords: ["逻辑结构", "用户观点", "流式文件", "连续字符流", "记录式文件", "记录"],
    explain: "文件逻辑结构是从用户观点看到的文件组织形式。无结构文件/流式文件内部是一串连续字符流，没有明显结构；有结构文件/记录式文件由若干记录组成，可分为顺序文件、索引文件、索引顺序文件等。"
  },
  {
    id: "oswh-036",
    chapter: "文件系统",
    type: "short",
    core: true,
    prompt: "比较连续分配、链接分配和索引分配三种文件物理结构的原理、优点和缺点。",
    keywords: ["连续分配", "顺序访问", "外部碎片", "链接分配", "动态增长", "随机访问", "索引分配", "索引块"],
    explain: "连续分配把文件放在连续物理块中，顺序访问快并支持随机访问，但易产生外部碎片且难动态增长；链接分配把离散块用指针连接，消除外部碎片、便于动态增长，但随机访问差；索引分配为文件设置索引块记录所有数据块地址，支持随机访问和动态增长，无外部碎片，但索引块有额外开销。"
  },
  {
    id: "oswh-037",
    chapter: "文件系统",
    type: "short",
    prompt: "说明位示图法的思想、分配回收过程和优点。",
    keywords: ["位示图", "1 bit", "已分配", "空闲", "扫描", "物理块号", "常驻内存", "位运算"],
    explain: "位示图用一段二进制位表示磁盘块使用情况，通常 1 表示已分配，0 表示空闲。分配时扫描位示图找到 0，改为 1 并计算物理块号；回收时根据物理块号定位对应位，把 1 改为 0。优点是位示图很小，可常驻内存，分配回收快。"
  },
  {
    id: "oswh-038",
    chapter: "文件系统",
    type: "short",
    core: true,
    topic: "文件索引",
    calc: true,
    prompt: "说明多级索引和混合索引的基本思想。",
    keywords: ["多级索引", "索引块", "次级索引块", "混合索引", "直接地址", "间接地址", "inode"],
    explain: "多级索引用于大文件，当一个索引块装不下所有物理块号时，顶级索引块指向次级索引块，次级索引块再指向数据块或更低级索引块。混合索引把直接地址和多级间接地址结合在一个 inode 中。"
  },
  {
    id: "oswh-039",
    chapter: "文件系统",
    type: "short",
    core: true,
    prompt: "什么是 FCB？为什么要引入索引节点 i-node？它的优缺点是什么？",
    keywords: ["FCB", "文件控制块", "文件名", "描述信息", "分开", "目录项", "磁盘I/O", "检索速度"],
    explain: "FCB 是文件控制块，传统目录中每个目录项就是一个 FCB，包含文件名、物理地址和属性等。引入 i-node 是为了把文件名和其他描述信息分开，目录项只保留文件名和 inode 指针，从而缩小目录项、减少目录检索时磁盘 I/O、提高检索速度；缺点是找到文件名后可能还需额外读取 inode。"
  },
  {
    id: "oswh-040",
    chapter: "文件系统",
    type: "short",
    core: true,
    prompt: "比较文件静态共享和动态共享，并说明硬链接与软链接。",
    keywords: ["静态共享", "硬链接", "索引节点", "链接计数", "软链接", "路径名", "动态共享", "打开文件表"],
    explain: "静态共享在系统重启或进程结束后仍存在，主要体现在目录树链接。硬链接让多个目录项指向同一 inode，并用链接计数控制真正删除；软链接是保存源文件路径名的特殊文件，可跨文件系统甚至跨网络但访问开销较大。动态共享只在进程运行期间存在，通过系统打开文件表和进程打开文件表实现。"
  },
  {
    id: "oswh-041",
    chapter: "文件系统",
    type: "fill",
    core: true,
    topic: "文件索引",
    calc: true,
    prompt: "若块大小为 1KB，索引项大小为 4B，则一个索引块可存放____个地址项。",
    keywords: ["256"],
    explain: "1KB=1024B，1024/4=256。"
  },

  {
    id: "aux-os-001",
    chapter: "操作系统基础",
    type: "fill",
    core: true,
    prompt: "操作系统的四大功能是____、____、____、____。",
    keywords: ["进程管理", "存储管理", "设备管理", "文件管理"],
    explain: "四大功能：进程管理、存储管理、设备管理、文件管理。"
  },
  {
    id: "aux-os-002",
    chapter: "操作系统基础",
    type: "fill",
    core: true,
    prompt: "操作系统的四大特征是____、____、____、____。",
    keywords: ["并发", "共享", "虚拟", ["随机", "异步"]],
    explain: "四大特征：并发性、共享性、虚拟性、随机性/异步性。"
  },
  {
    id: "aux-os-003",
    chapter: "操作系统基础",
    type: "fill",
    prompt: "操作系统提供给程序使用系统服务的接口称为____；提供给用户操控计算机的接口称为____。",
    keywords: ["程序接口", "操作接口"],
    explain: "程序接口通常通过系统调用和 API 实现；操作接口包括命令界面、图形界面和作业控制命令语言。"
  },
  {
    id: "aux-os-004",
    chapter: "操作系统基础",
    type: "fill",
    prompt: "CPU 的两种运行模式中，内核和驱动运行在____，一般用户进程运行在____。",
    keywords: [["核心态", "管态"], ["用户态", "目态"]],
    explain: "核心态/管态拥有更高特权；用户态/目态受到安全限制。"
  },

  {
    id: "aux-proc-001",
    chapter: "进程管理",
    type: "fill",
    core: true,
    prompt: "进程是可并发运行的程序在某个数据集合上的一次____。",
    keywords: ["运行过程"],
    explain: "进程强调程序的一次动态运行过程。"
  },
  {
    id: "aux-proc-002",
    chapter: "进程管理",
    type: "fill",
    core: true,
    prompt: "进程三态模型包括____、____、____。",
    keywords: ["就绪", "运行", "阻塞"],
    explain: "三态模型：就绪、运行、阻塞。"
  },
  {
    id: "aux-proc-003",
    chapter: "进程管理",
    type: "fill",
    core: true,
    prompt: "PCB 记录进程的标识信息、现场信息和控制信息，是进程存在的____。",
    keywords: ["唯一标志"],
    explain: "系统通过 PCB 管理和控制进程，所以 PCB 是进程存在的唯一标志。"
  },
  {
    id: "aux-proc-004",
    chapter: "进程管理",
    type: "fill",
    core: true,
    prompt: "某段时间内只能允许一个进程使用的资源称为____；访问该资源的代码段称为____。",
    keywords: ["临界资源", "临界区"],
    explain: "临界资源需要互斥访问；访问临界资源的程序段称为临界区。"
  },
  {
    id: "aux-proc-005",
    chapter: "进程管理",
    type: "fill",
    prompt: "进程通信常见三种方式是____、____、____。",
    keywords: ["消息传递", "共享内存", "管道"],
    explain: "常见通信方式：消息传递、共享内存、管道通信。"
  },
  {
    id: "aux-proc-006",
    chapter: "进程管理",
    type: "fill",
    core: true,
    topic: "调度算法",
    calc: true,
    prompt: "调度计算中，周转时间 = ____ - ____；带权周转时间 = ____ / ____。",
    keywords: ["完成时间", ["提交时间", "到达时间"], "周转时间", ["运行时间", "服务时间"]],
    explain: "周转时间 = 完成时间 - 提交时间/到达时间；带权周转时间 = 周转时间 / 运行时间。"
  },
  {
    id: "aux-proc-007",
    chapter: "进程管理",
    type: "fill",
    core: true,
    prompt: "死锁产生的四个必要条件是____、____、____、____。",
    keywords: ["互斥", ["请求与保持", "占有且等待"], ["不剥夺", "不可剥夺"], "环路等待"],
    explain: "死锁四个必要条件：互斥、请求与保持、不剥夺、环路等待。"
  },

  {
    id: "aux-mem-001",
    chapter: "内存管理",
    type: "fill",
    core: true,
    prompt: "动态可变分区分配算法包括首次适应、____、最佳适应、____、快速适应。",
    keywords: [["循环首次适应", "邻近适应", "NextFit"], ["最坏适应", "WorstFit"]],
    explain: "五种算法：首次适应、循环首次适应、最佳适应、最坏适应、快速适应。"
  },
  {
    id: "aux-mem-002",
    chapter: "内存管理",
    type: "fill",
    core: true,
    prompt: "最佳适应算法容易产生很多极小且无法利用的____。",
    keywords: ["外部碎片"],
    explain: "最佳适应选择满足要求且最小的空闲分区，容易留下极小外部碎片。"
  },
  {
    id: "aux-mem-003",
    chapter: "内存管理",
    type: "fill",
    core: true,
    prompt: "快表 TLB 保存当前最近访问过的____，用于加快____。",
    keywords: ["页表项", "地址转换"],
    explain: "快表保存最近访问过的页表项，用于加快地址转换。"
  },
  {
    id: "aux-mem-004",
    chapter: "内存管理",
    type: "fill",
    topic: "页式地址转换",
    calc: true,
    prompt: "某系统页大小 1KB，逻辑地址 2345，页表中 2 号页对应 4 号块，则物理地址是____。",
    keywords: ["4393"],
    explain: "P=INT[2345/1024]=2，d=2345 MOD 1024=297，物理地址=4*1024+297=4393。"
  },
  {
    id: "aux-mem-005",
    chapter: "内存管理",
    type: "fill",
    core: true,
    topic: "页面置换",
    calc: true,
    prompt: "常考页面置换算法包括____、____、____、____。",
    keywords: [["OPT", "最佳置换"], ["FIFO", "先进先出"], ["LRU", "最近最久未使用"], ["Clock", "时钟"]],
    explain: "常考页面置换算法：OPT、FIFO、LRU、Clock。"
  },
  {
    id: "aux-mem-006",
    chapter: "内存管理",
    type: "fill",
    topic: "页面置换",
    calc: true,
    prompt: "FIFO 简单但性能差，可能产生分配物理块增加而缺页率反而升高的____。",
    keywords: [["Belady异常", "异常"]],
    explain: "FIFO 可能产生 Belady 异常。"
  },

  {
    id: "aux-dev-001",
    chapter: "设备管理",
    type: "fill",
    core: true,
    prompt: "按信息交换单位，设备可分为____设备和____设备。",
    keywords: ["块", "字符"],
    explain: "块设备如磁盘；字符设备如键盘、打印机。"
  },
  {
    id: "aux-dev-002",
    chapter: "设备管理",
    type: "fill",
    core: true,
    prompt: "按资源分配共享方式，设备可分为____设备、____设备、____设备。",
    keywords: ["独占", "共享", "虚拟"],
    explain: "按资源分配共享方式：独占设备、共享设备、虚拟设备。"
  },
  {
    id: "aux-dev-003",
    chapter: "设备管理",
    type: "fill",
    core: true,
    prompt: "I/O 设备四种控制方式按 CPU 干预逐渐减少依次是____、____、____、____。",
    keywords: ["程序循环查询", "中断驱动", "DMA", "通道"],
    explain: "CPU 干预逐渐减少：程序循环查询、中断驱动、DMA、通道。"
  },
  {
    id: "aux-dev-004",
    chapter: "设备管理",
    type: "fill",
    prompt: "缓冲技术包括单缓冲、____、多缓冲/循环缓冲、____。",
    keywords: ["双缓冲", "缓冲池"],
    explain: "缓冲技术分类：单缓冲、双缓冲、多缓冲/循环缓冲、缓冲池。"
  },

  {
    id: "aux-file-001",
    chapter: "文件系统",
    type: "fill",
    core: true,
    prompt: "文件逻辑结构包括无结构文件（____文件）和有结构文件（____文件）。",
    keywords: ["流式", "记录式"],
    explain: "无结构文件也称流式文件；有结构文件也称记录式文件。"
  },
  {
    id: "aux-file-002",
    chapter: "文件系统",
    type: "fill",
    core: true,
    prompt: "文件物理结构主要有____分配、____分配、____分配。",
    keywords: ["连续", "链接", "索引"],
    explain: "常见物理结构：连续分配、链接分配、索引分配。"
  },
  {
    id: "aux-file-003",
    chapter: "文件系统",
    type: "fill",
    prompt: "位示图法用 1 bit 表示一个物理块，通常 1 表示____，0 表示____。",
    keywords: [["已分配", "占用"], "空闲"],
    explain: "位示图中 1 表示已分配，0 表示空闲。"
  },
  {
    id: "aux-file-004",
    chapter: "文件系统",
    type: "fill",
    core: true,
    topic: "文件索引",
    calc: true,
    prompt: "多级索引中，顶级索引块不直接指向数据块，而是指向____。",
    keywords: ["次级索引块"],
    explain: "多级索引中，顶级索引块指向次级索引块。"
  },
  {
    id: "aux-file-005",
    chapter: "文件系统",
    type: "fill",
    topic: "文件索引",
    calc: true,
    prompt: "混合索引把____地址和多级____地址结合在一个 inode 中。",
    keywords: ["直接", "间接"],
    explain: "混合索引结合直接地址和多级间接地址。"
  }
];

const cards = [
  ["操作系统基础", "OS四大功能", "进程管理、存储管理、设备管理、文件管理。"],
  ["操作系统基础", "OS四大特征", "并发性、共享性、虚拟性、随机性/异步性。"],
  ["操作系统基础", "并发与并行", "并发：同一时间间隔；并行：同一时刻。"],
  ["操作系统基础", "共享性", "多个并发程序可共享硬件和软件资源，分为互斥共享和交替共享。"],
  ["进程管理", "三态模型", "就绪、运行、阻塞。阻塞事件完成后回到就绪。"],
  ["进程管理", "PCB", "进程存在的唯一标志。"],
  ["进程管理", "PV", "P 申请资源，求而不得阻塞；V 释放资源，必要时唤醒等待进程。"],
  ["进程管理", "调度算法", "FCFS、SJF、SRTF、HRRF、HPF。"],
  ["进程管理", "死锁四条件", "互斥、请求与保持、不剥夺、环路等待。"],
  ["内存管理", "内存管理功能", "分配回收、地址转换、存储保护、内存扩充/虚拟存储。"],
  ["内存管理", "可变分区算法", "首次、循环首次、最佳、最坏、快速适应。"],
  ["内存管理", "快表", "保存最近访问过的页表项，加快地址转换。"],
  ["内存管理", "页面置换", "OPT、FIFO、LRU、Clock。"],
  ["设备管理", "四种控制方式", "程序循环查询、中断驱动、DMA、通道。"],
  ["设备管理", "SPOOLing", "输入井、输出井、输入/输出缓冲区、输入/输出进程。"],
  ["文件系统", "逻辑结构", "流式文件、记录式文件。"],
  ["文件系统", "物理结构", "连续分配、链接分配、索引分配。"],
  ["文件系统", "FCB", "文件控制块，用于描述和控制文件；目录组织常见线性表、inode、哈希表。"]
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
