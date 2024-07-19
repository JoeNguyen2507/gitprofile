const CONFIG = {
  github: {
    username: 'JoeNguyen2507', // Your GitHub org/user name
  },
  base: '/', // Change this to '/<REPO_NAME>/' if this is a project site
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true
          projects: [], // These projects will not be displayed
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['JoeNguyen2507/gitprofile', 'JoeNguyen2507/pandora'], // List of repository names to display
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty
      projects: [
        {
          title: 'Project Name',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl: 'data:image/jpeg;base64,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',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Joe Nguyen',
    description: 'A portfolio showcasing the projects and skills of Joe Nguyen',
    imageURL: 'https://your-image-url.com/image.jpg', // Replace with an actual image URL
  },
  social: {
    linkedin: 'ariful-alam',
    twitter: 'arif_szn',
    mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
};
  resume: {
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
