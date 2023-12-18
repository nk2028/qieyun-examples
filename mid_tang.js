/* 推導盛中唐擬音
 *
 * https://zhuanlan.zhihu.com/p/672730109
 *
 * @author unt
 */

const is = (x) => 音韻地位.屬於(x);
const when = (...x) => 音韻地位.判斷(...x);

const is盛唐 = 選項.載入預置風格?.includes('盛唐') ?? false;
const is韻圖 = 選項.載入預置風格?.includes('韻圖') ?? false;
const is慧琳 = 選項.載入預置風格?.includes('慧琳') ?? true;
// 在一些選項名後加空格，爲了在切換預置風格時刷新選中的狀態
const 刷新 = is韻圖 ? ' ' : is慧琳 ? '  ' : '';

const 非組字典 = {
  'f': { 幫: 'f', 滂: 'fʰ', 並: 'v', 明: 'ɱ' },
  'pf': { 幫: 'pf', 滂: 'pfʰ', 並: 'bv', 明: 'ɱ' },
};
const 輕唇化條件 = '幫組 東鍾微虞廢文元歌陽尤凡韻 三等 非 重紐A類';

if (!音韻地位) return [
  '聲',
  ['非組', [1].concat(Object.keys(非組字典))],
  ['常船合併、崇俟合併' + 刷新, is慧琳],
  選項.顯示更多選項 ? ['見組一二等簡寫作軟腭音', false] : [],

  '韻',
  ['低元音', [2, '前æ 非前a', '前æ 非前ɑ', '前a 非前ɑ']],
  ['部分蟹攝二等入假攝' + 刷新, !is韻圖],
  ['部分流攝脣音入遇攝' + 刷新, !is韻圖],
  ['同攝BC韻合併（文韻除外）' + 刷新, !is盛唐],
  ['清青合併' + 刷新, !is盛唐],
  ['咍泰合併' + 刷新, !is盛唐],
  選項.顯示更多選項 ? ['覃談合併' + 刷新, true] : [],
  選項.顯示更多選項 ? ['幽韻一律歸四等' + 刷新, false] : [],
  選項.顯示更多選項 ? ['完全莊三化二' + 刷新, false] : [],

  '調',
  ['聲調', [2, '五度符號', '附加符號', '調類數字']],
  選項.顯示更多選項 ? ['全濁上歸去', false] : [],

  '',
  ['載入預置風格', [3,
    '盛唐',
    '中唐：韻圖',
    '中唐：慧琳反切',
  ]],
  ['顯示更多選項', false],
];

Object.entries(選項).forEach(([k, v]) => { 選項[k.trim()] = v; });
選項.BC合併 = 選項['同攝BC韻合併（文韻除外）'];
選項.常船合併 = 選項['常船合併、崇俟合併'];
選項.崇俟合併 = 選項['常船合併、崇俟合併'];
選項.覃談合併 = 選項.覃談合併 ?? true;
選項.見組一二等簡寫作軟腭音 = 選項.見組一二等簡寫作軟腭音 ?? false;
選項.幽韻一律歸四等 = 選項.幽韻一律歸四等 ?? false;
選項.完全莊三化二 = 選項.完全莊三化二 ?? false;
選項.全濁上歸去 = 選項.全濁上歸去 ?? false;

