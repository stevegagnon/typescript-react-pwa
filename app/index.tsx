import './style/index.less';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import HelloWorld from './HelloWorld';

const root = document.createElement('div');
document.body.append(root);

ReactDom.render(<HelloWorld />, root);

