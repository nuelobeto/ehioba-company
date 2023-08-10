export type SideNavProps = {
  openSideNav: boolean;
  setOpenSideNav: (open: boolean) => void;
};

export type StyledPropBool = {
  open: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export type CarouselDataType = {
  image: string;
  mainText: string;
  subText: string;
};

export type CardDataType = {
  mainText: string;
  subText: string;
};

export type FooterLinksType = {
  text: string;
  link: string;
};
