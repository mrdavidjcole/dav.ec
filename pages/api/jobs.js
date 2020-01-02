export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  const engineerTwobullets = [
    "Accessibility Checklist. Extended the Customize panel (a React application for configuring the Wistia video player) to include a layer that indicates whether various aspects of the video player’s configuration meet WCAG 2.1 AA web accessibility requirements.",
    "Popover V3. Created a new version of the Popover embed type (a lightbox modal interface). Dramatically improved performance (initialization and interactivity peformance in Popover V2 would degrade as the number of embeds increased, while V3 scales practically infinitely).",
    "Wistia Channels.",
    "Player maintenance. Upgraded from Preact 8.2.7 to Preact X"
  ];

  const engineerTwosummary = "On the player team we are primarily responsible for the parts of Wistia that customers embed onto their websites, and the tools for configuring those embeds. This includes the Wistia video player, which is used tens of millions of times per day."

  const engineerTwoWistia = {
    bullets: engineerTwobullets,
    company: "Wistia",
    location: "Fairfield, CT (Remote)",
    startDate: "2019-4-1",
    startDatePretty: "Apr 2019",
    summary: engineerTwosummary,
    team: "Player Team",
    title: "Engineer II",
  }

  const engineerOneWistia = {
    bullets: [],
    company: "Wistia",
    location: "Cambridge, MA",
    startDate: "2018-4-1",
    startDatePretty: "Apr 2018",
    summary: "",
    team: "Player Team",
    title: "Engineer I",
  };

  const supportEngineerTwoWistia = {
    bullets: [],
    company: "Wistia",
    location: "Cambridge, MA",
    startDate: "2017-2-1",
    startDatePretty: "Feb 2017",
    summary: "",
    team: "Customer Happiness",
    title: "Support Engineer II",
  };

  const productManagerWistia = {
    bullets: [],
    company: "Wistia",
    location: "Cambridge, MA",
    startDate: "2015-12-1",
    startDatePretty: "Dec 2015",
    summary: "",
    team: "Platform Team",
    title: "Product Manager",
  };

  const customerChampionWistia = {
    bullets: [],
    company: "Wistia",
    location: "Cambridge, MA",
    startDate: "2013-9-30",
    startDatePretty: "Sep 2013",
    summary: "",
    team: "Customer Happiness",
    title: "Customer Champion",
  };

  const jobs = [
    engineerTwoWistia,
    engineerOneWistia,
    supportEngineerTwoWistia,
    productManagerWistia,
    customerChampionWistia,
  ]
  res.end(JSON.stringify(jobs));
};
