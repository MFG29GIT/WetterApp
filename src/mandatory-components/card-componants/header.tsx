type HeaderProps = {
  city: string;
};

export function Header({city}: HeaderProps) {
  return <div className="text-purple-600">{city}</div>;
}
