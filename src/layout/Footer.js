import styled from 'styled-components';

const Wrapper = styled.footer`
  background: var(--black, black);
  width:100%;
  color: var(--blue, lightskyblue);
  text-align: center;
  padding: 2rem;

  h4  {
    font-weight: lighter;
  }
`;

const Footer = () => {
  return (  
    <Wrapper>
      <h4>Built with the New York Times API</h4>
      <h5>&copy; 2021 Brannon Lee</h5>
    </Wrapper>
  );
}
 
export default Footer;