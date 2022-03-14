import styled from "styled-components";
import { motion } from "framer-motion";


export const NavigationContainer = styled.div`
    background: #111;
    height: 100vh;
    min-width: 150px;
    border-right: .5px solid #2a2a2a9c;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .logoContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3rem 0;
        background: black;
        .logo {
            height: 50px;
            width: 50px;
            cursor: pointer;
        }
    }
    .socials {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        color: #ababab;
        .socialIcon {
            font-size: 1.1rem;
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
            background-color: #ababab;
        }
    }
`

export const NavigationLink = styled(motion.li)`
    border-bottom: .5px solid #2a2a2a9c;
    padding: 1rem 0;
    text-align: center;
    list-style-type: none;
    border-right: none;
    transition: all .2s ease;
    cursor: pointer;
    &:nth-child(1) {
        border-top: .5px solid #2a2a2a9c;
    }

    &:hover {
        border-right: 5px solid #ee7752
    }

    .active {
        border-right: 5px solid #ee7752;
    }
`

export const NavigationLinkTag = styled.p`
    text-decoration: none;
    color: #ababab;
    font-size: 1rem;
    font-weight: 300;
    font-family: "Raleway", sans-serif;
    transition: all 0.33s linear;
`

export const MobileNavContainer = styled(motion.div)`
    width: 30%;
    height: 100vh;
    background: black;
    display: flex;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 900px) {
        width: 30%;
    }

    @media (max-width: 768px) {
        width: 40%;
    }


    @media (max-width: 600px) {
        width: 100%;
    }


    .logoContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3rem 0;
        background: black;
        .logo {
            height: 50px;
            width: 50px;
            cursor: pointer;
        }
    }
    .socials {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        color: #ababab;
        .socialIcon {
            font-size: 1.1rem;
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
            background-color: #ababab;
        }
    }
`