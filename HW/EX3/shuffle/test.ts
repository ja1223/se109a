//import assertNotEquals的原因是我認為隨機洗牌後結果不會等於原本的陣列
import { assertNotEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "./shuffle.ts";

Deno.test("shuffle", () => {
  assertNotEquals(_.shuffle([1,2,3,4,5]),[1,2,3,4,5])
  })