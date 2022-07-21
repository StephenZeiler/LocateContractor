import { useNavigate, } from 'react-router-dom';
import styled from 'styled-components';

function HomeIcon() {

    const PrimaryButton = styled.div`
    position: absolute;
    width: 100px;
    height: 34px;
    left: 460px;
    top: 7px;

    `
    const ButtonRectangle = styled.button`
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
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    
    color: #393E46;
    `
    const navigate = useNavigate();
    const handleHome = async () => navigate('/');
    return (
        <PrimaryButton>
            <ButtonRectangle onClick={handleHome}>
                Home
            </ButtonRectangle>
        </PrimaryButton>

    );
}
export default HomeIcon;