import React, { Component } from 'react';
import { DocsSection, DocsColorBox, DocsModalContainer, DocsCodeBlock } from './Docs';
import Icon from './Rhubarb/Icon'

import {
  GlobalStyle,
  Btn,
  Modal,
  fontSize,
  color,
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
          <h2>Colors</h2>
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
          <h2>Buttons</h2>
          <h3>Button styles</h3>
          <Btn color="darkGreen"> 
            <Icon name="add" context="btn" color="#ffffff" size={fontSize[3]}></Icon>
            Join game   
          </Btn>
          <Btn color="lightGreen">Continue</Btn>
          <Btn color="white"  roundness="pill">Copy</Btn>
          <Btn color="teal"  roundness="pill">Ok</Btn>
          <Btn color="pink"  roundness="pill">Cancel</Btn>
          <Btn roundness="pill">
            <Icon name="pin" size={fontSize[3]} />
          </Btn>
          <Btn roundness="pill" color="tan">
            <Icon name="add" size={fontSize[3]} />
          </Btn>
          <Btn color="dui_gray20" roundness="pill">
            <Icon name="cancel" color={color.black} size={fontSize[3]}></Icon>
          </Btn>
          <DocsCodeBlock>
            {`<Btn> ... </Btn>
            <Btn color="dui_gray80"> ... </Btn>
            <Btn roundness="pill"> ... </Btn>
            <Btn> <Icon name="pin" color="#" size="#"/> </Btn>
            
            `}
          </DocsCodeBlock>
      </DocsSection>
      <DocsSection>
          <h4>Button sizes</h4>
          <Btn size="sm">Submit</Btn>
          <Btn>Submit</Btn>
          <Btn size="lg">Submit</Btn>
           <DocsCodeBlock>
            {`<Btn size="sm"> ... </Btn>
            <Btn> ... </Btn>
            <Btn size="lg"> ... </Btn>
            `}
          </DocsCodeBlock>
        </DocsSection>
        

        <DocsSection>
          <h2>Modals</h2>
         <DocsModalContainer>
            <Modal header="Header">
              Modal Body
            </Modal>
            
         </DocsModalContainer>
         <DocsCodeBlock>
            {` // Modal without Overlay
              <Modal header="..."> ... </Modal>

              // Modal with Overlay
              <ModalWithOverlay header="..."> ... </ModalWithOverlay>
            `}
          </DocsCodeBlock>

        </DocsSection>
      </div>
    );
  }
}

export default App;