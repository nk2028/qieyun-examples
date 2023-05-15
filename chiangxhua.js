/* 推導《聲音唱和圖》擬音
 *
 * https://zhuanlan.zhihu.com/p/498778513
 *
 * 默認顯示音值，採用北宋早期音系通常拼寫風格
 *
 * 代碼注釋中的等均指韻圖等（聲音唱和圖等），而不是切韻等
 *
 * @author unt
 */

const is = (...x) => 音韻地位.屬於(...x);
const when = (...x) => 音韻地位.判斷(...x);
const is音值 = 選項.顯示 !== '音位';

const 知照組符號字典 = {
  'tɹ tʃ': 'ʃʒɹ',
  'tɹ tɕ': 'ɕʑɹ',
  'tɻ tʂ': 'ʂʐɻ',
  // '二等 tɻ tʂ，三等 tɹ tɕ': 'ʂʐɻ|ɕʑɹ',
};

if (!音韻地位) return [
  ['顯示', [2,
    '音位',
    '音值',
  ]],
  '標音風格',
  ['知照組', [1].concat(Object.keys(知照組符號字典))],
  ['入聲尾', is音值 ? [1,
    // 'ʋ ɹ ɣ',
    'β ɾ ɣ',
    'b d ɡ',
    'p t k',
  ] : [2,
    'ˀ ʋˀ jˀ wˀ', // 僅作爲原圖的音位轉寫，不推薦
    'p t k ',
  ]],
  ['聲調', [1, '附加符號', '調類數字', '省略']],
  ['省略二等介音', is音值 ? true : null],
  ['全濁平省略送氣', false],
  ['次濁上省略喉化', false],
  // ['山攝二等脣音歸合口', false], // （僅作爲原圖轉寫）圖中“八”在合口，但二等不應該在合口。《韻鏡》《七音略》脣音刪舒、山入在合口，刪入、山舒在開口
  '演變規則',
  ['部分蟹攝二等入假攝', true],
  ['部分流攝脣音入遇攝', true],
  ['全濁上歸去', true], // 圖中未體現全濁上字的聲調，按口語則已歸去聲，按《蒙古字韻》風格則仍算上聲
  ['影喻上聲合併', false], // 圖中無影喻上聲對立的空間，可能口語已合併，但同期反切沒有相混的情況
];

function 調整音韻地位() {
  function 調整(表達式, 調整屬性) { if (is(表達式)) 音韻地位 = 音韻地位.調整(調整屬性); }
  // 輕唇化例外
  調整('明母 尤韻', { 等: '一', 韻: '侯' });
  調整('明母 東韻', { 等: '一' });

  // [慧琳反切體現的, 唐代用韻體現的, 據今音推測的]
  const 蟹攝二等入假攝字 = ['崖咼(呙)扠涯派差絓畫(画)罣罷(罢)', '佳鼃娃解卦', '灑蝸話(话)掛挂查叉杈衩'].join('');
  const 流攝脣音入遇攝字 = ['浮戊母罦罘蜉覆拇負(负)阜', '部畝(亩)畮婦(妇)不否桴富', '復複(复)副牡'].join('');
  if (選項.部分蟹攝二等入假攝 && 蟹攝二等入假攝字.includes(字頭)) 調整('蟹攝 二等', { 韻: '麻' });
  if (選項.部分流攝脣音入遇攝 && 流攝脣音入遇攝字.includes(字頭)) 調整('幫組 尤侯韻', { 韻: is`尤韻` ? '虞' : '模' });
}

function get聲母() {
  return when([
    ['云母 通攝 平聲', 'ɣ'], // 云母“雄”在二音
    ['匣母 肴韻 平聲', ''], // 匣母“爻”在三音，但一等無字，說明“完”不是零聲母
    ['崇母 止攝 仄聲', 'ʑ'], // 崇母“士”在十音。另船母船小韻和繩小韻中“乘”聲符字今讀塞擦音，但圖中未體現，這裏不考慮
    [選項.影喻上聲合併 && '云以母 上聲', 'ʔ'], // 可能的情況
    // 以上爲特例

    ['東鍾微虞廢文元歌陽尤凡韻 三等 非 重紐A類', [ // “非 重紐A類”用於過濾𩦠小韻，“歌韻”用於包含縛小韻
      ['幫滂母', 'f'], ['並母', 'v'], ['明母 上聲', 'ˀʋ'], ['明母', 'ʋ'], // 四音
    ]],
    ['曉母', 'x'], ['匣母', 'ɣ'], ['疑母 上聲', 'ˀŋ'], ['疑母', 'ŋ'], // 二音
    ['心母', 's'], ['邪母', 'z'], // 九音。這一組的後兩個聲母（同部位的近音）有音無字
    ['生書母', 'ɕ'], ['常母 仄聲 或 俟船母', 'ʑ'], ['日母 上聲', 'ˀɹ'], ['日母', 'ɹ'], // 十音

    ['幫母', 'p'], ['並母 仄聲', 'b'], ['滂母', 'pʰ'], ['並母', 'bʰ'], // 五音
    ['端母', 't'], ['定母 仄聲', 'd'], ['透母', 'tʰ'], ['定母', 'dʰ'], // 六音
    ['見母', 'k'], ['羣母 仄聲', 'ɡ'], ['溪母', 'kʰ'], ['羣母', 'ɡʰ'], // 一音
    ['知母', 'tɹ'], ['澄母 仄聲', 'dɹ'], ['徹母', 'tɹʰ'], ['澄母', 'dɹʰ'], // 十二音
    ['精母', 'ts'], ['從母 仄聲', 'dz'], ['清母', 'tsʰ'], ['從母', 'dzʰ'], // 八音
    ['莊章母', 'tɕ'], ['崇母 仄聲', 'dʑ'], ['初昌母', 'tɕʰ'], ['崇常母', 'dʑʰ'], // 十一音

    ['泥孃母 上聲', 'ˀn'], ['泥孃母', 'n'], ['來母 上聲', 'ˀl'], ['來母', 'l'], // 七音
    ['影母', 'ʔ'], ['云以母', is`上聲` ? 'ˀ' : ''], ['明母 上聲', 'ˀm'], ['明母', 'm'], // 三音
  ], '無聲母規則', true);
}

