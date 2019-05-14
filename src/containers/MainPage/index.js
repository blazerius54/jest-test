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

const initialState = {
  showBtn: true,
};

class MainPage extends React.Component {
  state = {
    ...initialState,
  };

  toggleBtn = () => {
    this.setState(prevState => ({
      showBtn: !prevState.showBtn,
    }))
  };

  postRequest = () => {
    this.props.fetchPosts();
    this.toggleBtn();
  };

  render() {
    const { posts } = this.props;
    const { showBtn } = this.state;
    return (
      <div data-test="mainPageComponent">
        <Header />
        {
          showBtn && (
              <Headline
                  title="Posts"
                  desc="Click to render posts"
                  tempArr={tempArr}
                  postRequest={this.postRequest}
              />
          )
        }
        <main>
          {posts.length > 0 &&
            posts.map(({ title, body }) => (
              <SinglePost key={Math.random()} title={title} desc={body} />
            ))}
        </main>
      </div>
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
