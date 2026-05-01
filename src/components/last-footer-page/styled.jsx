import styled from "styled-components";

const LastFooterPagePart = styled.div`
    color: #efefef;
    text-align: center;
`
const LastFooterPagePartContext = styled.div`
    font-size: 20px;
    
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        div {
            img {
                border-right: 2px solid aliceblue;
                /* border-radius: 50px; */
            }
            div {
                display: block;
            }
        }
   }
     a {
        font-family: ArmenianDecorativeU-Italic;
        text-decoration: none;
        cursor: pointer;
        transition: 0.2s;
    }

    a:hover {
        text-decoration: underline;
        opacity: 0.8;
    }
`
export { LastFooterPagePart, LastFooterPagePartContext }