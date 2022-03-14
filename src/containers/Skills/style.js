import styled from "styled-components";

export const SkillContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #131314;
    color: white;
    align-items: center;
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        padding: 5%;
    }
`
export const PageContainer = styled.div`
    display: flex;
`

export const SkillSection =styled.div`
    margin-left: 5%;
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
            left: 0;
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
            left: 0;
        }
    }
    
    .skillHeading {
        font-size: 4.5rem;
        line-height: 4rem;
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
    .skillText {
        font-size: 1rem;
        line-height: 1.5;
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
`

export const SkillChart = styled.div`
    padding: 10%;
    .chart {
        span {
            font-family: "Open Sans", sans-serif;
            font-size: 1.2rem;

            @media (max-width: 600px) {
                font-size: 1rem;
            }
        }
        footer {
            margin-top: .5rem;
            margin-bottom: 2.5rem;
            height: 2px;
            background: #373737;
        }
    }
`

export const JourneySection = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    font-family: "Open Sans", sans-serif;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
    .journey {
        padding: 2rem 1rem;
        background: #2a2a2a9c;
        color: #ababab;
        width: 100%;
        transition: background 0.4s linear;

        &:hover{
            background: #2a2a2a;
        }
        .role {
            color: #fff;
            font-size: 1.3rem;
        }
        .company {
            font-size: 1rem;
        }
        ul {
            list-style-type: none;
        }
        section {
            margin: 1rem 0;
        }
        .desc {
            font-size: .9rem;
        }
    }
`
