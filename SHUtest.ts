//還有錯
import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "./shuffle.ts";

Deno.test("shuffle", () => {
  assertEquals(_.shuffle([1,2,3,4,5]))
  })