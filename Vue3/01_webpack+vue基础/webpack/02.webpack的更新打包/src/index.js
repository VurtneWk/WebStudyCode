
//webpack 打包的入口

import { addFn } from "./add/add.js";
import { getArrSum } from "./tool/tools.js";


console.log(addFn(5, 2));
console.log(getArrSum([5, 6, 9, 10]));