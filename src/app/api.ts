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




/*
 * Base Layout
 **/
const BASE_LAYOUT_QUERY =`
  baseLayout (id: "1iFOyMTicZcSef7YrjHtjL") {
    ticker {
      text
    }
    header {
      logo {
        url
      }
    }
    navbar {
      navLinksCollection {
        items {
          label
          url
        }
      }
    }
  }
`;

export async function getBaseLayout(): Promise<any> {
	return await fetchGraphQL(
		`query {
			${BASE_LAYOUT_QUERY}
		}`,
	);
}


/*
 * Home page
 **/
const HOME_PAGE_QUERY =`
  page (id: "rhLi0zNgy12Ht8gqB9CnE") {
    heroNewestRelease {
      background {
        url
      }
      title {
        url
      }
      url
    }
    simpleImageBanner {
      media {
        url
      }
    }
    panelTrioCollection {
      items {
        background {
          url
        }
        titleImage {
          url
        }
        titleMaxWidth
        title
        type
        url
      }
    }
    simpleImageBanner2 {
      media {
        url
      }
    }
    heroWwfotm {
      background {
        url
      }
      backgroundVideo {
        url
      }
      title {
        url
      }
      subtitle {
        url
      } 
      url
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


/*
 * Books page
 **/

const BOOKS_PAGE_QUERY =`
  pageBooks (id: "1mli7mHlAuHu3g693QhPQC") {
    booksCollection {
			items {
        cover {
          url
        }
        background {
          url
        }
        title
        type
        synopsis {
          json
        }
        cta
        url
      }
    }
  }
`;

export async function getBooksPage(): Promise<any> {
	return await fetchGraphQL(
		`query {
			${BOOKS_PAGE_QUERY}
		}`,
	);
}
