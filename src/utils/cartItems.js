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

export function removeCartItems(list, item) {
  const newList = list.filter(l => l.id !== item.id);
  return [...newList];
}

export function increaseItems(list, item) {
  const index = list.indexOf(item);
  item.quantity += 1;
  list.splice(index, 1, item);
  return [...list];
}

export function decreaseItems(list, item) {
  if (item.quantity === 1) {
    const newList = list.filter(l => l.id !== item.id);
    return [...newList];
  } else {
    const index = list.indexOf(item);
    item.quantity -= 1;
    list.splice(index, 1, item);
    return [...list];
  }
}
