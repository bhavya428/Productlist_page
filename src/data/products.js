const products = [
  { id: 1,
    name: "Classic Sneakers",
    price: 79.99,
    category: "Footwear",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIEctPENMVgUM-uHfsoCLQBFJa6ZAfLguFDoueLNeLUR3yWQPYH7xhwZlQcvymDXF6_kyNbD6lfbE_br3srRtgdIlr8ZA1XK7CaLTM2Kfr6ULmXu3sdoLf&usqp=CAE",
    description: " Men's Colorblocked Low Top Classic Lace-Up Sneaker Shoes|Low Ankle Casual Shoes|All Day Comfortable Sneakers"
    },
    {
    id: 2,
    name: "Wireless Headphones",
    price: 149.99,
    category: "Electronics",
    image: "data:image/png;base64,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", 
    description: "boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Aqua Blue)"
    },
    {
    id: 3,
    name: "Smartwatch",
    price: 199.99,
    category: "Wearables",
    image: "https://freesvg.org/img/1621604835smartwatch-silhouette.png", 
    description: "Titan Smart 3 Premium Smart Watch|1.96 Super AMOLED Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery (Black)"
  },
    {
   id: 4,
    name: "Leather Jacket",
    price: 299.99,
    category: "Clothing",
     image: "https://idreesleather.com/wp-content/uploads/2022/11/Mens-Legacy-Black-Leather-Biker-Jacket_in_pakistan__Idrees_Leather-1.jpg",
    description: "Garmadian Men's Black Biker Leather Jacket"
    },
    {
    id: 5,
    name: "Backpack",
    price: 89.99,
    category: "Accessories",
    image: "https://i.pinimg.com/originals/e2/cd/94/e2cd94783a36cf10c0b7ef33082fd8f8.jpg", 
    description: "American Tourister Valex 28 Ltrs Large Laptop Backpack"
    },
    {
    id: 6,
    name: "Sunglasses",
    price: 129.99,
    category: "Accessories",
    image: "https://i.etsystatic.com/20553578/r/il/1d1e87/1952191328/il_fullxfull.1952191328_fjfe.jpg", 
    description: "Vincent Chase By Lenskart | Full Rim Square | Polarized and 100% UV Protected | Men & Women | Large | VC S12934 "
    },
    {
    id: 7,
    name: "Gaming Mouse",
    price: 59.99,
    category: "Electronics",
    image: "https://images-na.ssl-images-amazon.com/images/I/61QXVSF6bLL._AC_SL1500_.jpg", 
    description: "High Precision Wired Gaming Mouse with 4 Buttons, Rainbow LED Lights, DPI Switch with 800/1200/1600/2400 DPI, Plug & Play, 3 Million clicks, Lightweight Mouse"
    },
    {
    id: 8,
    name: "Bluetooth Speaker",
   price: 99.99,
    category: "Electronics",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/bluetooth-speaker-3d-icon-download-in-png-blend-fbx-gltf-file-formats--wireless-music-electronic-smart-home-vol1-pack-appliances-icons-4946624.png?f=webp", 
    description: "boAt Stone 620 Bluetooth Speaker with 12W RMS Stereo Sound, 10HRS Playtime, TWS Feature, IPX4, Multi-Compatibility Modes(Grey)"
    },
    {
    id: 9,
    name: "Running Shoes",
    price: 129.99,
    category: "Footwear",
    image: "https://img.freepik.com/free-vector/hand-drawn-running-shoes-cartoon-illustration_23-2150985777.jpg",  
    description: "Athleisure Sport Shoes for Men |Classic Rounded Toe, Impact Cushioning Running Shoes "
   },
  ];
  export default products;  