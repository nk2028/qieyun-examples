import * as Qieyun from "qieyun";
import { 資料 } from "qieyun";
import {
  tupa,
  baxter,
  blankego,
  kyonh,
  zyepheng,
  sliark_peengqvim,
  karlgren,
  wangli,
  panwuyun,
  unt,
  msoeg_v8,
  mid_tang,
  chiangxhua,
  mongol,
  zhongyuan,
  fanwan,
  putonghua,
  gwongzau,
  naamning,
  naamningdingzi,
  zaonhe,
  langjin,
  taibu,
  ngungei,
  ayaka_v8,
  yec_en_hua,
} from "../index.js";

function assert_equal(a, b) {
  if (a !== b)
    throw new Error(
      `Expected ${JSON.stringify(b)}, but got ${JSON.stringify(a)}.`
    );
}

const 音韻地位 = 資料.query字頭("䒚")[0].音韻地位;

assert_equal(tupa(音韻地位), "sjiewq");
assert_equal(baxter(音韻地位), "syewX");
assert_equal(blankego(音韻地位), "sjev");
assert_equal(kyonh(音韻地位), "sjeux");
assert_equal(zyepheng(音韻地位), "shiéu");
assert_equal(sliark_peengqvim(音韻地位), "sjewx");
assert_equal(karlgren(音韻地位), "ɕi̯ɛu꞉");
assert_equal(wangli(音韻地位), "꜂ɕĭɛu");
assert_equal(panwuyun(音韻地位), "ɕiᴇu˧˥");
assert_equal(unt(音韻地位), "ɕéw");
assert_equal(msoeg_v8(音韻地位), "ɕiɛuˀ");
assert_equal(mid_tang(音韻地位), "ɕɛ́w");
assert_equal(chiangxhua(音韻地位), "ɕjɛ́w");
assert_equal(mongol(音韻地位), "ꡮꡠꡓ");
assert_equal(zhongyuan(音韻地位), "ʂjɛw³");
assert_equal(fanwan(音韻地位), "shiu2");
assert_equal(putonghua(音韻地位), "shǎo");
assert_equal(gwongzau(音韻地位), "siu2");
assert_equal(naamning(音韻地位), "siu2");
assert_equal(naamningdingzi(音韻地位), "siu2");
assert_equal(zaonhe(音韻地位), "sɔ̄");
assert_equal(langjin(音韻地位), "shao³");
assert_equal(taibu(音韻地位), "shau3");
assert_equal(ngungei(音韻地位), "shiau2");
assert_equal(ayaka_v8(音韻地位), "seu");
assert_equal(yec_en_hua(音韻地位), "A");

assert_equal(
  tupa.schema({ 模式: "標準", 脣音咍韻歸灰韻: false })(
    Qieyun.音韻地位.from描述("並咍上")
  ),
  "beojq"
);

(() => {
  let value;
  try {
    value = tupa(音韻地位, null, { 模式: "標準" });
  } catch (e) {
    if (!/no longer supported/i.test(e.message)) {
      throw new Error(
        `Expected error containing "no longer supported", but got: ${JSON.stringify(
          e.message
        )}`
      );
    }
    return;
  }
  throw new Error(`Expected error, but got ${JSON.stringify(value)}`);
})();
