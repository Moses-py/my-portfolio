import styled from "styled-components";
import { motion } from "framer-motion";
export const HomeContainer = styled.div`
    height: 100vh;
    max-height: 100%;
    width: 100%;
    background: #131314;
    .header {
        padding: 2rem;
    }
`

export const FlexContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media(max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`
export const TextBox = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    color: white;
    @media(max-width: 1024px) {
        height: 100vh;
    }
    .landingText {
        margin: auto;
        width: 100%;
        padding: 0 15%;
        line-height: 1.5;
        @media (max-width: 1024px) and (min-width: 600px) {
            padding: 0 15%;
        }

        @media (max-width: 500px) {
            padding: 0 10%;
        }
        @keyframes tipsy {
            0 {
              transform: translateX(-50%) translateY(-50%) rotate(0deg);
            }
            100% {
              transform: translateX(-50%) translateY(-50%) rotate(360deg);
            }
          }
          p {
              font-size: 48px;
              font-weight: 400;
              font-family: 'Open Sans', sans-serif;
              @media (max-width: 1300px) {
                  font-size: 36px;
              } 
              @media (max-width: 600px) {
                font-size: 30px;
              }
              strong {
                font-family: 'La Belle Aurore',cursive;
                background: -webkit-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                transition: all .3s linear;
              }
          }

        .buttonContainer {
            margin-top: 3rem;
        }
    }

    .socials {
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 15px;
        justify-content: space-evenly;
        align-items: center;
        @media (max-width: 600px) {
            right: 10px;
        }
        .socialIcon {
            font-size: 1.2rem;
            margin: 1rem;
            transition: all .3s;
            cursor: pointer;
            &:hover {
                transform: scale(1.5)
            }
        }
        hr {
            width: 3rem;
            transform: rotate(90deg);
            margin: 1.5rem;
        }
    }
`

export const NavigationBox =styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    width: 100%;
    @media (max-width: 600px) {
        display: block;
    }
    .navigation {
        background: #131314;
        border: 1px solid hsla(0,0%,63.9%,.3);
        color: white;
        position: relative;
        .navigationIconContainer {
            text-align: center;
        }
        .navigationTextContainer {
            margin: 4rem 3rem;
            text-align:center;
        }
        .navigationIcon, .navigationText {
            color: #fafaff;
            margin: auto;
            font-size: 3.5rem;
            position: relative;
            z-index: 1;
        }
        .navigationText {
            color: white;
            font-size: 1.8rem;
            font-weight: 400;
            @media (max-width: 600px) {
                font-size: 1.3rem;
            }
        }
        .navigationTitle {
            display: flex;
            align-items: center;
            margin: 0;
            position: absolute;
            bottom: 7%;
            left: 7%;
            font-size: 2rem;
            font-weight: 400;
            @media (max-width: 600px) {
                font-size: 1.2rem;
            }
        }
        .arrowIcon {
            color: #fff;
            position: absolute;
            right: 7%;
            bottom: 10%;
            cursor: pointer;
            font-size: 1.3rem;
        }
        .aboutOverlay, .portfolioOverlay, .contactOverlay, .skillsOverlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("/images/gradient1.jpg");
            z-index: 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        .portfolioOverlay {
            background-image: url("/images/gradient2.jpg");
        }
        .contactOverlay {
            background-image: url("/images/gradient3.jpg");
        }
        .skillsOverlay {
            background-image: url("/images/gradient4.jpg");
        }
    }
`

