//還有錯
import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "./findIndex.ts";


var users = [ 
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
]

Deno.test("findIndex", () => {
  assertEquals(_.findIndex(users, { 'user': 'barney', 'active': false }))
  })