import { BsFillTelephoneFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export const contacts = [
  {
    id: 1,
    icon: <BsFillTelephoneFill />,
    contact: '+254 789 152 368',
    link: 'tel:+254789152368',
  },
  {
    id: 2,
    icon: <MdEmail />,
    contact: 'muriukimainalewis@gmail.com',
    link: 'mailto:muriukimainalewis@gmail.com',
  },
  {
    id: 3,
    icon: <BsGithub />,
    contact: '@mainamuriuki274',
    link: 'https://github.com/mainamuriuki274',
  },
  {
    id: 4,
    icon: <BsLinkedin />,
    contact: 'Lewis Muriuki',
    link: 'https://www.linkedin.com/in/lewis-muriuki-09b3a9162/',
  },
];
