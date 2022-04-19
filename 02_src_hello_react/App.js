// 分别引入，不是解构赋值
import {Component} from 'react';
import Hello from './component/Hello/Hello';
import Welcome from './component/Welcome';

export default  class App extends Component {
    render() {
        return (
            <div>
               <Hello />
               <Welcome />
            </div>
        )
    }
}
