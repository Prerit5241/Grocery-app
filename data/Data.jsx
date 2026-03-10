// shared grocery data arrays

const fruits = [
        {
            id: "f1",
            brand: "Fresho",
            name: "Black grapes",
            rating: "4.2",
            veg: true,
            img: "./images/f1.webp",
            variants: [
                { weight: "500 g", price: "200", ori_pri: "₹250", discount: "20% OFF" }
            ]
        },
        {
            id: "f2",
            brand: "Fresho",
            name: "Apple",
            rating: "4.5",
            veg: true,
            img: "./images/f2.webp",
            variants: [
                { weight: "1 kg", price: "180", ori_pri: "₹220", discount: "18% OFF" }
            ]
        },
        {
            id: "f3",
            brand: "Organic Fruit",
            name: "Strawberry",
            rating: "4.1",
            veg: true,
            img: "./images/f6.png",
            variants: [
                { weight: "200 g", price: "60", ori_pri: "₹80", discount: "25% OFF" }
            ]
        },
        {
            id: "f4",
            brand: "Fresho",
            name: "Pineapple",
            rating: "4.3",
            veg: true,
            img: "./images/f5.png",
            variants: [
                { weight: "1 pc (approx. 800g - 1.2kg)", price: "250", ori_pri: "₹300", discount: "16% OFF" }
            ]
        },
        {
            id: "f5",
            brand: "Nature's Best",
            name: "Avocado",
            rating: "4.4",
            veg: true,
            img: "./images/f7.png",
            variants: [
                { weight: "1 pc (approx. 200g - 300g)", price: "150", ori_pri: "₹200", discount: "25% OFF" }
            ]
        },
        {
            id: "f6",
            brand: "Premium Fruits",
            name: "Lychee",
            rating: "4.6",
            veg: true,
            img: "./images/f9.png",
            variants: [
                { weight: "500 g", price: "300", ori_pri: "₹400", discount: "25% OFF" }
            ]
        }
    ];

    const vegetables = [
        {
            id: "v1",
            brand: "Fresho",
            name: "Carrot",
            rating: "4.1",
            veg: true,
            img: "./images/w1.png",
            variants: [
                { weight: "500 g", price: "90", ori_pri: "₹110", discount: "18% OFF" }
            ]
        },
        {
            id: "v2",
            brand: "Fresho",
            name: "Broccoli",
            rating: "4.3",
            veg: true,
            img: "./images/w2.png",
            variants: [
                { weight: "1 pc (approx. 250g - 500g)", price: "120", ori_pri: "₹150", discount: "20% OFF" }
            ]
        },
        {
            id: "v3",
            brand: "Fresho",
            name: "Capsicum",
            rating: "4.2",
            veg: true,
            img: "./images/w3.png",
            variants: [
                { weight: "500 g", price: "100", ori_pri: "₹130", discount: "23% OFF" }
            ]
        },
        {
            id: "v4",
            brand: "Fresho",
            name: "Tomato",
            rating: "4.0",
            veg: true,
            img: "./images/w4.png",
            variants: [
                { weight: "1 kg", price: "80", ori_pri: "₹100", discount: "20% OFF" }
            ]
        },
        {
            id: "v5",
            brand: "Fresho",
            name: "Potato",
            rating: "4.5",
            veg: true,
            img: "./images/w5.png",
            variants: [
                { weight: "1 kg", price: "40", ori_pri: "₹50", discount: "20% OFF" }
            ]
        },
        {
            id: "v6",
            brand: "Fresho",
            name: "Onion",
            rating: "4.4",
            veg: true,
            img: "./images/w6.png",
            variants: [
                { weight: "1 kg", price: "50", ori_pri: "₹70", discount: "28% OFF" }
            ]
        }
    ];

    const dairy = [
        {
            id: "d1",
            brand: "Amul",
            name: "Butter",
            rating: "4.8",
            veg: true,
            img: "./images/d1.png",
            variants: [
                { weight: "100 g", price: "60", ori_pri: "₹65", discount: "₹5 OFF" }
            ]
        },
        {
            id: "d2",
            brand: "Nandini",
            name: "Eggs",
            rating: "4.5",
            veg: false,
            img: "./images/d2.png",
            variants: [
                { weight: "12 pcs", price: "200", ori_pri: "₹220", discount: "9% OFF" }
            ]
        },
        {
            id: "d3",
            brand: "Mother Dairy",
            name: "Milk",
            rating: "4.3",
            veg: true,
            img: "./images/d3.png",
            variants: [
                { weight: "1 L", price: "180", ori_pri: "₹180", discount: "" }
            ]
        },
        {
            id: "d4",
            brand: "Milky Mist",
            name: "Cheese",
            rating: "4.4",
            veg: true,
            img: "./images/d4.png",
            variants: [
                { weight: "200 g", price: "70", ori_pri: "₹90", discount: "22% OFF" }
            ]
        },
        {
            id: "d5",
            brand: "Kwality Walls",
            name: "Ice cream",
            rating: "4.7",
            veg: true,
            img: "./images/d5.png",
            variants: [
                { weight: "700 ml", price: "220", ori_pri: "₹250", discount: "12% OFF" }
            ]
        },
        {
            id: "d6",
            brand: "Standard",
            name: "Makan",
            rating: "4.2",
            veg: true,
            img: "./images/d6.png",
            variants: [
                { weight: "500 g", price: "90", ori_pri: "₹110", discount: "18% OFF" }
            ]
        }
    ];

    const bakery = [
        {
            id: "b1",
            brand: "English Oven",
            name: "Baked Oatmeal",
            rating: "4.3",
            veg: true,
            img: "./images/b1.png",
            variants: [
                { weight: "400 g", price: "200", ori_pri: "₹250", discount: "20% OFF" }
            ]
        },
        {
            id: "b2",
            brand: "Fresho",
            name: "Pide Bread",
            rating: "4.1",
            veg: true,
            img: "./images/b2.png",
            variants: [
                { weight: "200 g", price: "120", ori_pri: "₹150", discount: "20% OFF" }
            ]
        },
        {
            id: "b3",
            brand: "English Oven",
            name: "Baguette",
            rating: "4.4",
            veg: true,
            img: "./images/b3.png",
            variants: [
                { weight: "1 pc", price: "150", ori_pri: "₹180", discount: "16% OFF" }
            ]
        },
        {
            id: "b4",
            brand: "Modern",
            name: "Bread Bun",
            rating: "4.0",
            veg: true,
            img: "./images/b4.png",
            variants: [
                { weight: "2 pcs", price: "60", ori_pri: "₹70", discount: "14% OFF" }
            ]
        },
        {
            id: "b5",
            brand: "Britannia",
            name: "Brown Bread",
            rating: "4.5",
            veg: true,
            img: "./images/b5.png",
            variants: [
                { weight: "400 g", price: "80", ori_pri: "₹85", discount: "₹5 OFF" }
            ]
        },
        {
            id: "b6",
            brand: "Fresho",
            name: "Scone",
            rating: "4.2",
            veg: true,
            img: "./images/b6.png",
            variants: [
                { weight: "4 pcs", price: "140", ori_pri: "₹170", discount: "17% OFF" }
            ]
        }
    ];

    const masalas = [
        { id: "b1", name: "Sambar Powder", brand: "Sakthi", veg: true, weight: "100 g", rating: 4.2, discount: "31% OFF", price: 97, img: "./images/mm1.png" },

        {
            id: "b2", name: "Rasam Powder", brand: "MTR", weight: "200 g", rating: 4.1, discount: "13% OFF", price: 132, img: "./images/mm2.png", veg: true
        },

        {
            id: "b3", name: "Sambar Powder", brand: "Aachi", weight: "100 g", rating: 4.1, discount: "17% OFF", price: 38, img: "./images/mm3.png", veg: true
        },

        { id: "b4", name: "Puliogare Powder", brand: "MTR", weight: "200 g", rating: 4.2, discount: "14% OFF", price: 107.5, img: "./images/mm4.png", veg: true },

        { id: "b5", name: "Masala-Ae-Magic", brand: "Maggi", weight: "120 g", rating: 4.2, discount: "10% OFF", price: 90, img: "./images/mm5.png", veg: true },

        { id: "b6", name: "Garam Masala", brand: "Everest", weight: "100 g", rating: 4.1, discount: "0% OFF", price: 88, img: "./images/mm6.png", veg: true },

        {
            id: "b7", name: "Chaat Masala", brand: "Everest", weight: "100 g", rating: 4.2, discount: "1% OFF", price: 71, img: "./images/mm7.png", veg: true
        },

        { id: "b8", name: "Garam Masala With Natural Oils", brand: "Tata Sampann", weight: "100 g", rating: 4.1, discount: "20% OFF", price: 67.2, img: "./images/mm8.png", veg: true }
    ];

    const Spices = [
        { id: "s1", name: "Turmeric/Haldi Powder With Natural Oils", brand: "Tata Sampann", veg: true, weight: "200 g", rating: 4.1, discount: "28% OFF", price: 51.6, img: "./images/s1.png" },
        { id: "s2", name: "Jeera Powder", brand: "Catch", veg: true, weight: "100 g", rating: 4.1, discount: "19% OFF", price: 132, img: "./images/s2.png" },
        { id: "s3", name: "Chilli Powder/Menasina Pudi - Stemless", brand: "MTR", veg: true, weight: "500 g", rating: 4.1, discount: "25% OFF", price: 38, img: "./images/s3.png" },
        { id: "s4", name: "Chilli/Lal Mirchi Powder With Natural Oils", brand: "Tata Sampann", veg: true, weight: "200 g", rating: 4.1, discount: "25% OFF", price: 86.5, img: "./images/s4.png" },
        { id: "s5", name: "Tikhalal Chilli Powder/Menasina Pudi", brand: "Everest", veg: true, weight: "500 g", rating: 4.2, discount: "6% OFF", price: 274.4, img: "./images/s5.png" },
        { id: "s6", name: "Kashmirilal Ground Chilli Powder", brand: "Everest", veg: true, weight: "100 g", rating: 4.1, discount: "0% OFF", price: 100, img: "./images/s6.png" },
        { id: "s7", name: "Cumin Powder", brand: "Everest", veg: true, weight: "100 g", rating: 4.2, discount: "10% OFF", price: 68, img: "./images/s7.png" },
        { id: "s8", name: "Black Pepper Powder", brand: "Everest", veg: true, weight: "50 g", rating: 4.2, discount: "20% OFF", price: 92, img: "./images/s8.png" }
    ];



    const Pastes = [
        { id: "b1", name: "Ginger Garlic Paste - Thick & Coarse", brand: "Smith & Jones", weight: "200 g", rating: 4.2, discount: "38% OFF", price: " 29.14 ", ori_pri: " ₹47", img: "./images/p1.png", veg: true, },

        {
            id: "b2", name: "Hommade Ginger Garlic Paste", brand: "Dabur", weight: "200 g", rating: 4.1, discount: "21% OFF", price: 37.13, ori_pri: " ₹37.13 ", img: "./images/p2.png", veg: true,
        },

        {
            id: "b3", name: "Hommade Tomato Puree - From Ripe Tomatoes, No", brand: "Dabur", weight: "500 g", rating: 4.1, discount: "0% OFF", price: 25, img: "./images/p3.png", veg: true
        },

        { id: "b4", name: "Ginger Garlic Paste - No Added Colours & Flavours", brand: "Everest", weight: "200 g", rating: 4.2, discount: "5% OFF", price: 44.5, ori_pri: " ₹47", img: "./images/p4.png", veg: true },

        { id: "b5", name: "Tikhalal Chilli Powder/Menasina Pudi", brand: "Everest", weight: "500 g", rating: 4.2, discount: "6% OFF", price: 274.4, ori_pri: " ₹200", img: "./images/p5.png", veg: true },

        { id: "b6", name: "Tamarind Concentrate", brand: "Indira's", weight: "400 g", rating: 4.2, discount: "0% OFF", price: 177, img: "./images/p6.png", veg: true },

        {
            id: "b7", name: "Natural Tomato Paste", brand: "Indira's", weight: "450 g", rating: 4.4, discount: "0% OFF", price: 142, img: "./images/p7.png", veg: true
        },

        {
            id: "b8", name: "Andhra Mutton Curry Cooking Paste", brand: "CURRYiT", rating: 4.2, veg: false, img: "./images/p8.png", variants: [
                {
                    weight: "100 g",
                    price: 120,
                    ori_pri: "₹150",
                    discount: "20% OFF"
                },
                {
                    weight: "250 g",
                    price: 160,
                    ori_pri: "₹200",
                    discount: "20% OFF"
                },
                {
                    weight: "500 g",
                    price: 190,
                    ori_pri: "₹257",
                    discount: "26% OFF"
                }
            ]
        }
    ];

    const Dals = [
        { id: "b1", name: "Organic - Raw Peanuts/Kadalekayi", brand: "bb Royal", weight: "1 kg", rating: 4.2, price: " 269 ", img: "./images/dd1.png" },

        {
            id: "b2", name: "Organic - Toor Dal/Togari Bele", brand: "bb Royal", weight: "1 kg", rating: 3.8, price: 145, ori_pri: " ₹279", img: "./images/dd2.png"
        },

        {
            id: "b3", name: "Organic Kabuli Chana/Kabuli Kadale", brand: "bb Royal", weight: "500 g", rating: 3.9, price: 276, ori_pri: " ₹279", img: "./images/dd3.png"
        },

        { id: "b4", name: "Organic - Moong Dal/Hesaru Bele, Unpolished", brand: "bb Royal", weight: "1 kg", rating: 4, discount: "49% OFF", price: 143, ori_pri: " ₹279", img: "./images/dd4.png" },

        { id: "b5", name: "Organic Toor Dal/Togari Bele", brand: "Tata Sampann", weight: "500 g", rating: 4.1, discount: "20% OFF", price: 112.11, ori_pri: " ₹140", img: "./images/dd5.png" },

        { id: "b6", name: "Organic - Channa Dal Unpolished", brand: "bb Royal", weight: "2 kg", rating: 4, discount: "0% OFF", price: 233.6, ori_pri: " ₹429", img: "./images/dd6.png" },

        {
            id: "b7", name: "Organic - Chana Brown/Kadale Kaalu", brand: "bb Royal", weight: "1 kg", rating: 4, discount: "52% OFF", price: 113, ori_pri: " ₹234", img: "./images/dd7.png"
        },

        {
            id: "b8",
            name: "Organic - Urad Dal/Uddina Bele, Black (Split)",
            brand: "bb Royal",
            rating: 4.6,
            veg: true,
            img: "./images/dd8.png",
            variants: [
                {
                    weight: "100 g",
                    price: 120,
                    ori_pri: "₹150",
                    discount: "20% OFF"
                },
                {
                    weight: "250 g",
                    price: 160,
                    ori_pri: "₹200",
                    discount: "20% OFF"
                },
                {
                    weight: "500 g",
                    price: 190,
                    ori_pri: "₹257",
                    discount: "26% OFF"
                }
            ]
        }
    ];

    const OrganicRice = [
        {
            id: "r1",
            name: "Organic - Puffed Rice/Kadle Puri",
            brand: "24 Mantra Organic",
            weight: "200 g",
            rating: 3.9,
            veg: true,
            discount: "21% OFF",
            price: 43.7,
            ori_pri: " ₹55",
            img: "./images/ri1.png"
        },
        {
            id: "r2",
            name: "Organic Sona Masoori Raw Rice - 12+ Months Old",
            brand: "bb Royal",
            weight: "10 kg",
            rating: 4.0,
            veg: true,
            discount: "34% OFF",
            price: 755,
            ori_pri: " ₹1149",
            img: "./images/ri2.png"
        },
        {
            id: "r3",
            name: "Organic - Idly/Idli Rice/Akki",
            brand: "bb Royal",
            weight: "10 kg",
            rating: 3.9,
            veg: true,
            discount: "26% OFF",
            price: 592,
            ori_pri: " ₹800",
            img: "./images/ri3.png"
        },
        {
            id: "r4",
            name: "Organic Sona Masoori Semi Brown Rice/Akki - Handpounded",
            brand: "bb Royal",
            weight: "10 kg",
            rating: 4.0,
            veg: true,
            discount: "23% OFF",
            price: 890,
            ori_pri: " ₹1149",
            img: "./images/ri4.png"
        },
        {
            id: "r5",
            name: "Organic Brown Rice",
            brand: "bb Royal",
            weight: "5 kg",
            rating: 4.1,
            veg: true,
            discount: "13% OFF",
            price: 465.6,
            ori_pri: " ₹534",
            img: "./images/ri5.png"
        },
        {
            id: "r6",
            name: "Organic - Rice/Akki Surti Kolam",
            brand: "bb Royal",
            weight: "10 kg",
            rating: 4.0,
            veg: true,
            discount: "33% OFF",
            price: 1044,
            ori_pri: " ₹1549",
            img: "./images/ri6.png"
        },
        {
            id: "r7",
            name: "Organic - Quinoa",
            brand: "bb Royal",
            weight: "2 kg",
            rating: 3.9,
            veg: true,
            discount: "43% OFF",
            price: 399.36,
            ori_pri: " ₹699",
            img: "./images/ri7.png"
        },
        {
            id: "r8",
            name: "Organic Red Poha - Medium",
            brand: "bb Royal",
            weight: "1 kg",
            rating: 4.0,
            veg: true,
            discount: "29% OFF",
            price: 135,
            ori_pri: " ₹189",
            img: "./images/ri8.png"
        }
    ];

    const OrganicOil = [
        {
            id: "o1",
            brand: "Akshayakalpa",
            name: "Organic Cow Ghee/Tuppa",
            rating: 4.1,
            veg: true,
            img: "./images/o1.png",
            variants: [
                { weight: "195 ml", price: 306.9, ori_pri: "₹310", discount: "₹3 OFF" },
                { weight: "490 ml", price: 832.2, ori_pri: "₹876", discount: "₹44 OFF" }
            ]
        },
        {
            id: "o2",
            brand: "bb Royal Organic",
            name: "Cold Pressed Groundnut Cooking Oil",
            weight: "1 L - Pouch",
            rating: 4.2,
            veg: true,
            discount: "44% OFF",
            price: 335,
            ori_pri: "₹600",
            img: "./images/o2.png"
        },
        {
            id: "o3",
            brand: "bb Royal Organic",
            name: "Cold Pressed Sunflower Cooking Oil",
            weight: "1 L - Pouch",
            rating: 3.9,
            veg: true,
            discount: "37% OFF",
            price: 345,
            ori_pri: "₹550",
            img: "./images/o3.png"
        },
        {
            id: "o4",
            brand: "fresho! Organic",
            name: "Cow Desi Ghee/Tuppa",
            rating: 3.8,
            veg: true,
            img: "./images/o4.png",
            variants: [
                { weight: "100 ml", price: 115, ori_pri: "₹140", discount: "18% OFF" },
                { weight: "500 ml", price: 505, ori_pri: "₹660", discount: "23% OFF" },
                { weight: "1 L", price: 890, ori_pri: "₹1300", discount: "32% OFF" }
            ]
        },
        {
            id: "o5",
            brand: "bb Royal Organic",
            name: "Cold Pressed Sesame/Gingelly Cooking Oil",
            rating: 3.8,
            veg: true,
            img: "./images/o5.png",
            variants: [
                { weight: "500 ml - Pouch", price: 235, ori_pri: "₹240", discount: "₹5 OFF" },
                { weight: "1 L - Pouch", price: 430, ori_pri: "₹700", discount: "39% OFF" }
            ]
        },
        {
            id: "o6",
            brand: "Organic Tattva",
            name: "Cow Ghee",
            weight: "500 ml",
            rating: 5.0,
            veg: true,
            discount: "20% OFF",
            price: 799,
            ori_pri: "₹999",
            img: "./images/o6.png"
        },
        {
            id: "o7",
            brand: "Forgreen",
            name: "Organic Coconut Oil - Cold Pressed",
            weight: "1 L - Bottle",
            rating: 3.9,
            veg: true,
            price: 749,
            img: "./images/o7.png"
        },
        {
            id: "o8",
            brand: "fresho! Organic",
            name: "A2 Desi Cow Ghee, Traditional Bilona Method",
            rating: 4.4,
            veg: true,
            img: "./images/o8.png",
            variants: [
                { weight: "100 g", price: 150, ori_pri: null, discount: null },
                { weight: "500 ml", price: 750, ori_pri: "₹1500", discount: "50% OFF" }
            ]
        }
    ];

    const OrganicSugar = [
        {
            id: "s1",
            brand: "Organic Tattva",
            name: "Organic Jaggery Powder",
            rating: 3.9,
            veg: true,
            img: "./images/su1.png",
            variants: [
                { weight: "1 kg - Pouch", price: 127.61, ori_pri: "₹175", discount: "27% OFF" },
                { weight: "500 g - Pouch", price: 69, ori_pri: "₹90", discount: "23% OFF" }
            ]
        },
        {
            id: "s2",
            brand: "bb Royal",
            name: "Organic - Sugar/Sakkare",
            weight: "1 kg",
            rating: 3.9,
            veg: true,
            discount: "50% OFF",
            price: 55,
            ori_pri: "₹110",
            img: "./images/su2.png"
        },
        {
            id: "s3",
            brand: "bb Royal",
            name: "Organic - Brown Sugar/Sakkare",
            weight: "1 kg",
            rating: 3.9,
            veg: true,
            discount: "42% OFF",
            price: 69,
            ori_pri: "₹119",
            img: "./images/su3.png"
        },
        {
            id: "s4",
            brand: "bb Royal",
            name: "Organic Jaggery/Bella Powder",
            rating: 3.9,
            veg: true,
            img: "./images/su4.png",
            variants: [
                { weight: "1 kg - Jar", price: 109, ori_pri: "₹189", discount: "42% OFF" },
                { weight: "500 g - Jar", price: 74.97, ori_pri: "₹95", discount: "21% OFF" }
            ]
        },
        {
            id: "s5",
            brand: "24 Mantra Organic",
            name: "Brown Sugar",
            weight: "500 g",
            rating: 4.0,
            veg: true,
            discount: "29% OFF",
            price: 64.13,
            ori_pri: "₹90",
            img: "./images/su5.png"
        },
        {
            id: "s6",
            brand: "Organic Tattva",
            name: "Brown Sugar/Sakkare",
            weight: "1 kg - Pouch",
            rating: 4.0,
            veg: true,
            discount: "27% OFF",
            price: 127.61,
            ori_pri: "₹175",
            img: "./images/su6.png"
        },
        {
            id: "s7",
            brand: "24 Mantra Organic",
            name: "Organic Sugar/Sakkare",
            rating: 4.0,
            veg: true,
            img: "./images/su7.png",
            variants: [
                { weight: "1 kg - Pouch", price: 119.68, ori_pri: "₹160", discount: "25% OFF" },
                { weight: "500 g - Pouch", price: 83.3, ori_pri: "₹85", discount: "₹2 OFF" }
            ]
        },
        {
            id: "s8",
            brand: "Phalada Pure & Sure",
            name: "Organic - Coconut Sugar/Sakkare",
            weight: "500 g",
            rating: 4.2,
            veg: true,
            discount: "15% OFF",
            price: 323,
            ori_pri: "₹380",
            img: "./images/su8.png"
        }
    ];

    const SoyaMustardOil = [
        {
            id: "sm1",
            brand: "Dalda",
            name: "Kachi Ghani Mustard Oil",
            rating: 4.5,
            veg: true,
            img: "./images/sm1.png",
            weight: "1 L - Bottle",
            price: 192.5,
            ori_pri: "₹225",
            discount: "14% OFF"
        },
        {
            id: "sm2",
            brand: "Dhara",
            name: "Kachi Ghani Mustard Oil",
            rating: 4.1,
            veg: true,
            img: "./images/sm2.png",
            weight: "1 L - Bottle",
            price: 190.45,
            ori_pri: "₹250",
            discount: "24% OFF"
        },
        {
            id: "sm3",
            brand: "Patanjali",
            name: "Kachi Ghani Mustard Oil",
            rating: 4.2,
            veg: true,
            img: "./images/sm3.png",
            weight: "5 L - Jar",
            price: 1025,
            ori_pri: "",
            discount: ""
        },
        {
            id: "sm4",
            brand: "Emami Healthy & Tasty",
            name: "Regular Kachchi Ghani Mustard Oil",
            rating: 4.2,
            veg: true,
            img: "./images/sm4.png",
            weight: "825 g - PET Bottle",
            price: 162.22,
            ori_pri: "₹210",
            discount: "23% OFF"
        },
        {
            id: "sm5",
            brand: "Dhara",
            name: "Kachi Ghani Mustard Oil",
            rating: 4.2,
            veg: true,
            img: "./images/sm5.png",
            weight: "5 L",
            price: 997.39,
            ori_pri: "₹1175",
            discount: "15% OFF"
        },
        {
            id: "sm6",
            brand: "Anveshan",
            name: "Wood Cold Pressed Kachi Ghani Yellow Mustard Cooking Oil",
            rating: null,
            veg: true,
            img: "./images/sm6.png",
            weight: "1 L - Bottle",
            price: 479,
            ori_pri: "₹545",
            discount: "12% OFF"
        },
        {
            id: "sm7",
            brand: "Patanjali",
            name: "Mustard Oil",
            rating: 4.1,
            veg: true,
            img: "./images/sm7.png",
            weight: "1 L - Bottle",
            price: 199.5,
            ori_pri: "₹205",
            discount: "₹6 OFF"
        },
        {
            id: "sm8",
            brand: "Fortune",
            name: "Soya Health Refined Soyabean Oil",
            rating: 4.3,
            veg: true,
            img: "./images/sm8.png",
            weight: "750 g - Pouch",
            price: 149.1,
            ori_pri: "₹155",
            discount: "₹6 OFF"
        }
    ];

    const PohaSabudanaMurmura = [
        {
            id: "pm1",
            brand: "24 Mantra Organic",
            name: "Organic - Puffed Rice/Kadle Puri",
            rating: 3.9,
            img: "./images/pm1.png",
            variants: [
                { weight: "200 g - Pouch", price: "39.9", ori_pri: "₹55", discount: "27% OFF" }
            ]
        },
        {
            id: "pm2",
            brand: "bb Popular",
            name: "Poha - Thick",
            rating: 3.9,
            img: "./images/pm2.png",
            weight: "1 kg - Pouch",
            price: "74",
            ori_pri: "₹100",
            discount: "26% OFF"
        },
        {
            id: "pm3",
            brand: "Tata Sampann",
            name: "Thick Poha",
            rating: 3.9,
            img: "./images/pm3.png",
            weight: "1 kg - Pouch",
            price: "73.45",
            ori_pri: "₹113",
            discount: "35% OFF"
        },
        {
            id: "pm4",
            brand: "bb Royal",
            name: "Sabudana/Sago - White Medium, Chemical Free",
            rating: 3.9,
            img: "./images/pm4.png",
            variants: [
                { weight: "1 kg - Pouch", price: "85", ori_pri: "₹150", discount: "43% OFF" },
                { weight: "500 g - Pouch", price: "48", ori_pri: "₹75", discount: "36% OFF" }
            ]
        },
        {
            id: "pm5",
            brand: "bb Royal",
            name: "Barley/Jau",
            rating: 3.9,
            img: "./images/pm5.png",
            weight: "200 g - Pouch",
            price: "29",
            ori_pri: "₹30",
            discount: "3% OFF"
        },
        {
            id: "pm6",
            brand: "bb Royal",
            name: "Poha/Avalakki - Medium",
            rating: 3.9,
            img: "./images/pm6.png",
            variants: [
                { weight: "1 kg", price: "81", ori_pri: "₹110", discount: "26% OFF" },
                { weight: "500 g", price: "44", ori_pri: "₹55", discount: "20% OFF" }
            ]
        },
        {
            id: "pm7",
            brand: "bb Royal",
            name: "Poha/Avalakki/Aval/Chivda - Thick",
            rating: 4.1,
            img: "./images/pm7.png",
            variants: [
                { weight: "1 kg - Pouch", price: "69", ori_pri: "₹110", discount: "37% OFF" },
                { weight: "500 g - Pouch", price: "49", ori_pri: "₹55", discount: "11% OFF" }
            ]
        },
        {
            id: "pm8",
            brand: "bb Royal",
            name: "Organic Red Poha - Medium",
            rating: 4.0,
            img: "./images/pm8.png",
            variants: [
                { weight: "1 kg", price: "115", ori_pri: "₹189", discount: "39% OFF" },
                { weight: "500 g", price: "58", ori_pri: "₹99", discount: "41% OFF" }
            ]
        }
    ];

    const SoojiMaidaBesan = [
        {
            id: "smb1",
            brand: "Tata Sampann",
            name: "Fine Besan/Kadale Hittu - 100% Chana Dal",
            rating: "4.0",
            img: "./images/smb1.png",
            variants: [
                { weight: "1 kg", price: "106", ori_pri: "₹149", discount: "29% OFF" }
            ]
        },
        {
            id: "smb2",
            brand: "bb Royal",
            name: "Refined Wheat Flour/Maida",
            rating: "4.0",
            img: "./images/smb2.png",
            variants: [
                { weight: "1 kg - Pouch", price: "51", ori_pri: "₹75", discount: "32% OFF" },
                { weight: "500 g - Pouch", price: "26", ori_pri: "₹38", discount: "32% OFF" },
                { weight: "2 kg - Pouch", price: "102", ori_pri: "₹140", discount: "27% OFF" }
            ]
        },
        {
            id: "smb3",
            brand: "SriSri",
            name: "Bansi Sooji/Kesari Rava",
            rating: "4.0",
            img: "./images/smb3.png",
            variants: [
                { weight: "1 kg - Pouch", price: "50", ori_pri: "₹88", discount: "43% OFF" }
            ]
        },
        {
            id: "smb4",
            brand: "Double Horse",
            name: "Double Roasted Rava",
            rating: "4.0",
            img: "./images/smb4.png",
            variants: [
                { weight: "500 g - Pouch", price: "49.5", ori_pri: "₹55", discount: "10% OFF" },
                { weight: "1 kg", price: "110", ori_pri: "", discount: "" }
            ]
        },
        {
            id: "smb5",
            brand: "bb Royal",
            name: "Sooji/Bombay Rava",
            rating: "4.0",
            img: "./images/smb5.png",
            variants: [
                { weight: "1 kg - Pouch", price: "50", ori_pri: "₹79", discount: "37% OFF" }
            ]
        },
        {
            id: "smb6",
            brand: "Aashirvaad",
            name: "Double Roasted Suji Rava",
            rating: "3.9",
            img: "./images/smb6.png",
            variants: [
                { weight: "1 kg", price: "81.7", ori_pri: "₹86", discount: "5% OFF" },
                { weight: "500 g", price: "41.8", ori_pri: "₹44", discount: "5% OFF" }
            ]
        },
        {
            id: "smb7",
            brand: "Elite",
            name: "Double Roasted Rava",
            rating: "4.1",
            img: "./images/smb7.png",
            variants: [
                { weight: "500 g - Pouch", price: "65", ori_pri: "", discount: "" }
            ]
        },
        {
            id: "smb8",
            brand: "bb Royal",
            name: "Besan Fine/Kadale Hittu",
            rating: "3.9",
            img: "./images/smb8.png",
            variants: [
                { weight: "1 kg - Pouch", price: "95", ori_pri: "₹165", discount: "42% OFF" },
                { weight: "500 g", price: "49", ori_pri: "₹83", discount: "41% OFF" }
            ]
        }
    ];

    const AttaWholeWheat = [
        {
            id: "at1",
            brand: "Aashirvaad",
            name: "Atta With Multigrains",
            rating: "4.0",
            img: "./images/at1.png",
            veg: true,
            variants: [
                { weight: "1 kg", price: "78", ori_pri: "₹84", discount: "7% OFF" },
                { weight: "5 kg", price: "307", ori_pri: "₹406", discount: "24% OFF" },
                { weight: "10 kg", price: "718.2", ori_pri: "₹798", discount: "₹80 OFF" }
            ]
        },
        {
            id: "at2",
            brand: "Aashirvaad",
            name: "Atta/Godihittu - Whole Wheat",
            rating: "4.1",
            img: "./images/at2.png",
            variants: [
                { weight: "10 kg", price: "535.5", ori_pri: "₹644", discount: "17% OFF" },
                { weight: "1 kg", price: "64", ori_pri: "₹74", discount: "14% OFF" },
                { weight: "2 kg", price: "100.5", ori_pri: "₹108.5", discount: "₹8 OFF" },
                { weight: "5 kg", price: "306", ori_pri: "₹358", discount: "15% OFF" }
            ]
        },
        {
            id: "at3",
            brand: "Aashirvaad",
            name: "Select Atta/Godihittu",
            rating: "4.1",
            img: "./images/at3.png",
            variants: [
                { weight: "5 kg", price: "344", ori_pri: "₹406", discount: "15% OFF" },
                { weight: "1 kg", price: "77", ori_pri: "₹84", discount: "8% OFF" },
                { weight: "10 kg", price: "631.1", ori_pri: "₹710.1", discount: "₹79 OFF" }
            ]
        },
        {
            id: "at4",
            brand: "Fortune",
            name: "Chakki Fresh Atta/Godihittu",
            rating: "4.4",
            img: "./images/at4.png",
            variants: [
                { weight: "5 kg", price: "282.5", ori_pri: "₹360", discount: "22% OFF" },
                { weight: "10 kg", price: "543.88", ori_pri: "₹628", discount: "13% OFF" }
            ]
        },
        {
            id: "at5",
            brand: "bb Royal",
            name: "Chakki-Fresh-Wheat-Atta/Godihittu",
            rating: "4.0",
            img: "./images/at5.png",
            variants: [
                { weight: "1 kg", price: "52", ori_pri: "₹65", discount: "20% OFF" },
                { weight: "5 kg", price: "239", ori_pri: "₹290", discount: "18% OFF" },
                { weight: "10 kg", price: "459", ori_pri: "₹550", discount: "17% OFF" }
            ]
        },
        {
            id: "at6",
            brand: "Aashirvaad",
            name: "Atta With High Protein",
            rating: "4.1",
            img: "./images/at6.png",
            variants: [
                { weight: "5 kg", price: "333.9", ori_pri: "₹420", discount: "21% OFF" },
                { weight: "1 kg", price: "70.95", ori_pri: "₹86", discount: "18% OFF" }
            ]
        },
        {
            id: "at7",
            brand: "bb Royal",
            name: "Superior-Mp-Sharbati-Atta - Fortified",
            rating: "4.1",
            img: "./images/at7.png",
            variants: [
                { weight: "1 kg", price: "55", ori_pri: "₹75", discount: "27% OFF" },
                { weight: "5 kg", price: "245", ori_pri: "₹330", discount: "26% OFF" },
                { weight: "10 kg - Pouch", price: "495", ori_pri: "₹650", discount: "24% OFF" }
            ]
        },
        {
            id: "at8",
            brand: "Pillsbury",
            name: "Atta/Godihittu - Chakki Fresh",
            rating: "4.0",
            img: "./images/at8.png",
            variants: [
                { weight: "10 kg - Pouch", price: "525.47", ori_pri: "₹638", discount: "18% OFF" },
                { weight: "1 kg - Pouch", price: "62", ori_pri: "₹73", discount: "15% OFF" },
                { weight: "5 kg - Pouch", price: "267", ori_pri: "₹355", discount: "25% OFF" }
            ]
        }
    ];

    const DriedFruitsBerries = [
        {
            id: "df1",
            brand: "Grocery Farm",
            name: "Dried American Cranberries Sliced",
            rating: "4.5",
            img: "./images/df1.png",
            variants: [
                { weight: "200 g", price: "207.12", ori_pri: "₹349", discount: "41% OFF" }
            ]
        },
        {
            id: "df2",
            brand: "Grocery Farm",
            name: "Turkish Apricots - Premium & Hand Picked, Natural",
            rating: "4.4",
            img: "./images/df2.png",
            variants: [
                { weight: "200 g", price: "349", ori_pri: "₹349", discount: "" }
            ]
        },
        {
            id: "df3",
            brand: "Grocery Farm",
            name: "Brazilian Nuts",
            rating: "4.5",
            img: "./images/df3.png",
            variants: [
                { weight: "150 g", price: "749", ori_pri: "₹749", discount: "" }
            ]
        },
        {
            id: "df4",
            brand: "Grocery Farm",
            name: "Treats Of Radiance Premium Dry Fruits",
            rating: "4.0",
            img: "./images/df4.png",
            variants: [
                { weight: "150 g", price: "299", ori_pri: "₹299", discount: "" }
            ]
        },
        {
            id: "df5",
            brand: "Grocery Farm",
            name: "Joy Of Celebration Premium Dry Fruits",
            rating: "5.0",
            img: "./images/df5.png",
            variants: [
                { weight: "200 g", price: "399", ori_pri: "₹399", discount: "" }
            ]
        },
        {
            id: "df6",
            brand: "Grocery Farm",
            name: "Dried American Blueberries",
            rating: "4.0",
            img: "./images/df6.png",
            variants: [
                { weight: "150 g", price: "451.52", ori_pri: "₹799", discount: "43% OFF" }
            ]
        },
        {
            id: "df7",
            brand: "Grocery Farm",
            name: "Berries Mix",
            rating: "4.1",
            img: "./images/df7.png",
            variants: [
                { weight: "200 g", price: "314.64", ori_pri: "₹399", discount: "21% OFF" }
            ]
        },
        {
            id: "df8",
            brand: "Grocery Farm",
            name: "Turkish Hazelnut",
            rating: "4.1",
            img: "./images/df8.png",
            variants: [
                { weight: "100 g", price: "330.76", ori_pri: "₹499", discount: "34% OFF" }
            ]
        }
    ];

    const ShampooConditioner = [
        {
            id: "xx1",
            brand: "Head & Shoulders",
            name: "Cool Menthol Anti-Dandruff Shampoo",
            rating: "4.4",
            img: "./images/xx1.png",
            variants: [
                { weight: "1 L", price: "565.6", ori_pri: "₹1414", discount: "60% OFF" },
                { weight: "180 ml", price: "149.25", ori_pri: "₹199", discount: "25% OFF" },
                { weight: "340 ml", price: "316", ori_pri: "₹395", discount: "20% OFF" },
                { weight: "650 ml", price: "741.75", ori_pri: "₹989", discount: "25% OFF" }
            ]
        },
        {
            id: "xx2",
            brand: "Dove",
            name: "Hair Fall Rescue Shampoo",
            rating: "4.1",
            img: "./images/xx2.png",
            variants: [
                { weight: "1 L", price: "685", ori_pri: "₹1370", discount: "50% OFF" },
                { weight: "75 ml", price: "60", ori_pri: "₹60", discount: "" },
                { weight: "180 ml", price: "129", ori_pri: "₹172", discount: "25% OFF" },
                { weight: "340 ml", price: "326.25", ori_pri: "₹435", discount: "25% OFF" }
            ]
        },
        {
            id: "xx3",
            brand: "Tresemme",
            name: "Keratin Smooth+ Shampoo",
            rating: "4.2",
            img: "./images/xx3.png",
            variants: [
                { weight: "1 L", price: "685", ori_pri: "₹1370", discount: "50% OFF" },
                { weight: "83 ml", price: "65", ori_pri: "₹65", discount: "" },
                { weight: "180 ml", price: "172", ori_pri: "₹172", discount: "" },
                { weight: "340 ml", price: "367.5", ori_pri: "₹490", discount: "25% OFF" }
            ]
        },
        {
            id: "xx4",
            brand: "Dove",
            name: "Intense Repair Shampoo",
            rating: "4.1",
            img: "./images/xx4.png",
            variants: [
                { weight: "650 ml", price: "533", ori_pri: "₹1211", discount: "56% OFF" },
                { weight: "1 L", price: "685", ori_pri: "₹1370", discount: "50% OFF" },
                { weight: "340 ml", price: "367.5", ori_pri: "₹490", discount: "25% OFF" }
            ]
        },
        {
            id: "xx5",
            brand: "L'Oreal Paris",
            name: "Total Repair 5 Repairing Shampoo",
            rating: "4.0",
            img: "./images/xx5.png",
            variants: [
                { weight: "340 ml", price: "350.38", ori_pri: "₹415", discount: "16% OFF" },
                { weight: "180 ml", price: "161", ori_pri: "₹215", discount: "25% OFF" },
                { weight: "650 ml", price: "719.1", ori_pri: "₹799", discount: "10% OFF" },
                { weight: "1 L", price: "1144", ori_pri: "₹1430", discount: "20% OFF" }
            ]
        },
        {
            id: "xx6",
            brand: "Head & Shoulders",
            name: "Cool Menthol 2 in 1 Anti-Dandruff Shampoo + Conditioner",
            rating: "4.3",
            img: "./images/xx6.png",
            variants: [
                { weight: "1 L", price: "604.4", ori_pri: "₹1511", discount: "60% OFF" },
                { weight: "180 ml", price: "199", ori_pri: "₹199", discount: "" },
                { weight: "340 ml", price: "395", ori_pri: "₹395", discount: "" },
                { weight: "650 ml", price: "989", ori_pri: "₹989", discount: "" }
            ]
        },
        {
            id: "xx7",
            brand: "Sunsilk",
            name: "Flowy Silk Smooth Shampoo",
            rating: "4.2",
            img: "./images/xx7.png",
            variants: [
                { weight: "650 ml", price: "441", ori_pri: "₹882", discount: "50% OFF" },
                { weight: "180 ml", price: "129.5", ori_pri: "₹185", discount: "30% OFF" },
                { weight: "340 ml", price: "273", ori_pri: "₹390", discount: "30% OFF" }
            ]
        },
        {
            id: "xx8",
            brand: "Sunsilk",
            name: "Radiant Black Shine Shampoo",
            rating: "4.1",
            img: "./images/xx8.png",
            variants: [
                { weight: "650 ml", price: "434", ori_pri: "₹1053", discount: "59% OFF" },
                { weight: "180 ml", price: "157.25", ori_pri: "₹185", discount: "15% OFF" },
                { weight: "340 ml", price: "211.65", ori_pri: "₹390", discount: "46% OFF" }
            ]
        }
    ];

    const HairOilSerum = [
        {
            id: "ho1",
            brand: "Kapiva",
            name: "Kerala Virgin Coconut Oil - Cold Pressed",
            rating: "4.1",
            img: "./images/ho1.png",
            variants: [
                { weight: "500 ml", price: "501.5", ori_pri: "₹590", discount: "15% OFF" }
            ]
        },
        {
            id: "ho2",
            brand: "Kapiva",
            name: "Kerala Virgin Coconut Oil - Cold Pressed",
            rating: "4.1",
            img: "./images/ho2.png",
            variants: [
                { weight: "250 ml - Bottle", price: "297.5", ori_pri: "₹350", discount: "15% OFF" }
            ]
        },
        {
            id: "ho3",
            brand: "BeejMantra",
            name: "Blackseed Oil - Organic, Cold-Pressed, Boosts Immune System",
            rating: "3.7",
            img: "./images/ho3.png",
            variants: [
                { weight: "100 ml - Bottle", price: "271.15", ori_pri: "₹319", discount: "15% OFF" }
            ]
        },
        {
            id: "ho4",
            brand: "Parachute",
            name: "100% Pure Coconut Oil",
            rating: "4.5",
            img: "./images/ho4.png",
            variants: [
                { weight: "600 ml - Bottle", price: "330.33", ori_pri: "₹429", discount: "23% OFF" }
            ]
        },
        {
            id: "ho5",
            brand: "Parachute",
            name: "100% Pure Coconut Oil",
            rating: "4.4",
            img: "./images/ho5.png",
            variants: [
                { weight: "200 ml", price: "147.25", ori_pri: "₹155", discount: "₹8 OFF" }
            ]
        },
        {
            id: "ho6",
            brand: "Parachute",
            name: "100% Pure Coconut Oil",
            rating: "4.4",
            img: "./images/ho6.png",
            variants: [
                { weight: "300 ml - Bottle", price: "177.6", ori_pri: "₹222", discount: "20% OFF" }
            ]
        },
        {
            id: "ho7",
            brand: "Parachute",
            name: "Advansed Gold Coconut Hair Oil - For Long & Strong Hair, 100% Pure",
            rating: "4.1",
            img: "./images/ho7.png",
            variants: [
                { weight: "2 x 400 ml - Multipack", price: "400", ori_pri: "₹800", discount: "50% OFF" }
            ]
        },
        {
            id: "ho8",
            brand: "Parachute Advansed",
            name: "Gold Coconut Hair Oil",
            rating: "4.1",
            img: "./images/ho8.png",
            variants: [
                { weight: "400 ml", price: "200", ori_pri: "₹400", discount: "50% OFF" }
            ]
        }
    ];

    const BathingBarsSoaps = [
        {
            id: "bar1",
            brand: "Dove",
            name: "Sandalwood Bar for Glowing Skin with Natural Origin Sandalwood & Saffron Extracts",
            rating: "4.1",
            img: "./images/bar1.png",
            variants: [
                {
                    weight: "125 g - (Pack of 3)",
                    price: "244",
                    ori_pri: "₹305",
                    discount: "20% OFF"
                }
            ]
        },
        {
            id: "bar2",
            brand: "Lifebuoy",
            name: "Total Soap",
            rating: "4.1",
            img: "./images/bar2.png",
            variants: [
                {
                    weight: "125 g - (Pack of 4)",
                    price: "144",
                    ori_pri: "",
                    discount: ""
                }
            ]
        },
        {
            id: "bar3",
            brand: "Boroplus",
            name: "Moisturising Bathing Soap With Neem, Eucalyptus & Honey",
            rating: "4.2",
            img: "./images/bar3.png",
            variants: [
                {
                    weight: "125 g - (Buy 3 Get 1 Free)",
                    price: "140.16",
                    ori_pri: "₹192",
                    discount: "27% OFF"
                }
            ]
        },
        {
            id: "bar4",
            brand: "Medimix Ayurvedic",
            name: "Ayurvedic Sandal Bathing Soap, With Eladi Oil for Glowing Skin Everyday",
            rating: "4.1",
            img: "./images/bar4.png",
            variants: [
                {
                    weight: "125 g - (Pack of 3)",
                    price: "162",
                    ori_pri: "",
                    discount: ""
                }
            ]
        },
        {
            id: "bar5",
            brand: "Savlon",
            name: "Glycerin Bathing Bar",
            rating: "4.1",
            img: "./images/bar5.png",
            variants: [
                {
                    weight: "625 g - (5 pcs x 125 g each)",
                    price: "172.25",
                    ori_pri: "₹265",
                    discount: "35% OFF"
                }
            ]
        },
        {
            id: "bar6",
            brand: "Dove",
            name: "Pink Radiance Serum Bar",
            rating: "4.2",
            img: "./images/bar6.png",
            variants: [
                {
                    weight: "125 g - (Pack of 3)",
                    price: "283.65",
                    ori_pri: "₹305",
                    discount: "₹21 OFF"
                }
            ]
        },
        {
            id: "bar7",
            brand: "Lux",
            name: "Rose & Vitamin E Soap",
            rating: "4.4",
            img: "./images/bar7.png",
            variants: [
                {
                    weight: "150 g - (Pack of 3)",
                    price: "128.88",
                    ori_pri: "₹179",
                    discount: "28% OFF"
                }
            ]
        },
        {
            id: "bar8",
            brand: "Chandrika",
            name: "Ayurvedic Soap",
            rating: "4.5",
            img: "./images/bar8.png",
            variants: [
                {
                    weight: "125 g - (Pack of 6)",
                    price: "260.25",
                    ori_pri: "₹347",
                    discount: "25% OFF"
                }
            ]
        }
    ];

    const FaceCare = [
        {
            id: "face1",
            brand: "Nivea",
            name: "Nivea Men Dark Spot Reduction Creme - With UV Protection",
            rating: "4.1",
            img: "./images/face1.png",
            variants: [
                { weight: "75 ml", price: "220.15", ori_pri: "₹259", discount: "15% OFF" },
                { weight: "150 ml", price: "413.1", ori_pri: "₹459", discount: "₹46 OFF" }
            ]
        },
        {
            id: "face2",
            brand: "Nivea",
            name: "Soft Light Vitamin E Moisturiser",
            rating: "4.3",
            img: "./images/face2.png",
            variants: [
                { weight: "300 ml", price: "362.5", ori_pri: "₹725", discount: "50% OFF" },
                { weight: "200 ml", price: "340", ori_pri: "₹400", discount: "15% OFF" },
                { weight: "100 ml", price: "251.75", ori_pri: "₹265", discount: "₹13 OFF" },
                { weight: "50 ml", price: "137.75", ori_pri: "₹145", discount: "₹7 OFF" }
            ]
        },
        {
            id: "face3",
            brand: "Cetaphil",
            name: "Bright Healthy Radiance - Brightening Day Protection Cream, SPF 15",
            rating: "4.3",
            img: "./images/face3.png",
            variants: [
                { weight: "50 g", price: "1299", ori_pri: "₹1299", discount: "" }
            ]
        },
        {
            id: "face4",
            brand: "Everyuth Naturals",
            name: "Hydrating & Exfoliating Walnut Apricot Scrub",
            rating: "4.1",
            img: "./images/face4.png",
            variants: [
                { weight: "100 g - Tube", price: "182.62", ori_pri: "₹210", discount: "13% OFF" }
            ]
        },
        {
            id: "face5",
            brand: "Garnier Men",
            name: "Turbo Bright Anti-Pollution Double Action Face Wash",
            rating: "4.1",
            img: "./images/face5.png",
            variants: [
                { weight: "150 g", price: "476.13", ori_pri: "₹479", discount: "₹3 OFF" }
            ]
        },
        {
            id: "face6",
            brand: "Kama Ayurveda",
            name: "Kumkumadi Rejuvenating & Brightening Night Cream",
            rating: "",
            img: "./images/face6.png",
            variants: [
                { weight: "25 g", price: "798", ori_pri: "₹1995", discount: "60% OFF" }
            ]
        },
        {
            id: "face7",
            brand: "Nivea",
            name: "Light Moisturizer Cream - Soft Playful Peach, For Face, Hands & Body",
            rating: "4.0",
            img: "./images/face7.png",
            variants: [
                { weight: "200 ml", price: "449", ori_pri: "₹449", discount: "" }
            ]
        },
        {
            id: "face8",
            brand: "Olay",
            name: "Collagen Peptide Eye Cream With Niacinamide - Reduces Dark Circles",
            rating: "",
            img: "./images/face8.png",
            variants: [
                { weight: "15 ml", price: "1999", ori_pri: "₹1999", discount: "" }
            ]
        }
    ];

    const Toothpaste = [
        {
            id: "tp1",
            brand: "Colgate",
            name: "Total Advanced Health Anticavity Toothpaste",
            rating: "4.1",
            img: "./images/tp1.png",
            variants: [
                { weight: "300 g - (2 pcs x 150 g)", price: "189", ori_pri: "₹378", discount: "50% OFF" },
                { weight: "2 pcs - (Toothpaste, 150 g)", price: "179", ori_pri: "", discount: "" },
                { weight: "150 g", price: "191.25", ori_pri: "₹225", discount: "15% OFF" },
                { weight: "3x150 g - Multipack", price: "537", ori_pri: "", discount: "" }
            ]
        },
        {
            id: "tp2",
            brand: "Colgate",
            name: "Strong Teeth Anticavity Toothpaste",
            rating: "4.1",
            img: "./images/tp2.png",
            variants: [
                { weight: "100 g", price: "70", ori_pri: "", discount: "" },
                { weight: "150 g", price: "99", ori_pri: "", discount: "" },
                { weight: "200 g", price: "130", ori_pri: "", discount: "" },
                { weight: "500 g - (200g + 200g + 100g)", price: "223.2", ori_pri: "₹310", discount: "28% OFF" }
            ]
        },
        {
            id: "tp3",
            brand: "Sensodyne",
            name: "Repair & Protect Toothpaste",
            rating: "4.2",
            img: "./images/tp3.png",
            variants: [
                { weight: "70 g", price: "180", ori_pri: "₹200", discount: "₹20 OFF" },
                { weight: "100 g", price: "188.5", ori_pri: "₹240", discount: "21% OFF" },
                { weight: "70 g - (Pack of 2)", price: "360", ori_pri: "₹400", discount: "₹40 OFF" }
            ]
        },
        {
            id: "tp4",
            brand: "Sensodyne",
            name: "Rapid Relief Toothpaste",
            rating: "4.2",
            img: "./images/tp4.png",
            variants: [
                { weight: "80 g", price: "133.5", ori_pri: "₹187", discount: "29% OFF" },
                { weight: "80 g - (Pack of 2)", price: "336.6", ori_pri: "₹374", discount: "₹37 OFF" }
            ]
        },
        {
            id: "tp5",
            brand: "Vicco",
            name: "Vajradanti Ayurvedic Toothpaste",
            rating: "4.2",
            img: "./images/tp5.png",
            variants: [
                { weight: "200 g", price: "141", ori_pri: "", discount: "" },
                { weight: "100 g", price: "85", ori_pri: "", discount: "" }
            ]
        },
        {
            id: "tp6",
            brand: "Patanjali",
            name: "Dant Kanti Medicated Oral Gel",
            rating: "4.2",
            img: "./images/tp6.png",
            variants: [
                { weight: "100 g", price: "36.8", ori_pri: "₹40", discount: "8% OFF" }
            ]
        },
        {
            id: "tp7",
            brand: "Dabur Red",
            name: "Ayurvedic Fluoride Free Toothpaste",
            rating: "4.1",
            img: "./images/tp7.png",
            variants: [
                { weight: "200 g", price: "124.2", ori_pri: "₹135", discount: "₹11 OFF" },
                { weight: "800 g - (4 x 200 g)", price: "317.4", ori_pri: "₹529", discount: "40% OFF" },
                { weight: "100 g", price: "65.55", ori_pri: "₹69", discount: "5% OFF" },
                { weight: "300 g - (200 + 100 g)", price: "175.44", ori_pri: "₹204", discount: "14% OFF" }
            ]
        },
        {
            id: "tp8",
            brand: "Colgate",
            name: "MaxFresh Toothpaste - Red Gel With Menthol",
            rating: "4.6",
            img: "./images/tp8.png",
            variants: [
                { weight: "150 g - (Pack of 4)", price: "369.84", ori_pri: "₹552", discount: "33% OFF" },
                { weight: "150 g", price: "118", ori_pri: "₹138", discount: "14% OFF" },
                { weight: "300 g - (2x150 g)", price: "169.6", ori_pri: "₹265", discount: "36% OFF" }
            ]
        }
    ];

// exports for other modules
export {
  OrganicOil,
  OrganicSugar,
  OrganicRice,
  SoyaMustardOil,
  PohaSabudanaMurmura,
  SoojiMaidaBesan,
  AttaWholeWheat,
  DriedFruitsBerries,
  Dals,
  fruits,
  vegetables,
  dairy,
  bakery,
  masalas,
  Spices,
  Pastes,
  ShampooConditioner,
  HairOilSerum,
  BathingBarsSoaps,
  FaceCare,
  Toothpaste
};

export default {
  OrganicOil,
  OrganicSugar,
  OrganicRice,
  SoyaMustardOil,
  PohaSabudanaMurmura,
  SoojiMaidaBesan,
  AttaWholeWheat,
  DriedFruitsBerries,
  Dals,
  fruits,
  vegetables,
  dairy,
  bakery,
  masalas,
  Spices,
  Pastes,
  ShampooConditioner,
  HairOilSerum,
  BathingBarsSoaps,
  FaceCare,
  Toothpaste
};