function get等() {
  return when([
    ['以母 或 重紐A類 或 鈍音 麻清幽韻 三等', '四'], // 幽韻按韻圖而非反切，一律歸四等
    ['幫組 三等', [ // 輕脣化的韻
      ['微廢韻', '四'],
      ['元凡韻', '二'],
      ['東鍾虞文歌陽尤韻', '一'],
    ]],
    ['銳音', [
      ['精組 止攝 開口', '一'], // 中唐發生 /siə/ > /sə/，變一等
      ['莊組', '二'],
      ['四等', '三'], // 圖中銳音一律無四等
      ['蟹山咸攝 一等 開口 非 (泥母 蟹攝)', '二'], // 圖中這類韻列在二等，但“乃”（泥開一咍上）仍在一等
    ]],
    ['', 音韻地位.等],
  ], '無等規則', true);
}

function get開合() {
  return when([
    ['流深咸攝', '開'], // 深咸攝舒入聲都視爲開口，不依圖中定義
    ['幫組', [
      ['通宕攝', '開'],
      ['一等 或 虞文歌韻', '合'], // 其餘一等（包括輕脣變一等的）歸合口
      ['山攝 二等 或 元韻', 選項.山攝二等脣音歸合口 ? '合' : '開'],
    ]],
    ['鍾虞模韻', '合'],
    ['江韻 銳音', '合'],
    ['', 音韻地位.呼 ?? '開'],
  ], '無開合規則', true);
}

function get介音(等, 開合) {
  return {
    一: { 開: '', 合: 'u' },
    二: { 開: 'ʕ', 合: 'ʕu' },
    三: { 開: 'i', 合: 'iu' },
    四: { 開: 'ʲi', 合: 'ʲiu' },
  }[等][開合];
}

function get韻基() {
  return when([
    ['蟹攝 (一二等 或 莊組)', 'aj'], // 一聲下(僅舒聲)

    ['止蟹攝 合口 非 莊組', 'əj'], // 五聲下(舒)
    ['曾梗攝', is`入聲` ? 'əɣ' : 'əŋ'], // 五聲下(入) & 二聲下

    ['止蟹攝', 'ə'], // 五聲上(舒)
    ['臻攝 非 元韻', is`入聲` ? 'əɾ' : 'ən'], // 五聲上(入) & 三聲下

    ['果假攝', 'a'], // 一聲上(舒)
    ['山攝 或 元韻', is`入聲` ? 'aɾ' : 'an'],// 一聲上(入) & 三聲上

    ['遇攝', 'ɯ'], // 六聲下(僅舒聲)

    ['流攝', 'əw'], // 四聲下(舒)
    ['通攝', is`入聲` ? 'əwɣ' : 'əwŋ'], // 四聲下(入) & 六聲上

    ['效攝', 'aw'], // 四聲上(舒)
    ['宕江攝', is`入聲` ? 'aɣ' : 'aŋ'], // 四聲上(入) & 二聲上

    ['深攝', is`入聲` ? 'əβ' : 'əm'], // 七聲上
    ['咸攝', is`入聲` ? 'aβ' : 'am'], // 七聲下
  ], '無韻基規則');
}

function get聲調() {
  if (選項.聲調 === '省略') return '';
  return {
    平: { 附加符號: '̀', 調類數字: '¹' },
    上: { 附加符號: '́', 調類數字: '²' },
    去: { 附加符號: '̌', 調類數字: '³' },
    入: { 附加符號: '', 調類數字: '⁴' }, // 入聲已由韻尾表明，無需附加符號
  }[選項.全濁上歸去 && is`全濁 上聲` ? '去' : 音韻地位.聲][選項.聲調];
}

