// sideNav dropdowns
let dropdown = document.querySelectorAll('.dropdown-toggle');
const handleClick = (e) => {
  const active = document.querySelector('.open');
  if(active){
    active.classList.remove('open');
  }
  e.target.nextElementSibling.classList.add('open')
}
dropdown.forEach(element => {
  element.addEventListener('click', handleClick);
});


/* button customisation */

//Main button target
let button = document.getElementById('cstBtn');

//Load font list
//Create typeahead
// let fonts = fetch('js/fontlist.json')
// .then((response) => response.json())
// .then(data => {
//   return data.forEach(font =>{
//     let fontSelect = document.getElementById('fontList');
//     let fnt = font.replace(" ", "");
//     fontSelect.innerHTML += `<option value="${font}">${font}</option>`;
//   });
// })

let hoverStyles = {
  backgroundColor: "#e47676",
  textColor:"#fff",
  borderColor:"#e47676",  
  paddingTop:"12px",
  paddingBottom:"12px",
  paddingLeft:"48px",
  paddingRight:"48px",
  brTopLeft: "5px",
  brTopRight: "5px",
  brBottomLeft: "5px",
  brBottomRight: "5px",
  fontSize: "18px"
}
let defaultStyles = {
  backgroundColor: "#e47676",
  textColor:"#fff",
  borderColor:"#e47676",  
  paddingTop:"12px",
  paddingBottom:"12px",
  paddingLeft:"48px",
  paddingRight:"48px",
  brTopLeft: "5px",
  brTopRight: "5px",
  brBottomLeft: "5px",
  brBottomRight: "5px",
  fontSize: "18px"
}
const render = () => {
  const targ1 = document.getElementById('styles');
  const targ2 = document.getElementById('output');
  let styles = "";
  styles = 
`#cstBtn {
  background-color: ${defaultStyles.backgroundColor};
  padding-top:${defaultStyles.paddingTop};
  padding-bottom:${defaultStyles.paddingBottom};
  padding-left:${defaultStyles.paddingLeft};
  padding-right:${defaultStyles.paddingRight};
  border-color: ${defaultStyles.borderColor};
  border-radius: ${defaultStyles.brTopLeft} ${defaultStyles.brTopRight} ${defaultStyles.brBottomLeft} ${defaultStyles.brBottomRight};
  color: ${defaultStyles.textColor};
  font-size: ${defaultStyles.fontSize};
}
#cstBtn:hover { 
  background-color: ${hoverStyles.backgroundColor};
  padding-top:${hoverStyles.paddingTop};
  padding-bottom:${hoverStyles.paddingBottom};
  padding-left:${hoverStyles.paddingLeft};
  padding-right:${hoverStyles.paddingRight};
  border-color: ${hoverStyles.borderColor};
  border-radius: ${hoverStyles.brTopLeft} ${hoverStyles.brTopRight} ${hoverStyles.brBottomLeft} ${hoverStyles.brBottomRight};
  color: ${hoverStyles.textColor};
  font-size: ${hoverStyles.fontSize};
}`;
  targ1.innerHTML = `<style> ${styles} </style>`;
  targ2.innerHTML = styles.replace('#cstBtn', '.myButton').replace('#cstBtn:hover', '.myButton:hover');
  hljs.highlightBlock(targ2);
  hljs.highlightBlock(document.querySelector('.html'));
}
render();
hljs.initHighlightingOnLoad();
//Targets
const vertical = document.getElementById('verPad');
const horizontal = document.getElementById('horPad');
const HoverVertical = document.getElementById('hovverPad');
const HoverHorizontal = document.getElementById('hovhorPad');
const textBox = document.getElementById('textVal');
const linkUrl = document.getElementById('linkUrl');
const fontSize = document.getElementById('fontSize');
const TxtcpTarg = document.getElementById('txtColPick');
const TxtColorPicker = new Picker({parent: TxtcpTarg, editor:false});
const TxtHexBox = document.getElementById('txtColPickHex');
const BgcpTarg = document.getElementById('bgColPick');
const BgColorPicker = new Picker({parent: BgcpTarg, editor:false});
const BgHexBox = document.getElementById('bgColPickHex');
const BordercpTarg = document.getElementById('borderColPick');
const BorderColorPicker = new Picker({parent: BordercpTarg, editor:false});
const BorderHexBox = document.getElementById('borderColPickHex');
const HoverBorderRadius = document.getElementById('hovborderRadius');
const HoverfontSize = document.getElementById('hovfontSize');
const HoverTxtcpTarg = document.getElementById('hovtxtColPick');
const HoverTxtColorPicker = new Picker({parent: HoverTxtcpTarg, editor:false});
const HoverTxtHexBox = document.getElementById('hovtxtColPickHex');
const HoverBgcpTarg = document.getElementById('hovbgColPick');
const HoverBgColorPicker = new Picker({parent: HoverBgcpTarg, editor:false});
const HoverBgHexBox = document.getElementById('hovbgColPickHex');
const HoverBordercpTarg = document.getElementById('hovborderColPick');
const HoverBorderColorPicker = new Picker({parent: HoverBordercpTarg, editor:false});
const HoverBorderHexBox = document.getElementById('hovborderColPickHex');

