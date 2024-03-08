/* 推導南寧亭子平話
 *
 * https://github.com/leimaau/naamning_jyutping
 *
 * version: 2022-05-09
 *
 * 【符號說明】
 * 心母字讀 sl[ɬ]（清齒齦邊擦音），日母和疑母細音字讀 nj[ȵ]（齦齶音）
 * 老派的疑母模韻字讀 ngu[ŋu]，微母遇攝臻攝字讀 fu[fu]、fat[fɐt]、fan[fɐn]，遇合一讀o[o]，果合一讀u[u]，推導以老派音爲準
 * 聲母韻母有些部分依靠經驗給出推導條例，莊組白讀nj不涉及，比較零散
 *
 * @author LeiMaau
 */

if (!音韻地位) return [['新老派', [2, '新派', '老派']]];

const is = (x) => 音韻地位.屬於(x);

function 聲母規則() {
  if (is('幫母')) {
    if (is('輕脣韻')) return 'f';
    return 'b';
  }
  if (is('滂母')) {
    if (is('輕脣韻')) return 'f';
    return 'p';
  }
  if (is('並母')) {
    if (is('輕脣韻')) return 'f';
    return 'b';
  }
  if (is('明母')) {
    if (選項.新老派 === '老派') {
      return is('虞文韻') ? 'f' : 'm';
    } else {
      return 'm';
    }
  }

  if (is('端母')) return 'd';
  if (is('透母')) return 't';
  if (is('定母')) return 'd';
  if (is('泥母')) return 'n';
  if (is('來母')) return 'l';

  if (is('知母')) return 'z';
  if (is('徹母')) return 'c';
  if (is('澄母')) return 'z';
  if (is('孃母')) return 'n';

  if (is('精母')) return 'z';
  if (is('清母')) return 'c';
  if (is('從母')) return 'z';
  
  if (is('心母')) {
    if (is('支脂之微韻 合口 上聲 或 支脂之微韻 開口 去聲 或 寒韻 開口 平聲')) return 's';  // 髓賽珊
    return 'sl';
  }
  
  if (is('邪母 平聲')) {
    if (is('山臻攝 三等')) return 'sl';
    return 'z';
  }
  if (is('邪母 仄聲')) return 'z';

  if (is('莊母')) return 'z';
  if (is('初母')) return 'c';
  if (is('崇母')) return is('平聲') ? 'c' : 'z';
  if (is('生母')) return 's';
  if (is('俟母')) return 's';

  if (is('章母')) return 'z';
  if (is('昌母')) return 'c';
  if (is('常母')) return 's';
  if (is('書母')) return 's';
  if (is('船母')) return 's';
  if (is('日母')) return 'nj';

  if (is('見母')) return 'g';
  
  if (is('溪母')) {
    if (is('模韻')) return 'h';
    if (is('開口')) {
      if (is('侯韻')) return is('上聲') ? 'h' : 'k';
      if (is('果假攝 或 鍾先仙陽江韻 入聲 或 佳皆齊宵支陽韻 舒聲 或 庚韻 三等 入聲 或 唐咍韻 去聲')) return 'k';
      if (is('尤韻 或 侵韻 入聲')) return 'j';
      return 'h';
    }
    if (is('合口')) {
      if (is('文韻 舒聲')) return 'kw';
      if (is('果遇止假梗宕攝 或 先仙元韻 入聲 或 皆佳祭齊魂眞韻 舒聲')) return 'k';
      if (is('登韻 舒聲')) return 'w';
      return 'h';
    }
    return 'h';
  }
  
  if (is('羣母')) return is('平聲') ? 'k' : 'g';
  if (is('疑母')) return 'ng';

  if (is('曉母')) {
    if (is('模韻')) return 'h';
    if (is('開口')) {
      if (is('侯韻 去聲')) return 'k';
      if (is('尤韻 或 鍾韻 入聲')) return 'j';
      return 'h';
    }
    if (is('合口')) {
      if (is('庚耕韻 二等 舒聲 或 登韻 舒聲 或 蒸青清韻 入聲')) return 'gw';
      if (is('止攝 或 寒韻 去聲 或 文魂祭齊廢佳皆夬韻 舒聲')) return 'w';
      if (is('陽韻 去聲 或 陽韻 入聲 或 唐韻 入聲')) return 'k'; // 宕攝 三等 去聲 或 宕攝 三等 入聲 或 宕攝 一等 入聲
      return 'h';
    }
    return 'h';
  }
  
  if (is('匣母')) {
    if (is('模韻')) return 'h';
    if (is('開口')) return 'h';
    if (is('合口')) {
      if (is('一二等')) return is('通果宕攝') ? 'h' : 'w';
      if (is('三四等')) return is('通攝') ? 'j' : is('咸攝') ? 'h' : 'w';
    }
    return 'h';
  }
  if (is('影云以母')) {
    if (is('模韻')) return 'w';
    if (is('開口')) {
      if (is('三四等 非 (影母 蟹曾梗臻通攝)')) return 'j';  
      if (is('云母 二等')) return 'w';
      if (is('一二等 以母')) return 'j';
      return '';
    }
    if (is('合口')) {
      if (is('一二等')) return is('通果宕攝') ? '' : 'w';
      if (is('三四等')) {
        if (is('通果攝 或 以母 蟹攝 或 影云母 咸攝 或 青韻')) return is('影母 通果攝') ? '' : 'j';
        return 'w';
      }
    }
    return is('三四等') ? 'j' : '';
  }

  throw new Error('無聲母規則');
}

