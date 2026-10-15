import { Product } from '../types';

export const STORE_PHONE_NUMBER = '+254776816433';
export const STORE_PHONE_DIGITS = '254776816433';
export const STORE_LOCATION = 'Juja, Kiambu County (Along Thika Superhighway)';
export const STORE_HOURS = 'Monday – Sunday: 7:30 AM – 7:30 PM (Daily deliveries)';

export const FREE_DELIVERY_CAMPUSES = [
  {
    name: 'JKUAT (Juja)',
    badge: 'Immediate Local Delivery',
    description: 'Main Campus, Gate A, Gate B, Gate C, Gachororo, Juja South, High Point, and all surrounding student hostels.',
  },
  {
    name: 'Karatina University',
    badge: 'Free Direct Delivery',
    description: 'Main Campus, Kagochi, Town Campus, and faculty staff quarters & student hostels.',
  },
  {
    name: 'Mount Kenya University (MKU)',
    badge: 'Free Direct Delivery',
    description: 'Thika Main Campus, Happy Valley, Landless, General Kago, and student residences.',
  },
  {
    name: 'DeKUT (Dedan Kimathi University)',
    badge: 'Free Direct Delivery',
    description: 'Main Campus Nyeri, Nyeri Town center, Kimathi hostels, and lecturer offices.',
  },
];

