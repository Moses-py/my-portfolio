import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
`

export const AboutContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #131314;
    color: white;
    align-items: center;
    @media (max-width: 1300px) {
        padding: 0 5%;
    }
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`

export const AboutSection =styled.div`
    padding: 0 15%;
    position: relative;
    @media (max-width: 900px) {
        padding: 10%;
        padding-top: 20%;
        padding-bottom: 5%;
    }

    @media (max-width: 500px) {
        padding-top: 30%;
    }
    &:before {
        content: '<body>';
        font-family: 'La Belle Aurore',cursive;
        color: #515152;
        font-size: 18px;
        position: absolute;
        margin-top: -4rem;
        left: 2rem;
        background: -webkit-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (max-width: 600px) {
            left: 0
        }
    }

    &:after {
        content: '</body>';
        font-family: 'La Belle Aurore',cursive;
        color: #515152;
        font-size: 18px;
        position: absolute;
        left: 2rem;
        margin-top: 0;
        background: -webkit-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @media (max-width: 600px) {
            left: 0
        }
    }
    
    .aboutHeading {
        font-size: 4.5rem;
        line-height: 4.2rem;
        background: -webkit-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
        margin-bottom: 3rem;
        font-weight: 600;
        font-family: 'La Belle Aurore',cursive;
        @media (max-width: 1100px) {
            font-size: 3rem;
        }
        :before {
            content: '<h1>';
            font-family: 'La Belle Aurore',cursive;
            background: -webkit-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 18px;
            position: absolute;
            margin-top: -3rem;
            left: -1rem;
        };

        :after {
            content: '</h1>';
            font-family: 'La Belle Aurore',cursive;
            color: #515152;
            font-size: 18px;
            position: absolute;
            left: -1rem;
            margin-top: 3rem;
            background: -webkit-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    };
    .aboutText {
        font-size: 1rem;
        line-height: 1.8;
        position: relative;
        font-family: Open Sans, sans-serif;

        @media (max-width: 1100px) {
            font-size: 0.9rem;
        }
        &:before {
            content: '<p>';
            font-family: 'La Belle Aurore',cursive;
            color: #515152;
            font-size: 18px;
            position: absolute;
            margin-top: -1.5rem;
            left: -1rem;
            background: -webkit-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }


        &:after {
            content: '</p>';
            font-family: 'La Belle Aurore',cursive;
            color: #515152;
            font-size: 18px;
            position: absolute;
            left: -1rem;
            margin-top: -2rem;
            background: -webkit-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        p {
            margin-bottom: 2rem;
            em {
                font-weight: 600;
                background: -webkit-linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }

    .socials {
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 10px;
        bottom: 15px;
        justify-content: space-evenly;
        align-items: center;
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
            background-color: #08fdd8;
        }
    }
`

export const SkillCanvas = styled.div`
    @media (max-width: 900px) {
        padding: 10%;
    }
`