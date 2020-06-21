export const shortTitle = (title) => {
  const arr = title.split(" ");
  let newTitle = "";
  for (let val of arr) {
    if (newTitle.length + val.length > 30) {
      return `${newTitle.trim()}...`;
    }
    newTitle += `${val} `;
  }
  return newTitle.trim();
};
