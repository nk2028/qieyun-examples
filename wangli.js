/* 王力擬音
 *
 * 擬音來自王力著作：
 *
 * - 漢語史稿 [M]. 北京: 中華書局, 1980: 60-72.
 * - 漢語語音史 [M]. 北京: 中國社會科學出版社, 1985: 123-257.
 *
 * 提供 3 種擬音版本：
 *
 * - 《漢語史稿》　第二章　第十節　中古的語音系統（默認）
 * - 《漢語語音史》　卷上　第三章　魏晉南北朝音系
 * - 《漢語語音史》　卷上　第四章　隋——中唐音系
 *
 * 提供 2 種音標風格：
 *
 * - 國際音標（原貌）：王力著作採用的音標符號
 * - 國際音標（通用）：現在的中國通用音標符號
 *
 * 參考：高本漢擬音 (https://github.com/nk2028/qieyun-examples/blob/main/karlgren.js)
 *
 * @author Mishiro
 */

const is = (...x) => 音韻地位.屬於(...x);
const when = (...x) => 音韻地位.判斷(...x);

const is史稿 = 選項.擬音版本?.includes('稿') ?? true;
const is隋唐 = 選項.擬音版本?.includes('隋') ?? false;

const 音標字典 = {
  '國際音標（原貌）': {
    ʰ: 'ʻ', ʔ: 'ˀ',
    ʱ: is史稿 ? 'ʻ' : '',
    ɡ: is史稿 ? 'g' : 'ɡ',
    ʒ: is史稿 ? 'ʒ' : 'ᶎ',
  },
  '國際音標（通用）': {
    ʱ: is史稿 ? 'ʱ' : '',
  },
};

if (!音韻地位) return [
  ['擬音版本', [1, '漢語史稿', '漢語語音史（魏晉南北朝音系）', '漢語語音史（隋——中唐音系）']],
  ['音標體系', [2].concat(Object.keys(音標字典))],
  ['知組記法', is隋唐 ? [1, 'ȶ', 't'] : null],
  ['聲調記法', [2, '不標', '四角標圈', '數字上標']],
];

function get聲母() {
  let 聲母 = {
    幫: 'p',  滂: 'pʰ',  並: 'bʱ',  明: 'm',
    端: 't',  透: 'tʰ',  定: 'dʱ',  泥: 'n', 　       　       來: 'l',
    知: 't',  徹: 'tʰ',  澄: 'dʱ',  孃: 'n',
    精: 'ts', 清: 'tsʰ', 從: 'dzʱ', 　       心: 's', 邪: 'z',
    莊: 'tʃ', 初: 'tʃʰ', 崇: 'dʒʱ', 　       生: 'ʃ', 俟: 'ʒ',
    章: 'tɕ', 昌: 'tɕʰ', 船: 'dʑʱ', 日: 'ȵ', 書: 'ɕ', 常: 'ʑ', 以: 'j', // 常船顛倒
    見: 'k',  溪: 'kʰ',  羣: 'ɡʱ',  疑: 'ŋ', 曉: 'x', 匣: 'ɣ', 云: 'ɣ',
    影: is史稿 ? '' : 'ʔ',
  }[音韻地位.母];
  if (選項.知組記法 === 'ȶ' || is史稿) 聲母 = {
    知: 'ȶ', 徹: 'ȶʰ', 澄: 'ȡʱ',
  }[音韻地位.母] || 聲母;
  if (is史稿) 聲母 = {
    俟: 'dʒʱ', 日: 'nʑ', // 俟同崇
  }[音韻地位.母] || 聲母;
  return 聲母;
}

