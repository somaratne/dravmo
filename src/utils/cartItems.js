export function addCartItems(list, item) {
  const noItemExists = list.filter(l => l.id !== item.id);
  item.quantity ? (item.quantity += 1) : (item.quantity = 1);
  return [...noItemExists, item];
}