function 調整音韻地位() {
  function 調整(表達式, 調整屬性, 字頭串 = null) {
    if (typeof (字頭串) === 'string' && !字頭串.includes(字頭)) return;
    if (is(表達式)) 音韻地位 = 音韻地位.調整(調整屬性);
  }

  // 輕唇化例外
  調整('明母 尤韻', { 等: '一', 韻: '侯' });
  調整('明母 東韻', { 等: '一' });

  調整('云母 通曾攝 舒聲 非 開口', { 母: '匣' }); // 雄熊
  調整('云母 文韻', { 韻: '眞' }, '韻韵'); // 《廣韻》錯誤
  調整('莊母 支韻 開口', { 韻: '佳', 等: '二' });  // 《廣韻》未收的莊支化佳字

  // [慧琳反切體現的, 唐代用韻體現的, 據今音推測的]
  const 蟹攝二等入假攝字 = ['崖咼(呙)扠涯搋派差絓畫(画)罣罷(罢)', '佳鼃娃解釵(钗)卦柴', '哇洼蛙灑蝸話(话)掛挂查叉杈衩'].join('');
  const 流攝脣音入遇攝字 = ['浮戊母罦罘蜉矛茂覆懋拇某負(负)阜', '謀(谋)部畝(亩)畮婦(妇)不否桴富牟缶', '復複(复)副牡'].join('');
  調整('蟹攝 二等', { 韻: '麻' }, 選項.部分蟹攝二等入假攝 && 蟹攝二等入假攝字);
  調整('幫組 尤侯韻', { 韻: is`尤韻` ? '虞' : '模' }, 選項.部分流攝脣音入遇攝 && 流攝脣音入遇攝字);

  if (選項.全濁上歸去) 調整('全濁 上聲', { 聲: '去' });
}

調整音韻地位();

const 韻圖等 = when([
  // 切韻一二四等到韻圖不變
  ['非 三等', 音韻地位.等],

  ['幽韻', [
    [選項.幽韻一律歸四等, '四'],
    ['非 幫組 非 重紐B類', '四'],
    ['', '三'],
  ]],

  // 切韻三等，聲母是銳音的情況
  ['莊組', 選項.完全莊三化二 ? '二' : '三'],
  ['知章組 或 來日母', '三'],
  ['精組 止攝 開口', '一'], // 實際上無用，因爲 i 前的 j 本身就會被省略
  ['端精組 或 以母', '四'], // 含“爹、地”

  // 切韻三等，聲母是鈍音的情況
  ['重紐A類 或 麻清韻', '四'], // TODO: qieyun-js 更新後刪去麻清韻
  ['', '三'],
]);

function get聲母() {
  return when([
    [輕唇化條件, 非組字典[選項.非組][音韻地位.母]],
    [選項.崇俟合併 && '俟母', 'dʐ'],
    [選項.常船合併 && '常母', 'ʑ'],
    [!選項.見組一二等簡寫作軟腭音 && '見溪疑曉母 一二等', {
      見: 'q', 溪: 'qʰ', 疑: 'ɴ', 曉: 'χ',
    }[音韻地位.母]],
    ['', {
      幫: 'p', 滂: 'pʰ', 並: 'b', 明: 'm',
      端: 't', 透: 'tʰ', 定: 'd', 泥: 'n', 來: 'l',
      知: 'ʈ', 徹: 'ʈʰ', 澄: 'ɖ', 孃: 'ɳ',
      精: 'ts', 清: 'tsʰ', 從: 'dz', 心: 's', 邪: 'z',
      莊: 'tʂ', 初: 'tʂʰ', 崇: 'dʐ', 生: 'ʂ', 俟: 'ʐ',
      章: 'tɕ', 昌: 'tɕʰ', 常: 'dʑ', 書: 'ɕ', 船: 'ʑ', 日: 'ɲ', 以: 'j',
      見: 'k', 溪: 'kʰ', 羣: 'ɡ', 疑: 'ŋ',
      影: 'ʔ', 曉: 'x', 匣: 'ʁ', 云: '',
    }[音韻地位.母]],
  ]);
}

function get細介音() {
  return when([
    [輕唇化條件, ''],
    ['莊章組 或 日以母', ''],
    [韻圖等 === '四', 'j'],
    [韻圖等 === '三', 'ɣ'],
    ['', ''],
  ]);
}

function get合介音() {
  return is`合口 或 幫組 咍泰魂韻` ? 'w' : '';
}

