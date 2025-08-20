export interface IHomePage {
  ticker: ITicker;
  header: IHeader;
  navBar: INavBar;
  heroNewestRelease: IHeroNewestRelease;
  simpleImageBanner: ISimpleImageBanner;
  panelTrioCollection: IBookTrioCollection;
  simpleImageBanner2: ISimpleImageBanner;
  heroWwfotm: IHeroWwfotm;
} 

export interface ITicker {
  text: string;
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

export interface IBookTrioCollection {
  items: IBookTile[];
}

export interface IBookTile {
  background: {
    url: string;
  }
  titleImage: {
    url: string;
  }
  titleMaxWidth: string;
  title: string;
  type: string;
  url: string;
}

export interface IHeroWwfotm {
  background: {
    url: string;
  }
  backgroundVideo: {
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

export interface IBookPanel {
  cover: {
    url: string;
  }
  background: {
    url: string;
  }
  title: string;
  type: string;
  synopsis: {
    json: any;
  };
  cta: string;
  url: string;
}

export interface IBannerLarge {
  title: string;
  banner: {
    url: string;
  }
}