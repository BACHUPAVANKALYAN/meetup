import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`
export const RegisterImage = styled.img`
  height: 400px;
  width: 400px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const RegisterHeading = styled.h1`
  color: #334155;
  font-size: 32px;
  font-family: 'Roboto';
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Label = styled.label`
  color: #7b8794;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 'bold';
  margin-bottom: 5px;
`

export const Input = styled.input`
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 8px;
  color: #000000;
`

export const Select = styled.select`
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 8px;
  color: #000000;
`
export const RegisterButton = styled.button`
  background-color: #3b82f6;
  font-family: 'Roboto';
  color: #ffffff;
  outline: none;
  border: none;
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 20px;
  border-radius: 6px;
  margin-top: 20px;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-family: 'Roboto';
`

export default RegisterContainer
