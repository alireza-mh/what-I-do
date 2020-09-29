import fetch from "node-fetch";
const getGithubRepo = async (authToken) => {
  const query = `query {
		user(login:"alireza-mh") {
		pinnedItems(first: 5, types: [REPOSITORY, GIST]) {
		  totalCount
		  edges {
			node {
			  ... on Repository {
				name
				primaryLanguage{
					name
					color
				}
				updatedAt
				stargazers{
				  totalCount
				}
				descriptionHTML
				url
			  }
			}
		  }
		}
	  }
	}`;
  const rawGitData = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `token ${authToken}`,
    },
    body: JSON.stringify({ query }),
  });
  const result = await rawGitData.json();
  return result;
};

export async function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  const github = await getGithubRepo(process.env.GITHUB_TOKEN);
  res.end(JSON.stringify(github));
}
