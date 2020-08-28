import { h, render } from 'preact';
import Routes from './routes';

const root = document.createElement('div');
document.body.append(root);

render(<Routes />, root);
