function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    let a = phone_book[i + 1].slice(0, phone_book[i].length);
    if (phone_book[i] === a) {
      return false;
    }
  }

  return true;
}