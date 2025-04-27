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
  { name: 'resume', route: '/resume' },
];

export default function SideBar() {
  const [selected, setSelected] = useState<number>(0);

  return (
    <Sidebar>
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
      </SidebarBody>
    </Sidebar>
  );
}