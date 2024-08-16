interface HeaderProps {
  children: React.ReactNode;
}

function Header({ children }: HeaderProps): React.JSX.Element {
  return <header className="header">{children}</header>;
}

export default Header;
