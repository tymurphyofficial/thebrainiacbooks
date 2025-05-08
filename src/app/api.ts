async function fetchGraphQL(query: string, preview = false): Promise<any> {
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${
					preview
						? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
						: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
				}`,
			},
			body: JSON.stringify({ query }),
			next: {},
		},
	).then((response) => response.json());
}

const HOME_PAGE_QUERY =`
  page (id: "6py6WLIJUmdcIaco1Jc1Y2") {
    activeTheme {
      value
    }
    tickerBanner {
      copy,
      date, 
    }
    heroBanner {
      backgroundImage {
        url
      }
      titleImage {
        url
      }
      figureImage {
        url
      }
      headerImage {
        url
      }
    }
    nextNewRelease {
      title,
      superTitle,
      description,
      cta,
      url,
      discountCopy,
      discountActive,
      image {
        url
        width
        height
      }
      saleSticker {
        url
      }
      promoCode
    }
    bannerImage1 {
      image {
        url
      }
      imageMobile {
        url
      }
    }
    videoBlock {
      video {
        url
      }
      thumbnail {
        url
      }
      header {
        url
      }
      background {
        url
      }
    }
    ctaSignupBlock {
      copy
      cta
      url
    }
    reviewsCollection {
      items {
        copy
        name
      }
    }
    faqCollection {
      items {
        question
        answer
      }
    }
    author {
      description
      backgroundImage {
        url
      }
      headshot {
        url
      }
    }
    contact {
      title
      copy
      cta
    }
    footer {
      copy
      socialsCollection {
        items {
          url
          icon {
            width
            height
            url
          }
        }
      }
    }
  }
`;

const LIBRARY_QUERY = `
	library(id: "2VVEK7ki7JYtPMc2koYWHX") {
		header
    booksCollection {
      items {
        entryTitle
        type
        title
        description
        url
        genre
        image {
          url
          width
          height
        }
        mediaCollection {
          items {
            description
            url
          }
        }
        price,
        isMysteryBook,
        releaseDate
      }
    }
  }
`;

export async function getHomePage(): Promise<any> {
	return await fetchGraphQL(
		`query {
			${HOME_PAGE_QUERY}
		}`,
	);
}

export async function getLibrary(): Promise<any> {
	return await fetchGraphQL(
		`query {
			${LIBRARY_QUERY}
		}`,
	);
}