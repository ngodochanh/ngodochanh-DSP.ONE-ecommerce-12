import { PiPantsBold } from 'react-icons/pi';
import { GiUnderwearShorts } from 'react-icons/gi';
import { RiShirtLine } from 'react-icons/ri';
import { PiShirtFoldedBold } from 'react-icons/pi';
import { TbJacket } from 'react-icons/tb';
import { TbShirt } from 'react-icons/tb';

const GENDER_LIST = {
  male: {
    value: 'male',
    label: 'Nam',
  },
  female: {
    value: 'female',
    label: 'Nữ',
  },
};

const COLOR_LIST = {
  black: 'black',
  red: 'red',
  yellow: 'yellow',
  orange: 'orange',
  gray: 'gray',
  pink: 'pink',
  purple: 'purple',
  brown: 'brown',
  white: 'white',
  green: 'green',
  blue: 'blue',
  other: 'other',
};

const SIZE_LIST = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  extra_large: 'extra_large',
  double_extra_large: 'double_extra_large',
  triple_extra_large: 'triple_extra_large',
  quadruple_extra_large: 'quadruple_extra_large',
  quintuple_extra_large: 'quintuple_extra_large',
};

const CATEGORY_LIST = {
  t_shirt: {
    icon: TbShirt,
    value: 't_shirt',
    label: 'áo thun',
    isVisible: true,
  },
  shirt: {
    icon: PiShirtFoldedBold,
    value: 'shirt',
    label: 'sơ mi',
    isVisible: true,
  },
  pants: {
    icon: PiPantsBold,
    value: 'pants',
    label: 'quần âu',
    isVisible: true,
  },
  jacket: {
    icon: TbJacket,
    value: 'jacket',
    label: 'áo khoác',
    isVisible: true,
  },
  polo: {
    icon: RiShirtLine,
    value: 'polo',
    label: 'polo',
    isVisible: true,
  },
  short: {
    icon: GiUnderwearShorts,
    value: 'short',
    label: 'quần short',
    isVisible: true,
  },
};

