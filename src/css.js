export const colCentered = {
  float: "none",
  margin: "0 auto",
  marginTop: "20px",
  textAlign: "center",
};

export const categorySelect = {
 color : "#424242",
 fontSize : "1.5em",
 marginLeft : "15px",
 textAlign : "left",
};

export const leftAlign = {
   textAlign: "left"
};

export const rightAlign = {
   textAlign: "right"
};

export const leftMargin ={
  float: "none",
  margin: "0 auto",
};

export const borderLine ={
  border: "1px solid black",
  borderRadius: "5px",
};
//display : "inline-block",
export const divContent ={
  overflow : "hidden",
  height : "43px",
};

export const priceTag={
   color:"lightgrey",
   textDecoration:"line-through",
};

export const selected = {
  backgroundColor: "#FFFFFF",
  border: "1px solid red",
  borderRadius:"5px",
  color:"#000000",
  cursor:"pointer",
};

export const unSelected = {
  backgroundColor: "#FFFFFF",
  color:"#000000",
  border: "0px",
  outline:"0",
  cursor:"pointer",
};

export const titleStyle = {
  fontFamily: "Permanent Marker, serif",
  fontSize: "2.5em",
  fontColor:"#666666"
};
export const MenuItemTitle = {
  fontColor: "#000000",
  cursor:"pointer"
};
export const MenuItemContent = {
  wordBreak : "normal",
  textOverflow : "visible"
};
export const MenuItemLink = {
  background: '#373a47',
  marginLeft : "10px",
  color: '#666666',
  link: '#666666',
  visited:'#666666',
  hover:'#ffffff',
  cursor:"pointer",
  border:"0",
  outline:"0"
};
export const linkColor ={
  color: '#666666',
  link: '#666666',
  visited:'#666666',
  hover:'#ffffff'
};

export const pageView = 10;

export const smallImgSize = {
  border: "1px solid lightgrey",
  borderRadius:"10px",
  width: "auto",
  height: "140px",
};

export const mediumImgSize = {
  border: "1px solid lightgrey",
  borderRadius:"10px",
  width: "auto",
  height: "230px",
};

export const largeImgSize = {
  border: "1px solid lightgrey",
  borderRadius:"10px",
  width: "auto",
  height: "250px",
};


export const burger ={
  bmBurgerButton: {
    position: 'fixed',
    width: '24px',
    height: '15px',
    left: '12px',
    top: '70px'
  },
  bmBurgerBars: {
    background: '#000000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    top:'70px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '70px 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

export const cosmeticKoreanName = ["스킨케어","스킨","로션/에멀젼","에센스/앰플/세럼","크림","아이케어","미스트/부스터","세트","클렌징/마사지/팩","클렌징폼","클렌징크림/로션/워터","클렌징젤/오일/티슈","마사지/필링","팩","미용비누","세트","메이크업","씨씨크림","비비크림","메이크업베이스/프라이머","파운데이션","파우더/팩트","립스틱/립밤","립글로스","틴트","아이섀도우" ,"마스카라","아이브로우","네일","세트","바디/헤어","바디클렌저/스크럽","바디로션/오일","샤워코롱/바디미스트","핸드&풋","샴푸/린스","헤어스타일링","헤어컬러링","데오드란트","바디슬림","여성청결제","향수","세트"] 

export const cosmeticEnglishName = ["skin-lotion-essence-cream-eyecare-mist-skinset","skin","lotion","essence","cream","eyecare","mist","skinset","cleansingfoam-cleansingcream-cleansinggel-massage-pack-soap-cleansingset","cleansingfoam","cleansingcream","cleansinggel","massage","pack","soap","cleansingset","cccream-bbcream-makeupbase-foundation-powder-lipstick-lipgloss-tint-eyeshadow-mascara-eyebrow-nail-makeupset","cccream","bbcream","makeupbase","foundation","powder","lipstick","lipgloss","tint","eyeshadow","mascara","eyebrow","nail","makeupset","bodycleanser-bodylotion-shower-hand-shampoo-hairstyle-haircolor-deodorant-bodyslim-femininecleanser-perfume-bodyset","bodycleanser","bodylotion","shower","hand","shampoo","hairstyle","haircolor","deodorant","bodyslim","femininecleanser","perfume","bodyset"]

export const categoryKoreanName = ['아우터', '자켓', '점퍼', '코트', '집업', '상의', '티셔츠', '셔츠', '맨투맨', '후드', '니트', '원피스','하의', '데님', '면바지/슬랙스', '반바지', '트레이닝 바지', '스커트', '기타', '가방', '모자', '양말' ,'반지', '귀걸이']

export const categoryEnglishName = ['jacket-jumper-coat-zipup','jacket', 'jumper', 'coat', 'zipup', 'tshirt-shirt-mtm-hood-knit-1piece', 'tshirt', 'shirt', 'mtm', 'hood', 'knit', '1piece', 'denim-slacks-training-skirt-shorts', 'denim', 'slacks', 'shorts', 'training', 'skirt', 'bag-cap-ring-socks', 'bag', 'cap', 'socks', 'ring', 'earing']

export function categoryNameTranslation(string){
     //USE MAPPING
    var korean = "";
    var index = categoryEnglishName.indexOf(string);
    index != -1 ? korean = categoryKoreanName[index] : korean = "전체보기" ;
    return (korean);
}

export function cosmeticNameTranslation(string){

    var korean = "";
    var index = cosmeticEnglishName.indexOf(string);
    index != -1 ? korean = cosmeticKoreanName[index] : korean = "전체보기" ;
    return (korean);

}




