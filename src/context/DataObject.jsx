// const DataObj =  [
//     {
//       "name": "Samsung Galaxy S21",
//       "price": 799,
//       "image": "https://example.com/images/samsung-s21.jpg",
//       "discountPrice": 699,
//       "availability": "In Stock"
//     },
//     {
//       "name": "iPhone 13",
//       "price": 899,
//       "image": "https://example.com/images/iphone13.jpg",
//       "discountPrice": 849,
//       "availability": "In Stock"
//     },
//     {
//       "name": "OnePlus 9 Pro",
//       "price": 749,
//       "image": "https://example.com/images/oneplus-9pro.jpg",
//       "discountPrice": 699,
//       "availability": "Out of Stock"
//     },
//     {
//       "name": "Xiaomi Mi 11",
//       "price": 599,
//       "image": "https://example.com/images/mi11.jpg",
//       "discountPrice": 549,
//       "availability": "In Stock"
//     },
//     {
//       "name": "Google Pixel 6",
//       "price": 699,
//       "image": "https://example.com/images/pixel6.jpg",
//       "discountPrice": 649,
//       "availability": "In Stock"
//     },
//     {
//       "name": "Realme GT Neo 2",
//       "price": 399,
//       "image": "https://example.com/images/realme-gtneo2.jpg",
//       "discountPrice": 349,
//       "availability": "In Stock"
//     },
//     {
//       "name": "Vivo X70 Pro",
//       "price": 799,
//       "image": "https://example.com/images/vivo-x70pro.jpg",
//       "discountPrice": 749,
//       "availability": "Out of Stock"
//     },
//     {
//       "name": "Oppo Find X3",
//       "price": 899,
//       "image": "https://example.com/images/oppo-findx3.jpg",
//       "discountPrice": 849,
//       "availability": "In Stock"
//     },
//     {
//       "name": "Vivo X200 Pro",
//       "price": 899,
//       "image": "https://example.com/images/vivo-x70pro.jpg",
//       "discountPrice": 849,
//       "availability": "In Stock"
//     },
//     {
//       "name": "Oppo Find X2",
//       "price": 1099,
//       "image": "https://example.com/images/oppo-findx3.jpg",
//       "discountPrice": 949,
//       "availability": "In Stock"
//     }
//   ]

