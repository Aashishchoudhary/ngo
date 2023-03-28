import './header.css'
import { NavLink  ,} from 'react-router-dom'
function Header() {
  return (
    <div>
      <ul className='header_ul'>
        <li className='header_li'><NavLink className='link'  to="*">Home</NavLink></li>
      <li className='header_li'><NavLink className='link' to="/profile">Profile</NavLink></li>
      <li className='header_li'><NavLink className='link' to="/about">About</NavLink></li></ul>
    </div>
  )
}

export default Header
