import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Headline from '../../components/Headline';
import SinglePost from '../../components/SinglePost';
import { fetchPosts } from './actions';
import './style.scss';

// Const for testing proptypes
const tempArr = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 24,
    onlineStatus: true,
  },
];

class MainPage extends React.Component {
  postRequest = () => {
    this.props.fetchPosts();
  };

  render() {
    const { posts } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Headline
          title="Posts"
          desc="Click to render posts"
          tempArr={tempArr}
          postRequest={this.postRequest}
        />
        <main>
          {posts.length > 0 &&
          posts.map(({ id, title, body }) => (
            <SinglePost key={id} title={title} desc={body} />
          ))}
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.mainPageReducer.loading,
  posts: state.mainPageReducer.posts,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPosts }, dispatch);

MainPage.propTypes = {
  fetchPosts: PropTypes.func,
  loading: PropTypes.bool,
  posts: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
