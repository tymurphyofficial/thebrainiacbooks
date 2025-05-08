export interface IHomePage {
  activeTheme: IActiveTheme;
  tickerBanner: ITickerBanner;
  heroBanner: IHeroBanner;
  nextNewRelease: INextNewRelease;
  bannerImage1: IImageBanner;
  bannerImage2: IImageBanner;
  videoBlock: IVideo;
  ctaSignupBlock: ICtaSignupBlock;
  reviewsCollection: IReviews;
  faqCollection: IFaqs;
  contact: IContact;
  author: IAuthor;
  footer: IFooter;
} 

export interface ILibrary {
  header: string;
  booksCollection: IBooksCollection;
} 

export interface IAsset {
  title: string;
  description: string;
  file: {
    url: string;
    details: {
      size: number;
    };
    fileName: string;
    contentType: string;
  };
}

export interface IBooksCollection {
  items: IBook[];
}

export interface IBook {
  entryTitle: string;
  type: string;
  title: string;
  description: string;
  url: string;
  genre: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  mediaCollection: {
    items: {
      description: string;
      url: string
    }[];
  };
  price: string;
  isMysteryBook?: boolean;
  releaseDate?: string;
}

interface IActiveTheme {
  value: string;
}

export interface ITickerBanner {
  copy: string;
  date: string;
}

export interface INextNewRelease {
  title: string;
  superTitle: string;
  description: string;
  cta: string;
  url: string;
  discountCopy: string;
  discountActive: boolean;
  image: {
    url: string;
    height: number;
    width: number;
  }
  saleSticker: {
    url: string;
  }
  promoCode: string;
}

export interface IImageBanner {
  image: {
    url: string;
  }
  imageMobile: {
    url: string;
  }
}

export interface IHeroBanner {
  backgroundImage: {
    url: string;
  }
  titleImage: {
    url: string;
  }
  figureImage: {
    url: string;
  }
  headerImage: {
    url: string;
  }
}

export interface IVideo {
  video: {
    url: string;
  };
  thumbnail: {
    url: string;
  };
  header: {
    url: string;
  };
  background: {
    url: string;
  };
  signup: ICtaSignupBlock;
  ref: any;
  libraryData?: ILibrary;
}

export interface ICtaSignupBlock {
  copy: string;
  cta: string;
  url: string;
  ref: any;
}

export interface IReviews {
  items: {
    copy: string;
    name: string;
  }[];
}

export interface IFaqs {
  items: {
    question: string;
    answer: string;
  }[];
}

export interface IContact {
  title: string;
  copy: string;
  cta: string;
}

export interface IFooter {
  copy: string;
  socialsCollection: {
    items: {
      url: string;
      icon: IIcon;
    }[]
  }
}

export interface IIcon {
  width: string;
  height: string;
  url: string;
}

export interface IAuthor {
  description: string;
  backgroundImage: {
    url: string;
  }
  headshot: {
    url: string;
  }
}