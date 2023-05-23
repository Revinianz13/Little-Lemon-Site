import lemon from '../../images/lemon.svg';


function Nav() {
  const pages = ['Home' , 'Order', 'Book a Table' , 'Info'];

  const tobepages = pages.map((pages) => 
    <li><a href='#'>{pages}</a></li>
  )
  return (
    <>
      <img src={lemon} alt="A Lemon" />
      <ul>{tobepages}</ul>
    </>
  );
}

export default Nav;