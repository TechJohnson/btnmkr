// sideNav dropdowns
let dropdown = document.querySelectorAll(".dropdown-toggle");
const handleClick = e => {
  const active = document.querySelector(".open");
  const act = document.querySelector(".act");
  const rotated = document.querySelector(".rotated");

  if (active) {
    active.classList.remove("open");
  }
  if (act) {
    act.classList.remove("act");
  }
  if (rotated) {
    rotated.classList.remove("rotated");
  }
  if (active != e.currentTarget.nextElementSibling) {
    e.currentTarget.nextElementSibling.classList.add("open");
  }
  if (rotated != e.currentTarget.querySelector("span>img")) {
    e.currentTarget.querySelector("span>img").classList.add("rotated");
  }
  if (act != e.currentTarget) {
    e.currentTarget.classList.add("act");
  }
};
dropdown.forEach(element => {
  element.addEventListener("click", handleClick);
});


// Settings modal

const backdrop = document.getElementById('modalBackdrop');
backdrop.addEventListener('click', e => {
  e.target.classList.remove('show');
});

const settings = document.getElementById('settings');
settings.addEventListener('click', e => {
  backdrop.classList.add('show');
});

const playareaBg = document.getElementById('pabgbtn');
const playareaBgCp = new Picker({ parent: playareaBg, editor: true,popup:'left' });
playareaBgCp.setColor('#fff')
const playArea = document.getElementById('btnplayarea');
playareaBgCp.onChange = color=>{
  playareaBg.style.backgroundColor = color.hex;
  playArea.style.backgroundColor = color.hex;
}


/* button customisation */

//Main button target
let button = document.getElementById("cstBtn");

//Reset page button
document.querySelector(".endwrapper img").addEventListener("click", () => {
  location.reload();
});
let hoverStyles = {
  backgroundColor: "#e47676",
  textColor: "#fff",
  borderColor: "#e47676",
  paddingTop: "12px",
  paddingBottom: "12px",
  paddingLeft: "48px",
  paddingRight: "48px",
  brTopLeft: "5px",
  brTopRight: "5px",
  brBottomLeft: "5px",
  brBottomRight: "5px",
  borderThickness: "2px",
  fontSize: "18px"
};
let defaultStyles = {
  backgroundColor: "#e47676",
  textColor: "#fff",
  borderColor: "#e47676",
  paddingTop: "12px",
  paddingBottom: "12px",
  paddingLeft: "48px",
  paddingRight: "48px",
  brTopLeft: "5px",
  brTopRight: "5px",
  brBottomLeft: "5px",
  brBottomRight: "5px",
  borderThickness: "2px",
  fontSize: "18px"
};
const render = () => {
  const targ1 = document.getElementById("styles");
  const targ2 = document.getElementById("output");
  let styles = "";
  styles = `#cstBtn {
  background-color: ${defaultStyles.backgroundColor};
  padding-top:${defaultStyles.paddingTop};
  padding-bottom:${defaultStyles.paddingBottom};
  padding-left:${defaultStyles.paddingLeft};
  padding-right:${defaultStyles.paddingRight};
  border-color: ${defaultStyles.borderColor};
  border-width: ${defaultStyles.borderThickness};
  border-radius: ${defaultStyles.brTopLeft} ${defaultStyles.brTopRight} ${
    defaultStyles.brBottomLeft
  } ${defaultStyles.brBottomRight};
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
  border-width: ${hoverStyles.borderThickness};
  border-radius: ${hoverStyles.brTopLeft} ${hoverStyles.brTopRight} ${
    hoverStyles.brBottomLeft
  } ${hoverStyles.brBottomRight};
  color: ${hoverStyles.textColor};
  font-size: ${hoverStyles.fontSize};
}`;
  targ1.innerHTML = `<style> ${styles} </style>`;
  targ2.innerHTML = styles
    .replace("#cstBtn", ".myButton")
    .replace("#cstBtn:hover", ".myButton:hover");
  hljs.highlightBlock(targ2);
  hljs.highlightBlock(document.querySelector(".html"));
};
render();
hljs.initHighlightingOnLoad();
//Targets
const vertical = document.getElementById("verPad");
const horizontal = document.getElementById("horPad");
const HoverVertical = document.getElementById("hovverPad");
const HoverHorizontal = document.getElementById("hovhorPad");
const textBox = document.getElementById("textVal");
const linkUrl = document.getElementById("linkUrl");
const fontSize = document.getElementById("fontSize");
const TxtcpTarg = document.getElementById("txtColPick");
const TxtColorPicker = new Picker({ parent: TxtcpTarg, editor: true });
const TxtHexBox = document.getElementById("txtColPickHex");
const BgcpTarg = document.getElementById("bgColPick");
const BgColorPicker = new Picker({ parent: BgcpTarg, editor: true });
const BgHexBox = document.getElementById("bgColPickHex");
const BordercpTarg = document.getElementById("borderColPick");
const BorderColorPicker = new Picker({ parent: BordercpTarg, editor: true });
const BorderHexBox = document.getElementById("borderColPickHex");
const BorderThickness = document.getElementById("borderThickness");
const HoverBorderRadius = document.getElementById("hovborderRadius");
const HoverfontSize = document.getElementById("hovfontSize");
const HoverTxtcpTarg = document.getElementById("hovtxtColPick");
const HoverTxtColorPicker = new Picker({
  parent: HoverTxtcpTarg,
  editor: true
});
const HoverTxtHexBox = document.getElementById("hovtxtColPickHex");
const HoverBgcpTarg = document.getElementById("hovbgColPick");
const HoverBgColorPicker = new Picker({ parent: HoverBgcpTarg, editor: true });
const HoverBgHexBox = document.getElementById("hovbgColPickHex");
const HoverBordercpTarg = document.getElementById("hovborderColPick");
const HoverBorderColorPicker = new Picker({
  parent: HoverBordercpTarg,
  editor: true
});
const HoverBorderHexBox = document.getElementById("hovborderColPickHex");
const HoverBorderThickness = document.getElementById("hovborderThickness");