function get韻母() {
  // 漢語語音史
  let 韻 = {
    鍾: '冬', 虞: '模', 齊: '祭', 臻: '眞', 魂: '元', 痕: '元',
    先: '仙', 蕭: '宵', 陽: '唐', 庚: '耕', 清: '耕', 尤: '侯', 幽: '侯', 添: '鹽', 凡: '嚴',
  }[音韻地位.韻] ?? 音韻地位.韻;
  if (is隋唐) 韻 = {
    支: '脂', 之: '脂', 灰: '泰', 咍: '泰', 佳: '夬', 皆: '夬', 欣: '眞', 山: '刪',
    登: '蒸', 覃: '談', 咸: '銜',
  }[音韻地位.韻] || 韻;
  else 韻 = {
    江: '冬', 佳: '泰', 皆: '廢', 夬: '祭', 灰: '廢', 咍: '廢', 欣: '文',
    刪: is`入聲` ? '仙' : '寒', 山: is`入聲` ? '寒' : '仙', // 黠鎋顛倒
    肴: '宵', 豪: '宵', 麻: '歌', 青: '耕', 談: '鹽', 咸: '覃', 銜: '鹽',
  }[音韻地位.韻] || 韻;
  const 元音表1 = { // 魏晉南北朝音系
        　　　　　　       　　　　　　   u: '侯冬',
    e: '支耕脂眞　　', ə: '之蒸微文　侵', o: '模東', ou: '宵',
    æ: '　　祭仙　鹽', ɐ: '　登廢元　嚴', ɔ: '魚　',
        　　　　　　   a: '歌唐泰寒　覃',
  };
  const 元音表2 = { // 隋——中唐音系
    i: '脂青　眞　侵',     　　　　　　   u: '模冬　　　　',
        　　　　　　   ə: '　蒸微文　　', o: '魚東　　侯　',
    æ: '　　祭仙宵鹽', ɐ: '　耕廢元　嚴', ɔ: '　江　　　　',
    a: '麻　夬刪肴銜',     　　　　　　   ɑ: '歌唐泰寒豪談',
  };

  // 漢語史稿
  if (is史稿) 韻 = {
    鍾: '冬', 虞: '模', 皆: '廢', 灰: '咍', 臻: '先', 欣: '文', 魂: '文', 痕: '文',
    登: '蒸', 侯: '尤', 幽: '尤', 咸: '嚴', 凡: '嚴',
  }[音韻地位.韻] ?? 音韻地位.韻;
  const 元音表0 = {
    i: '脂　　　　　',     　　　　　　   u: '模東　　　　',
    ĕ: '　　　眞　侵',
    e: '支青齊先蕭添', ə: '之蒸微文尤　', o: '魚冬　　　　',
    ɛ: '　清祭仙宵鹽',     　　　　　　   ɔ: '　江　　　　',
    æ: '　耕夬山　　', ɐ: '　庚廢元　嚴', ɒ: '　　咍　　覃',
    a: '麻陽佳刪肴銜',     　　　　　　   ɑ: '歌唐泰寒豪談',
  };

  const 韻尾列表 = is`舒聲` ? ['', ...'ŋinum'] : [...' k t p'];

  let 元音表 = is史稿 ? 元音表0 : is隋唐 ? 元音表2 : 元音表1;
  let 韻核 = Object.keys(元音表).find(e => 元音表[e].includes(韻));
  let 韻尾 = 韻尾列表[元音表[韻核].indexOf(韻)];
  let 介音 = '';
  if (is史稿) {
    if (is`四等 或 幽韻`) 介音 += 'i';
    if (is`三等 非 脂幽韻`) 介音 += 'ĭ';
    if (is`冬灰文魂韻 或 泰寒歌韻 非 開口 或 唐登韻 合口 或 眞韻 合口 (重紐A類 或 銳音 非 莊組)`) 介音 += 'u';
    else if (is`合口 或 鍾凡韻 或 幫組 微廢元陽韻`) 介音 += 'w';
  } else {
    if (is`四等 或 幽韻`) 介音 += !is`合口` && 韻核 === 'i' ? '' : 'i';
    if (is`三等 非 臻幽韻`) 介音 += !is`合口` && 韻核 === 'i' ? '' : 'i̯';
    if (is`二等 或 臻韻` && !is隋唐) 介音 += is`合口` ? 'o' : 韻核 === 'e' ? '' : 'e';
    else if (is`合口 或 幫組 微泰灰廢文元魂寒歌陽凡韻`) 介音 += 'u';
  }

  return 介音 + 韻核 + 韻尾;
}

function get聲調() {
  return 選項.聲調記法 === '不標' ? '' : {
    四角標圈: { 平: '꜀', 上: '꜂', 去: '꜄', 入: '꜆' }, // 四聲未分陰陽
    數字上標: { 平: '¹', 上: '²', 去: '³', 入: '⁴' },
  }[選項.聲調記法][音韻地位.聲];
}

let 音節 = get聲母() + get韻母();
Object.entries(音標字典[選項.音標體系]).forEach(([k, v]) => { 音節 = 音節.replace(k, v); });
return (選項.聲調記法 === '四角標圈' && is`平上聲`) ? get聲調() + 音節 : 音節 + get聲調();
