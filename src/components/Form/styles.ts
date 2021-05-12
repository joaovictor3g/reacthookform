import styled from 'styled-components';

export const Formulary = styled.form`
    display: grid;
    grid-template-rows: repeat(3, 1fr); 
    /* grid-template-columns: 1fr; */

    background: #f2f2f2;

    margin: auto;
    padding: 40px;
    max-width: 500px;

    justify-content: center;
    align-items: center;

    .personal-info-container, 
    .input-group-address,
    input[type="submit"] {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 0.5fr;
        gap: 15px;
    }

    input {
        border: 1px solid #ddd;
        border-radius: 7px;
        height: 40px;
    }

    .personal-info-container {
    
    }

    .address-container {
        .aside {
            border-left: 10px solid yellow;
            padding: 0 20px;
        }
    }
`;