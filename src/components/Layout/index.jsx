import Header from '../Header';
import Footer from '../Footer';
import Search from '../Search';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <>
    <Header/>
    <Search/>
    { children }
    <Footer/>
  </>
);

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout;
