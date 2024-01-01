# Tunnelbot UI

![Deploy on merge](https://github.com/Farmers-and-Robots/tunnelbot-ui/actions/workflows/deploy-on-merge.yml/badge.svg)
![Test on PR](https://github.com/Farmers-and-Robots/tunnelbot-ui/actions/workflows/test-on-pr.yml/badge.svg)

Tunnelbot is a webapp to provide remote control of networked devices for farmers growing in tunnels.

You can read more about tunnels at the website for
the [National Resources Conservation Service](https://www.nrcs.usda.gov/programs-initiatives/eqip-high-tunnel-initiative)
. While some automation is available for tunnels, it is generally focused on big farms or greenhouses rather than small
farms. Available systems did not meet farmer requirements for cost or availability.

During Farmers and Robots Summer farm tour in 2022, farmers requested an affordable mobile app to help manage devices,
especially rolling up the sides of the tunnel. This was prototyped with two senior capstone projects at the University
of
Wisconsin at Platteville during the 2021-2022 school year. It is now in the pipeline to become a production application.

## Prerequisites

This repo has the tunnelbot frontend/ui.

Before you begin, ensure you have met the following requirements:

* You have installed the correct version of `npm`
* You have a `Linux` machine. The code may run on Windows or Mac, but it's not officially supported.

## Running Tunnelbot

To run Tunnelbot, follow these steps:

Clone the repo:

```
git clone git@github.com:Farmers-and-Robots/tunnelbot-ui.git
```

Install dependencies just like we do in CI/CD:

```
npm ci && npm run build
```

Start the server and you can see it on port 3000.

```
npm start
```

Note this project is currently in development, and firebase auth is enabled.

## Contributing to Tunnelbot

Please [contact us at Farmers and Robots](https://www.farmersandrobots.com/contact) if you would like to contribute.
Tunnelbot is in early stages and we're working towards a better demo for investors and farmers. You can see the project
roadmap here: [Tunnelbot Project](https://github.com/orgs/Farmers-and-Robots/projects/4)

With approval, you can contribute to Tunnelbot with these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation
on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
.

## Contributors

Thanks to the two teams at UWP who worked on Tunnelbot as their senior capstone! Also to the farmers who have generously
taken the time to help us define requirements.

## Contact

If you want to contact me you can reach me at [Farmers and Robots](https://www.farmersandrobots.com/contact)

## License

This project uses the following
license: [Apache License 2.0](https://github.com/Farmers-and-Robots/tunnelbot-ui/blob/main/LICENSE).

## About the Code

When I first started learning about tunnel culture, it was through some of the smallest farms. Farms with only a single
acre in the Midwest often have a tunnel - it helps extend the season significantly. I was not immediately thinking
tunnel automation would be a viable or original product. However, after two senior capstone projects at UWP, I had done
enough of the market research to understand the value.

Personally, I have not been writing frontend for more than a decade. I took on the task of writing a UI for the
second semester so that the demo/POC would have authentication - our test farm is a real farm and I did not want to
publicly expose their devices!

I have pitched for investors a few times on this project and decided a better demo would be to our advantage. I began a
sprint to make Tunnelbot integration ready with RBAC and a few basic examples in the winter of 2022. I have not
previously worked in React and am figuring it out as I go. Fwiw, I'm really enjoying the state of frontend development
these days, and learning quite a lot but it's a WIP for sure. Things on my mind: how to organize the pieces and how to
test? Anyhow, I'm doing my best to keep it simple while I learn all the new things; don't take the code too seriously.
It's all about getting something out to show while I try to raise investment.