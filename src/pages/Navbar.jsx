import {Link, NavLink} from 'react-router-dom';


// export default function Navbar(){
//     const logo = require('../images/Screenshot (187).png')
//     return <nav className="nav">
//         <a href="/" className="site-logo">
//         <img src={logo} alt="" />
//         </a>
        
//         <ul>
//             {/* <Link style={navStyle} to="/About"> */}
//                     <li className="active">
//                     <a href="/About" >ABOUT US</a>
//                     </li>
//             {/* </Link> */}

//             {/* <Link style={navStyle} to="/Blog"> */}
//                     <li>
//                         <a href="/Blog">BLOG</a>
                        
//                     </li>
//             {/* </Link> */}

//             {/* <Link to="/contact"> */}
//                 <li>
//                 {/* <button><a href="/contact us">CONTACT US</a> </button> */}
//                     <button class="floating-btn">
//                         <a href="/contact">CONTACT US</a>
//                     </button>
//                 </li>
//             {/* </Link> */}
//         </ul>
//     </nav>
// }


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
    const logo = require('../images/Screenshot (187).png');
    const menuData =[
       
        {
            path:'/about',
            name:'About'
        },
        {
            path:'/blog',
            name:'Blog'
        }
    ]
  return (
    <Navbar className="navbar" expand="lg">
        <Container>
                <Navbar.Brand href="/" className="brand">
                        <a href="/" className="site-logo">
                        <img src={logo} alt="" /></a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                  {
                    menuData.map((item) =>(
                        <NavLink to={item.path} key={item.name}>
                            <a className='list_name'>{
                                item.name
                            }</a>
                        </NavLink>
                    ))
                  }
                  </Nav>
                  <Nav>
                  <button class="floating-btn">
                      <a className="btns" href="/contact">CONTACT US</a>
                    </button>
                  </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default BasicExample;