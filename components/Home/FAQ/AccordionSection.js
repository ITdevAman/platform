import React, {useState} from "react";
import {IconContext} from "react-icons";
import styled from 'styled-components'
import {Data} from "./Data";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";


const AccordionSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
const Wrap = styled.div`
  background: #27272727;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 700;

  h1 {
    font-size: 20px;
    padding-bottom: 20px;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  margin-bottom: 20px;


  p {
    font-size: 16px;
  }
`;


export default function Accordion() {
    const [clicked, setClicked] = useState(false)
    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <IconContext.Provider value={{color: '#00ffb9', size: '25px'}}>
            <AccordionSection>
                {Data.map((item, index) => {
                    return (
                        <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                                <h1>{item.question}</h1>
                                <span>{clicked === index ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
                            </Wrap>
                            {clicked === index ? (
                                <Dropdown>
                                    <p>{item.answer}</p>
                                </Dropdown>
                            ) : null}
                        </>
                    )
                })}

            </AccordionSection>
        </IconContext.Provider>
    )
}