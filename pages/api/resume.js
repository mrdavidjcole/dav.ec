export default (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  const seniorSoftwareEngineerBullets = [
    "Created channel episode view for audio media.",
    "Created <a href='https://wistia.com/learn/product-updates/pick-up-where-you-paused-with-resumable-video'>resumable video and resumable channels</a> features in partnership with designers and engineering teammates.",
    "Improved search engine optimization of the video player by making customer-defined chapters map to structured data for Google's Key Moments video search feature."
  ];

  const seniorSoftwareEngineerSummary = "things";

  const seniorSoftwareEngineerWistia = {
    bullets: seniorSoftwareEngineerBullets,
    company: "Wistia",
    location: "Fairfield, CT (Remote)",
    startDate: "2020-3-1",
    startDatePretty: "Mar 2020",
    summary: seniorSoftwareEngineerSummary,
    team: "Player Team",
    title: "Senior Software Engineer"
  };

  const engineerTwoBullets = [
    "Lead developer on the <a href='https://wistia.com/learn/product-updates/introducing-wistia-channels'>Wistia Channels</a> embed UI. Built a responsive, embeddable media library that displays customers' video series in a beautiful, accessible interface, and optimizes their content for search.",
    "<a href='https://wistia.com/learn/product-updates/wistias-video-player-just-got-more-accessible'>Accessibility Checklist</a>. Extended the Customize panel (a React application for configuring the Wistia video player) to include a layer that indicates whether various aspects of the video player’s configuration meet WCAG 2.1 AA web accessibility requirements.",
    "Popover V3. Created a new version of the Popover embed type (a lightbox modal interface). Dramatically improved performance (initialization and interactivity peformance in Popover V2 would degrade as the number of embeds increased, while V3 scales practically infinitely).",
    "Player maintenance. Upgraded from Preact 8.2.7 to Preact X."
  ];

  const engineerTwoSummary =
    "On the player team we are primarily responsible for the parts of Wistia that customers embed onto their websites, and the tools for configuring those embeds. This includes the Wistia video player, which is used tens of millions of times per day.";

  const engineerTwoWistia = {
    bullets: engineerTwoBullets,
    company: "Wistia",
    location: "Fairfield, CT (Remote)",
    startDate: "2019-4-1",
    startDatePretty: "Apr 2019",
    summary: engineerTwoSummary,
    team: "Player Team",
    title: "Engineer II"
  };

  const engineerOneWistia = {
    bullets: [
      "Along with my two fellow engineers on the player team, rebuit the Customize panel in React, and in such a way that made it much more extensible (by engineers at Wistia and 3rd party developers) and maintainable.",
      'Created the <a href="https://wistia.com/learn/product-updates/new-thumbnail-editor">Thumbnail Editor</a>, a tool that lets customers create custom image thumbnails, looping video thumbnails, and responsive text overlays'
    ],
    company: "Wistia",
    location: "Cambridge, MA",
    startDate: "2018-4-1",
    startDatePretty: "Apr 2018",
    summary:
      "After several years of building solutions with the player API, helping customers use the player on their websites, and fixing bugs in the player on the side, I officially joined the Player Team as a software engineer.",
    team: "Player Team",
    title: "Engineer I"
  };

  const supportEngineerTwoBullets = [
    "Created the <a href='https://trello.com/power-ups/5a4bbf3ba12034aaa1f2175a/wistia'>Wistia Trello Power-Up</a>.",
    "Identified bugs in production, researched them, logged them in GitHub Issues, and (in some cases) fixed them.",
    "Created example applications on Glitch to help customers get started with Wistia's APIs, like the <a href='https://wistia-starter.glitch.me/'>Wistia Starter App</a>. See more examples at <a href='https://glitch.com/wistia'>glitch.com/wistia</a>.",
    "Helped Customer Champions solve tricky technical customer support questions.",
    "Ran workshops to increase the technical know-how of support and sales team members, like the <a href='https://glitch.com/edit/#!/build-a-video-player-workshop?path=README.md:1:0'>Build A Video Player workshop</a>."
  ];

  const supportEngineerTwoWistia = {
    bullets: supportEngineerTwoBullets,
    company: "Wistia",
    location: "Cambridge, MA",
    startDate: "2017-2-1",
    startDatePretty: "Feb 2017",
    summary: "",
    team: "Customer Happiness",
    title: "Support Engineer II"
  };

  const productManagerBullets = [
    "Worked with engineers, designers, and marketers to build and launch <a href='https://wistia.com/chrome'>Wistia for Chrome</a>, Wistia's first Chrome extension, which included integrations with Gmail, WordPress, HelpScout, Slack, Shopify, and Medium.",
    "Worked with an engineer and designer to create the Wistia Uploader. Wrote the documentation and built the <a href='https://wistia.com/support/developers/uploader'>demos</a>.",
    "Worked with yet another amazing group of engineers and designers to create the <a href='https://wistia.com/doc/chooser'>Wistia Chooser component</a>, and the <a href='https://www.zendesk.com/apps/support/wistia/'>Wistia Zendesk integration</a>."
  ];

  const productManagerWistia = {
    bullets: productManagerBullets,
    company: "Wistia",
    location: "Cambridge, MA",
    startDate: "2015-12-1",
    startDatePretty: "Dec 2015",
    summary: "",
    team: "Platform Team",
    title: "Product Manager"
  };

  const customerChampionBullets = [
    "Helped customers solve technical and non-technical problems, large and small.",
    "Helped fellow Customer Champions at Wistia, and folks from across the Wistia team, improve their product knowledge and help customers get their problems solved.",
    "Documented issues to help our engineering team know what needed to be fixed.",
    "Wrote a bunch of the documentation at <a href='https://wistia.com/support'>wistia.com/support</a>."
  ];

  const customerChampionWistia = {
    bullets: customerChampionBullets,
    company: "Wistia",
    location: "Cambridge, MA",
    startDate: "2013-9-30",
    startDatePretty: "Sep 2013",
    summary: "",
    team: "Customer Happiness",
    title: "Customer Champion"
  };

  const nowStub = {
    bullets: [],
    startDate: "2020-1-2",
    startDatePretty: "Now"
  };

  const jobs = [
    nowStub,
    seniorSoftwareEngineerWistia,
    engineerTwoWistia,
    engineerOneWistia,
    supportEngineerTwoWistia,
    productManagerWistia,
    customerChampionWistia
  ];

  const resume = {
    jobs
  };

  res.end(JSON.stringify(resume));
};
