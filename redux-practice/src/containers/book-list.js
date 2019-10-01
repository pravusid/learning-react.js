import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectBook } from "../actions/index";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li className="list-group-item" key={book.title} onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  // 반환 값은 BookList의 props로 보여질 것임
  return {
    books: state.books
  };
}

// 함수 반환값은 book-list container의 props가 됨
// selectBook이 호출될 때마다 결과가 reducer로 전달됨
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

// book-list를 컴포넌트에서 컨테이너로 변경: dispatch 메소드로 selectBook을 알아야 함
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
