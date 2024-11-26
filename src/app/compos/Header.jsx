const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap py-5 px-14 flex-col md:flex-row items-center">
        <span className="ml-3 text-xl">One&Only</span>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Overview</a>
          <a className="mr-5 hover:text-gray-900">Amenities</a>
          <a className="mr-5 hover:text-gray-900">Connectivity</a>
          <a className="mr-5 hover:text-gray-900">Gallery</a>
          <a className="mr-5 hover:text-gray-900">Plans</a>
          <a className="mr-5 hover:text-gray-900">Specification</a>
          <a className="mr-5 hover:text-gray-900">About the developer</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
