function NavLink({ id, to, children, className, onClick = () => {} }) {
  const handleClick = () => {
    onClick();
    const element = document.getElementById(to);
    element.scrollIntoView();
  };
  return (
    <a
      id={id}
      style={{ cursor: "pointer" }}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}

export default NavLink;
