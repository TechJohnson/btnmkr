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

//Padding controllers
const vertical = document.getElementById('verPad');
const horizontal = document.getElementById('horPad');
vertical.addEventListener('input', e => {
  button.style.paddingTop = e.target.value+"px";
  button.style.paddingBottom= e.target.value+"px";
})
horizontal.addEventListener('input', e => {
  button.style.paddingLeft = e.target.value+"px";
  button.style.paddingRight= e.target.value+"px";
})

//Text controller 
const textBox = document.getElementById('textVal');
const HovertextBox = document.getElementById('hobtextVal');
textBox.addEventListener('input', e => {
  button.textContent = e.target.value;
  HovertextBox.value = e.target.value;
})

//colors
const TxtcpTarg = document.getElementById('txtColPick');
const TxtColorPicker = new Picker({parent: TxtcpTarg, editor:false});
const TxtHexBox = document.getElementById('txtColPickHex');
const BgcpTarg = document.getElementById('bgColPick');
const BgColorPicker = new Picker({parent: BgcpTarg, editor:false});
const BgHexBox = document.getElementById('bgColPickHex');
const BordercpTarg = document.getElementById('borderColPick');
const BorderColorPicker = new Picker({parent: BordercpTarg, editor:false});
const BorderHexBox = document.getElementById('borderColPickHex');

const HoverTxtcpTarg = document.getElementById('hovtxtColPick');
const HoverTxtColorPicker = new Picker({parent: HoverTxtcpTarg, editor:false});
const HoverTxtHexBox = document.getElementById('hovtxtColPickHex');
const HoverBgcpTarg = document.getElementById('hovbgColPick');
const HoverBgColorPicker = new Picker({parent: HoverBgcpTarg, editor:false});
const HoverBgHexBox = document.getElementById('hovbgColPickHex');
const HoverBordercpTarg = document.getElementById('hovborderColPick');
const HoverBorderColorPicker = new Picker({parent: HoverBordercpTarg, editor:false});
const HoverBorderHexBox = document.getElementById('hovborderColPickHex');

TxtColorPicker.setColor('#fff');
TxtColorPicker.onChange = color => {
  button.style.color = color.hex;
  TxtHexBox.value = color.hex;
  TxtcpTarg.style.backgroundColor = color.hex;
}
BgColorPicker.setColor('#e47676');
BgColorPicker.onChange = color => {
  button.style.backgroundColor = color.hex;
  BgHexBox.value = color.hex;
  BgcpTarg.style.backgroundColor = color.hex;
}
HoverBorderColorPicker.setColor('#e47676');
HoverBorderColorPicker.onChange = color => {
  button.style.borderColor = color.hex;
  BorderHexBox.value = color.hex;
  BordercpTarg.style.backgroundColor = color.hex;
}
// HoverTxtColorPicker.setColor('#fff');
// HoverTxtColorPicker.onChange = color => {
//   button.style.color = color.hex;
//   HoverTxtHexBox.value = color.hex;
//   HoverTxtcpTarg.style.backgroundColor = color.hex;
// }
// HoverBgColorPicker.setColor('#e47676');
// HoverBgColorPicker.onChange = color => {
//   button.style.backgroundColor = color.hex;
//   HoverBgHexBox.value = color.hex;
//   HoverBgcpTarg.style.backgroundColor = color.hex;
// }
// HoverBorderColorPicker.setColor('#e47676');
// HoverBorderColorPicker.onChange = color => {
//   button.style.borderColor = color.hex;
//   HoverBorderHexBox.value = color.hex;
//   HoverBordercpTarg.style.backgroundColor = color.hex;
// }