import '../App.css';

function Header(props) {
    return (
        <div className={props.css} >
            <h1>{props.numberOne} * {props.numberTwo} = {props.numberOne * props.numberTwo} </h1>
        </div>
    );
  }

export default Header;