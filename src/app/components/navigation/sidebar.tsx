'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Sidebar,
  SidebarBody,
  SidebarLabel,
} from '../catalyst/sidebar';
import { DownloadIcon } from '../icons';

const sidebarItems = [
  { name: 'about', route: '/about' },
  { name: 'experience', route: '/experience' },
  { name: 'projects', route: '/projects' },
];

export default function SideBar() {
  const [selected, setSelected] = useState<number>(0);

  return (
    <Sidebar className="mr-14">
      <SidebarBody className="px-0 py-1 justify-items-end">
        {sidebarItems.map(({ name, route }, idx) => (
          <Link
            key={name}
            href={route}
            shallow={true}
            passHref
            onClick={() => setSelected(idx)}
            className="flex pb-1 justify-end hover:cursor-pointer">
            <SidebarLabel
              className={`${selected == idx ?
                'text-[#1e2125]' :
                'text-[#8c95a1] hover:text-[#4a515b]'}
                            mx-0 px-0`}
            >
              {name}
            </SidebarLabel>
          </Link>
        ))}
        <Link
          href="/eric_hdez_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex pb-1 justify-end group-hover:cursor-pointer items-center"
        >
          <SidebarLabel
            className="flex text-[#8c95a1] group-hover:text-[#4a515b] ml-0 mr-1.5 px-0"
          >
                        resume
          </SidebarLabel>
          <span className="w-3.25 h-3.25 [&>svg]:fill-[#8c95a1] [&>svg]:group-hover:fill-[#4a515b]"><DownloadIcon /></span>
        </Link>
      </SidebarBody>
    </Sidebar>
  );
}