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
          <DocsColorBox color={color.primary.dark}>Primary dark</DocsColorBox>
          <DocsColorBox color={color.primary.light}>primary light</DocsColorBox>
          <DocsColorBox color={color.secondary.dark}>sec. dark</DocsColorBox>
          <DocsColorBox color={color.secondary.light}>sec. light</DocsColorBox>
          <DocsColorBox color={color.accent.dark}>accent dark</DocsColorBox>
          <DocsColorBox color={color.accent.light}>accent light</DocsColorBox>
          <DocsColorBox color={color.dui.background}>dui bg</DocsColorBox>
          <DocsColorBox color={color.gray.g1}>g1</DocsColorBox>
          <DocsColorBox color={color.gray.g2}>g2</DocsColorBox>
          <DocsColorBox color={color.gray.g3}>g3</DocsColorBox>
          <DocsColorBox color="white">white</DocsColorBox>
          <DocsColorBox color={color.black}>black</DocsColorBox>
          <DocsColorBox >no props</DocsColorBox>
        </DocsSection>
        <DocsSection>
          <h2>Buttons</h2>
          <h3>Button styles</h3>
          <Btn color="darkGreen"> 
            <Icon name="add" context="btn" color="#ffffff" size={fontSize[3]}></Icon>
            Join game   
          </Btn>
          <Btn color={color.primary.dark}>Continue</Btn>
          <Btn roundness="pill" color={color.secondary.dark}>Copy</Btn>
          <Btn color={color.secondary.light}  roundness="pill">Ok</Btn>
          <Btn color={color.accent.dark}  roundness="pill">Cancel</Btn>
          <Btn roundness="pill">
            <Icon name="pin" size={fontSize[3]} />
          </Btn>
          <Btn roundness="pill" color={color.lui.text}>
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
         <DocsModalContainer color={color.accent.dark}>
            <Modal header="Header">
              Modal Body
            </Modal>
            
         </DocsModalContainer >
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