/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Arrcus, Inc.',
    position: 'Network Software Engineering Intern',
    url: 'https://arrcus.com/',
    startDate: '2022-06-05',
    endDate: '2022-08-18',
    summary: `Arrcus is a multi-cloud networking software. The company offers ArcOS, a network operating system that allows teams to scale up their network, and
              ArcIQ, a network visibility and analytics platform that provides networking professionals with real-time, deep views of the networks and devices
              with insights for incident management and troubleshooting.`,
    highlights: [
      'Involved in building ArcOS - An OS for network infrastructure in Data Center, Cloud, and 5G.\n',
      `Extended ”show BGP neighbor” command to incorporate dynamic BGP peers by implementing Operational Data Store 
       in ConfD and implemented show command for EVPN-VPWS tunnel configurations using YANG, ConfD and C.`,
      `Designed and implemented process monitoring tool to analyze resource utilization using pidfd open, eBPF, LTTng.
        Metrics referred file descriptors, memory usage, power consumption, and thread counts, enabling efficient resource
        management and rapid troubleshooting using gdb.`,
    ],
  },
  {
    name: 'West Agile Labs (now Veltris)',
    position: 'Associate Software Development Engineer',
    url: 'https://www.veltris.com/',
    startDate: '2020-01-07',
    endDate: '2022-04-30',
    summary: `West Agile Labs is a Digital Product Agency based in San Francisco, offering design,
               development and consulting services to both startups and enterprises. I Worked for building software for <a href="https://www.trycents.com/">Cents</a>,
              The most integrated laundry and dry cleaning business management system in the industry.`,
    highlights: [
      `Fullstack developer for TryCents Software: Designed and developed a robust application using agile methodology and 
       followed test-driven development to handle over a million users.`,
      `Designed UI components using Figma and implemented frontend using ReactJs, React-Native and Redux
      frameworks. Implemented Class and Functional Components along with lazy loading.`,
      `Refactored legacy code to ES6 and optimized the search queries, significantly minimizing the average response time.
      Implemented backend services using NodeJs, ObjectionJs & Sequelize frameworks, and ElasticSearch following
      pipeline pattern approach.`,
      `Integrated with the APIs of market-leading third-party applications like Twilio, Doordash, Uber, Stripe, and Google to
      implement the delivery functionality.`,
    ],
  },
  {
    name: 'Neiman Marcus',
    position: 'Freelance Developer',
    url: 'https://www.neimanmarcus.com/',
    startDate: '2021-09-01',
    endDate: '2022-07-30',
    summary: `Neiman Marcus Group, Inc. is an American integrated luxury retailer headquartered in Dallas,
              Texas, which owns Neiman Marcus, Bergdorf Goodman, Horchow, and Last Call. I worked for Neiman Marcus through <a href="https://www.gbitinc.com/"> GBIT </a>`,
    highlights: [
      'Leveraged serverless architecture, including several AWS services with deployment through Jenkins & Terraform',
      `This infrastructure supported the processing of 3 million records in a single instance and employed Glue and Lambda
      jobs to harness Apache Spark for high-speed data processing.`,
    ],
  },
];

export default work;
