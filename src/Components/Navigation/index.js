import React, {Component} from 'react';
import './Navigation.css';
import Images from '../Img';
import {FaCaretDown} from 'react-icons/fa'

let data = [
  {"name": "Harry Potter", "pic": Images.Potter, "link": "#Potter"},
  {"name": "Hermine Granger", "pic": Images.Granger, "link": "#Granger"},
  {"name": "Ron Weasley", "pic": Images.Weasley, "link": "#Weasley"},
  {"name": "Severus Snape", "pic": Images.Snape, "link": "#Snape"},
  {"name": "Fleur Delacour", "pic": Images.Delacour, "link": "#Delacour"},
  {"name": "Dobby", "pic": Images.Dobby, "link": "#Dobby"}
]

class Navigation extends Component {
  render() {
    let Result = data.map((item, index) => <a href={item.link} key={index}><div className='navitem'><h2>{item.name}</h2><img src={item.pic} className='portrait' alt={item.name}/><div className='more'>Accio Text <FaCaretDown /></div></div></a>)
  return <div className='links'>{Result}</div>
}
}

export default Navigation;
