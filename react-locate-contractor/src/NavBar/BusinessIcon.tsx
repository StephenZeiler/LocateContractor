import React from 'react';
import { Link, BrowserRouter as Router, Route, BrowserRouter, Routes, } from 'react-router-dom';
import styled from 'styled-components';

function BusinessIcon() {

    const PrimaryButton = styled.div`
    position: absolute;
    width: 124px;
    height: 34px;   
    left: 702px;
    top: 7px;
    `
    const ButtonRectangle = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;

    background: #FFD368;
    border-radius: 8px;
`
    const ButtonText = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    font - family: 'Inter';
    font - style: normal;
    font - weight: 400;
    font - size: 16px;
    line - height: 19px;
    display: flex;
    align - items: center;
    text - align: center;

    color: #393E46;
    `
    return (
        <PrimaryButton>
            <ButtonRectangle>
                <Link to="/business">
                    Business
                </Link>
            </ButtonRectangle>
        </PrimaryButton>

    );
}
export default BusinessIcon;