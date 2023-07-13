
function tagCreate(tType, props) {
  let element = document.createElement(tType);
  for (let i in props) {
    element[i] = props[i];
  }
  return element;
};

function styleCreate(obj, styleOb) {
  for (i in styleOb) {
    obj.style[i] = styleOb[i];
  }
}

let root = document.getElementById('root');
styleCreate(root, {
  width: '100vm',
  height: '100vh',
  backgroundColor: '#333',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

let cardBody = tagCreate('div', {})
root.appendChild(cardBody)
styleCreate(cardBody, {
  width: '350px',
  height: '550px',
  backgroundColor: '#E6FAFF',
  borderRadiues
})

