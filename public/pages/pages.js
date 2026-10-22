import { readPage, constructPage} from '../../templateEngine/customTE.js';

const index = readPage('public/pages/index.html');
const about = readPage('public/pages/about.html');

export const indexPage = constructPage(index, {
    tabTitle: "Landing Page"
});

export const aboutPage = constructPage(about, {
    tabTitle: "About"
});

export function selectPage (pageNumber, options = {}) {
    const getPage = readPage(`public/pages/${pageNumber}.html`);
    const page = constructPage(getPage, options)
    return page;
};