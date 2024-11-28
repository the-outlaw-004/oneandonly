import Container from "./common/Container";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <Container>
        <div className="flex flex-wrap py-5 flex-col md:flex-row items-center">
          <span className="ml-3 text-xl">One&Only</span>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-sm">
            <a className="mr-5 hover:text-gray-900">Overview</a>
            <a className="mr-5 hover:text-gray-900" href="#amenities">
              Amenities
            </a>
            <a className="mr-5 hover:text-gray-900" href="#connectivity">
              Connectivity
            </a>
            <a className="mr-5 hover:text-gray-900" href="#gallery">
              Gallery
            </a>
            <a className="mr-5 hover:text-gray-900" href="#plans">
              Plans
            </a>
            <a className="mr-5 hover:text-gray-900" href="#specification">
              Specification
            </a>
            <a className="mr-5 hover:text-gray-900" href="#developer_section">
              About the developer
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
