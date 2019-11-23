import handleData from "../logic/dataHandling";
import storage from "../logic/storage";

const hd = handleData();
const s = storage();
let wordList = [];

function saveInputWord(name, meaning) {
  const word = hd.setData(name, meaning);
  const index = hd.getLength(localStorage);
  s.saveData(index, word);
  wordList.push(word);
}

function loadWordList() {
  const indexWords = hd.getObjKeys(localStorage);
  const words = hd.getItemList(indexWords, s.getData);
  wordList = words;
}

function getWordList() {
  return wordList;
}

module.exports = { saveInputWord, loadWordList, getWordList };

// pub-sub pattern 하구싶당;
