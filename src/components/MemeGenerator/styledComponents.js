// Style your components here
import styled from 'styled-components'

export const AppMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Open Sans';
`
export const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  padding-left: 20px;
  @media screen and (min-width: 768px) {
    width: 90%;
    padding-left: 40px;
    align-items: flex-start;
  }
`
export const FormAndDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 550px;
  }
`
export const InputCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  order: 1;
  @media screen and (min-width: 768px) {
    width: 50%;
    order: 0;
  }
`
export const MemeGeneratorHeader = styled.h1`
  font-size: 21px;
  color: #35469c;
  font-weight: bolder;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const LabelAndInputEle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`
export const LabelEle = styled.label`
 font-size:14px;
 font-weight: 600:
 color:#7e858e;
`
export const InputEle = styled.input`
  width: 90%;
  height: 42px;
  border-radius: 3px;
  margin-top: 10px;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #7e858e;
  outline: none;
  color: #5a7184;
`

export const SelectContainer = styled.select`
  width: 90%;
  height: 42px;
  border-radius: 3px;
  margin-top: 10px;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #7e858e;
  outline: none;
  color: #5a7184;
`
export const Options = styled.option`
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
`

export const SubmitButton = styled.button`
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  background-color: #0b69ff;
  border: none;
  cursor: pointer;
  width: 120px;

  border-radius: 7px;
  margin-bottom: 20px;
  height: 42px;
  @media screen and (min-width: 768px) {
    width: 150px;
    font-size: 16px;
    padding: 14px;
  }
`
export const DisplayContainer = styled.div`
  background-image: url(${props => props.imageUrl});
  width: 90%;
  background-size: cover;
  padding: 16px;
  color: #ffffff;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 250px;
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 400px;
  }
`
export const DisplayContext = styled.p`
  align-self: center;
  font-size: ${props => props.fontSize}px;
  text-align: center;
`
