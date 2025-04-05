import fs from "fs";
import path from "path";
import dotenv from "dotenv";

interface GitHubCommitAuthor {
  name: string;
  email: string;
  date: string;
}

interface GitHubCommitDetails {
  author: GitHubCommitAuthor;
  committer: GitHubCommitAuthor;
  message: string;
  tree: {
    sha: string;
    url: string;
  };
  url: string;
  comment_count: number;
  verification: {
    verified: boolean;
    reason: string;
    signature: string | null;
    payload: string | null;
    verified_at: string | null;
  };
}

interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type?: string;
  site_admin: boolean;
}

interface GitHubCommit {
  sha: string;
  node_id: string;
  commit: GitHubCommitDetails;
  url: string;
  html_url: string;
  comments_url: string;
  author: GitHubUser | null;
  committer: GitHubUser | null;
  parents: {
    sha: string;
    url: string;
    html_url: string;
  }[];
}

// Load environment variables
dotenv.config({ path: ".env.local" });

const GITHUB_TOKEN = process.env.VITE_GITHUB_TOKEN;
const DATA_DIR = path.join(process.cwd(), "public", "data");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Import the content.json data
const content = JSON.parse(fs.readFileSync("src/data/projects.json", "utf-8"));

async function fetchAndSaveCommits() {
  for (const milestone of content) {
    const { owner, repo, branch } = milestone;
    const filename = `${owner}-${repo}-${branch}-commits.json`;
    const filePath = path.join(DATA_DIR, filename);

    console.log(`Fetching commits for ${owner}/${repo}/${branch}...`);

    try {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=100`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        },
      );

      let data: GitHubCommit[] = await response.json();

      if (response.ok) {
        // Filter out commits by Ryan Nguyen
        data = data.filter(
          (commit) =>
            commit.commit.committer.email == "th.nguyen.developer@gmail.com",
        );
        console.log(
          `Filtered out commits by Ryan Nguyen, ${data.length} commits remaining`,
        );
      }

      if (response.ok) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`Saved ${data.length} commits to ${filePath}`);
      } else {
        console.error(`Error fetching commits: ${data}`);
      }

      // Respect GitHub's rate limits by waiting between requests
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Error processing ${owner}/${repo}/${branch}:`, error);
    }
  }
}

async function fetchAndSaveContribution() {
  for (const milestone of content) {
    const { owner, repo, branch } = milestone;
    const filename = `${owner}-${repo}-${branch}-contribution.json`;
    const filePath = path.join(DATA_DIR, filename);
    console.log(`Fetching contributions for ${owner}/${repo}/${branch}...`);
    try {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/stats/contributors`,
        {
          headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        },
      );
      let data = await response.json();
      if (response.status === 202) {
        console.log("GitHub is computing statistics. Status 202 received.");
        // GitHub may return 202 when statistics are being computed
        // You might want to implement a retry mechanism here
      }

      if (response.ok) {
        // Filter only for contributions from Th-nguyen-Dev
        data = data.filter(
          (contribution: { author: { login: string } }) =>
            contribution.author.login === "Th-nguyen-Dev",
        );
        console.log(`Found ${data.length} contributions by Th-nguyen-Dev`);
      } else {
        console.error(`Error fetching contributions: ${data}`);
      }

      if (response.ok) {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`Saved ${data.length} contribution to ${filePath}`);
      } else {
        console.error(`Error fetching contributions: ${data}`);
      }
      // Respect GitHub's rate limits by waiting between requests
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Error processing ${owner}/${repo}/${branch}:`, error);
    }
  }
}

fetchAndSaveCommits().then(() => {
  console.log("All commits fetched and saved.");
});

fetchAndSaveContribution().then(() => {
  console.log("All commits fetched and saved.");
});
