import axios from "axios";


export const SocialProfileStatus = [
  {
    title: 'Posts',
    active: 1_908,
  },
  {
    title: 'Followers',
    active: '34.0k',
  },
  {
    title: 'Following',
    active: 897,
  },
];

export const SocialWidgetData = [
  {
    title: 'Facebook',
    image: '1.png',
    gros: 22.9,
    total: 12_098,
    subTitle: 'Followers',
    status: 'success',
    chart: {
      color: ['var(--theme-deafult)'],
      series: [78],
    },
  },
  {
    title: 'Instagram',
    image: '2.png',
    gros: 27.4,
    total: 15_080,
    subTitle: 'Followers',
    status: 'success',
    chart: {
      color: ['#FFA941'],
      series: [70],
    },
  },
  {
    title: 'Twitter',
    image: '3.png',
    gros: 14.09,
    total: 12_564,
    subTitle: 'Followers',
    status: 'success',
    chart: {
      color: ['#57B9F6'],
      series: [50],
    },
  },
];

export const SocialWidgetDataWidgetPage = [
  {
    title: 'Facebook',
    image: '1.png',
    gros: 22.9,
    total: 12_098,
    subTitle: 'Followers',
    status: 'success',
    chart: {
      color: ['var(--theme-deafult)'],
      series: [78],
    },
  },
  {
    title: 'Instagram',
    image: '2.png',
    gros: 27.4,
    total: 15_080,
    subTitle: 'Followers',
    status: 'success',
    chart: {
      color: ['#FFA941'],
      series: [70],
    },
  },
  {
    title: 'Twitter',
    image: '3.png',
    gros: 14.09,
    total: 12_564,
    subTitle: 'Followers',
    status: 'success',
    chart: {
      color: ['#57B9F6'],
      series: [50],
    },
  },
  {
    title: 'Youtube',
    image: '4.png',
    gros: 14.09,
    total: 68_954,
    subTitle: 'Followers',
    status: 'secondary',
    chart: {
      color: ['var(--theme-secondary)'],
      series: [80],
    },
  },
];

export const SmallWidgetsData = [
  {
    title: 'Photo Clicks',
    total: 76,
    gros: 72.9,
    chart: {
      series: [
        {
          name: 'photo',
          data: [10, 12, 41, 36, 60, 58],
        },
      ],
      color: '#54BA4A',
    },
  },
  {
    title: 'Link Clicks',
    total: 89,
    gros: 79.9,
    chart: {
      series: [
        {
          name: 'photo',
          data: [10, 12, 41, 36, 60, 58],
        },
      ],
      color: 'var(--theme-secondary)',
    },
  },
];



export const columns = ['Form Name', 'Appraisal Period', 'Due Date', 'Action' , 'Status'];
// export const rows = {
//   'Form Name': data.name,
//   'Appraisal Period': data.period,
//   'Due Date': data.dueDate,
//   'Action': data.action,
//   'Status': data.status,
// }

export const AllCampaignsTable = {
  header: ['Form Name', 'Appraisal Period', 'Due Date', 'Action' , 'Status'],
  body: [
    {
      period: 'APR-MAY-JUNE 2024',
      campaign: 'Perfomance Appraisal',
      subTitle: '10 minutes ago',
      status: 'Active',
      date: 'JUNE'
    },
    {
      period: 'APR-MAY-JUNE 2024',
      campaign: 'Salary Appraisal',
      subTitle: '19 minutes ago',
      status: 'Active',
      date: 'JUNE'
    },
    {
      period: 'APR-MAY 2024',
      campaign: 'Perfomance Appraisal',
      subTitle: '3 months ago',
      status: 'Completed',
      date: 'MAY'
    },
    {
      period: 'JAN 2024',
      campaign: 'Salary Appraisal',
      subTitle: '6 months ago',
      status: 'Completed',
      date: 'JAN'
    },
  ],
};
