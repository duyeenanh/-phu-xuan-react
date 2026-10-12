import { formatDate } from './utils-esm.js';
import Utils from './utils-esm.js';
import { truncate, toSlug } from './utils-esm.js';

console.log('Named: ngày hôm nay:', formatDate(new Date()));
console.log('Default: slug:', Utils.toSlug('Xin chào phu-xuan-react'));

const tieuDe = 'React nâng cao 2026';
console.log('Named truncate:', truncate(tieuDe, 15));
console.log('Default truncate:', Utils.truncate(tieuDe, 15));