const PRODUCT_LIST = [
  {
    id: 1,
    image:
      'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nam-yody-TSM7177-TRA,%20QSM7031-TIT%20,(7).JPG',
    title: 'Áo Phông Nam Slim Fit Rib',
    price: 249000,
    originalPrice: 0,
    gender: [GENDER_LIST.male.value],
    color: [COLOR_LIST.black, COLOR_LIST.brown, COLOR_LIST.gray, COLOR_LIST.white],
    size: [SIZE_LIST.medium, SIZE_LIST.large, SIZE_LIST.extra_large, SIZE_LIST.double_extra_large],
    slug: 'ao-phong-nam-slim-fit-rib',
    description: `
    <p>Áo thun nam YODY với thành phần ba loại sợi Cotton, Viscose, Spandex kết hợp cùng kiểu dệt rib nên sở hữu nhiều ưu điểm nổi bật. Áo cho cảm giác mặc mềm mướt trên da và vô cùng thông thoáng, phù hợp mặc trong mùa xuân hè. Sự co giãn đàn hồi tốt cũng giúp chiếc áo này xứng đáng trở thành món đồ yêu thích cho thời trang năng động hàng ngày của các anh.</p>
    `,
    total_reviews: 100,
    rating: 4.5,
    category: CATEGORY_LIST.t_shirt.value,
    isTrending: true,
  },
  {
    id: 2,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nu-yody-TSN7271-XAM-4.JPG',
    title: 'T-shirt Nữ Cổ Rộng Crotop',
    price: 99000,
    originalPrice: 149000,
    gender: [GENDER_LIST.female.value],
    color: [COLOR_LIST.gray, COLOR_LIST.red, COLOR_LIST.black, COLOR_LIST.white],
    size: [SIZE_LIST.small, SIZE_LIST.medium],
    slug: 't-shirt-nu-co-rong-crotop',
    description: `
    <p>Nàng sẽ ngay lập tức tăng điểm nữ tính mà vẫn vô cùng thoải mái cùng chiếc áo thun này. Sản phẩm được thiết kế với cổ rộng giúp tôn lên chiếc cổ thanh mảnh cùng xương quai xanh kiểu diễm. Dáng áo croptop cũng phù hợp để hack dáng hơn khi lên đồ.</p>
  `,
    total_reviews: 40,
    rating: 4.5,
    category: CATEGORY_LIST.t_shirt.value,
    isTrending: true,
  },
  {
    id: 3,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nam-TSM7047-DN1%20(5).JPG',
    title: 'Áo Phông Nam Regular Foundation',
    price: 269000,
    originalPrice: 0,
    gender: [GENDER_LIST.male.value],
    color: [COLOR_LIST.brown, COLOR_LIST.black],
    size: [SIZE_LIST.large],
    slug: 'ao-phong-nam-regular-foundation',
    description: `
    <p>Chất liệu Cotton BCI cao cấp mềm mại, thoáng mát, thấm hút mồ hôi tốt. An toàn cho da kể cả da nhạy cảm. Giảm thiểu tác động môi trường, góp phần phát triển bền vững. Kiểu dáng Regular Fit vừa vặn, thoải mái. Độ bền cao, giữ form tốt sau nhiều lần giặt.</p>
  `,
    total_reviews: 60,
    rating: 4.5,
    category: CATEGORY_LIST.t_shirt.value,
    isTrending: true,
  },
  {
    id: 4,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-so-mi-nam-SCM7015-XAH%20(1).jpg',
    title: 'Sơ Mi Nam Cộc Tay Cafe Túi Ngực',
    price: 469000,
    originalPrice: 0,
    gender: [GENDER_LIST.male.value],
    color: [COLOR_LIST.blue],
    size: [
      SIZE_LIST.medium,
      SIZE_LIST.large,
      SIZE_LIST.extra_large,
      SIZE_LIST.double_extra_large,
      SIZE_LIST.triple_extra_large,
      SIZE_LIST.quadruple_extra_large,
    ],
    slug: 'so-mi-nam-coc-tay-cafe-tui-nguc',
    description: `
    <p>Chất vải nhẹ nhàng, co giãn nhẹ tạo cảm giác thoải mái khi vận động. Khô thoáng, thấm hút mồ hôi nhanh, không bám mùi hôi. Chống tia UV đến 98% giúp bảo vệ da khỏi tác hại của ánh nắng mặt trời. Kiểu dáng thanh lịch với thiết kế cộc tay, túi ngực phù hợp cho nhiều hoàn cảnh: đi làm, đi chơi, dạo phố.</p>
  `,
    total_reviews: 190,
    rating: 5,
    category: CATEGORY_LIST.shirt.value,
    isTrending: true,
  },
  {
    id: 5,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/smn7004-tra-cvn6162-nau-7.jpg',
    title: 'Sơ Mi Nữ Dài Tay Vạt Vai Áo',
    price: 469000,
    originalPrice: 0,
    gender: [GENDER_LIST.female.value],
    color: [COLOR_LIST.white, COLOR_LIST.blue, COLOR_LIST.black],
    size: [SIZE_LIST.small, SIZE_LIST.medium, SIZE_LIST.large],
    slug: 'so-mi-nu-dai-tay-vat-vai-ao',
    description: `
    <p>Áo sơ mi dài tay với vạt vai áo cách điệu, tạo điểm nhấn nữ tính và thanh lịch. Cổ áo bẻ thanh lịch, phù hợp với nhiều môi trường khác nhau. Vải nhẹ, thoáng mát, tạo cảm giác thoải mái khi mặc. Thấm hút mồ hôi tốt, giúp bạn luôn khô ráo và dễ chịu.</p>
  `,
    total_reviews: 110,
    rating: 5,
    category: CATEGORY_LIST.shirt.value,
    isTrending: true,
  },
  {
    id: 6,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/quan-au-nam-qam6039-den-5-yodyvn.jpg',
    title: 'Quần Âu Nam Slim Cạp Di Động',
    price: 599000,
    originalPrice: 0,
    gender: [GENDER_LIST.male.value],
    color: [COLOR_LIST.black, COLOR_LIST.blue],
    size: [],
    slug: 'quan-au-nam-slim-cap-di-dong',
    description: `
    <p>Một thiết kế quần âu lịch lãm, thoải mái, không gò bó trên nền chất vải Nano được hàng ngàn khách hàng tại YODY ưng ý. Thiết kế đai di động với phần chun được may kín khéo léo, tỉ mỉ giúp phù hợp với mọi đối tượng, co giãn vừa đủ linh hoạt.</p>
  `,
    total_reviews: 80,
    rating: 4,
    category: CATEGORY_LIST.pants.value,
    isTrending: true,
  },
  {
    id: 7,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-khoac-nu-skn6004-hog-18.jpg',
    title: 'Áo Khoác Thể Thao Nữ Gió Dáng Ngắn',
    price: 649000,
    originalPrice: 0,
    gender: [GENDER_LIST.female.value],
    color: [COLOR_LIST.pink],
    size: [SIZE_LIST.extra_large],
    slug: 'ao-khoac-the-thao-nu-gio-dang-ngan',
    description: `
    <p>Áo khoác gió dáng ngắn, mũ liền có chốt dây rút điều chỉnh độ rộng chật của mũ. Hai túi cơi khóa thân trước, vị trí cơi túi có hình in phản quang. Gấu áo có dây rút trong. Thân sau có hình in text phản quang.</p>
  `,
    total_reviews: 180,
    rating: 5,
    category: CATEGORY_LIST.jacket.value,
    isTrending: true,
  },
  {
    id: 8,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-khoac-nu-SKN7004-DEN%20(1).JPG',
    title: 'Áo Khoác Thể Thao Nữ Siêu Nhẹ',
    price: 390000,
    originalPrice: 0,
    gender: [GENDER_LIST.female.value],
    color: [COLOR_LIST.black, COLOR_LIST.purple, COLOR_LIST.pink],
    size: [SIZE_LIST.medium, SIZE_LIST.small, SIZE_LIST.large, SIZE_LIST.extra_large],
    slug: 'ao-khoac-the-thao-nu-sieu-nhe',
    description: `
    <p>Chất liệu Nylon 100% bền bỉ, siêu nhẹ. Thoáng mát tối ưu với khả năng thoát mồ hôi nhanh, giúp bạn luôn khô ráo. Thiết kế gọn nhẹ dễ dàng cất giữ trong balo, túi xách, tiện lợi cho mọi chuyến đi. Bạn đồng hành hoàn hảo cho tập luyện thể thao, đi dã ngoại, du lịch hay những hoạt động ngoài trời.</p>
  `,
    total_reviews: 210,
    rating: 4,
    category: CATEGORY_LIST.jacket.value,
    isTrending: false,
  },
  {
    id: 9,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/apm3299-hog-5.jpg',
    title: 'Áo Polo Nam Pique Mắt Chim Basic Co Giãn Thoáng Khí',
    price: 149500,
    originalPrice: 299000,
    gender: [GENDER_LIST.male.value],
    color: [COLOR_LIST.brown, COLOR_LIST.blue, COLOR_LIST.yellow, COLOR_LIST.black, COLOR_LIST.white, COLOR_LIST.green],
    size: [SIZE_LIST.double_extra_large, SIZE_LIST.triple_extra_large],
    slug: 'ao-polo-nam-basic-pique-mat-chim-phoi-bo',
    description: `
    <p>Vải dệt 2 màu tạo nên hiệu ứng mắt chim độc đáo. Độ bền cao, thám hút tốt, thoáng khí giúp bạn luôn cảm thấy mát mẻ, dễ chịu. Phần cổ và bo tay áo được thiết kế tỉ mỉ, tinh tế giúp tôn dáng.</p>
  `,
    total_reviews: 400,
    rating: 5,
    category: CATEGORY_LIST.polo.value,
    isTrending: true,
  },
  {
    id: 10,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-polo-nam-yody-apm7217-tit-4.jpg',
    title: 'Áo Polo Nam Thêu Ngực',
    price: 299000,
    originalPrice: 0,
    gender: [GENDER_LIST.male.value],
    color: [COLOR_LIST.purple, COLOR_LIST.brown],
    size: [SIZE_LIST.medium, SIZE_LIST.large],
    slug: 'ao-polo-nam-theu-nguc',
    description: `
    <p>Khám phá chiếc áo polo nam tính, khoẻ khoắn cùng những tính năng vượt trội mang lại sự thoải mái cho người mặc. Thiết kế phối cổ cùng điểm nhấn phối ngực giúp cho chiếc nào này trở nên thú vị hơn, nam tính mà vẫn trẻ trung, khác biệt.</p>
  `,
    total_reviews: 523,
    rating: 5,
    category: CATEGORY_LIST.polo.value,
    isTrending: false,
  },
  {
    id: 11,
    image:
      'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-polo-nam-clean-vietnam-apm6327-xly-2-yody.jpg',
    title: 'Polo Nam Recycle Clean Việt Nam 01',
    price: 349000,
    originalPrice: 0,
    gender: [GENDER_LIST.male.value],
    color: [COLOR_LIST.white],
    size: [
      SIZE_LIST.medium,
      SIZE_LIST.extra_large,
      SIZE_LIST.double_extra_large,
      SIZE_LIST.triple_extra_large,
      SIZE_LIST.quadruple_extra_large,
    ],
    slug: 'polo-nam-recycle-clean-viet-nam-01',
    description: `
    <p>Một sản phẩm nằm trong dự án Clean Việt Nam tại YODY. Sử dụng Polyester tái chế từ chai nhựa tại Việt Nam góp phần bảo vệ môi trường trên đất nước của chính chúng ta. Áo polo nam thiết kế basic, thoải mái khi mặc, tự tin cùng hình in ý nghĩa.</p>
  `,
    total_reviews: 232,
    rating: 4,
    category: CATEGORY_LIST.polo.value,
    isTrending: false,
  },
  {
    id: 12,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-polo-nu-yody-APN7136-TRG-4%20(3).JPG',
    title: 'Áo Polo Nữ Gấu Bo',
    price: 299000,
    originalPrice: 0,
    gender: [GENDER_LIST.female.value],
    color: [COLOR_LIST.blue, COLOR_LIST.white, COLOR_LIST.black],
    size: [SIZE_LIST.medium, SIZE_LIST.extra_large, SIZE_LIST.large],
    slug: 'ao-polo-nu-gau-bo',
    description: `
    <p>Chiếc áo polo Cafe vừa lành tính trong chất liệu, vừa mới lạ trong thiết kế. Không chỉ có khả năng chống tia UV, áo polo YODY với thiết kế phối cổ cùng điểm nhấn cúc vạt áo giúp cho tủ đồ của các chị em thêm phần ấn tượng. </p>
  `,
    total_reviews: 1575,
    rating: 4.5,
    category: CATEGORY_LIST.polo.value,
    isTrending: false,
  },
];

