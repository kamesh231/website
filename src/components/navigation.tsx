import { Link, useStaticQuery, graphql } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import Image from "./image";
import colors from "../colors";  

// background-color: ${colors.berry};
// box-shadow: 0px 0px 12px ${colors.berry};
const NavContainer = styled.section`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 98;
  ${tw`text-white`}

  & nav {
    ${tw`flex justify-between mx-auto max-w-5xl lg:mt-8 py-4`}
  }
`;

const MobileNavMenu = styled.ul`
  ${tw`fixed top-0 left-0 m-0 p-0 w-full h-full list-none`}
  z-index: 99;
  background-color: #9d3789;
  & li {
    ${tw`pt-8 px-8 text-xl`}
    & a {
      ${tw`text-white no-underline`}
    }
  }
  & li.close {
    ${tw`text-right text-sm relative`}
    top: -8px;
    left: 7px;
  }
`;

const NavigationItems = styled.ul`
  ${tw`m-0 p-0`}
  & li {
    ${tw`list-none hidden md:inline-block lg:mr-8 align-top`}
    height: 30px;
    & a {
      ${tw`no-underline text-sm p-4`}
      color: ${colors.white};
      font-weight: 600;
      line-height: 30px;
    }
  }
  & li.logo {
    ${tw`inline-block pl-4 md:pl-4 lg:pl-0`}
    width: 110px;
    height: 30px;
  }
`;

const AccountButtons = styled.ul`
  ${tw`m-0 p-2 flex lg:mr-0`}
  background: rgba(0,0,0,0.25);
  border-radius: 24px;
  list-style: none;
  & li {
    ${tw`list-none inline-block ml-3 align-top hidden md:inline-block`}
    height: 30px;
  }
  & label {
    ${tw`text-sm py-3 align-middle`}
  }
  & li.hamburger {
    ${tw`inline-block md:hidden cursor-pointer`}
    width: 30px;
    height: 30px;
  }
`;

const ActionButtonLink = styled.a<{
  primary?: boolean;
}>`
  ${tw`no-underline text-xs border border-solid py-2 px-6 rounded-full`}
  color: ${props => (props.primary ? "white" : colors.berry)};
  background-color: ${props => (props.primary ? colors.berry : "white")};
  line-height: 30px;
`;

const NavigationComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const { hamburger, logo } = useStaticQuery(graphql`
    query {
      hamburger: file(relativePath: { eq: "deprecated/hamburger@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 110) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "courier-logo@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 110) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const toggleMenu = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    setShowModal(!showModal);
  };

  const hideMenu = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavContainer>
        <nav>
          <NavigationItems>
            <li className="logo">
              <Link to="/">
                <Image image={logo} />
              </Link>
            </li>

            <li>
              <Link to="/#pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/#company">Company</Link>
            </li>
            <li>
              <Link to="/#community">Community</Link>
            </li>
            <li>
              <a href="https://docs.trycourier.com/" target="_blank">
                Documentation
              </a>
            </li>
          </NavigationItems>
          <AccountButtons>
            <li>
              <label>Sign Up</label>
            </li>
            <li>
              <ActionButtonLink
                href="https://www.trycourier.app/login"
                target="_blank"
              >
                Google
              </ActionButtonLink>
            </li>
            <li>
              <ActionButtonLink
                href="https://www.trycourier.app/register"
                target="_blank"
              >
                GitHub
              </ActionButtonLink>
            </li>
            <li>
              <ActionButtonLink
                href="https://www.trycourier.app/register"
                target="_blank"
              >
                Email
              </ActionButtonLink>
            </li>
            <li className="hamburger">
              <a href="/" onClick={toggleMenu}>
                <Image image={hamburger} />
              </a>
            </li>
          </AccountButtons>
        </nav>
      </NavContainer>
      {showModal ? (
        <MobileNavMenu onClick={hideMenu}>
          <li className="close">
            <a href="/" onClick={toggleMenu}>
              close X
            </a>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/#company">Company</Link>
          </li>
          <li>
            <a href="https://docs.trycourier.com/" target="_blank">
              Documentation
            </a>
          </li>
          <li>
            <a href="https://www.trycourier.app/login" target="_blank">
              Login
            </a>
          </li>
          <li>
            <a href="https://www.trycourier.app/register" target="_blank">
              Sign Up
            </a>
          </li>
        </MobileNavMenu>
      ) : null}
    </>
  );
};

export default NavigationComponent;
