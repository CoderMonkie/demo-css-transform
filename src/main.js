console.log('main.js log');

function onCheck(e) {
  const checkboxes = document.querySelectorAll('input[name="tranStyle"]');
  const pUsingStyle = document.getElementById('pUsingStyle');
  const imgGood = document.getElementById('imgGood');
  const { target } = e;
  let transformStyle = '';

  if (target.value === 'matrix' && target.checked) {
    [].filter.call(document.getElementsByName('tranStyle'), el => el.checked).forEach(el => {
      if (el.value !== 'matrix') el.checked = false;
    });
    imgGood.style.transform = transformStyle = `matrix(2, 1.5, -1.5, 2, 60, 60)`;
    pUsingStyle.innerText = transformStyle;
    return;
  }
  document.querySelector('#chkMatrix').checked = false;

  const values = [].filter.call(document.getElementsByName('tranStyle'), el => el.checked).map(el => el.value);
  console.log('values', values);

  for (value of values) {
    switch (value) {
      case 'rotate':
        transformStyle += ` rotate(45deg)`;
        break;
      case 'skew':
        transformStyle += ` skew(45deg)`;
        break;
      case 'translate':
        transformStyle += ` translate(60px, 60px)`;
        break;
      case 'scale':
        transformStyle += ` scale(2)`;
        break;
    }
  }

  imgGood.style.transform = transformStyle;
  pUsingStyle.innerHTML = transformStyle;
}

document.addEventListener("DOMContentLoaded", (event) => {
  const radios = document.querySelectorAll('.form-box input[type="checkbox"]');
  console.log(radios);

  radios.forEach(rdo => rdo.addEventListener('click', onCheck));
});
