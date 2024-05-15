import {
  IconArrowDown,
  IconArrowsJoin2,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconLockAccess,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/hero-image.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraFrontImg from '~/assets/images/Learning-pana.png';
import cameraBackImg from '~/assets/images/Webinar-pana.png';
import gasImg from '~/assets/images/gas.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Never <span className="hidden md:inline">Face</span> Exams <span>Alone, </span> {' '}
      <span className="sm:whitespace-nowrap">Get AssistED.ai</span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
      Clear Doubts Fast, Learn Better, Score Higher</span>{' '}
    </>
  ),
  
  callToAction: {
    text: 'Join the Waitlist',
    href: '#',
    icon: IconArrowsJoin2,
    targetBlank: true,
  },
  // callToAction2: {
  //   text: 'Learn More',
  //   href: '#',
  // },
  image: {
    src: heroImg,
    alt: 'AssistED.ai Hero Image',
  },
};




// SocialProof data on Home page *******************
/*export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};*/

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        What You Get with <span className="whitespace-nowrap">AssistED.ai</span>
      </>
    ),
    subtitle:
      "Discover the awesome features that make your exam prep fun and effective!",
    tagline: 'Features',
  },
  items: [
    {
      title: '24/7 Doubt Solving',
      description:
        'Never get stuck! Get instant answers anytime, especially during those late-night study marathons.',
      icon: IconBulb,
      // callToAction: {
      //   text: 'Learn More',
      //   href: '/features',
      // },
    },
    {
      title: 'Personalized Learning',
      description:
        'Customized study plans tailored to your syllabus, helping you stay ahead effortlessly.',
      icon: IconComponents,
      // callToAction: {
      //   text: 'Learn More',
      //   href: '/features',
      // },
    },
    {
      title: 'Accurate and Contextual',
      description:
        'Trustworthy AI that understands your syllabus and provides precise answers.',
      icon: IconCheck,
      // callToAction: {
      //   text: 'Learn More',
      //   href: '/features',
      // },
    },
    {
      title: 'Study at Your Own Pace',
      description:
        'Flexible study sessions that fit your schedule, so you can learn at your own speed.',
      icon: IconClock,
      // callToAction: {
      //   text: 'Learn More',
      //   href: '/features',
      // },
    },
    {
      title: 'Boost Your Confidence',
      description:
        'With constant support, feel more prepared and confident for your exams.',
      icon: IconRocket,
      // callToAction: {
      //   text: 'Learn More',
      //   href: '/features',
      // },
    },
    {
      title: 'Safe and Secure',
      description:
        'Your data is protected with top-notch security measures, ensuring a safe learning environment.',
      icon: IconLockAccess,
      // callToAction: {
      //   text: 'Learn More',
      //   href: '/features',
      // },
    },
  ],
};


// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Revolutionize Your Study Routine',
    subtitle: 'Discover how AssistED.ai can help you ace your exams with ease and confidence.',
    tagline: 'For Students',
  },
  content:
    'AssistED.ai is designed to make your study sessions more effective and enjoyable with cutting-edge AI technology. Here are some key features that set us apart:',
  items: [
    {
      title: '24/7 AI Doubt Solving',
      description:
        'Get your questions answered instantly, no matter the time of day. Perfect for those late-night study sessions.',
    },
    {
      title: 'Tailored to Your Syllabus',
      description:
        'Our AI understands your specific syllabus, ensuring the answers and resources you get are always relevant and accurate.',
    },
    {
      title: 'Interactive Learning Tools',
      description:
        'Engage with your study material through interactive tools that make learning more dynamic and fun.',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Student using AssistED.ai',
  },
  isReversed: false,
  isAfterContent: false,
};


// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  header: {
    title: 'Empower Your Coaching Center',
    subtitle: 'Utilize AssistED.ai’s platform to build your own AI-powered doubt solving tool.',
    tagline: 'For Coaching Centers',
  },
  content:
    'AssistED.ai offers a comprehensive platform for coaching centers to enhance their teaching capabilities and provide students with cutting-edge AI support.',
  items: [
    {
      title: 'Seamless Integration',
      description:
        'Easily integrate our AI tools into your existing platforms and websites, providing students with instant access to doubt solving.',
    },
    {
      title: 'Custom AI Models',
      description:
        'Develop AI models tailored to your curriculum, ensuring that the support provided is specific to your teaching methods and materials.',
    },
    {
      title: 'Enhance Student Engagement',
      description:
        'Boost student participation and performance by providing real-time doubt solving and personalized learning experiences.',
    },
    {
      title: 'Scalable Solutions',
      description:
        'Our platform grows with you, capable of handling increasing numbers of students and their queries as your coaching center expands.',
    },
    {
      title: 'Detailed Analytics',
      description:
        'Gain insights into student performance and identify areas for improvement with comprehensive analytics and reporting tools.',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Coaching center using AssistED.ai',
  },
  isReversed: true,
  isAfterContent: true,
};


