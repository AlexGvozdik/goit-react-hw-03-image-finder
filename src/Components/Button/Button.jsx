import React from "react";
import PropTypes from 'prop-types';
import { MyBtn } from "./Button.styled";

const Button = ({ fetchImages}) => {
  return (
    <MyBtn  type="button" onClick={fetchImages}>
     Load more
    </MyBtn>
  );
};

export default Button;

Button.propTypes = {
    fetchImages: PropTypes.func.isRequired
}