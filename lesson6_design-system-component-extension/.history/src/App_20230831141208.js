import React, { Component } from 'react';
import { DocsSection, DocsColorBox, DocsModalContainer, DocsCodeBlock } from './Docs';
import {
  GlobalStyle,
  Btn,
  Modal
} from './Rhubarb';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        
        <DocsSection>
          <h1>Rhubarb Design System</h1>
        </DocsSection>
        <DocsSection>
          <h3>Colors</h3>
          <DocsColorBox color="darkGreen">darkGreen</DocsColorBox>
          <DocsColorBox color="lightGreen">lightGreen</DocsColorBox>
          <DocsColorBox color="tan">tan</DocsColorBox>
          <DocsColorBox color="teal">teal</DocsColorBox>
          <DocsColorBox color="pink">pink</DocsColorBox>
          <DocsColorBox color="black">black</DocsColorBox>
          <DocsColorBox color="dui_gray80">dui_gray80</DocsColorBox>
          <DocsColorBox color="dui_gray60">dui_gray60</DocsColorBox>
          <DocsColorBox color="dui_gray20">dui_gray20</DocsColorBox>
          <DocsColorBox color="white">white</DocsColorBox>
        </DocsSection>

        <DocsSection>
          <h3>Buttons</h3>
          <h5>Button styles</h5>
          <Btn color="darkGreen">Join meeting</Btn>
          <Btn color="lightGreen">Confirm</Btn>
          <Btn color="teal">Continue</Btn>
          <Btn color="pink" fontSize="8">Cancel</Btn>

          <h5>Button sizes</h5>
          <Btn size="sm">Submit</Btn>
          <Btn>Submit</Btn>
          <Btn size="lg">Submit</Btn>
        </DocsSection>

        <DocsSection>
          <h3>Modals</h3>
          <Modal color="pink"><h1>hello</h1></Modal>

        </DocsSection>
      </div>
    );
  }
}

export default App;