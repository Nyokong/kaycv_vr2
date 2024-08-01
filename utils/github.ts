
  import axios from 'axios';

  const GITHUB_API_URL = 'https://api.github.com';
  const USERNAME = 'Nyokong';
  
  export const fetchAllCommits = async () => {
    try {
      const response = await axios.get(`${GITHUB_API_URL}/users/${USERNAME}/events`);
      const pushEvents = response.data.filter((event: any) => event.type === 'PushEvent');
      const commits = pushEvents.flatMap((event: any) => event.payload.commits.map((commit: any) => ({
        sha: commit.sha,
        message: commit.message,
        author: commit.author,
      })));
      return commits;
    } catch (error) {
      console.error('Error fetching commits:', error);
      return [];
    }
  };
  