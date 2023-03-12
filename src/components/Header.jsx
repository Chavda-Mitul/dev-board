function Title(){
  return (
    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOrXNJMjMLDtnRvh3saEhL5IeX23v03beHiW3iOP1UKu3lHCKT4nBsG_GqCaqBXVGeMo&usqp=CAU" alt="logo"></img>
  )
}
// Header component for header section: Logo, Nav Items
function Header(){
  return (
    <div className='header'>
    <Title/>
    <div className='nav-items'>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Test</li>
      </ul>
      </div>
    </div>
  );
}

export default Header;