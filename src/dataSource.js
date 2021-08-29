const docsData = [
    {name:"React", imgPath:"/images/react_logo.png"},
    {name:"Vue", imgPath:"/images/vue_logo.png"},
    {name:"Angular", imgPath:"/images/angular_logo.png"},
    {name:"Web Component", imgPath:"/images/web_component_icon.png"},
    {name:"Ember", imgPath:"/images/ember_logo.png"},
    {name:"HTML", imgPath:"/images/html5_logo.png"},
    {name:"Mitril", imgPath:"/images/mitril_logo.png"},
    {name:"Marko", imgPath:"/images/Marko_logo.png"},
    {name:"Svelte", imgPath:"/images/svelte_logo.png"},
    {name:"Riot", imgPath:"/images/riot_logo.png"},
    {name:"Preact", imgPath:"/images/preact_logo.jpg"},
    {name:"Rax", imgPath:"/images/rax_logo.png"}
];

const navLinks = [
    {title:"Docs", url:"#/"}, 
    {title:"Tutorials", url:"#/"}, 
    {title:"Releases", url:"#/"},
    {title:"Addons", url:"#/"}, 
    {title:"Blog", url:"#/"}, 
    {title:"Community", url:"#/"}
];

const contents = [
    {
        contentClass :"content g_margin",
        blk1_h2 : "Develop durable UIs",
        blk1_p :"Storybook provides a sandbox to build UIs in isolation so you can develop hard-to-reach states and edge cases.",
        blk1_img: "/images/img2.png",
        blk2_1_h2:"Build UIs in isolation",
        blk2_1_p:"Implement components and pages without needing to fuss with data, APIs, or business logic.",
        blk2_1_img:"/images/img3.png",
        blk2_2_h2:"Mock hard to reach use cases",
        blk2_2_p:"Render components in key states that are tricky to reproduce in an app.",
        blk2_2_img:"/images/img4.png",
        blk2_3_h2:"Document use cases as stories",
        blk2_3_p:"Save use cases as stories in plain JavaScript to revisit during development, testing, and QA.",
        blk2_3_img:"/images/img5.png",
        blk2_4_h2:"Supercharge your workflow with addons",
        blk2_4_p:"Use addons to customize your workflow, automate testing, and integrate with your favorite tools.",
        blk2_4_img:"/images/img6.png",
        blk3_div:'“Storybook is a powerful frontend workshop environment tool that allows teams to design, build, and organize UI components (and even full screens!) without getting tripped up over business logic and plumbing.”',
        blk3_img1:"/images/img7.png",
        blk3_h4:"Brad Frost",
        blk3_p:"Author of Atomic Desig",
        blk3_img2:"/images/img8.png"
    },
    {
        contentClass :"content g_margin unique-content",
        blk1_h2 : "Test UIs with less effort and no flake",
        blk1_p :"Stories are a pragmatic, reproducible way to keep track of UI edge cases. Write stories once then reuse them to power automated tests.",
        blk1_img: "/images/img9.png",
        blk2_1_h2:"Spot test in a glance",
        blk2_1_p:"Whenever you write a story you get a handy test case. Quickly browse stories to make sure your UI looks right.",
        blk2_1_img:"/images/img10.png",
        blk2_2_h2:"Visual test appearance",
        blk2_2_p:"Pinpoint UI changes down to the pixel by comparing image snapshots of stories.",
        blk2_2_img:"/images/img11.png",
        blk2_3_h2:"Unit test functionality",
        blk2_3_p:"Reuse stories in your unit tests to confirm nuanced functionality.",
        blk2_3_img:"/images/img12.png",
        blk2_4_h2:"Accessibility test",
        blk2_4_p:"Check stories for WCAG and ARIA issues with the A11y addon.",
        blk2_4_img:"/images/img13.png",
        blk3_div:'“The tool we use for editing UI is Storybook. It is the perfect place to make sure your work aligns with designs to the pixel across breakpoints.”',
        blk3_img1:"/images/img14.png",
        blk3_h4:"Adam Neary",
        blk3_p:"Tech lead",
        blk3_img2:"/images/airbnb_logo.png"
    },
    {
        contentClass :"content g_margin",
        blk1_h2 : "Document UI to share with your team",
        blk1_p :"Stories show how UIs actually work not just how they're supposed to work. That makes gathering feedback and reproductions easy.",
        blk1_img: "/images/img15.png",
        blk2_1_h2:"Find any component or page in your app",
        blk2_1_p:"Storybook is a searchable, single source of truth for your UI.",
        blk2_1_img:"/images/img16.png",
        blk2_2_h2:"Get timely feedback during development",
        blk2_2_p:"Publish Storybook online to give your team a universal reference point for feedback.",
        blk2_2_img:"/images/img17.png",
        blk2_3_h2:"Share components across screens and apps",
        blk2_3_p:"Every story is a use case that your team can find and reuse.",
        blk2_3_img:"/images/img18.png",
        blk2_4_h2:"Generate a UI docs automatically",
        blk2_4_p:"Write Markdown/MDX to generate a customizable site for component libraries and design systems with our Docs addon.",
        blk2_4_img:"/images/img19.png",
        blk3_div:'“Storybook has made developing components more streamlined by allowing us to easily include technical documentation within our design system!”',
        blk3_img1:"/images/img20.png",
        blk3_h4:"Taurie Davis",
        blk3_p:"Author of Building Design Systems",
        blk3_img2:"/images/gitlab_logo.png"
    }
];

const mainLogos = [
    {name:"Github", imgPath:"/images/github_logo.png"},
    {name:"Dropbox", imgPath:"/images/dropbox_logo.png"},
    {name:"Airbnb", imgPath:"/images/airbnb_logo.png"},
    {name:"Lya", imgPath:"/images/lya_logo.png"},
    {name:"Mozilla", imgPath:"/images/mozilla_logo.png"},
    {name:"Jet Brains", imgPath:"/images/jet_brains_logo.png"}
]
export { docsData, navLinks, contents, mainLogos }