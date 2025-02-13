import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

export default async function handler(req, res) {
  try {
    // Make the GitHub API request
    const response = await fetch("https://api.github.com/graphql", {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
      },
      method: "POST",
      body: JSON.stringify({
        query: `
                {
                  user(login: "captainadorable") {
                    pinnedItems(first: 6, types: REPOSITORY) {
                      totalCount
                      nodes {
                        ... on Repository {
                          name
                          description
                          url
                          stargazerCount
                          primaryLanguage {
                            name
                            color
                          }
                        }
                      }
                    }
                  }
                }`,
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    // Parse the response
    const data = await response.json();

    // Send the data back to the client
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

