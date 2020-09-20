import pagesConfig from "../assets/pagesConfig";

export default function FindByProp(objectKey, subKey, keyToFind, valueToFind) {
  return pagesConfig[objectKey][subKey].find((value) => {
    return value[keyToFind] === valueToFind;
  })
}
