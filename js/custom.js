function getDistance(e, a, t, s) {
    const { sin: o, cos: c, asin: n, PI: r, hypot: i } = Math;
    let b = (e, a) => (e *= r / 180, { x: c(a *= r / 180) * c(e), y: c(a) * o(e), z: o(a) }), p = b(e, a), l = b(t, s),
        k = 2 * n(i(p.x - l.x, p.y - l.y, p.z - l.z) / 2) * 6371;
    return Math.round(k)
}

function showWelcome() {
    let e, a, t = getDistance(113.0547, 22.5019, ipLocation.data.lng, ipLocation.data.lat),
        s = ipLocation.data.country, o = ipLocation.ip;
    switch (ipLocation.data.country) {
        case "日本":
            e = "よろしく，一起去看樱花吗";
            break;
        case "美国":
            e = "Let us live in peace!";
            break;
        case "英国":
            e = "想同你一起夜乘伦敦眼";
            break;
        case "俄罗斯":
            e = "干了这瓶伏特加！";
            break;
        case "法国":
            e = "C'est La Vie";
            break;
        case "德国":
            e = "Die Zeit verging im Fluge.";
            break;
        case "澳大利亚":
            e = "一起去大堡礁吧！";
            break;
        case "加拿大":
            e = "拾起一片枫叶赠予你";
            break;
        case "中国":
            switch (s = ipLocation.data.prov + " " + ipLocation.data.city + " " + ipLocation.data.district, ipLocation.data.prov) {
                case "北京":
                    e = "北——京——欢迎你~~~";
                    break;
                case "天津":
                    e = "讲段相声吧";
                    break;
                case "河北":
                    e = "山势巍巍成壁垒，天下雄关铁马金戈由此向，无限江山";
                    break;
                case "山西":
                    e = "展开坐具长三尺，已占山河五百余";
                    break;
                case "内蒙古自治区":
                    e = "天苍苍，野茫茫，风吹草低见牛羊";
                    break;
                case "辽宁":
                    e = "我想吃烤鸡架！";
                    break;
                case "吉林":
                    e = "状元阁就是东北烧烤之王";
                    break;
                case "黑龙江":
                    e = "很喜欢哈尔滨大剧院";
                    break;
                case "上海":
                    e = "众所周知，中国只有两个城市";
                    break;
                case "江苏":
                    switch (ipLocation.data.city) {
                        case "南京":
                            e = "这是我挺想去的城市啦";
                            break;
                        case "苏州":
                            e = "上有天堂，下有苏杭";
                            break;
                        default:
                            e = "散装是必须要散装的"
                    }
                    break;
                case "浙江":
                    if ("杭州" === ipLocation.data.city) e = "东风渐绿西湖柳，雁已还人未南归"; else e = "望海楼明照曙霞,护江堤白蹋晴沙";
                    break;
                case "河南":
                    switch (ipLocation.data.city) {
                        case "郑州":
                            e = "豫州之域，天地之中";
                            break;
                        case "信阳":
                            e = "品信阳毛尖，悟人间芳华";
                            break;
                        case "南阳":
                            e = "臣本布衣，躬耕于南阳此南阳非彼南阳！";
                            break;
                        case "驻马店":
                            e = "峰峰有奇石，石石挟仙气嵖岈山的花很美哦！";
                            break;
                        case "开封":
                            e = "刚正不阿包青天";
                            break;
                        case "洛阳":
                            e = "洛阳牡丹甲天下";
                            break;
                        default:
                            e = "可否带我品尝河南烩面啦？"
                    }
                    break;
                case "安徽":
                    e = "蚌埠住了，芜湖起飞";
                    break;
                case "福建":
                    e = "井邑白云间，岩城远带山";
                    break;
                case "江西":
                    e = "落霞与孤鹜齐飞，秋水共长天一色";
                    break;
                case "山东":
                    e = "遥望齐州九点烟，一泓海水杯中泻";
                    break;
                case "湖北":
                    if ("黄冈市" === ipLocation.data.city) e = "红安将军县！辈出将才！"; else e = "来碗热干面~";
                    break;
                case "湖南":
                    e = "74751，长沙斯塔克";
                    break;
                case "广东":
                    switch (ipLocation.data.city) {
                        case "广州":
                            e = "看小蛮腰，喝早茶了嘛~";
                            break;
                        case "深圳":
                            e = "今天你逛商场了嘛~";
                            break;
                        case "江门":
                            e = "江联邦，五邑桥都各自为政（";
                            break;
                        case "阳江":
                            e = "阳春合水!";
                            break;
                        default:
                            e = "来两斤福建人~"
                    }
                    break;
                case "广西壮族自治区":
                    e = "桂林山水甲天下";
                    break;
                case "海南":
                    e = "朝观日出逐白浪，夕看云起收霞光";
                    break;
                case "四川":
                    e = "康康川妹子";
                    break;
                case "贵州":
                    e = "茅台，学生，再塞200";
                    break;
                case "云南":
                    e = "玉龙飞舞云缠绕，万仞冰川直耸天";
                    break;
                case "西藏自治区":
                    e = "躺在茫茫草原上，仰望蓝天";
                    break;
                case "陕西":
                    e = "来份臊子面加馍";
                    break;
                case "甘肃":
                    e = "羌笛何须怨杨柳，春风不度玉门关";
                    break;
                case "青海":
                    e = "牛肉干和老酸奶都好好吃";
                    break;
                case "宁夏回族自治区":
                    e = "大漠孤烟直，长河落日圆";
                    break;
                case "新疆维吾尔自治区":
                    e = "驼铃古道丝绸路，胡马犹闻唐汉风";
                    break;
                case "台湾":
                    e = "我在这头，大陆在那头";
                    break;
                case "香港特别行政区":
                    e = "永定贼有残留地鬼嚎，迎击光非岁玉";
                    break;
                case "澳门特别行政区":
                    e = "性感荷官，在线发牌";
                    break;
                default:
                    e = "带我去你的城市逛逛吧！"
            }
            break;
        default:
            e = "带我去你的国家逛逛吧"
    }
    let c = new Date;
    a = c.getHours() >= 5 && c.getHours() < 11 ? "<span>🌤️ 早上好，一日之计在于晨</span>" : c.getHours() >= 11 && c.getHours() < 13 ? "<span>☀️ 中午好，记得午休喔~</span>" : c.getHours() >= 13 && c.getHours() < 17 ? "<span>🕞 下午好，饮茶先啦！</span>" : c.getHours() >= 17 && c.getHours() < 19 ? "<span>🚶‍♂️ 即将下班，记得按时吃饭~</span>" : c.getHours() >= 19 && c.getHours() < 24 ? "<span>🌙 晚上好，夜生活嗨起来！</span>" : "夜深了，早点休息，少熬夜";
    try {
        document.getElementById("welcome-info").innerHTML = `欢迎来自 <b><span style="color: var(--efu-color);font-size: var(--efu-gl-size)">${s}</span></b> 的小友💖<br>${e}🍂<br>当前位置距博主约 <b><span style="color: var(--efu-ip-color)">${t}</span></b> 公里！<br>您的IP地址为：<b style="word-wrap: break-word; word-break: break-all;"><span style="font-size: 15px;">${o}</span></b><br>${a} <br>`
    } catch (e) {
        console.log("Pjax无法获取元素")
    }
}

function handlePjaxComplete() {
    showWelcome()
}

fetch("https://api.qjqq.cn/api/Local").then((e => e.json())).then((e => {
    ipLocation = e, showWelcome()
})).catch((e => console.error("Error:", e))), window.onload = function () {
    showWelcome(), document.addEventListener("pjax:complete", handlePjaxComplete)
}