function get韻基() {
  const 一 = 韻圖等 === '一';
  const 二 = 韻圖等 === '二';
  const 三四 = 韻圖等 === '三' || 韻圖等 === '四';
  let result = when([
    ['止攝', [ // /əj/
      [!選項.BC合併 && '微韻', [
        ['開口', 'ɨj'],
        ['', 'uj'],
      ]],
      ['', 'i'],
    ]],
    ['蟹攝', [ // /aj/
      [!選項.BC合併 && '廢韻', 'ɜj'],
      [三四, 'ɛj'],
      [二, 'æj'],
      [!選項.咍泰合併 && '咍灰韻', 'əj'],
      [一, 'ɑj'],
    ]],
    ['臻攝 非 元韻', [ // /ən/
      ['文韻', 'un'],
      [一, 'ən'],
      ['', 'in'],
    ]],
    ['山攝 或 元韻', [ // /an/
      [!選項.BC合併 && '元韻', 'ɜn'],
      [三四, 'ɛn'],
      [二, 'æn'],
      [一, 'ɑn'],
    ]],

    ['遇攝', [ // /ə/
      ['魚韻', 'ɯ'],
      ['', 'u'],
    ]],
    ['果假攝', [ // /a/
      ['假攝', 'æ'],
      ['', 'ɑ'],
    ]],
    ['曾攝', 'əŋ'], // /əŋ/
    ['通攝', [ // /əwŋ/
      ['鍾韻 非 幫組', 'oŋ'], // 輕唇不分東鍾
      ['', 'uŋ'],
    ]],
    ['梗攝', [ // /ajŋ/
      [選項.清青合併 || '青韻', 'ɛŋ'],
      ['', 'æŋ'],
    ]],
    ['宕攝', 'ɑŋ'], // /aŋ/
    ['江攝', 'ɔŋ'], // /awŋ/

    ['流攝', 'əw'], // /əw/
    ['效攝', [ // /aw/
      [三四, 'ɛw'],
      [二, 'æw'],
      [一, 'ɑw'],
    ]],
    ['深攝', 'im'], // /əm/
    ['咸攝', [ // /am/
      [!選項.BC合併 && '嚴凡韻', 'ɜm'],
      [三四, 'ɛm'],
      [二, 'æm'],
      [!選項.覃談合併 && '覃韻', 'əm'],
      [一, 'ɑm'],
    ]],
  ]);
  if (is`入聲`) [...'mnŋɴ'].forEach((v, i) => { result = result.replace(v, 'ptkq'[i]); });
  let 兩個低元音 = 選項.低元音.split(' ');
  result = result.replace('æ', 兩個低元音[0].slice(-1));
  result = result.replace('ɑ', 兩個低元音[1].slice(-1));
  return result;
}

function get聲調() {
  const is陰 = is`全清 或 次清 或 次濁 上入聲`;
  return {
    五度符號: is陰 ?
      { 平: '˦˨', 上: '˦˥', 去: '˧˨˦', 入: '˦' } :
      { 平: '˨˩', 上: '˨˦', 去: '˨˨˦', 入: '˨' },
    附加符號: { 平: '̀', 上: '́', 去: '̌', 入: '' },
    調類數字: { 平: '¹', 上: '²', 去: '³', 入: '⁴' },
  }[選項.聲調][音韻地位.聲];
}

function get音節() {
  const 音節 = {
    聲母: get聲母(),
    介音: get細介音() + get合介音(),
    韻基: get韻基(),
    聲調: get聲調(),
  };
  if (音節.韻基[0] === 'u') 音節.介音 = 音節.介音.replace('w', '');
  if (音節.韻基[0] === 'i') 音節.介音 = 音節.介音.replace('j', '');
  音節.韻母 = 音節.介音 + 音節.韻基;
  音節.帶調韻母 = 選項.聲調 === '附加符號' ?
    音節.介音 + 音節.韻基[0] + 音節.聲調 + 音節.韻基.slice(1) :
    音節.韻母 + 音節.聲調;
  return 音節;
}

const 音節 = get音節();
return 音節.聲母 + 音節.帶調韻母;
