import { Button, Link, Stack, Typography } from '@mui/joy';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const buttons = [
  {
    link: 'mailto:eric-hdez@proton.me',
    description: 'Eric\'s Email Address',
    icon: <EmailRoundedIcon />,
  },
];

const Copyright = () => {
  return (
    <Typography
      level="body-md"
      textAlign="center"
    >{`Copyright © ${new Date().getFullYear()} Eric Hernandez. All rights reserved.`}</Typography>
  );
};

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
              sx={{ borderRadius: 0 }}
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
