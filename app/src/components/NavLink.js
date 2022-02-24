function NavLink({ id, to, children, onClick = () => {} }) {
  const handleClick = () => {
    onClick();
    const element = document.getElementById(to);
    element.scrollIntoView();
  }
  return (
    <a id={id} style={{cursor: "pointer"}} onClick={handleClick}>
      {children}
    </a>
  )
}

export default NavLink;