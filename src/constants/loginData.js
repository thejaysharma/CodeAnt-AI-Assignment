import GithubIMG from "@assets/Icons/github.png";
import BitbucketIMG from "@assets/Icons/bitbucket.png";
import AzureIMG from "@assets/Icons/azure.png";
import GitLabIMG from "@assets/Icons/gitlab.png";
import SSOIMG from "@assets/Icons/key.svg";


export const toogleOptions = ["SAAS", "Self Hosted"];

export const loginSAASOptions = [
    {
        name: "Sign in with Github",
        icon: GithubIMG,
    },
    {
        name: "Sign in with Bitbucket",
        icon: BitbucketIMG,
    },
    {
        name: "Sign in with Azure Devops",
        icon: AzureIMG,
    },
    {
        name: "Sign in with GitLab",
        icon: GitLabIMG,
    },
];

export const loginSelfHostedOptions = [
    {
        name: "Self Hosted GitLab",
        icon: GitLabIMG,
    },
    {
        name: "Sign in with SSO",
        icon: SSOIMG,
    }
]