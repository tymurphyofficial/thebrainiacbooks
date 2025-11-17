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
    videoHeroCampUfo {
      title {
        url
      }
      image {
        url
      }
      video {
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


/*
 * CYOA page
 **/

const CYOA_PAGE_QUERY =`
  pageCyoa (id: "6oWi9n7NtnR5jqwq184CIb") {
    bannerTop {
      url
    }
    pageBannersCollection {
      items {
        title
        banner {
          url
        }
      }
    }
  }
`;

export async function getCyoaPage(): Promise<any> {
	return await fetchGraphQL(
		`query {
			${CYOA_PAGE_QUERY}
		}`,
	);
}


/*
 * Retrieve all book panels
 **/

const BOOK_PANEL_QUERY = `
  releasePanelCollection (limit: 100) {
    items {
      title
      titleImage {
        url
      }
      background {
        url
      }
      type
      url
    }
  }
`;

export async function getBookPanels(): Promise<any> {
	return await fetchGraphQL(
		`query {
			${BOOK_PANEL_QUERY}
		}`,
	);
}