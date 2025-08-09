export interface IHomePage {
  ticker: ITicker;
  header: IHeader;
  navBar: INavBar;
  heroNewestRelease: IHeroNewestRelease;
  simpleImageBanner: ISimpleImageBanner;
  panelTrioCollection: IPanelTrioCollection;
  simpleImageBanner2: ISimpleImageBanner;
  heroWwfotm: IHeroWwfotm;
} 

export interface ITicker {
  text: string;
  color?: string;
}

export interface IHeader {
  logo: IMedia;
}

export interface INavBar {
  navLinksCollection: {
    items: INavLink[];
  }
}

export interface IHeroNewestRelease {
  background: {
    url: string;
  }
  title: {
    url: string;
  }
  url: string;
}

export interface ISimpleImageBanner {
  media: {
    url: string;
  }
}

export interface IPanelTrioCollection {
  items: IPanel[];
}

export interface IPanel {
  background: {
    url: string;
  }
  titleImage: {
    url: string;
  }
  title: string;
  type: string;
  url: string;
}

export interface IHeroWwfotm {
  background: {
    url: string;
  }
  title: {
    url: string;
  }
  subtitle: {
    url: string;
  } 
  url: string;
}



interface IMedia {
  url: string;
}

interface INavLink {
  label: string;
  url: string;
}