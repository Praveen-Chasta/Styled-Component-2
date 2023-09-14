import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  padding-top: 80px;
  padding-left: 50px;
  padding-right: 50px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #1b1c22;
  height: 80vh;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`
export const Image = styled.img`
  height: 80%;
  width: 90%;
`
export const TextEditContainer = styled.div`
  background-color: #25262c;
  height: 90%;
  width: 40%;
  margin-top: 30px;
  border-radius: 8px;
  border-width: 5px;
  border: 1px solid #334155;
`
export const ListContainer = styled.ul`
  display: flex;
  padding: 10px;
  list-style-type: none;
`

export const Button = styled.button`
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  background-color: #25262c;
  border: none;
  cursor: pointer;
`

export const Hr = styled.hr`
  color: #334155;
`

export const StyledTextarea = styled.textarea`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  width: 100%;
  height: 81%;
  padding: 10px;
  font-size: 16px;
  border: 0px solid #334155;
  border-radius: 4px;
  resize: vertical;
  background-color: #25262c;
  outline: none;
  color: #ffffff;
`