function 韻母規則() {
  // 通攝
  if (is('東冬鍾韻')) return 'oeng';

  // 江攝
  if (is('江韻')) return is('知莊組 或 明母') ? 'ung' : 'aang';

  // 止攝
  if (is('支脂之微韻 幫組')) return 'i';
  if (is('支脂之微韻 開口') && !is('幫組')) {
    if (is('精莊組 三等')) return is('心生母 支韻 上聲') ? 'ai' : 'i';
    return 'i';
  }
  if (is('支脂之微韻 合口 舌齒音')) return 'ui';
  if (is('支脂之微韻 合口 牙喉音')) return 'ai';

  // 遇攝
  if (is('魚虞韻')) return is('幫莊組') ? 'u' : 'yu';  // 莊組部分字o
  if (is('模韻')) {
    if (選項.新老派 === '老派') {
      return 'u';
    } else {
      return is('疑母') ? '' : 'u';
    }
  }

  // 蟹攝
  if (is('齊韻')) return 'ai';
  if (is('祭韻')) {
      if (is('合口 以母')) return 'ui';
      if (is('合口') && !is('牙喉音')) return 'ui';
      return 'ai';
  }
  if (is('泰韻 幫組')) return 'ui';
  if (is('泰韻 開口') && !is('幫組')) return 'aai';
  if (is('泰韻 合口') && !is('幫組')) return is('疑母') ? 'waai' : 'ai';
  if (is('佳皆夬韻')) return 'aai';
  if (is('灰韻')) return is('疑母') ? 'ai' : 'ui';
  if (is('咍韻')) return is('幫組 或 以母') ? 'ui' : 'aai';
  if (is('廢韻')) return is('幫組') ? 'i' : 'ai';

  // 臻攝
  if (is('眞臻文欣魂痕韻')) return is('魂韻 精幫組') ? 'un' : 'an';
  if (is('元韻 幫組')) return 'aan';
  if (is('元韻 開口')) return 'in';
  if (is('元韻 合口')) return 'yun';

  // 山攝
  if (is('寒韻 幫組')) return 'un';
  if (is('寒韻 開口')) return 'aan';
  if (is('寒韻 合口')) return 'un';
  if (is('刪山韻')) return 'aan';
  if (is('仙先韻 幫組')) return 'in';
  if (is('仙先韻 開口')) return 'in';
  if (is('仙先韻 合口')) return 'yun';

  // 效攝
  if (is('蕭宵韻')) return 'iu';
  if (is('肴豪韻')) return 'aau';

  // 果攝
  if (is('歌韻 一等 幫組')) return 'u';
  if (is('歌韻 開口 一等') && !is('幫組')) return 'o';
  if (is('歌韻 合口 一等')) return 'u';
  if (is('歌韻 三等')) return is('合口') ? 'oe' : 'e';

  // 假攝
  if (is('麻韻 二等')) return 'aa';
  if (is('麻韻 三等')) return 'e';

  // 宕攝
  if (is('陽韻 幫組')) return 'ung';
  if (is('陽韻 開口 莊組')) return 'aang';
  if (is('陽韻 開口')) return 'iang';
  if (is('陽韻 合口')) return 'ung';
  if (is('唐韻 幫組')) return 'aang';
  if (is('唐韻 開口')) return 'aang';
  if (is('唐韻 合口')) return 'ung';

  // 梗攝
  if (is('庚韻 二等')) return is('影見曉幫滂並母') ? 'ang' : (選項.新老派 === '老派') ? 'iang' : 'aang';
  if (is('庚韻 三等 莊組')) return 'iang';
  if (is('庚韻 三等')) return 'ing';
  if (is('耕韻')) return is('影見曉幫滂並母') ? 'ang' : (選項.新老派 === '老派') ? 'iang' : 'ang';
  if (is('清青韻')) return 'ing';

  // 曾攝
  if (is('蒸韻')) return 'ing';
  if (is('登韻')) return 'ang';

  // 流攝
  if (is('尤侯幽韻')) return 'au';

  // 深攝
  if (is('侵韻')) return 'am';

  // 咸攝
  if (is('覃談韻')) return 'aam';
  if (is('鹽添嚴韻')) return 'im';
  if (is('咸銜凡韻')) return 'aam';

  throw new Error('無韻母規則');
}

