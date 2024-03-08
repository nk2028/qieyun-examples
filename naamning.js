/* 推導南寧白話
 *
 * https://github.com/leimaau/naamning_jyutping
 *
 * version: 2022-05-09
 *
 * 【符號說明】
 * 心母字讀 sl[ɬ]（清齒齦邊擦音），效咸山攝二等字讀 -eu[-ɛu]、-em[-ɛm]/-ep[-ɛp]、-en[-ɛn]/-et[-ɛt]，但演變不平衡，以下只推導文讀音，同理，梗三四的演變不平衡，以下也只推導文讀音
 * 老派的師韻（止開三精莊組）字讀 zy[tsɿ]、cy[tsʰɿ]、sy[sɿ]，津韻（臻合三舌齒音、部份臻開三）字讀 -yun[-yn]/-yut[-yt]，推導以老派音爲準
 * 聲母韻母有些部分依靠經驗給出推導條例，莊組白讀j不涉及，比較零散
 *
 * @author LeiMaau
 */

if (!音韻地位) return [
  ['文白讀', [2, '白讀', '文讀']],
  ['新老派', [2, '新派', '老派']]
];

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
    if (is('平聲')) return 'p';
    return 'b';
  }
  if (is('明母')) return 'm';

  if (is('端母')) return 'd';
  if (is('透母')) return 't';
  if (is('定母')) return is('平聲') ? 't' : 'd';
  if (is('泥母')) return 'n';
  if (is('來母')) return 'l';

  if (is('知母')) return 'z';
  if (is('徹母')) return 'c';
  if (is('澄母')) return is('平聲') ? 'c' : 'z';
  if (is('孃母')) return 'n';

  if (is('精母')) return 'z';
  if (is('清母')) return 'c';
  if (is('從母')) return is('平聲') ? 'c' : 'z';
  
  if (is('心母')) {
    if (is('支脂之微韻 開口')) return is('支韻 上聲') ? 'sl' : 's';  // 徙璽 絲斯
    if (is('支脂之微韻 合口 上聲 或 泰咍韻 開口 去聲 或 寒韻 開口 平聲')) return 's';  // 髓賽珊
    return 'sl';
  }
  
  if (is('邪母 平聲')) {
    if (is('山臻攝 三等')) {
      if (選項.新老派 === '老派') {
        return 'sl';
      } else {
        return is('臻攝 合口 三等') ? 'c' : 'sl';
      }
    }
    return 'c';
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
  if (is('日母')) return 'j';

  if (is('見母')) return 'g';
  
  if (is('溪母')) {
    if (is('模韻')) return 'f';
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
    if (is('模韻')) return 'f';
    if (is('開口')) {
      if (is('侯韻 去聲')) return 'k';
      if (is('尤韻 或 鍾韻 入聲')) return 'j';
      return 'h';
    }
    if (is('合口')) {
      if (is('庚耕韻 二等 舒聲 或 登韻 舒聲 或 蒸青清韻 入聲')) return 'gw';
      if (is('止攝 或 寒韻 去聲 或 文魂祭齊廢佳皆夬韻 舒聲')) return 'w';
      if (is('陽韻 去聲 或 陽韻 入聲 或 唐韻 入聲')) return 'k'; // 宕攝 三等 去聲 或 宕攝 三等 入聲 或 宕攝 一等 入聲
      if (is('通遇梗曾攝 或 山元先仙韻 四等 或 三等')) return is('陽韻 上聲') ? 'f' : 'h';
      return 'f';
    }
    return 'h';
  }
  
  if (is('匣母')) {
    if (is('模韻')) return 'w';
    if (is('開口')) return 'h';
    if (is('合口')) {
      if (is('一二等')) return is('通攝') ? 'h' : 'w';
      if (is('三四等')) return is('通攝') ? 'j' : is('咸攝') ? 'h' : 'w';
    }
    return 'h';
  }
  if (is('影云以母')) {
    if (is('模韻')) return 'w';
    if (is('開口')) {
      if (is('三四等 非 (影母 蟹攝)')) return 'j';  
      if (is('云母 二等')) return 'w';
      if (is('一二等 以母')) return 'j';
      return '';
    }
    if (is('合口')) {
      if (is('一二等')) return is('通攝') ? '' : 'w';
      if (is('三四等')) {
        if (is('通果攝 或 以母 蟹攝 或 影云母 咸攝')) return 'j';
        return 'w';
      }
    }
    return is('三四等') ? 'j' : '';
  }

  throw new Error('無聲母規則');
}

