export function addCartItems(list, item) {
  const index = list.indexOf(item);
  if (index === -1) {
    item.quantity = 1;
    return [...list, item];
  } else {
    item.quantity += 1;
    list.splice(index, 1, item);
    return [...list];
  }
}
