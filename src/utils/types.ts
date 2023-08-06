export type SideNavProps = {
  openSideNav: boolean;
  setOpenSideNav: (open: boolean) => void;
};

export type StyledPropBool = {
  open: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
