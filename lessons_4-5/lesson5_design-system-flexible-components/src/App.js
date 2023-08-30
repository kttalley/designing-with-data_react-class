import React, { Component } from 'react';
import styled from 'styled-components';
import { Btn } from './Styled';

class App extends Component {
  render() {
    return (
      <div classname ="App">
        <Section>
          <h3>Button Styles</h3>
          <Row>
            <Btn>Submit</Btn>
            <Btn color="red">Submit</Btn>
            <Btn color="green">Submit</Btn>
            <Btn color="gray1">Submit</Btn>
            <Btn color="black">Submit</Btn>
          </Row>
        </Section>

        <Section>
          <h3>Button Sizes</h3>
          <Btn size="sm">Submit</Btn>
          <Btn>Submit</Btn>
          <Btn size="lg">Submit</Btn>
        </Section>

      </div>
    );
  }
}

const Section = styled.section`
  margin: 100px 20px;
  background-color: #333;
  padding: 2rem;
  color: white;
  border-radius: 8px;
`
const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly
  align-content: center;
  gap: 2%;
  padding: 2rem;
  flex-basis: 10%;
`

export default App;
