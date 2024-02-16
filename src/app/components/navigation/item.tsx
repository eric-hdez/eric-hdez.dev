import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, ColorPaletteProp } from '@mui/joy';
import { NavItemData, NavProps } from './navigation';

export interface NavItemProps extends NavProps, NavItemData {}

export default function NavItem({
  name,
  route,
  color,
  handleDrawerOpen,
}: NavItemProps) {
  const path = usePathname();
  return (
    <Link href={route} passHref>
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
