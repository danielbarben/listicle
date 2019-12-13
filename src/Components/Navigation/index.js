import React, {Component} from 'react';
import './Navigation.css';
import {FaCaretDown} from 'react-icons/fa'
import Data from '../Data'

class Navigation extends Component {
  render() {
    let Result = Data.map((item, index) => <a href={'#'+item.name} key={index}><div className='navitem'><h2>{item.vorname}<br/>{item.name}</h2><img src={item.pic} className='portrait' alt={item.name}/><div className='more'>lesen <FaCaretDown /></div></div></a>)
  return <div className='links'>{Result}</div>}
}

export default Navigation;
