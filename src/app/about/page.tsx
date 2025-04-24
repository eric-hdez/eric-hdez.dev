import Link from 'next/link';
import { EmailIcon, LinkedInIcon, GitHubIcon, InstagramIcon } from '../components/icons';

const comms = [
  { name: "Email", link: "mailto:eric-hdez@proton.me", icon: <EmailIcon /> },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/eric-hdez", icon: <LinkedInIcon /> },
  { name: "GitHub", link: "https://www.github.com/eric-hdez", icon: <GitHubIcon /> },
  { name: "Instagram", link: "https://www.instagram.com/eric_witha_c", icon: <InstagramIcon /> },
]

function getCurrentAge(birthdate: string): number {
  const birthDateObj = new Date(birthdate);
  const now = new Date();

  let age = now.getFullYear() - birthDateObj.getFullYear();
  const m = now.getMonth() - birthDateObj.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birthDateObj.getDate())) {
    age--;
  }

  return age;
 }

export default function About() {
  const age = getCurrentAge('2001-05-01');
  return (
    <>
      <h1 className="mb-7 text-[#3b4149] font-semibold text-balance">Eric Hernandez</h1>
      <p className="mt-7">Hi there! I'm a {age} year old Software Engineer at Bloomberg LP with a B.S. in Computer Science from the University of California, Santa Cruz. At Bloomberg, I engineer backend services, pipelines, and distributed data stores for fixed income instruments on the Bloomberg Terminal.</p>
      <p className="mt-7">My main interests include operating systems, compilers, programming languages, and backend engineering. I enjoy learning by falling through rabbit holes.</p>
      <p className="mt-7">Outside of work, I enjoy long walks, playing with my cat, listening to music, cooking, and playing video games. I will start learning how to play the guitar soon! Feel free to reach out to me via social media or email if you would like to have a chat about tech or any of my hobbies.</p>
      <div className="flex mt-7">
        {comms.map(({ name, link, icon }) => (
          <span className="mr-4 w-6 h-6" key={name}>
            <Link
              href={link}
              rel="noopener noreferrer"
              target="_blank"
              className="[&>svg]:hover:fill-[#4a515b]"
            >
              {icon}
            </Link>
          </span>
        ))}
      </div>
    </>
  );
}
