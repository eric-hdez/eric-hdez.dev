import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, ColorPaletteProp } from '@mui/joy';
import { NavItemData, NavProps } from './navigation';

export interface NavItemProps extends NavProps, NavItemData {}

export default function NavItem({
  decorator,
  name,
  route,
  color,
  handleDrawerOpen,
}: NavItemProps) {
  const path = usePathname();
  return (
    <Link href={route} shallow={true} passHref>
      <Button
        variant="plain"
        size="lg"
        startDecorator={decorator}
        color="neutral"
        onClick={handleDrawerOpen}
        sx={{
          bgcolor:
            path === route
              ? `var(--joy-palette-${color}-outlinedHoverBg)`
              : 'transparent',
        }}
      >
        {name}
      </Button>
    </Link>
  );
}