function 聲調規則() {
  if (is('全清 或 次清')) {
    if (is('平聲')) return '1'; // 陰平
    if (is('上聲')) return '2'; // 陰上
    if (is('去聲')) return '3'; // 陰去
    if (is('入聲')) return '2'; // 下陰入，上陰入屬外來層，不參與推導
  } else {
    if (is('平聲')) return '4'; // 陽平
    if (is('全濁 上聲')) return '6'; // 陽去，全濁上變去
    if (is('上聲')) return '5'; // 陽上
    if (is('去聲')) return '6'; // 陽去
    if (is('入聲')) return is('次濁') ? '5' : '6'; // 上陽入 下陽入
  }
  throw new Error('無聲調規則');
}

let 聲母 = 聲母規則();
let 韻母 = 韻母規則();
let 聲調 = 聲調規則();


if (is('合口') && !['u', 'o', 'yu'].some((x) => 韻母.startsWith(x))) { // 合口字
  if (聲母 === 'g' && !韻母.startsWith('im')) 聲母 = 'gw';
  else if (聲母 === 'k' && !韻母.startsWith('ing') && !韻母.startsWith('im')) 聲母 = 'kw';
  else if (聲母 === 'h' && !韻母.startsWith('i')) 聲母 = 'hw';
  else if (聲母 === 'w' && 韻母 === 'yu') 聲母 = 'j';
  else if (聲母 === 'w' && 韻母 === 'ung') 聲母 = '';
}


// 疑母拼細音時: i-類和oe-類 nj-；yu類 j-；u-類 ngung/k->njung/k，ngun/t->wun/t，ngu不變
if (聲母 === 'ng') {
  const is細音i和oe類 = ['i', 'oe'].some((x) => 韻母.startsWith(x));
  const is細音yu類 = ['yu'].some((x) => 韻母.startsWith(x));
  const is細音u類 = ['u'].some((x) => 韻母.startsWith(x));
  if (is細音i和oe類) 聲母 = 'nj';
  if (is細音yu類) 聲母 = 'j';
  if (is細音u類 && 韻母 === 'ung') 聲母 = 'nj';
  if (is細音u類 && 韻母 === 'un') 聲母 = 'w';
}

// 其他變換
if (聲母 === 'w' && 韻母 === 'yu') 聲母 = 'j'; // 保險起見再寫一遍
if (聲母 === 'w' && 韻母 === 'ung') 聲母 = ''; // 保險起見再寫一遍
if (聲母 === 'ng' && 韻母.startsWith('w')) 聲母 = '';  // 特殊字「外」
if (聲母 === 'hw' && 韻母.startsWith('a')) 聲母 = 'w';
if (聲母 === 'w' && 韻母.startsWith('ui')) 韻母 = 'ai';

// 進一步
if (聲母 === 'nj' && (韻母 === 'ing' || 韻母 === 'iang')) 聲母 = 'ng';
if (聲母 === 'nj' && 韻母.startsWith('i') && is('入聲')) 聲母 = 'n';


// 南寧的 詠泳咏 讀陽上
if (is('云匣母 庚韻 合口 去聲')) 聲調 = '5';


// m 韻尾在聲母為脣音時為 n
if (is('幫組') && 韻母.endsWith('m')) 韻母 = 韻母.slice(0, -1) + 'n';

if (is('入聲')) {
  if (韻母.endsWith('m')) 韻母 = 韻母.slice(0, -1) + 'p';
  else if (韻母.endsWith('n')) 韻母 = 韻母.slice(0, -1) + 't';
  else if (韻母.endsWith('ng')) 韻母 = 韻母.slice(0, -2) + 'k';
}

return 聲母 + 韻母 + 聲調;
