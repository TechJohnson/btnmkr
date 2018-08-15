// sideNav dropdowns
let dropdown = document.querySelectorAll('.dropdown-toggle');
dropdown.forEach(element => {
  element.addEventListener('click', e => {
    if(e.target.nextElementSibling.classList.contains("collapse")) {
      e.target.nextElementSibling.classList.add('collapsed');
      e.target.nextElementSibling.classList.remove('collapse');
    } else {
      e.target.nextElementSibling.classList.add('collapse');
      e.target.nextElementSibling.classList.remove('collapsed');
    }
  });
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
  brBottomRight: "5px"
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
  brBottomRight: "5px"
}
const renderCss = () => {
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
}`;
  targ1.innerHTML = `<style> ${styles} </style>`;
  targ2.innerHTML = styles.replace('#cstBtn', '.myButton').replace('#cstBtn:hover', '.myButton:hover');
  hljs.highlightBlock(targ2);
  hljs.highlightBlock(document.querySelector('.html'));
}
renderCss();
hljs.initHighlightingOnLoad();
//Targets
const vertical = document.getElementById('verPad');
const horizontal = document.getElementById('horPad');
const HoverVertical = document.getElementById('hovverPad');
const HoverHorizontal = document.getElementById('hovhorPad');
const textBox = document.getElementById('textVal');
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
  renderCss();
})
vertical.addEventListener('input', e => {
  defaultStyles.paddingTop = e.target.value+"px";
  defaultStyles.paddingBottom = e.target.value+"px";
  renderCss();
})
horizontal.addEventListener('input', e => {
  defaultStyles.paddingLeft = e.target.value+"px";
  defaultStyles.paddingRight= e.target.value+"px";
  renderCss();
})
BorderColorPicker.setColor('#e47676');
BorderColorPicker.onChange = color => {
  defaultStyles.borderColor = color.hex;
  BorderHexBox.value = color.hex;
  BordercpTarg.style.backgroundColor = color.hex;
  renderCss();
}
brs = document.querySelectorAll('.br');
brs.forEach(el => {
  el.addEventListener("input", e => {
    let bid = e.target.id;
    defaultStyles[bid] = e.target.value+"px";
    renderCss();
  })
})
TxtColorPicker.setColor('#fff');
TxtColorPicker.onChange = color => {
  defaultStyles.textColor = color.hex;
  TxtHexBox.value = color.hex;
  TxtcpTarg.style.backgroundColor = color.hex;
  renderCss();
}
BgColorPicker.setColor('#e47676');
BgColorPicker.onChange = color => {
  defaultStyles.backgroundColor = color.hex;
  BgHexBox.value = color.hex;
  BgcpTarg.style.backgroundColor = color.hex;
  renderCss();
}

//HOVER
HoverVertical.addEventListener('input', e => {
  hoverStyles.paddingTop = e.target.value+"px";
  hoverStyles.paddingBottom= e.target.value+"px";
  renderCss();
})
HoverHorizontal.addEventListener('input', e => {
  hoverStyles.paddingLeft = e.target.value+"px";
  hoverStyles.paddingRight= e.target.value+"px";
  
})
brs = document.querySelectorAll('.brHover');
brs.forEach(el => {
  el.addEventListener("input", e => {
    let bid = e.target.id;
    hoverStyles[bid] = e.target.value+"px";
    renderCss();
  })
})
HoverBorderColorPicker.setColor('#e47676');
HoverBorderColorPicker.onChange = color => {
  hoverStyles.borderColor = color.hex;
  BorderHexBox.value = color.hex;
  BordercpTarg.style.backgroundColor = color.hex;
  renderCss();
}
HoverTxtColorPicker.setColor('#fff');
HoverTxtColorPicker.onChange = color => {
  hoverStyles.textColor = color.hex;
  HoverTxtHexBox.value = color.hex;
  HoverTxtcpTarg.style.backgroundColor = color.hex;
  renderCss();
}
HoverBgColorPicker.setColor('#e47676');
HoverBgColorPicker.onChange = color => {
  hoverStyles.backgroundColor = color.hex;
  HoverBgHexBox.value = color.hex;
  HoverBgcpTarg.style.backgroundColor = color.hex;
  renderCss();
}

