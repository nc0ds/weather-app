import { useState, useRef } from 'react'
import { Container, Row, Column, TextInput, Submit, ResultContainer, Paragraph } from './components/styleds'

function App() {
  const [resultHeight, setResultHeight] = useState('0px')
  const [weather, setWeather] = useState({})
  const [temperature, setTemperature] = useState({})

  const cidadeInput = useRef(null)
  const paisInput = useRef(null)

  return (
    <Container>
      <form onSubmit={e => {
        e.preventDefault()

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidadeInput.current.value},${paisInput.current.value}&units=metric&lang=pt_br&appid=e2729fa7640ffab41a1e4a0d2a6a5c99`)
          .then(res => res.json())
          .then(res => {
            if(res.cod === 200) {
              setWeather(res.weather[0])
              setTemperature(res.main)
              setResultHeight('300px')
            } else {
              alert('Parâmetros inválidos')
            }
          })
          .catch(err => alert('Algo deu errado'))
      }}>
        <Row centerContent center>
          <TextInput placeholder='Cidade' ref={cidadeInput} />
          <TextInput placeholder='País' ref={paisInput} />
          <Submit />
        </Row>
        <ResultContainer>
          <Column centerContent center height={resultHeight}>
            <Paragraph size='8rem' center>{Math.round(temperature.temp)}</Paragraph>
            <Paragraph center size='1.5rem'>{weather.description}</Paragraph>
            <Paragraph center size='1.5rem'>{temperature.temp_min}° / {temperature.temp_max}°</Paragraph>
          </Column>
        </ResultContainer>
      </form>
    </Container>
  );
}

export default App;
