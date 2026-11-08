import Link from 'next/link';
import { EmailIcon, LinkedInIcon, GitHubIcon, InstagramIcon } from '../components/icons';

const comms = [
  { name: 'Email', link: 'mailto:eric-hdez@proton.me', icon: <EmailIcon /> },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/eric-hdez', icon: <LinkedInIcon /> },
  { name: 'GitHub', link: 'https://www.github.com/eric-hdez', icon: <GitHubIcon /> },
  { name: 'Instagram', link: 'https://www.instagram.com/eric_witha_c', icon: <InstagramIcon /> },
];

// Re-render at most once an hour so the age updates on May 1 without a redeploy.
export const revalidate = 3600;

function getCurrentAge(birthYear: number, birthMonth: number, birthDay: number): number {
  const now = new Date();

  let age = now.getFullYear() - birthYear;
  const m = now.getMonth() + 1 - birthMonth;
  if (m < 0 || (m === 0 && now.getDate() < birthDay)) {
    age--;
  }

  return age;
}

export default function About() {
  return (
    <>
      <h1 className="mb-7 text-heading font-semibold text-balance">Eric Hernandez</h1>
      <p className="mt-7">Hi there! I&apos;m a {getCurrentAge(2001, 5, 1)} year old Software Engineer at Bloomberg LP in New York, where I work on the money markets data behind the Bloomberg Terminal. Day to day, that means distributed services, caching layers, databases, and real-time data pipelines that keep the data fast, highly available, and transparent for traders. One of those caches sits in front of a database answering over a billion queries a day. You&apos;ve heard of big data, well this is MASSIVE data :3</p>
      <p className="mt-7">I have a B.S. in Computer Science from the University of California, Santa Cruz, and I&apos;m now working part-time toward an M.S. in Computer Science at Georgia Tech. Most of my work is in backend systems and infrastructure, but I&apos;m comfortable anywhere in the stack. My main interests are compilers, programming languages, and distributed systems, and I learn best by falling through rabbit holes.</p>
      <p className="mt-7">Outside of work, I enjoy long walks, playing with my cats, listening to music, learning guitar, and playing video games (currently lots of Pok&eacute;mon TCG Pocket). Feel free to reach out via social media or email if you&apos;d like to chat about tech or any of my hobbies!</p>
      <div className="flex mt-7">
        {comms.map(({ name, link, icon }, idx) => (
          <span key={idx} className="mr-7 w-6 h-6">
            <Link
              href={link}
              rel="noopener noreferrer"
              target="_blank"
              className="[&>svg]:hover:fill-body"
              title={`Link to ${name}`}
            >
              {icon}
            </Link>
          </span>
        ))}
      </div>
    </>
  );
}
