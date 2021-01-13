
import * as _ from "./findIndex.js";


var users = [ 
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
]

console.log("_.findIndex(users, { 'user': 'barney', 'active': false })=",_.findIndex(users, { 'user': 'barney', 'active': false }))
