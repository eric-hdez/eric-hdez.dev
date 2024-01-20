import { Button, Link, Stack, Typography } from '@mui/joy';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Copyright = () => {
  return (
    <Typography level="body-md">Copyright © 2024 Eric Hernandez. All rights reserved.</Typography>
  );
};

const buttons = [
  {
    link: 'mailto:eric-hdez@proton.me',
    description: 'Eric\'s Email Address',
    icon: <EmailRoundedIcon />,
  },
];

export const Footer = () => {
  return (
    <Stack direction="column" alignItems="center" p={4} spacing={1}>
      <Stack direction="row" spacing={1}>
        {buttons.map(({ link, description, icon }) => (
          <Link
            key={link}
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Button
              startDecorator={icon}
              title={description}
              aria-label={description}
              size="lg"
              variant="outlined"
            >
              eric-hdez@proton.me
            </Button>
          </Link>
        ))}
      </Stack>
      <Copyright />
    </Stack>
  );
};
