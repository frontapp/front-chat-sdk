<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Apache 2.0 License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/frontapp/front-chat-sdk">
   <img src="https://github.com/frontapp/front-chat-sdk/raw/main/public/chatWidget.svg" alt="Logo" height="100">
  </a>
</p>

<h3 align="center">front-chat-sdk</h3>

<p align="center">
  A Typescript notebook for developing, prototyping, and sharing software.
  <br />
  <a href="https://dev.frontapp.com/docs/chat-sdk-reference"><strong>Explore the docs »</strong></a>
  <br />
  <br />
  <a href="https://front.com/">Front</a>
  ·
  <a href="https://github.com/frontapp/front-chat-sdk/issues">Report Bug</a>
  ·
  <a href="https://github.com/frontapp/front-chat-sdk/issues">Request Feature</a>
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#pre-requisites">Pre-requisites</a></li>
        <li><a href="#install-and-run">Install and Run</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/frontapp/front-chat-sdk/raw/main/public/screenshotDark.png">
    <img src="https://github.com/frontapp/front-chat-sdk/raw/main/public/screenshot.png" alt="front-chat-sdk Screen Shot" height="480">
  </picture>
</p>

This repository contains examples to demonstrate how Front Chat can be launched on a variety of web pages. The core example demonstrates how the `useFrontChat` hook can be applied to quickly launch a chat widget in a React application, and there is also an example of using the generic `boot` function to launch Front Chat on any kind of web page.

To learn more about Front Chat, check out [this article](https://help.front.com/en/articles/2062) from Front.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Install and Run

1. Clone the repo
   ```sh
   git clone https://github.com/frontapp/front-chat-sdk.git
   ```
2. Install packages
   ```sh
   npm install
   ```
3. Run the example application
   ```sh
   npm run dev
   ```

After the last command, the example application can be accessed at http://localhost:5173/

<!-- USAGE EXAMPLES -->

### Usage

There are four helpers provided in this repository, and each of them is used in the [examples](https://github.com/frontapp/front-chat-sdk/tree/main/examples) directory.

#### Quick-start Helpers

- [`initialize`](https://github.com/frontapp/front-chat-sdk/blob/main/lib/helpers/initialize/index.ts)
  - An async function that boots and initializes a Front Chat widget. The returned `Promise` is only resolved once the chat widget application is fully running and initialized inside its iframe.
- [`useFrontChat`](https://github.com/frontapp/front-chat-sdk/blob/main/lib/hooks/use-front-chat/index.ts)
  - A React hook that boots and initializes a Front Chat widget while adhering to the React component lifecycle.

#### Advanced Helpers

- [`boot`](https://github.com/frontapp/front-chat-sdk/blob/main/lib/helpers/boot/index.ts)
  - An async function that boots the Front Chat widget and returns helpers to interact with the Front Chat SDK. The returned `Promise` is only resolved once the chat widget application is fully running inside its iframe.
- [`useFrontChatBoot`](https://github.com/frontapp/front-chat-sdk/blob/main/lib/hooks/use-front-chat-boot/index.ts)
  - A React hook that boots the Front Chat widget and provides helpers to initialize the application while adhering to the React component lifecycle.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Although this package is maintained by Front, feedback and contributions are **greatly appreciated**. Feel free to open an issue if you have any suggestions as to how this repository and its examples could be improved.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Front Support - [https://help.front.com/en/contact-us](https://help.front.com/en/contact-us)

Please mention that you are experiencing issues with Front Chat or `front-chat-sdk`, so that they can direct you to a member of the Live Chat team.

Project Link: [https://github.com/frontapp/front-chat-sdk](https://github.com/frontapp/front-chat-sdk)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the Apache 2.0 License. See [`LICENSE`][license-url] for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/frontapp/front-chat-sdk.svg?style=for-the-badge
[contributors-url]: https://github.com/frontapp/front-chat-sdk/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/frontapp/front-chat-sdk.svg?style=for-the-badge
[forks-url]: https://github.com/frontapp/front-chat-sdk/network/members
[stars-shield]: https://img.shields.io/github/stars/frontapp/front-chat-sdk.svg?style=for-the-badge
[stars-url]: https://github.com/frontapp/front-chat-sdk/stargazers
[issues-shield]: https://img.shields.io/github/issues/frontapp/front-chat-sdk.svg?style=for-the-badge
[issues-url]: https://github.com/frontapp/front-chat-sdk/issues
[license-shield]: https://img.shields.io/github/license/frontapp/front-chat-sdk.svg?style=for-the-badge
[license-url]: https://github.com/frontapp/front-chat-sdk/blob/master/LICENSE