function 韻母規則() {
  // 通攝
  if (is('東冬鍾韻')) return 'ung';

  // 江攝
  if (is('江韻')) return is('初生母 舒聲') ? 'oeng' : is('影母 入聲') ? 'ang' : 'ong'; // 雙囪握

  // 止攝
  if (is('支脂之微韻 幫組')) return 'i';
  if (is('支脂之微韻 開口') && !is('幫組')) {
    if (is('精莊組')) {
      if (選項.新老派 === '老派') {
        return is('心生母 支韻 上聲') ? 'ai' : 'y';
      } else {
        return is('心生母 支韻 上聲') ? 'ai' : 'i';
      }
    }
    return 'i';
  }
  if (is('支脂之微韻 合口 舌齒音')) return 'ui';
  if (is('支脂之微韻 合口 牙喉音')) return 'ai';

  // 遇攝
  if (is('魚虞韻')) {
    if (is('幫組')) return 'u';
    if (is('莊組')) return 'o';
    return 'yu';
  }
  if (is('模韻')) return is('疑母') ? '' : 'u';

  // 蟹攝
  if (is('齊韻')) return 'ai';
  if (is('祭韻')) {
    if (is('合口 以母')) return 'ui';
    if (is('合口') && !is('牙喉音')) return 'ui';
    return 'ai';
  }
  if (is('泰韻 幫組')) return 'ui';
  if (is('泰韻 開口') && !is('幫組')) {
    if (is('牙喉音 或 精組 或 泥孃母')) return 'oi';
    return 'aai';
  }
  if (is('泰韻 合口') && !is('幫組')) return is('疑母') ? 'oi' : 'ai';
  if (is('佳皆夬韻')) return 'aai';
  if (is('灰韻')) return is('疑母') ? 'ai' : 'ui';
  if (is('咍韻')) return is('幫組 或 以母') ? 'ui' : 'oi';
  if (is('廢韻')) return 'ai';

  // 臻攝
  if (is('眞臻文欣魂痕韻')) {
    if (is('魂韻 精組')) return 'yun';
    if (is('魂韻 幫組')) return 'un';
    if (is('合口 三等 舌齒音')) {
      if (選項.新老派 === '老派') {
        return 'yun';
      } else {
        return 'an';
      }
    }
    return 'an';
  }
  if (is('元韻 幫組')) return 'aan';
  if (is('元韻 開口')) return 'in';
  if (is('元韻 合口')) return 'yun';

  // 山攝
  if (is('寒韻 幫組')) return 'un';
  if (is('寒韻 開口 舌齒音')) return 'aan';
  if (is('寒韻 開口 牙喉音')) return 'on';
  if (is('寒韻 合口 舌齒音')) return 'yun';
  if (is('寒韻 合口 牙喉音')) return 'un';
  if (is('刪山韻')) {
    if (選項.文白讀 === '文讀') {
      return 'aan'; 
    } else {
      return is('見溪疑曉匣母 或 山韻 幫母 入聲') ? 'en' : 'aan';
    }
  }
  if (is('仙先韻 幫組')) return 'in';
  if (is('仙先韻 開口')) return 'in';
  if (is('仙先韻 合口')) return 'yun';

  // 效攝
  if (is('蕭宵韻')) return 'iu';
  if (is('肴韻')) {
    if (選項.文白讀 === '文讀') {
      return 'aau';
    } else {
      return !is('曉母') ? 'eu' : 'aau';
    }
  }
  if (is('豪韻')) return is('溪母') ? 'aau' : 'u';

  // 果攝
  if (is('歌韻 一等')) return 'o';
  if (is('歌韻 三等')) return is('合口') ? 'oe' : 'e';

  // 假攝
  if (is('麻韻 二等')) return 'aa';
  if (is('麻韻 三等')) return 'e';

  // 宕攝
  if (is('陽韻 幫組')) return 'ong';
  if (is('陽韻 開口 莊組')) return 'ong';
  if (is('陽韻 開口')) return 'oeng';
  if (is('陽韻 合口')) return 'ong';
  if (is('唐韻')) return 'ong';

  // 梗攝
  if (is('庚韻 二等')) return is('影見曉母 或 溪匣母 上去聲') ? 'ang' : 'aang';
  if (is('庚韻 三等 莊組')) return 'aang';
  if (is('庚韻 三等')) return 'ing';
  if (is('耕韻')) return is('影見曉母 或 溪匣母 上去聲') ? 'ang' : 'aang';
  if (is('清青韻')) return 'ing';

  // 曾攝
  if (is('蒸韻')) return 'ing';
  if (is('登韻')) return 'ang';

  // 流攝
  if (is('尤侯幽韻')) return 'au';

  // 深攝
  if (is('侵韻')) return 'am';

  // 咸攝
  if (is('覃談韻 幫組')) return 'aam';
  if (is('覃談韻 舌齒音')) return 'aam';
  if (is('覃談韻 牙喉音')) return 'am';
  if (is('鹽添嚴韻')) return 'im';
  if (is('咸銜凡韻')) {
    if (選項.文白讀 === '文讀') {
      return 'aam';
    } else {
      return is('銜咸韻 舒聲 莊初崇見溪曉匣母') ? 'em' : is('銜咸韻 入聲 見莊初崇生知徹澄孃母') ? 'em' : 'aam';
    }
  }

  throw new Error('無韻母規則');
}

