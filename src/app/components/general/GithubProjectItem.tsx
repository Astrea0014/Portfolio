import Image from "next/image";

export async function GithubProjectItem({ repositoryName }: Readonly<{ repositoryName: `${string}/${string}` }>) {
  // const data = await fetch("https://api.github.com/repos/" + repositoryName, {
  //   method: "GET",
  //   headers: {
  //     "Accept": "application/vnd.github+json",
  //     "X-Github-Api-Version": "2022-11-28"
  //   }
  // }).then(response => {
  //   if (!response.ok)
  //     throw new Error("Failed to fetch details for repository " + repositoryName);

  //   return response.json();
  // });

  const data: any = {
    "name": "Portfolio",
    "owner": {
      "login": "Astrea0014",
      "avatar_url": "https://avatars.githubusercontent.com/u/53941412?v=4",
    },
    "html_url": "https://github.com/Astrea0014/Portfolio",
    "description": "My portfolio for my online presence.",
    "contributors_url": "https://api.github.com/repos/Astrea0014/Portfolio/contributors",
    "created_at": "2024-05-05T23:52:56Z",
    "size": 4469,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "JavaScript",
    "forks_count": 0,
    "open_issues_count": 0,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "network_count": 0,
    "subscribers_count": 1
  };

  return (
    <article className="w-80 h-40 p-4 bg-[#111] text-white grid grid-rows-2">
      <div className="flex items-center">
        <Image src={data.owner.avatar_url} width={50} height={50} alt={`Avatar of GitHub user ${data.owner.login}`} className="h-fit rounded-full"/>
        <div className="ml-3">
          <h2 className="text-4xl">{data.name}</h2>
          <p className="text-xs text-gray-400">By {data.owner.login}</p>
        </div>
      </div>

      <div className="grid grid-rows-2">
        <p>{data.description}</p>

        <div className="mt-auto text-sm flex flex-row">
          {/* I AM TOO LAZY TO IMPORT SVG ICONS SORRY */}
          <p>{data.license.spdx_id}</p>
        </div>
      </div>
    </article>
  );
}