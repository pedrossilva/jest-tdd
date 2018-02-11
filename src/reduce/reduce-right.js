'use strict'

import {mainReduce} from "./main-reduce";
import {reverse} from "../reverse/reverse";

export const reduceRight = (arr, ...params) => mainReduce(reverse(arr), ...params)