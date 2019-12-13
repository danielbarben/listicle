import React, {Component} from 'react';
import './content.css';
import Images from '../Img';
import Data from '../Data'
import {FaCaretUp} from 'react-icons/fa'

class Navigation extends Component {
  render() {
    let Result = Data.map((item, index) => <div className='content' key={index} id={item.name}><h2>{item.vorname} {item.name}</h2><h3>{item.funktion}</h3><div className='person'>{item.text}<a href='#top' className='more' alt=''>Nach oben <FaCaretUp/></a></div></div>)
  return <div className='links'>{Result}</div>
  }
}

export default Navigation;
