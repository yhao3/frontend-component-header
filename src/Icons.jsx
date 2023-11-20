import React from 'react';

export const MenuIcon = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    version="1.1"
    {...props}
  >
    <rect fill="currentColor" x="2" y="5" width="20" height="2" />
    <rect fill="currentColor" x="2" y="11" width="20" height="2" />
    <rect fill="currentColor" x="2" y="17" width="20" height="2" />
  </svg>
);

export const AvatarIcon = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    version="1.1"
    {...props}
  >
    <path
      d="M4.10255106,18.1351061 C4.7170266,16.0581859 8.01891846,14.4720277 12,14.4720277 C15.9810815,14.4720277 19.2829734,16.0581859 19.8974489,18.1351061 C21.215206,16.4412566 22,14.3122775 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,14.3122775 2.78479405,16.4412566 4.10255106,18.1351061 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,13 C9.790861,13 8,11.209139 8,9 C8,6.790861 9.790861,5 12,5 C14.209139,5 16,6.790861 16,9 C16,11.209139 14.209139,13 12,13 Z"
      fill="currentColor"
    />
  </svg>
);

export const CaretIcon = (props) => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    version="1.1"
    {...props}
  >
    <path
      d="M7,4 L7,8 L11,8 L11,10 L5,10 L5,4 L7,4 Z"
      fill="currentColor"
      transform="translate(8.000000, 7.000000) rotate(-45.000000) translate(-8.000000, -7.000000) "
    />
  </svg>
);

export const DashboardIcon = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    version="1.1"
    {...props}
  >
    <path
      d="M7 1V19M17 1H3C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V3C19 1.89543 18.1046 1 17 1Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ProfileIcon = (props) => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    version="1.1"
    {...props}
  >
    <path
      d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AccountIcon = (props) => (
  <svg
    width="24"
    height="20"
    viewBox="0 0 24 20"
    fill="none"
    version="1.1"
    {...props}
  >
    <path
      d="M4 19V12M4 8V1M12 19V10M12 6V1M20 19V14M20 10V1M1 12H7M9 6H15M17 14H23"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LogoutIcon = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    version="1.1"
    {...props}
  >
    <path
      d="M7 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H7M14 15L19 10M19 10L14 5M19 10H7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
