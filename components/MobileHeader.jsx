import styled from 'styled-components';
import { data } from '../dataObject';
import { scrollTo } from './scroll';

const ListWrapper = styled.ul`
  display: grid;
  place-items: center;
  align-content: flex-start;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  background: #001126;
  i {
    cursor: pointer;
    padding: 2rem 3rem;
    align-self: flex-end;
    justify-self: flex-end;
    font-size: 3rem;
  }
  @media (min-width: 50em) {
    display: none;
  }
`;
const ListItem = styled.li`
  width: 100%;
  padding: 4rem 3rem;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    background: #072243;
  }
`;

const MobileHeader = ({ setMenuOpen }) => {
  const { header } = data;
  return (
    <ListWrapper>
      <i onClick={() => setMenuOpen(false)} className='fas fa-times'></i>
      {header.map((item, index) => (
        <ListItem
          key={index}
          onClick={() => {
            scrollTo(index);
            setMenuOpen(false);
          }}
        >
          {item.name}
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default MobileHeader;