// Steps data on Home page *******************
/*export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps to create AI platform',
  },
  header: {
    title: 'Create Your AI-Powered Doubt Solver in 3 Simple Steps',
  },
  items: [
    {
      title: 'Step 1: Upload Your Content',
      description:
        'Start by uploading your study materials, including notes, practice questions, and video lectures, to our platform.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2: Customize Your AI Model',
      description:
        'Use our intuitive tools to train and customize your AI model to match your curriculum and teaching style.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3: Integrate and Launch',
      description:
        'Integrate the AI doubt solver into your website or learning management system and start enhancing your students’ learning experience.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
      description:
        'Your AI-powered doubt solver is now ready to help your students excel!',
    },
  ],
};*/


// Testimonials data on Home page *******************
/*export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'What our customers say about us',
    subtitle:
      'Etiam sed odio et dolor auctor gravida. Curabitur tincidunt elit non risus pharetra sodales. Etiam sit amet mattis massa.',
  },
  testimonials: [
    {
      name: 'Tayla Kirsten',
      job: 'Marketing Manager',
      testimonial: `I'm impressed by the speed and performance of these templates. My website now loads in the blink of an eye, significantly enhancing my visitors' experience. Thanks to TailNext, my online business is thriving.`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tayla Kirsten',
      },
      href: '/',
    },
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `I had never found it so easy to customize a website. TailNext's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Kelsey Arden',
      job: 'Co-Founder & CEO',
      testimonial: `As a beginner in web development, I really needed clear guidance. Tailnext made it possible. I was able to install and customize my website seamlessly, and I'm thrilled with the results!`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Kelsey Arden',
      },
      href: '/',
    },
    {
      name: 'Sarah Johnson',
      job: 'Business Owner',
      testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Keith Young',
      job: 'Freelance Developer',
      testimonial: `The clean code and integration with Next.js make my projects a breeze. Plus, the responsive design ensures that my clients' websites look amazing on any device. These templates have become my secret weapon for success!`,
      image: {
        src: 'https://images.unsplash.com/photo-1694287877106-ee22f764aef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Keith Young',
      },
      href: '/',
    },
    {
      name: 'Lisa Gordon',
      job: 'Project Manager',
      testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with TailNext.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
};*/

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Find answers to the most common questions about using AssistED.ai for your CA exam preparation.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'What is AssistED.ai?',
      description: `AssistED.ai is a 24/7 AI-powered study buddy designed to help CA students with instant doubt solving, personalized learning paths, and interactive study tools.`,
    },
    {
      title: 'How does the 24/7 doubt solving work?',
      description: `Our AI is available round-the-clock to answer your questions immediately. Simply type your query, and our AI provides instant, accurate answers based on your syllabus.`,
    },
    {
      title: 'Is AssistED.ai tailored for CA exams?',
      description: `Yes, AssistED.ai is specifically designed to cater to the syllabus and requirements of CA students, ensuring the content and solutions are always relevant and helpful.`,
    },
    {
      title: 'Can I access AssistED.ai on my mobile?',
      description: `Absolutely! AssistED.ai is accessible on any device, including mobile phones, tablets, and computers, so you can study and resolve doubts on the go.`,
    },
    {
      title: 'How do I get started with AssistED.ai?',
      description: `Getting started is easy! Simply sign up on our website, choose your study plan, and start using AssistED.ai for instant doubt solving and personalized study support.`,
    },
    {
      title: 'Is my data safe with AssistED.ai?',
      description: `We prioritize your data security. AssistED.ai employs advanced security measures to ensure that your personal information and study data are protected at all times.`,
    },
  ],
};

// Pricing data on Home page *******************
/*export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Etiam in libero, et volutpat',
        },
        {
          description: 'Aenean ac nunc dolor tristique',
        },
        {
          description: 'Cras scelerisque accumsan lib',
        },
        {
          description: 'In hac habitasse',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'Proin vel laoreet',
        },
        {
          description: 'Ut efficitur egestas',
        },
        {
          description: 'Pellentesque ut nibh',
        },
        {
          description: 'Donec fringilla sem',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Curabitur suscipit risus',
        },
        {
          description: 'Aliquam blandit malesuada',
        },
        {
          description: 'Suspendisse sit amet',
        },
        {
          description: 'Suspendisse auctor dui',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};*/

// Team data on Home page *******************
/*export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};*/

// Contact data on Home page *******************
/*export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'In hac habitasse platea dictumst',
    tagline: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};*/

// CallToAction data *******************
/*export const callToAction2Home: CallToActionProps = {
  title: 'Next.js + Tailwind CSS',
  subtitle:
    'Aliquam sodales porttitor lacus ac tristique. Etiam posuere elit at leo feugiat sodales. Sed ac mauris quis sem tempor condimentum non at metus.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Get template',
      description: 'Aliquam sodales est lectus, quis.',
      href: 'https://github.com/onwidget/tailnext',
    },
    {
      title: 'Learn more',
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia.',
      href: '/',
    },
    {
      title: 'Subscribe',
      description: 'Morbi orci nunc, euismod ac dui id, convallis.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};*/
