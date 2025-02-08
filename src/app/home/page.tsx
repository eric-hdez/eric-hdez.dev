import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ColorPaletteProp,
  Grid,
  IconButton,
  Stack,
  Typography,
  Divider,
  Box,
  Avatar,
  Card,
  CardContent,
  CardOverflow,
  AspectRatio,
  Button,
  Sheet,
} from '@mui/joy';

import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';

import eric from '../../../public/eric_arboretum.webp';

const experiences = [
  {
    title: 'Software Engineer',
    duration: 'March 2024 - present',
    company: 'Bloomberg LP',
    description: `Working under the Fixed Income and Derivatives Core Data Department building backend 
     services, pipelines, and distributed data stores for fixed income data that services the Bloomberg
     Terminal.`,
    image: 'https://pbs.twimg.com/profile_images/1016326195221352450/KCcdUN0v_400x400.jpg'
  },
  {
    title: 'Software Developer',
    duration: 'Jan 2023 - present',
    company: 'UC Santa Cruz ITS Department',
    description: `Worked under the Software Engineering team developing full stack web applications and
     services for higher education. I made notable contributions to their common tools library and the 
     backend of a poster service that allowed students to submit transactions for poster prints.`,
    image: 'https://its.ucsc.edu/images/its-logo.png'
  },
  {
    title: 'Software Engineer Intern',
    duration: 'Jun 2021 - Aug 2021',
    company: 'NVIDIA Corporation',
    description: `Worked under the GPU Core Resource Manager Team developing a code quality tool that
     analyzes files in a Perforce changelist and detects security defects, styling issues, and spelling
     errors. This tool was a part of the department's effort to tidy their codebase.`,
    image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-grn-500x200-4c25-p.png'
  },
];

function UserCard({company, title, description, duration, image}: { company: string, title: string, description: string, duration: string, image: string }) {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
      }}
    >
      <Card
        orientation="vertical"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          [`& > *`]: {
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
        }}
      >
        <Stack direction="row" spacing={2}>
          <AspectRatio flex ratio="1" maxHeight={91} sx={{ maxWidth: 91 }}>
            <img
              src={`${image}`}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <Box>
            <Typography sx={{ fontSize: 'xl', fontWeight: 'lg' }}>
              {company}
            </Typography>
            <Typography
              level="body-md"
              textColor="text.tertiary"
              sx={{ fontWeight: 'lg' }}
            >
              {title}
            </Typography>
            <Typography level="body-md" textColor="text.secondary">
              {duration}
            </Typography>
          </Box>
        </Stack>
        <Sheet
          sx={{
            bgcolor: 'background.level1',
            borderRadius: 'sm',
            p: 1.5,
            mt: 1.5,
            display: 'flex',
            '& > div': { flex: 1 },
          }}
        >
          {description}
        </Sheet>
        {/* <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img
            src={`${image}`}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent>
          <Typography sx={{ fontSize: 'xl', fontWeight: 'lg' }}>
            {company}
          </Typography>
          <Typography
            level="body-md"
            textColor="text.tertiary"
            sx={{ fontWeight: 'lg' }}
          >
            {title}
          </Typography>
          <Typography level="body-md" textColor="text.secondary">
            {duration}
          </Typography>
          <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              '& > div': { flex: 1 },
            }}
          >
            {description}
          </Sheet>
        </CardContent> */}
      </Card>
    </Box>
  );
}

export default function Home() {
  return (<></>
    // <Stack direction="column" spacing={4} py={4}>
    //   <Stack
    //     direction="row"
    //     flexWrap={{xs: 'wrap', sm: 'nowrap' }}
    //     justifyContent="center"
    //     gap={{ xs: 4, md: 4 }}
    //   >
    //     <Image
    //       src={eric}
    //       style={{ borderRadius: 12 }}
    //       width={270.73}
    //       alt="Portrait of Eric on his birthday"
    //       quality={80}
    //       placeholder="blur"
    //       priority
    //     />
    //     <Stack direction="column" spacing={2}>
    //       <Typography level="h3" textAlign="left">
    //         I&apos;m Eric Hernandez, a Software Engineer from California.
    //       </Typography>
    //       <Typography>
    //         I hold a B.S. in Computer Science from the University of California, Santa Cruz
    //         and currently work as a Software Engineer at Bloomberg LP.
    //       </Typography>
    //     </Stack>
    //   </Stack>
    //   <Divider />
    //   <Typography level="h2" textAlign="center">Experience</Typography>
    //   <Stack direction="column">
    //     {experiences.map(({ title, duration, company, description, image }, index) => (
    //       <>
    //         <Stack direction="row" spacing={1}>
    //           <Divider orientation="vertical" sx={{ '--Divider-thickness': '2px' }}>
    //             <Avatar>
    //               <TerminalRoundedIcon />
    //             </Avatar>
    //           </Divider>
    //           <UserCard {...{company, title, description, duration, image}} />
    //         </Stack>
    //         {index + 1 !== experiences.length && (
    //           <Box display="flex" pl={2.4} height={25}>
    //             <Divider orientation="vertical" sx={{ '--Divider-thickness': '2px' }} />
    //           </Box>
    //         )}
    //       </>
    //     ))}
    //   </Stack>
    // </Stack>
  );
}