function 聲調規則() {
  if (is('全清 或 次清')) {
    if (is('平聲')) return '1'; // 陰平
    if (is('上聲')) return '2'; // 陰上
    if (is('去聲')) return '3'; // 陰去
    if (is('入聲')) {
      if (is('咸山江宕攝 或 梗攝 二等')){ // 清紐外轉字，影母特例
        if (is('(咸攝 一等 或 江梗攝) 影母')) return '1';
        return '3';
      }
      if (is('梗攝 三等 莊組')) return '3';
      return '1'; // 清紐內轉字
    }
  } else {
    if (is('平聲')) return '4'; // 陽平
    if (is('全濁 上聲')) return '6'; // 陽去，全濁上變去
    if (is('上聲')) return '5'; // 陽上
    if (is('去聲')) return '6'; // 陽去
    if (is('入聲')) return '6'; // 陽入
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
  else if (聲母 === 'h' && (韻母 === 'ui' || 韻母 === 'un')) 聲母 = 'f';
}


// 疑母拼細音時: i-類和oe-類 入聲n- 舒聲j-；yu類 舒入聲j-；u-類 ngung/k->jung/k，ngun/t->wun/t，ngu不變
if (聲母 === 'ng') {
  const is細音i和oe類 = ['i', 'oe'].some((x) => 韻母.startsWith(x));
  const is細音yu類 = ['yu'].some((x) => 韻母.startsWith(x));
  const is細音u類 = ['u'].some((x) => 韻母.startsWith(x));
  if (is細音i和oe類 && is('入聲')) 聲母 = 'n';
  if (is細音i和oe類 && is('舒聲')) 聲母 = 'j';
  if (is細音yu類) 聲母 = 'j';
  if (is細音u類 && 韻母 === 'ung') 聲母 = 'j';
  if (is細音u類 && 韻母 === 'un') 聲母 = 'w';
}

// 其他變換
if (聲母 === 'w' && 韻母 === 'yu') 聲母 = 'j'; // 保險起見再寫一遍
if (聲母 === 'h' && (韻母 === 'ui' || 韻母 === 'un')) 聲母 = 'f'; // 保險起見再寫一遍
if (聲母 === 'hw' && 韻母.startsWith('a')) 聲母 = 'f';


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
