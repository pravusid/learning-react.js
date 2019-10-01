export function selectBook(book) {
  // action creator 이므로 action을 반환함
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
