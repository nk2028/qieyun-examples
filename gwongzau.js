/* 推導廣州音
 *
 * https://ayaka.shn.hk/teoi/
 *
 * @author Ayaka
 */

if (!音韻地位) return [['$legacy', true]];

const is = (x) => 音韻地位.屬於(x);

function 聲母規則() {
  if (is('幫母')) {
    if (is('東韻 三等 或 鍾微虞廢文元陽尤凡韻')) return 'f';
    return 'b';
  }
  if (is('滂母')) {
    if (is('東韻 三等 或 鍾微虞廢文元陽尤凡韻')) return 'f';
    return 'p';
  }
  if (is('並母')) {
    if (is('東韻 三等 或 鍾微虞廢文元陽尤凡韻')) return 'f';
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
  if (is('心母')) return 's';
  if (is('邪母')) return is('平聲') ? 'c' : is('合口') ? 's' : 'z';

  if (is('莊母')) return 'z';
  if (is('初母')) return 'c';
  if (is('崇母')) return is('平聲') ? 'c' : 'z';
  if (is('生母')) return 's';
  if (is('俟母')) return is('平聲') ? 'c' : 'z';

  if (is('章母')) return 'z';
  if (is('昌母')) return 'c';
  if (is('常母')) return 's';
  if (is('書母')) return 's';
  if (is('船母')) return 's';
  if (is('日母')) return 'j';

  if (is('見母')) return 'g';
  if (is('溪母')) {
    if (is('尤侵韻')) return 'j';
    if (is('合口 二三四等')) return 'k';
    return 'h';
  }
  if (is('羣母')) return is('平聲') ? 'k' : 'g';
  if (is('疑母')) return 'ng'; // ng 拼細音時為 j，詳後

  if (is('曉母')) {
    if (is('尤欣韻 平聲')) return 'j';
    return 'h';
  }
  if (is('匣母')) {
    if (is('合口 或 模韻 或 四等') && !is('齊韻 開口')) return 'j'; // 非 yu 前為 w，詳後
    return 'h';
  }
  if (is('影云以母')) {
    if (is('三四等')) return 'j'; // 非 yu 前為 w，詳後
    return '';
  }

  throw new Error('無聲母規則');
}

function 韻母規則() {
  // 通攝
  if (is('東冬鍾韻')) return 'ung';

  // 江攝
  if (is('江韻 幫組')) return 'ong';
  if (is('江韻 舌齒音')) return 'oeng';
  if (is('江韻 牙喉音')) return 'ong';

  // 止攝
  if (is('支脂之微韻 幫組')) return 'ei';
  if (is('支脂之微韻 開口 舌齒音 端組')) return 'ei';
  if (is('支脂之微韻 開口 舌齒音 來母')) return 'ei';
  if (is('支脂之微韻 開口 舌齒音 孃母')) return 'ei';
  if (is('支脂之微韻 開口 舌齒音')) return 'i';
  if (is('支脂之微韻 開口 牙喉音 疑母')) return 'i';
  if (is('支脂之微韻 開口 牙喉音 影母')) return 'i';
  if (is('支脂之微韻 開口 牙喉音 云母')) return 'i';
  if (is('支脂之微韻 開口 牙喉音 以母')) return 'i';
  if (is('支脂之微韻 開口 牙喉音')) return 'ei';
  if (is('支脂之微韻 合口 舌齒音')) return 'eoi';
  if (is('支脂之微韻 合口 牙喉音')) return 'ai';

  // 遇攝
  if (is('魚虞韻 幫組 幫滂並母')) return 'u';
  if (is('魚虞韻 幫組 明母')) return 'ou';
  if (is('魚虞韻 舌齒音 端組')) return 'eoi';
  if (is('魚虞韻 舌齒音 來母')) return 'eoi';
  if (is('魚虞韻 舌齒音 孃母')) return 'eoi';
  if (is('魚虞韻 舌齒音 精組')) return 'eoi';
  if (is('魚虞韻 舌齒音 莊組')) return 'o';
  if (is('魚虞韻 舌齒音')) return 'yu';
  if (is('魚虞韻 牙喉音 見溪羣母')) return 'eoi';
  if (is('魚虞韻 牙喉音 曉匣母')) return 'eoi';
  if (is('魚虞韻 牙喉音')) return 'yu';
  if (is('模韻 脣音')) return 'ou';
  if (is('模韻 舌齒音')) return 'ou';
  if (is('模韻 牙喉音 疑母')) return '';
  if (is('模韻 牙喉音')) return 'u';

  // 蟹攝
  if (is('齊韻')) return 'ai';
  if (is('祭韻 幫組')) return 'ai';
  if (is('祭韻 開口')) return 'ai';
  if (is('祭韻 合口 舌齒音')) return 'eoi';
  if (is('祭韻 合口 以母')) return 'eoi';
  if (is('祭韻 合口 牙喉音')) return 'ai';
  if (is('泰韻 幫組')) return 'ui';
  if (is('泰韻 開口 舌齒音 精組')) return 'oi';
  if (is('泰韻 開口 舌齒音')) return 'aai';
  if (is('泰韻 開口 牙喉音')) return 'oi';
  if (is('泰韻 合口 舌齒音')) return 'eoi';
  if (is('泰韻 合口 牙喉音 疑母')) return 'oi';
  if (is('泰韻 合口 牙喉音')) return 'ui';
  if (is('佳皆夬韻 幫組')) return 'aai';
  if (is('佳皆夬韻 開口')) return 'aai';
  if (is('佳皆夬韻 合口 舌齒音')) return 'eoi';
  if (is('佳皆夬韻 合口')) return 'aai';
  if (is('灰韻 舌齒音')) return 'eoi';
  if (is('灰韻 疑母')) return 'oi';
  if (is('灰韻')) return 'ui';
  if (is('咍韻')) return 'oi';
  if (is('廢韻')) return 'ai';

  // 臻攝
  if (is('眞韻 幫組')) return 'an';
  if (is('眞韻 開口')) return 'an';
  if (is('眞韻 合口 舌齒音')) return 'eon';
  if (is('眞韻 合口 牙喉音')) return 'an';
  if (is('臻文欣韻')) return 'an';
  if (is('元韻 幫組')) return 'aan';
  if (is('元韻 開口')) return 'in';
  if (is('元韻 合口')) return 'yun';
  if (is('魂韻 幫組')) return 'un';
  if (is('魂韻 端組')) return 'eon';
  if (is('魂韻 來母')) return 'eon';
  if (is('魂韻 精組')) return 'yun';
  if (is('魂韻 牙喉音')) return 'an';
  if (is('痕韻')) return 'an';

  // 山攝
  if (is('寒韻 幫組')) return 'un';
  if (is('寒韻 開口 舌齒音')) return 'aan';
  if (is('寒韻 開口 牙喉音')) return 'on';
  if (is('寒韻 合口 舌齒音')) return 'yun';
  if (is('寒韻 合口 牙喉音')) return 'un';
  if (is('刪山韻')) return 'aan';
  if (is('仙先韻 幫組')) return 'in';
  if (is('仙先韻 開口')) return 'in';
  if (is('仙先韻 合口')) return 'yun';

  // 效攝
  if (is('蕭宵韻')) return 'iu';
  if (is('肴韻')) return 'aau';
  if (is('豪韻')) return 'ou';

  // 果攝
  if (is('歌韻 一等')) return 'o';
  if (is('歌韻 三等 脣音')) return 'e';
  if (is('歌韻 三等 開口')) return 'e';
  if (is('歌韻 三等 合口')) return 'oe';

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
  if (is('庚韻 二等')) return 'ang';
  if (is('庚韻 三等 莊組')) return 'ang';
  if (is('庚韻 三等')) return 'ing';
  if (is('耕韻')) return 'ang';
  if (is('清青韻')) return 'ing';

  // 曾攝
  if (is('蒸韻')) return 'ing';
  if (is('登韻')) return 'ang';

  // 流攝
  if (is('尤侯幽韻')) return 'au';

  // 深攝
  if (is('侵韻')) return 'am'; // m 韻尾在聲母為脣音時為 n，詳後，下同

  // 咸攝
  if (is('覃談韻 幫組')) return 'aam';
  if (is('覃談韻 舌齒音')) return 'aam';
  if (is('覃談韻 牙喉音')) return 'om'; // -om 併入 -am，詳後
  if (is('鹽添嚴韻')) return 'im';
  if (is('咸銜凡韻')) return 'aam';

  throw new Error('無韻母規則');
}

function 聲調規則() {
  if (is('全清 或 次清')) {
    if (is('平聲')) return '1'; // 陰平
    if (is('上聲')) return '2'; // 陰上
    if (is('去聲')) return '3'; // 陰去
    if (is('入聲')) return '1'; // 陰入。長元音為 3，詳後
  } else {
    if (is('平聲')) return '4'; // 陽平
    if (is('全濁 上聲')) return '6'; // 陽去，全濁上變去
    if (is('上聲')) return '5'; // 陽上
    if (is('去聲')) return '6'; // 陽去
    if (is('入聲')) return '6'; // 陽入
  }
  throw new Error('無聲調規則');
}

function is長元音(韻母) {
  if (['aam', 'aan', 'im', 'in', 'om', 'on', 'ong', 'oeng', 'un', 'yun'].includes(韻母)) return true;
  if (['am', 'an', 'ang', 'eon', 'ing', 'ung'].includes(韻母)) return false;
  throw new Error('無法判斷元音長短：' + 韻母);
}

let 聲母 = 聲母規則();
let 韻母 = 韻母規則();
let 聲調 = 聲調規則();

// ng 拼細音時為 j
const is細音 = ['eo', 'i', 'oe', 'u', 'yu'].some((x) => 韻母.startsWith(x));
if (聲母 === 'ng' && is細音) 聲母 = 'j';

// 陰入分化
if (is('入聲') && 聲調 === '1' && is長元音(韻母)) 聲調 = '3';

if (is('合口 或 模韻') && !['eo', 'oe', 'yu'].some((x) => 韻母.startsWith(x))) { // 合口字
  if (聲母 === 'g' && !韻母.startsWith('u')) 聲母 = 'gw';
  else if (聲母 === 'k' && !韻母.startsWith('i')) 聲母 = 'kw';
  else if (聲母 === 'h' && !韻母.startsWith('i')) 聲母 = 'f';
  else if (聲母 === 'j') 聲母 = 'w';
  else if (聲母 === '') 聲母 = 'w';
}

// -om 併入 -am
if (韻母 === 'om') 韻母 = 'am';

// m 韻尾在聲母為脣音時為 n
if (is('幫組') && 韻母.endsWith('m')) 韻母 = 韻母.slice(0, -1) + 'n';

if (is('入聲')) {
  if (韻母.endsWith('m')) 韻母 = 韻母.slice(0, -1) + 'p';
  else if (韻母.endsWith('n')) 韻母 = 韻母.slice(0, -1) + 't';
  else if (韻母.endsWith('ng')) 韻母 = 韻母.slice(0, -2) + 'k';
}

return 聲母 + 韻母 + 聲調;
