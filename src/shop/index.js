import React from 'react';
import phones from './phones.json';
import Detail from './detail';
import './styles.less';

export default class Shop extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            phone: phones[0]
        };
    }

    mapPhones(phone, i) {
        return (
            <li key={i} onClick={this.handleClick.bind(this, phone)} >
                {phone.name}
                <img src={phone.imageUrl} />
            </li>
        );
    }

    handleClick(phone) {
        this.setState({ phone });
    }

    render() {
        return (
            <div className='b-shop'>
                <ul className='list'>
                    { phones.map(this.mapPhones.bind(this)) }
                </ul>
                <Detail phone={ this.state.phone } className='detail'/>
            </div>
        );
    }
}