textBox.addEventListener('input', e => {
  button.textContent = e.target.value;
  document.querySelector('.html').innerHTML = `&lt;a href="#" class="myButton"&gt;${e.target.value}&lt;/a&gt;`;
  render();
})
linkUrl.addEventListener('input', e => {
  document.querySelector('.html').innerHTML = `&lt;a href="${e.target.value}" class="myButton"&gt;${button.textContent}&lt;/a&gt;`;
  render();
});
fontSize.addEventListener('input', e => {
  defaultStyles.fontSize = e.target.value+"px";
  render();
})
vertical.addEventListener('input', e => {
  defaultStyles.paddingTop = e.target.value+"px";
  defaultStyles.paddingBottom = e.target.value+"px";
  render();
})
horizontal.addEventListener('input', e => {
  defaultStyles.paddingLeft = e.target.value+"px";
  defaultStyles.paddingRight= e.target.value+"px";
  render();
})
BorderColorPicker.setColor('#e47676');
BorderColorPicker.onChange = color => {
  defaultStyles.borderColor = color.hex;
  BorderHexBox.value = color.hex;
  BordercpTarg.style.backgroundColor = color.hex;
  render();
}
brs = document.querySelectorAll('.br');
brs.forEach(el => {
  el.addEventListener("input", e => {
    let bid = e.target.id;
    defaultStyles[bid] = e.target.value+"px";
    render();
  })
})
TxtColorPicker.setColor('#fff');
TxtColorPicker.onChange = color => {
  defaultStyles.textColor = color.hex;
  TxtHexBox.value = color.hex;
  TxtcpTarg.style.backgroundColor = color.hex;
  render();
}
BgColorPicker.setColor('#e47676');
BgColorPicker.onChange = color => {
  defaultStyles.backgroundColor = color.hex;
  BgHexBox.value = color.hex;
  BgcpTarg.style.backgroundColor = color.hex;
  render();
}

//HOVER
HoverfontSize.addEventListener('input', e => {
  hoverStyles.fontSize = e.target.value+"px";
  render();
})
HoverVertical.addEventListener('input', e => {
  hoverStyles.paddingTop = e.target.value+"px";
  hoverStyles.paddingBottom= e.target.value+"px";
  render();
})
HoverHorizontal.addEventListener('input', e => {
  hoverStyles.paddingLeft = e.target.value+"px";
  hoverStyles.paddingRight= e.target.value+"px";
  render();
})
brs = document.querySelectorAll('.brHover');
brs.forEach(el => {
  el.addEventListener("input", e => {
    let bid = e.target.id;
    hoverStyles[bid] = e.target.value+"px";
    render();
  })
})
HoverBorderColorPicker.setColor('#e47676');
HoverBorderColorPicker.onChange = color => {
  hoverStyles.borderColor = color.hex;
  BorderHexBox.value = color.hex;
  BordercpTarg.style.backgroundColor = color.hex;
  render();
}
HoverTxtColorPicker.setColor('#fff');
HoverTxtColorPicker.onChange = color => {
  hoverStyles.textColor = color.hex;
  HoverTxtHexBox.value = color.hex;
  HoverTxtcpTarg.style.backgroundColor = color.hex;
  render();
}
HoverBgColorPicker.setColor('#e47676');
HoverBgColorPicker.onChange = color => {
  hoverStyles.backgroundColor = color.hex;
  HoverBgHexBox.value = color.hex;
  HoverBgcpTarg.style.backgroundColor = color.hex;
  render();
}