export const PRODUCTS: Product[] = [
  // 1. Mahogany 3-Drawer Desk - KSh 6,000 (Matches IMG-20260614-WA0149)
  {
    id: 'desk-mahogany-3drawer',
    name: 'Mahogany 3-Drawer Study & Office Desk',
    category: 'desks',
    subCategory: 'executive',
    price: 6000,
    originalPrice: 7500,
    rating: 4.9,
    reviewCount: 94,
    inStock: true,
    stockCount: 15,
    tag: 'Bestseller · KSh 6,000',
    description: 'Dark mahogany red-brown wood finish with 3 smooth-gliding side drawers, curved black arch handles, and upper safety drawer lock with keys dangling. Flat solid vertical panel legs and full privacy modesty panel. Delivery fee included.',
    image: '/src/assets/images/desk_mahogany_real_3drawer_1792063607618.jpg',
    fallbackGradient: 'from-amber-950/20 via-stone-900/15 to-neutral-900/10',
    colors: [
      { name: 'Dark Mahogany', hex: '#451a03', tailwindClass: 'bg-[#451a03]' },
      { name: 'Walnut Brown', hex: '#3b2314', tailwindClass: 'bg-[#3b2314]' }
    ],
    dimensions: '120cm (Length) × 60cm (Width) × 75cm (Height)',
    material: 'Laminated Moisture-Resistant MDF with Protective PVC Edge Banding',
    warranty: '1-Year Structural Guarantee · Payment After Delivery',
    weightCapacity: '100 kg Distributed Weight',
    suitableFor: 'Students, lecturers, home study, research work, and office administration',
    features: [
      '3 stacked side drawers with curved ergonomic black handles',
      'Top drawer lock with 2 physical keys included for personal security',
      'Sturdy flat solid wood side panels with full modesty privacy board',
      'Delivered fully assembled and ready to use — zero tools needed',
      'Price of KSh 6,000 INCLUDES complete delivery fee to your gate/room',
      'Payment is strictly AFTER delivery & physical inspection'
    ]
  },

  // 2. Weathered Ash Grey Oak Desk - KSh 6,000 (Matches IMG-20260614-WA0190)
  {
    id: 'desk-ash-grey-grain',
    name: 'Weathered Ash Grey Oak Desk with Cable Port',
    category: 'desks',
    subCategory: 'executive',
    price: 6000,
    originalPrice: 7500,
    rating: 4.9,
    reviewCount: 78,
    inStock: true,
    stockCount: 12,
    tag: 'With Cable Port · KSh 6,000',
    description: 'Textured weathered ash grey wood-grain office computer desk. Features an integrated circular black desktop cable grommet, 3 side drawers with curved black handles, and upper key lock with keys. Delivery fee included.',
    image: '/src/assets/images/desk_ash_grey_real_grommet_1792063606533.jpg',
    fallbackGradient: 'from-slate-700/20 via-zinc-800/15 to-stone-900/10',
    colors: [
      { name: 'Weathered Ash Grey', hex: '#64748b', tailwindClass: 'bg-slate-500' },
      { name: 'Smoked Oak', hex: '#334155', tailwindClass: 'bg-slate-700' }
    ],
    dimensions: '120cm (Length) × 60cm (Width) × 75cm (Height)',
    material: 'High-Density Particle Board with Textured Wood Veneer Finish',
    warranty: '1-Year Structural Guarantee · Payment After Delivery',
    weightCapacity: '100 kg Distributed Weight',
    suitableFor: 'Programmers, students, researchers, computer labs, and online work',
    features: [
      'Desktop circular wire pass-through grommet for laptop and monitor cables',
      '3 deep drawers on metal slide tracks with black curved handles',
      'Top drawer lock with keys for security',
      'Sturdy wooden panel legs with scratch-resistant floor protectors',
      'Price of KSh 6,000 INCLUDES full delivery to specified campuses',
      'Inspect before you pay — 100% peace of mind guarantee'
    ]
  },

  // 3. Light Beech Teak Wood Desk - KSh 6,000 (Matches IMG-20260614-WA0153)
  {
    id: 'desk-teak-honey',
    name: 'Light Beech Teak 3-Drawer Workstation Desk',
    category: 'desks',
    subCategory: 'executive',
    price: 6000,
    originalPrice: 7500,
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    stockCount: 16,
    tag: 'Light Wood · KSh 6,000',
    description: 'Natural light beech teak wood study desk with 3 side drawers, black curved handles, and top drawer lock with keys inserted. Built with solid side panel legs and generous legroom. Delivery fee included.',
    image: '/src/assets/images/desk_beech_chair_headrest_1792063603865.jpg',
    fallbackGradient: 'from-amber-800/20 via-yellow-900/15 to-stone-900/10',
    colors: [
      { name: 'Light Beech Teak', hex: '#d97706', tailwindClass: 'bg-amber-600' },
      { name: 'Natural Pine', hex: '#ca8a04', tailwindClass: 'bg-yellow-600' }
    ],
    dimensions: '120cm (Length) × 60cm (Width) × 75cm (Height)',
    material: 'Reinforced Engineered Timber with Protective Top Coating',
    warranty: '1-Year Structural Guarantee · Payment After Delivery',
    weightCapacity: '100 kg Distributed Weight',
    suitableFor: 'Hostel rooms, apartments, lecturers, bedrooms, and study cubicles',
    features: [
      'Generous 60cm knee clearance under tabletop for any office chair',
      '3 full-extension storage drawers with smooth slide tracks',
      'Top drawer lock mechanism with 2 brass keys',
      'Sturdy scratch-resistant melamine surface',
      'Free delivery included in KSh 6,000 price tag',
      'Inspect goods upon arrival in Juja, Karatina, MKU, or DeKUT, then pay'
    ]
  },

  // 4. Matte Black 3-Drawer Office Desk - KSh 6,000 (Matches IMG-20260614-WA0155)
  {
    id: 'desk-black-matte',
    name: 'Matte Black 3-Drawer Modern Office Desk',
    category: 'desks',
    subCategory: 'executive',
    price: 6000,
    originalPrice: 7500,
    rating: 4.8,
    reviewCount: 71,
    inStock: true,
    stockCount: 10,
    tag: 'Matte Black · KSh 6,000',
    description: 'Modern all-black office study desk with 3 lockable drawers on the right, curved pull handles, and full privacy modesty panel. Looks stunning paired with black mesh chairs. Delivery fee included.',
    image: '/src/assets/images/desk_black_chair_midback_1792063604916.jpg',
    fallbackGradient: 'from-zinc-900 via-stone-900 to-black',
    colors: [
      { name: 'Obsidian Black', hex: '#18181b', tailwindClass: 'bg-zinc-900' },
      { name: 'Charcoal Grey', hex: '#334155', tailwindClass: 'bg-slate-700' }
    ],
    dimensions: '120cm (Length) × 60cm (Width) × 75cm (Height)',
    material: 'Commercial Matte Black Melamine with Sealed PVC Edges',
    warranty: '1-Year Structural Guarantee · Payment After Delivery',
    weightCapacity: '100 kg Distributed Weight',
    suitableFor: 'Minimalist setups, corporate offices, gaming desks, and study corners',
    features: [
      'Clean all-black contemporary aesthetic with curved pull handles',
      '3 spacious drawers for notebooks, tablets, textbooks & files',
      'Top drawer key lock with 2 keys included',
      'Wipes clean easily, water and scratch resistant',
      'KSh 6,000 price INCLUDES delivery to your campus or gate',
      'Pay strictly AFTER delivery & physical inspection'
    ]
  },

  // 5. Chair WITH Headrest - KSh 7,500 (Matches IMG-20260614-WA0153 chair)
  {
    id: 'chair-with-headrest-7500',
    name: 'Ergonomic High-Back Mesh Chair WITH Headrest',
    category: 'chairs',
    subCategory: 'mesh',
    price: 7500,
    originalPrice: 9000,
    rating: 4.9,
    reviewCount: 142,
    inStock: true,
    stockCount: 25,
    tag: 'With Headrest · KSh 7,500',
    description: 'Premier ergonomic high-back breathable mesh chair with adjustable neck and headrest cushion, curved dynamic lumbar spine support, smooth pneumatic gas lift, and gleaming chrome 5-wheel star base. Delivery fee included in price.',
    image: '/src/assets/images/chair_with_headrest_real_1792063606139.jpg',
    fallbackGradient: 'from-slate-900/15 via-zinc-800/10 to-slate-700/10',
    colors: [
      { name: 'Midnight Mesh & Chrome', hex: '#0f172a', tailwindClass: 'bg-slate-900' },
      { name: 'Dark Slate & Chrome', hex: '#334155', tailwindClass: 'bg-slate-700' }
    ],
    dimensions: '62cm (W) × 60cm (D) × 114–124cm (Height with Headrest)',
    material: 'High-Tension Breathable Korean Mesh + Chrome Plated Steel Star Base',
    warranty: '1-Year Full Warranty · Free Replacement Parts · Pay After Delivery',
    weightCapacity: '135 kg Weight Tested',
    suitableFor: 'Long study sessions, programmers, researchers, gamers, and office professionals',
    features: [
      'Multi-angle adjustable headrest supporting cervical spine and neck',
      'Dynamic S-curve lumbar backrest relieving lower back strain',
      'Heavy-duty pneumatic Class 3 gas lift for easy height adjustment',
      'High-resilience contoured cushion seat with breathable fabric',
      'Polished heavy-duty chrome 5-star swivel base with 360° smooth rolling wheels',
      'KSh 7,500 includes FREE delivery to JKUAT, Karatina, MKU, and DeKUT',
      'Payment is strictly AFTER delivery & on-site testing'
    ]
  },

  // 6. Chair WITHOUT Headrest - KSh 5,500 (Matches IMG-20260716-WA0071 FOC 007)
  {
    id: 'chair-without-headrest-5500',
    name: 'Ergonomic Mid-Back Mesh Chair WITHOUT Headrest',
    category: 'chairs',
    subCategory: 'mesh',
    price: 5500,
    originalPrice: 7000,
    rating: 4.8,
    reviewCount: 118,
    inStock: true,
    stockCount: 30,
    tag: 'Without Headrest · KSh 5,500',
    description: 'As shown in showroom model FOC 007. Streamlined mid-back breathable black mesh chair without headrest. Fitted with curved ergonomic lumbar back support, black loop armrests, pneumatic gas lift, and chrome 5-star swivel base. Delivery fee included in price.',
    image: '/src/assets/images/chair_without_headrest_real_1792063604956.jpg',
    fallbackGradient: 'from-stone-900/15 via-slate-800/10 to-zinc-800/10',
    colors: [
      { name: 'Classic Black Mesh & Chrome', hex: '#1e293b', tailwindClass: 'bg-slate-800' },
      { name: 'Grey Mesh & Chrome', hex: '#64748b', tailwindClass: 'bg-slate-500' }
    ],
    dimensions: '58cm (W) × 58cm (D) × 92–102cm (Height)',
    material: 'Breathable High-Density Mesh + Thick Sponge Seat + Chrome Steel Base',
    warranty: '1-Year Full Warranty · Pay After Delivery',
    weightCapacity: '120 kg Weight Tested',
    suitableFor: 'University students, compact study rooms, hostels, and general office desks',
    features: [
      'Breathable porous mesh back prevents sweating during hot revision days',
      'Curved ergonomic back contour matches natural spinal curvature',
      'Pneumatic smooth height lever raises and lowers effortlessly',
      'Slides fully under any study desk to save hostel floor space',
      'Durable chrome 5-wheel star base with smooth rolling wheels',
      'KSh 5,500 includes FREE delivery fee directly to your doorstep',
      'Payment is strictly AFTER delivery — test the chair before paying'
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    author: 'James Mwangi',
    role: 'BSc. Computer Science Student',
    institution: 'JKUAT (Juja)',
    quote: 'The desk arrived looking exactly like the photo with the 3 drawers, black curved handles, and keys in the top lock. Tested the chair gas lift and rolling wheels right at my hostel gate in Gachororo before paying via M-Pesa. 100% trustworthy!',
    productOrdered: 'Beech Desk + Chair with Headrest'
  },
  {
    id: 't2',
    author: 'Faith Chebet',
    role: 'Student & Researcher',
    institution: 'Karatina University',
    quote: 'Was initially hesitant because the store is in Juja, but the van arrived at Karatina University Main Campus gate with zero delivery fee. The desk was fully assembled and undamaged. Paid after checking!',
    productOrdered: 'Mahogany 3-Drawer Desk (KSh 6,000)'
  },
  {
    id: 't3',
    author: 'Dennis Kamau',
    role: 'Engineering Student',
    institution: 'DeKUT (Dedan Kimathi, Nyeri)',
    quote: 'Got the chair without headrest for KSh 5,500 and the weathered ash grey desk for KSh 6,000. It has the cable hole exactly as pictured. Delivered straight to Nyeri.',
    productOrdered: 'Ash Grey Desk + Chair without Headrest'
  },
  {
    id: 't4',
    author: 'Caroline Muthoni',
    role: 'Lecturer & Faculty Staff',
    institution: 'Mount Kenya University (MKU Thika)',
    quote: 'Ordered two sets for our private consultation room near MKU main campus. Both arrived wrapped securely. Driver was polite and helped carry them up before we sent payment.',
    productOrdered: '2 Desks + 2 Chairs with Headrest'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Are the products delivered identical to the images shown on this website?',
    answer: 'YES, 100%! The photos shown on this website are exact commercial photographs of our actual desks and chairs: 3 stacked side drawers on the right, black curved arch handles, working key lock on the top drawer with keys, flat solid panel legs, and chrome 5-star swivel bases for the chairs.'
  },
  {
    question: 'How does "Payment After Delivery" work?',
    answer: 'You do NOT pay any deposit or advance fee! You simply place your order on WhatsApp or via our website. Our driver delivers your desk and chair directly to your house, hostel, or office. You unpack, inspect the drawers, check the keys and test the chair swivel/gas lift. Once you are 100% satisfied, you pay the driver directly via M-Pesa or Cash. Zero financial risk!'
  },
  {
    question: 'Is delivery really FREE to Karatina University, Mount Kenya, JKUAT, and DeKUT?',
    answer: 'YES! We offer 100% FREE delivery to all four universities: Karatina University, Mount Kenya University (MKU), JKUAT (Juja), and Dedan Kimathi University of Technology (DeKUT), as well as their surrounding student hostels and staff residences. All prices on our site (KSh 6,000 for desks, KSh 7,500 for chair with headrest, KSh 5,500 for chair without headrest) already INCLUDE the full delivery fee!'
  },
  {
    question: 'Where is your workshop and store located?',
    answer: 'Our main fabrication and distribution hub is located in Juja, Kiambu County, right along the Thika Superhighway. Because of our central location along the highway, we run daily delivery vans directly to Juja/JKUAT, Thika/MKU, Karatina University, and Nyeri/DeKUT.'
  },
  {
    question: 'Do the desks come assembled?',
    answer: 'Yes! Desks arrive fully built and ready to use, complete with 3 drawers, black pull handles, and top drawer lock with two keys. You do not need any tools or frustrating DIY assembly.'
  },
  {
    question: 'How do I place an order right now?',
    answer: 'Click the "Order via WhatsApp" button or call +254776816433 directly. State which desk finish you prefer (Mahogany, Ash Grey, Light Beech Teak, or Matte Black) and whether you want the chair with headrest (KSh 7,500) or without headrest (KSh 5,500). Share your delivery location (e.g., JKUAT Juja Gate C, Karatina Univ hostel, MKU, or DeKUT) and we will dispatch right away!'
  }
];
