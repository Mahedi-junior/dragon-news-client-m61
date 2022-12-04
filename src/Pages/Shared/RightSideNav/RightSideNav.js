import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaFacebookMessenger,
} from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-3"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </ButtonGroup>

      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-3">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaFacebookMessenger></FaFacebookMessenger>Messenger
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaWhatsapp></FaWhatsapp> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="">
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
