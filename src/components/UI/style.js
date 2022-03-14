import styled from "styled-components";
import {motion} from "framer-motion"
export const Btn = styled(motion.button)`

  font-size: 1.1rem;
  font-family: Open-sans, sans-serif;
  color: #fafaff;
  font-weight: 100;
  letter-spacing: 0.5px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid #eef0f2;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  z-index: 0;

&:after {
  content: "";
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.5s;
}

&:hover&:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
    padding: 13px 50px 13px;
}
`

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 4%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  @media (max-width: 1024px) {
    background: #131314;
  }
  span, p {
    color: #fff;
    font-size: 1.1rem;
    padding: 5px;
    margin: 0 5px;
  };

  .role {
    font-size: 1rem;
    font-weight: 700;
    background: -webkit-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all .3s linear;
    font-family: 'Raleway',sans-serif;

  }

  .logoContainer {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  img {
    width: 50px;
    height: 50px;
  }  
`
export const SkillCard = styled.div`
  border: .5px solid black;
  border-radius: 10px;
  width: 100%;
  .categoryBox {
    width: 100%;
    background-color: black;
    padding: 1rem: 0;
    border-radius: 10px 10px 0 0;
    color: #fff;
  }

  .skill {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 1rem 3rem;
    align-items: center;
  }

  .skillName {
    // flex: 1;
    grid-column: 1/2;
    text-align: center;
  }

  .skillbar {
    // flex: 5;
    grid-column: 2/4;
    height: 1rem;
    background: green;
    border: .5px solid blue;
    border-radius: 15px;
    text-align: center;
    font-size: .7rem;
    color: #fff
  }
`