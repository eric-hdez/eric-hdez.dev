import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, ColorPaletteProp } from '@mui/joy';
import { NavProps } from './navigation';

export interface NavItemProps extends NavProps {
  name: string;
  color: string;
}

export default function NavItem({
  name,
  color,
  handleDrawerOpen,
}: NavItemProps) {
  const path = usePathname();
  return (
    <Link href={`/${name}`} passHref>
      <Button
        variant="outlined"
        size="lg"
        color={color as ColorPaletteProp}
        onClick={handleDrawerOpen}
        fullWidth
      >
        {name.toUpperCase()}
      </Button>
    </Link>
  );
}
