function generateChapterMetadata(arrayOfItems) {
  return arrayOfItems.map((item) => ({ title: item[0], componentName: item[1] }));
}

const items = generateChapterMetadata([
  ['Chapter 1', 'Chapter1.jsx'],
]);

export default items;
