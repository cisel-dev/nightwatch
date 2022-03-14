import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy } from 'react-icons/fa'

const Console = (props) => {

    console.log("props" + props)
    return (
        <div className="Console">
        
            <CopyToClipboard text={props.asd} className="copybutton">
                <button id='copybutton'><FaRegCopy /></button>
            </CopyToClipboard>
            <SyntaxHighlighter language="json" style={a11yDark} showLineNumbers={true} >
               
                {props.asd +"\n"}
               
            </SyntaxHighlighter>

        </div>
    );
};

export default Console;