import styled from "styled-components";
import { motion } from "framer-motion";

export const PageContainer = styled.div`
    display: flex;
    width : 100%;
    height: 100vh;
`
export const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    flex: 1;
    background: #131314;
    color: white;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`

export const GetInTouchContainer = styled.div`
    .contactTextContainer {
        margin-top: 4.5rem;
        margin-bottom: 2.5rem;
        text-align: center;
    }
    .contactTextSmall {
        font-size: 1.2rem;
        font-weight: 500;
        margin: 0.5rem;
        @media (max-width: 600px) {
            font-size: 16px;
        }
    }
    .contactText {
        font-size: 64px;
        margin-bottom: 3rem;

        @media (max-width: 600px) {
            font-size: 32px;
        }
    }
`

export const ContactBoardImageContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: relative;
    border-left: .5px solid hsla(0,0%,63.9%,.3);

    @media (max-width: 900px) {
        padding: 5%;
    }

`

export const ContactGrid = styled(motion.div)`
    a {
        text-decoration: none;
        color: #fff;
    }
    .navigationContactGrid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 75vh;
        .navigationContactItem {
            background: #131314;
            min-height: 320px;
            height: 100%;
            display: flex;
            align-items: center;
            padding-left: 10%;
            transition: background 0.5s linear;
            &:hover {
                background: rgb(25, 25, 25);
            }
            &:nth-child(1), &:nth-child(4) {
                background: rgb(15,15,15)
            }
            p {
                font-size: 1.5rem;
                line-height: 1.5;
                font-family: "Open Sans", sans-serif;
                font-weight: 100;
                @media (max-width: 600px) {
                    font-size: 1.1rem
                }
            }
            .navigationContactIcon {
                font-size: 1.8rem;
                margin-bottom: .5rem;

                @media (max-width: 600px) {
                    font-size: 1.3rem
                }
            }
        }

    }

}
`
export const FloatingMapInfo = styled.div`
    position: absolute;
    top: 7%;
    left: 5%;
    background: black;
    z-index: 1;
    color: white;
    padding: 2rem;

    @media (max-width: 600px) {
        padding: 1rem;
    }

    p {
        font-size: .9rem;
        font-weight: 300;
        font-family: "Open Sans", sans-serif;
        margin-bottom: .5rem
        @media (max-width: 600px) {
            font-size:: .7rem;
        }
    }
    .mail {
        margin-top: 1.3rem;
        span {
            font-size: 1.5rem;
            color: #D86647; 
        }
    }
`

export const FeedBackFormContainer = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    z-index: 2000;
    display: flex;
    align-items: center;

    .overlay {
        position: absolute;
        height: 100vh;
        width: 100%;
        z-index: 2500;
        background: #111;
        opacity: 0.9;
    }
`


export const FormContainer = styled(motion.div)`
    background: #fff;
    position: relative;
    z-index: 3000;
    padding: 5%;
    margin: auto;
    .btnContainer {
        text-align: center;
        margin: 2rem 0;
        background: black;
        padding: 2rem;
    }
    
    .cancelButton {
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
        font-size: 1.5rem;
    }
`