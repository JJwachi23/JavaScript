import PropTypes from 'prop-types'; //ES6

const Item = ({title, amount}) => {

  // const {title, amount} = props
    return(
      <li>{title}<span> -{amount}</span></li>
    );
  }

  Item.propTypes= {
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
  }



  export default Item