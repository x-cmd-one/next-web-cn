import{_ as r,C as s,o,c as n,H as i,w as a,k as t,a as l}from"./chunks/framework.98e11516.js";const P=JSON.parse('{"title":"smartctl","titleTemplate":"x-cmd package | smartctl 是类 Unix 系统下实施 SMART 任务命令行套件或工具","description":"x-cmd package smartctl | smartctl 是类 Unix 系统下实施 SMART 任务命令行套件或工具","frontmatter":{"name":"smartctl","titleTemplate":"x-cmd package | smartctl 是类 Unix 系统下实施 SMART 任务命令行套件或工具","head":[["meta",{"name":"og:title","content":"smartctl | x-cmd package"}],["meta",{"name":"og:description","content":"smartctl 是类 Unix 系统下实施 SMART 任务命令行套件或工具"}],["meta",{"name":"description","content":"x-cmd package smartctl | smartctl 是类 Unix 系统下实施 SMART 任务命令行套件或工具"}]],"links":[{"type":"mod","text":"`x env` => 文档","link":"/mod/env"}],"homepage":"https://github.com/smartmontools/smartmontools","license":"MIT","version":{"stable":"v0.0.1"},"support":["darwin/arm64","linux/x64","darwin/x64","win/x64"],"source":{"repack-official":["https://github.com/x-cmd-build/smartmontools/releases","https://gitcode.net/x-cmd-build/smartmontools/-/releases"]}},"headers":[],"relativePath":"pkg/smartctl.md","filePath":"pkg/smartctl.md"}'),c={name:"pkg/smartctl.md"},m=t("h1",{id:"smartctl",tabindex:"-1"},[l("smartctl "),t("a",{class:"header-anchor",href:"#smartctl","aria-label":'Permalink to "smartctl"'},"​")],-1),d=t("p",{class:"x-desc"},"smartctl 是类 Unix 系统下实施 SMART 任务命令行套件或工具",-1),h=t("h2",{id:"简介",tabindex:"-1"},[l("简介 "),t("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),p=t("p",null,[t("code",null,"smartctl"),l(" 是一个用于监测和分析硬盘中 S.M.A.R.T.（自我检测，分析和报告技术）信息的命令行工具，是 Smartmontools 的一部分。通过 "),t("code",null,"smartctl"),l(" 工具，可以分析各种类型的硬盘驱动器（ATA、SATA、SCSI、SSD 等）并预测驱动器故障。")],-1),u=t("h2",{id:"首次用户",tabindex:"-1"},[l("首次用户 "),t("a",{class:"header-anchor",href:"#首次用户","aria-label":'Permalink to "首次用户"'},"​")],-1),_=t("ol",null,[t("li",null,[l("本文的 demo 展现了 "),t("code",null,"smartctl"),l(" 的几种基础用法。")])],-1),g=t("h2",{id:"功能特点",tabindex:"-1"},[l("功能特点 "),t("a",{class:"header-anchor",href:"#功能特点","aria-label":'Permalink to "功能特点"'},"​")],-1),k=t("ol",null,[t("li",null,[t("strong",null,"S.M.A.R.T. 数据读取"),l("：smartctl 可以读取硬盘驱动器的 S.M.A.R.T. 数据，这些数据包括关于硬盘当前状态、预测故障和性能问题的信息。")]),t("li",null,[t("strong",null,"故障预测和预警"),l("：通过分析S.M.A.R.T.属性，smartctl 可以提供关于硬盘驱动器的健康状况的警告和预测，帮助用户及时采取措施来保护数据并防止硬盘故障。")]),t("li",null,[t("strong",null,"自检和测试"),l("：smartctl 提供了对硬盘驱动器进行自检和测试的功能，用于评估硬盘驱动器的性能、稳定性和可靠性。")]),t("li",null,[t("strong",null,"操控和设置"),l("：smartctl 允许用户对硬盘驱动器进行设置和控制，比如启用或禁用 S.M.A.R.T. 功能、修改硬盘驱动器的电源管理选项等。")]),t("li",null,[t("strong",null,"跨平台"),l("：smartctl 可以在任何现代 Linux、Darwin (macOS)、Windows 和 FreeBSD 等系统上运行。")]),t("li",null,[t("strong",null,"多种格式输出"),l("：smartctl 支持默认文本、自定义文本、XML、JSON 格式输出信息。")])],-1),f=t("ul",null,[t("li",null,[t("strong",null,"注意"),l("：smartctl 需要以管理员或超级用户权限来运行，以便能够直接与硬盘驱动器进行通信。")])],-1),x=t("h2",{id:"竞品和相关作品",tabindex:"-1"},[l("竞品和相关作品 "),t("a",{class:"header-anchor",href:"#竞品和相关作品","aria-label":'Permalink to "竞品和相关作品"'},"​")],-1),b=t("ul",null,[t("li",null,[t("a",{href:"https://en.wikipedia.org/wiki/CrystalDiskMark#CrystalDiskInfo",target:"_blank",rel:"noreferrer"},"CrystalDiskInfo"),l("：CrystalDiskInfo 是一款免费的 Windows 软件，提供了对硬盘驱动器的监控和评估功能，包括读取 S.M.A.R.T. 数据、显示驱动器健康状态、温度监控等。它具有直观的用户界面，适用于个人用户和初级用户。")]),t("li",null,[t("a",{href:"https://github.com/ashaduri/gsmartcontrol",target:"_blank",rel:"noreferrer"},"GSmartControl"),l("：GSmartControl 是 smartctl 的图形用户界面，同样支持 Linux、Darwin (macOS)、Windows 和 FreeBSD 等系统。")]),t("li",null,[t("a",{href:"https://github.com/openhardwaremonitor/openhardwaremonitor",target:"_blank",rel:"noreferrer"},"Open Hardware Monitor"),l("：Open Hardware Monitor 是一个开源项目，提供了对计算机硬件监控的功能，包括硬盘驱动器的温度、健康状态、读取速度等。它支持 Windows 和 Linux 平台。")])],-1),S=t("h2",{id:"进一步阅读",tabindex:"-1"},[l("进一步阅读 "),t("a",{class:"header-anchor",href:"#进一步阅读","aria-label":'Permalink to "进一步阅读"'},"​")],-1),w=t("ul",null,[t("li",null,[t("a",{href:"https://www.smartmontools.org/browser/trunk/smartmontools/smartctl.8.in",target:"_blank",rel:"noreferrer"},"smartctl man page")]),t("li",null,[t("a",{href:"https://www.smartmontools.org/",target:"_blank",rel:"noreferrer"},"smartmontools website")]),t("li",null,[t("a",{href:"https://en.wikipedia.org/wiki/Smartmontools",target:"_blank",rel:"noreferrer"},"wiki: Smartmontools")]),t("li",null,[t("a",{href:"https://en.wikipedia.org/wiki/Comparison_of_S.M.A.R.T._tools",target:"_blank",rel:"noreferrer"},"Comparison of S.M.A.R.T. tools")]),t("li",null,[t("a",{href:"https://cloud.tencent.com/developer/article/2039035",target:"_blank",rel:"noreferrer"},"硬盘监控和分析工具：Smartctl")])],-1),y=t("div",{class:"language-sh vp-adaptive-theme"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"sh"),t("pre",{class:"shiki github-dark vp-code-dark"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#79B8FF"}},"x"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"env"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"use"),t("span",{style:{color:"#E1E4E8"}}," "),t("span",{style:{color:"#9ECBFF"}},"smartctl")])])]),t("pre",{class:"shiki github-light vp-code-light"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#005CC5"}},"x"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"env"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"use"),t("span",{style:{color:"#24292E"}}," "),t("span",{style:{color:"#032F62"}},"smartctl")])])])],-1);function T(C,M,A,E,v,R){const e=s("PackagePage");return o(),n("div",null,[i(e,null,{default:a(()=>[m,d]),abstract:a(()=>[h,p,u,_,g,k,f,x,b,S,w]),install:a(()=>[y]),_:1})])}const D=r(c,[["render",T]]);export{P as __pageData,D as default};
