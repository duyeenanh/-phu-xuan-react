const { formatDate, truncate, toSlug } = require('./utils-cjs.cjs');

// --- Thử nghiệm 1: formatDate ---
const homNay = new Date();
console.log('Ngày hôm nay:', formatDate(homNay));

// --- Thử nghiệm 2: truncate ---
const tieuDeDai = 'Học React từ cơ bản đến nâng cao tại Đại học Phú Xuân năm 2026';
console.log('Rút ngắn:', truncate(tieuDeDai, 40));

// --- Thử nghiệm 3: toSlug ---
const tieuDe = 'Giới thiệu React và JSX';
console.log('Slug:', toSlug(tieuDe));