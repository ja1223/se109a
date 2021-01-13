import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "./dropRight.ts";

Deno.test("dropRight", () => {
  assertEquals(_.dropRight([1,2,3,4,5,6,7,8], 2), [1,2,3,4,5,6])
  assertEquals(_.dropRight([1,2,3], 2), [1])
  })