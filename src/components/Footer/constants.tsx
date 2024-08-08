import { SvgFacebook, SvgInstagram, SvgTwitter, SvgYoutube } from '@/components/Svgs';

const SOCIAL_LIST = [
  {
    key: 'facebook',
    href: '/',
    Icon: SvgFacebook,
  },
  {
    key: 'twitter',
    href: '/',
    Icon: SvgTwitter,
  },
  {
    key: 'instagram',
    href: '/',
    Icon: SvgInstagram,
  },
  {
    key: 'youtube',
    href: '/',
    Icon: SvgYoutube,
  },
];

const LINK_LIST = [
  {
    key: 'life',
    href: '/',
    label: 'life',
  },
  {
    key: 'business',
    href: '/',
    label: 'business',
  },
  {
    key: 'travel',
    href: '/',
    label: 'travel',
  },
  {
    key: 'car',
    href: '/',
    label: 'car',
  },
  {
    key: 'health',
    href: '/',
    label: 'health',
  },
];

export { SOCIAL_LIST, LINK_LIST };
