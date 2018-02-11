'use strict'

import {mainReduce} from "./main-reduce-recursive";
import {reverse} from "../reverse/reverse-recursive";

export const reduceRight = (arr, ...params) => mainReduce(reverse(arr), ...params)