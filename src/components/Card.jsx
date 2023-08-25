/* eslint-disable react/prop-types */
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCardFooter,
  MDBBtn,
  MDBBtnGroup
} from 'mdb-react-ui-kit';

import dayjs from "dayjs";

export default function Card({post}) {
  return (
    <>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardBody>
              <MDBCardTitle>{post.title}</MDBCardTitle>
              <MDBCardText>
                {post.description}
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className='text-muted'>Author: {post.author.username}</small>
              <br />
              <small className='text-muted'>Last updated: {dayjs(post.updatedAt).format("MM/DD/YYYY hh:mm:ss A")}</small>
              <br />
              <small className='text-muted'>Price: {post.price}</small>
            </MDBCardFooter>
            <MDBRow className='g-0'>
              <MDBBtnGroup>
                <MDBBtn disabled rounded color='success' className='my-1 mx-2'>Details</MDBBtn>
                <MDBBtn disabled rounded className='my-1 mx-2'>Buy</MDBBtn>
              </MDBBtnGroup>
            </MDBRow>
          </MDBCard>
        </MDBCol>
    </>
  );
}
