/* "Decorated Kan-on" romanization
 * - vowels based on romanized Kan-on
 * - consonants based on romanized Go-on
 * - distinctions not made in onyomi are marked with diacritics and digraphs
 * More details at https://kanjisense.com/dict/middle-chinese-pronunciation
 * @author justinsilvestre
 */

if (!音韻地位) return [
  ['聲調', [1, '平:∅ 上:ˬ 去:ˎ 入:∅', '平:1 上:2 去:3 入:4']],
];
const toneDiacritics = 選項.聲調 === '平:∅ 上:ˬ 去:ˎ 入:∅';

const is = (...x) => 音韻地位.屬於(...x);

let 聲母 = {
  幫: 'p',   滂: 'pʻ',   並: 'b',   明: 'm',
  端: 't',   透: 'tʻ',   定: 'd',   泥: 'n',  來: 'l',
  知: 't',  徹: 'tʻ',  澄: 'd',  孃: 'n',
  精: 'ts',  清: 'tsʻ',  從: 'dz',                     心: 's',  邪: 'z',
  莊: 'tṣ', 初: 'tṣʻ', 崇: 'dẓ',                    生: 'ṣ', 俟: 'ẓ',
  章: 'tś', 昌: 'tśʻ', 常: 'dź', 日: 'nź',          書: 'ś', 船: 'ź', 以: 'y',
  見: 'k',   溪: 'kʻ',   羣: 'g',   疑: 'ng',
  影: 'ʾ',   曉: 'kh',    匣: 'gh',                                          云: '',
}[音韻地位.母];

let get韻母 = {
  // 一等韻
  東: () => {
    if (is`入聲 三等`) {
      if (is`幫組`) return 'ūk';
      if (is`以母`) return 'ẁīk';
      return is`莊組 或 章組` ? 'yūk' : 'wīk';
    }
    if (is`三等`) {
      return is`幫組` ? 'ūng' : 'iūng';
    }
    return is`影母` ? 'wōng' : 'ōng';
  },
  冬: 'ong',
  模: () => is`影母` ? 'wo' : 'o',
  泰: () => is`合口` ? 'wāi' : 'āi',
  灰: 'wai',
  咍: 'ai',
  魂: 'won',
  痕: 'on',
  寒: () => is`合口` ? 'wan' : 'an',
  豪: 'au',
  歌: () => {
    if (is`合口`) return is`三等` ? 'wȧ' : 'wa';
    return is`三等` ? 'ya' : 'a';
  },
  唐: () => is`合口` ? 'wang' : 'ang',
  登: () => is`合口` ? 'wŏng' : 'ŏng',
  侯: 'ou',
  覃: 'am',
  談: 'ām',

  // 二等韻
  江: 'ạ̊ng',
  佳: () => is`合口` ? 'wạ̈' : 'ạ̈',
  皆: () => is`合口` ? 'wạ̈i' : 'ạ̈i',
  夬: () => is`合口` ? 'wạ' : 'ạ',
  刪: () => is`合口` ? 'wạn' : 'ạn',
  山: () => is`合口` ? 'wạ̈n' : 'ạ̈n',
  肴: 'ạu',
  麻: () => {
    if (is`三等`) return 'yạ';
    return is`合口` ? 'wạ' : 'ạ';
  },
  庚: () => {
    if (is`三等`) return is`合口` ? 'wẹng' : 'ẹng';
    return is`合口` ? 'wạng' : 'ạng';
  },
  耕: () => is`合口` ? 'wạ̈ng' : 'ạ̈ng',
  咸: 'ạ̈m',
  銜: 'ạm',

  // 四等韻
  齊: () => is`合口` ? 'wei' : 'ei',
  先: () => is`合口` ? 'wen' : 'en',
  蕭: 'eu',
  青: () => is`合口` ? 'weng' : 'eng',
  添: 'em',

  // 三等陰聲韻
  支: () => {
    if (is`合口 非(見組 或 影組 或 以母)`) return 'uï';
    if (is`合口`) return is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'ẁï' : 'wï';
    return is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'yï' : 'ï';
  },
  脂: () => {
    if (is`合口 非(見組 或 影組 或 以母)`) return 'uī';
    if (is`合口`) return is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'ẁī' : 'wī';
    return is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'yī' : 'ī';
  },
  之: 'i',
  微: () => is`合口` ? 'wî' : 'î',
  魚: 'yo',
  虞: () => is`幫組 或 見組 或 影組 或 來母` ? 'u' : 'yu',
  祭: () => {
    if (is`合口`) return is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'ẁei' : 'wėi';
    return is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'yei' : 'ėi';
  },
  廢: 'âi',
  宵: () => is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'yeu' : 'ėu',
  尤: () => is`幫組` ? 'ū' : 'iū',
  幽: 'iu',

  // 三等陽聲韻
  鍾: () => {
    return is`幫組` ? 'ông' : 'ŷong';
  },
  眞: () => {
    if (is`合口`) {
      if (is`非(見組 或 影組 或 以母 或 來母)`) return 'yūn';
      return is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'ẁīn' : 'wīn';
    }
    return is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'yīn' : 'īn';
  },
  臻: 'ịn',
  文: 'un',
  欣: 'in',
  元: () => {
    if (is`幫組`) return 'ân';
    return is`合口` ? 'wên' : 'ên';
  },
  仙: () => {
    if (is`合口`) return is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'ẁen' : 'wėn';
    return is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'yen' : 'ėn';
  },
  陽: () => {
    if (is`合口`) return is`影云以母` ? 'wâng': 'ŷang';
    return is`幫組 或 莊組` ? 'âng' : 'yang';
  },
  清: () => {
    if (is`合口`) return is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'ẁeng' : 'wėng';
    return is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'yeng' : 'ėng';
  },
  蒸: () => {
    if (is`合口`) return is`云母` ? 'wĭng' : 'ŷŏng';
    return 'yŏng';
  },
  侵: () => is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'yim' : 'im',
  鹽: () => is`以母 或 (重紐A類 (幫組 或 見組 或 影組))` ? 'yem' : 'ėm',
  嚴: 'êm',
  凡: 'âm',
}[音韻地位.韻];

let 韻母 = typeof get韻母 === 'string' ? get韻母 : get韻母();

if (is`入聲`) {
  if (韻母.endsWith('m')) 韻母 = 韻母.slice(0, -1) + 'p';
  else if (韻母.endsWith('n')) 韻母 = 韻母.slice(0, -1) + 't';
  else if (韻母.endsWith('ng')) 韻母 = 韻母.slice(0, -2) + 'k';
}
if (is`莊組 (臻庚韻 或 二等)`) 聲母 = 聲母.replace('ṣ', 's').replace('ẓ', 'z');
else if (is`端組 二三等`) 聲母 += 'h';
else if (is`以母` && /^[yŷẁ]/.test(韻母)) 聲母 = '';

const 聲調 = (toneDiacritics ? {
  上: 'ˬ',
  去: 'ˎ',
} : {
  平: '¹',
  上: '²',
  去: '³',
  入: '⁴',
})[音韻地位.聲] || '';

return 聲母 + 韻母 + 聲調;
