import React from 'react';
import { connect } from 'react-redux';
import ChangeColor from '../components/ChanegeColor';
import { changeColor } from '../store/modules/changecolor';

const ChangeContainer = ( {color,changeColor}) => {
    return (
        <div>
            <ChangeColor
            color={color}
            changeColor={changeColor}
            />
    
        </div>
    );
};

// const mapStateToProps = (state) =>({
//     color: state.changecolor.color
// })
// const mapDispatchToProps = (dispatch) => ({
//     changeColor :  (color) => dispatch(changeColor(color))
// }) => 기본형

export default connect (
    // mapStateToProps,
    // mapDispatchToProps
    ({changecolor}) =>({
        color: changecolor.color
    }),{changeColor}
)
(ChangeContainer);