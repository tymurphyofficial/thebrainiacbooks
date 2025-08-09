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
  page (id: "rhLi0zNgy12Ht8gqB9CnE") {
    ticker {
      text
      color
    }
    header {
      logo {
        url
      }
    }
    navBar {
      navLinksCollection {
        items {
          label
          url
        }
      }
    }
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
