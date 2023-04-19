import React, { PureComponent } from "react";
import { connect } from "react-redux";
// import axios from "axios";
// import store from "../store";
// import { changeBanners, changeRecommends } from "../store/features/home";
import { fetchMultiData } from "../store/features/home";

export class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchMultiData();
    // axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
    //   console.log(res);
    //   const banners = res.data.data.banner.list;
    //   const recommends = res.data.data.recommend.list;
    //   store.dispatch(changeBanners(banners));
    //   store.dispatch(changeRecommends(recommends));
    // });
  }

  render() {
    const { banners, recommends } = this.props;
    return (
      <div>
        <h2>轮播图展示:</h2>
        {banners.map(item =>
          <li key={item.title}>
            {item.title}
          </li>
        )}
        <h2>推荐的展示:</h2>
        {recommends.map(item =>
          <li key={item.title}>
            {item.title}
          </li>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  banners: state.home.banners,
  recommends: state.home.recommends
});

const mapDispatchToProps = dispatch => ({
  fetchMultiData: () => dispatch(fetchMultiData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