function 音位to音值(音節) {
  function 替換韻核(from, tos, condition = true) {
    if (!condition) return;
    音節.韻核 = 音節.韻核.replace(from, 音節.介音.includes('u') ? tos.pop() : tos[0]);
  }

  const is收ŋ韻 = ['ŋ', 'ɣ'].includes(音節.韻尾);
  替換韻核('a', ['ɑ']); // 先把 /a/ 重置成一等的音值 [ɑ]
  if (音節.介音.includes('ʕ')) {
    // 二等
    替換韻核('ɯ', ['ɯ', '']);
    替換韻核('ə', ['ɛ'], is收ŋ韻);
    替換韻核('ɑ', ['a']);
  } else if (音節.介音.includes('i')) {
    // 三四等
    替換韻核('ɯ', ['ɯ', 'u']);
    替換韻核('ə', ['']); // 韻核和介音相同，省略韻核
    替換韻核('ɑ', ['æ', 'ɐ'], !音節.韻尾); // 北宋時麻二麻三未有明確分開的跡象，暫擬作 [iæ]
    替換韻核('ɑ', ['ɛ', 'ɜ'], !is收ŋ韻); // 宕三保留在 [ɑ]
  } else {
    // 一等
    替換韻核('ɯ', ['ɯ', '']);
    替換韻核('ə', ['ə', ''], !is收ŋ韻); // [uəŋ] 不寫作 [uŋ]，以免與通攝混淆
    替換韻核('ɑ', ['ʌ', 'ɔ'], !音節.韻尾);
    替換韻核('ɑ', ['ɑ', 'ɔ'], !is收ŋ韻);
    替換韻核('ɔ', ['o'], 音節.韻尾 === 'j'); // /uɑj/ 離 [i] 更近
  }
  if (is`精莊章組` && 音節.韻核 === 'ə' && !音節.韻尾) {
    // 噝音後的開音節 /ə/ 變 [ɹ̩]（實際僅精組開口和莊組有字）
    音節.介音.includes('u') ? 音節.韻尾 = 'ɹ' : 音節.韻核 = 'ɹ̩';
  }
  音節.介音 = 音節.介音.replace('iu', 'ʉ');
  if (!音節.韻核) 音節.韻尾 = 音節.韻尾.replace('j', 'i'); // /iuəj/ 實際上是 [i] 的合口
  音節.韻尾 = 音節.韻尾.replace('wŋ', 'uŋ');
  音節.韻尾 = 音節.韻尾.replace('wɣ', 'uɣ');
}

function 後處理(音節) {
  let 知照組符號 = 知照組符號字典[選項.知照組];
  if (!音節.介音.includes('ʕ')) 知照組符號 = 知照組符號.slice(-3); // 二等取開頭 3 個符號，三等取最後 3 個符號
  [...'ɕʑɹ'].forEach((e, i) => { 音節.聲母 = 音節.聲母.replace(e, 知照組符號[i]); });
  if (知照組符號.includes('ɻ')) {
    音節.韻核 = 音節.韻核.replace('ɹ̩', 'ɻ̍');
    音節.韻尾 = 音節.韻尾.replace('ɹ', 'ɻ');
  }
  if (選項.省略二等介音) 音節.介音 = 音節.介音.replace('ʕ', '');

  if (音節.介音.includes('ʲ')) {
    音節.聲母 += ['', 'ˀ'].includes(音節.聲母) ? 'j' : 'ʲ';
    音節.聲母 = 音節.聲母.replace('ʰʲ', 'ʲʰ');
    音節.介音 = 音節.介音.replace('ʲ', '');
  }
  if (選項.次濁上省略喉化) 音節.聲母 = 音節.聲母.replace('ˀ', '');
  if (選項.全濁平省略送氣 && is`全濁`) 音節.聲母 = 音節.聲母.replace('ʰ', '');
  if (is`入聲`) {
    let 入聲尾 = 選項.入聲尾;
    const 韻尾to = 入聲尾.trim().split(' ');
    const 韻尾from = 韻尾to.length === 3 ? [...'βɾɣ'] : ['ɾ', 'β', is`曾梗攝` && 'ɣ', /.?ɣ/];
    韻尾from.forEach((e, i) => { 音節.韻尾 = 音節.韻尾.replace(e, 韻尾to[i]); });
  }
}

function get音節() {
  const 韻基 = get韻基();
  const 音節 = {
    聲母: get聲母(),
    介音: get介音(get等(), get開合()),
    韻核: 韻基[0],
    韻尾: 韻基.substring(1),
    聲調: get聲調(),
  };
  if (is音值) 音位to音值(音節);
  後處理(音節);
  音節.韻母 = 音節.介音 + 音節.韻核 + 音節.韻尾;
  音節.帶調韻母 = 音節.介音 + 音節.韻核 + (選項.聲調 === '調類數字' ? 音節.韻尾 + 音節.聲調 : 音節.聲調 + 音節.韻尾);
  return 音節;
}

調整音韻地位();
const 音節 = get音節();
return 音節.聲母 + 音節.帶調韻母;