textBox.addEventListener("input", e => {
  button.textContent = e.target.value;
  document.querySelector(
    ".html"
  ).innerHTML = `&lt;a href="#" class="myButton"&gt;${
    e.target.value
  }&lt;/a&gt;`;
  render();
});
linkUrl.addEventListener("input", e => {
  document.querySelector(".html").innerHTML = `&lt;a href="${
    e.target.value
  }" class="myButton"&gt;${button.textContent}&lt;/a&gt;`;
  render();
});
fontSize.addEventListener("input", e => {
  defaultStyles.fontSize = e.target.value + "px";
  render();
});
vertical.addEventListener("input", e => {
  defaultStyles.paddingTop = e.target.value + "px";
  defaultStyles.paddingBottom = e.target.value + "px";
  render();
});
horizontal.addEventListener("input", e => {
  defaultStyles.paddingLeft = e.target.value + "px";
  defaultStyles.paddingRight = e.target.value + "px";
  render();
});
BorderColorPicker.setColor("#e47676");
BorderColorPicker.onChange = color => {
  defaultStyles.borderColor = color.hex;
  BorderHexBox.value = color.hex;
  BordercpTarg.style.backgroundColor = color.hex;
  render();
};
brs = document.querySelectorAll(".br");
brs.forEach(el => {
  el.addEventListener("input", e => {
    let bid = e.target.id;
    defaultStyles[bid] = e.target.value + "px";
    render();
  });
});
BorderThickness.addEventListener("input", e => {
  defaultStyles.borderThickness = e.target.value + "px";
  render();
});
TxtColorPicker.setColor("#fff");
TxtColorPicker.onChange = color => {
  defaultStyles.textColor = color.hex;
  TxtHexBox.value = color.hex;
  TxtcpTarg.style.backgroundColor = color.hex;
  render();
};
BgColorPicker.setColor("#e47676");
BgColorPicker.onChange = color => {
  defaultStyles.backgroundColor = color.hex;
  BgHexBox.value = color.hex;
  BgcpTarg.style.backgroundColor = color.hex;
  render();
};

//HOVER
HoverfontSize.addEventListener("input", e => {
  hoverStyles.fontSize = e.target.value + "px";
  render();
});
HoverVertical.addEventListener("input", e => {
  hoverStyles.paddingTop = e.target.value + "px";
  hoverStyles.paddingBottom = e.target.value + "px";
  render();
});
HoverHorizontal.addEventListener("input", e => {
  hoverStyles.paddingLeft = e.target.value + "px";
  hoverStyles.paddingRight = e.target.value + "px";
  render();
});
brs = document.querySelectorAll(".brHover");
brs.forEach(el => {
  el.addEventListener("input", e => {
    let bid = e.target.id;
    hoverStyles[bid] = e.target.value + "px";
    render();
  });
});
HoverBorderColorPicker.setColor("#e47676");
HoverBorderColorPicker.onChange = color => {
  hoverStyles.borderColor = color.hex;
  BorderHexBox.value = color.hex;
  BordercpTarg.style.backgroundColor = color.hex;
  render();
};
HoverBorderThickness.addEventListener("input", e => {
  hoverStyles.borderThickness = e.target.value + "px";
  render();
});
HoverTxtColorPicker.setColor("#fff");
HoverTxtColorPicker.onChange = color => {
  hoverStyles.textColor = color.hex;
  HoverTxtHexBox.value = color.hex;
  HoverTxtcpTarg.style.backgroundColor = color.hex;
  render();
};
HoverBgColorPicker.setColor("#e47676");
HoverBgColorPicker.onChange = color => {
  hoverStyles.backgroundColor = color.hex;
  HoverBgHexBox.value = color.hex;
  HoverBgcpTarg.style.backgroundColor = color.hex;
  render();
};
