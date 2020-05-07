import { MATRIX } from './matrix';

const AUTH_CHILDREN_INDEXES = [4, 5, 6];
const AUTH_REGEX = /\[(\S),(\S)\]/;

const authInfos = AUTH_CHILDREN_INDEXES.map(i => {
  const content = $('#authentication tbody').children[i].innerText;
  const matches = content.match(AUTH_REGEX);
  const row = matches[1];
  const col = parseInt(matches[2]) - 1;
  return MATRIX[row][col];
});

AUTH_CHILDREN_INDEXES.forEach((ci, i) => {
  const inputName = `input[name=message${ci - 1}]`;
  $(inputName).value = authInfos[i];
});

$('input[type=submit').click();