const DataObj = [
  {
    id: 1,
    name: "Galaxy S21",
    model: "SM-G991B",
    brand: "Samsung",
    availability: true,
    price: 799,
    discount: 10,
    image:
      "https://i0.wp.com/kryinternational.com/wp-content/uploads/2024/09/Samsung-S21-Used.jpg",
    galarry: [
      "https://i0.wp.com/kryinternational.com/wp-content/uploads/2024/09/Samsung-S21-Used.jpg",
      "https://i0.wp.com/kryinternational.com/wp-content/uploads/2024/02/Samsung-S21-FE.jpg",
      "https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Samsung/Smartphone/S21/s21-800x800.jpg",
      "https://m.media-amazon.com/images/I/61hoN03CsIL.jpg",
    ],
  },
  {
    id: 2,
    name: "iPhone 13",
    model: "A2633",
    brand: "Apple",
    availability: true,
    price: 999,
    discount: 5,
    image:
      "https://wefix.co.za/cdn/shop/products/iPhone-13-white_1.png?v=1718263604",
    galarry: [
      "https://wefix.co.za/cdn/shop/products/iPhone-13-white_1.png?v=1718263604",
      "https://mac-center.com.pe/cdn/shop/files/iPhone_13_Pink_PDP_Image_position-1A__CLCO_v1_07bc0f6a-f5a3-48b5-b1e0-3cd853bcf514.jpg?v=1700287636&width=823",
      "https://down-id.img.susercontent.com/file/id-11134207-7r98q-lvyv9hla1cl90d",
      "https://getmobil.com/_next/image/?url=https%3A%2F%2Fassets.getmobil.com%2Fuploads%2F11594%2Fgetmobil-apple-iphone13-midnight-02webp.png&w=1920&q=75",
    ],
  },
  {
    id: 3,
    name: "Pixel 7",
    model: "GVU6C",
    brand: "Google",
    availability: false,
    price: 599,
    discount: 15,
    image:
      "https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Google/Pixel%207/Pixel%207%20(2)-800x800.jpg",
    galarry: [
      "https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Google/Pixel%207/Pixel%207%20(2)-800x800.jpg",
      "https://mobilebuzzbd.com/wp-content/uploads/2024/01/Pixel-7.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXfoDmEGS3xwktBJtvVCrXj9esQsUc3Z457Bxsnc35SPNlGWiK-a7xNksSmc5FQ1F-sFE&usqp=CAU",
      "https://mobilebuzzbd.com/wp-content/uploads/2024/01/Pixel-7.jpg",
    ],
  },
  {
    id: 4,
    name: "Xiaomi 14 pro",
    model: "22041219I",
    brand: "Xiaomi",
    availability: null,
    price: 299,
    discount: 20,
    image:
      "https://adminapi.applegadgetsbd.com/storage/media/large/Black-8589.jpg",
    galarry: [
      "https://adminapi.applegadgetsbd.com/storage/media/large/Black-8589.jpg",
      "https://ueeshop.ly200-cdn.com/u_file/UPAU/UPAU946/2411/12/products/4f4919721a.png?x-oss-process=image/format,webp/quality,q_100/resize,m_lfit,h_500,w_500",
      "https://adminapi.applegadgetsbd.com/storage/media/large/Silver-2356.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2nVWlv08mbHr-mZzU9GrEsPn5gnSbX2otEOUxokvqfAtKE3xUm2oBSbqGo7BwPnqogs&usqp=CAU",
    ],
  },
  {
    id: 5,
    name: "OnePlus 13 pro",
    model: "CPH2447",
    brand: "OnePlus",
    availability: true,
    price: 699,
    discount: 10,
    image:
      "https://brotherselectronicsbd.com/image/cache/catalog/demo/product/OnePlus/10%20Pro/Oneplus%2010%20Pro%202-800x800.png",
    galarry: [
      "https://brotherselectronicsbd.com/image/cache/catalog/demo/product/OnePlus/10%20Pro/Oneplus%2010%20Pro%202-800x800.png",
      "https://www.shopz.com.bd/wp-content/uploads/2021/11/OnePlus-10-Pro-5G-Gray-Color.jpg",
      "https://www.shopz.com.bd/wp-content/uploads/2021/11/OnePlus-10-Pro-5G-Black-color.jpg",
      "https://adminapi.applegadgetsbd.com/storage/media/large/4920-95229.jpg",
    ],
  },
  {
    id: 6,
    name: "iPhone SE (2022)",
    model: "A2595",
    brand: "Apple",
    availability: true,
    price: 429,
    discount: 8,
    image:
      "https://adminapi.applegadgetsbd.com/storage/media/large/5020-41819.jpg",
    galarry: [
      "https://adminapi.applegadgetsbd.com/storage/media/large/5020-41819.jpg",
      "https://www.istore.co.za/media/catalog/product/cache/4ebc814e413626645aa42e369230a31f/i/p/iphone_se3_midnight_pdp_image_position-1a__eaen.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZLHDBeeKaG5_cN190zHElyYKQItlubWliOqkk_ZY_o4XkHyfFq0t-Q5XrzYZkQvbp1E&usqp=CAU",
      "https://buy.gazelle.com/cdn/shop/files/iPhone_SE_3rd_Gen_-_STARLIGHT_-_Overlap_Trans-cropped.jpg?v=1734651643&width=1946",
    ],
  },
  {
    id: 7,
    name: "Realme 9 pro",
    model: "TA-1522",
    brand: "Realme",
    availability: null,
    price: 199,
    discount: 22,
    image:
      "https://adminapi.applegadgetsbd.com/storage/media/large/realme-12-Pro-Navigator-Beige-2198.jpg",
    galarry: [
      "https://adminapi.applegadgetsbd.com/storage/media/large/realme-12-Pro-Navigator-Beige-2198.jpg",
      "https://kryinternational.com/wp-content/uploads/2024/03/Realme-12-Pro-plus.jpg",
      "https://i0.wp.com/kryinternational.com/wp-content/uploads/2024/03/Realme-12-Plus.jpg",
      "https://adminapi.applegadgetsbd.com/storage/media/large/Realme-12-Pro+-Submarine-Blue-2020.jpg",
    ],
  },
  {
    id: 8,
    name: "Vivo X100 pro",
    model: "V2219A",
    brand: "Vivo",
    availability: true,
    price: 699,
    discount: 13,
    image:
      "https://adminapi.applegadgetsbd.com/storage/media/large/vivo-X100-Pro-White-1967.jpg",
    galarry: [
      "https://adminapi.applegadgetsbd.com/storage/media/large/vivo-X100-Pro-White-1967.jpg",
      "https://i0.wp.com/kryinternational.com/wp-content/uploads/2024/05/Vivo-X100-Pro.jpg",
      "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1702882620686/2948ef675bc40de94b1ee85acdafe210.png",
      "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/22/32b36126-c360-495f-a004-2e3098db3682.jpg",
    ],
  },
  {
    id: 9,
    name: "Oppo find 3 ",
    model: "PGT-AN10",
    brand: "Oppo",
    availability: true,
    price: 1199,
    discount: 6,
    image:
      "https://www.assuredzone.com/bd/wp-content/uploads/sites/12/2024/02/Oppo-Find-X8-Ultra-r.jpg",
    galarry: [
      "https://www.assuredzone.com/bd/wp-content/uploads/sites/12/2024/02/Oppo-Find-X8-Ultra-r.jpg",
      "https://www.assuredzone.com/et/wp-content/uploads/sites/16/2024/01/Oppo-Find-X7.jpg",
      "https://www.assuredzone.com/my/wp-content/uploads/sites/20/2024/02/Oppo-Find-X8-Ultra-r.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9b0vIBJWzBL2YFtVl-iTK_RCTnYVr64yWRj84a3OVdee4woei269DcfuV3TSkjwhgs3E&usqp=CAU",
    ],
  },
  {
    id: 10,
    name: "Infinix Hot 50 pro",
    model: "L71061",
    brand: "Infinix",
    availability: null,
    price: 1099,
    discount: 9,
    image:
      "https://adminapi.applegadgetsbd.com/storage/media/large/Infinix-Hot-50-Pro-Plus---Official-Purple-8078.jpg",
    galarry: [
      "https://adminapi.applegadgetsbd.com/storage/media/large/Infinix-Hot-50-Pro-Plus---Official-Purple-8078.jpg",
      "https://adminapi.applegadgetsbd.com/storage/media/large/Infinix-Hot-50-Pro-Plus---Official-Black-4894.jpg",
      "https://adminapi.applegadgetsbd.com/storage/media/large/Infinix-Hot-50-Pro---Official-Glacier-Blue-8937.jpg",
      "https://www.startech.com.bd/image/cache/catalog/mobile/infinix/hot-50-pro-plus/hot-50-pro-plus-titanium-grey-500x500.webp",
    ],
  },
];

export default DataObj;
