import Link from "next/link";
import { BrainIcon, EncryptedFilesIcon, MarketPlaceIcon, SnakeIcon } from "../components/icons";

const projects = [
  {
    name: "Alice",
    description: ["Alice is a special project that I am working on with two university friends. We are leveraging our knowledge of artificial intelligence, data intensive applications, and human compassion to bring accessible mental health support to people who otherwise can't afford it."],
    icon: <BrainIcon />,
  },
  {
    name: "Baskin Marketplace",
    description: ["A marketplace web application developed in collaboration with four other students for our senior capstone project. The application allows users to buy and sell items, and includes features such as user authentication, item listings, and a shopping cart."],
    icon: <MarketPlaceIcon />,
  },
  {
    name: "Schmidt-Samoa Cryptosystem",
    description: [
      "A cryptosystem developed in C and Python that implements the ",
      <Link href="https://eprint.iacr.org/2005/278.pdf" rel="noopener noreferrer" target="_blank" className=" underline hover:text-[#4a515b]">Schmidt-Samoa public key encryption</Link>,
      " scheme. The implementation includes features such as key generation, file encryption, and file decryption."
    ],
    icon: <EncryptedFilesIcon />,
  },
  {
    name: "Snake",
    description: ["A simple snake game developed in Python using the Pygame library. The game is started on the terminal and includes features such as score tracking and replayability."],
    icon: <SnakeIcon />,
  }
];

export default function Projects() {
  return (
    <>
      <h1 className="mb-7 text-[#3b4149] font-semibold text-balance">Projects</h1>
      <p className="mt-7">These are a few projects that I am currently working on or that I have completed in the past.</p>
      {projects.map(({ name, description, icon }) => (
        <>
      <h2 className=" mt-14 mb-7 text-[#3b4149] font-semibold text-balance">
      <div className="flex mt-7 items-center">
        <span className="mr-2 h-6 w-6">
            {icon}
        </span>
        <span>
          {name}
        </span>
      </div>
      </h2>
      <p key={name} className="mt-7">{description}</p>
      </>))}
    </>
  );
}
