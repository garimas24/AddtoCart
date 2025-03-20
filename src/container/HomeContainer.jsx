import Home from "../component/Home";
import { connect } from "react-redux";
import { addToCart } from "../services/Action/action";

const mapStateToProps = (state) => ({
  data: state.cardItems,
  // data:state.cardItems
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
