import './rootStyles.css';

export const metadata = {
  title: 'Bug Tracker',
  description: 'An app that will track inputted bugs in a program.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{padding: 0, margin:0}}>{children}</body>
    </html>
  );
};
