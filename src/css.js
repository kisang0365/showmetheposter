export const colCentered = {
  float: "none",
  margin: "0 auto",
  marginTop: "20px",
  textAlign: "center",
};

export const optionColCentered = {
  float: "none",
  margin: "0 auto",
  textAlign: "center",
  marginTop: "20px",
  marginBottom: "20px",
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

export const table = {
   display:"table",
   position: "absolute"
};

export const middleAlign = {
   verticalAlign: "middle"
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
  fontSize: "1.8em",
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

export const adTypeKoreanName = ["페이스북", "홈페이지"];

export const adTypeEnglishName = ["facebook", "homepage"];

export function adTypeTranslation(string){
    var korean = "";
    var index = cosmeticEnglishName.indexOf(string);
    index != -1 ? korean = cosmeticKoreanName[index] : korean = "전체보기" ;
    return (korean);
}
