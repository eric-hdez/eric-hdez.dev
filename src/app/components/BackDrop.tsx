import { Box } from '@mui/joy';

export default function BackDrop({ onClick }: { onClick: () => void }) {
  return (
    <Box
      display={{ md: 'none' }}
      position="fixed"
      height="100%"
      width="100%"
      zIndex={1}
      bgcolor="#00000055"
      onClick={onClick}
    />
  );
}
