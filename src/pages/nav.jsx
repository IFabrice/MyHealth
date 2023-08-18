import { Navbar, Group, Code, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { UserButton } from '../components/UserButton';
import { LinksGroup } from '../components/NavbarLinksGroup';
import { Logo } from '../components/Logo';
import { Link, Navigate } from 'react-router-dom';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge, link: '/'},
  {
    label: 'Menu',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Data Sharing', link: '/datasharing' },
      { label: 'Add Results', link: '/add-results' },
      { label: 'Messaging', link: '/messaging' },
      { label: 'Insights', link: '/insigts' },
      { label: 'Settings', link: '/settings' },
      { label: 'Logout', link: '/logout' },
    ],
  },
  { label: 'Test Results', icon: IconCalendarStats, link: '/add-results' },
  { label: 'Visits', icon: IconPresentationAnalytics, link: 'visits' },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));


function NavbarNested() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => (
    <Link
      {...item}
      key={item.label}
      to={item.link ? item.link : undefined}
      linkComponent={Link}
      onClick={() => navigate(item.link)}
    >  
      {item.icon && <item.icon size={24} />}
      {item.label}

    </Link>
    
  ));

  return (
    <Navbar height={680} width={{ sm: 230 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Logo width={rem(120)} />
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>
          {links}
        </div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          name="User"
          email="user@email.com"
        />
      </Navbar.Section>
    </Navbar>
  );
}

export default NavbarNested;
