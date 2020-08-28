import * as React from 'react';
import * as ReactDom from 'react-dom';
import Routes from './routes';

const root = document.createElement('div');
document.body.append(root);

ReactDom.render(<Routes />, root);
