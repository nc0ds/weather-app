import styled from 'styled-components'

const Container = styled.div`
  width: 95%;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  color: #FFF;
`

const Row = styled.div`
  width: 95%;
  display: flex;
  justify-content: ${props => props.centerContent ? 'space-around;' : 'space-between;'};

  ${props => props.maxwidth ? `max-width: ${props.maxwidth};` : null}
  ${props => props.center ? `
    margin-left: auto;
    margin-right: auto;
  ` : null}
`

const Column = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${props => props.maxwidth ? `max-width: ${props.maxwidth};` : null}
  ${props => props.height ? `height: ${props.height};` : null}
  ${props => props.centerContent ? 'align-items: center;' : null}
  ${props => props.center ? `
    margin-left: auto;
    margin-right: auto;
  ` : null}
`

const TextInput = styled.input.attrs(props => ({
  type: 'text'
}))`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #aaa;
  width: 35%;
  padding: 0.5rem;
  color: #FFF;
  font-size: 1rem;
  transition: 0.2s ease-in-out;

  &:focus {
    border-bottom: 2px solid #00e0ff;
  }
`

const Submit = styled.input.attrs(props => ({
  type: 'submit',
  value: 'Ver clima'
}))`
  border: 2px solid #00e0ff;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  background-color: transparent;
  color: #00e0ff;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #00e0ff;
    color: #000;
  }
`

const ResultContainer = styled.div`
  width: 100%;
  padding: 2rem;
  transition: 0.2s ease-in-out;
`

const Paragraph = styled.p`
  font-size: ${props => props.size ? `${props.size};` : '1rem;'};
  width: 100%;
  margin-bottom: 0.5rem;

  ${props => props.center ? 'text-align: center;' : null}
`

export { Container, Row, Column, TextInput, Submit, ResultContainer, Paragraph }
