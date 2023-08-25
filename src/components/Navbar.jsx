import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <MDBNavbar expand='lg' light style={{ backgroundColor: '#3a5fe5' }}>
        <MDBContainer fluid>
          
            <MDBNavbarNav className='mr-auto mb-lg-0'>

              <MDBNavbarItem>
                <MDBNavbarLink className="fw-bold" href='#'>Home</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink className="fw-bold" href='#'>Post</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink tag={Link} to={`/account/login`}>Login</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBInputGroup tag="form" className='ms-4 w-50 h-50'>
                <input className='form-control' placeholder="Search..." aria-label="Search" type='Search' />
              </MDBInputGroup>

            </MDBNavbarNav>

        </MDBContainer>
      </MDBNavbar>
    </>
  );
}