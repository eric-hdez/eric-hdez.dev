const experience = [
  {
    title: 'Software Engineer',
    company: 'Bloomberg L.P.',
    years: 'Mar 2024 - Present',
    icon: <img src="https://cdn.brandfetch.io/idy68RSCip/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" />,
  },
  {
    title: 'Software Developer',
    company: 'UC Santa Cruz IT Services',
    years: 'Jan 2023 - Sept 2023',
    icon: <img src="https://media.licdn.com/dms/image/v2/C4E0BAQEEdPQHFbiGrg/company-logo_100_100/company-logo_100_100/0/1656436364797?e=1757548800&v=beta&t=yCH1Jn9tsxsIKbHB1mJRqKBse0677KoV2Y7RM85HcW4" />,
  },
  {
    title: 'Software Engineer Intern',
    company: 'NVIDIA Corporation',
    years: 'Jun 2021 - Aug 2021',
    icon: <img src="https://cdn.brandfetch.io/idG4EolXbM/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" />,
  },
];


export default function Resume() {
  return (
    <>
      <h1 className="mb-7 text-[#3b4149] font-semibold text-balance">Experience</h1>
      {experience.map(({ title, company, years, icon }, idx) => (
        <h2 key={idx} className="mt-7 text-[#3b4149] font-semibold text-balance">
          <div className="flex flex-col sm:flex-row mt-7 sm:items-center">
            <div className="sm:flex mb-2 sm:mr-2 sm:mb-0 h-16 w-16">
              {icon}
            </div>
            <div className="flex flex-col flex-1">
              <span>
                {title}
              </span>
              <span className="text-[#8c95a1]">
                {company}
              </span>
              <span className="text-[#8c95a1]">
                {years}
              </span>
            </div>
          </div>
        </h2>
      ))}
    </>
  );
}