const PRODUCT_GALLERY_LIST = [
  {
    id: 1,
    image:
      'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nam-yody-TSM7177-DEN,%20QJM6087-XAH-4,%20(3).JPG',
  },
  {
    id: 1,
    image:
      'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nam-yody-TSM7177-NAU,%20QAM6049-BEE-6.JPG',
  },
  {
    id: 1,
    image:
      'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nam-yody-TSM7177-GSA,%20QJM7027-DEN-8%20(4).JPG',
  },
  {
    id: 1,
    image:
      'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nam-yody-TSM7177-TRA,%20QSM7031-TIT%20,(4).JPG',
  },
  {
    id: 2,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nu-yody-TSN7271-XAM-4.JPG',
  },
  {
    id: 2,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nu-yody-TSN7271-DOD-5.JPG',
  },
  {
    id: 2,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nu-yody-TSN7271-DEN-6.JPG',
  },
  {
    id: 2,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nu-yody-TSN7271-TRA-2.JPG',
  },
  {
    id: 3,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nam-TSM7047-NAU%20(1).JPG',
  },
  {
    id: 3,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-nam-TSM7047-DN1%20(1).JPG',
  },
  {
    id: 4,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-so-mi-nam-SCM7015-XAH%20(1).jpg',
  },
  {
    id: 5,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/smn7004-tra-cvn6162-nau-7.jpg',
  },
  {
    id: 5,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/smn7004-xah-qan6208-ghd-6.jpg',
  },
  {
    id: 5,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/smn7004-den-qjn3072-tra-7.jpg',
  },
  {
    id: 6,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/quan-au-nam-qam6039-den-5-yodyvn.jpg',
  },
  {
    id: 6,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/qam6039-xdm-5.jpg',
  },
  {
    id: 7,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-khoac-nu-skn6004-hog-18.jpg',
  },
  {
    id: 7,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-khoac-nu-skn6004-hog-16.jpg',
  },
  {
    id: 8,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-khoac-nu-SKN7004-DEN%20(1).JPG',
  },
  {
    id: 8,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-khoac-nu-SKN7004-TIM%20(10).JPG',
  },
  {
    id: 8,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-khoac-nu-SKN7004-HOG%20(6).JPG',
  },
  {
    id: 9,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/apm3299-hog-5.jpg',
  },
  {
    id: 9,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/apm3299-xg1-ao-polo-nam-2.jpg',
  },
  {
    id: 9,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/apm3299-vag-9.jpg',
  },
  {
    id: 9,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/apm3299-xng-5.jpg',
  },
  {
    id: 9,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/apm3299-dml-6.jpg',
  },
  {
    id: 9,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/apm3299-tra-4.jpg',
  },
  {
    id: 9,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/apm3299-xxm-4.jpg',
  },
  {
    id: 9,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/apm3299-xre-qsm6003-dn1-5.jpg',
  },
  {
    id: 10,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-polo-nam-yody-apm7217-tit-4.jpg',
  },
  {
    id: 10,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-polo-nam-yody-apm7217-nau-5.jpg',
  },
  {
    id: 11,
    image:
      'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-polo-nam-clean-vietnam-apm6327-xly-2-yody.jpg',
  },
  {
    id: 11,
    image:
      'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-polo-nam-clean-vietnam-apm6327-dxl-11-yody.jpg',
  },
  {
    id: 12,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-polo-nu-yody-APN7136-XAH-3%20(8).JPG',
  },
  {
    id: 12,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-polo-nu-yody-APN7136-TRG-4%20(3).JPG',
  },
  {
    id: 12,
    image: 'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-polo-nu-yody-APN7136-NAV%20(3).jpg',
  },
];

export { GENDER_LIST, COLOR_LIST, SIZE_LIST, CATEGORY_LIST, PRODUCT_LIST, PRODUCT_GALLERY_LIST };
